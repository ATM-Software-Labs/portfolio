const fs = require('fs');

//---------------------------------------------------------
// 1. UPDATE index.html (Terminal Styles & Mac Header)
//---------------------------------------------------------
let html = fs.readFileSync('index.html', 'utf8');

// The Terminal Window structure to replace
const oldTerminalPattern = /<div class="terminal-window scroll-reveal"[\s\S]*?<div class="terminal-body"/;
const newTerminalHtml = `
<div class="terminal-window scroll-reveal" style="background-color: #09090b; border: 1px solid rgba(39, 39, 42, 0.8); border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); overflow: hidden; font-family: monospace; font-size: 0.75rem;">
    <div class="terminal-header" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background-color: #09090b; border-bottom: 1px solid rgba(39, 39, 42, 0.8);">
        <div class="terminal-dots" style="display: flex; gap: 0.375rem;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #ef4444;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #eab308;"></span>
            <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #22c55e;"></span>
        </div>
        <div class="terminal-title-text" style="color: #71717a; font-size: 0.75rem; font-weight: 500;">
            &gt;_ terminal.trujillomingorance.com
        </div>
        <div style="width: 42px;"></div> <!-- Spacer for perfect centering -->
    </div>
    <div class="terminal-controls" style="padding: 0.75rem 1rem; border-bottom: 1px solid rgba(39, 39, 42, 0.8);">
        <div class="terminal-pills" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <button type="button" class="terminal-pill" data-cmd="whoami" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">whoami</button>
            <button type="button" class="terminal-pill" data-cmd="sysinfo" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">sysinfo</button>
            <button type="button" class="terminal-pill" data-cmd="hardening" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">hardening</button>
            <button type="button" class="terminal-pill" data-cmd="skills" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">skills</button>
            <button type="button" class="terminal-pill" data-cmd="projects" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">projects</button>
            <button type="button" class="terminal-pill" data-cmd="exp" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">exp</button>
            <button type="button" class="terminal-pill" data-cmd="certs" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">certs</button>
            <button type="button" class="terminal-pill" data-cmd="status" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">status</button>
            <button type="button" class="terminal-pill" data-cmd="contact" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">contact</button>
            <button type="button" class="terminal-pill" data-cmd="clear" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">clear</button>
        </div>
    </div>
    <div class="terminal-body"`;
html = html.replace(oldTerminalPattern, newTerminalHtml);

// Also remove `attestto` from the hardcoded pills just in case it was left out
html = html.replace(/<button type="button" class="terminal-pill"[^>]*data-cmd="attestto"[^>]*>attestto<\/button>/g, '');

// Update the hardcoded whoami output in index.html to match the user's exact specification
const newWhoamiHardcoded = `
                            <div class="term-card" style="line-height: 1.6;">
                                <div style="font-weight: 700; color: #60a5fa; margin-bottom: 8px;">[ RESUMEN DE IDENTIDAD ]</div>
                                Nombre Completo: Alberto Trujillo Mingorance<br>
                                Rol Principal: Systems & Cloud Administrator | Cybersecurity & IAM<br>
                                Titulaciones: ASIR (Perfil Ciberseguridad) + SMR @ Institut Tecnològic de Barcelona<br>
                                Estado Actual: Ex-SecOps & Systems en Attestto | Certificado Discapacidad &gt;33% | Incorporación Inmediata
                            </div>
`;
html = html.replace(/<div class="term-card">[\s\S]*?\[ RESUMEN DE IDENTIDAD \][\s\S]*?<\/div>/, newWhoamiHardcoded);
fs.writeFileSync('index.html', html);


//---------------------------------------------------------
// 2. UPDATE terminal.js (whoami, certs, and remove attestto pill)
//---------------------------------------------------------
let js = fs.readFileSync('src/js/terminal.js', 'utf8');

// Replace WHOAMI logic
const oldWhoami = /case 'whoami':[\s\S]*?break;/;
const newWhoami = `
      case 'whoami':
        const whoText = lang === 'en'
          ? \`<div style="font-weight: 700; color: #60a5fa; margin-bottom: 8px;">[ IDENTITY SUMMARY ]</div>
             Full Name: Alberto Trujillo Mingorance<br>
             Primary Role: Systems & Cloud Administrator | Cybersecurity & IAM<br>
             Degrees: ASIR (Cybersecurity Profile) + SMR @ Institut Tecnològic de Barcelona<br>
             Current Status: Ex-SecOps & Systems at Attestto | Certified Disability &gt;33% | Immediate Availability\`
          : lang === 'ca'
          ? \`<div style="font-weight: 700; color: #60a5fa; margin-bottom: 8px;">[ RESUM D'IDENTITAT ]</div>
             Nom Complet: Alberto Trujillo Mingorance<br>
             Rol Principal: Systems & Cloud Administrator | Cybersecurity & IAM<br>
             Titulacions: ASIXc (Perfil Ciberseguretat) + SMX @ Institut Tecnològic de Barcelona<br>
             Estat Actual: Ex-SecOps & Systems a Attestto | Certificat Discapacitat &gt;33% | Incorporació Immediata\`
          : \`<div style="font-weight: 700; color: #60a5fa; margin-bottom: 8px;">[ RESUMEN DE IDENTIDAD ]</div>
             Nombre Completo: Alberto Trujillo Mingorance<br>
             Rol Principal: Systems & Cloud Administrator | Cybersecurity & IAM<br>
             Titulaciones: ASIR (Perfil Ciberseguridad) + SMR @ Institut Tecnològic de Barcelona<br>
             Estado Actual: Ex-SecOps & Systems en Attestto | Certificado Discapacidad &gt;33% | Incorporación Inmediata\`;
        appendOutput(\`<div class="term-card" style="line-height: 1.6;">\${whoText}</div>\`);
        break;
`;
js = js.replace(oldWhoami, newWhoami.trim());

// Replace CERTS logic
const oldCerts = /case 'certs':[\s\S]*?break;/;
const newCerts = `
      case 'certs':
        const certTextNew = \`
          <div class="term-card">
            <div style="font-weight: 700; color: #a855f7; margin-bottom: 8px;">[ ACTIVE CREDENTIALS ]</div>
            - [ACTIVE] Microsoft Applied Skills: Get started with identities and access using Microsoft Entra (ID: F89C9FFB072C4C9A)
          </div>\`;
        appendOutput(certTextNew);
        break;
`;
js = js.replace(oldCerts, newCerts.trim());

fs.writeFileSync('src/js/terminal.js', js);
console.log('Terminal styles and logic updated.');
