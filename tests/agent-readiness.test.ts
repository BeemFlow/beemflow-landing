import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  appendNegotiationVary,
  htmlToMarkdown,
  isDocumentRequest,
  preferredRepresentation,
} from '../src/lib/content-negotiation.ts';
import { organizationSchema } from '../src/data/schema.ts';
import { TRUST_PAGES } from '../src/data/trust.ts';

test('content negotiation honors order, q-values, wildcards, and explicit rejection', () => {
  const cases: Array<[string | null, string | null]> = [
    [null, 'text/html'],
    ['*/*', 'text/html'],
    ['text/markdown', 'text/markdown'],
    ['text/markdown, text/html;q=0.8', 'text/markdown'],
    ['text/html;q=0.9, text/markdown;q=0.7', 'text/html'],
    ['text/markdown;q=0, */*;q=1', 'text/html'],
    ['text/html;q=0, text/markdown;q=0', null],
    ['application/pdf', null],
  ];

  for (const [accept, expected] of cases) {
    assert.equal(preferredRepresentation(accept), expected, accept ?? 'missing Accept');
  }
});

test('negotiated responses vary by Accept and Accept-Encoding without duplicates', () => {
  const headers = new Headers({ Vary: 'Origin, Accept-Encoding' });
  appendNegotiationVary(headers);
  appendNegotiationVary(headers);
  assert.equal(headers.get('Vary'), 'Origin, Accept-Encoding, Accept');
});

test('negotiation only applies to public document requests', () => {
  assert.equal(isDocumentRequest(new Request('https://beemflow.com/about/')), true);
  assert.equal(isDocumentRequest(new Request('https://beemflow.com/about')), true);
  assert.equal(isDocumentRequest(new Request('https://beemflow.com/llms.txt')), false);
  assert.equal(isDocumentRequest(new Request('https://beemflow.com/api/ops-lead')), false);
  assert.equal(isDocumentRequest(new Request('https://beemflow.com/', { method: 'POST' })), false);
});

test('HTML conversion returns clean Markdown and canonical recovery resources', () => {
  const markdown = htmlToMarkdown(
    '<html><head><style>bad</style></head><body><main><h1>Hello</h1><p>Useful content.</p><script>bad()</script></main></body></html>',
    'http://localhost:4321/about',
  );

  assert.match(markdown, /^# Hello/m);
  assert.match(markdown, /Useful content\./);
  assert.match(markdown, /Canonical URL: https:\/\/beemflow\.com\/about\//);
  assert.match(markdown, /Agent guidance/);
  assert.doesNotMatch(markdown, /<html|bad\(\)|<style/i);
});

test('every trust page contains substantial, auditable content', () => {
  for (const [slug, page] of Object.entries(TRUST_PAGES)) {
    const content = [page.intro, ...page.sections.flatMap((section) => section.paragraphs)].join(' ');
    assert.ok(content.length >= 500, `${slug} only has ${content.length} characters`);
  }
});

test('Organization JSON-LD includes identity, contact, and postal address fields', () => {
  assert.equal(organizationSchema['@type'], 'Organization');
  assert.equal(organizationSchema.name, 'BeemFlow');
  assert.ok(organizationSchema.description.length > 80);
  assert.equal(organizationSchema.url, 'https://beemflow.com/');
  assert.equal(organizationSchema.contactPoint['@type'], 'ContactPoint');
  assert.match(organizationSchema.contactPoint.email, /@beemflow\.com$/);
  assert.equal(organizationSchema.address['@type'], 'PostalAddress');
  assert.equal(organizationSchema.address.addressCountry, 'US');
});

test('llms.txt contains specific when-to-use and contact instructions', async () => {
  const llms = await readFile(new URL('../public/llms.txt', import.meta.url), 'utf8');
  assert.match(llms, /^## When to Use BeemFlow$/m);
  assert.match(llms, /^### How an agent should make contact$/m);
  assert.match(llms, /Do not use BeemFlow for generic AI strategy presentations/);
  assert.match(llms, /https:\/\/beemflow\.com\/contact\//);
});

test('custom 404 provides agent recovery links', async () => {
  const page = await readFile(new URL('../src/pages/404.astro', import.meta.url), 'utf8');
  assert.match(page, /404 \/ Not found/);
  assert.match(page, /href="\/llms\.txt"/);
  assert.match(page, /href="\/sitemap\.xml"/);
  assert.match(page, /noindex/);
});
