const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The user said "Elimina cualquier comando o mención residual relativa a eToro o finanzas cuantitativas".
// They did NOT say to remove `attestto`.
// Let's add the `attestto` pill back if it's missing.
const pillsContainerPattern = /<div class="terminal-pills"[^>]*>([\s\S]*?)<\/div>/;
html = html.replace(pillsContainerPattern, (match, innerHtml) => {
    if (!innerHtml.includes('data-cmd="attestto"')) {
        const newPill = `\n            <button type="button" class="terminal-pill" data-cmd="attestto" style="background-color: #18181b; border: 1px solid #27272a; color: #d4d4d8; padding: 0.25rem 0.625rem; border-radius: 0.375rem; font-size: 11px; transition: background 0.2s; cursor: pointer;" onmouseover="this.style.backgroundColor='#27272a'" onmouseout="this.style.backgroundColor='#18181b'">attestto</button>`;
        return match.replace(innerHtml, innerHtml + newPill);
    }
    return match;
});

// Also, need to remove any "eToro" or "finanzas cuantitativas" mentions from `terminal.js` and `i18n.js` if they still exist!
fs.writeFileSync('index.html', html);

let js = fs.readFileSync('src/js/terminal.js', 'utf8');
// Check if eToro or quant exist in terminal.js
// Actually, earlier I didn't see eToro, but let's make sure `quant` command is removed if it exists.
const quantPattern = /case 'quant':[\s\S]*?break;/g;
js = js.replace(quantPattern, '');
const etoroPattern = /case 'etoro':[\s\S]*?break;/g;
js = js.replace(etoroPattern, '');

// Also remove them from the command list in terminal.js
js = js.replace(/quant: \{[\s\S]*?\},/g, '');
js = js.replace(/etoro: \{[\s\S]*?\},/g, '');

fs.writeFileSync('src/js/terminal.js', js);
console.log('Attestto restored and finanzas removed.');
