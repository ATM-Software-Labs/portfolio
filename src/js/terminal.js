/**
 * Terminal CLI + filtros de proyectos (módulo ES).
 * Sin anti-debug, sin listeners duplicados, sin reconstruir el DOM del grid.
 */
const EMAIL = ['alberto', 'trujillomingorance.com'].join('@');
const PROMPT = 'alberto@secops-node:~$';
const MAX_HISTORY = 80;
const FILTER_ALL = 'all';

const COMMANDS = Object.freeze({
  help: 'Lista los comandos disponibles',
  whoami: 'Identidad y perfil profesional',
  skills: 'Stack técnico y competencias',
  exp: 'Experiencia profesional',
  projects: 'Proyectos en producción y laboratorio',
  certs: 'Certificaciones y credenciales',
  contact: 'Canales de contacto',
  clear: 'Limpia la consola',
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeCommand(raw) {
  return String(raw ?? '').trim().toLowerCase();
}

function commandHtml(cmd) {
  switch (cmd) {
    case 'help': {
      const rows = Object.entries(COMMANDS)
        .map(([name, desc]) => `<tr><td class="cmd-name">${name}</td><td class="text-muted">${desc}</td></tr>`)
        .join('');
      return `<div class="mb-2 text-sky">[ comandos ]</div><table>${rows}</table>`;
    }
    case 'whoami':
      return `<div class="mb-2 text-sky">[ identidad ]</div>
        Nombre: Alberto Trujillo Mingorance<br>
        Rol: Systems &amp; Cloud Administrator | Cybersecurity - Cloud/IAM<br>Estado: All systems operational. Disponibilidad inmediata para roles de SecOps y Cloud.`;
    case 'skills':
      return `<div class="mb-2 text-sky">[ stack ]</div>
        - Cloud/IAM: Microsoft Entra ID, Google Workspace, Cloudflare, Fly.io<br>
        - Sistemas: Linux (Debian/CentOS), Windows Server, Active Directory, Docker<br>
        - Seguridad: Hardening, Zero-Trust, W3C DID/VC, vLEI, eIDAS<br>
        - Automatización: Bash, PowerShell, Python, Ansible, Git / Pull Requests`;
    case 'exp':
      return `<div class="mb-2 text-sky">[ experiencia ]</div>
        - Attestto (jul. 2026 — actualidad): Ingeniero junior de SecOps y sistemas · Cloud/IAM, Cloudflare, W3C DID/VC, vLEI, Fly.io<br>
        - Minsait / Indra (nov. 2025 — may. 2026): Técnico de soporte de sistemas · infraestructuras críticas Salut CTTI, Active Directory, SAP ERP, BMC Remedy<br>
        - Institut Indústria Sostenible (may. 2023 — nov. 2023): Técnico de mantenimiento informático · Clonezilla, redes, hardware`;
    case 'projects':
      return `<div class="mb-2 text-sky">[ proyectos ]</div>
        - Trujillo AI Studio — <a class="text-cyan underline" href="https://ai.trujillomingorance.com" target="_blank" rel="noopener noreferrer">ai.trujillomingorance.com</a><br>
        - Rewrite AI — <a class="text-cyan underline" href="https://rewrite.trujillomingorance.com" target="_blank" rel="noopener noreferrer">rewrite.trujillomingorance.com</a><br>
        - Trujillo Guides — <a class="text-cyan underline" href="https://guides.trujillomingorance.com" target="_blank" rel="noopener noreferrer">guides.trujillomingorance.com</a><br>
        - FocusGuard SaaS — <a class="text-cyan underline" href="https://focusguard.trujillomingorance.com" target="_blank" rel="noopener noreferrer">focusguard.trujillomingorance.com</a><br>
        - ATM Tools — <a class="text-cyan underline" href="https://tools.trujillomingorance.com" target="_blank" rel="noopener noreferrer">tools.trujillomingorance.com</a><br>
        - Open-Sentinel — <a class="text-cyan underline" href="https://github.com/ATM-Software-Labs/open-sentinel" target="_blank" rel="noopener noreferrer">GitHub</a>`;
    case 'certs':
      return `<div class="mb-2 text-sky">[ credenciales ]</div>
        - Microsoft Applied Skills: Get started with identities and access using Microsoft Entra<br>
        - ID: F89C9FFB072C4C9A<br>
        - ASIR (perfil ciberseguridad) + SMR · ITB`;
    case 'contact':
      return `<div class="mb-2 text-sky">[ contacto ]</div>
        Email: <a class="text-cyan underline" href="mailto:${EMAIL}">${EMAIL}</a><br>
        LinkedIn: <a class="text-cyan underline" href="https://linkedin.com/in/alberto-trujillo-mingorance-288237266/" target="_blank" rel="noopener noreferrer">alberto-trujillo-mingorance</a><br>
        GitHub: <a class="text-cyan underline" href="https://github.com/atrumin16" target="_blank" rel="noopener noreferrer">atrumin16</a>`;
    default:
      return `Comando no reconocido: "${escapeHtml(cmd)}". Escribe <span class="text-cyan">help</span> para ver la lista.`;
  }
}

export function initTerminal() {
  const root = document.getElementById('terminal');
  const output = document.getElementById('terminal-output');
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  if (!root || !output || !form || !input) return;
  if (root.dataset.bound === '1') return;
  root.dataset.bound = '1';

  const history = [];
  let cursor = 0;
  let scrollRaf = 0;

  input.disabled = false;
  input.readOnly = false;

  const focusInput = () => {
    input.disabled = false;
    input.readOnly = false;
    requestAnimationFrame(() => {
      try {
        input.focus({ preventScroll: true });
      } catch {
        input.focus();
      }
    });
  };

  const scrollToBottom = () => {
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        output.scrollTop = output.scrollHeight;
      });
    });
  };

  const appendTrusted = (html, isCommand = false) => {
    const line = document.createElement('div');
    line.className = isCommand ? 'mb-1' : 'mb-3';
    line.innerHTML = html;
    output.appendChild(line);
    scrollToBottom();
  };

  const remember = (cmd) => {
    if (history[history.length - 1] === cmd) {
      cursor = history.length;
      return;
    }
    if (history.length >= MAX_HISTORY) history.shift();
    history.push(cmd);
    cursor = history.length;
  };

  const dispatch = (raw) => {
    try {
      const cmd = sanitizeCommand(raw);
      if (!cmd) {
        focusInput();
        return;
      }

      remember(cmd);
      appendTrusted(
        `<span class="term-prompt">${PROMPT}</span> <span>${escapeHtml(cmd)}</span>`,
        true
      );

      if (cmd === 'clear') {
        output.replaceChildren();
        output.scrollTop = 0;
        return;
      }

      appendTrusted(commandHtml(cmd));
    } catch (error) {
      console.error('[terminal]', error);
      try {
        appendTrusted('<span class="text-red-300">Error al ejecutar el comando.</span>');
      } catch {
        /* no congelar el hilo */
      }
    } finally {
      focusInput();
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    dispatch(value);
  });

  root.addEventListener('click', (event) => {
    const pill = event.target.closest('[data-cmd]');
    if (pill && root.contains(pill)) {
      event.preventDefault();
      dispatch(pill.getAttribute('data-cmd'));
      return;
    }
    if (!event.target.closest('a, button, input, textarea')) {
      focusInput();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    if (!history.length) return;
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      if (cursor > 0) cursor -= 1;
    } else if (cursor < history.length) {
      cursor += 1;
    }
    input.value = cursor >= history.length ? '' : history[cursor];
  });
}

export function initProjectFilters() {
  const toolbar = document.getElementById('project-filters');
  const grid = document.getElementById('project-grid');
  const empty = document.getElementById('project-empty');
  if (!toolbar || !grid) return;
  if (toolbar.dataset.bound === '1') return;
  toolbar.dataset.bound = '1';

  const cards = grid.querySelectorAll('[data-category]');
  const buttons = toolbar.querySelectorAll('[data-filter]');

  const apply = (filter) => {
    const key = filter || FILTER_ALL;
    let visible = 0;
    cards.forEach((card) => {
      const match = key === FILTER_ALL || card.getAttribute('data-category') === key;
      card.classList.toggle('is-hidden', !match);
      if (match) visible += 1;
    });
    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-filter') === key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (empty) empty.classList.toggle('hidden', visible > 0);
  };

  toolbar.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-filter]');
    if (!btn || !toolbar.contains(btn)) return;
    apply(btn.getAttribute('data-filter'));
  });
}




