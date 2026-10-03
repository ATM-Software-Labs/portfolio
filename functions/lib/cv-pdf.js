/**
 * One-column A4 CV. Text is real PDF text (WinAnsi) so recruiters and
 * applicant-tracking systems can select and search it.
 */

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 46;
const TOP = 46;
const BOTTOM = 48;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const INK = [0.11, 0.14, 0.18];
const MUTED = [0.33, 0.38, 0.45];
const NAVY = [0.08, 0.22, 0.4];
const RULE = [0.76, 0.8, 0.84];

const WIDTHS = {
  ' ': 278, '!': 278, '"': 355, '#': 556, $: 556, '%': 889, '&': 667, "'": 191,
  '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
  0: 556, 1: 556, 2: 556, 3: 556, 4: 556, 5: 556, 6: 556, 7: 556, 8: 556, 9: 556,
  ':': 278, ';': 278, '<': 584, '=': 584, '>': 584, '?': 556, '@': 1015,
  A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722, I: 278, J: 500,
  K: 667, L: 556, M: 833, N: 722, O: 778, P: 667, Q: 778, R: 722, S: 667, T: 611,
  U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611,
  a: 556, b: 556, c: 500, d: 556, e: 556, f: 278, g: 556, h: 556, i: 222, j: 222,
  k: 500, l: 222, m: 833, n: 556, o: 556, p: 556, q: 556, r: 333, s: 500, t: 278,
  u: 556, v: 500, w: 722, x: 500, y: 500, z: 500,
};

const WIN = {
  '€': 0x80, '…': 0x85, '‘': 0x91, '’': 0x92, '“': 0x93, '”': 0x94, '•': 0x95,
  '–': 0x96, '—': 0x97, '¡': 0xa1, '«': 0xab, '»': 0xbb, '¿': 0xbf,
  'À': 0xc0, 'Á': 0xc1, 'Â': 0xc2, 'Ã': 0xc3, 'Ä': 0xc4, 'Å': 0xc5, 'Æ': 0xc6,
  'Ç': 0xc7, 'È': 0xc8, 'É': 0xc9, 'Ê': 0xca, 'Ë': 0xcb, 'Ì': 0xcc, 'Í': 0xcd,
  'Î': 0xce, 'Ï': 0xcf, 'Ñ': 0xd1, 'Ò': 0xd2, 'Ó': 0xd3, 'Ô': 0xd4, 'Õ': 0xd5,
  'Ö': 0xd6, 'Ù': 0xd9, 'Ú': 0xda, 'Û': 0xdb, 'Ü': 0xdc, 'Ý': 0xdd,
  'à': 0xe0, 'á': 0xe1, 'â': 0xe2, 'ã': 0xe3, 'ä': 0xe4, 'å': 0xe5, 'æ': 0xe6,
  'ç': 0xe7, 'è': 0xe8, 'é': 0xe9, 'ê': 0xea, 'ë': 0xeb, 'ì': 0xec, 'í': 0xed,
  'î': 0xee, 'ï': 0xef, 'ñ': 0xf1, 'ò': 0xf2, 'ó': 0xf3, 'ô': 0xf4, 'õ': 0xf5,
  'ö': 0xf6, 'ù': 0xf9, 'ú': 0xfa, 'û': 0xfb, 'ü': 0xfc, 'ý': 0xfd, 'ÿ': 0xff,
};

const LABELS = {
  es: {
    profile: 'Perfil profesional',
    experience: 'Experiencia profesional',
    education: 'Formación académica',
    credentials: 'Certificaciones',
    skills: 'Competencias técnicas',
    keywords: 'Tecnologías',
    projects: 'Proyectos',
    languages: 'Idiomas',
    extra: 'Información adicional',
    continued: 'Currículum',
  },
  en: {
    profile: 'Professional profile',
    experience: 'Professional experience',
    education: 'Education',
    credentials: 'Certifications',
    skills: 'Technical skills',
    keywords: 'Technologies',
    projects: 'Projects',
    languages: 'Languages',
    extra: 'Additional information',
    continued: 'Resume',
  },
  ca: {
    profile: 'Perfil professional',
    experience: 'Experiència professional',
    education: 'Formació acadèmica',
    credentials: 'Certificacions',
    skills: 'Competències tècniques',
    keywords: 'Tecnologies',
    projects: 'Projectes',
    languages: 'Idiomes',
    extra: 'Informació addicional',
    continued: 'Currículum',
  },
};

function clean(value, max) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function cleanList(list, maxItems, maxLen) {
  if (!Array.isArray(list)) return [];
  return list.map((item) => clean(item, maxLen)).filter(Boolean).slice(0, maxItems);
}

export function normalizeProfile(input) {
  const lang = input && (input.lang === 'en' || input.lang === 'ca') ? input.lang : 'es';
  const source = input && typeof input === 'object' ? input : {};
  return {
    lang,
    name: clean(source.name, 120),
    headline: clean(source.headline, 180),
    summary: clean(source.summary, 900),
    location: clean(source.location, 80),
    email: clean(source.email, 120),
    website: clean(source.website, 160),
    linkedin: clean(source.linkedin, 180),
    github: clean(source.github, 180),
    availability: clean(source.availability, 120),
    languages: clean(source.languages, 160),
    extra: cleanList(source.extra, 6, 180),
    experience: (Array.isArray(source.experience) ? source.experience : []).slice(0, 12).map((job) => ({
      role: clean(job?.role, 140),
      company: clean(job?.company, 140),
      period: clean(job?.period, 80),
      location: clean(job?.location, 160),
      context: clean(job?.context, 240),
      bullets: cleanList(job?.bullets, 8, 280),
    })).filter((job) => job.role || job.company),
    education: (Array.isArray(source.education) ? source.education : []).slice(0, 8).map((item) => ({
      title: clean(item?.title, 140),
      detail: clean(item?.detail, 160),
      school: clean(item?.school, 140),
      period: clean(item?.period, 80),
      description: clean(item?.description, 320),
      bullets: cleanList(item?.bullets, 6, 220),
    })).filter((item) => item.title || item.school),
    credentials: (Array.isArray(source.credentials) ? source.credentials : []).slice(0, 8).map((item) => ({
      title: clean(item?.title, 160),
      detail: clean(item?.detail, 160),
      issuer: clean(item?.issuer, 120),
      period: clean(item?.period, 40),
    })).filter((item) => item.title),
    skills: (Array.isArray(source.skills) ? source.skills : []).slice(0, 10).map((group) => ({
      group: clean(group?.group, 80),
      items: cleanList(group?.items, 8, 180),
    })).filter((group) => group.group && group.items.length),
    keywords: cleanList(source.keywords, 24, 60),
    projects: (Array.isArray(source.projects) ? source.projects : []).slice(0, 10).map((project) => ({
      name: clean(project?.name, 80),
      summary: clean(project?.summary, 220),
      url: clean(project?.url, 180),
    })).filter((project) => project.name),
  };
}

function charWidth(ch) {
  const base = ch.normalize('NFD').replace(/[\u0300-\u036f]/g, '') || ch;
  return WIDTHS[ch] || WIDTHS[base] || WIDTHS[base.toLowerCase()] || 520;
}

function textWidth(text, size, bold) {
  let units = 0;
  for (const ch of text) units += charWidth(ch);
  return (units * size * (bold ? 1.06 : 1)) / 1000;
}

function wrap(text, size, maxWidth, bold = false) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (textWidth(next, size, bold) <= maxWidth) {
      line = next;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function pdfText(text) {
  let out = '';
  for (const ch of text) {
    if (ch === '\\' || ch === '(' || ch === ')') {
      out += `\\${ch}`;
      continue;
    }
    const code = ch.codePointAt(0);
    if (code >= 32 && code <= 126) {
      out += ch;
      continue;
    }
    const byte = WIN[ch] ?? 0x3f;
    out += `\\${byte.toString(8).padStart(3, '0')}`;
  }
  return `(${out})`;
}

function rgb(color) {
  return color.map((n) => n.toFixed(3)).join(' ');
}

export function buildCvPdf(input) {
  const profile = normalizeProfile(input);
  const labels = LABELS[profile.lang];
  const pages = [];
  let commands = [];
  let y = 0;
  let first = true;

  const startPage = () => {
    commands = [];
    pages.push(commands);
    y = PAGE_H - TOP;
    if (!first) {
      text(profile.name, MARGIN_X, y - 10, 10, 'F2', NAVY);
      const side = labels.continued;
      text(side, PAGE_W - MARGIN_X - textWidth(side, 9, false), y - 9, 9, 'F1', MUTED);
      y -= 18;
      rule(y, RULE, 0.6);
      y -= 16;
    }
  };

  const need = (height) => {
    if (y - height < BOTTOM) startPage();
  };

  const text = (value, x, baseline, size, font, color) => {
    commands.push(`BT /${font} ${size} Tf ${rgb(color)} rg 1 0 0 1 ${x.toFixed(2)} ${baseline.toFixed(2)} Tm ${pdfText(value)} Tj ET`);
  };

  const rule = (baseline, color, width) => {
    commands.push(`${rgb(color)} RG ${width} w ${MARGIN_X} ${baseline.toFixed(2)} m ${PAGE_W - MARGIN_X} ${baseline.toFixed(2)} l S`);
  };

  const paragraph = (value, size, font, color, gap, width = CONTENT_W, x = MARGIN_X, bold = false) => {
    const lines = wrap(value, size, width, bold);
    for (const line of lines) {
      need(size + gap);
      text(line, x, y - size, size, font, color);
      y -= size + gap;
    }
  };

  const section = (title) => {
    need(28);
    y -= 8;
    text(title.toUpperCase(), MARGIN_X, y - 10, 10, 'F2', NAVY);
    y -= 14;
    rule(y, NAVY, 1);
    y -= 12;
  };

  startPage();
  first = false;

  const name = profile.name || 'Alberto Trujillo Mingorance';
  text(name, MARGIN_X, y - 18, 18, 'F2', INK);
  y -= 24;
  rule(y, NAVY, 2);
  y -= 16;

  if (profile.headline) paragraph(profile.headline, 10.5, 'F2', NAVY, 3, CONTENT_W, MARGIN_X, true);
  const contact = [profile.location, profile.email, profile.website, profile.availability]
    .filter(Boolean)
    .join('   ·   ');
  if (contact) paragraph(contact, 8.5, 'F1', MUTED, 2);
  const links = [profile.linkedin, profile.github].filter(Boolean).join('   ·   ');
  if (links) paragraph(links, 8.5, 'F1', MUTED, 2);
  y -= 4;

  if (profile.summary) {
    section(labels.profile);
    paragraph(profile.summary, 9.5, 'F1', INK, 3);
  }

  if (profile.experience.length) {
    section(labels.experience);
    for (const job of profile.experience) {
      need(36);
      const role = job.role || job.company;
      const company = job.role ? job.company : '';
      paragraph(role, 11, 'F2', INK, 3, CONTENT_W, MARGIN_X, true);
      const periodWidth = textWidth(job.period, 9, false);
      const companyWidth = textWidth(company, 9.5, true);
      if (company && job.period && companyWidth + periodWidth + 16 <= CONTENT_W) {
        need(14);
        text(company, MARGIN_X, y - 10, 9.5, 'F2', MUTED);
        text(job.period, PAGE_W - MARGIN_X - periodWidth, y - 9.5, 9, 'F1', MUTED);
        y -= 13;
      } else {
        if (company) paragraph(company, 9.5, 'F2', MUTED, 2, CONTENT_W, MARGIN_X, true);
        if (job.period) {
          need(13);
          text(job.period, PAGE_W - MARGIN_X - periodWidth, y - 9.5, 9, 'F1', MUTED);
          y -= 13;
        }
      }
      if (job.location) paragraph(job.location, 8.5, 'F1', MUTED, 2);
      if (job.context) paragraph(job.context, 9, 'F3', INK, 2);
      for (const bullet of job.bullets) {
        const lines = wrap(bullet, 9.2, CONTENT_W - 14, false);
        lines.forEach((line, index) => {
          need(13);
          if (index === 0) {
            commands.push(`${rgb(NAVY)} rg ${MARGIN_X + 2} ${(y - 7).toFixed(2)} 1.15 0 360 arc f`);
          }
          text(line, MARGIN_X + 12, y - 9.2, 9.2, 'F1', INK);
          y -= 12;
        });
      }
      y -= 6;
    }
  }

  if (profile.education.length) {
    section(labels.education);
    for (const item of profile.education) {
      need(28);
      const eduTitle = item.title || item.school;
      const eduPeriodWidth = textWidth(item.period, 9, false);
      if (!item.period || textWidth(eduTitle, 10.5, true) + eduPeriodWidth + 16 <= CONTENT_W) {
        text(eduTitle, MARGIN_X, y - 10.5, 10.5, 'F2', INK);
        if (item.period) text(item.period, PAGE_W - MARGIN_X - eduPeriodWidth, y - 10, 9, 'F1', MUTED);
        y -= 13;
      } else {
        paragraph(eduTitle, 10.5, 'F2', INK, 2, CONTENT_W, MARGIN_X, true);
        text(item.period, PAGE_W - MARGIN_X - eduPeriodWidth, y - 10, 9, 'F1', MUTED);
        y -= 13;
      }
      const meta = [item.detail, item.school].filter(Boolean).join('  ·  ');
      if (meta) paragraph(meta, 9, 'F1', MUTED, 2);
      if (item.description) paragraph(item.description, 9, 'F1', INK, 2);
      for (const bullet of item.bullets || []) {
        const lines = wrap(bullet, 9, CONTENT_W - 14, false);
        lines.forEach((line, index) => {
          need(12);
          if (index === 0) {
            commands.push(`${rgb(NAVY)} rg ${MARGIN_X + 2} ${(y - 6.5).toFixed(2)} 1.05 0 360 arc f`);
          }
          text(line, MARGIN_X + 12, y - 9, 9, 'F1', INK);
          y -= 11.5;
        });
      }
      y -= 4;
    }
  }

  if (profile.credentials.length) {
    section(labels.credentials);
    for (const item of profile.credentials) {
      need(24);
      const credWidth = textWidth(item.period, 9, false);
      if (!item.period || textWidth(item.title, 10.5, true) + credWidth + 16 <= CONTENT_W) {
        text(item.title, MARGIN_X, y - 10.5, 10.5, 'F2', INK);
        if (item.period) text(item.period, PAGE_W - MARGIN_X - credWidth, y - 10, 9, 'F1', MUTED);
        y -= 13;
      } else {
        paragraph(item.title, 10.5, 'F2', INK, 2, CONTENT_W, MARGIN_X, true);
        text(item.period, PAGE_W - MARGIN_X - credWidth, y - 10, 9, 'F1', MUTED);
        y -= 13;
      }
      const meta = [item.detail, item.issuer].filter(Boolean).join('  ·  ');
      if (meta) paragraph(meta, 9, 'F1', MUTED, 2);
      y -= 3;
    }
  }

  if (profile.skills.length) {
    section(labels.skills);
    for (const group of profile.skills) {
      need(22);
      text(group.group, MARGIN_X, y - 10, 10, 'F2', INK);
      y -= 13;
      paragraph(group.items.join(' · '), 9, 'F1', INK, 2);
      y -= 2;
    }
  }

  if (profile.keywords.length) {
    section(labels.keywords);
    paragraph(profile.keywords.join(' · '), 9, 'F1', INK, 2);
  }

  if (profile.projects.length) {
    section(labels.projects);
    for (const project of profile.projects) {
      need(24);
      text(project.name, MARGIN_X, y - 10.5, 10.5, 'F2', INK);
      y -= 13;
      if (project.summary) paragraph(project.summary, 9, 'F1', INK, 2);
      if (project.url) paragraph(project.url.replace(/^https?:\/\//, ''), 8.5, 'F1', MUTED, 2);
      y -= 3;
    }
  }

  if (profile.languages) {
    section(labels.languages);
    paragraph(profile.languages, 9.5, 'F1', INK, 2);
  }

  if (profile.extra.length) {
    section(labels.extra);
    for (const line of profile.extra) paragraph(line, 9.5, 'F1', INK, 2);
  }

  pages.forEach((page, index) => {
    const label = `${index + 1} / ${pages.length}`;
    const width = textWidth(label, 8, false);
    page.push(`BT /F1 8 Tf ${rgb(MUTED)} rg 1 0 0 1 ${(PAGE_W - MARGIN_X - width).toFixed(2)} 28 Tm ${pdfText(label)} Tj ET`);
    page.push(`BT /F1 8 Tf ${rgb(MUTED)} rg 1 0 0 1 ${MARGIN_X} 28 Tm ${pdfText(name)} Tj ET`);
  });

  return renderPdf(pages);
}

function renderPdf(pages) {
  const objects = [];
  const add = (body) => {
    objects.push(body);
    return objects.length;
  };

  const fontRegular = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  const fontBold = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  const fontItalic = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>');
  const pageIds = [];
  const contentIds = [];

  pages.forEach((commands) => {
    const stream = commands.join('\n');
    const contentId = add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    contentIds.push(contentId);
    pageIds.push(null);
  });

  const pagesId = add('<< /Type /Pages /Count 0 /Kids [] >>');
  pageIds.forEach((_, index) => {
    pageIds[index] = add(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R /F3 ${fontItalic} 0 R >> >> /Contents ${contentIds[index]} 0 R >>`,
    );
  });
  objects[pagesId - 1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] >>`;
  const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((body, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}
