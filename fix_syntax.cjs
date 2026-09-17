const fs = require('fs');
let f = fs.readFileSync('src/js/i18n.js', 'utf8');
f = f.replace(/Administració d'identitats/g, "Administració d\\'identitats");
fs.writeFileSync('src/js/i18n.js', f);
