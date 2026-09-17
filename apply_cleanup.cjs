const fs = require('fs');

// 1. UPDATE INDEX.HTML
let html = fs.readFileSync('index.html', 'utf8');

// Fix 1: Tag Cloud
const oldTagCloud = /<div class="tag-cloud">[\s\S]*?<\/div>/;
const newTagCloud = `
                <div class="tag-cloud" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;">
                    <span class="glass-tag">Google Workspace / IAM</span>
                    <span class="glass-tag">Microsoft Entra ID</span>
                    <span class="glass-tag">Active Directory</span>
                    <span class="glass-tag">Cloudflare & Fly.io</span>
                    <span class="glass-tag">W3C DID/VC & vLEI</span>
                    <span class="glass-tag">MySQL/PostgreSQL</span>
                    <span class="glass-tag">AWS Cloud Practitioner</span>
                    <span class="glass-tag">Jira/BMC Remedy</span>
                    <span class="glass-tag">Ollama/IA en local</span>
                </div>
`;
html = html.replace(oldTagCloud, newTagCloud.trim());

// Fix 2: Education Section (Light Mode colors and border removal)
// Replace fixed #f4f4f5 with var(--text-title) for Light Mode compatibility
html = html.replace(/color:\s*#f4f4f5;/g, "color: var(--text-title);");

// Remove border-left-blue and border-left-green from glass-card
html = html.replace(/class="glass-card border-left-blue edu-card"/g, 'class="min-card edu-card"');
html = html.replace(/class="glass-card border-left-green edu-card"/g, 'class="min-card edu-card"');
// Add standard Tailwind-like padding to the inline style of edu-cards, since they are now .min-card
html = html.replace(/style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;"/g, 'style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem;"');


// Fix 3: Projects Grid Container
const oldGrid = /<div id="dynamic-projects-container" style="display:grid; grid-template-columns:repeat\(auto-fit, minmax\(300px, 1fr\)\); gap:1rem; margin-top:1rem;">/;
const newGrid = '<div id="dynamic-projects-container" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:1.25rem; max-width:72rem; margin:1rem auto 0;">';
html = html.replace(oldGrid, newGrid);

fs.writeFileSync('index.html', html);


// 2. UPDATE GITHUB-PROJECTS.JS
let js = fs.readFileSync('src/js/github-projects.js', 'utf8');

// Replace the cleanName logic
const oldCleanName = "const cleanName = repo.name.replace(/-/g, ' ').replace(/(^\\w|\\s\\w)/g, m => m.toUpperCase());";
const newCleanName = `
            const nameOverrides = {
                'atm-tools': 'ATM Tools',
                'open-sentinel': 'Open-Sentinel',
                'rewrite-ai': 'Rewrite AI',
                'trujillo-ai-studio': 'Trujillo AI Studio',
                'trujillo-guides': 'Trujillo Guides',
                'focusguard-saas': 'FocusGuard SaaS'
            };
            const cleanName = nameOverrides[nameLower] || repo.name.replace(/-/g, ' ').replace(/(^\\w|\\s\\w)/g, m => m.toUpperCase());
`;
js = js.replace(oldCleanName, newCleanName.trim());

// Make sure the GitHub SVG is a clean solid icon (the path from FontAwesome/SimpleIcons if needed, but the current one is fine, I will just update the title). The user said "bifurcación/fork", maybe they confused it. I'll inject a classic GitHub SVG.
const oldGithubSvg = /<svg width="18".*?><path d="M9 19c-5 1.5.*?<\/svg>/;
const newGithubSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
js = js.replace(oldGithubSvg, newGithubSvg);

fs.writeFileSync('src/js/github-projects.js', js);
console.log('Cleanup applied successfully!');
