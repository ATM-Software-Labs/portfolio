const PRODUCTION_HOST = 'alberto.trujillomingorance.com';
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);

function acceptedHostname(request, issuedFor) {
  const host = new URL(request.url).hostname;
  if (host === PRODUCTION_HOST) return issuedFor === PRODUCTION_HOST;
  if (LOCAL_HOSTS.has(host)) return LOCAL_HOSTS.has(issuedFor);
  return false;
}

export async function verifyTurnstile(request, token, secret, action) {
  if (typeof token !== 'string' || token.length < 10 || token.length > 2048 || !secret) return false;
  const ip = (request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || '').split(',')[0].trim();
  let result;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip.slice(0, 45),
      }),
    });
    if (!response.ok) return false;
    result = await response.json();
  } catch {
    return false;
  }
  return result.success === true
    && result.action === action
    && acceptedHostname(request, result.hostname);
}

export async function takeMailSlot(kv, bucket, max) {
  if (!kv) return false;
  const day = new Date().toISOString().slice(0, 10);
  const key = `quota:${bucket}:${day}`;
  const current = Number(await kv.get(key) || '0');
  if (!Number.isFinite(current) || current >= max) return false;
  await kv.put(key, String(current + 1), { expirationTtl: 60 * 60 * 48 });
  return true;
}
