
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
            
            let linksHtml = `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="min-card-link github-icon" title="Ver código en GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>`;
            
            if (liveUrl) {
                linksHtml += `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="min-card-link external-icon" title="Visitar despliegue en vivo"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>`;
            }

            let topicsHtml = (repo.topics || []).slice(0, 3).map(t => `<span class="min-badge">${t}</span>`).join('');
            if (!topicsHtml && repo.language) {
                topicsHtml = `<span class="min-badge">${repo.language}</span>`;
            }

            const cleanName = repo.name.replace(/-/g, ' ').replace(/(^w|sw)/g, m => m.toUpperCase());

            html += `
            <div class="min-card" data-category="${category}">
                <div class="min-card-header">
                    <h3 class="min-card-title">${cleanName}</h3>
                    <div style="display:flex; gap:0.5rem;">${linksHtml}</div>
                </div>
                <p class="min-card-desc">${repo.description || 'Sin descripción disponible.'}</p>
                <div class="min-card-footer">
                    ${topicsHtml}
                </div>
            </div>
            `;
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
    const skeletonHtml = Array(6).fill().map(() => `
        <div class="skeleton-card" style="border-radius: 0.75rem; height: 144px;"></div>
    `).join('');
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
