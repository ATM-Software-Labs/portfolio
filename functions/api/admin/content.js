import { readSession } from '../../lib/auth.js';
import { defaultContent } from '../../lib/default-content.js';
import { sanitizeContent } from '../../lib/content-model.js';

function json(body, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

async function requireSession(context) {
  const session = await readSession(context.request, context.env.ADMIN_SESSION_SECRET);
  if (!session) return json({ error: 'Sesión caducada. Vuelve a entrar.' }, 401);
  return null;
}

export async function onRequestGet(context) {
  const denied = await requireSession(context);
  if (denied) return denied;
  const saved = context.env.CONTENT ? await context.env.CONTENT.get('site', 'json') : null;
  return json({ custom: Boolean(saved), content: saved || defaultContent });
}

export async function onRequestPut(context) {
  const denied = await requireSession(context);
  if (denied) return denied;
  if (!context.env.CONTENT) return json({ error: 'Almacenamiento no configurado.' }, 503);
  const origin = context.request.headers.get('Origin') || '';
  const allowed = ['https://alberto.trujillomingorance.com', 'http://localhost:3000', 'http://127.0.0.1:3000'];
  if (!allowed.includes(origin)) return json({ error: 'Origen no permitido.' }, 403);
  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: 'El contenido no es válido.' }, 400);
  }
  const content = sanitizeContent(body.content || body);
  await context.env.CONTENT.put('site', JSON.stringify(content));
  return json({ ok: true });
}
