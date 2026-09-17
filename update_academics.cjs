const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

// Replace "ASIR" references in Hero
html = html.replace(/ASIR \+ SMR \(Grado Sup\. & Medio\)/g, 'ASIXc + SMR (Grado Sup. & Medio)');
html = html.replace(/ASIX \+ SMX \(Grau Sup\. & Mitjà\)/g, 'ASIXc + SMX (Grau Sup. & Mitjà)');
html = html.replace(/ASIR \+ SMR \(Higher & Mid Vocational Degrees\)/g, 'ASIXc + SMR (Higher & Mid Vocational Degrees)');

html = html.replace(/Técnico Superior ASIR/g, 'Técnico Superior ASIXc (Ciberseguridad)');
html = html.replace(/Tècnic Superior ASIX/g, 'Tècnic Superior ASIXc (Ciberseguretat)');
html = html.replace(/ASIR Higher Technician/g, 'ASIXc Higher Technician (Cybersecurity)');

// Replace ASIR in metadata
html = html.replace(/ASIR graduate/g, 'ASIXc (Administración de Sistemas y Ciberseguridad) graduate');
html = html.replace(/Titulado en ASIR y SMR/g, 'Titulado en ASIXc (Administración de Sistemas y Ciberseguridad) y SMR');
html = html.replace(/, ASIR, /g, ', ASIXc, ');

// Update Education Block
// Title
html = html.replace(/<h3 data-i18n="edu_asir_title">ASIR \(Grado Superior\)<\/h3>/, '<h3 data-i18n="edu_asir_title">ASIXc (Grado Superior)</h3>');
// Level
html = html.replace(/<h4 data-i18n="edu_asir_level">Administración de Sistemas Informáticos en Red<\/h4>/, '<h4 data-i18n="edu_asir_level">CFGS Administració de Sistemes Informàtics en Xarxa (Perfil Ciberseguretat) - ASIXc</h4>');
// Period
// Ensure it's 2024 - 2026 for ASIXc
html = html.replace(/<span class="edu-period">2024 - 2026<\/span>\s*<p class="edu-desc" data-i18n="edu_asir_desc">.*?<\/p>/, '<span class="edu-period">2024 - 2026</span>\n                            <p class="edu-desc" data-i18n="edu_asir_desc">Formación superior especializada en administración de infraestructuras de red y servidores, hardening de sistemas, detección de vulnerabilidades, seguridad perimetral, cortafuegos y políticas Zero-Trust.</p>');

// Add Certifications block before Contacto
const certHtml = `
        <!-- Certificaciones Section -->
        <section id="certificaciones" class="section-padding scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="certs_title">Credenciales & Licencias</h2>
                <div class="grid-1">
                    <div class="glass-card project-card featured-project border-top-blue">
                        <div class="project-header">
                            <div>
                                <span class="project-badge blue-badge" style="background:rgba(59,130,246,0.1); color:#60a5fa;"><i class="fas fa-check-circle"></i> VERIFIED CREDENTIAL</span>
                                <h3>Microsoft Applied Skills: Get started with identities and access using Microsoft Entra</h3>
                            </div>
                            <a href="https://learn.microsoft.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fas fa-external-link-alt"></i> Verificar</a>
                        </div>
                        <p class="project-desc" style="color: #a1a1aa; margin-top: 0.5rem;"><strong>Emisor:</strong> Microsoft (Sep. 2026) <br><strong>ID Credencial:</strong> F89C9FFB072C4C9A</p>
                        <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.5rem;">
                            <span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Microsoft Entra ID</span>
                            <span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Conditional Access</span>
                            <span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">RBAC</span>
                            <span style="background:rgba(59,130,246,0.1); color:#60a5fa; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem;">Cloud Security</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

if (!html.includes('id="certificaciones"')) {
    html = html.replace('<!-- Contacto Section -->', certHtml + '\n        <!-- Contacto Section -->');
}

fs.writeFileSync('index.html', html);


// 2. Update terminal.js
let term = fs.readFileSync('src/js/terminal.js', 'utf8');

term = term.replace(/case 'certs':[\s\S]*?break;/g, `case 'certs':
        const certTextNew = \`
          <div class="term-card">
            <div style="font-weight: 700; color: var(--accent-primary); margin-bottom: 8px;">[ ACTIVE CREDENTIALS ]</div>
            - [ACTIVE] Microsoft Applied Skills: Get started with identities and access using Microsoft Entra<br>
            &nbsp;&nbsp;Credential ID: F89C9FFB072C4C9A (Verified)
          </div>\`;
        appendOutput(certTextNew);
        break;`);

term = term.replace(/Academic Degrees: .*/g, 'Academic Degrees: ASIXc (Higher Degree, Cybersecurity Profile) + SMR @ Institut Tecnològic de Barcelona<br>');
term = term.replace(/Titulacions Acad.miques: .*/g, 'Titulacions Acadèmiques: ASIXc (Grau Superior, Perfil Ciberseguretat) + SMX @ Institut Tecnològic de Barcelona<br>');
term = term.replace(/Titulaciones Acad.micas: .*/g, 'Titulaciones Académicas: ASIXc (Grado Superior, Perfil Ciberseguridad) + SMR @ Institut Tecnològic de Barcelona<br>');

// Fix whoami remaining bad translations
term = term.replace(/Rol Principal: Enginyer Junior de DevOps i Sistemes.*/g, 'Rol Principal: Systems & Cloud Administrator | Ciberseguretat i IAM<br>');
term = term.replace(/Rol Principal: Ingeniero Junior de DevOps y Sistemas.*/g, 'Rol Principal: Systems & Cloud Administrator | Ciberseguridad e IAM<br>');

fs.writeFileSync('src/js/terminal.js', term);


// 3. Update i18n.js
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

i18n = i18n.replace(/ASIR \+ SMR \(Grado Sup\. & Medio\)/g, 'ASIXc + SMR (Grado Sup. & Medio)');
i18n = i18n.replace(/ASIX \+ SMX \(Grau Sup\. & Mitjà\)/g, 'ASIXc + SMX (Grau Sup. & Mitjà)');
i18n = i18n.replace(/ASIR \+ SMR \(Higher & Mid Vocational Degrees\)/g, 'ASIXc + SMR (Higher & Mid Vocational Degrees)');

i18n = i18n.replace(/Técnico Superior ASIR especializado en administración/g, 'Técnico Superior ASIXc especializado en administración');
i18n = i18n.replace(/Tècnic Superior ASIX especialitzat en administració/g, 'Tècnic Superior ASIXc especialitzat en administració');
i18n = i18n.replace(/Certified in ASIR & SMR with a strong self-taught/g, 'Certified in ASIXc & SMR with a strong self-taught');

i18n = i18n.replace(/ASIR \(Grado Superior\)/g, 'ASIXc (Grado Superior)');
i18n = i18n.replace(/ASIX \(Grau Superior\)/g, 'ASIXc (Grau Superior)');
i18n = i18n.replace(/ASIR \(Higher Degree\)/g, 'ASIXc (Higher Degree)');

i18n = i18n.replace(/Administración de Sistemas Informáticos en Red/g, 'CFGS Administració de Sistemes Informàtics en Xarxa (Perfil Ciberseguretat) - ASIXc');
i18n = i18n.replace(/Administració de Sistemes Informàtics en Xarxa/g, 'CFGS Administració de Sistemes Informàtics en Xarxa (Perfil Ciberseguretat) - ASIXc');
i18n = i18n.replace(/Network Computer Systems Administration/g, 'CFGS Administració de Sistemes Informàtics en Xarxa (Cybersecurity Profile) - ASIXc');

i18n = i18n.replace(/Especialización en arquitectura de redes, servicios de sistema y administración de bases de datos\./g, 'Formación superior especializada en administración de infraestructuras de red y servidores, hardening de sistemas, detección de vulnerabilidades, seguridad perimetral, cortafuegos y políticas Zero-Trust.');
i18n = i18n.replace(/Especialització en arquitectura de xarxes, serveis de sistema i administració de bases de dades\./g, "Formació superior especialitzada en administració d\\'infraestructures de xarxa i servidors, hardening de sistemes, detecció de vulnerabilitats, seguretat perimetral, tallafocs i polítiques Zero-Trust.");
i18n = i18n.replace(/Specialization in network architecture, system services, and database administration\./g, 'Higher education specialized in network and server infrastructure administration, system hardening, vulnerability detection, perimeter security, firewalls, and Zero-Trust policies.');

i18n = i18n.replace(/ASIR \& SMR/g, 'ASIXc & SMR');

// Add certs_title to i18n just in case (if missing, we append to dicts)
if (!i18n.includes("certs_title: 'Credenciales & Licencias'")) {
    i18n = i18n.replace(/edu_title: 'Formación',/, "edu_title: 'Formación',\n        certs_title: 'Credenciales & Licencias',");
    i18n = i18n.replace(/edu_title: 'Formació',/, "edu_title: 'Formació',\n        certs_title: 'Credencials & Llicències',");
    i18n = i18n.replace(/edu_title: 'Education',/, "edu_title: 'Education',\n        certs_title: 'Credentials & Licenses',");
}

fs.writeFileSync('src/js/i18n.js', i18n);
console.log("Academics updated");
