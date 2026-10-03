import { clearCookie, createSession, isSecure, ownerEmail, readSession, sessionCookie } from '../../lib/auth.js';

function json(body, status = 200, cookie) {
  const headers = new Headers({ 'Cache-Control': 'no-store', 'Content-Type': 'application/json; charset=utf-8' });
  if (cookie) headers.append('Set-Cookie', cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

export async function onRequestGet(context) {
  const session = await readSession(context.request, context.env.ADMIN_SESSION_SECRET);
  if (!session) return json({ ok: false }, 401);
  return json({ ok: true, email: session.email });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.CONTENT || !env.ADMIN_SESSION_SECRET) return json({ error: 'Acceso no configurado.' }, 503);
  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Solicitud no válida.' }, 400);
  }
  const token = typeof body.token === 'string' ? body.token : '';
  if (!/^[a-f0-9]{64}$/.test(token)) return json({ error: 'Enlace no válido.' }, 400);
  const email = await env.CONTENT.get(`login:${token}`);
  if (email !== ownerEmail()) return json({ error: 'El enlace ha caducado. Pide otro.' }, 401);
  await env.CONTENT.delete(`login:${token}`);
  const session = await createSession(env.ADMIN_SESSION_SECRET, email);
  return json({ ok: true }, 200, sessionCookie(session, isSecure(request)));
}

export async function onRequestDelete(context) {
  return json({ ok: true }, 200, clearCookie(isSecure(context.request)));
}
