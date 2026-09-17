const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. UPDATE METADATA
html = html.replace(/<title>.*<\/title>/, '<title>Alberto Trujillo | Systems & Cloud Administrator | Cybersecurity & IAM</title>');
html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Junior Systems & Cloud Administrator based in Barcelona. Specialized in Linux/Windows Server, Microsoft Entra ID, Cloudflare, Network Security, and Infrastructure Hardening. ASIR graduate.">');

// Update OG Meta
html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="Alberto Trujillo | Systems & Cloud Administrator | Cybersecurity & IAM">');
html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="Junior Systems & Cloud Administrator based in Barcelona. Specialized in Linux/Windows Server, Microsoft Entra ID, Cloudflare, Network Security, and Infrastructure Hardening. ASIR graduate.">');

html = html.replace(/<meta name="twitter:title" content="[^"]*">/, '<meta name="twitter:title" content="Alberto Trujillo | Systems & Cloud Administrator | Cybersecurity & IAM">');
html = html.replace(/<meta name="twitter:description" content="[^"]*">/, '<meta name="twitter:description" content="Junior Systems & Cloud Administrator based in Barcelona. Specialized in Linux/Windows Server, Microsoft Entra ID, Cloudflare, Network Security, and Infrastructure Hardening. ASIR graduate.">');


// 2. HEADER Y SELECTOR DE IDIOMAS
// The current language selector is flat buttons. We need to replace it with a compact dropdown.
/*
The current language buttons probably look like:
<div class="lang-selector">
    <button class="..." data-lang="es">ES</button>
    <button class="..." data-lang="en">EN</button>
    ...
</div>
We'll have to see the actual structure first. We'll leave this for a regex after we see the structure.
*/

fs.writeFileSync('index.html', html);
console.log('Metadata updated');
