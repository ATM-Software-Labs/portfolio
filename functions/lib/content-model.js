const LANGS = ['es', 'en', 'ca'];

function text(value, max) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}

function list(value, maxItems, maxLen) {
  const source = Array.isArray(value) ? value : String(value || '').split('\n');
  return source.map((item) => text(item, maxLen)).filter(Boolean).slice(0, maxItems);
}

function httpUrl(value) {
  const raw = text(value, 300);
  if (!raw) return '';
  try {
    const url = new URL(raw);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : '';
  } catch {
    return '';
  }
}

function id(value, fallback) {
  const clean = text(value, 40).replace(/[^a-zA-Z0-9_-]/g, '');
  return clean || fallback;
}

function localized(source, spec) {
  const out = {};
  for (const lang of LANGS) {
    const item = source?.[lang] && typeof source[lang] === 'object' ? source[lang] : {};
    out[lang] = {};
    for (const [key, rule] of Object.entries(spec)) {
      out[lang][key] = rule.list ? list(item[key], rule.maxItems, rule.max) : text(item[key], rule.max);
    }
  }
  return out;
}

export function sanitizeContent(input) {
  const source = input && typeof input === 'object' ? input : {};
  const hero = {};
  for (const lang of LANGS) {
    const item = source.hero?.[lang] || {};
    hero[lang] = {
      subtitle: text(item.subtitle, 180),
      description: text(item.description, 800),
      location: text(item.location, 80),
      availability: text(item.availability, 80),
    };
  }

  const jobs = (Array.isArray(source.jobs) ? source.jobs : []).slice(0, 20).map((job, index) => ({
    id: id(job?.id, `job-${index + 1}`),
    ...localized(job, {
      role: { max: 140 },
      company: { max: 140 },
      period: { max: 80 },
      location: { max: 160 },
      context: { max: 240 },
      bullets: { list: true, maxItems: 8, max: 280 },
      tags: { list: true, maxItems: 10, max: 40 },
    }),
  }));

  const education = (Array.isArray(source.education) ? source.education : []).slice(0, 12).map((item, index) => ({
    id: id(item?.id, `edu-${index + 1}`),
    link: httpUrl(item?.link),
    ...localized(item, {
      title: { max: 160 },
      detail: { max: 160 },
      school: { max: 140 },
      period: { max: 80 },
      description: { max: 320 },
      bullets: { list: true, maxItems: 6, max: 220 },
    }),
  }));

  const projects = (Array.isArray(source.projects) ? source.projects : []).slice(0, 20).map((item, index) => ({
    id: id(item?.id, `project-${index + 1}`),
    url: httpUrl(item?.url),
    code: httpUrl(item?.code),
    ...localized(item, {
      name: { max: 80 },
      summary: { max: 280 },
    }),
  }));

  return { hero, jobs, education, projects };
}

export { LANGS };
