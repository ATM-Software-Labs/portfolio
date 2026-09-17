const fs = require('fs');

let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

const dictionaries = [
    {
        lang: 'es',
        asirTitle: "Administración de Sistemas Informáticos en Red",
        asirLevel: "Grado Superior · ASIXc (Perfil Ciberseguridad)",
        asirDesc: "Especialización en infraestructuras de servidores (Linux/Windows), securización de servicios de red, hardening de sistemas, seguridad perimetral y directivas Zero-Trust.",
        smrTitle: "Sistemas Microinformáticos y Redes",
        smrLevel: "Grado Medio · SMR",
        smrDesc: "Fundamentos de arquitectura hardware, despliegue y clonación de imágenes de sistema, cableado estructurado, direccionamiento IP y soporte técnico en entornos de red local."
    },
    {
        lang: 'ca',
        asirTitle: "Administració de Sistemes Informàtics en Xarxa",
        asirLevel: "Grau Superior · ASIXc (Perfil Ciberseguretat)",
        asirDesc: "Especialització en infraestructures de servidors (Linux/Windows), securització de serveis de xarxa, hardening de sistemes, seguretat perimetral i directives Zero-Trust.",
        smrTitle: "Sistemes Microinformàtics i Xarxes",
        smrLevel: "Grau Mitjà · SMX",
        smrDesc: "Fonaments d\\'arquitectura maquinari, desplegament i clonació d\\'imatges de sistema, cablejat estructurat, adreçament IP i suport tècnic en entorns de xarxa local."
    },
    {
        lang: 'en',
        asirTitle: "Network Computer Systems Administration",
        asirLevel: "Higher Degree · ASIXc (Cybersecurity Profile)",
        asirDesc: "Specialization in server infrastructure (Linux/Windows), network service securitization, system hardening, perimeter security, and Zero-Trust directives.",
        smrTitle: "Microcomputer Systems and Networks",
        smrLevel: "Intermediate Degree · SMR",
        smrDesc: "Hardware architecture fundamentals, system image deployment and cloning, structured cabling, IP addressing, and technical support in local network environments."
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

let asirDescCount = 0;
i18n = i18n.replace(/edu_asir_desc: '.*?',/g, () => {
    let val = dictionaries[asirDescCount].asirDesc;
    asirDescCount++;
    return "edu_asir_desc: '" + val + "',";
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

let smrDescCount = 0;
i18n = i18n.replace(/edu_smr_desc: '.*?',/g, () => {
    let val = dictionaries[smrDescCount].smrDesc;
    smrDescCount++;
    return "edu_smr_desc: '" + val + "',";
});

fs.writeFileSync('src/js/i18n.js', i18n);
console.log("Translations fixed sequentially!");
