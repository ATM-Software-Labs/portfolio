const fs = require('fs');
let f = fs.readFileSync('index.html', 'utf8');
f = f.replace(/"Quantitative Risk Management"/g, '"Network Security"');
fs.writeFileSync('index.html', f);
