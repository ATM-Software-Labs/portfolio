const fs = require('fs');
let f = fs.readFileSync('src/js/i18n.js', 'utf8');
f = f.replace(/Polítiques d'Identitat/g, "Polítiques d\\'Identitat");
fs.writeFileSync('src/js/i18n.js', f);
