import { defineMiddleware } from 'astro:middleware';
import {
  appendNegotiationVary,
  htmlToMarkdown,
  isDocumentRequest,
  preferredRepresentation,
} from './lib/content-negotiation';

export const onRequest = defineMiddleware(async ({ request }, next) => {
  if (!isDocumentRequest(request)) return next();

  const representation = preferredRepresentation(request.headers.get('accept'));
  if (representation === null) {
    const headers = new Headers({ 'Content-Type': 'text/plain; charset=utf-8' });
    appendNegotiationVary(headers);
    return new Response('Not Acceptable\n\nAvailable: text/html, text/markdown\n', {
      status: 406,
      headers,
    });
  }

  const response = await next();
  const headers = new Headers(response.headers);
  appendNegotiationVary(headers);

  const contentType = headers.get('Content-Type') ?? '';
  const canTransform =
    representation === 'text/markdown' &&
    contentType.toLowerCase().includes('text/html') &&
    response.status !== 204 &&
    response.status !== 304 &&
    (response.status < 300 || response.status >= 400);

  if (!canTransform) {
    return new Response(request.method === 'HEAD' ? null : response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  headers.delete('Content-Length');
  headers.delete('Content-Encoding');
  headers.delete('ETag');

  const body = request.method === 'HEAD'
    ? null
    : htmlToMarkdown(await response.text(), request.url);

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
