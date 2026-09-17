const fs = require('fs');

//---------------------------------------------------------
// 1. UPDATE index.html
//---------------------------------------------------------
let html = fs.readFileSync('index.html', 'utf8');

// --- A) Navigation Dropdown ---
const newLangSelector = `
                    <div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">
                        <button type="button" id="lang-trigger" class="lang-btn" style="background-color: rgba(24, 24, 27, 0.8); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 0.5rem; padding: 0.5rem 1rem; color: white; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <span id="current-lang-text">ES</span> <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i>
                        </button>
                        <div id="lang-menu" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background-color: #09090b; border: 1px solid #27272a; border-radius: 0.75rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); min-width: 120px; z-index: 50; overflow: hidden; flex-direction: column;">
                            <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: white; padding: 0.75rem 1rem; text-align: left; cursor: pointer; transition: background 0.2s;">Espanol</button>
                            <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: white; padding: 0.75rem 1rem; text-align: left; cursor: pointer; transition: background 0.2s;">Catala</button>
                            <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: white; padding: 0.75rem 1rem; text-align: left; cursor: pointer; transition: background 0.2s;">English</button>
                        </div>
                    </div>
`;

// Replace desktop switcher
html = html.replace(/<div class="lang-switcher">[\s\S]*?<\/div>/, newLangSelector);
// Replace mobile switcher
html = html.replace(/<div class="lang-switcher mobile-lang-switcher">[\s\S]*?<\/div>/, newLangSelector.replace('id="lang-trigger"', 'id="mobile-lang-trigger"').replace('id="lang-menu"', 'id="mobile-lang-menu"').replace('right: 0', 'left: 0'));

// Add inline script before body closing to handle dropdown
const dropdownScript = `
<script>
document.addEventListener('DOMContentLoaded', () => {
  function setupDropdown(triggerId, menuId) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    if (!trigger || !menu) return;
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = menu.style.display === 'flex';
      menu.style.display = isVisible ? 'none' : 'flex';
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !trigger.contains(e.target)) {
        menu.style.display = 'none';
      }
    });

    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        trigger.querySelector('span').textContent = btn.getAttribute('data-lang').toUpperCase();
        menu.style.display = 'none';
      });
      // hover effect
      btn.addEventListener('mouseenter', () => btn.style.backgroundColor = 'rgba(255,255,255,0.1)');
      btn.addEventListener('mouseleave', () => btn.style.backgroundColor = 'transparent');
    });
  }
  setupDropdown('lang-trigger', 'lang-menu');
  setupDropdown('mobile-lang-trigger', 'mobile-lang-menu');
});
</script>
`;
if (!html.includes('setupDropdown')) {
  html = html.replace('</body>', dropdownScript + '\n</body>');
}


// --- B) Minimalist Hero (2 Columns) ---
// Remove right column card completely (class="profile-card")
html = html.replace(/<div class="profile-card glass-card scroll-reveal fade-up">[\s\S]*?<\/div>\s*<\/div>/, '</div>');

// Remove horizontal stats band completely (class="hero-stats")
html = html.replace(/<div class="hero-stats scroll-reveal fade-up"[\s\S]*?<\/div>\s*<\/div>/, '');

// Fix grid from 1fr 350px to 2 columns evenly or suitable for terminal
html = html.replace(/grid-template-columns:\s*1fr\s+350px;/, 'grid-template-columns: 1fr 1fr;');

// Ensure name is H1
html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1 class="hero-title scroll-reveal" data-i18n="hero_title">Alberto Trujillo</h1>');

// Remove badges (hero-tags) inside hero-content
html = html.replace(/<div class="hero-tags">[\s\S]*?<\/div>/, '');

// Replace Hero content text with the requested ones, handled mostly via i18n.js, but make sure the HTML is clean
html = html.replace(/<h2 class="hero-subtitle[^"]*" data-i18n="hero_subtitle">[^<]*<\/h2>/, '<h2 class="hero-subtitle scroll-reveal typing-effect" data-i18n="hero_subtitle" style="font-size:1.5rem; line-height:1.4; color:#a1a1aa; margin-bottom:1.5rem;">Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID / IAM · IT Infrastructure</h2>');

html = html.replace(/<p class="hero-description[^"]*" data-i18n="hero_description">[^<]*<\/p>/, '<p class="hero-description scroll-reveal" data-i18n="hero_description">Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.</p>');


// --- C) Key Facts / Availability ---
// Replace the 4 big cards with a single bar
const newAvailabilityBar = `
                <div class="availability-bar" style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; justify-content:center; background: rgba(24, 24, 27, 0.4); border: 1px solid rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.75rem;">
                    <span style="padding: 0.5rem 1rem; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 9999px; font-size: 0.875rem; color: #60a5fa;" data-i18n="avail_bar_1">Immediate Availability</span>
                    <span style="padding: 0.5rem 1rem; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 9999px; font-size: 0.875rem; color: #c084fc;" data-i18n="avail_bar_2">Barcelona / Remote</span>
                    <span style="padding: 0.5rem 1rem; background: rgba(249, 115, 22, 0.1); border: 1px solid rgba(249, 115, 22, 0.2); border-radius: 9999px; font-size: 0.875rem; color: #fb923c;" data-i18n="avail_bar_3">Disability Quota Eligible (>33%)</span>
                </div>
`;
html = html.replace(/<div class="grid-4 availability-grid">[\s\S]*?<\/div>\s*<\/div>/, newAvailabilityBar + '\n            </div>');

// Ensure section title remains or adjust
// html = html.replace(/<h2 class="section-title" data-i18n="availability_title">.*<\/h2>/, '');


// --- D) Lab & Projects (Clean design) ---
// Find project cards and simplify them. They have class="glass-card project-card..."
// We'll use regex to match the inner parts: <div class="project-details">...</div>
html = html.replace(/<div class="project-details">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, (match) => {
    // Keep only the project tags
    const tagsMatch = match.match(/<div class="project-tags">([\s\S]*?)<\/div>/);
    const tags = tagsMatch ? tagsMatch[0] : '';
    return '</div>' + tags + '</div></div>';
});

// Write HTML
fs.writeFileSync('index.html', html);


//---------------------------------------------------------
// 2. UPDATE terminal.js
//---------------------------------------------------------
let term = fs.readFileSync('src/js/terminal.js', 'utf8');

term = term.replace(/Title: Junior Systems & Cloud Security Engineer \| Cybersecurity & IAM<br>/g, 'Title: Systems & Cloud Administrator | Cybersecurity & IAM<br>');
term = term.replace(/Current Positions: Ex-SecOps & Systems at Attestto \| Open to immediate opportunities/g, 'Current Status: Ex-SecOps & Systems at Attestto | Certified Disability >33% | Immediate Availability');

term = term.replace(/Rol Principal: Enginyer Junior de Sistemes i Seguretat Cloud \| Ciberseguretat i IAM<br>/g, 'Rol Principal: Systems & Cloud Administrator | Ciberseguretat i IAM<br>');
term = term.replace(/Rol Principal: Ingeniero Junior de Sistemas y Seguridad Cloud \| Ciberseguridad e IAM<br>/g, 'Rol Principal: Systems & Cloud Administrator | Ciberseguridad e IAM<br>');

term = term.replace(/Puesto Reciente: Ex-SecOps & Systems a Attestto \| Obert a noves oportunitats/g, 'Estatus Actual: Ex-SecOps & Systems a Attestto | Discapacitat Certificada >33% | Incorporacio Immediata');
term = term.replace(/Puesto Reciente: Ex-SecOps & Systems en Attestto \| Abierto a nuevas oportunidades/g, 'Estatus Actual: Ex-SecOps & Systems en Attestto | Discapacidad Certificada >33% | Incorporacion Inmediata');

// Modify education to match new request
term = term.replace(/ASIR \(Higher Degree\) \+ SMR \(Mid Degree\) @ Institut Tecnolgic de Barcelona \(ITB\)/g, 'ASIR (Higher Degree) + SMR (Mid Degree) @ Institut Tecnologic de Barcelona');
term = term.replace(/ASIR \(Grado Superior\) \+ SMR \(Grado Medio\) @ Institut Tecnolgic de Barcelona \(ITB\)/g, 'ASIR (Grado Superior) + SMR (Grado Medio) @ Institut Tecnologic de Barcelona');
term = term.replace(/ASIX \(Grau Superior\) \+ SMX \(Grau Mitj\) @ Institut Tecnolgic de Barcelona \(ITB\)/g, 'ASIX (Grau Superior) + SMX (Grau Mitja) @ Institut Tecnologic de Barcelona');

// Remove disability and availability from original whoami if it exists as separate lines
term = term.replace(/Disability Status:.*<br>/g, '');
term = term.replace(/Estatus Discapacidad:.*<br>/g, '');
term = term.replace(/Estatus Discapacitat:.*<br>/g, '');
term = term.replace(/Availability:.*`/g, '`');
term = term.replace(/Disponibilidad:.*`/g, '`');
term = term.replace(/Disponibilitat:.*`/g, '`');

fs.writeFileSync('src/js/terminal.js', term);


//---------------------------------------------------------
// 3. UPDATE i18n.js
//---------------------------------------------------------
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

// Attestto
i18n = i18n.replace(/exp_attestto_role: '.*',/g, "exp_attestto_role: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',");

// Descriptions in past tense
i18n = i18n.replace(/<strong>Cloud & IAM Administration:<\/strong> Administered identity architecture \(Google Workspace, Cloudflare Zero Trust\) and serverless CI\/CD deployments \(Fly\.io, GitHub Actions\)\./g, "Colabore en la proteccion y gestion de la infraestructura tecnica: administracion de identidad y nube (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicacion de hardening, politicas de minimo privilegio, respuesta a incidentes y monitorizacion de seguridad en repositorios. Desarrollo de soporte para estandares de identidad abierta (W3C DID/VC, vLEI).");

i18n = i18n.replace(/<strong>Administración Cloud & IAM:<\/strong> Administré la arquitectura de identidad \(Google Workspace, Cloudflare Zero Trust\) y despliegues serverless CI\/CD \(Fly\.io, GitHub Actions\)\./g, "Colabore en la proteccion y gestion de la infraestructura tecnica: administracion de identidad y nube (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicacion de hardening, politicas de minimo privilegio, respuesta a incidentes y monitorizacion de seguridad en repositorios. Desarrollo de soporte para estandares de identidad abierta (W3C DID/VC, vLEI).");

i18n = i18n.replace(/<strong>Administració Cloud & IAM:<\/strong> Vaig administrar l'arquitectura d'identitat \(Google Workspace, Cloudflare Zero Trust\) i desplegaments serverless CI\/CD \(Fly\.io, GitHub Actions\)\./g, "Vaig col·laborar en la protecció i gestió de la infraestructura tècnica: administració d'identitat i núvol (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicació de hardening, polítiques de mínim privilegi, resposta a incidents i monitorització de seguretat en repositoris. Desenvolupament de suport per a estàndards d'identitat oberta (W3C DID/VC, vLEI).");

// I need to wipe out the 3 list items (exp_attestto_1, exp_attestto_2, exp_attestto_3) and just put this as a context paragraph, or put it in exp_attestto_context and leave the list empty.
i18n = i18n.replace(/exp_attestto_context: '.*',/g, "exp_attestto_context: '',");
// I'll assign the whole description to exp_attestto_1 and clear out 2,3,4.
i18n = i18n.replace(/exp_attestto_1: '.*',/g, "exp_attestto_1: 'Colaboré en la protección y gestión de la infraestructura técnica: administración de identidad y nube (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicación de hardening, políticas de mínimo privilegio, respuesta a incidentes y monitorización de seguridad en repositorios. Desarrollo de soporte para estándares de identidad abierta (W3C DID/VC, vLEI).',");
i18n = i18n.replace(/exp_attestto_2: '.*',/g, "exp_attestto_2: '',");
i18n = i18n.replace(/exp_attestto_3: '.*',/g, "exp_attestto_3: '',");
i18n = i18n.replace(/exp_attestto_4: '.*',/g, "exp_attestto_4: '',");


// New hero descriptions
i18n = i18n.replace(/hero_description: '.*',/g, "hero_description: 'Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.',");
i18n = i18n.replace(/hero_subtitle: '.*',/g, "hero_subtitle: 'Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID / IAM · IT Infrastructure',");

// Availability bar
i18n = i18n.replace(/avail_join_title: '.*',/g, "avail_bar_1: 'Immediate Availability',");
i18n = i18n.replace(/avail_join_text: '.*',/g, "avail_bar_1: 'Immediate Availability',");
i18n = i18n.replace(/avail_disability_title: '.*',/g, "avail_bar_2: 'Barcelona / Remote',");
i18n = i18n.replace(/avail_disability_text: '.*',/g, "avail_bar_2: 'Barcelona / Remote',");
i18n = i18n.replace(/avail_schedule_title: '.*',/g, "avail_bar_3: 'Disability Quota Eligible (>33%)',");

fs.writeFileSync('src/js/i18n.js', i18n);
console.log('Layout updated');
