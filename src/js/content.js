const COLORS = ['indigo', 'purple', 'blue', 'green'];

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pick(item, lang) {
  if (!item) return {};
  return item[lang]?.role || item[lang]?.title || item[lang]?.name || item[lang]?.subtitle
    ? item[lang]
    : (item[lang] && Object.values(item[lang]).some(Boolean) ? item[lang] : item.es || {});
}

function textInto(selector, value) {
  const node = document.querySelector(selector);
  if (node && value) node.textContent = value;
}

function logo(company) {
  const name = company.toLowerCase();
  if (name.includes('atm') || name.includes('software labs')) return 'https://labs.trujillomingorance.com/avatar.png';
  if (name.includes('attestto')) return '/assets/images/attestto_logo.jpg';
  if (name.includes('minsait')) return '/assets/images/minsait_logo.jpeg';
  if (name.includes('sostenible') || name.includes('indústria') || name.includes('industria')) return '/assets/images/1742933903062.jpeg';
  if (name.includes('tecnol')) return '/assets/images/itecbcn_logo.jpeg';
  if (name.includes('microsoft')) return '/assets/images/microsoft_logo.svg';
  return '';
}

function jobCard(job, lang, index) {
  const data = pick(job, lang);
  const color = COLORS[index % COLORS.length];
  const mark = logo(data.company || '');
  const image = mark
    ? `<img src="${esc(mark)}" alt="" class="job-logo">`
    : `<span class="job-logo job-logo-mark" aria-hidden="true">${esc((data.company || 'CV').slice(0, 3).toUpperCase())}</span>`;
  const bullets = (data.bullets || []).map((item) => `<li>${esc(item)}</li>`).join('');
  const tags = (data.tags || []).map((item) => `<span class="skill-pill">${esc(item)}</span>`).join('');
  return `<div class="timeline-item">
    <div class="timeline-marker ${color}-marker"></div>
    <div class="glass-card job-card border-left-${color}">
      <div class="job-header">
        ${image}
        <div class="job-title-wrapper">
          <h3>${esc(data.role)}</h3>
          <h4>${esc(data.company)}</h4>
          ${data.location ? `<div class="job-meta-details"><span class="job-location"><i class="fas fa-map-marker-alt"></i> <span>${esc(data.location)}</span></span></div>` : ''}
        </div>
        ${data.period ? `<span class="job-period ${color}-badge">${esc(data.period)}</span>` : ''}
      </div>
      ${data.context ? `<p class="job-context">${esc(data.context)}</p>` : ''}
      ${bullets ? `<ul class="job-tasks">${bullets}</ul>` : ''}
      ${tags ? `<div class="job-skills-tags">${tags}</div>` : ''}
    </div>
  </div>`;
}

function studyCard(item, lang, color) {
  const data = pick(item, lang);
  const bullets = (data.bullets || []).map((line) => `<li>${esc(line)}</li>`).join('');
  const mark = logo(`${data.school || ''} ${data.title || ''}`);
  const image = mark ? `<img src="${esc(mark)}" alt="" class="edu-logo">` : '';
  const action = item.link
    ? `<a href="${esc(item.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm edu-verify"><i class="fas fa-check-circle text-green"></i> Verificar</a>`
    : '';
  return `<div class="glass-card border-left-${color} edu-card">
    ${image}
    <div class="edu-content">
      <h3>${esc(data.title)}</h3>
      ${data.detail ? `<h4>${esc(data.detail)}</h4>` : ''}
      ${data.school ? `<p class="edu-school">${esc(data.school)}</p>` : ''}
      ${data.period ? `<span class="edu-period">${esc(data.period)}</span>` : ''}
      ${data.description ? `<p class="edu-desc">${esc(data.description)}</p>` : ''}
      ${bullets ? `<ul class="job-tasks edu-tasks">${bullets}</ul>` : ''}
    </div>
    ${action}
  </div>`;
}

function projectCategory(item) {
  const known = {
    'atm-tools': 'automation',
    'open-sentinel': 'security',
    'rewrite-ai': 'automation',
    'trujillo-ai': 'systems',
    guides: 'systems',
    focusguard: 'security',
  };
  return known[item.id] || item.category || 'systems';
}

function projectCard(item, lang) {
  const data = pick(item, lang);
  const visit = item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fas fa-external-link-alt"></i> Web</a>` : '';
  const code = item.code ? `<a href="${esc(item.code)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fab fa-github"></i> Código</a>` : '';
  return `<div class="glass-card project-card-mini" data-category="${esc(projectCategory(item))}">
    <div class="project-header-mini" style="margin-bottom: 1rem;">
      <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${esc(data.name)}</h3>
      <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;">${esc(data.summary)}</p>
    </div>
    <div style="display: flex; gap: 0.5rem; margin-top: auto;">${visit}${code}</div>
  </div>`;
}

export function applyContent(content, lang) {
  if (!content) return;
  const hero = content.hero?.[lang] || content.hero?.es || {};
  textInto('.hero-subtitle', hero.subtitle);
  textInto('.hero-description', hero.description);
  textInto('[data-i18n="hero_pill_loc"]', hero.location);
  textInto('[data-i18n="avail_join_status"]', hero.availability);
  textInto('[data-i18n="hero_role"]', hero.subtitle);

  const timeline = document.querySelector('#experiencia .timeline');
  if (timeline && Array.isArray(content.jobs)) {
    timeline.innerHTML = content.jobs.map((job, index) => jobCard(job, lang, index)).join('');
  }

  const studies = document.querySelector('#formacion .education-grid');
  const credentials = document.getElementById('credential-grid');
  if (studies && Array.isArray(content.education)) {
    const regular = content.education.filter((item) => !item.link);
    const certified = content.education.filter((item) => item.link);
    studies.innerHTML = regular.map((item, index) => studyCard(item, lang, index % 2 ? 'green' : 'blue')).join('');
    if (credentials) credentials.innerHTML = certified.map((item) => studyCard(item, lang, 'purple')).join('');
  }

  const grid = document.getElementById('project-grid');
  if (grid && Array.isArray(content.projects)) {
    grid.innerHTML = content.projects.map((item) => projectCard(item, lang)).join('');
  }
}

let published = null;

export async function loadPublishedContent() {
  try {
    const response = await fetch('/api/content');
    if (!response.ok) return null;
    const data = await response.json();
    published = data.custom ? data.content : null;
  } catch {
    published = null;
  }
  return published;
}

export function publishedContent() {
  return published;
}
