/**
 * Builds the CV from the sections on the page, then asks /api/cv for the PDF
 * after Cloudflare Turnstile accepts the visitor.
 * Adding or removing a job, study, skill group or project with the existing
 * card markup is enough for the next download to include it.
 */
const SITEKEY = '0x4AAAAAAFEQ8tGXLR6myU7h';

function textOf(element) {
  return (element?.innerText || '').replace(/\s+/g, ' ').trim();
}

function shortUrl(href) {
  if (!href) return '';
  try {
    const url = new URL(href);
    return `${url.host}${url.pathname}`.replace(/\/$/, '');
  } catch {
    return '';
  }
}

function collectProfile(email) {
  const lang = document.documentElement.lang === 'en' || document.documentElement.lang === 'ca'
    ? document.documentElement.lang
    : 'es';
  const languages = {
    es: 'Español · Català · English',
    en: 'Spanish · Catalan · English',
    ca: 'Espanyol · Català · English',
  }[lang];

  const experience = [...document.querySelectorAll('#experiencia .job-card')].map((card) => ({
    role: textOf(card.querySelector('h3')),
    company: textOf(card.querySelector('h4')),
    period: textOf(card.querySelector('.job-period')),
    location: textOf(card.querySelector('.job-location')),
    context: textOf(card.querySelector('.job-context')),
    bullets: [...card.querySelectorAll('.job-tasks li')].map(textOf).filter(Boolean),
  }));

  const education = [];
  const credentials = [];
  document.querySelectorAll('#formacion .edu-card').forEach((card) => {
    const entry = {
      title: textOf(card.querySelector('h3')),
      detail: textOf(card.querySelector('h4')),
      school: textOf(card.querySelector('.edu-school')),
      issuer: textOf(card.querySelector('.edu-school')),
      period: textOf(card.querySelector('.edu-period')),
      description: textOf(card.querySelector('.edu-desc')),
      bullets: [...card.querySelectorAll('.edu-tasks li')].map(textOf).filter(Boolean),
    };
    if (card.querySelector('a[href*="learn.microsoft.com"], a[href*="credly"], a[href*="credential"]')) {
      credentials.push(entry);
    } else {
      education.push(entry);
    }
  });

  const skills = [...document.querySelectorAll('#stack .stack-category')].map((heading) => {
    const card = heading.closest('.glass-card');
    return {
      group: textOf(heading),
      items: [...(card?.querySelectorAll('.stack-list li') || [])].map(textOf).filter(Boolean),
    };
  });

  const projects = [...document.querySelectorAll('#proyectos .project-card-mini')].map((card) => ({
    name: textOf(card.querySelector('h3')),
    summary: textOf(card.querySelector('p')),
    url: card.querySelector('a[href]')?.href || '',
  }));

  const extra = [];
  const disability = textOf(document.querySelector('[data-i18n="hero_pill_disability"]'));
  if (disability) extra.push(disability);

  return {
    lang,
    name: textOf(document.querySelector('.hero-name')),
    headline: textOf(document.querySelector('.hero-subtitle')),
    summary: textOf(document.querySelector('.hero-description')),
    location: textOf(document.querySelector('[data-i18n="hero_pill_loc"]')),
    email,
    website: (document.querySelector('link[rel="canonical"]')?.href || 'https://alberto.trujillomingorance.com').replace(/^https?:\/\//, '').replace(/\/$/, ''),
    linkedin: shortUrl(document.querySelector('a[href*="linkedin.com/in/"]')?.href),
    github: shortUrl(document.querySelector('a[href="https://github.com/atrumin16"]')?.href),
    availability: textOf(document.querySelector('[data-i18n="avail_join_status"]')),
    languages,
    extra,
    experience,
    education,
    credentials,
    skills,
    keywords: [...document.querySelectorAll('#stack .tag-cloud .glass-tag')].map(textOf).filter(Boolean),
    projects,
  };
}

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('turnstile'));
    document.head.appendChild(script);
  });
}

export function initCvDownload({ email, t }) {
  const modal = document.getElementById('cv-modal');
  const widgetHost = document.getElementById('cv-turnstile');
  const generate = document.getElementById('cv-generate');
  const error = document.getElementById('cv-error');
  const closeBtn = document.getElementById('cv-modal-close');
  if (!modal || !widgetHost || !generate) return;

  let widgetId = null;
  let token = '';

  const setError = (message) => {
    if (!error) return;
    error.textContent = message || '';
    error.hidden = !message;
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    token = '';
    generate.disabled = true;
    if (widgetId != null && window.turnstile) window.turnstile.reset(widgetId);
  };

  const open = async () => {
    modal.hidden = false;
    document.body.classList.add('modal-open');
    setError('');
    generate.disabled = true;
    try {
      await loadTurnstile();
      const theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      if (widgetId == null) {
        widgetId = window.turnstile.render(widgetHost, {
          sitekey: SITEKEY,
          action: 'download_cv',
          theme,
          callback: (value) => {
            token = value;
            generate.disabled = false;
            setError('');
          },
          'expired-callback': () => {
            token = '';
            generate.disabled = true;
          },
          'error-callback': () => {
            token = '';
            generate.disabled = true;
            setError(t('cv_error'));
          },
        });
      } else {
        window.turnstile.reset(widgetId);
      }
    } catch {
      setError(t('cv_error'));
    }
  };

  document.querySelectorAll('.js-request-cv').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      open();
    });
  });
  closeBtn?.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });

  generate.addEventListener('click', async () => {
    if (!token) return;
    const original = generate.textContent;
    generate.disabled = true;
    generate.textContent = t('cv_working');
    setError('');
    try {
      const response = await fetch('/api/cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, profile: collectProfile(email) }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || t('cv_error'));
      }
      const blob = await response.blob();
      const disposition = response.headers.get('Content-Disposition') || '';
      const match = disposition.match(/filename="([^"]+)"/);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = match?.[1] || 'Alberto-Trujillo-CV.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      close();
    } catch (err) {
      setError(err instanceof Error ? err.message : t('cv_error'));
      if (widgetId != null && window.turnstile) window.turnstile.reset(widgetId);
      token = '';
    } finally {
      generate.textContent = original;
      generate.disabled = !token;
    }
  });
}
