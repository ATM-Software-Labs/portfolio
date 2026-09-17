const fs = require('fs');

let headers = fs.readFileSync('public/_headers', 'utf8');

// Add https://api.github.com to connect-src
headers = headers.replace(/connect-src 'self' ([^;]+);/, "connect-src 'self' https://api.github.com $1;");

fs.writeFileSync('public/_headers', headers);
console.log('CSP updated');
