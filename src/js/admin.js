import '../css/admin.css';
import { executeTurnstile, mountTurnstile, resetTurnstile } from './turnstile-widget.js';

const root = document.getElementById('editor');
const LANGS = [
  ['es', 'Español'],
  ['en', 'English'],
  ['ca', 'Català'],
];
const LISTS = {
  jobs: {
    title: 'Experiencia',
    fields: [
      ['role', 'Cargo'],
      ['company', 'Organización'],
      ['period', 'Fechas'],
      ['location', 'Lugar'],
      ['context', 'Resumen'],
      ['bullets', 'Tareas, una por línea', true],
      ['tags', 'Etiquetas, una por línea', true],
    ],
  },
  education: {
    title: 'Formación y credenciales',
    shared: [['link', 'Enlace de verificación']],
    fields: [
      ['title', 'Título'],
      ['detail', 'Tipo'],
      ['school', 'Centro'],
      ['period', 'Fechas'],
      ['description', 'Nota y resumen'],
      ['bullets', 'Competencias, una por línea', true],
    ],
  },
  projects: {
    title: 'Proyectos',
    shared: [['url', 'Web'], ['code', 'Código']],
    fields: [
      ['name', 'Nombre'],
      ['summary', 'Descripción', true],
    ],
  },
};

let doc = null;
let lang = 'es';
let status = '';
let turnstileToken = '';
let widgetId = null;
let pendingToken = null;
let widgetReady = null;

const blank = (section) => {
  const item = { id: crypto.randomUUID().slice(0, 8) };
  if (section === 'education') item.link = '';
  if (section === 'projects') {
    item.url = '';
    item.code = '';
  }
  for (const [code] of LANGS) {
    item[code] = {};
    for (const [key, , area] of LISTS[section].fields) item[code][key] = area ? [] : '';
  }
  return item;
};

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: 'same-origin',
    headers: options.body ? { 'Content-Type': 'application/json' } : undefined,
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'No se ha podido completar.');
  return data;
}

function fieldValue(value, area) {
  return area && Array.isArray(value) ? value.join('\n') : (value || '');
}

function paint() {
  if (!doc) {
    root.innerHTML = `<main class="login">
      <h1>Área privada</h1>
      <p class="muted">Confirma que eres tú. El enlace de un solo uso llega solo a alberto@trujillomingorance.com.</p>
      <div id="admin-turnstile"></div>
      <p class="status ${status.startsWith('Error') ? 'bad' : 'ok'}">${status}</p>
      <button class="primary" id="send-link" type="button">Enviar enlace</button>
    </main>`;
    document.getElementById('send-link').onclick = sendLink;
    widgetId = null;
    widgetReady = null;
    turnstileToken = '';
    pendingToken = null;
    return;
  }

  const hero = doc.hero?.[lang] || doc.hero?.es || {};
  root.innerHTML = `<header class="bar">
      <div>
        <h1>Editor del portfolio</h1>
        <p>Los cambios se publican al guardar. El CV usa lo que quede visible.</p>
      </div>
      <div class="actions">
        <div class="langs">${LANGS.map(([code, label]) => `<button type="button" data-lang="${code}" aria-pressed="${code === lang}">${label}</button>`).join('')}</div>
        <button type="button" id="logout">Salir</button>
        <button type="button" class="primary" id="save">Guardar</button>
      </div>
    </header>
    <main class="wrap">
      <p class="status ${status.startsWith('Error') ? 'bad' : 'ok'}">${status}</p>
      <section class="card">
        <h2>Presentación</h2>
        <label>Titular</label><input data-hero="subtitle" value="${escapeAttr(hero.subtitle)}">
        <label>Texto</label><textarea data-hero="description">${escapeText(hero.description)}</textarea>
        <label>Lugar</label><input data-hero="location" value="${escapeAttr(hero.location)}">
        <label>Disponibilidad</label><input data-hero="availability" value="${escapeAttr(hero.availability)}">
      </section>
      ${Object.entries(LISTS).map(([key, spec]) => section(key, spec)).join('')}
    </main>`;

  root.querySelectorAll('[data-lang]').forEach((button) => {
    button.onclick = () => { lang = button.dataset.lang; paint(); };
  });
  document.getElementById('logout').onclick = logout;
  document.getElementById('save').onclick = save;
  root.querySelectorAll('[data-hero]').forEach((input) => {
    input.oninput = () => { doc.hero[lang][input.dataset.hero] = input.value; };
  });
  root.querySelectorAll('[data-shared]').forEach((input) => {
    input.oninput = () => {
      const [section, index, field] = input.dataset.shared.split('.');
      doc[section][Number(index)][field] = input.value;
    };
  });
  root.querySelectorAll('[data-field]').forEach((input) => {
    input.oninput = () => {
      const [section, index, field] = input.dataset.field.split('.');
      const area = input.tagName === 'TEXTAREA' && input.dataset.lines === '1';
      doc[section][Number(index)][lang][field] = area
        ? input.value.split('\n').map((line) => line.trim()).filter(Boolean)
        : input.value;
    };
  });
  root.querySelectorAll('[data-add]').forEach((button) => {
    button.onclick = () => {
      doc[button.dataset.add].push(blank(button.dataset.add));
      paint();
    };
  });
  root.querySelectorAll('[data-remove]').forEach((button) => {
    button.onclick = () => {
      const [section, index] = button.dataset.remove.split('.');
      doc[section].splice(Number(index), 1);
      paint();
    };
  });
}

function section(key, spec) {
  const cards = doc[key].map((item, index) => `<article class="card">
    <div class="row"><strong>${spec.title} ${index + 1}</strong><button type="button" class="danger" data-remove="${key}.${index}">Quitar</button></div>
    ${(spec.shared || []).map(([field, label]) => `<label>${label}</label><input data-shared="${key}.${index}.${field}" value="${escapeAttr(item[field])}">`).join('')}
    ${spec.fields.map(([field, label, area]) => `<label>${label}</label>${area
      ? `<textarea data-lines="1" data-field="${key}.${index}.${field}">${escapeText(fieldValue(item[lang][field], true))}</textarea>`
      : `<input data-field="${key}.${index}.${field}" value="${escapeAttr(item[lang][field])}">`}`).join('')}
  </article>`).join('');
  return `<section><div class="row"><h2>${spec.title}</h2><button type="button" data-add="${key}">Añadir</button></div>${cards}</section>`;
}

function escapeAttr(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function escapeText(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

function updateStatus() {
  const node = root.querySelector('.status');
  if (!node) return;
  node.textContent = status;
  node.className = `status ${status.startsWith('Error') ? 'bad' : 'ok'}`;
}

function ensureLoginWidget() {
  if (widgetId != null) return Promise.resolve(widgetId);
  if (widgetReady) return widgetReady;
  const host = document.getElementById('admin-turnstile');
  widgetReady = mountTurnstile(host, 'admin_login', {
    onToken: (token) => {
      turnstileToken = token;
      if (!pendingToken) return;
      const resolve = pendingToken.resolve;
      pendingToken = null;
      resolve(token);
    },
    onExpire: () => {
      turnstileToken = '';
    },
    onError: () => {
      turnstileToken = '';
      if (!pendingToken) return;
      const reject = pendingToken.reject;
      pendingToken = null;
      reject(new Error('No se ha podido cargar la verificación.'));
    },
  }).then((id) => {
    widgetId = id;
    return id;
  }).catch((error) => {
    widgetReady = null;
    throw error;
  });
  return widgetReady;
}

function obtainLoginToken() {
  if (turnstileToken) return Promise.resolve(turnstileToken);
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      pendingToken = null;
      resetTurnstile(widgetId);
      reject(new Error('La verificación ha tardado demasiado.'));
    }, 90000);
    pendingToken = {
      resolve: (token) => {
        window.clearTimeout(timer);
        resolve(token);
      },
      reject: (error) => {
        window.clearTimeout(timer);
        reject(error instanceof Error ? error : new Error('No se ha podido cargar la verificación.'));
      },
    };
    executeTurnstile(widgetId);
  });
}

async function sendLink() {
  const button = document.getElementById('send-link');
  if (button) button.disabled = true;
  status = 'Comprobando…';
  updateStatus();
  try {
    await ensureLoginWidget();
    const token = await obtainLoginToken();
    turnstileToken = '';
    status = 'Enviando enlace…';
    updateStatus();
    await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ turnstile: token }) });
    status = 'Enlace enviado. Ábrelo desde tu correo. Caduca en 20 minutos.';
  } catch (error) {
    status = `Error: ${error.message}`;
  }
  updateStatus();
  turnstileToken = '';
  resetTurnstile(widgetId);
  if (button) button.disabled = false;
}

async function save() {
  status = 'Guardando…';
  const button = document.getElementById('save');
  if (button) button.disabled = true;
  try {
    await api('/api/admin/content', { method: 'PUT', body: JSON.stringify({ content: doc }) });
    status = 'Publicado. Recarga la página principal para verlo.';
  } catch (error) {
    status = `Error: ${error.message}`;
  }
  paint();
}

async function logout() {
  await api('/api/admin/session', { method: 'DELETE' });
  doc = null;
  status = '';
  paint();
}

async function boot() {
  const token = new URLSearchParams(location.search).get('token');
  if (token) {
    try {
      await api('/api/admin/session', { method: 'POST', body: JSON.stringify({ token }) });
      history.replaceState({}, '', '/admin');
    } catch (error) {
      status = `Error: ${error.message}`;
    }
  }
  try {
    const session = await api('/api/admin/session');
    if (session.ok) {
      const data = await api('/api/admin/content');
      doc = data.content;
    }
  } catch {
    doc = null;
  }
  paint();
}

boot();
