import { ownerEmail } from '../../lib/auth.js';
import { takeMailSlot, verifyTurnstile } from '../../lib/turnstile.js';

const hits = new Map();

function limited(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.at > 60 * 60 * 1000) {
    hits.set(ip, { at: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

function json(body, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const ip = (request.headers.get('CF-Connecting-IP') || '0').slice(0, 45);
  if (!env.CONTENT || !env.RESEND_API_KEY || !env.ADMIN_SESSION_SECRET || !env.TURNSTILE_SECRET) {
    return json({ error: 'El acceso privado no está configurado.' }, 503);
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const human = await verifyTurnstile(request, body.turnstile, env.TURNSTILE_SECRET, 'admin_login');
  if (!human) return json({ error: 'Confirma la casilla de verificación antes de pedir el enlace.' }, 403);
  if (limited(ip)) return json({ error: 'Demasiados intentos. Espera un rato.' }, 429);
  const allowed = await takeMailSlot(env.CONTENT, 'login', 4);
  if (!allowed) return json({ error: 'Hoy ya se han pedido demasiados enlaces. Prueba mañana.' }, 429);

  const tokenBytes = new Uint8Array(32);
  crypto.getRandomValues(tokenBytes);
  const token = [...tokenBytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  await env.CONTENT.put(`login:${token}`, ownerEmail(), { expirationTtl: 60 * 20 });

  const link = `https://alberto.trujillomingorance.com/admin?token=${token}`;
  const from = env.EMAIL_FROM || 'Alberto Trujillo <noreply@trujillomingorance.com>';
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [ownerEmail()],
      subject: 'Enlace para entrar al editor del portfolio',
      text: `Entra en el editor (caduca en 20 minutos):\n\n${link}\n\nSi no has sido tú, ignora este mensaje.`,
      html: `<p>Entra en el editor. El enlace caduca en 20 minutos.</p><p><a href="${link}">${link}</a></p><p>Si no has sido tú, ignora este mensaje.</p>`,
    }),
  });
  if (!response.ok) {
    await env.CONTENT.delete(`login:${token}`);
    return json({ error: 'No se ha podido enviar el enlace.' }, 502);
  }
  return json({ ok: true });
}
