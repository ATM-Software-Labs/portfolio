const fs = require('fs');

// 1. Fix main.js to remove anti-debugging blocks
let mainJs = fs.readFileSync('src/js/main.js', 'utf8');

// The F12 blocking logic:
const antiDebugRegex = /document\.addEventListener\('contextmenu',[\s\S]*?\}\);/g;
mainJs = mainJs.replace(antiDebugRegex, '');
const antiDebugKeysRegex = /document\.addEventListener\('keydown', \(e\) => \{[\s\S]*?e\.preventDefault\(\);\s*return false;\s*\}[\s\S]*?\}\);/g;
mainJs = mainJs.replace(antiDebugKeysRegex, '');
// Wait, the keydown might have valid things? No, let's just strip lines with F12 and preventDefault.
mainJs = mainJs.replace(/if\s*\(key\s*===\s*'F12'[\s\S]*?return\s*false;\s*\}/g, '');
mainJs = mainJs.replace(/if\s*\(\(e\.ctrlKey[\s\S]*?return\s*false;\s*\}/g, '');

// Strip 'contextmenu' completely
mainJs = mainJs.replace(/document\.addEventListener\('contextmenu'[\s\S]*?return false;\s*\}\);/g, '');

fs.writeFileSync('src/js/main.js', mainJs);

// 2. Fix index.html terminal window
let html = fs.readFileSync('index.html', 'utf8');

// I need to find the <div class="terminal-body" id="terminal-output">...</div>
// And make sure there is a <div class="terminal-controls">...</div> AFTER it.
const terminalBodyRegex = /(<div class="terminal-body" id="terminal-output">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<a href="#disponibilidad")/m;

// Actually, let's just replace the whole terminal window to be absolutely certain it's perfect and perfectly matches the layout.
const newTerminalWindow = `
        <!-- Interactive Terminal Centered Below -->
        <div class="terminal-window scroll-reveal" style="max-width: 56rem; margin: 2.5rem auto 0; width: 100%; background-color: #09090b; border: 1px solid rgba(39, 39, 42, 0.8); border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); overflow: hidden; font-family: monospace; font-size: 0.75rem;">
            <div class="terminal-header" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background-color: #09090b; border-bottom: 1px solid rgba(39, 39, 42, 0.8);">
                <div class="terminal-dots" style="display: flex; gap: 0.375rem;">
                    <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #ef4444;"></span>
                    <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #eab308;"></span>
                    <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #22c55e;"></span>
                </div>
                <div class="terminal-title-text" style="color: #71717a; font-size: 0.75rem; font-weight: 500;">
                    &gt;_ terminal.trujillomingorance.com
                </div>
                <div style="width: 42px;"></div> <!-- Spacer -->
            </div>
            <div class="terminal-controls" style="padding: 0.75rem 1rem; border-bottom: 1px solid rgba(39, 39, 42, 0.8);">
                <div class="terminal-pills" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <button type="button" class="terminal-pill" data-cmd="whoami" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">whoami</button>
                    <button type="button" class="terminal-pill" data-cmd="sysinfo" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">sysinfo</button>
                    <button type="button" class="terminal-pill" data-cmd="hardening" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">hardening</button>
                    <button type="button" class="terminal-pill" data-cmd="skills" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">skills</button>
                    <button type="button" class="terminal-pill" data-cmd="projects" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">projects</button>
                    <button type="button" class="terminal-pill" data-cmd="exp" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">exp</button>
                    <button type="button" class="terminal-pill" data-cmd="certs" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">certs</button>
                    <button type="button" class="terminal-pill" data-cmd="status" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">status</button>
                    <button type="button" class="terminal-pill" data-cmd="contact" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">contact</button>
                    <button type="button" class="terminal-pill" data-cmd="clear" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">clear</button>
                    <button type="button" class="terminal-pill" data-cmd="attestto" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;">attestto</button>
                </div>
            </div>
            <div class="terminal-body" id="terminal-output" style="padding: 1rem;">
                <div class="terminal-line"><span class="prompt-user">alberto@sys-node</span>:<span class="prompt-path">~</span>$ <span class="cmd-text">whoami</span></div>
                <div class="terminal-line response-line">
                    <div class="term-card" style="line-height: 1.6; margin-top:0.5rem; margin-bottom:1rem;">
                        <div style="font-weight: 700; color: #60a5fa; margin-bottom: 8px;">[ RESUMEN DE IDENTIDAD ]</div>
                        Nombre Completo: Alberto Trujillo Mingorance<br>
                        Rol Principal: Systems & Cloud Administrator | Cybersecurity & IAM<br>
                        Titulaciones: ASIR (Perfil Ciberseguridad) + SMR @ Institut Tecnològic de Barcelona<br>
                        Estado Actual: Ex-SecOps & Systems en Attestto | Certificado Discapacidad &gt;33% | Incorporación Inmediata
                    </div>
                </div>
            </div>
            <div class="terminal-controls" style="padding: 1rem; border-top: 1px solid rgba(39, 39, 42, 0.8); background-color: #09090b;">
                <form id="terminal-form" class="terminal-input-wrapper" style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="terminal-prompt-label" style="color: #60a5fa; white-space: nowrap;">alberto@sys-node:~$</span>
                    <input type="text" id="terminal-input" autocomplete="off" placeholder="Escribe un comando..." class="terminal-input" style="background: transparent; border: none; color: #d4d4d8; width: 100%; outline: none; font-family: monospace; font-size: 0.75rem;">
                </form>
            </div>
        </div>
`;

// Replace it
html = html.replace(/<!-- Interactive Terminal Centered Below -->[\s\S]*?<a href="#disponibilidad"/, newTerminalWindow + '\n    </div>\n    <a href="#disponibilidad"');

fs.writeFileSync('index.html', html);
console.log('Fixed terminal form and anti-debugging scripts!');
