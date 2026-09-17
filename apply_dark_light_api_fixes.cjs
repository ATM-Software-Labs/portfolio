const fs = require('fs');

//---------------------------------------------------------
// 1. UPDATE github-projects.js (Dynamic Resilient Cache)
//---------------------------------------------------------
const githubJS = `
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-projects-container');
    if (!container) return;

    const liveLinks = {
        'trujillo-ai-studio': 'https://ai.trujillomingorance.com',
        'trujillo-ai': 'https://ai.trujillomingorance.com', // just in case
        'focusguard-saas': 'https://focusguard.trujillomingorance.com',
        'atm-tools': 'https://tools.trujillomingorance.com',
        'rewrite-ai': 'https://rewrite.trujillomingorance.com',
        'trujillo-guides': 'https://guides.trujillomingorance.com'
    };

    const categoriesMap = {
        'trujillo-ai-studio': 'Sistemas & Edge',
        'rewrite-ai': 'Herramientas',
        'trujillo-guides': 'Sistemas & Edge',
        'focusguard-saas': 'Ciberseguridad',
        'atm-tools': 'Herramientas',
        'open-sentinel': 'Ciberseguridad'
    };

    const excludeRepos = ['domain-root', 'portfolio', 'atm-labs-hub', 'savings'];

    const staticFallback = [
        {
            name: "trujillo-ai-studio",
            description: "Asistente multimodal en Groq LPU con streaming en el Edge, visión y razonamiento de código.",
            topics: ["Cloudflare Workers", "Groq", "Meta Llama 3.3"],
            html_url: "https://github.com/ATM-Software-Labs/trujillo-ai-studio"
        },
        {
            name: "rewrite-ai",
            description: "Motor de reescritura y análisis textual en el Edge con proxies optimizados.",
            topics: ["Cloudflare Pages", "Workers AI", "Groq"],
            html_url: "https://github.com/ATM-Software-Labs/rewrite-ai"
        },
        {
            name: "trujillo-guides",
            description: "Runbooks de infraestructura, ingeniería de producción y guías de sistemas.",
            topics: ["Technical Docs", "Cloud", "Linux"],
            html_url: "https://github.com/ATM-Software-Labs/trujillo-guides"
        },
        {
            name: "focusguard-saas",
            description: "Proxy DNS Zero-Trust con filtrado perimetral contra malware y telemetría no deseada.",
            topics: ["Zero-Trust", "DNS", "Cloudflare D1"],
            html_url: "https://github.com/ATM-Software-Labs/focusguard-saas"
        },
        {
            name: "atm-tools",
            description: "Suite de utilidades técnicas client-side enfocada en privacidad y cero backend.",
            topics: ["TypeScript", "Client-Side", "Edge"],
            html_url: "https://github.com/ATM-Software-Labs/atm-tools"
        },
        {
            name: "open-sentinel",
            description: "Monitorización forense de endpoints, telemetría y alertas multicanal de arranque.",
            topics: ["Python", "Bash", "Hardening"],
            html_url: "https://github.com/ATM-Software-Labs/open-sentinel"
        }
    ];

    function renderCards(repos) {
        let html = '';
        repos.forEach(repo => {
            const nameLower = repo.name.toLowerCase();
            if (excludeRepos.includes(nameLower)) return;

            const category = categoriesMap[nameLower] || 'Herramientas';
            const liveUrl = liveLinks[nameLower];
            
            let linksHtml = \`<a href="\${repo.html_url}" target="_blank" rel="noopener noreferrer" class="min-card-link github-icon" title="Ver código en GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>\`;
            
            if (liveUrl) {
                linksHtml += \`<a href="\${liveUrl}" target="_blank" rel="noopener noreferrer" class="min-card-link external-icon" title="Visitar despliegue en vivo"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>\`;
            }

            let topicsHtml = (repo.topics || []).slice(0, 3).map(t => \`<span class="min-badge">\${t}</span>\`).join('');
            if (!topicsHtml && repo.language) {
                topicsHtml = \`<span class="min-badge">\${repo.language}</span>\`;
            }

            const cleanName = repo.name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

            html += \`
            <div class="min-card" data-category="\${category}">
                <div class="min-card-header">
                    <h3 class="min-card-title">\${cleanName}</h3>
                    <div style="display:flex; gap:0.5rem;">\${linksHtml}</div>
                </div>
                <p class="min-card-desc">\${repo.description || 'Sin descripción disponible.'}</p>
                <div class="min-card-footer">
                    \${topicsHtml}
                </div>
            </div>
            \`;
        });
        
        container.innerHTML = html;
        bindFilters();
    }

    function bindFilters() {
        const filterBtns = document.querySelectorAll('.min-filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    // Reset to unselected styles (respecting theme if needed, but keeping it flat)
                    b.style.background = 'transparent';
                    b.style.color = 'var(--text-muted)';
                    b.style.borderColor = 'var(--border-color)';
                });
                btn.classList.add('active');
                btn.style.background = 'var(--btn-bg)';
                btn.style.color = 'var(--text-main)';
                btn.style.borderColor = 'var(--border-color)';
                
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
    }

    // Skeleton loader
    const skeletonHtml = Array(6).fill().map(() => \`
        <div class="skeleton-card" style="border-radius: 0.75rem; height: 144px;"></div>
    \`).join('');
    container.innerHTML = skeletonHtml;

    const abortController = new AbortController();
    const timeout = setTimeout(() => abortController.abort(), 8000);

    fetch('https://api.github.com/orgs/ATM-Software-Labs/repos?per_page=100&sort=updated', {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        signal: abortController.signal
    })
    .then(res => {
        clearTimeout(timeout);
        if (!res.ok) throw new Error('API limits or error');
        return res.json();
    })
    .then(repos => {
        localStorage.setItem('atm_repos_cache', JSON.stringify(repos));
        renderCards(repos);
    })
    .catch(error => {
        console.warn('GitHub API Fetch failed, using cache or fallback.', error);
        const cached = localStorage.getItem('atm_repos_cache');
        if (cached) {
            try {
                renderCards(JSON.parse(cached));
            } catch(e) {
                renderCards(staticFallback);
            }
        } else {
            renderCards(staticFallback);
        }
    });
});
`;
fs.writeFileSync('src/js/github-projects.js', githubJS);


//---------------------------------------------------------
// 2. CSS Dark/Light Mode Fixes & Inject into index.html
//---------------------------------------------------------
let html = fs.readFileSync('index.html', 'utf8');

// The styling requirements for the min-card and availability bar:
const cssStyles = `
<style>
/* Light/Dark Mode Variables */
:root {
    --bg-card: #ffffff;
    --border-card: #e4e4e7;
    --hover-border: #d4d4d8;
    --text-title: #18181b;
    --text-desc: #52525b;
    --bg-badge: #f4f4f5;
    --text-badge: #3f3f46;
    --border-badge: rgba(228,228,231,0.6);
    --shadow-card: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    
    --btn-bg: #e4e4e7;
    --text-main: #18181b;
    --text-muted: #71717a;
    --border-color: #d4d4d8;
}

html.dark, body.dark {
    --bg-card: rgba(24, 24, 27, 0.4);
    --border-card: #27272a;
    --hover-border: #3f3f46;
    --text-title: #f4f4f5;
    --text-desc: #a1a1aa;
    --bg-badge: #27272a;
    --text-badge: #d4d4d8;
    --border-badge: rgba(63,63,70,0.4);
    --shadow-card: none;
    
    --btn-bg: #27272a;
    --text-main: #f4f4f5;
    --text-muted: #a1a1aa;
    --border-color: #27272a;
}

/* Card Styles */
.min-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 0.75rem;
    padding: 16px;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-card);
}
.min-card:hover {
    border-color: var(--hover-border);
}
.min-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}
.min-card-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-title);
    margin: 0;
}
.min-card-link {
    color: var(--text-desc);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}
.min-card-link:hover { color: var(--text-title); }
.min-card-desc {
    font-size: 0.75rem;
    color: var(--text-desc);
    line-height: 1.6;
    margin-bottom: 1rem;
    flex-grow: 1;
}
.min-card-footer {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}
.min-badge {
    font-size: 11px;
    background-color: var(--bg-badge);
    color: var(--text-badge);
    border: 1px solid var(--border-badge);
    padding: 2px 8px;
    border-radius: 0.375rem;
}

/* Availability Badges */
.avail-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.375rem 0.875rem;
    background-color: var(--bg-card);
    border: 1px solid var(--border-card);
    border-radius: 9999px;
    font-size: 0.75rem;
    color: var(--text-title);
    box-shadow: var(--shadow-card);
}

/* Skeleton Loading */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
}
.skeleton-card {
    background-color: var(--border-card);
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
`;

// Remove the old inline .min-card styles I added previously
html = html.replace(/<style>\s*\.min-card \{[\s\S]*?<\/style>/, cssStyles);

// Update Availability Bar in index.html to use the new class instead of inline styles
const newAvailHtml = `
                <div class="availability-bar" style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; justify-content:center; padding: 1rem; margin-top: 1rem;">
                    <span class="avail-badge">
                        <span style="width:8px; height:8px; background-color:#10b981; border-radius:50%; display:inline-block;"></span>
                        <span data-i18n="avail_bar_1">Disponibilidad Inmediata</span>
                    </span>
                    <span class="avail-badge" data-i18n="avail_bar_2">Barcelona / Remoto</span>
                    <span class="avail-badge" data-i18n="avail_bar_3">Cuota de Discapacidad >33% Acreditada</span>
                </div>
`;
html = html.replace(/<div class="availability-bar"[\s\S]*?<\/div>/, newAvailHtml);

fs.writeFileSync('index.html', html);


//---------------------------------------------------------
// 3. ATTESTTO TEXTS & DATES
//---------------------------------------------------------
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

// Hard replace all attestto period references
i18n = i18n.replace(/exp_attestto_period: '.*',/g, "exp_attestto_period: 'Jul. 2026 - Sept. 2026 · 3 meses',");

// Let's accurately set them per language block
const esBlock = i18n.match(/(const es = \{[\s\S]*?\})/);
if (esBlock) {
    let es = esBlock[0].replace(/exp_attestto_period: '.*',/, "exp_attestto_period: 'jul. 2026 - sept. 2026 · 3 meses',");
    i18n = i18n.replace(esBlock[0], es);
}

const caBlock = i18n.match(/(const ca = \{[\s\S]*?\})/);
if (caBlock) {
    let ca = caBlock[0].replace(/exp_attestto_period: '.*',/, "exp_attestto_period: 'jul. 2026 - set. 2026 · 3 mesos',");
    i18n = i18n.replace(caBlock[0], ca);
}

const enBlock = i18n.match(/(const en = \{[\s\S]*?\})/);
if (enBlock) {
    let en = enBlock[0].replace(/exp_attestto_period: '.*',/, "exp_attestto_period: 'Jul. 2026 - Sep. 2026 · 3 mos',");
    i18n = i18n.replace(enBlock[0], en);
}

// REMOVE the dynamic calculation at the end of i18n.js
i18n = i18n.replace(/translations\.es\.exp_attestto_period = calculateExperience.*?;/g, "");
i18n = i18n.replace(/translations\.ca\.exp_attestto_period = calculateExperience.*?;/g, "");
i18n = i18n.replace(/translations\.en\.exp_attestto_period = calculateExperience.*?;/g, "");

fs.writeFileSync('src/js/i18n.js', i18n);


// Update terminal.js
let terminal = fs.readFileSync('src/js/terminal.js', 'utf8');
terminal = terminal.replace(/const attesttoPeriod = calculateExperience.*/g, "const attesttoPeriod = lang === 'en' ? 'Jul 2026 - Sep 2026' : (lang === 'ca' ? 'jul. 2026 - set. 2026' : 'jul. 2026 - sept. 2026');");

// Also update the index.html "whoami" backup text
let html2 = fs.readFileSync('index.html', 'utf8');
html2 = html2.replace(/Current Positions: Attestto.*?<br>/g, ""); // Remove it completely or change to Ex-Attestto
html2 = html2.replace(/<span class="meta-pill"><i class="fas fa-building text-green"><\/i> Attestto<\/span>/g, "");
fs.writeFileSync('index.html', html2);

console.log('API, Light Mode, and Attestto fixes applied!');
