const fs = require('fs');

let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

// The language blocks actually look like:
// es: {
// ca: {
// en: {

let esBlockMatches = i18n.split('ca: {');
let esBlock = esBlockMatches[0];
let restAfterES = 'ca: {' + esBlockMatches[1];

let caBlockMatches = restAfterES.split('en: {');
let caBlock = caBlockMatches[0];
let enBlock = 'en: {' + caBlockMatches[1];

// 1. ES Block
esBlock = esBlock.replace(/hero_tag1: '.*?',/, "hero_tag1: 'ASIR + SMR (Grado Sup. & Medio)',");
esBlock = esBlock.replace(/hero_description: '.*?',/, "hero_description: 'Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.',");

// 2. CA Block
caBlock = caBlock.replace(/hero_tag1: '.*?',/, "hero_tag1: 'ASIXc + SMX (Grau Sup. & Mitjà)',");
caBlock = caBlock.replace(/hero_description: '.*?',/, "hero_description: 'Tècnic Superior ASIXc especialitzat en administració d\\'infraestructures crítiques, gestió d\\'identitats i accessos (Microsoft Entra ID, Active Directory), seguretat perimetral i hardening de sistemes. Incorporació immediata.',");

// 3. EN Block
enBlock = enBlock.replace(/hero_tag1: '.*?',/, "hero_tag1: 'ASIR + SMR (Higher & Mid Vocational Degrees)',");
enBlock = enBlock.replace(/hero_description: '.*?',/, "hero_description: 'ASIR Higher Technician specialized in critical infrastructure administration, identity and access management (Microsoft Entra ID, Active Directory), perimeter security, and system hardening. Immediate availability.',");

i18n = esBlock + caBlock + enBlock;

fs.writeFileSync('src/js/i18n.js', i18n);

// Also fix index.html defaults
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<span data-i18n="hero_tag1">.*?<\/span>/, '<span data-i18n="hero_tag1">ASIR + SMR (Grado Sup. & Medio)</span>');
html = html.replace(/<p class="hero-desc" data-i18n="hero_description">.*?<\/p>/, '<p class="hero-desc" data-i18n="hero_description">Técnico Superior ASIR especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.</p>');

fs.writeFileSync('index.html', html);
console.log('Hero and Description fixed!');
