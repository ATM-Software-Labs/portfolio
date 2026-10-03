const OWNER = 'alberto@trujillomingorance.com';
const COOKIE = 'portfolio_session';
const SESSION_MS = 14 * 24 * 60 * 60 * 1000;

export function ownerEmail() {
  return OWNER;
}

function bytesToBase64Url(bytes) {
  let text = '';
  for (const byte of bytes) text += String.fromCharCode(byte);
  return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlToBytes(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

export async function createSession(secret, email) {
  const exp = Date.now() + SESSION_MS;
  const payload = bytesToBase64Url(new TextEncoder().encode(JSON.stringify({ email, exp })));
  const signature = await crypto.subtle.sign('HMAC', await hmacKey(secret), new TextEncoder().encode(payload));
  return `${payload}.${bytesToBase64Url(new Uint8Array(signature))}`;
}

export async function readSession(request, secret) {
  if (!secret) return null;
  const header = request.headers.get('Cookie') || '';
  const pair = header.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${COOKIE}=`));
  if (!pair) return null;
  const token = decodeURIComponent(pair.slice(COOKIE.length + 1));
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;
  const valid = await crypto.subtle.verify(
    'HMAC',
    await hmacKey(secret),
    base64UrlToBytes(signature),
    new TextEncoder().encode(payload),
  );
  if (!valid) return null;
  try {
    const data = JSON.parse(new TextDecoder().decode(base64UrlToBytes(payload)));
    if (data.email !== OWNER || !Number.isFinite(data.exp) || data.exp < Date.now()) return null;
    return data;
  } catch {
    return null;
  }
}

export function sessionCookie(token, secure) {
  const flags = [`${COOKIE}=${encodeURIComponent(token)}`, 'HttpOnly', 'Path=/', 'SameSite=Lax', `Max-Age=${SESSION_MS / 1000}`];
  if (secure) flags.push('Secure');
  return flags.join('; ');
}

export function clearCookie(secure) {
  const flags = [`${COOKIE}=`, 'HttpOnly', 'Path=/', 'SameSite=Lax', 'Max-Age=0'];
  if (secure) flags.push('Secure');
  return flags.join('; ');
}

export function isSecure(request) {
  return new URL(request.url).protocol === 'https:';
}
