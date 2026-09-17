document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-projects-container');
    if (!container) return;

    const liveLinks = {
        'trujillo-ai-studio': 'https://ai.trujillomingorance.com',
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

    const nameOverrides = {
        'atm-tools': 'ATM Tools',
        'open-sentinel': 'Open-Sentinel',
        'rewrite-ai': 'Rewrite AI',
        'trujillo-ai-studio': 'Trujillo AI Studio',
        'trujillo-guides': 'Trujillo Guides',
        'focusguard-saas': 'FocusGuard SaaS'
    };

    // Dictionary for localized descriptions
    const descOverrides = {
        'es': {
            'atm-tools': 'Suite de herramientas cliente orientada a la accesibilidad y privacidad sin backend.',
            'open-sentinel': 'Telemetría local, alertas multicanal de arranque y control forense sin nube de terceros.',
            'rewrite-ai': 'Motor de reescritura indetectable y corrección de estilo en Cloudflare Edge.',
            'trujillo-ai-studio': 'Estudio de IA multimodal de ultra-alta velocidad sobre Groq LPU.',
            'trujillo-guides': 'Runbooks de infraestructura, ingeniería de producción y guías de administración.',
            'focusguard-saas': 'Filtrado DNS Zero-Trust perimetral contra malware, telemetría y rastreadores.'
        },
        'ca': {
            'atm-tools': 'Suite d\'eines client orientada a l\'accessibilitat i privacitat sense backend.',
            'open-sentinel': 'Telemetria local, alertes multicanal d\'arrencada i control forense sense núvol de tercers.',
            'rewrite-ai': 'Motor de reescriptura indetectable i correcció d\'estil a Cloudflare Edge.',
            'trujillo-ai-studio': 'Estudi d\'IA multimodal d\'ultra-alta velocitat sobre Groq LPU.',
            'trujillo-guides': 'Runbooks d\'infraestructura, enginyeria de producció i guies d\'administració.',
            'focusguard-saas': 'Filtrat DNS Zero-Trust perimetral contra malware, telemetria i rastrejadors.'
        },
        'en': {
            'atm-tools': 'Client-side tool suite focused on accessibility and privacy without backend.',
            'open-sentinel': 'Local telemetry, multi-channel boot alerts, and forensic control without third-party clouds.',
            'rewrite-ai': 'Undetectable rewriting engine and style correction on Cloudflare Edge.',
            'trujillo-ai-studio': 'Ultra-high-speed multimodal AI studio on Groq LPU.',
            'trujillo-guides': 'Infrastructure runbooks, production engineering, and administration guides.',
            'focusguard-saas': 'Zero-Trust perimeter DNS filtering against malware, telemetry, and trackers.'
        }
    };

    const excludeRepos = ['domain-root', 'portfolio', 'atm-labs-hub', 'savings'];

    const staticFallback = [
        { name: "trujillo-ai-studio", topics: ["Cloudflare Workers", "Groq", "Meta Llama 3.3"], html_url: "https://github.com/ATM-Software-Labs/trujillo-ai-studio" },
        { name: "rewrite-ai", topics: ["Cloudflare Pages", "Workers AI", "Groq"], html_url: "https://github.com/ATM-Software-Labs/rewrite-ai" },
        { name: "trujillo-guides", topics: ["Technical Docs", "Cloud", "Linux"], html_url: "https://github.com/ATM-Software-Labs/trujillo-guides" },
        { name: "focusguard-saas", topics: ["Zero-Trust", "DNS", "Cloudflare D1"], html_url: "https://github.com/ATM-Software-Labs/focusguard-saas" },
        { name: "atm-tools", topics: ["TypeScript", "Client-Side", "Edge"], html_url: "https://github.com/ATM-Software-Labs/atm-tools" },
        { name: "open-sentinel", topics: ["Python", "Bash", "Hardening"], html_url: "https://github.com/ATM-Software-Labs/open-sentinel" }
    ];

    function getCurrentLang() {
        return document.documentElement.lang || 'es';
    }

    function renderCards(repos) {
        let html = '';
        const currentLang = getCurrentLang();
        
        // Ensure only the 6 required repos are shown
        const targetRepos = ['trujillo-ai-studio', 'rewrite-ai', 'trujillo-guides', 'focusguard-saas', 'atm-tools', 'open-sentinel'];
        
        // Filter out non-target
        const filteredRepos = repos.filter(r => targetRepos.includes(r.name.toLowerCase()));
        
        // If API missed some, fill from fallback
        const finalRepos = [];
        targetRepos.forEach(target => {
            const found = filteredRepos.find(r => r.name.toLowerCase() === target);
            if (found) {
                finalRepos.push(found);
            } else {
                const fallbackObj = staticFallback.find(r => r.name.toLowerCase() === target);
                if (fallbackObj) finalRepos.push(fallbackObj);
            }
        });

        finalRepos.forEach(repo => {
            const nameLower = repo.name.toLowerCase();
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

            const cleanName = nameOverrides[nameLower] || repo.name;
            const descDict = descOverrides[currentLang] || descOverrides['es'];
            const finalDesc = descDict[nameLower] || repo.description;

            html += `
            <div class="min-card" data-category="${category}">
                <div class="min-card-header">
                    <h3 class="min-card-title">${cleanName}</h3>
                    <div style="display:flex; gap:0.5rem;">${linksHtml}</div>
                </div>
                <p class="min-card-desc">${finalDesc}</p>
                <div class="min-card-footer">
                    ${topicsHtml}
                </div>
            </div>
            `;
        });
        
        container.innerHTML = html;
    }

    function initProjects() {
        const cached = localStorage.getItem('atm_github_repos');
        const cacheTime = localStorage.getItem('atm_github_repos_time');
        const now = new Date().getTime();

        if (cached && cacheTime && (now - parseInt(cacheTime)) < 86400000) {
            renderCards(JSON.parse(cached));
            return;
        }

        fetch('https://api.github.com/orgs/ATM-Software-Labs/repos?type=public&sort=updated&per_page=100')
            .then(res => {
                if (!res.ok) throw new Error('API Rate Limit');
                return res.json();
            })
            .then(data => {
                localStorage.setItem('atm_github_repos', JSON.stringify(data));
                localStorage.setItem('atm_github_repos_time', now.toString());
                renderCards(data);
            })
            .catch(err => {
                console.warn('Usando fallback estático:', err);
                renderCards(staticFallback);
            });
    }

    initProjects();

    // Re-render when language changes
    window.addEventListener('languageChanged', () => {
        const cached = localStorage.getItem('atm_github_repos');
        if (cached) {
            renderCards(JSON.parse(cached));
        } else {
            renderCards(staticFallback);
        }
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                const cards = document.querySelectorAll('.min-card');
                
                cards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
