const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Title & Meta tags
html = html.replace(/DevOps & Systems Engineer/g, 'Systems & Cloud Security Engineer');
html = html.replace(/Ingeniero Junior de DevOps y Sistemas/g, 'Ingeniero Junior de Sistemas y Seguridad Cloud');
html = html.replace(/Ingeniero de DevOps, Sistemas y Ciberseguridad/g, 'Ingeniero Junior de Sistemas y Seguridad Cloud');
html = html.replace(/Especializado en Cloud\/IAM, Ciberseguridad y DevOps/g, 'Especializado en Administración de Sistemas, Cloud/IAM, Hardening y Seguridad de Red');
html = html.replace(/Alberto Trujillo DevOps/g, 'Alberto Trujillo Systems');
html = html.replace(/DevOps Engineer/g, 'Systems Engineer');
html = html.replace(/alberto@devops-node/g, 'alberto@sys-node');
html = html.replace(/Experiencia IT & DevOps/g, 'Experiencia IT & Sistemas');
html = html.replace(/"DevOps Engineering"/g, '"Systems Administration"');
html = html.replace(/Cloud, IAM & DevOps/g, 'Cloud, Systems & IAM');

// Remove remaining mentions of W3C DID/VC and vLEI if needed, but only the specific footer ones
html = html.replace(/Especializado en Cloud\/IAM, Hardening de Infraestructuras e Identidad Digital Descentralizada/g, 'Especializado en Administración de Sistemas, Cloud/IAM, Hardening de Infraestructura y Seguridad de Red');

fs.writeFileSync('index.html', html);
console.log("Fix completed");
