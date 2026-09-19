/**
 * Shell del portfolio. Terminal y filtros viven en ./terminal.js.
 */
import '../css/styles.css';
import { initTerminal, initProjectFilters } from './terminal.js';

const EMAIL = 'alberto@trujillomingorance.com';

const LEGAL = {
  privacy: `
    <h3 class="mb-3 text-xl font-semibold">Política de privacidad</h3>
    <p class="mb-3 text-sm text-muted">Responsable: Alberto Trujillo Mingorance (${EMAIL}).</p>
    <p class="mb-3 text-sm text-muted">De conformidad con el RGPD (UE 2016/679) y la LOPDGDD 3/2018, los datos del formulario de contacto se tratan únicamente para responder a consultas profesionales y propuestas laborales.</p>
    <p class="text-sm text-muted">No se ceden a terceros ni se usan con fines comerciales. Puedes ejercer acceso, rectificación, supresión y oposición escribiendo a ${EMAIL}.</p>
  `,
  terms: `
    <h3 class="mb-3 text-xl font-semibold">Términos y condiciones</h3>
    <p class="mb-3 text-sm text-muted">Este sitio es el portfolio profesional de Alberto Trujillo Mingorance. El contenido, el código y el diseño están protegidos.</p>
    <p class="text-sm text-muted">Queda prohibida la reproducción no autorizada. La infraestructura opera sobre Cloudflare Pages con cifrado TLS.</p>
  `,
  compliance: `
    <h3 class="mb-3 text-xl font-semibold">Certificado de discapacidad &gt;33%</h3>
    <p class="mb-3 text-sm text-muted">Alberto Trujillo Mingorance cuenta con un <strong class="text-ink">certificado oficial de discapacidad superior al 33%</strong>.</p>
    <ul class="list-disc space-y-2 pl-5 text-sm text-muted">
      <li>Incentivos a la contratación indefinida o temporal.</li>
      <li>Bonificaciones de hasta 4.500 €/año en cuotas patronales (Ley 43/2006).</li>
      <li>Cumplimiento de la cuota de reserva del 2% (LISMI / LGD) en empresas de 50 o más trabajadores.</li>
    </ul>
  `,
};

function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

function showToast(message, type = 'ok') {
  const root = document.getElementById('toast-container');
  if (!root) return;
  const toast = document.createElement('div');
  toast.className = type === 'error' ? 'toast is-error' : 'toast';
  toast.textContent = message;
  root.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function initNavigation() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('nav-backdrop');
  const topBtn = document.getElementById('back-to-top');
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    drawer?.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }
  };

  toggle?.addEventListener('click', () => {
    setOpen(!drawer?.classList.contains('is-open'));
  });
  backdrop?.addEventListener('click', () => setOpen(false));
  document.querySelectorAll('[data-nav-close]').forEach((btn) => {
    btn.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('[data-nav-link]')];

  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('shadow-lg', y > 12);
    if (topBtn) topBtn.classList.toggle('hidden', y < 400);

    let current = sections[0]?.id || '';
    sections.forEach((section) => {
      if (y >= section.offsetTop - 140) current = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
  onScroll();

  topBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initModals() {
  const overlay = document.getElementById('legal-modal');
  const content = document.getElementById('modal-content');
  if (!overlay || !content) return;

  const close = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-modal]');
    if (trigger) {
      event.preventDefault();
      const key = trigger.getAttribute('data-modal');
      content.innerHTML = LEGAL[key] || '';
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      return;
    }
    if (event.target === overlay || event.target.closest('[data-modal-close]')) {
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function initContact() {
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn && copyBtn.dataset.bound !== '1') {
    copyBtn.dataset.bound = '1';
    let copyTimer = 0;
    const label = copyBtn.textContent;
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        copyBtn.textContent = '¡Copiado!';
        window.clearTimeout(copyTimer);
        copyTimer = window.setTimeout(() => {
          copyBtn.textContent = label;
        }, 2000);
        showToast('¡Copiado!');
      } catch {
        copyBtn.textContent = EMAIL;
      }
    });
  }

  const form = document.getElementById('contact-form');
  if (!form) return;
  const feedback = document.getElementById('form-feedback');
  const submit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const original = submit ? submit.textContent : '';
    if (submit) {
      submit.disabled = true;
      submit.textContent = 'Enviando…';
    }
    if (feedback) {
      feedback.textContent = '';
      feedback.classList.add('hidden');
    }

    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'No se pudo enviar el mensaje.');
      }
      form.reset();
      if (feedback) {
        feedback.textContent = 'Mensaje enviado correctamente.';
        feedback.classList.remove('hidden', 'text-red-300');
        feedback.classList.add('text-ok');
      }
      showToast('Mensaje enviado correctamente');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al enviar. Inténtalo de nuevo.';
      if (feedback) {
        feedback.textContent = message;
        feedback.classList.remove('hidden', 'text-ok');
        feedback.classList.add('text-red-300');
      }
      showToast(message, 'error');
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = original;
      }
    }
  });
}

function initTheme() {
  const btn = document.getElementById('theme-toggle');
  btn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
  });
}

ready(() => {
  if (window.__portfolioAppReady) return;
  window.__portfolioAppReady = true;
  try { initNavigation(); } catch (error) { console.error('[nav]', error); }
  try { initTheme(); } catch (error) { console.error('[theme]', error); }
  try { initTerminal(); } catch (error) { console.error('[terminal]', error); }
  try { initProjectFilters(); } catch (error) { console.error('[filters]', error); }
  try { initContact(); } catch (error) { console.error('[contact]', error); }
  try { initModals(); } catch (error) { console.error('[modals]', error); }
});
