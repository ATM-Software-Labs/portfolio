/**
 * i18n ES/EN, tema, nav, contacto. Terminal/filtros: ./terminal.js
 */
import '../css/styles.css';
import { initTerminal, initProjectFilters } from './terminal.js';

const EMAIL = ['alberto', 'trujillomingorance.com'].join('@');
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
    stat1: 'IT & SecOps Experience',
    stat2: 'Formación dual sistemas',
    stat3: 'Cupo Discapacidad Oficial',
    stat4: 'Barcelona / Remoto',
    cmd_label: 'Comando',
    avail_title: 'Availability and Key Facts',
    fact1_title: 'Discapacidad >33%',
    fact1_body: 'Elegible para bonificaciones y cuota de reserva de contratación (Ley 43/2006 / LGD).',
    fact2_title: 'Incorporación',
    fact2_body: 'Inmediata a equipos de SecOps, cloud, sistemas o seguridad.',
    fact3_title: 'Flexibilidad horaria',
    fact3_body: 'Partida, rotativa, guardias o jornada intensiva según el servicio.',
    fact4_title: 'Movilidad geográfica',
    fact4_body: 'Adaptabilidad completa a presencial, híbrido o remoto.',
    exp_title: 'Experience',
    see_more: 'Ver más',
    see_less: 'Ver menos',
    cred_title: 'Credenciales',
    job1_summary: 'Cloud/IAM, Hardening e identidad digital (DID/VC, vLEI) en entorno cloud.',
    job2_summary: 'Soporte de sistemas en infraestructuras críticas de salud.',
    job3_summary: 'Mantenimiento de aulas, hardware y clonación de sistemas.',
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
    form_hint: 'Respuesta habitual en 24–48 h.',
    form_required: 'Campos obligatorios',
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
    stat1: 'IT & SecOps Experience',
    stat2: 'Dual systems training',
    stat3: 'Official disability quota',
    stat4: 'Barcelona / Remote',
    cmd_label: 'Command',
    avail_title: 'Availability and Key Facts',
    fact1_title: 'Disability >33%',
    fact1_body: 'Eligible for hiring bonuses and the statutory disability quota (Ley 43/2006 / LGD).',
    fact2_title: 'Start date',
    fact2_body: 'Immediate availability for SecOps, cloud, systems or security teams.',
    fact3_title: 'Schedule flexibility',
    fact3_body: 'Split shifts, rotating shifts, on-call or intensive hours.',
    fact4_title: 'Geographic mobility',
    fact4_body: 'On-site, hybrid or remote.',
    exp_title: 'Experience',
    see_more: 'See more',
    see_less: 'See less',
    cred_title: 'Credentials',
    job1_summary: 'Cloud/IAM, Hardening and digital identity (DID/VC, vLEI) in a cloud environment.',
    job2_summary: 'Systems support in critical healthcare infrastructure.',
    job3_summary: 'Classroom maintenance, hardware and system imaging.',
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
    form_hint: 'I usually reply within 24–48 h.',
    form_required: 'Required fields',
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
  ca: {
    skip: 'Salta al contingut',
    menu: 'Menú',
    nav_experience: 'Experiència',
    nav_stack: 'Tech Stack',
    nav_projects: 'Projectes',
    nav_education: 'Formació',
    nav_contact: 'Contacte',
    theme_aria: 'Canviar tema',
    menu_aria: 'Obrir menú',
    avail_badge: 'Disponibilitat immediata',
    hero_role: 'Systems & Cloud Administrator | Cybersecurity · Cloud/IAM',
    hero_tag1: 'ASIR + SMR',
    hero_tag3: 'Cybersecurity / Web3',
    hero_lead: 'Ex-SecOps a Attestto i Ex-Minsait (Indra). ASIR (perfil ciberseguretat) + SMR. Hardening, Cloud/IAM, Zero-Trust. Incorporació immediata.',
    btn_cv: 'Descarregar CV',
    btn_contact: 'Contactar',
    id_role: 'Systems & Cloud Administrator',
    id_loc: 'Barcelona / Remot',
    id_edu: 'ASIR + SMR',
    id_disability: 'Certificat de discapacitat >33%',
    cmd_label: 'Ordre',
    see_more: 'Veure més',
    see_less: 'Veure menys',
    cred_title: 'Credencials',
    job1_summary: 'Cloud/IAM, Hardening i identitat digital (DID/VC, vLEI) en entorn cloud.',
    job2_summary: 'Suport de sistemes en infraestructures crítiques de salut.',
    job3_summary: 'Manteniment d’aules, maquinari i clonació de sistemes.',
    exp_title: 'Experiència',
    job1_title: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',
    job1_meta: 'Attestto · jornada parcial · remot',
    job1_b1: 'Cloud/IAM: Google Workspace, Cloudflare, GitHub i Fly.io.',
    job1_b2: 'Hardening, mínim privilegi i resposta a incidents.',
    job1_b3: 'Identitat digital: W3C DID/VC, vLEI / GLEIF i eIDAS.',
    job2_title: 'Systems Support Technician',
    job2_meta: 'Minsait (Indra) · Infraestructures crítiques Salut / CTTI',
    job2_b1: 'Active Directory, GPO i credencials a SAP ERP.',
    job2_b2: 'Continuïtat operativa en entorns hospitalaris.',
    job2_b3: 'Incidències amb BMC Remedy i suport de nivell 2.',
    job3_title: 'IT Maintenance Technician',
    job3_meta: 'Institut Indústria Sostenible · pràctiques',
    job3_b1: 'Suport d’aules, maquinari i cablejat de xarxa.',
    job3_b2: 'Imatges de sistema amb Clonezilla i manteniment preventiu.',
    projects_title: 'Projectes',
    filter_all: 'Tots',
    filter_systems: 'Sistemes',
    filter_security: 'Ciberseguretat',
    filter_tools: 'Eines',
    p1: 'IA multimodal a Cloudflare Workers.',
    p2: 'Reescriptura a Cloudflare Edge.',
    p3: 'Runbooks de sistemes.',
    p4: 'DNS Zero-Trust.',
    p5: 'Eines al client.',
    p6: 'Telemetria local.',
    projects_empty: 'No hi ha projectes en aquesta categoria.',
    edu_title: 'Formació',
    edu1_title: 'Administració de Sistemes Informàtics en Xarxa',
    edu1_meta: 'ASIR · perfil ciberseguretat · ITB · 2024 — 2026',
    edu2_title: 'Sistemes Microinformàtics i Xarxes',
    edu2_meta: 'SMR · ITB · 2022 — 2024',
    cert_meta: 'ID F89C9FFB072C4C9A',
    verify: 'Verificar',
    contact_title: 'Contacte',
    contact_lead: 'Projecte o oportunitat laboral: escriu-me.',
    copy_email: 'Copiar email',
    copied: 'Copiat!',
    form_name: 'Nom',
    form_message: 'Missatge',
    form_hint: 'Resposta habitual en 24–48 h.',
    form_required: 'Camps obligatoris',
    form_send: 'Enviar missatge',
    form_ok: 'Missatge enviat.',
    form_err: 'Error en enviar. Torna-ho a provar.',
    legal_privacy: 'Privadesa',
    legal_terms: 'Termes',
    legal_disability: 'Certificat de discapacitat >33%',
  },
};

const LEGAL = {
  es: {
    privacy: `<h3>Política de privacidad</h3><p class="muted">Responsable: Alberto Trujillo Mingorance (${EMAIL}). Los datos del formulario se usan solo para responder consultas profesionales.</p>`,
    terms: `<h3>Términos</h3><p class="muted">Portfolio profesional. Contenido protegido. Queda prohibida la reproducción no autorizada.</p>`,
    compliance: `<h3>Certificado de discapacidad &gt;33%</h3><p class="muted">Certificado oficial. Incentivos a la contratación y cuota de reserva (Ley 43/2006 / LGD).</p>`,
  },
  en: {
    privacy: `<h3>Privacy policy</h3><p class="muted">Controller: Alberto Trujillo Mingorance (${EMAIL}). Contact-form data is used only to reply to professional enquiries.</p>`,
    terms: `<h3>Terms</h3><p class="muted">Professional portfolio. Content is protected. Unauthorized reproduction is prohibited.</p>`,
    compliance: `<h3>Disability certificate &gt;33%</h3><p class="muted">Official certificate. Hiring incentives and statutory quota (Ley 43/2006 / LGD).</p>`,
  },
  ca: {
    privacy: `<h3>Política de privadesa</h3><p class="muted">Responsable: Alberto Trujillo Mingorance (${EMAIL}). Les dades del formulari només s’usen per respondre consultes professionals.</p>`,
    terms: `<h3>Termes</h3><p class="muted">Portfoli professional. Contingut protegit. Queda prohibida la reproducció no autoritzada.</p>`,
    compliance: `<h3>Certificat de discapacitat &gt;33%</h3><p class="muted">Certificat oficial. Incentius a la contractació i quota de reserva (Llei 43/2006 / LGD).</p>`,
  },
};

function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

const LANGS = ['es', 'en', 'ca'];

function currentLang() {
  const value = localStorage.getItem(LANG_KEY);
  return LANGS.includes(value) ? value : 'es';
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
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('[data-lang-flag]').forEach((el) => {
    el.classList.toggle('hidden', el.getAttribute('data-lang-flag') !== lang);
  });
  const code = document.getElementById('lang-code');
  if (code) code.textContent = lang.toUpperCase();
  localStorage.setItem(LANG_KEY, lang);
}

function initI18n() {
  applyI18n(currentLang());
  const trigger = document.getElementById('lang-trigger');
  const menu = document.getElementById('lang-menu');
  const setOpen = (open) => {
    menu?.classList.toggle('is-open', open);
    trigger?.setAttribute('aria-expanded', String(open));
  };
  trigger?.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!menu?.classList.contains('is-open'));
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      applyI18n(btn.getAttribute('data-lang'));
      setOpen(false);
    });
  });
  document.addEventListener('click', () => setOpen(false));
}

function initJobMore() {
  document.querySelectorAll('[data-more]').forEach((btn) => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const extra = btn.closest('article')?.querySelector('.job-more');
      if (!extra) return;
      const open = extra.classList.contains('hidden');
      extra.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      const label = btn.querySelector('[data-i18n-more]');
      if (label) {
        label.setAttribute('data-i18n', open ? 'see_less' : 'see_more');
        label.textContent = t(open ? 'see_less' : 'see_more');
      }
    });
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
    if (window.innerWidth >= 1024) setOpen(false);
  });
  onScroll();
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
  const message = form.querySelector('#message');
  const counter = document.getElementById('msg-count');
  const updateCount = () => {
    if (counter && message) counter.textContent = `${message.value.length} / 4000`;
  };
  message?.addEventListener('input', updateCount);
  updateCount();
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const original = submit ? submit.textContent : '';
    if (submit) {
      submit.disabled = true;
      submit.textContent = '...';
    }
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch('https://ai.trujillomingorance.com/api/contact', {
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
        feedback.style.color = 'var(--color-ok)';
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  const root = document.getElementById('app');
    try { initI18n(); } catch (error) { console.error('[i18n]', error); }
  try { initJobMore(); } catch (error) { console.error('[more]', error); }
  try { initTheme(); } catch (error) { console.error('[theme]', error); }
  try { initNavigation(); } catch (error) { console.error('[nav]', error); }
  try { initTerminal(); } catch (error) { console.error('[terminal]', error); }
  try { initProjectFilters(); } catch (error) { console.error('[filters]', error); }
  try { initContact(); } catch (error) { console.error('[contact]', error); }
  try { initModals(); } catch (error) { console.error('[modals]', error); }
});



