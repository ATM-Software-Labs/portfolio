/**
 * i18n ES/EN, tema, nav, contacto. Terminal/filtros: ./terminal.js
 */
import '../css/styles.css';
import { initTerminal, initProjectFilters } from './terminal.js';

const EMAIL = 'alberto@trujillomingorance.com';
const LANG_KEY = 'lang';
const THEME_KEY = 'theme';

const translations = {
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    nav_experience: 'Experience',
    nav_stack: 'Tech Stack',
    nav_projects: 'Projects',
    nav_education: 'Education',
    nav_contact: 'Contact',
    theme_aria: 'Cambiar tema',
    menu_aria: 'Abrir menú',
    avail_badge: 'Immediate Availability',
    hero_role: 'Systems & Cloud Administrator | Cybersecurity · Cloud/IAM',
    hero_tag1: 'ASIR + SMR',
    hero_tag3: 'Cybersecurity / Web3',
    hero_lead: 'Ex-SecOps en Attestto y Ex-Minsait (Indra). Administración de sistemas, identidades y accesos, seguridad perimetral y Hardening. ASIR (perfil ciberseguridad) + SMR. Incorporación inmediata.',
    btn_cv: 'Download CV',
    btn_contact: 'Contact Me',
    id_role: 'Systems & Cloud Administrator',
    id_loc: 'Barcelona / Remoto',
    id_edu: 'ASIR (Higher) + SMR (Mid)',
    id_disability: 'Certificado Discapacidad >33%',
    stat1: 'IT & DevOps Experience',
    stat2: 'Serverless & Edge Cloud',
    stat3: 'Cupo Discapacidad Oficial',
    stat4: 'Edge Monitoring',
    cmd_label: 'Comando',
    avail_title: 'Availability and Key Facts',
    fact1_title: 'Discapacidad >33%',
    fact1_body: 'Elegible para bonificaciones y cuota de reserva de contratación (Ley 43/2006 / LGD).',
    fact2_title: 'Incorporación',
    fact2_body: 'Inmediata a equipos de DevOps, cloud, sistemas o seguridad.',
    fact3_title: 'Flexibilidad horaria',
    fact3_body: 'Partida, rotativa, guardias o jornada intensiva según el servicio.',
    fact4_title: 'Movilidad geográfica',
    fact4_body: 'Adaptabilidad completa a presencial, híbrido o remoto.',
    exp_title: 'Experience',
    job1_title: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',
    job1_meta: 'Attestto · jornada parcial · remoto',
    job1_b1: 'Cloud/IAM: Google Workspace, Cloudflare, GitHub y Fly.io.',
    job1_b2: 'Hardening, mínimo privilegio y respuesta ante incidentes.',
    job1_b3: 'Identidad digital: W3C DID/VC, vLEI / GLEIF y eIDAS.',
    job2_title: 'Systems Support Technician',
    job2_meta: 'Minsait (Indra) · Infraestructuras críticas Salut / CTTI',
    job2_b1: 'Active Directory, GPO y credenciales en SAP ERP.',
    job2_b2: 'Continuidad operativa en entornos hospitalarios.',
    job2_b3: 'Incidencias con BMC Remedy y soporte de nivel 2.',
    job3_title: 'IT Maintenance Technician',
    job3_meta: 'Institut Indústria Sostenible · prácticas',
    job3_b1: 'Soporte de aulas, hardware y cableado de red.',
    job3_b2: 'Imágenes de sistema con Clonezilla y mantenimiento preventivo.',
    stack_title: 'Tech Stack',
    stack2_title: 'Sistemas',
    stack3_title: 'Seguridad y código',
    projects_title: 'Lab & Projects',
    filter_all: 'Todos',
    filter_systems: 'Sistemas & Edge',
    filter_security: 'Ciberseguridad',
    filter_tools: 'Herramientas',
    p1: 'Estudio de IA multimodal de baja latencia sobre Groq, en Cloudflare Workers.',
    p2: 'Motor de reescritura y corrección de estilo en Cloudflare Edge.',
    p3: 'Runbooks de infraestructura y administración de sistemas.',
    p4: 'Filtrado DNS Zero-Trust frente a malware y rastreadores.',
    p5: 'Suite de herramientas en el cliente, privacidad y accesibilidad.',
    p6: 'Telemetría local y control forense sin nube de terceros.',
    projects_empty: 'No hay proyectos en esta categoría.',
    edu_title: 'Academic Education',
    edu1_title: 'Administración de Sistemas Informáticos en Red',
    edu1_meta: 'ASIR · Cybersecurity Profile · Grado superior · ITB · 2024 — 2026',
    edu2_title: 'Sistemas Microinformáticos y Redes',
    edu2_meta: 'SMR · Grado medio · ITB · 2022 — 2024',
    cert_meta: 'Emisor: Microsoft · ID: F89C9FFB072C4C9A',
    verify: 'Verificar',
    contact_title: "Let's talk",
    contact_lead: 'Proyecto u oportunidad laboral: escríbeme.',
    copy_email: 'Copy Email',
    copied: '¡Copiado!',
    form_name: 'Nombre',
    form_message: 'Mensaje',
    form_send: 'Enviar mensaje',
    form_ok: 'Mensaje enviado correctamente.',
    form_err: 'Error al enviar. Inténtalo de nuevo.',
    footer_brand: 'Systems & Cloud Administrator. Cloud/IAM, Hardening y seguridad de red.',
    footer_nav: 'Navigation',
    footer_specs: 'Specializations & Certification',
    legal_privacy: 'Política de privacidad',
    legal_terms: 'Términos',
    legal_disability: 'Certificado discapacidad >33%',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    nav_experience: 'Experience',
    nav_stack: 'Tech Stack',
    nav_projects: 'Projects',
    nav_education: 'Education',
    nav_contact: 'Contact',
    theme_aria: 'Toggle theme',
    menu_aria: 'Open menu',
    avail_badge: 'Immediate Availability',
    hero_role: 'Systems & Cloud Administrator | Cybersecurity · Cloud/IAM',
    hero_tag1: 'ASIR + SMR',
    hero_tag3: 'Cybersecurity / Web3',
    hero_lead: 'Former SecOps at Attestto and former Minsait (Indra). Systems administration, identity and access, perimeter security and Hardening. ASIR (cybersecurity track) + SMR. Immediate start.',
    btn_cv: 'Download CV',
    btn_contact: 'Contact Me',
    id_role: 'Systems & Cloud Administrator',
    id_loc: 'Barcelona / Remote',
    id_edu: 'ASIR (Higher) + SMR (Mid)',
    id_disability: 'Disability certificate >33%',
    stat1: 'IT & DevOps Experience',
    stat2: 'Serverless & Edge Cloud',
    stat3: 'Official disability quota',
    stat4: 'Edge Monitoring',
    cmd_label: 'Command',
    avail_title: 'Availability and Key Facts',
    fact1_title: 'Disability >33%',
    fact1_body: 'Eligible for hiring bonuses and the statutory disability quota (Ley 43/2006 / LGD).',
    fact2_title: 'Start date',
    fact2_body: 'Immediate availability for DevOps, cloud, systems or security teams.',
    fact3_title: 'Schedule flexibility',
    fact3_body: 'Split shifts, rotating shifts, on-call or intensive hours.',
    fact4_title: 'Geographic mobility',
    fact4_body: 'On-site, hybrid or remote.',
    exp_title: 'Experience',
    job1_title: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',
    job1_meta: 'Attestto · part-time · remote',
    job1_b1: 'Cloud/IAM: Google Workspace, Cloudflare, GitHub and Fly.io.',
    job1_b2: 'Hardening, least privilege and incident response.',
    job1_b3: 'Digital identity: W3C DID/VC, vLEI / GLEIF and eIDAS.',
    job2_title: 'Systems Support Technician',
    job2_meta: 'Minsait (Indra) · Critical health infrastructure / CTTI',
    job2_b1: 'Active Directory, GPOs and SAP ERP credentials.',
    job2_b2: 'Operational continuity in hospital environments.',
    job2_b3: 'Incident handling with BMC Remedy and L2 support.',
    job3_title: 'IT Maintenance Technician',
    job3_meta: 'Institut Indústria Sostenible · internship',
    job3_b1: 'Classroom support, hardware and structured cabling.',
    job3_b2: 'System images with Clonezilla and preventive maintenance.',
    stack_title: 'Tech Stack',
    stack2_title: 'Systems',
    stack3_title: 'Security & code',
    projects_title: 'Lab & Projects',
    filter_all: 'All',
    filter_systems: 'Systems & Edge',
    filter_security: 'Cybersecurity',
    filter_tools: 'Tools',
    p1: 'Low-latency multimodal AI studio on Groq, running on Cloudflare Workers.',
    p2: 'Style rewrite engine on the Cloudflare Edge.',
    p3: 'Infrastructure and systems administration runbooks.',
    p4: 'Zero-Trust DNS filtering against malware and trackers.',
    p5: 'Client-side tool suite focused on privacy and accessibility.',
    p6: 'Local telemetry and forensic control with no third-party cloud.',
    projects_empty: 'No projects in this category.',
    edu_title: 'Academic Education',
    edu1_title: 'Networked Computer Systems Administration',
    edu1_meta: 'ASIR · Cybersecurity Profile · Higher vocational · ITB · 2024 — 2026',
    edu2_title: 'Microcomputer Systems and Networks',
    edu2_meta: 'SMR · Mid vocational · ITB · 2022 — 2024',
    cert_meta: 'Issuer: Microsoft · ID: F89C9FFB072C4C9A',
    verify: 'Verify',
    contact_title: "Let's talk",
    contact_lead: 'A project or a role: write to me.',
    copy_email: 'Copy Email',
    copied: 'Copied!',
    form_name: 'Name',
    form_message: 'Message',
    form_send: 'Send message',
    form_ok: 'Message sent.',
    form_err: 'Could not send. Please try again.',
    footer_brand: 'Systems & Cloud Administrator. Cloud/IAM, Hardening and network security.',
    footer_nav: 'Navigation',
    footer_specs: 'Specializations & Certification',
    legal_privacy: 'Privacy policy',
    legal_terms: 'Terms',
    legal_disability: 'Disability certificate >33%',
  },
};

const LEGAL = {
  es: {
    privacy: `<h3>Política de privacidad</h3><p class="muted">Responsable: Alberto Trujillo Mingorance (${EMAIL}). Los datos del formulario se usan solo para responder consultas profesionales.</p>`,
    terms: `<h3>Términos</h3><p class="muted">Portfolio profesional. Contenido protegido. Infraestructura en Cloudflare Pages con TLS.</p>`,
    compliance: `<h3>Certificado de discapacidad &gt;33%</h3><p class="muted">Certificado oficial. Incentivos a la contratación y cuota de reserva (Ley 43/2006 / LGD).</p>`,
  },
  en: {
    privacy: `<h3>Privacy policy</h3><p class="muted">Controller: Alberto Trujillo Mingorance (${EMAIL}). Contact-form data is used only to reply to professional enquiries.</p>`,
    terms: `<h3>Terms</h3><p class="muted">Professional portfolio. Content is protected. Hosted on Cloudflare Pages with TLS.</p>`,
    compliance: `<h3>Disability certificate &gt;33%</h3><p class="muted">Official certificate. Hiring incentives and statutory quota (Ley 43/2006 / LGD).</p>`,
  },
};

function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

function currentLang() {
  return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es';
}

function t(key) {
  const lang = currentLang();
  return translations[lang][key] ?? translations.es[key] ?? key;
}

function applyI18n(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });
  const code = document.getElementById('lang-code');
  if (code) code.textContent = lang.toUpperCase();
  localStorage.setItem(LANG_KEY, lang);
}

function initI18n() {
  applyI18n(currentLang());
  const btn = document.getElementById('lang-toggle');
  if (!btn || btn.dataset.bound === '1') return;
  btn.dataset.bound = '1';
  btn.addEventListener('click', () => {
    applyI18n(currentLang() === 'es' ? 'en' : 'es');
  });
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') document.documentElement.dataset.theme = 'light';
  const btn = document.getElementById('theme-toggle');
  if (!btn || btn.dataset.bound === '1') return;
  btn.dataset.bound = '1';
  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    if (next === 'light') document.documentElement.dataset.theme = 'light';
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem(THEME_KEY, next);
  });
}

function showToast(message) {
  const root = document.getElementById('toast-container');
  if (!root) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  root.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2800);
}

function initNavigation() {
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
    toggle?.setAttribute('aria-expanded', String(open));
  };

  toggle?.addEventListener('click', () => setOpen(!drawer?.classList.contains('is-open')));
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
    if (window.innerWidth >= 960) setOpen(false);
  });
  onScroll();
  topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
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
      const pack = LEGAL[currentLang()] || LEGAL.es;
      content.innerHTML = pack[key] || '';
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      return;
    }
    if (event.target === overlay || event.target.closest('[data-modal-close]')) close();
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
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        copyBtn.textContent = t('copied');
        window.clearTimeout(copyTimer);
        copyTimer = window.setTimeout(() => {
          copyBtn.textContent = t('copy_email');
        }, 2000);
        showToast(t('copied'));
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
      submit.textContent = '...';
    }
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.error || t('form_err'));
      form.reset();
      if (feedback) {
        feedback.textContent = t('form_ok');
        feedback.classList.remove('hidden');
      }
      showToast(t('form_ok'));
    } catch (error) {
      const message = error instanceof Error ? error.message : t('form_err');
      if (feedback) {
        feedback.textContent = message;
        feedback.classList.remove('hidden');
      }
      showToast(message);
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = original;
      }
    }
  });
}

ready(() => {
  if (window.__portfolioAppReady) return;
  window.__portfolioAppReady = true;
  try { initI18n(); } catch (error) { console.error('[i18n]', error); }
  try { initTheme(); } catch (error) { console.error('[theme]', error); }
  try { initNavigation(); } catch (error) { console.error('[nav]', error); }
  try { initTerminal(); } catch (error) { console.error('[terminal]', error); }
  try { initProjectFilters(); } catch (error) { console.error('[filters]', error); }
  try { initContact(); } catch (error) { console.error('[contact]', error); }
  try { initModals(); } catch (error) { console.error('[modals]', error); }
});
