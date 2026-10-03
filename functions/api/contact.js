/**
 * POST /api/contact
 */
import { takeMailSlot, verifyTurnstile } from '../lib/turnstile.js';

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 submissions per minute per IP

function getCleanIP(request) {
  const rawIP = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || '0.0.0.0';
  return rawIP.split(',')[0].trim().slice(0, 45);
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  
  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { timestamp: now, count: 1 });
    return false;
  }
  
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  entry.count++;
  return false;
}

function validateEmail(email) {
  if (typeof email !== 'string' || email.length > 100) return false;
  // Strict RFC 5322 regex without allow-all control characters
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

function cleanText(value, keepNewlines) {
  if (typeof value !== 'string') return '';
  let text = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '');
  text = keepNewlines ? text.replace(/\r\n/g, '\n').replace(/\r/g, '\n') : text.replace(/[\r\n]+/g, ' ');
  return text.trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function getSecurityHeaders(allowedOrigin) {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
  };
}

export async function onRequestPost(context) {
  const { request, env } = context;
  
  // Validate Origin / Referer
  const origin = request.headers.get('Origin') || '';
  const allowedOrigins = [
    'https://alberto.trujillomingorance.com',
    'https://trujillomingorance.com',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
  ];
  
  const effectiveOrigin = allowedOrigins.includes(origin) ? origin : 'https://alberto.trujillomingorance.com';
  const headers = getSecurityHeaders(effectiveOrigin);

  // Rate limiting check
  const clientIP = getCleanIP(request);
  if (isRateLimited(clientIP)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Límite de solicitudes alcanzado. Inténtalo de nuevo en 60 segundos.' }),
      { status: 429, headers }
    );
  }

  try {
    const body = await request.json();

    const human = await verifyTurnstile(request, body.turnstile, env.TURNSTILE_SECRET, 'contact');
    if (!human) {
      return new Response(
        JSON.stringify({ success: false, error: 'Confirma la casilla de verificación.' }),
        { status: 403, headers }
      );
    }

    // Honeypot check (Bots filling hidden fields)
    if (body.website || body.phone_confirm || body.fax) {
      // Return 200 silently to confuse bots
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje procesado correctamente.' }),
        { status: 200, headers }
      );
    }

    const name = cleanText(body.name, false);
    const email = cleanText(body.email || '', false).toLowerCase();
    const message = cleanText(body.message, true);

    // Hard Boundaries Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Todos los campos requeridos deben ser completados.' }),
        { status: 400, headers }
      );
    }

    if (name.length > 100 || email.length > 100 || message.length > 4000) {
      return new Response(
        JSON.stringify({ success: false, error: 'Los datos introducidos exceden la longitud máxima permitida.' }),
        { status: 400, headers }
      );
    }

    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Formato de dirección de correo electrónico no válido.' }),
        { status: 400, headers }
      );
    }

    const allowed = await takeMailSlot(env.CONTENT, 'contact', 12);
    if (!allowed) {
      return new Response(
        JSON.stringify({ success: false, error: 'Hoy ya no se pueden enviar más mensajes. Prueba mañana.' }),
        { status: 429, headers }
      );
    }

    const mailKey = env.RESEND_API_KEY || env.MAIL_KEY;
    const emailFrom = env.EMAIL_FROM || 'Alberto Trujillo <noreply@trujillomingorance.com>';
    const emailTo = 'alberto@trujillomingorance.com';

    if (!mailKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'Servicio de mensajería temporalmente no disponible.' }),
        { status: 503, headers }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const mailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [emailTo],
        reply_to: email,
        subject: `Portfolio: ${name}`.slice(0, 180),
        text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 20px auto; color: #0f172a;">
            <h2 style="margin: 0 0 8px; font-size: 18px;">Nuevo mensaje del portfolio</h2>
            <p style="margin: 0 0 16px; color: #475569;">Responde a este correo para escribir a ${safeName}.</p>
            <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${safeName}<br><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; line-height: 1.6;">${safeMessage}</div>
          </div>
        `,
      }),
    });

    if (mailResponse.ok) {
      return new Response(
        JSON.stringify({ success: true, message: '¡Mensaje transmitido con éxito!' }),
        { status: 200, headers }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, error: 'Error al enviar el mensaje. Inténtalo más tarde.' }),
        { status: 500, headers }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: 'Error interno del servidor.' }),
      { status: 500, headers }
    );
  }
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') || '';
  const allowedOrigins = [
    'https://alberto.trujillomingorance.com',
    'https://trujillomingorance.com',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173'
  ];
  
  const effectiveOrigin = allowedOrigins.includes(origin) ? origin : 'https://alberto.trujillomingorance.com';
  
  return new Response(null, {
    status: 204,
    headers: getSecurityHeaders(effectiveOrigin)
  });
}
