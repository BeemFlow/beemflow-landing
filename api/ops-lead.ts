import type { VercelRequest, VercelResponse } from '@vercel/node';

const ATTIO_API_KEY = process.env.ATTIO_API_KEY ?? '';
const ATTIO_BASE = 'https://api.attio.com/v2';

interface FormPayload {
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

  if (!payload.company || !payload.revenue || !payload.team_size || !payload.pain) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // 1. Assert (upsert) the company in Attio
    const domain = domainFromUrl(payload.website);

    const companyValues: Record<string, unknown> = {
      name: [{ value: payload.company }],
    };

    if (domain) {
      companyValues.domains = [{ domain }];
    }

    // PUT to assert (upsert by domain) or POST to create (no domain to match on)
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

    // 2. Create a note on the company with form details
    const noteLines = [
      `## Ops Assessment Lead`,
      '',
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

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Attio error:', err);
    return res.status(502).json({ error: 'Failed to save lead' });
  }
}
