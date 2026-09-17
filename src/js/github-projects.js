
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
        const topicsHtml = repo.tags.map(t => `<span class="min-badge">${t}</span>`).join('');

        html += `
        <div class="min-card" data-category="${repo.category}">
            <div class="min-card-header">
                <h3 class="min-card-title">${repo.name}</h3>
                <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="min-card-link">${icon}</a>
            </div>
            <p class="min-card-desc">${repo.description}</p>
            <div class="min-card-footer">
                ${topicsHtml}
            </div>
        </div>
        `;
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
