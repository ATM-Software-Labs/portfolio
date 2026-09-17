const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Language Dropdown Fixes
// Find and replace the Desktop dropdown entirely to ensure exact styling from user specs.
const desktopDropdownPattern = /<div class="lang-dropdown-wrapper"[\s\S]*?<\/div>\s*<\/div>/g;
const newDesktopDropdown = `
                    <div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">
                        <button type="button" id="lang-trigger" class="lang-btn" style="background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.5rem; padding: 0.375rem 0.75rem; color: var(--text-title); display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.75rem; font-weight: 600; transition: all 0.2s;">
                            <span id="current-lang-svg" style="display:flex; align-items:center;">
                                <svg width="20" height="14" viewBox="0 0 3 2" style="border-radius: 2px; flex-shrink: 0; object-fit: cover;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg>
                            </span>
                            <span id="current-lang-text" style="font-size: 0.75rem; font-weight: 600; leading-trim: both; text-edge: cap;">ES</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #a1a1aa; margin-left: 0.125rem; flex-shrink: 0;"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                        <div id="lang-menu" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); min-width: 140px; z-index: 999; padding: 0.375rem; flex-direction: column; gap: 0.25rem;">
                            <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:0.625rem; transition: all 0.2s;">
                                <span class="lang-svg-wrapper" style="display:flex; align-items:center;"><svg width="20" height="14" viewBox="0 0 3 2" style="border-radius: 2px; flex-shrink: 0; object-fit: cover;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span> Español
                            </button>
                            <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:0.625rem; transition: all 0.2s;">
                                <span class="lang-svg-wrapper" style="display:flex; align-items:center;"><svg width="20" height="14" viewBox="0 0 9 6" style="border-radius: 2px; flex-shrink: 0; object-fit: cover;"><rect width="9" height="6" fill="#fedd00"/><path d="M0 1h9v1H0zm0 2h9v1H0z" fill="#da121a"/></svg></span> Català
                            </button>
                            <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:0.625rem; transition: all 0.2s;">
                                <span class="lang-svg-wrapper" style="display:flex; align-items:center;"><svg width="20" height="14" viewBox="0 0 60 30" style="border-radius: 2px; flex-shrink: 0; object-fit: cover;"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg></span> English
                            </button>
                        </div>
                    </div>
`;
// Replace first match (Desktop)
let count = 0;
html = html.replace(desktopDropdownPattern, (match) => {
    count++;
    return count === 1 ? newDesktopDropdown.trim() : match;
});

// Also ensure navbar container has relative and overflow-visible if needed, but it usually doesn't have overflow-hidden.
// Let's replace the whole hero section!
const heroPattern = /<section id="hero" class="hero-section">[\s\S]*?<a href="#disponibilidad" class="scroll-down-indicator" aria-label="Scroll down">/m;

// I need to preserve the Terminal exact internal HTML, so I'll extract it first
const terminalPattern = /<div class="terminal-window scroll-reveal"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/;
const terminalMatch = html.match(/<div class="terminal-window scroll-reveal"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
let terminalHtml = '';
if (terminalMatch) {
    terminalHtml = terminalMatch[0];
    // Strip trailing closing divs that don't belong to terminal-window
    terminalHtml = terminalHtml.replace(/<\/div>\s*<\/div>\s*<\/div>$/, '</div>');
} else {
    // Fallback if regex fails to capture properly
    terminalHtml = `
        <div class="terminal-window scroll-reveal" style="max-width: 56rem; margin: 2.5rem auto 0; width: 100%; background-color: #09090b; border: 1px solid rgba(39, 39, 42, 0.8); border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); overflow: hidden; font-family: monospace; font-size: 0.75rem;">
            <!-- terminal content preserved -->
        </div>
    `;
}
// But wait, the terminal window also has inline styles. I will overwrite them.
terminalHtml = terminalHtml.replace(/<div class="terminal-window scroll-reveal"[^>]*>/, '<div class="terminal-window scroll-reveal" style="max-width: 56rem; margin: 2.5rem auto 0; width: 100%; background-color: #09090b; border: 1px solid rgba(39, 39, 42, 0.8); border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); overflow: hidden; font-family: monospace; font-size: 0.75rem;">');

const newHeroSection = `
<section id="hero" class="hero-section">
    <div class="hero-gradient"></div>
    <div class="container hero-container" style="max-width: 80rem; margin: 0 auto; padding: 2rem 1rem 0;">
        <div class="hero-grid" style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 2rem; align-items: start;">
            
            <div class="hero-content" style="grid-column: span 12 / span 12; @media (min-width: 1024px) { grid-column: span 7 / span 7; }">
                <!-- Status Badge -->
                <div class="status-badge scroll-reveal mb-4" style="background-color: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); font-size: 0.75rem; padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 500; display: inline-flex; align-items: center; gap: 0.375rem;">
                    <span style="width:8px; height:8px; background-color:#10b981; border-radius:50%; display:inline-block;"></span>
                    <span data-i18n="avail_join_status">Disponibilidad Inmediata</span>
                </div>

                <h1 class="hero-title scroll-reveal" data-i18n="hero_title" style="font-size: clamp(2.25rem, 5vw, 3rem); font-weight: 800; letter-spacing: -0.025em; color: var(--text-title); margin-top: 0.75rem;">Alberto Trujillo</h1>
                
                <h2 class="hero-subtitle scroll-reveal typing-effect" data-i18n="hero_subtitle" style="font-size: 1rem; font-weight: 500; color: var(--text-desc); margin-top: 0.5rem;">Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID / IAM · IT Infrastructure</h2>

                <!-- Specialized Pills -->
                <div class="hero-tags scroll-reveal" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                    <span class="glass-tag" style="background: var(--bg-badge); border: 1px solid var(--border-badge); color: var(--text-title); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;" data-i18n="hero_tag1">ASIR + SMR (Grado Sup. y Medio)</span>
                    <span class="glass-tag" style="background: var(--bg-badge); border: 1px solid var(--border-badge); color: var(--text-title); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;" data-i18n="hero_tag2">Cloud, IAM & Seguridad</span>
                    <span class="glass-tag" style="background: var(--bg-badge); border: 1px solid var(--border-badge); color: var(--text-title); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;" data-i18n="hero_tag3">Hardening & Zero-Trust</span>
                </div>

                <p class="hero-description scroll-reveal" data-i18n="hero_description" style="font-size: 0.875rem; color: var(--text-desc); margin-top: 1rem; max-width: 36rem; line-height: 1.625;">Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.</p>

                <div class="hero-ctas scroll-reveal" style="margin-top: 1.5rem; display: flex; gap: 0.75rem; align-items: center;">
                    <a href="/CV.pdf" download class="btn" data-i18n="hero_download_cv" style="background-color: var(--text-title); color: var(--bg-card); padding: 0.625rem 1.25rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">Descargar CV</a>
                    <a href="#contacto" class="btn" data-i18n="hero_contact" style="border: 1px solid var(--border-card); color: var(--text-title); padding: 0.625rem 1.25rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; text-decoration: none;">Contactar</a>
                </div>
            </div>

            <!-- Profile Card -->
            <div class="hero-profile-col scroll-reveal" style="grid-column: span 12 / span 12; @media (min-width: 1024px) { grid-column: span 5 / span 5; }">
                <div class="profile-summary-card" style="background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 1rem; padding: 1.5rem; box-shadow: var(--shadow-card); text-align: center; display: flex; flex-direction: column; align-items: center;">
                    <img src="/assets/images/Alberto.webp?v=p2" alt="Alberto Trujillo" style="width: 6rem; height: 6rem; border-radius: 9999px; object-fit: cover; border: 2px solid rgba(59, 130, 246, 0.5); padding: 0.25rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 0.75rem;">
                    <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-title);">Alberto Trujillo Mingorance</h3>
                    <p style="font-size: 0.75rem; font-weight: 500; color: #3b82f6; margin-bottom: 0.75rem;">Systems & Cloud Security Engineer</p>
                    <div style="display: flex; flex-direction: column; gap: 0.375rem; font-size: 0.75rem; color: var(--text-desc);">
                        <span>Barcelona / Remoto</span>
                        <span>Ex-Attestto & Minsait</span>
                        <span>ASIR (Sup.) + SMR (Med.)</span>
                        <span>Certificado Discapacidad &gt;33%</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- Interactive Terminal Centered Below -->
        ${terminalHtml}

    </div>
    <a href="#disponibilidad" class="scroll-down-indicator" aria-label="Scroll down">
`;

// But to make @media queries work in inline styles, I need to add a <style> tag.
// Instead of inline media queries, I'll use standard css classes that already exist or just add a style block.
const styleBlock = `
<style>
  .hero-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
  .hero-profile-col { width: 100%; }
  @media (min-width: 1024px) {
    .hero-grid { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .hero-content { grid-column: span 7 / span 7; }
    .hero-profile-col { grid-column: span 5 / span 5; }
  }
</style>
`;

let cleanedNewHero = newHeroSection.replace(/style="grid-column: span 12.*?}"/g, '');
cleanedNewHero = styleBlock + cleanedNewHero;

html = html.replace(heroPattern, cleanedNewHero);

fs.writeFileSync('index.html', html);
console.log('Hero and HTML fixed!');
