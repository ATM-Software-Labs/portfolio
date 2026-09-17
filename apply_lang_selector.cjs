const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The first lang dropdown I replaced must have been the mobile one because the desktop one was still there with old classes. Let's fix ALL language drop-downs.
// For the Desktop one:
const desktopLangRegex = /<div class="lang-dropdown-wrapper"[\s\S]*?<\/div>\s*<\/div>/g;

const properLangDropdownHtml = `
                    <div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">
                        <button type="button" id="lang-trigger" class="lang-btn" style="background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.5rem; padding: 0.375rem 0.75rem; color: var(--text-title); display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.75rem; font-weight: 600; box-shadow: var(--shadow-card); transition: all 0.2s;">
                            <span id="current-lang-svg" style="display:flex; align-items:center;"><svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span>
                            <span id="current-lang-text">ES</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #a1a1aa;"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                        <div id="lang-menu" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); min-width: 140px; z-index: 50; padding: 0.375rem; flex-direction: column; gap: 0.25rem;">
                            <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span> Español
                            </button>
                            <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 9 6" style="border-radius: 2px; overflow: hidden;"><rect width="9" height="6" fill="#fedd00"/><path d="M0 1h9v1H0zm0 2h9v1H0z" fill="#da121a"/></svg></span> Català
                            </button>
                            <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 60 30" style="border-radius: 2px; overflow: hidden;"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg></span> English
                            </button>
                        </div>
                    </div>
`;

// There are TWO occurrences of <div class="lang-dropdown-wrapper"> if I accidentally injected the desktop one into the mobile one before. Wait, let me replace them specifically.
// Actually, earlier I matched `<div class="lang-dropdown-wrapper"[\s\S]*?<\/div>\s*<\/div>` and it replaced the FIRST one. The first one might have been Mobile or Desktop.
// The mobile one has id="mobile-lang-menu" inside a different container.

// Let's rewrite the script logic in index.html to be clean
const oldScript = /function setupDropdown[\s\S]*?setupDropdown\('mobile-lang-trigger', 'mobile-lang-menu'\);/m;
const newScript = `
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
          const svgHtml = btn.querySelector('.lang-svg-wrapper').innerHTML;
          const code = btn.getAttribute('data-lang').toUpperCase();
          const svgTarget = trigger.querySelector('#current-lang-svg') || trigger.querySelector('span');
          const textTarget = trigger.querySelector('#current-lang-text');
          if (svgTarget) svgTarget.innerHTML = svgHtml;
          if (textTarget) textTarget.textContent = code;
          menu.style.display = 'none';
        });
        // hover handled by CSS now or let's keep it simple
      });
    }
    setupDropdown('lang-trigger', 'lang-menu');
    setupDropdown('mobile-lang-trigger', 'mobile-lang-menu');
`;
html = html.replace(oldScript, newScript.trim());

// For safety, I'll just replace the entire desktop nav block to be perfectly clean
// Let's replace the <div class="header-controls desktop-controls"> contents completely
const oldDesktopControls = /<div class="header-controls desktop-controls">[\s\S]*?<button class="header-theme-btn theme-toggle-btn"/;
const newDesktopControls = `
                <div class="header-controls desktop-controls">
                    <div class="lang-dropdown-wrapper" style="position: relative; display: inline-block;">
                        <button type="button" id="lang-trigger" class="lang-btn" style="background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.5rem; padding: 0.375rem 0.75rem; color: var(--text-title); display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.75rem; font-weight: 600; box-shadow: var(--shadow-card); transition: all 0.2s;">
                            <span id="current-lang-svg" style="display:flex; align-items:center;"><svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span>
                            <span id="current-lang-text">ES</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #a1a1aa;"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                        <div id="lang-menu" style="display: none; position: absolute; top: 100%; right: 0; margin-top: 0.5rem; background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); min-width: 140px; z-index: 50; padding: 0.375rem; flex-direction: column; gap: 0.25rem;">
                            <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span> Español
                            </button>
                            <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 9 6" style="border-radius: 2px; overflow: hidden;"><rect width="9" height="6" fill="#fedd00"/><path d="M0 1h9v1H0zm0 2h9v1H0z" fill="#da121a"/></svg></span> Català
                            </button>
                            <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: var(--text-desc); padding: 0.5rem 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                                <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 60 30" style="border-radius: 2px; overflow: hidden;"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg></span> English
                            </button>
                        </div>
                    </div>

                    <button class="header-theme-btn theme-toggle-btn"
`;
html = html.replace(oldDesktopControls, newDesktopControls.trim());

// We also need to fix the duplicate if it exists, or just let it be. Mobile menu has its own trigger `mobile-lang-trigger`.
const mobileMenuPattern = /<div class="mobile-nav"[\s\S]*?<div id="mobile-lang-menu"[\s\S]*?<\/div>/;
const mobileMenuReplace = `
            <div class="mobile-nav" id="mobile-menu" aria-hidden="true" style="display: none; padding-bottom: 2rem;">
                <ul class="mobile-nav-list" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
                    <li><a href="#experiencia" class="mobile-nav-link" data-i18n="nav_experience">Experiencia</a></li>
                    <li><a href="#stack" class="mobile-nav-link" data-i18n="nav_stack">Stack Técnico</a></li>
                    <li><a href="#proyectos" class="mobile-nav-link" data-i18n="nav_projects">Proyectos</a></li>
                    <li><a href="#formacion" class="mobile-nav-link" data-i18n="nav_education">Formación</a></li>
                    <li><a href="#contacto" class="mobile-nav-link" data-i18n="nav_contact">Contacto</a></li>
                </ul>

                <div class="mobile-lang-selector" style="margin-top: 1.5rem; position: relative;">
                    <button type="button" id="mobile-lang-trigger" class="lang-btn" style="width: 100%; background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.5rem; padding: 0.75rem; color: var(--text-title); display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 0.875rem; font-weight: 600; box-shadow: var(--shadow-card);">
                        <span id="current-lang-svg" style="display:flex; align-items:center; gap:8px;">
                            <svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg>
                            <span id="current-lang-text">ES</span>
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #a1a1aa;"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div id="mobile-lang-menu" style="display: none; position: absolute; top: 100%; left: 0; right: 0; margin-top: 0.5rem; background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); z-index: 50; padding: 0.375rem; flex-direction: column; gap: 0.25rem;">
                        <button type="button" class="lang-btn" data-lang="es" style="background: transparent; border: none; color: var(--text-desc); padding: 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                            <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 3 2" style="border-radius: 2px; overflow: hidden;"><rect width="3" height="2" fill="#c60b1e"/><rect width="3" height="1" y="0.5" fill="#ffc400"/></svg></span> Español
                        </button>
                        <button type="button" class="lang-btn" data-lang="ca" style="background: transparent; border: none; color: var(--text-desc); padding: 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                            <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 9 6" style="border-radius: 2px; overflow: hidden;"><rect width="9" height="6" fill="#fedd00"/><path d="M0 1h9v1H0zm0 2h9v1H0z" fill="#da121a"/></svg></span> Català
                        </button>
                        <button type="button" class="lang-btn" data-lang="en" style="background: transparent; border: none; color: var(--text-desc); padding: 0.75rem; text-align: left; cursor: pointer; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; width: 100%; display:flex; align-items:center; gap:10px; transition: all 0.2s;">
                            <span class="lang-svg-wrapper"><svg width="18" height="13" viewBox="0 0 60 30" style="border-radius: 2px; overflow: hidden;"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg></span> English
                        </button>
                    </div>
`;
html = html.replace(mobileMenuPattern, mobileMenuReplace);

fs.writeFileSync('index.html', html);
console.log('Language selector updated!');
