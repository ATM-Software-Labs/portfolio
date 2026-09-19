/**
 * POST /api/contact
 */

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

function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Strip control characters
    .replace(/[\r\n]/g, ' ')                      // Prevent CRLF injection
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
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
    
    // Honeypot check (Bots filling hidden fields)
    if (body.website || body.phone_confirm || body.fax) {
      // Return 200 silently to confuse bots
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje procesado correctamente.' }),
        { status: 200, headers }
      );
    }

    const name = sanitizeString(body.name);
    const email = (body.email || '').trim().toLowerCase();
    const message = sanitizeString(body.message);

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

    const mailKey = env.MAIL_KEY || env.RESEND_API_KEY;
    const emailFrom = env.EMAIL_FROM || 'Alberto Trujillo <noreply@trujillomingorance.com>';
    const emailTo = env.EMAIL_TO || 'alberto@trujillomingorance.com';
    const mailEndpoint = env.MAIL_ENDPOINT || 'https://api.resend.com/emails';

    if (!mailKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'Servicio de mensajería temporalmente no disponible.' }),
        { status: 503, headers }
      );
    }

    const mailResponse = await fetch(mailEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [emailTo],
        reply_to: email,
        subject: `Contacto: ${name}`,
        text: `${name} <${email}>\n\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 20px auto; background-color: #0f172a; color: #f8fafc; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1e293b; padding: 20px; border-bottom: 2px solid #3b82f6;">
              <h2 style="color: #3b82f6; margin: 0; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">🛡️ Formulario de Contacto Seguro</h2>
              <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 12px;">Transmisión verificada desde alberto.trujillomingorance.com</p>
            </div>
            
            <div style="padding: 24px;">
              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: bold;">Remitente</p>
              <p style="margin: 0 0 16px 0; color: #f8fafc; font-size: 14px;"><strong>Nombre:</strong> ${name}<br><strong>Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
              
              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: bold;">Contenido del Mensaje</p>
              <div style="background-color: #020617; border: 1px solid #1e293b; border-radius: 6px; padding: 16px; font-size: 14px; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="background-color: #1e293b; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: space-between;">
              <span>IP Origen: ${clientIP}</span> | <span>Timestamp: ${new Date().toISOString()}</span>
            </div>
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
