
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
            
            let linksHtml = `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="min-card-link github-icon" title="Ver código en GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>`;
            
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
