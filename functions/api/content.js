import { defaultContent } from '../lib/default-content.js';

export async function onRequestGet(context) {
  let saved = null;
  if (context.env.CONTENT) {
    saved = await context.env.CONTENT.get('site', 'json');
  }
  return Response.json({
    custom: Boolean(saved),
    content: saved || defaultContent,
  }, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
