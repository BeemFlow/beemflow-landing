import type { VercelRequest, VercelResponse } from '@vercel/node';

const ATTIO_API_KEY = process.env.ATTIO_API_KEY ?? '';
const ATTIO_BASE = 'https://api.attio.com/v2';
const SLACK_WEBHOOK_URL = process.env.SLACK_OPS_WEBHOOK_URL ?? '';

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

async function attioFetch(method: 'POST' | 'PUT', path: string, body: unknown) {
  const res = await fetch(`${ATTIO_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${ATTIO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Attio ${path} failed (${res.status}): ${text}`);
  }

  return res.json();
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!ATTIO_API_KEY) {
    console.error('ATTIO_API_KEY is not set');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const payload = req.body as FormPayload;

  if (!payload.name || !payload.email || !payload.company || !payload.revenue || !payload.team_size || !payload.pain) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Run Attio and Slack independently — neither blocks the other
  const attioPromise = (async () => {
    if (!ATTIO_API_KEY) return;

    // 1. Assert (upsert) the company
    const domain = domainFromUrl(payload.website);
    const companyValues: Record<string, unknown> = {
      name: [{ value: payload.company }],
    };
    if (domain) {
      companyValues.domains = [{ domain }];
    }

    const companyRes = domain
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
      companyRes.data?.id?.record_id ?? companyRes.data?.id;

    // 2. Assert (upsert) the person, linked to company
    const nameParts = payload.name.trim().split(/\s+/);
    const firstName = nameParts[0] ?? '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const fullName = payload.name.trim();

    await attioFetch(
      'PUT',
      '/objects/people/records?matching_attribute=email_addresses',
      {
        data: {
          values: {
            email_addresses: [{ email_address: payload.email }],
            name: [{ first_name: firstName, last_name: lastName, full_name: fullName }],
            ...(companyRecordId
              ? { company: [{ target_object: 'companies', target_record_id: companyRecordId }] }
              : {}),
          },
        },
      },
    );

    // 3. Create a note on the company
    const noteLines = [
      `## Ops Assessment Lead`,
      '',
      `**Contact:** ${payload.name} (${payload.email})`,
      `**Company:** ${payload.company}`,
      payload.website ? `**Website:** ${payload.website}` : null,
      `**Revenue:** ${payload.revenue}`,
      payload.locations ? `**Locations:** ${payload.locations}` : null,
      `**Team size (ops/sales):** ${payload.team_size}`,
      '',
      `## What feels most broken or manual`,
      '',
      payload.pain,
    ]
      .filter(Boolean)
      .join('\n');

    if (companyRecordId) {
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
  })().catch((err) => console.error('Attio error:', err));

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
  })().catch((err) => console.error('Slack error:', err));

  await Promise.allSettled([attioPromise, slackPromise]);

  return res.status(200).json({ ok: true });
}
