const fs = require('fs');

let js = fs.readFileSync('src/js/github-projects.js', 'utf8');

// Replace all \` with `
js = js.replace(/\\`/g, '`');
// Replace all \$ with $
js = js.replace(/\\\$/g, '$');

fs.writeFileSync('src/js/github-projects.js', js);
console.log('Fixed syntax in github-projects.js');
