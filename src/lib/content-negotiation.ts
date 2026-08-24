import TurndownService from 'turndown';

export const PRODUCES = ['text/html', 'text/markdown'] as const;
export type Representation = (typeof PRODUCES)[number];

export interface AcceptEntry {
  type: string;
  q: number;
  specificity: number;
  position: number;
}

export function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(',')
    .map((raw, position) => {
      const parts = raw.trim().split(';').map((part) => part.trim());
      const type = (parts[0] ?? '').toLowerCase();
      let q = 1;

      for (const parameter of parts.slice(1)) {
        const [name, value] = parameter.split('=').map((part) => part.trim());
        if (name?.toLowerCase() !== 'q') continue;
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }

      const specificity = type === '*/*' ? 0 : type.endsWith('/*') ? 1 : 2;
      return { type, q, specificity, position };
    })
    .filter((entry) => entry.type.length > 0);
}

function matches(entry: AcceptEntry, candidate: Representation): boolean {
  if (entry.type === '*/*') return true;
  if (entry.type.endsWith('/*')) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

export function preferredRepresentation(header: string | null): Representation | null {
  if (!header) return PRODUCES[0];
  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let best: Representation | null = null;
  let bestQ = -1;
  let bestPosition = Number.POSITIVE_INFINITY;

  for (const candidate of PRODUCES) {
    let matched: AcceptEntry | null = null;

    for (const entry of entries) {
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && entry.position < matched.position)
      ) {
        matched = entry;
      }
    }

    if (!matched || matched.q <= 0) continue;
    if (matched.q > bestQ || (matched.q === bestQ && matched.position < bestPosition)) {
      best = candidate;
      bestQ = matched.q;
      bestPosition = matched.position;
    }
  }

  return best;
}

export function appendNegotiationVary(headers: Headers): void {
  const current = headers.get('Vary');
  const values = current
    ? current.split(',').map((value) => value.trim()).filter(Boolean)
    : [];
  const lowerValues = values.map((value) => value.toLowerCase());

  for (const required of ['Accept', 'Accept-Encoding']) {
    if (!lowerValues.includes(required.toLowerCase())) {
      values.push(required);
      lowerValues.push(required.toLowerCase());
    }
  }

  headers.set('Vary', values.join(', '));
}

export function isDocumentRequest(request: Request): boolean {
  if (request.method !== 'GET' && request.method !== 'HEAD') return false;

  const pathname = new URL(request.url).pathname;
  if (pathname.startsWith('/api/') || pathname.startsWith('/_astro/')) return false;
  if (pathname === '/') return true;
  if (pathname.endsWith('/')) return true;

  const finalSegment = pathname.split('/').at(-1) ?? '';
  return !finalSegment.includes('.') || finalSegment.endsWith('.html');
}

function extractMainContent(html: string): string {
  const match = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  return match?.[1] ?? html;
}

export function htmlToMarkdown(html: string, canonicalUrl: string): string {
  const turndown = new TurndownService({
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
    headingStyle: 'atx',
  });

  turndown.remove(['script', 'style', 'noscript', 'template', 'svg', 'iframe']);
  const content = turndown.turndown(extractMainContent(html)).trim();
  const resources = [
    '## BeemFlow resources',
    '',
    '- [Homepage](https://beemflow.com/)',
    '- [Solutions](https://beemflow.com/solutions/)',
    '- [About](https://beemflow.com/about/)',
    '- [Contact](https://beemflow.com/contact/)',
    '- [Privacy](https://beemflow.com/privacy/)',
    '- [Agent guidance](https://beemflow.com/llms.txt)',
    '- [Sitemap](https://beemflow.com/sitemap.xml)',
  ].join('\n');

  const url = new URL(canonicalUrl);
  const canonicalPath = url.pathname === '/' || url.pathname.includes('.')
    ? url.pathname
    : `${url.pathname.replace(/\/+$/, '')}/`;
  const normalizedCanonicalUrl = new URL(canonicalPath, 'https://beemflow.com').toString();

  return `${content}\n\n---\n\nCanonical URL: ${normalizedCanonicalUrl}\n\n${resources}\n`;
}
