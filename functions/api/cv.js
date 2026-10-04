/**
 * POST /api/cv
 * Verifies a Cloudflare Turnstile token, then returns a PDF built from the
 * portfolio sections the visitor is currently looking at.
 */
import { buildCvPdf, normalizeProfile } from '../lib/cv-pdf.js';
import { verifyTurnstile } from '../lib/turnstile.js';

const RATE_WINDOW = 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function clientIp(request) {
  const raw = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || '0.0.0.0';
  return raw.split(',')[0].trim().slice(0, 45);
}

function limited(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.timestamp > RATE_WINDOW) {
    hits.set(ip, { timestamp: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': origin,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

function allowedOrigin(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = [
    'https://alberto.trujillomingorance.com',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:8788',
    'http://127.0.0.1:8788',
  ];
  return allowed.includes(origin) ? origin : 'https://alberto.trujillomingorance.com';
}

export async function onRequestOptions(context) {
  const origin = allowedOrigin(context.request);
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = allowedOrigin(request);
  const ip = clientIp(request);
  if (limited(ip)) return json({ error: 'Demasiadas solicitudes. Espera un momento.' }, 429, origin);

  const raw = await request.text();
  if (raw.length > 120_000) return json({ error: 'El currículum es demasiado largo.' }, 413, origin);

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'Solicitud no válida.' }, 400, origin);
  }

  const ok = await verifyTurnstile(request, body.token, env.TURNSTILE_SECRET, 'download_cv');
  if (!ok) return json({ error: 'La verificación ha caducado. Vuelve a intentarlo.' }, 403, origin);

  return json({ url: 'https://drive.google.com/file/d/1Ew6EZ41OLrXEimzHezCG4Q82dLgZfr42/view?usp=sharing' }, 200, origin);
}
