import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';

const origin = 'http://127.0.0.1:4327';
const routes = [
  '/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/startups/',
  '/solutions/',
  '/solutions/manufacturing-quote-to-production/',
  '/solutions/field-services-quote-to-invoice/',
  '/solutions/cleaning-bid-to-inspect/',
  '/solutions/home-services-lead-to-invoice/',
  '/solutions/clinic-lead-to-booking/',
];

const server = spawn('npm', ['run', 'dev', '--', '--host', '127.0.0.1', '--port', '4327'], {
  stdio: ['ignore', 'pipe', 'pipe'],
});

let serverOutput = '';
server.stdout.on('data', (chunk) => { serverOutput += chunk; });
server.stderr.on('data', (chunk) => { serverOutput += chunk; });

async function waitUntilReady() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.status === 200) return;
    } catch {
      // The dev server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Astro dev server did not become ready.\n${serverOutput}`);
}

function assertVary(response) {
  const vary = response.headers.get('vary')?.toLowerCase() ?? '';
  assert.match(vary, /(?:^|,)\s*accept(?:,|$)/);
  assert.match(vary, /(?:^|,)\s*accept-encoding(?:,|$)/);
}

try {
  await waitUntilReady();

  for (const route of routes) {
    const html = await fetch(`${origin}${route}`, { headers: { Accept: 'text/html' } });
    assert.equal(html.status, 200, `${route} HTML status`);
    assert.match(html.headers.get('content-type') ?? '', /^text\/html/);
    assertVary(html);
    const htmlBody = await html.text();

    if (route === '/') {
      const schemas = [...htmlBody.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
        .map((match) => JSON.parse(match[1]));
      const organization = schemas.find((schema) => schema['@type'] === 'Organization');
      assert.equal(organization?.name, 'BeemFlow');
      assert.ok(organization?.description);
      assert.equal(organization?.contactPoint?.['@type'], 'ContactPoint');
      assert.equal(organization?.address?.['@type'], 'PostalAddress');
    }

    const markdown = await fetch(`${origin}${route}`, { headers: { Accept: 'text/markdown' } });
    assert.equal(markdown.status, 200, `${route} Markdown status`);
    assert.equal(markdown.headers.get('content-type'), 'text/markdown; charset=utf-8');
    assertVary(markdown);
    const body = await markdown.text();
    assert.doesNotMatch(body, /<!doctype html>|<html\b/i);
    assert.match(body, /Canonical URL: https:\/\/beemflow\.com\//);
  }

  for (const route of ['/path-that-does-not-exist', '/path-that-does-not-exist/']) {
    const response = await fetch(`${origin}${route}`, {
      headers: { Accept: 'text/markdown' },
      redirect: 'manual',
    });
    assert.equal(response.status, 404, `${route} must be a real 404`);
    assert.equal(response.headers.get('content-type'), 'text/markdown; charset=utf-8');
    assertVary(response);
    const body = await response.text();
    assert.match(body, /Agent guidance/);
    assert.match(body, /Sitemap/);
  }

  const htmlNotFound = await fetch(`${origin}/path-that-does-not-exist/`, {
    headers: { Accept: 'text/html' },
  });
  assert.equal(htmlNotFound.status, 404);
  assert.match(await htmlNotFound.text(), /<meta name="robots" content="noindex,nofollow">/);

  const unsupported = await fetch(origin, { headers: { Accept: 'application/pdf' } });
  assert.equal(unsupported.status, 406);
  assertVary(unsupported);

  for (const [route, expectedType] of [
    ['/llms.txt', 'text/plain'],
    ['/robots.txt', 'text/plain'],
    ['/sitemap.xml', 'text/xml'],
  ]) {
    const response = await fetch(`${origin}${route}`);
    assert.equal(response.status, 200, `${route} status`);
    assert.match(response.headers.get('content-type') ?? '', new RegExp(`^${expectedType}`));
  }

  const apiGet = await fetch(`${origin}/api/ops-lead`);
  assert.equal(apiGet.status, 405);
  const apiOptions = await fetch(`${origin}/api/ops-lead`, { method: 'OPTIONS' });
  assert.equal(apiOptions.status, 204);

  await access('dist/client/sitemap-index.xml');
  const sitemap = await readFile('dist/client/sitemap-0.xml', 'utf8');
  for (const route of routes) {
    assert.match(sitemap, new RegExp(`<loc>https://beemflow\\.com${route.replaceAll('/', '\\/')}</loc>`));
  }

  console.log(`Verified ${routes.length} HTML routes, Markdown variants, 404 recovery, API methods, and machine-readable files.`);
} finally {
  server.kill('SIGTERM');
  await new Promise((resolve) => {
    const stop = spawn('npx', ['astro', 'dev', 'stop'], { stdio: 'ignore' });
    stop.on('exit', resolve);
  });
}
