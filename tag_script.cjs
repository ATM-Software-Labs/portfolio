const fs = require('fs');
let f = fs.readFileSync('src/js/i18n.js', 'utf8');

f = f.replace(/hero_tag2: 'Systems Administration, Cloud\/IAM & Security',/, "hero_tag2: 'Administración de Sistemas, Cloud/IAM y Seguridad',");
f = f.replace(/hero_tag2: 'Systems Administration, Cloud\/IAM & Security',/, "hero_tag2: 'Administració de Sistemes, Cloud/IAM i Seguretat',");

fs.writeFileSync('src/js/i18n.js', f);
