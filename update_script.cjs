const fs = require('fs');

// 1. UPDATE terminal.js
let term = fs.readFileSync('src/js/terminal.js', 'utf8');

term = term.replace(
  `Primary Role: Junior DevOps & Systems Engineer | Cybersecurity & Cloud/IAM Specialist`,
  `Primary Role: Junior Systems & Cloud Security Engineer | Cybersecurity & IAM`
).replace(
  `Rol Principal: Enginyer Junior de DevOps i Sistemes | Ciberseguretat  Cloud/IAM`,
  `Rol Principal: Enginyer Junior de Sistemes i Seguretat Cloud | Ciberseguretat i IAM`
).replace(
  `Rol Principal: Ingeniero Junior de DevOps y Sistemas | Ciberseguridad  Cloud/IAM`,
  `Rol Principal: Ingeniero Junior de Sistemas y Seguridad Cloud | Ciberseguridad e IAM`
).replace(
  `Current Employer: Attestto (Cloud/IAM & Digital Identity) & eToro (Popular Investor)`,
  `Current Positions: Ex-SecOps & Systems at Attestto | Open to immediate opportunities`
).replace(
  `Empresa Actual: Attestto (Cloud/IAM i Identitat Digital) & eToro (Popular Investor)`,
  `Puesto Reciente: Ex-SecOps & Systems a Attestto | Obert a noves oportunitats`
).replace(
  `Empresa Actual: Attestto (Cloud/IAM e Identidad Digital) y eToro (Popular Investor)`,
  `Puesto Reciente: Ex-SecOps & Systems en Attestto | Abierto a nuevas oportunidades`
);

fs.writeFileSync('src/js/terminal.js', term);


// 2. UPDATE index.html
let html = fs.readFileSync('index.html', 'utf8');

// Metas
html = html.replace(
  /Ingeniero Junior de DevOps y Sistemas en Attestto \(Cloud\/IAM, Ciberseguridad, W3C DID\/VC\) e Inversor Popular en eToro/g,
  'Ingeniero Junior de Sistemas y Seguridad Cloud (Cloud/IAM, Ciberseguridad, Active Directory)'
);
html = html.replace(
  /Experiencia en Attestto \(DevOps & Security Engineer\) y eToro \(Popular Investor\)/g,
  'Experiencia en Attestto (SecOps & Systems Engineer)'
);
html = html.replace(
  /Experiencia en Attestto y eToro/g,
  'Experiencia en Attestto'
);
html = html.replace(
  /"Alberto Trujillo eToro", /g,
  ''
);
html = html.replace(
  /es Ingeniero Junior de DevOps y Sistemas en Attestto, Inversor Popular en eToro/g,
  'es Ingeniero Junior de Sistemas y Seguridad Cloud'
);
html = html.replace(
  /es un Ingeniero Junior de DevOps y Sistemas en Attestto, Inversor Popular en eToro/g,
  'es un Ingeniero Junior de Sistemas y Seguridad Cloud'
);

// Badges
html = html.replace(
  /DevOps, Cloud\/IAM & Hardening/g,
  'Systems Administration, Cloud/IAM & Security'
);

// Delete eToro JSON-LD
html = html.replace(
  /,\s*\{\s*"@type": "Organization",\s*"name": "eToro",\s*"url": "https:\/\/www\.etoro\.com"\s*\}/g,
  ''
);

// Delete Job 2: eToro completely (from <!-- Job 2: eToro --> until the next </div> that closes it)
html = html.replace(/<!-- Job 2: eToro -->[\s\S]*?(?=<!-- End Job 2 -->|<!-- [a-zA-Z])/g, '');
// Since we don't know if there's an End Job 2 comment, let's just use regex on the div
html = html.replace(/<!-- Job 2: eToro -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, '');

// I will just use regex to remove the <div class="timeline-item" data-category="finances">...</div>
html = html.replace(/<div class="timeline-item" data-category="finances">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>\s*<\/div>/, '');

html = html.replace(/Attestto & eToro/, 'Attestto');
html = html.replace(/Attestto \(Cloud\/IAM & Digital Identity\) & eToro \(Popular Investor\)/, 'Attestto (Cloud/IAM & Digital Identity)');

fs.writeFileSync('index.html', html);


// 3. UPDATE i18n.js
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

// Hero subtitle
i18n = i18n.replace(
  /hero_subtitle: 'Ingeniero Junior de DevOps y Sistemas \| Ciberseguridad · Cloud\/IAM',/g,
  `hero_subtitle: 'Ingeniero Junior de Sistemas y Seguridad Cloud | Cloud/IAM & Sysadmin',`
);
i18n = i18n.replace(
  /hero_subtitle: 'Enginyer Junior de DevOps i Sistemes \| Ciberseguretat · Cloud\/IAM',/g,
  `hero_subtitle: 'Enginyer Junior de Sistemes i Seguretat Cloud | Cloud/IAM & Sysadmin',`
);
i18n = i18n.replace(
  /hero_subtitle: 'Junior DevOps & Systems Engineer \| Cybersecurity · Cloud\/IAM',/g,
  `hero_subtitle: 'Junior Systems & Cloud Security Engineer | Cloud/IAM & Sysadmin',`
);

// Hero description
i18n = i18n.replace(
  /Titulado en ASIR y SMR con fuerte carácter autodidacta\. Especializado en proteger y administrar infraestructura cloud\/identidad \(Google Workspace\/IAM, Cloudflare, Fly\.io\), hardening, identidad digital descentralizada y gestión cuantitativa de riesgos\./g,
  `Titulado en ASIR y SMR con fuerte carácter autodidacta. Especializado en administrar infraestructura de sistemas y cloud/identidad (Google Workspace/IAM, Microsoft Entra ID, Cloudflare, Linux/Windows Server), bastionado de sistemas, seguridad perimetral y automatización.`
);
i18n = i18n.replace(
  /Titulat en ASIX i SMX amb fort caràcter autodidacta\. Especialitzat en protegir i administrar infraestructura cloud\/identitat \(Google Workspace\/IAM, Cloudflare, Fly\.io\), hardening, identitat digital descentralitzada i gestió quantitativa de riscos\./g,
  `Titulat en ASIX i SMX amb fort caràcter autodidacta. Especialitzat en administrar infraestructura de sistemes i cloud/identitat (Google Workspace/IAM, Microsoft Entra ID, Cloudflare, Linux/Windows Server), bastionat de sistemes, seguretat perimetral i automatització.`
);
i18n = i18n.replace(
  /Certified in ASIR & SMR with a strong self-taught drive\. Specialized in protecting & managing cloud\/identity infrastructure \(Google Workspace\/IAM, Cloudflare, Fly\.io\), hardening, decentralized digital identity, and quantitative risk management\./g,
  `Certified in ASIR & SMR with a strong self-taught drive. Specialized in managing systems and cloud/identity infrastructure (Google Workspace/IAM, Microsoft Entra ID, Cloudflare, Linux/Windows Server), system hardening, perimeter network security, and infrastructure automation.`
);

// Attestto
i18n = i18n.replace(
  /exp_attestto_role: 'Ingeniero Junior de DevOps y Sistemas \| Ciberseguridad · Cloud\/IAM',/g,
  `exp_attestto_role: 'Ingeniero Junior de SecOps y Sistemas | Cloud/IAM & Seguridad',`
);
i18n = i18n.replace(
  /exp_attestto_role: 'Enginyer Junior de DevOps i Sistemes \| Ciberseguretat · Cloud\/IAM',/g,
  `exp_attestto_role: 'Enginyer Junior de SecOps i Sistemes | Cloud/IAM & Seguretat',`
);
i18n = i18n.replace(
  /exp_attestto_role: 'Junior DevOps & Systems Engineer \| Cybersecurity · Cloud\/IAM',/g,
  `exp_attestto_role: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',`
);

i18n = i18n.replace(
  /exp_attestto_period: 'jul\. 2026 - actualidad · \d+ meses',/g,
  `exp_attestto_period: 'jul. 2026 - sep. 2026 · 3 meses',`
);
i18n = i18n.replace(
  /exp_attestto_period: 'jul\. 2026 - present · \d+ mos',/g,
  `exp_attestto_period: 'Jul. 2026 - Sep. 2026 · 3 mos',`
);
i18n = i18n.replace(
  /exp_attestto_period: 'jul\. 2026 - actualitat · \d+ mesos',/g,
  `exp_attestto_period: 'jul. 2026 - set. 2026 · 3 mesos',`
);

// Verbs in Attestto (English)
i18n = i18n.replace(
  /<strong>Cloud & IAM Administration:<\/strong> Administration of identity architecture/g,
  `<strong>Cloud & IAM Administration:</strong> Administered identity architecture`
);
i18n = i18n.replace(
  /<strong>Infrastructure Hardening:<\/strong> Deployment and enforcement/g,
  `<strong>Infrastructure Hardening:</strong> Enforced`
);
i18n = i18n.replace(
  /<strong>Cloudflare Perimeter Security:<\/strong> Configuration of/g,
  `<strong>Cloudflare Perimeter Security:</strong> Maintained configuration of`
);
// Spanish verbs
i18n = i18n.replace(
  /<strong>Administración Cloud & IAM:<\/strong> Administración de la arquitectura/g,
  `<strong>Administración Cloud & IAM:</strong> Administré la arquitectura`
);
i18n = i18n.replace(
  /<strong>Hardening de Infraestructura:<\/strong> Despliegue y ejecución/g,
  `<strong>Hardening de Infraestructura:</strong> Ejecuté`
);
i18n = i18n.replace(
  /<strong>Seguridad Perimetral Cloudflare:<\/strong> Configuración de/g,
  `<strong>Seguridad Perimetral Cloudflare:</strong> Mantuve configuración de`
);
// Catalan verbs
i18n = i18n.replace(
  /<strong>Administració Cloud & IAM:<\/strong> Administració de l'arquitectura/g,
  `<strong>Administració Cloud & IAM:</strong> Vaig administrar l'arquitectura`
);
i18n = i18n.replace(
  /<strong>Hardening d'Infraestructura:<\/strong> Desplegament i execució/g,
  `<strong>Hardening d'Infraestructura:</strong> Vaig executar`
);
i18n = i18n.replace(
  /<strong>Seguretat Perimetral Cloudflare:<\/strong> Configuració de/g,
  `<strong>Seguretat Perimetral Cloudflare:</strong> Vaig mantenir configuració de`
);

// Stack rename
i18n = i18n.replace(/stack_cloud_title: 'Cloud, IAM & DevOps',/g, `stack_cloud_title: 'Cloud, Systems & IAM',`);
i18n = i18n.replace(/stack_net_title: 'Redes, Ciberseguridad & Riesgos',/g, `stack_net_title: 'Redes & Ciberseguridad',`);
i18n = i18n.replace(/stack_net_title: 'Xarxes, Ciberseguretat & Riscos',/g, `stack_net_title: 'Xarxes & Ciberseguretat',`);
i18n = i18n.replace(/stack_net_title: 'Networking, Cybersecurity & Risk',/g, `stack_net_title: 'Networking & Cybersecurity',`);

// Stack skills replacement
i18n = i18n.replace(/Análisis cuantitativo de volatilidad y control de drawdown aplicado a IT\./g, `Firewalls, Segmentación de Red y Zero-Trust.`);
i18n = i18n.replace(/Auditoría de smart contracts y trazabilidad blockchain\./g, `Políticas de Identidad (IAM) y System Hardening.`);

i18n = i18n.replace(/Anàlisi quantitatiu de volatilitat i control de drawdown aplicat a IT\./g, `Firewalls, Segmentació de Xarxa i Zero-Trust.`);
i18n = i18n.replace(/Auditoria de smart contracts i traçabilitat blockchain\./g, `Polítiques d'Identitat (IAM) i System Hardening.`);

i18n = i18n.replace(/Quantitative volatility tracking & drawdown control applied to IT\./g, `Firewalls, Network Segmentation, and Zero-Trust Policies.`);
i18n = i18n.replace(/Smart contracts auditing and blockchain traceability\./g, `Identity Hardening and IAM Policies.`);

// Footer desc
i18n = i18n.replace(
  /Ingeniero Junior de DevOps, Sistemas y Ciberseguridad\. Especializado en Cloud\/IAM, Hardening de Infraestructuras e Identidad Digital Descentralizada\./g,
  `Ingeniero Junior de Sistemas y Seguridad Cloud. Especializado en Administración de Sistemas, Cloud/IAM, Hardening de Infraestructura y Seguridad de Red.`
);
i18n = i18n.replace(
  /Enginyer Junior de DevOps, Sistemes i Ciberseguretat\. Especialitzat en Cloud\/IAM, Hardening d'Infraestructures i Identitat Digital Descentralitzada\./g,
  `Enginyer Junior de Sistemes i Seguretat Cloud. Especialitzat en Administració de Sistemes, Cloud/IAM, Hardening d'Infraestructura i Seguretat de Xarxa.`
);
i18n = i18n.replace(
  /Junior DevOps, Systems & Cybersecurity Engineer\. Specialized in Cloud\/IAM, Infrastructure Hardening, and Decentralized Digital Identity\./g,
  `Junior Systems & Cloud Security Engineer. Specialized in Systems Administration, Cloud/IAM, Infrastructure Hardening, and Network Security.`
);

// Footer spec
i18n = i18n.replace(/Análisis Cuantitativo de Riesgos/g, `Microsoft Entra ID & Active Directory`);
i18n = i18n.replace(/Anàlisi Quantitatiu de Riscos/g, `Microsoft Entra ID & Active Directory`);
i18n = i18n.replace(/Quantitative Risk Analysis/g, `Microsoft Entra ID & Active Directory`);

// Add Microsoft Entra ID and Active Directory to technologies (stack_cloud_1)
// We'll just modify stack_cloud_1 string directly
i18n = i18n.replace(
  /Administración de nube e identidades: <strong>Google Workspace \/ IAM<\/strong>\./g,
  `Administración de identidades (IAM): <strong>Microsoft Entra ID, Active Directory y Google Workspace</strong>.`
);
i18n = i18n.replace(
  /Administració de núvol i identitats: <strong>Google Workspace \/ IAM<\/strong>\./g,
  `Administració d'identitats (IAM): <strong>Microsoft Entra ID, Active Directory i Google Workspace</strong>.`
);
i18n = i18n.replace(
  /Cloud & identity administration: <strong>Google Workspace \/ IAM<\/strong>\./g,
  `Identity Administration (IAM): <strong>Microsoft Entra ID, Active Directory, and Google Workspace</strong>.`
);

fs.writeFileSync('src/js/i18n.js', i18n);

console.log("Update completed.");
