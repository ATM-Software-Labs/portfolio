const fs = require('fs');

let terminal = fs.readFileSync('src/js/terminal.js', 'utf8');

// Replace EN "ASIXc" with "ASIR"
terminal = terminal.replace(/Academic Degrees: ASIXc \(Higher Degree, Cybersecurity Profile\) \+ SMR/g, "Academic Degrees: ASIR (Higher Degree, Cybersecurity Profile) + SMR");

// Replace CA (Already correct "ASIXc... + SMX")

// Replace ES "ASIXc" with "ASIR"
terminal = terminal.replace(/Titulaciones Académicas: ASIXc \(Grado Superior, Perfil Ciberseguridad\) \+ SMR/g, "Titulaciones Académicas: ASIR (Grado Superior, Perfil Ciberseguridad) + SMR");
// Also handle character encoding glitch version if it happens
terminal = terminal.replace(/Titulaciones Acadmicas: ASIXc \(Grado Superior, Perfil Ciberseguridad\) \+ SMR/g, "Titulaciones Académicas: ASIR (Grado Superior, Perfil Ciberseguridad) + SMR");

fs.writeFileSync('src/js/terminal.js', terminal);
console.log('Terminal.js updated!');
