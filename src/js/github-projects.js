
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

            let topicsHtml = (repo.topics || []).slice(0, 3).map(t => `<span class="min-badge">${t}</span>`).join('');
            if (!topicsHtml && repo.language) {
                topicsHtml = `<span class="min-badge">${repo.language}</span>`;
            }

            html += `
            <div class="min-card" data-category="${category}">
                <div class="min-card-header">
                    <h3 class="min-card-title">${repo.name.replace(/-/g, ' ')}</h3>
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="min-card-link">${icon}</a>
                </div>
                <p class="min-card-desc">${repo.description || 'Sin descripción disponible.'}</p>
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
