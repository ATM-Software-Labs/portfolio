import { mountTurnstile, resetTurnstile, executeTurnstile } from './turnstile-widget.js';

export function initCvDownload({ t }) {
  const buttons = document.querySelectorAll('.js-request-cv');
  if (buttons.length === 0) return;

  const widgetHost = document.createElement('div');
  widgetHost.style.position = 'absolute';
  widgetHost.style.top = '-9999px';
  widgetHost.style.left = '-9999px';
  document.body.appendChild(widgetHost);

  let widgetId = null;
  let pendingResolve = null;
  let pendingReject = null;
  let cachedToken = '';

  mountTurnstile(widgetHost, 'download_cv', {
    onToken: (token) => {
      cachedToken = token;
      if (pendingResolve) {
        pendingResolve(token);
        pendingResolve = null;
        pendingReject = null;
      }
    },
    onExpire: () => {
      cachedToken = '';
    },
    onError: () => {
      cachedToken = '';
      if (pendingReject) {
        pendingReject(new Error(t('cv_error')));
        pendingResolve = null;
        pendingReject = null;
      }
    }
  }).then(id => {
    widgetId = id;
  });

  buttons.forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      if (widgetId == null) {
        alert(t('cv_error'));
        return;
      }

      const originalHtml = button.innerHTML;
      button.style.pointerEvents = 'none';
      button.style.opacity = '0.7';
      button.textContent = t('cv_working');

      try {
        let tokenPromise;
        if (cachedToken) {
          tokenPromise = Promise.resolve(cachedToken);
        } else {
          tokenPromise = new Promise((resolve, reject) => {
            pendingResolve = resolve;
            pendingReject = reject;
            setTimeout(() => {
              if (pendingReject) {
                pendingReject(new Error(t('cv_error')));
                pendingResolve = null;
                pendingReject = null;
              }
            }, 30000);
          });
          executeTurnstile(widgetId);
        }

        const token = await tokenPromise;
        cachedToken = ''; // Consume the token

        const response = await fetch('/api/cv', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || t('cv_error'));
        }

        const data = await response.json();
        if (data.url) {
          window.open(data.url, '_blank');
        } else {
          throw new Error(t('cv_error'));
        }

      } catch (err) {
        alert(err instanceof Error ? err.message : t('cv_error'));
      } finally {
        button.innerHTML = originalHtml;
        button.style.pointerEvents = 'auto';
        button.style.opacity = '1';
        resetTurnstile(widgetId);
      }
    });
  });
}
