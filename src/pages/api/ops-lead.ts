import type { APIRoute } from 'astro';

const ATTIO_API_KEY = process.env.ATTIO_API_KEY ?? '';
const ATTIO_BASE = 'https://api.attio.com/v2';
const SLACK_WEBHOOK_URL = process.env.SLACK_OPS_WEBHOOK_URL ?? '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

interface FormPayload {
  name: string;
  email: string;
  company: string;
  website?: string;
  revenue: string;
  locations?: string;
  team_size: string;
  pain: string;
}

function json(data: unknown, status: number): Response {
  return Response.json(data, { status, headers: corsHeaders });
}

async function attioFetch(method: 'POST' | 'PUT', path: string, body: unknown) {
  const response = await fetch(`${ATTIO_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${ATTIO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Attio ${path} failed (${response.status}): ${text}`);
  }

  return response.json();
}

function domainFromUrl(raw?: string): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw.startsWith('http') ? raw : `https://${raw}`);
    return url.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

export const OPTIONS: APIRoute = async () =>
  new Response(null, { status: 204, headers: corsHeaders });

export const POST: APIRoute = async ({ request }) => {
  if (!ATTIO_API_KEY) {
    console.error('ATTIO_API_KEY is not set');
    return json({ error: 'Server misconfigured' }, 500);
  }

  let payload: FormPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  if (!payload.name || !payload.email || !payload.company || !payload.revenue || !payload.team_size || !payload.pain) {
    return json({ error: 'Missing required fields' }, 400);
  }

  const attioPromise = (async () => {
    const domain = domainFromUrl(payload.website);
    const companyValues: Record<string, unknown> = {
      name: [{ value: payload.company }],
    };
    if (domain) companyValues.domains = [{ domain }];

    const companyResponse = domain
      ? await attioFetch(
          'PUT',
          '/objects/companies/records?matching_attribute=domains',
          { data: { values: companyValues } },
        )
      : await attioFetch(
          'POST',
          '/objects/companies/records',
          { data: { values: companyValues } },
        );

    const companyRecordId: string =
      companyResponse.data?.id?.record_id ?? companyResponse.data?.id;
    const nameParts = payload.name.trim().split(/\s+/);
    const firstName = nameParts[0] ?? '';
    const lastName = nameParts.slice(1).join(' ');

    await attioFetch(
      'PUT',
      '/objects/people/records?matching_attribute=email_addresses',
      {
        data: {
          values: {
            email_addresses: [{ email_address: payload.email }],
            name: [{ first_name: firstName, last_name: lastName, full_name: payload.name.trim() }],
            ...(companyRecordId
              ? { company: [{ target_object: 'companies', target_record_id: companyRecordId }] }
              : {}),
          },
        },
      },
    );

    if (companyRecordId) {
      const noteLines = [
        '## Ops Assessment Lead',
        '',
        `**Contact:** ${payload.name} (${payload.email})`,
        `**Company:** ${payload.company}`,
        payload.website ? `**Website:** ${payload.website}` : null,
        `**Revenue:** ${payload.revenue}`,
        payload.locations ? `**Locations:** ${payload.locations}` : null,
        `**Team size (ops/sales):** ${payload.team_size}`,
        '',
        '## What feels most broken or manual',
        '',
        payload.pain,
      ].filter(Boolean).join('\n');

      await attioFetch('POST', '/notes', {
        data: {
          parent_object: 'companies',
          parent_record_id: companyRecordId,
          title: `Ops lead: ${payload.company}`,
          format: 'markdown',
          content: noteLines,
        },
      });
    }
  })().catch((error) => console.error('Attio error:', error));

  const slackPromise = (async () => {
    if (!SLACK_WEBHOOK_URL) return;

    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company,
        website: payload.website ?? '',
        revenue: payload.revenue,
        locations: payload.locations ?? '',
        team_size: payload.team_size,
        pain: payload.pain.slice(0, 500),
      }),
    });
  })().catch((error) => console.error('Slack error:', error));

  await Promise.allSettled([attioPromise, slackPromise]);
  return json({ ok: true }, 200);
};

export const ALL: APIRoute = async () => json({ error: 'Method not allowed' }, 405);
