const fs = require('fs');
const path = require('path');

// 1. Rewrite the "Proyectos" section and Certifications link
let html = fs.readFileSync('index.html', 'utf8');

// Update Certification link
html = html.replace(/<a href="https:\/\/learn\.microsoft\.com\/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fas fa-external-link-alt"><\/i> Verificar<\/a>/, '<a href="https://learn.microsoft.com/en-us/users/albertotrujillo-8566/credentials/f89c9ffb072c4c9a?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fas fa-external-link-alt"></i> Verificar</a>');

// Replace the entire <section id="proyectos">...</section>
const newProyectos = `
        <!-- Proyectos Section (Dynamic GitHub ATM-Software-Labs) -->
        <section id="proyectos" class="section-padding bg-alt scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="projects_title">Lab & Projects</h2>
                
                <!-- Minimalist Category Filters -->
                <div class="min-filters" style="display:flex; gap:0.5rem; flex-wrap:wrap; justify-content:center; margin-bottom:2rem;">
                    <button type="button" class="min-filter-btn active" data-filter="Todos" style="background:#27272a; border:1px solid #3f3f46; color:#f4f4f5; padding:0.5rem 1rem; border-radius:999px; font-size:0.875rem; cursor:pointer; transition:all 0.2s;">Todos</button>
                    <button type="button" class="min-filter-btn" data-filter="Sistemas & Edge" style="background:transparent; border:1px solid #27272a; color:#a1a1aa; padding:0.5rem 1rem; border-radius:999px; font-size:0.875rem; cursor:pointer; transition:all 0.2s;">Sistemas & Edge</button>
                    <button type="button" class="min-filter-btn" data-filter="Ciberseguridad" style="background:transparent; border:1px solid #27272a; color:#a1a1aa; padding:0.5rem 1rem; border-radius:999px; font-size:0.875rem; cursor:pointer; transition:all 0.2s;">Ciberseguridad</button>
                    <button type="button" class="min-filter-btn" data-filter="Herramientas" style="background:transparent; border:1px solid #27272a; color:#a1a1aa; padding:0.5rem 1rem; border-radius:999px; font-size:0.875rem; cursor:pointer; transition:all 0.2s;">Herramientas</button>
                </div>

                <!-- Dynamic Grid -->
                <div id="dynamic-projects-container" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-top:1rem;">
                    <div style="text-align:center; grid-column:1/-1; padding:2rem; color:#a1a1aa;">
                        <i class="fas fa-circle-notch fa-spin" style="font-size:1.5rem;"></i><br><br>Cargando repositorios desde ATM Software Labs...
                    </div>
                </div>
            </div>
        </section>
`;

html = html.replace(/<section id="proyectos"[\s\S]*?<\/section>/, newProyectos);

// Insert CSS if not exists
const cssStyles = `
<style>
.min-card {
    background-color: rgba(24, 24, 27, 0.4);
    border: 1px solid #27272a;
    border-radius: 0.75rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease;
}
.min-card:hover {
    background-color: rgba(24, 24, 27, 0.8);
    border-color: #3f3f46;
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
    color: #f4f4f5;
    margin: 0;
    text-transform: capitalize;
}
.min-card-link {
    color: #a1a1aa;
    transition: color 0.2s;
}
.min-card-link:hover { color: #f4f4f5; }
.min-card-desc {
    font-size: 0.75rem;
    color: #a1a1aa;
    line-height: 1.6;
    margin-bottom: 1rem;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.min-card-footer {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}
.min-badge {
    font-size: 10px;
    background-color: #27272a;
    color: #d4d4d8;
    padding: 2px 6px;
    border-radius: 0.375rem;
}
</style>
`;
if (!html.includes('.min-card')) {
    html = html.replace('</head>', cssStyles + '</head>');
}

// Ensure the new JS is imported
if (!html.includes('github-projects.js')) {
    html = html.replace('</body>', '    <script type="module" src="/src/js/github-projects.js"></script>\n</body>');
}

fs.writeFileSync('index.html', html);


// 2. Create the JS file for dynamic projects
const jsContent = `
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('dynamic-projects-container');
    if (!container) return;

    const liveLinks = {
        'trujillo-ai': 'https://ai.trujillomingorance.com',
        'rewrite-ai': 'https://rewrite.trujillomingorance.com',
        'trujillo-guides': 'https://guides.trujillomingorance.com',
        'focusguard': 'https://focusguard.trujillomingorance.com',
        'daily-toolbox': 'https://tools.trujillomingorance.com',
        'atm-tools': 'https://tools.trujillomingorance.com'
    };

    const categoriesMap = {
        'trujillo-ai': 'Sistemas & Edge',
        'rewrite-ai': 'Herramientas',
        'trujillo-guides': 'Sistemas & Edge',
        'focusguard': 'Ciberseguridad',
        'daily-toolbox': 'Herramientas',
        'atm-tools': 'Herramientas',
        'open-sentinel': 'Ciberseguridad',
        'scripts-1asixc': 'Sistemas & Edge',
        'solana-forensics': 'Ciberseguridad'
    };

    const excludeRepos = ['domain-root', 'portfolio', 'atm-labs-hub', 'savings'];

    try {
        const res = await fetch('https://api.github.com/orgs/ATM-Software-Labs/repos?per_page=100&type=public');
        if (!res.ok) throw new Error('API limits or error');
        const repos = await res.json();

        let html = '';
        repos.forEach(repo => {
            const nameLower = repo.name.toLowerCase();
            if (excludeRepos.includes(nameLower)) return;

            const liveUrl = liveLinks[nameLower] || null;
            const url = liveUrl || repo.html_url;
            const icon = liveUrl ? '<i class="fas fa-external-link-alt"></i>' : '<i class="fab fa-github"></i>';
            const category = categoriesMap[nameLower] || 'Herramientas';

            let topicsHtml = (repo.topics || []).slice(0, 3).map(t => \`<span class="min-badge">\${t}</span>\`).join('');
            if (!topicsHtml && repo.language) {
                topicsHtml = \`<span class="min-badge">\${repo.language}</span>\`;
            }

            html += \`
            <div class="min-card" data-category="\${category}">
                <div class="min-card-header">
                    <h3 class="min-card-title">\${repo.name.replace(/-/g, ' ')}</h3>
                    <a href="\${url}" target="_blank" rel="noopener noreferrer" class="min-card-link">\${icon}</a>
                </div>
                <p class="min-card-desc">\${repo.description || 'Sin descripción disponible.'}</p>
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
                // Update active state and styles
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

    } catch (error) {
        console.error('Error fetching repos', error);
        container.innerHTML = '<p style="text-align:center; color:#ef4444; grid-column:1/-1;">Error al cargar repositorios desde GitHub API.</p>';
    }
});
`;

fs.writeFileSync('src/js/github-projects.js', jsContent);
console.log('GitHub integration applied!');
