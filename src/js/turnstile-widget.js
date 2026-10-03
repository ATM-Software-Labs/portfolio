const SITEKEY = '0x4AAAAAAFEQ8tGXLR6myU7h';

function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (loadScript.pending) return loadScript.pending;
  loadScript.pending = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('No se ha podido cargar la verificación.'));
    document.head.appendChild(script);
  });
  return loadScript.pending;
}

export function mountTurnstile(element, action, handlers) {
  if (!element) return Promise.resolve(null);
  return loadScript().then(() => window.turnstile.render(element, {
    sitekey: SITEKEY,
    action,
    appearance: 'interaction-only',
    execution: 'execute',
    retry: 'never',
    theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
    callback: (token) => handlers.onToken?.(token),
    'expired-callback': () => handlers.onExpire?.(),
    'error-callback': () => handlers.onError?.(),
  }));
}

export function executeTurnstile(widgetId) {
  if (widgetId != null && window.turnstile) window.turnstile.execute(widgetId);
}

export function resetTurnstile(widgetId) {
  if (widgetId != null && window.turnstile) window.turnstile.reset(widgetId);
}
