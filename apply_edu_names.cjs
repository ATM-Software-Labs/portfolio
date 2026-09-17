const fs = require('fs');

// 1. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

// The defaults in index.html should be the ES version:
// ES Title 1: "Administración de Sistemas Informáticos en Red"
// ES Subtitle 1: "Grado Superior · ASIR (Perfil Ciberseguridad)"
// ES Title 2: "Sistemas Microinformáticos y Redes"
// ES Subtitle 2: "Grado Medio · SMR"

// Fix the subtitle for ASIR in index.html (previously was ASIXc)
html = html.replace(/<h4 data-i18n="edu_asir_level".*?>.*?<\/h4>/, '<h4 data-i18n="edu_asir_level" style="font-size: 0.875rem; color: #60a5fa; margin-bottom: 0.5rem; font-weight: 500;">Grado Superior · ASIR (Perfil Ciberseguridad)</h4>');

// Fix the subtitle for SMR in index.html (already "Grado Medio · SMR" but just to be sure)
html = html.replace(/<h4 data-i18n="edu_smr_level".*?>.*?<\/h4>/, '<h4 data-i18n="edu_smr_level" style="font-size: 0.875rem; color: #10b981; margin-bottom: 0.5rem; font-weight: 500;">Grado Medio · SMR</h4>');

// Also update the tags in the hero if they say ASIXc instead of ASIR? Wait, the user ONLY specified the education section. I will stick to what they requested.
// Wait, the user specifically mentioned:
// "Estandariza los nombres y siglas de las titulaciones en los archivos de traducción/contenido para que respeten la nomenclatura oficial en cada idioma"

fs.writeFileSync('index.html', html);


// 2. UPDATE i18n.js
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

const dictionaries = [
    {
        lang: 'es',
        asirTitle: "Administración de Sistemas Informáticos en Red",
        asirLevel: "Grado Superior · ASIR (Perfil Ciberseguridad)",
        smrTitle: "Sistemas Microinformáticos y Redes",
        smrLevel: "Grado Medio · SMR"
    },
    {
        lang: 'ca',
        asirTitle: "Administració de Sistemes Informàtics en Xarxa",
        asirLevel: "Cicle Formatiu de Grau Superior · ASIXc (Perfil Ciberseguretat)",
        smrTitle: "Sistemes Microinformàtics i Xarxes",
        smrLevel: "Grau Mitjà · SMX"
    },
    {
        lang: 'en',
        asirTitle: "Network Computer Systems Administration",
        asirLevel: "Higher Vocational Degree · ASIR (Cybersecurity Profile)",
        smrTitle: "Microcomputer Systems and Networks",
        smrLevel: "Mid Degree · SMR"
    }
];

let asirTitleCount = 0;
i18n = i18n.replace(/edu_asir_title: '.*?',/g, () => {
    let val = dictionaries[asirTitleCount].asirTitle;
    asirTitleCount++;
    return "edu_asir_title: '" + val + "',";
});

let asirLevelCount = 0;
i18n = i18n.replace(/edu_asir_level: '.*?',/g, () => {
    let val = dictionaries[asirLevelCount].asirLevel;
    asirLevelCount++;
    return "edu_asir_level: '" + val + "',";
});

let smrTitleCount = 0;
i18n = i18n.replace(/edu_smr_title: '.*?',/g, () => {
    let val = dictionaries[smrTitleCount].smrTitle;
    smrTitleCount++;
    return "edu_smr_title: '" + val + "',";
});

let smrLevelCount = 0;
i18n = i18n.replace(/edu_smr_level: '.*?',/g, () => {
    let val = dictionaries[smrLevelCount].smrLevel;
    smrLevelCount++;
    return "edu_smr_level: '" + val + "',";
});

fs.writeFileSync('src/js/i18n.js', i18n);
console.log('Education names standardized!');
