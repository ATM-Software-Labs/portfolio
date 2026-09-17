const fs = require('fs');

let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

const regexES = /(const es = \{[\s\S]*?\})/;
const regexCA = /(const ca = \{[\s\S]*?\})/;
const regexEN = /(const en = \{[\s\S]*?\})/;

// 1. ES Block
let esBlock = i18n.match(regexES)[0];
esBlock = esBlock.replace(/hero_tag1: '.*?',/, "hero_tag1: 'ASIR + SMR (Grado Sup. & Medio)',");
esBlock = esBlock.replace(/hero_description: '.*?',/, "hero_description: 'Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.',");
i18n = i18n.replace(regexES, esBlock);

// 2. CA Block
let caBlock = i18n.match(regexCA)[0];
// Ensure CA tag1 is correct
caBlock = caBlock.replace(/hero_tag1: '.*?',/, "hero_tag1: 'ASIXc + SMX (Grau Sup. & Mitjà)',");
caBlock = caBlock.replace(/hero_description: '.*?',/, "hero_description: 'Tècnic Superior ASIXc especialitzat en administració d\\'infraestructures crítiques, gestió d\\'identitats i accessos (Microsoft Entra ID, Active Directory), seguretat perimetral i hardening de sistemes. Incorporació immediata.',");
i18n = i18n.replace(regexCA, caBlock);

// 3. EN Block
let enBlock = i18n.match(regexEN)[0];
enBlock = enBlock.replace(/hero_tag1: '.*?',/, "hero_tag1: 'ASIR + SMR (Higher & Mid Vocational Degrees)',");
enBlock = enBlock.replace(/hero_description: '.*?',/, "hero_description: 'ASIR Higher Technician specialized in critical infrastructure administration, identity and access management (Microsoft Entra ID, Active Directory), perimeter security, and system hardening. Immediate availability.',");
i18n = i18n.replace(regexEN, enBlock);

fs.writeFileSync('src/js/i18n.js', i18n);

// Also fix index.html defaults
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<span data-i18n="hero_tag1">.*?<\/span>/, '<span data-i18n="hero_tag1">ASIR + SMR (Grado Sup. & Medio)</span>');
html = html.replace(/<p class="hero-desc" data-i18n="hero_description">.*?<\/p>/, '<p class="hero-desc" data-i18n="hero_description">Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.</p>');

fs.writeFileSync('index.html', html);
console.log('Hero and Description fixed!');
