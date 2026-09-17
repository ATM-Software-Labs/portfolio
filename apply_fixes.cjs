const fs = require('fs');

//---------------------------------------------------------
// 1. UPDATE github-projects.js (Make it static)
//---------------------------------------------------------
const staticProjectsJS = `
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-projects-container');
    if (!container) return;

    const projects = [
        {
            name: "Trujillo AI Studio",
            description: "Asistente multimodal en Groq LPU con streaming en el Edge, visión y razonamiento de código.",
            tags: ["Cloudflare Workers", "Groq", "Meta Llama 3.3"],
            url: "https://ai.trujillomingorance.com",
            category: "Sistemas & Edge"
        },
        {
            name: "Rewrite AI",
            description: "Motor de reescritura y análisis textual en el Edge con proxies optimizados.",
            tags: ["Cloudflare Pages", "Workers AI", "Groq"],
            url: "https://rewrite.trujillomingorance.com",
            category: "Herramientas"
        },
        {
            name: "Trujillo Engineering Guides",
            description: "Runbooks de infraestructura, ingeniería de producción y guías de sistemas.",
            tags: ["Technical Docs", "Cloud", "Linux"],
            url: "https://guides.trujillomingorance.com",
            category: "Sistemas & Edge"
        },
        {
            name: "FocusGuard SaaS",
            description: "Proxy DNS Zero-Trust con filtrado perimetral contra malware y telemetría no deseada.",
            tags: ["Zero-Trust", "DNS", "Cloudflare D1"],
            url: "https://focusguard.trujillomingorance.com",
            category: "Ciberseguridad"
        },
        {
            name: "ATM Tools",
            description: "Suite de utilidades técnicas client-side enfocada en privacidad y cero backend.",
            tags: ["TypeScript", "Client-Side", "Edge"],
            url: "https://tools.trujillomingorance.com",
            category: "Herramientas"
        },
        {
            name: "Open-Sentinel",
            description: "Monitorización forense de endpoints, telemetría y alertas multicanal de arranque.",
            tags: ["Python", "Bash", "Hardening"],
            url: "https://github.com/ATM-Software-Labs/open-sentinel",
            category: "Ciberseguridad"
        }
    ];

    let html = '';
    projects.forEach(repo => {
        const isGithub = repo.url.includes('github.com');
        const icon = isGithub ? '<i class="fab fa-github"></i>' : '<i class="fas fa-external-link-alt"></i>';
        const topicsHtml = repo.tags.map(t => \`<span class="min-badge">\${t}</span>\`).join('');

        html += \`
        <div class="min-card" data-category="\${repo.category}">
            <div class="min-card-header">
                <h3 class="min-card-title">\${repo.name}</h3>
                <a href="\${repo.url}" target="_blank" rel="noopener noreferrer" class="min-card-link">\${icon}</a>
            </div>
            <p class="min-card-desc">\${repo.description}</p>
            <div class="min-card-footer">
                \${topicsHtml}
            </div>
        </div>
        \`;
    });
    
    container.innerHTML = html;

    // Setup filters
    const filterBtns = document.querySelectorAll('.min-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.style.background = 'transparent';
                b.style.color = '#a1a1aa';
                b.style.borderColor = '#27272a';
            });
            btn.classList.add('active');
            btn.style.background = '#27272a';
            btn.style.color = '#f4f4f5';
            btn.style.borderColor = '#3f3f46';
            
            const filter = btn.getAttribute('data-filter');
            const cards = container.querySelectorAll('.min-card');
            cards.forEach(card => {
                if (filter === 'Todos' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
`;
fs.writeFileSync('src/js/github-projects.js', staticProjectsJS);


//---------------------------------------------------------
// 2. UPDATE index.html
//---------------------------------------------------------
let html = fs.readFileSync('index.html', 'utf8');

// A. Language Selector (Fix visual)
// First, extract the old lang-dropdown-wrapper logic
const oldDropdownDesktop = /<div class="lang-dropdown-wrapper"[\s\S]*?<\/div>\s*<\/div>/;
const oldDropdownMobile = /<div class="lang-dropdown-wrapper"[\s\S]*?<\/div>\s*<\/div>/; // We'll just replace the whole desktop and mobile instances

const newDropdownHtml = idPrefix => `
<div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">
    <button type="button" id="${idPrefix}lang-trigger" class="lang-btn" style="background-color: rgba(24,24,27,0.9); border: 1px solid rgba(63,63,70,0.6); border-radius: 0.5rem; padding: 0.375rem 0.75rem; color: #e4e4e7; display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 500; cursor: pointer; transition: background 0.2s;">
        <span id="${idPrefix}current-lang-text" style="display:flex; align-items:center; gap:6px;"><svg width="16" height="12" viewBox="0 0 3 2"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg> ES</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.7;"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div id="${idPrefix}lang-menu" style="display: none; position: absolute; top: 100%; ${idPrefix === 'mobile-' ? 'left' : 'right'}: 0; margin-top: 0.5rem; background-color: #09090b; border: 1px solid #27272a; border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); min-width: 140px; z-index: 50; padding: 0.375rem; flex-direction: column; gap: 0.25rem;">
        <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: #d4d4d8; padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; width: 100%; display:flex; align-items:center; gap:8px; transition: background 0.2s;"><svg width="16" height="12" viewBox="0 0 3 2"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg> Español</button>
        <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: #d4d4d8; padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; width: 100%; display:flex; align-items:center; gap:8px; transition: background 0.2s;"><svg width="16" height="12" viewBox="0 0 9 6"><rect width="9" height="6" fill="#fedd00"/><path d="M0 1h9v1H0zm0 2h9v1H0z" fill="#da121a"/></svg> Català</button>
        <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: #d4d4d8; padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; width: 100%; display:flex; align-items:center; gap:8px; transition: background 0.2s;"><svg width="16" height="12" viewBox="0 0 60 30"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg> English</button>
    </div>
</div>
`;

// Replace desktop dropdown
html = html.replace(/<div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">[\s\S]*?<\/div>\s*<\/div>/, newDropdownHtml(''));
// Replace mobile dropdown
html = html.replace(/<div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">[\s\S]*?<\/div>\s*<\/div>/, newDropdownHtml('mobile-'));

// Update the script for the dropdown (trigger update)
html = html.replace(/trigger\.querySelector\('span'\)\.textContent = btn\.getAttribute\('data-lang'\)\.toUpperCase\(\);/g, "trigger.querySelector('span').innerHTML = btn.innerHTML.split(' ')[0] + ' ' + btn.getAttribute('data-lang').toUpperCase();");


// B. Availability Bar
const newAvailHtml = `
                <div class="availability-bar" style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; justify-content:center; padding: 1rem; margin-top: 1rem;">
                    <span style="display:flex; align-items:center; gap:8px; padding: 0.375rem 0.875rem; background: rgba(24,24,27,0.6); border: 1px solid rgba(39,39,42,0.8); border-radius: 9999px; font-size: 0.75rem; color: #d4d4d8;">
                        <span style="width:8px; height:8px; background-color:#10b981; border-radius:50%; display:inline-block;"></span>
                        <span data-i18n="avail_bar_1">Disponibilidad Inmediata</span>
                    </span>
                    <span style="display:flex; align-items:center; gap:8px; padding: 0.375rem 0.875rem; background: rgba(24,24,27,0.6); border: 1px solid rgba(39,39,42,0.8); border-radius: 9999px; font-size: 0.75rem; color: #d4d4d8;" data-i18n="avail_bar_2">Barcelona / Remoto</span>
                    <span style="display:flex; align-items:center; gap:8px; padding: 0.375rem 0.875rem; background: rgba(24,24,27,0.6); border: 1px solid rgba(39,39,42,0.8); border-radius: 9999px; font-size: 0.75rem; color: #d4d4d8;" data-i18n="avail_bar_3">Cuota de Discapacidad >33% Acreditada</span>
                </div>
`;
html = html.replace(/<div class="availability-bar" style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; justify-content:center; background: rgba\(24, 24, 27, 0\.4\); border: 1px solid rgba\(255,255,255,0\.05\); padding: 1rem; border-radius: 0\.75rem;">[\s\S]*?<\/div>/, newAvailHtml);


// C. Credentials Card Width
html = html.replace(/<div class="grid-1">/, '<div class="grid-1" style="max-width: 800px; margin: 0 auto;">');

// D. Project Card CSS Fixes (Flat style, 16px padding, 11px tags)
html = html.replace(/\.min-card \{[\s\S]*?\}/, `.min-card {
    background-color: rgba(24, 24, 27, 0.4);
    border: 1px solid #27272a;
    border-radius: 0.75rem;
    padding: 16px;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
}`);
html = html.replace(/\.min-badge \{[\s\S]*?\}/, `.min-badge {
    font-size: 11px;
    background-color: #27272a;
    color: #d4d4d8;
    padding: 2px 8px;
    border-radius: 0.375rem;
}`);

fs.writeFileSync('index.html', html);


//---------------------------------------------------------
// 3. UPDATE i18n.js
//---------------------------------------------------------
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

// Attestto Dates
i18n = i18n.replace(/Jul\. 2026 - Presente/g, 'Jul. 2026 - Sept. 2026');
i18n = i18n.replace(/Jul\. 2026 - Actualidad/g, 'Jul. 2026 - Sept. 2026');
i18n = i18n.replace(/Jul\. 2026 - Present/g, 'Jul. 2026 - Sept. 2026');
i18n = i18n.replace(/Jul\. 2026 - .* · 3/g, 'Jul. 2026 - Sept. 2026 · 3'); // Catch all

// Availability texts
i18n = i18n.replace(/avail_bar_1: 'Immediate Availability'/g, "avail_bar_1: 'Immediate Availability'");
i18n = i18n.replace(/avail_bar_3: 'Disability Quota Eligible \(>33%\)'/g, "avail_bar_3: 'Disability Quota Eligible (>33%)'");
// Also update the ES/CA versions if they exist (usually the first set is ES)
let avail1Count = 0;
i18n = i18n.replace(/avail_bar_1: '.*',/g, () => {
    avail1Count++;
    if(avail1Count === 1) return "avail_bar_1: 'Disponibilidad Inmediata',";
    if(avail1Count === 2) return "avail_bar_1: 'Disponibilitat Immediata',";
    return "avail_bar_1: 'Immediate Availability',";
});

let avail3Count = 0;
i18n = i18n.replace(/avail_bar_3: '.*',/g, () => {
    avail3Count++;
    if(avail3Count === 1) return "avail_bar_3: 'Cuota de Discapacidad >33% Acreditada',";
    if(avail3Count === 2) return "avail_bar_3: 'Quota de Discapacitat >33% Acreditada',";
    return "avail_bar_3: 'Disability Quota Eligible (>33%)',";
});

fs.writeFileSync('src/js/i18n.js', i18n);

console.log('UI, Data, and Logic fixes applied!');
