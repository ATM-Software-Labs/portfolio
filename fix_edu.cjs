const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

const oldEduSection = /<section id="formacion"[\s\S]*?<\/section>/;

const newEduSection = `
        <!-- Formación Section -->
        <section id="formacion" class="section-padding scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="edu_title">Formación Académica</h2>
                <div class="grid-2 education-grid" style="align-items: stretch;">
                    
                    <div class="glass-card border-left-blue edu-card" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <img src="/assets/images/itecbcn_logo.jpeg?v=p2" alt="Logotipo oficial de Institut Tecnològic de Barcelona ITB" class="edu-logo" style="margin-bottom: 1rem;">
                            <div class="edu-content">
                                <h3 data-i18n="edu_asir_title" style="font-size: 1.125rem; font-weight: 600; line-height: 1.3; margin-bottom: 0.25rem; color: #f4f4f5;">Administración de Sistemas Informáticos en Red</h3>
                                <h4 data-i18n="edu_asir_level" style="font-size: 0.875rem; color: #60a5fa; margin-bottom: 0.5rem; font-weight: 500;">Grado Superior · ASIXc (Perfil Ciberseguridad)</h4>
                                <p class="edu-school" style="margin-bottom: 0.25rem;">Institut Tecnològic de Barcelona</p>
                                <span class="edu-period">2024 - 2026</span>
                                <p class="edu-desc" data-i18n="edu_asir_desc" style="margin-top: 1rem;">Especialización en infraestructuras de servidores (Linux/Windows), securización de servicios de red, hardening de sistemas, seguridad perimetral y directivas Zero-Trust.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass-card border-left-green edu-card" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <img src="/assets/images/itecbcn_logo.jpeg?v=p2" alt="Logotipo oficial de Institut Tecnològic de Barcelona ITB" class="edu-logo" style="margin-bottom: 1rem;">
                            <div class="edu-content">
                                <h3 data-i18n="edu_smr_title" style="font-size: 1.125rem; font-weight: 600; line-height: 1.3; margin-bottom: 0.25rem; color: #f4f4f5;">Sistemas Microinformáticos y Redes</h3>
                                <h4 data-i18n="edu_smr_level" style="font-size: 0.875rem; color: #10b981; margin-bottom: 0.5rem; font-weight: 500;">Grado Medio · SMR</h4>
                                <p class="edu-school" style="margin-bottom: 0.25rem;">Institut Tecnològic de Barcelona</p>
                                <span class="edu-period">2022 - 2024</span>
                                <p class="edu-desc" data-i18n="edu_smr_desc" style="margin-top: 1rem;">Fundamentos de arquitectura hardware, despliegue y clonación de imágenes de sistema, cableado estructurado, direccionamiento IP y soporte técnico en entornos de red local.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
`;

html = html.replace(oldEduSection, newEduSection.trim());
fs.writeFileSync('index.html', html);


// 2. Update i18n.js
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

const regexES = /(const es = \{[\s\S]*?\})/;
const regexCA = /(const ca = \{[\s\S]*?\})/;
const regexEN = /(const en = \{[\s\S]*?\})/;

function updateDict(dictStr, lang) {
    let asirTitle = "Administración de Sistemas Informáticos en Red";
    let asirLevel = "Grado Superior · ASIXc (Perfil Ciberseguridad)";
    let asirDesc = "Especialización en infraestructuras de servidores (Linux/Windows), securización de servicios de red, hardening de sistemas, seguridad perimetral y directivas Zero-Trust.";
    
    let smrTitle = "Sistemas Microinformáticos y Redes";
    let smrLevel = "Grado Medio · SMR";
    let smrDesc = "Fundamentos de arquitectura hardware, despliegue y clonación de imágenes de sistema, cableado estructurado, direccionamiento IP y soporte técnico en entornos de red local.";

    if (lang === 'ca') {
        asirTitle = "Administració de Sistemes Informàtics en Xarxa";
        asirLevel = "Grau Superior · ASIXc (Perfil Ciberseguretat)";
        asirDesc = "Especialització en infraestructures de servidors (Linux/Windows), securització de serveis de xarxa, hardening de sistemes, seguretat perimetral i directives Zero-Trust.";
        smrTitle = "Sistemes Microinformàtics i Xarxes";
        smrLevel = "Grau Mitjà · SMX";
        smrDesc = "Fonaments d'arquitectura maquinari, desplegament i clonació d'imatges de sistema, cablejat estructurat, adreçament IP i suport tècnic en entorns de xarxa local.";
    } else if (lang === 'en') {
        asirTitle = "Network Computer Systems Administration";
        asirLevel = "Higher Degree · ASIXc (Cybersecurity Profile)";
        asirDesc = "Specialization in server infrastructure (Linux/Windows), network service securitization, system hardening, perimeter security, and Zero-Trust directives.";
        smrTitle = "Microcomputer Systems and Networks";
        smrLevel = "Intermediate Degree · SMR";
        smrDesc = "Hardware architecture fundamentals, system image deployment and cloning, structured cabling, IP addressing, and technical support in local network environments.";
    }

    let updated = dictStr.replace(/edu_asir_title: '.*',/, "edu_asir_title: '" + asirTitle + "',");
    updated = updated.replace(/edu_asir_level: '.*',/, "edu_asir_level: '" + asirLevel + "',");
    updated = updated.replace(/edu_asir_desc: '.*',/, "edu_asir_desc: '" + asirDesc + "',");
    
    updated = updated.replace(/edu_smr_title: '.*',/, "edu_smr_title: '" + smrTitle + "',");
    updated = updated.replace(/edu_smr_level: '.*',/, "edu_smr_level: '" + smrLevel + "',");
    updated = updated.replace(/edu_smr_desc: '.*',/, "edu_smr_desc: '" + smrDesc + "',");
    return updated;
}

i18n = i18n.replace(regexES, updateDict(i18n.match(regexES)[0], 'es'));
i18n = i18n.replace(regexCA, updateDict(i18n.match(regexCA)[0], 'ca'));
i18n = i18n.replace(regexEN, updateDict(i18n.match(regexEN)[0], 'en'));

fs.writeFileSync('src/js/i18n.js', i18n);
console.log("Education fixed!");
