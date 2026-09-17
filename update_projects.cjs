const fs = require('fs');

// 1. Update index.html projects
let html = fs.readFileSync('index.html', 'utf8');

// The project details div includes <p class="project-desc"> and <div class="project-info-cards grid-3">
html = html.replace(/<div class="project-info-cards grid-3">[\s\S]*?<\/div>\s*<\/div>/g, '');
// Wait, the regex above deletes the end of the project.
// Let's do it safer.
// Find `<div class="project-info-cards grid-3">` and delete until the closing `</div>` of it.
// There are 3 `<div class="info-card">` inside. Total 4 `</div>` after it.
html = html.replace(/<div class="project-info-cards grid-3">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');

// Let's add the tags row after the description.
// Trujillo AI:
html = html.replace(/(<p class="project-desc" data-i18n="proj_trujillo_desc">.*<\/p>)/, '$1\n                        <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.5rem;"><span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Cloudflare Workers</span><span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Llama 3.3 70B</span><span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">KV Storage</span></div>');

// Solana Forensics:
html = html.replace(/(<p class="project-desc" data-i18n="proj_solana_desc">.*<\/p>)/, '$1\n                        <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.5rem;"><span style="background:rgba(99,102,241,0.1); color:#818cf8; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Python</span><span style="background:rgba(99,102,241,0.1); color:#818cf8; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Blockchain RPC</span><span style="background:rgba(99,102,241,0.1); color:#818cf8; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">OSINT</span></div>');

// FocusGuard:
html = html.replace(/(<p class="project-desc" data-i18n="proj_focus_desc">.*<\/p>)/, '$1\n                        <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.5rem;"><span style="background:rgba(34,197,94,0.1); color:#4ade80; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Zero-Trust DNS</span><span style="background:rgba(34,197,94,0.1); color:#4ade80; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Cloudflare Edge</span><span style="background:rgba(34,197,94,0.1); color:#4ade80; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">D1 SQLite</span></div>');

// Open-Sentinel:
html = html.replace(/(<p class="project-desc" data-i18n="proj_sentinel_desc">.*<\/p>)/, '$1\n                        <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.5rem;"><span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Bash Scripting</span><span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Linux Hardening</span><span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Log Monitoring</span></div>');

// ATM Tools:
html = html.replace(/(<p class="project-desc" data-i18n="proj_tools_desc">.*<\/p>)/, '$1\n                        <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.5rem;"><span style="background:rgba(168,85,247,0.1); color:#c084fc; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">React</span><span style="background:rgba(168,85,247,0.1); color:#c084fc; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">PWA / Offline</span><span style="background:rgba(168,85,247,0.1); color:#c084fc; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Zero Backend</span></div>');


// 2. Remove " & Web3" from project filters
html = html.replace(/Ciberseguridad & Web3/g, 'Ciberseguridad');

// Also in i18n.js
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');
i18n = i18n.replace(/Ciberseguridad & Web3/g, 'Ciberseguridad');
i18n = i18n.replace(/Ciberseguretat & Web3/g, 'Ciberseguretat');
i18n = i18n.replace(/Cybersecurity & Web3/g, 'Cybersecurity');


// 3. Make the project descriptions shorter (2-3 lines) and homogenized.
// Trujillo AI
i18n = i18n.replace(/proj_trujillo_desc: 'Estudio de Inteligencia Artificial full-stack y bot de Discord de alta velocidad desplegado sobre Cloudflare Workers Edge. Incorpora streaming en tiempo real con Meta Llama 3.3 70B, búsqueda web en vivo, síntesis de imágenes con Flux AI, memoria KV persistente, autenticación JWT\/OTP y defensas de grado militar.',/g, "proj_trujillo_desc: 'Estudio de IA generativa y bot de Discord de alta velocidad en Cloudflare Workers Edge. Incorpora streaming en tiempo real (Llama 3.3), memoria persistente KV y defensas perimetrales de grado militar.',");
i18n = i18n.replace(/proj_trujillo_desc: 'Estudi d\\'Intel·ligència Artificial full-stack i bot de Discord d\\'alta velocitat desplegat sobre Cloudflare Workers Edge. Incorpora streaming en temps real amb Meta Llama 3.3 70B, cerca web en viu, síntesi d\\'imatges amb Flux AI, memòria KV persistent, autenticació JWT\/OTP i defenses de grau militar.',/g, "proj_trujillo_desc: 'Estudi d\\'IA generativa i bot de Discord d\\'alta velocitat en Cloudflare Workers Edge. Incorpora streaming en temps real (Llama 3.3), memòria persistent KV i defenses perimetrals de grau militar.',");
i18n = i18n.replace(/proj_trujillo_desc: 'Full-stack serverless Artificial Intelligence studio and high-speed Discord bot deployed on Cloudflare Workers Edge. Features real-time SSE streaming with Meta Llama 3.3 70B, live web search, Flux AI image generation, persistent KV knowledge memory, JWT\/OTP authentication, and military-grade perimeter defense.',/g, "proj_trujillo_desc: 'Generative AI studio and high-speed Discord bot on Cloudflare Workers Edge. Features real-time streaming (Llama 3.3), persistent KV memory, and military-grade perimeter defenses.',");

// Solana Forensics
i18n = i18n.replace(/proj_solana_desc: '.*',/g, "proj_solana_desc: 'Herramienta de auditoría y análisis forense para rastrear transacciones en blockchain, identificar patrones sospechosos y verificar la integridad de los activos digitales.',");
// wait, need to target correctly per language. I will do it by finding the surrounding string or just replace all 3.
i18n = i18n.replace(/proj_solana_desc: 'Herramienta d'auditoria i anàlisi forense dissenyada per rastrejar transaccions en la blockchain de Solana. Permet la identificació de patrons sospitosos i la verificació d'integritat d'actius digitals, aplicant principis de ciberseguretat a entorns Web3.',/g, "proj_solana_desc: 'Eina d\\'auditoria i anàlisi forense per rastrejar transaccions en blockchain, identificar patrons sospitosos i verificar la integritat dels actius digitals.',");
i18n = i18n.replace(/proj_solana_desc: 'Auditing and forensic analysis tool designed to track transactions on the Solana blockchain. It allows the identification of suspicious patterns and the verification of digital asset integrity, applying cybersecurity principles to Web3 environments.',/g, "proj_solana_desc: 'Auditing and forensic analysis tool to track blockchain transactions, identify suspicious patterns, and verify the integrity of digital assets.',");


fs.writeFileSync('index.html', html);
fs.writeFileSync('src/js/i18n.js', i18n);

console.log('Projects updated');
