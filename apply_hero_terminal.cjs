const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Navbar Language Selector (Mobile and Desktop)
// The user gave specific designs for the trigger and the dropdown
const newDesktopLangHtml = `
                    <div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">
                        <button type="button" id="lang-trigger" class="lang-btn" style="background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.5rem; padding: 0.375rem 0.75rem; color: var(--text-title); display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.75rem; font-weight: 600; box-shadow: var(--shadow-card); transition: all 0.2s;">
                            <span id="current-lang-svg"><svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span>
                            <span id="current-lang-text">ES</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #a1a1aa;"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                        <div id="lang-menu" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); min-width: 140px; z-index: 50; padding: 0.375rem; flex-direction: column; gap: 0.25rem;">
                            <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg> Español
                            </button>
                            <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <svg width="18" height="13" viewBox="0 0 9 6" style="border-radius: 2px; overflow: hidden;"><rect width="9" height="6" fill="#fedd00"/><path d="M0 1h9v1H0zm0 2h9v1H0z" fill="#da121a"/></svg> Català
                            </button>
                            <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <svg width="18" height="13" viewBox="0 0 60 30" style="border-radius: 2px; overflow: hidden;"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg> English
                            </button>
                        </div>
                    </div>
`;
html = html.replace(/<div class="lang-dropdown-wrapper"[\s\S]*?<\/div>\s*<\/div>/, newDesktopLangHtml);

// Remove the inline hover styles logic if they exist inside the html, we will just use CSS or rely on vanilla JS to handle classes
const hoverStyles = `
<style>
.lang-btn:hover {
    background-color: var(--bg-badge) !important;
    color: var(--text-title) !important;
}
</style>
`;
if (!html.includes('.lang-btn:hover')) {
    html = html.replace('</head>', hoverStyles + '</head>');
}

// 2. HERO RESTRUCTURE
// Delete the profile-summary-card
html = html.replace(/<div class="hero-profile-col scroll-reveal">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '</div>');

// Delete the stats bar
html = html.replace(/<!-- Executive Key Stats & Metrics Bar -->[\s\S]*?<\/div>\s*<\/div>/, '');

// Delete the intermediate tags
html = html.replace(/<div class="hero-tags scroll-reveal">[\s\S]*?<\/div>/, '');

// Update left column formatting
const newLeftColHtml = `
                    <div class="hero-content">
                        <div class="status-badge scroll-reveal mb-4" style="background-color: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 500; display: inline-flex; align-items: center; gap: 0.375rem;">
                            <span style="width:6px; height:6px; background-color:#10b981; border-radius:50%; display:inline-block;"></span>
                            <span data-i18n="avail_join_status">Incorporación Inmediata</span>
                        </div>

                        <h1 class="hero-title scroll-reveal" data-i18n="hero_title" style="font-size: clamp(2.25rem, 5vw, 3rem); font-weight: 800; letter-spacing: -0.025em; color: var(--text-title); margin-top: 1rem;">Alberto Trujillo</h1>
                        
                        <h2 class="hero-subtitle scroll-reveal typing-effect" data-i18n="hero_subtitle" style="font-size: 1rem; font-weight: 500; color: var(--text-desc); margin-top: 0.5rem;">Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID · Infrastructure</h2>

                        <p class="hero-description scroll-reveal" data-i18n="hero_description" style="font-size: 0.875rem; color: var(--text-desc); margin-top: 1rem; max-width: 36rem; line-height: 1.625;">Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.</p>

                        <div class="hero-ctas scroll-reveal" style="margin-top: 1.5rem; display: flex; gap: 1rem; align-items: center;">
                            <a href="/CV.pdf" download class="btn" data-i18n="hero_download_cv" style="background-color: var(--text-title); color: var(--bg-card); padding: 0.625rem 1.25rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">Descargar CV</a>
                            <a href="#contacto" class="btn" data-i18n="hero_contact" style="border: 1px solid var(--border-card); color: var(--text-title); padding: 0.625rem 1.25rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-decoration: none;">Contactar</a>
                        </div>
                    </div>
`;
html = html.replace(/<div class="hero-content">[\s\S]*?<\/div>\s*<\/div>/, newLeftColHtml);


// 3. Move Terminal into right column and update styles
const oldTerminal = /<!-- Interactive SysAdmin Terminal Simulator -->[\s\S]*?<div class="terminal-controls">\s*<form id="terminal-form"[\s\S]*?<\/form>\s*<\/div>\s*<\/div>/;
const terminalMatch = html.match(oldTerminal);
if (terminalMatch) {
    let terminalHtml = terminalMatch[0];
    
    // Remove it from its original place
    html = html.replace(terminalHtml, '');
    
    // Style adjustments to terminalHtml
    terminalHtml = terminalHtml.replace(/<div class="terminal-window scroll-reveal">/, '<div class="terminal-window scroll-reveal" style="background-color: #09090b; border: 1px solid rgba(39, 39, 42, 0.8); border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); overflow: hidden; font-family: monospace; font-size: 0.75rem;">');
    
    // Adjust Terminal pills inside terminalHtml
    terminalHtml = terminalHtml.replace(/class="terminal-pill"/g, 'class="terminal-pill" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor=\'#27272a\'" onmouseout="this.style.backgroundColor=\'#18181b\'"');
    
    // Set title to >_ terminal.trujillomingorance.com
    terminalHtml = terminalHtml.replace(/<div class="terminal-title-text">[\s\S]*?<\/div>/, '<div class="terminal-title-text" style="color:#a1a1aa; font-size:0.75rem; font-weight:500;">&gt;_ terminal.trujillomingorance.com</div>');

    // Update the hardcoded WHOAMI inside terminalHtml
    const newWhoamiHtml = `
                        <div class="terminal-line response-line">
                            <div class="term-card">
                                [ RESUMEN DE IDENTIDAD ]<br>
                                Nombre Completo: Alberto Trujillo Mingorance<br>
                                Rol Principal: Systems & Cloud Administrator | Cybersecurity & IAM<br>
                                Titulaciones: ASIR (Perfil Ciberseguridad) + SMR @ Institut Tecnològic de Barcelona<br>
                                Estado Actual: Ex-SecOps & Systems en Attestto | Certificado Discapacidad >33% | Incorporación Inmediata
                            </div>
                        </div>
    `;
    terminalHtml = terminalHtml.replace(/<div class="terminal-line response-line">[\s\S]*?<\/div>\s*<\/div>/, newWhoamiHtml);

    // Insert Terminal into the hero-grid
    html = html.replace(/<div class="hero-content">[\s\S]*?<\/div>/, match => match + '\n' + terminalHtml);
}

fs.writeFileSync('index.html', html);
console.log('index.html fixes done.');
