/**
 * i18n ES/EN, tema, nav, contacto. Terminal/filtros: ./terminal.js
 */
import '../css/styles.css';
import { initTerminal, initProjectFilters } from './terminal.js';

const EMAIL = ['alberto', 'trujillomingorance.com'].join('@');
const LANG_KEY = 'lang';
const THEME_KEY = 'theme';

const translations = {
  "es": {
    "hero_contact": "Contactar",
    "nav_contact": "Contacto",
    "hero_tag1": "ASIR + SMR (Grado Sup. & Medio)",
    "footer_disability": "Certificado Discapacidad >33%",
    "projects_title": "Proyectos",
    "exp_minsait_company": "Minsait (Indra Group)",
    "exp_minsait_1": "Gestión de Active Directory y políticas de seguridad (GPOs).",
    "stack_cloud_3": "Despliegue serverless de contenedores en Fly.io.",
    "availability_title": "Disponibilidad y Datos Clave",
    "avail_mobility_title": "Movilidad Geográfica",
    "stack_title": "Arsenal Tecnológico",
    "hero_subtitle": "Systems &amp; Cloud Administrator | Cybersecurity &middot; Cloud/IAM",
    "form_email": "Email",
    "footer_legal_title": "Legal & Compliance",
    "exp_minsait_2": "Administración y reseteo de credenciales en entornos SAP.",
    "exp_attestto_1": "Administración de nube e identidad: <strong>Google Workspace/IAM, Cloudflare, GitHub y Fly.io",
    "edu_asir_desc": "Especialización en arquitectura de redes, servicios de sistema y administración de bases de datos.",
    "stat_exp_val": "+3 Años",
    "hero_description": "Titulado en ASIR y SMR con perfil fuertemente autodidacta. Especializado en protección y administración de infraestructuras cloud e identidad (Google Workspace/IAM, Cloudflare, Fly.io), hardening, identidades descentralizadas y gestión cuantitativa de riesgos.",
    "stack_virt_3": "Virtualización completa con Proxmox VE y VirtualBox.",
    "exp_minsait_role": "Técnico de Soporte de Sistemas",
    "stack_cloud_title": "Cloud, IAM & DevOps",
    "footer_sitemap": "Sitemap XML",
    "edu_title": "Formación",
    "footer_specs_title": "Especialidades & Certificación",
    "footer_nav_title": "Navegación",
    "footer_spec_5": "Análisis Cuantitativo de Riesgos",
    "exp_iis_period": "May 2023 - Nov 2023",
    "edu_smr_desc": "Fundamentos de hardware, montaje de equipos y configuración de redes locales.",
    "avail_join_text": "Disponibilidad Inmediata para nuevos retos.",
    "footer_brand_desc": "Ingeniero de SecOps, Sistemas y Ciberseguridad. Especializado en Cloud/IAM, Hardening de Infraestructuras e Identidad Digital Descentralizada.",
    "hero_tag2": "Disponibilidad inmediata",
    "nav_experience": "Experiencia",
    "form_name": "Nombre",
    "stack_cloud_1": "Administración de nube e identidades: Google Workspace / IAM.",
    "proj_filter_automation": "Automatización",
    "stack_os_3": "Servicios de Directorio: Active Directory, Samba AD, OpenLDAP.",
    "footer_spec_4": "Linux Security Hardening",
    "hero_pill_loc": "Barcelona / Remoto",
    "hero_download_cv": "<i class=\"fas fa-lock\"></i> Solicitar CV",
    "exp_attestto_role": "Junior SecOps Engineer | Ciberseguridad · Cloud/IAM",
    "nav_stack": "Stack Técnico",
    "edu_smr_title": "SMR (Grado Medio)",
    "stack_os_title": "Sistemas Operativos",
    "stat_disability": "Discapacidad Oficial Certificada",
    "proj_filter_devops": "Cloud & DevOps",
    "nav_projects": "Proyectos",
    "stack_auto_3": "Gestión de configuración con Ansible.",
    "hero_pill_edu": "ASIR (Sup.) + SMR (Med.)",
    "exp_minsait_3": "Garantizar la continuidad operativa en entornos hospitalarios críticos.",
    "stack_net_4": "Auditoría de smart contracts y trazabilidad blockchain.",
    "terminal_title": "Consola Interactive SysAdmin",
    "exp_iis_4": "Despliegue de imágenes de SO utilizando Clonezilla.",
    "stack_cloud_4": "Estándares de Identidad Digital: W3C DID/VC, GLEIF / vLEI, eIDAS.",
    "exp_attestto_4": "Desarrollo de infraestructura de identidad digital y confianza basada en estándares abiertos: credenciales verificables (<strong>W3C DID/VC",
    "edu_entra_title": "Microsoft Entra ID (ID: F89C9FFB072C4C9A)",
    "exp_attestto_period": "jul. 2026 - actualidad · 2 meses",
    "stack_os_4": "Hardening de sistemas y gestión de parches de seguridad.",
    "stack_net_2": "Enrutamiento dinámico (OSPF, RIP) y estático.",
    "copy_email": "Copiar Email",
    "avail_disability_title": "Discapacidad >33%",
    "avail_join_title": "Incorporación Inmediata",
    "form_send": "Enviar Mensaje",
    "footer_ai_indexing": "AI Indexing (llms.txt)",
    "avail_schedule_title": "Flexibilidad Horaria",
    "exp_attestto_2": "Robustecimiento de seguridad (<strong>hardening",
    "stack_virt_2": "Creación de Dockerfiles y orquestación básica (Docker Compose).",
    "stack_os_2": "Gestión de dominios Windows Server y Group Policy Objects (GPO).",
    "stack_net_title": "Redes, Ciberseguridad & Riesgos",
    "exp_iis_5": "Instalación automatizada de software.",
    "exp_title": "Experiencia",
    "exp_attestto_3": "Monitorización continua de seguridad y auditoría en repositorios de código de la organización.",
    "exp_minsait_5": "Soporte de Nivel 2 a personal sanitario e IT interno.",
    "proj_filter_all": "Todos los Proyectos",
    "footer_spec_3": "W3C DID/VC & vLEI / GLEIF",
    "contact_intro": "¿Tienes un proyecto en mente o una oportunidad laboral? No dudes en contactarme.",
    "stat_uptime": "Monitorización Edge",
    "avail_disability_text": "Certificado oficial >33%, medidas de fomento del empleo.",
    "stat_cloud": "Serverless & Edge Cloud",
    "avail_mobility_text": "Presencial, híbrido o teletrabajo.",
    "footer_terms": "Términos y Condiciones",
    "edu_entra_level": "Identities and Access Official Credential",
    "exp_attestto_context": "Gestión de Infraestructura Cloud/IAM, Hardening & Estándares de Identidad Digital (W3C DID/VC, vLEI, eIDAS)",
    "stack_auto_2": "Desarrollo de herramientas de administración con Python.",
    "exp_attestto_5": "Mantenimiento de infraestructura segura, confiable y bien documentada, además de soporte a la comunidad hispanohablante y localización (<strong>EN↔ES",
    "exp_iis_company": "Institut Indústria Sostenible",
    "stack_net_3": "Análisis cuantitativo de volatilidad y control de drawdown aplicado a IT.",
    "stack_cloud_2": "Seguridad perimetral y proxies/DNS con Cloudflare.",
    "stack_auto_1": "Scripting potente: Bash (Linux) y PowerShell (Windows).",
    "footer_copyright": "Todos los derechos reservados.",
    "form_message": "Mensaje",
    "stack_net_1": "Configuración de VLANs, Trunking y Spanning Tree.",
    "stack_virt_1": "Despliegue y gestión de contenedores con Docker.",
    "stack_virt_title": "Virtualización & Contenedores",
    "stat_exp": "Experiencia IT & SecOps",
    "exp_minsait_period": "Nov 2025 - May 2026",
    "exp_attestto_company": "Attestto · Jornada parcial",
    "hero_pill_disability": "Cuota >33% LGD",
    "stack_auto_title": "Automatización & Código",
    "exp_minsait_context": "Soporte de Infraestructuras Críticas & Macroproyecto CTTI – Sector Sanitario (Metropolitana Sud)",
    "exp_minsait_4": "Resolución de incidencias mediante BMC Remedy.",
    "footer_status": "All Systems Operational · Cloudflare Secured",
    "avail_join_status": "Incorporación Inmediata",
    "stack_auto_4": "Control de versiones fluido con Git / GitHub.",
    "stack_os_1": "Administración avanzada de servidores Linux (Debian/CentOS).",
    "avail_schedule_text": "Jornada partida, turnos rotativos, guardias.",
    "contact_lets_talk": "Hablemos",
    "edu_smr_level": "Sistemas Microinformáticos y Redes",
    "footer_privacy": "Política de Privacidad",
    "nav_education": "Formación",
    "exp_iis_2": "Diagnóstico de hardware y reparación.",
    "edu_asir_level": "Administración de Sistemas Informáticos en Red",
    "exp_attestto_location": "Delaware, Estados Unidos · En remoto",
    "hero_tag3": "Cuota >33% LGD",
    "footer_spec_1": "ASIR & SMR · ITB",
    "edu_asir_title": "ASIR (Grado Superior)",
    "exp_iis_role": "Técnico de Mantenimiento Informático (Prácticas)",
    "exp_iis_1": "Soporte técnico en aulas y resolución de incidencias.",
    "stack_virt_4": "Aislamiento de entornos de desarrollo y producción.",
    "exp_iis_3": "Gestión de cableado y red física.",
    "footer_spec_2": "Google Workspace & Cloud IAM",
    "exp_iis_6": "Mantenimiento preventivo y correctivo.",
    "proj_filter_security": "Ciberseguridad & Web3",
    "theme_aria": "Cambiar tema",
    "menu_aria": "Abrir menú",
    "hero_role": "Systems & Cloud Administrator | Cybersecurity · Cloud/IAM",
    "btn_cv": "Descargar CV",
    "btn_contact": "Contactar"
  },
  "en": {
    "hero_contact": "Contact Me",
    "nav_contact": "Contact",
    "hero_tag1": "ASIR + SMR (Grado Sup. & Medio)",
    "footer_disability": "Certificado Discapacidad >33%",
    "projects_title": "Projects",
    "exp_minsait_company": "Minsait (Indra Group)",
    "exp_minsait_1": "Gestión de Active Directory y políticas de seguridad (GPOs).",
    "stack_cloud_3": "Despliegue serverless de contenedores en Fly.io.",
    "availability_title": "Disponibilidad y Datos Clave",
    "avail_mobility_title": "Geographical Mobility",
    "stack_title": "Tech Stack",
    "hero_subtitle": "Systems &amp; Cloud Administrator | Cybersecurity &middot; Cloud/IAM",
    "form_email": "Email",
    "footer_legal_title": "Legal & Compliance",
    "exp_minsait_2": "Administración y reseteo de credenciales en entornos SAP.",
    "exp_attestto_1": "Administración de nube e identidad: <strong>Google Workspace/IAM, Cloudflare, GitHub y Fly.io",
    "edu_asir_desc": "Especialización en arquitectura de redes, servicios de sistema y administración de bases de datos.",
    "stat_exp_val": "+3 Años",
    "hero_description": "ASIR and SMR graduate with a strong self-taught profile. Specialized in cloud infrastructure protection and IAM (Google Workspace, Cloudflare, Fly.io), hardening, decentralized identities, and quantitative risk management.",
    "stack_virt_3": "Virtualización completa con Proxmox VE y VirtualBox.",
    "exp_minsait_role": "Systems Support Technician",
    "stack_cloud_title": "Cloud, IAM & DevOps",
    "footer_sitemap": "Sitemap XML",
    "edu_title": "Education",
    "footer_specs_title": "Especialidades & Certificación",
    "footer_nav_title": "Navegación",
    "footer_spec_5": "Análisis Cuantitativo de Riesgos",
    "exp_iis_period": "May 2023 - Nov 2023",
    "edu_smr_desc": "Fundamentos de hardware, montaje de equipos y configuración de redes locales.",
    "avail_join_text": "Available for new challenges immediately.",
    "footer_brand_desc": "SecOps, Systems and Cybersecurity Engineer. Cloud/IAM, Hardening and Digital Identity.",
    "hero_tag2": "Immediate availability",
    "nav_experience": "Experience",
    "form_name": "Name",
    "stack_cloud_1": "Administración de nube e identidades: Google Workspace / IAM.",
    "proj_filter_automation": "Automatización",
    "stack_os_3": "Servicios de Directorio: Active Directory, Samba AD, OpenLDAP.",
    "footer_spec_4": "Linux Security Hardening",
    "hero_pill_loc": "Barcelona / Remoto",
    "hero_download_cv": "<i class=\"fas fa-lock\"></i> Request CV",
    "exp_attestto_role": "Junior SecOps Engineer | Cybersecurity · Cloud/IAM",
    "nav_stack": "Tech Stack",
    "edu_smr_title": "SMR (Grado Medio)",
    "stack_os_title": "Sistemas Operativos",
    "stat_disability": "Discapacidad Oficial Certificada",
    "proj_filter_devops": "Cloud & DevOps",
    "nav_projects": "Projects",
    "stack_auto_3": "Gestión de configuración con Ansible.",
    "hero_pill_edu": "ASIR (Sup.) + SMR (Med.)",
    "exp_minsait_3": "Garantizar la continuidad operativa en entornos hospitalarios críticos.",
    "stack_net_4": "Auditoría de smart contracts y trazabilidad blockchain.",
    "terminal_title": "Consola Interactive SysAdmin",
    "exp_iis_4": "Despliegue de imágenes de SO utilizando Clonezilla.",
    "stack_cloud_4": "Estándares de Identidad Digital: W3C DID/VC, GLEIF / vLEI, eIDAS.",
    "exp_attestto_4": "Desarrollo de infraestructura de identidad digital y confianza basada en estándares abiertos: credenciales verificables (<strong>W3C DID/VC",
    "edu_entra_title": "Microsoft Entra ID (ID: F89C9FFB072C4C9A)",
    "exp_attestto_period": "jul. 2026 - actualidad · 2 meses",
    "stack_os_4": "Hardening de sistemas y gestión de parches de seguridad.",
    "stack_net_2": "Enrutamiento dinámico (OSPF, RIP) y estático.",
    "copy_email": "Copy Email",
    "avail_disability_title": "Official Disability >33%",
    "avail_join_title": "Immediate Start",
    "form_send": "Send Message",
    "footer_ai_indexing": "AI Indexing (llms.txt)",
    "avail_schedule_title": "Flexible Schedule",
    "exp_attestto_2": "Robustecimiento de seguridad (<strong>hardening",
    "stack_virt_2": "Creación de Dockerfiles y orquestación básica (Docker Compose).",
    "stack_os_2": "Gestión de dominios Windows Server y Group Policy Objects (GPO).",
    "stack_net_title": "Redes, Ciberseguridad & Riesgos",
    "exp_iis_5": "Instalación automatizada de software.",
    "exp_title": "Experience",
    "exp_attestto_3": "Monitorización continua de seguridad y auditoría en repositorios de código de la organización.",
    "exp_minsait_5": "Soporte de Nivel 2 a personal sanitario e IT interno.",
    "proj_filter_all": "Todos los Proyectos",
    "footer_spec_3": "W3C DID/VC & vLEI / GLEIF",
    "contact_intro": "Have a project or job opportunity? Feel free to reach out.",
    "stat_uptime": "Monitorización Edge",
    "avail_disability_text": "Eligible for employment bonuses and quotas.",
    "stat_cloud": "Serverless & Edge Cloud",
    "avail_mobility_text": "On-site, hybrid, or remote.",
    "footer_terms": "Términos y Condiciones",
    "edu_entra_level": "Identities and Access Official Credential",
    "exp_attestto_context": "Cloud/IAM Infrastructure Management, Hardening & Digital Identity Standards",
    "stack_auto_2": "Desarrollo de herramientas de administración con Python.",
    "exp_attestto_5": "Mantenimiento de infraestructura segura, confiable y bien documentada, además de soporte a la comunidad hispanohablante y localización (<strong>EN↔ES",
    "exp_iis_company": "Institut Indústria Sostenible",
    "stack_net_3": "Análisis cuantitativo de volatilidad y control de drawdown aplicado a IT.",
    "stack_cloud_2": "Seguridad perimetral y proxies/DNS con Cloudflare.",
    "stack_auto_1": "Scripting potente: Bash (Linux) y PowerShell (Windows).",
    "footer_copyright": "Todos los derechos reservados.",
    "form_message": "Message",
    "stack_net_1": "Configuración de VLANs, Trunking y Spanning Tree.",
    "stack_virt_1": "Despliegue y gestión de contenedores con Docker.",
    "stack_virt_title": "Virtualización & Contenedores",
    "stat_exp": "Experiencia IT & SecOps",
    "exp_minsait_period": "Nov 2025 - May 2026",
    "exp_attestto_company": "Attestto · Jornada parcial",
    "hero_pill_disability": "Cuota >33% LGD",
    "stack_auto_title": "Automatización & Código",
    "exp_minsait_context": "Critical Infrastructure Support & CTTI Macroproject - Healthcare Sector",
    "exp_minsait_4": "Resolución de incidencias mediante BMC Remedy.",
    "footer_status": "All Systems Operational · Cloudflare Secured",
    "avail_join_status": "Incorporación Inmediata",
    "stack_auto_4": "Control de versiones fluido con Git / GitHub.",
    "stack_os_1": "Administración avanzada de servidores Linux (Debian/CentOS).",
    "avail_schedule_text": "Split shifts, rotating, or on-call.",
    "contact_lets_talk": "Let's Talk",
    "edu_smr_level": "Sistemas Microinformáticos y Redes",
    "footer_privacy": "Política de Privacidad",
    "nav_education": "Education",
    "exp_iis_2": "Diagnóstico de hardware y reparación.",
    "edu_asir_level": "Administración de Sistemas Informáticos en Red",
    "exp_attestto_location": "Delaware, Estados Unidos · En remoto",
    "hero_tag3": "Cuota >33% LGD",
    "footer_spec_1": "ASIR & SMR · ITB",
    "edu_asir_title": "ASIR (Grado Superior)",
    "exp_iis_role": "Técnico de Mantenimiento Informático (Prácticas)",
    "exp_iis_1": "Soporte técnico en aulas y resolución de incidencias.",
    "stack_virt_4": "Aislamiento de entornos de desarrollo y producción.",
    "exp_iis_3": "Gestión de cableado y red física.",
    "footer_spec_2": "Google Workspace & Cloud IAM",
    "exp_iis_6": "Mantenimiento preventivo y correctivo.",
    "proj_filter_security": "Ciberseguridad & Web3",
    "theme_aria": "Cambiar tema",
    "menu_aria": "Abrir menú",
    "hero_role": "Systems & Cloud Administrator | Cybersecurity · Cloud/IAM",
    "btn_cv": "Descargar CV",
    "btn_contact": "Contactar"
  },
  "ca": {
    "hero_contact": "Contactar",
    "nav_contact": "Contacte",
    "hero_tag1": "ASIR + SMR (Grado Sup. & Medio)",
    "footer_disability": "Certificado Discapacidad >33%",
    "projects_title": "Projectes",
    "exp_minsait_company": "Minsait (Indra Group)",
    "exp_minsait_1": "Gestión de Active Directory y políticas de seguridad (GPOs).",
    "stack_cloud_3": "Despliegue serverless de contenedores en Fly.io.",
    "availability_title": "Disponibilidad y Datos Clave",
    "avail_mobility_title": "Mobilitat Geogràfica",
    "stack_title": "Arsenal Tecnològic",
    "hero_subtitle": "Systems &amp; Cloud Administrator | Cybersecurity &middot; Cloud/IAM",
    "form_email": "Email",
    "footer_legal_title": "Legal & Compliance",
    "exp_minsait_2": "Administración y reseteo de credenciales en entornos SAP.",
    "exp_attestto_1": "Administración de nube e identidad: <strong>Google Workspace/IAM, Cloudflare, GitHub y Fly.io",
    "edu_asir_desc": "Especialización en arquitectura de redes, servicios de sistema y administración de bases de datos.",
    "stat_exp_val": "+3 Años",
    "hero_description": "Titulat en ASIR i SMR amb perfil fortament autodidacta. Especialitzat en protecció d'infraestructures cloud (Google Workspace, Cloudflare), hardening i gestió de riscos.",
    "stack_virt_3": "Virtualización completa con Proxmox VE y VirtualBox.",
    "exp_minsait_role": "Técnico de Soporte de Sistemas",
    "stack_cloud_title": "Cloud, IAM & DevOps",
    "footer_sitemap": "Sitemap XML",
    "edu_title": "Formació",
    "footer_specs_title": "Especialidades & Certificación",
    "footer_nav_title": "Navegación",
    "footer_spec_5": "Análisis Cuantitativo de Riesgos",
    "exp_iis_period": "May 2023 - Nov 2023",
    "edu_smr_desc": "Fundamentos de hardware, montaje de equipos y configuración de redes locales.",
    "avail_join_text": "Disponibilidad Inmediata para nuevos retos.",
    "footer_brand_desc": "Ingeniero de SecOps, Sistemas y Ciberseguridad. Especializado en Cloud/IAM, Hardening de Infraestructuras e Identidad Digital Descentralizada.",
    "hero_tag2": "Disponibilitat immediata",
    "nav_experience": "Experiència",
    "form_name": "Nom",
    "stack_cloud_1": "Administración de nube e identidades: Google Workspace / IAM.",
    "proj_filter_automation": "Automatización",
    "stack_os_3": "Servicios de Directorio: Active Directory, Samba AD, OpenLDAP.",
    "footer_spec_4": "Linux Security Hardening",
    "hero_pill_loc": "Barcelona / Remoto",
    "hero_download_cv": "<i class=\"fas fa-lock\"></i> Sol·licitar CV",
    "exp_attestto_role": "Junior SecOps Engineer | Ciberseguridad · Cloud/IAM",
    "nav_stack": "Stack Tècnic",
    "edu_smr_title": "SMR (Grado Medio)",
    "stack_os_title": "Sistemas Operativos",
    "stat_disability": "Discapacidad Oficial Certificada",
    "proj_filter_devops": "Cloud & DevOps",
    "nav_projects": "Projectes",
    "stack_auto_3": "Gestión de configuración con Ansible.",
    "hero_pill_edu": "ASIR (Sup.) + SMR (Med.)",
    "exp_minsait_3": "Garantizar la continuidad operativa en entornos hospitalarios críticos.",
    "stack_net_4": "Auditoría de smart contracts y trazabilidad blockchain.",
    "terminal_title": "Consola Interactive SysAdmin",
    "exp_iis_4": "Despliegue de imágenes de SO utilizando Clonezilla.",
    "stack_cloud_4": "Estándares de Identidad Digital: W3C DID/VC, GLEIF / vLEI, eIDAS.",
    "exp_attestto_4": "Desarrollo de infraestructura de identidad digital y confianza basada en estándares abiertos: credenciales verificables (<strong>W3C DID/VC",
    "edu_entra_title": "Microsoft Entra ID (ID: F89C9FFB072C4C9A)",
    "exp_attestto_period": "jul. 2026 - actualidad · 2 meses",
    "stack_os_4": "Hardening de sistemas y gestión de parches de seguridad.",
    "stack_net_2": "Enrutamiento dinámico (OSPF, RIP) y estático.",
    "copy_email": "Copiar Email",
    "avail_disability_title": "Discapacitat >33%",
    "avail_join_title": "Incorporació Immediata",
    "form_send": "Enviar Missatge",
    "footer_ai_indexing": "AI Indexing (llms.txt)",
    "avail_schedule_title": "Flexibilitat Horària",
    "exp_attestto_2": "Robustecimiento de seguridad (<strong>hardening",
    "stack_virt_2": "Creación de Dockerfiles y orquestación básica (Docker Compose).",
    "stack_os_2": "Gestión de dominios Windows Server y Group Policy Objects (GPO).",
    "stack_net_title": "Redes, Ciberseguridad & Riesgos",
    "exp_iis_5": "Instalación automatizada de software.",
    "exp_title": "Experiència",
    "exp_attestto_3": "Monitorización continua de seguridad y auditoría en repositorios de código de la organización.",
    "exp_minsait_5": "Soporte de Nivel 2 a personal sanitario e IT interno.",
    "proj_filter_all": "Todos los Proyectos",
    "footer_spec_3": "W3C DID/VC & vLEI / GLEIF",
    "contact_intro": "Tens un projecte o oportunitat laboral? No dubtis a contactar-me.",
    "stat_uptime": "Monitorización Edge",
    "avail_disability_text": "Certificado oficial >33%, medidas de fomento del empleo.",
    "stat_cloud": "Serverless & Edge Cloud",
    "avail_mobility_text": "Presencial, híbrido o teletrabajo.",
    "footer_terms": "Términos y Condiciones",
    "edu_entra_level": "Identities and Access Official Credential",
    "exp_attestto_context": "Gestión de Infraestructura Cloud/IAM, Hardening & Estándares de Identidad Digital (W3C DID/VC, vLEI, eIDAS)",
    "stack_auto_2": "Desarrollo de herramientas de administración con Python.",
    "exp_attestto_5": "Mantenimiento de infraestructura segura, confiable y bien documentada, además de soporte a la comunidad hispanohablante y localización (<strong>EN↔ES",
    "exp_iis_company": "Institut Indústria Sostenible",
    "stack_net_3": "Análisis cuantitativo de volatilidad y control de drawdown aplicado a IT.",
    "stack_cloud_2": "Seguridad perimetral y proxies/DNS con Cloudflare.",
    "stack_auto_1": "Scripting potente: Bash (Linux) y PowerShell (Windows).",
    "footer_copyright": "Todos los derechos reservados.",
    "form_message": "Missatge",
    "stack_net_1": "Configuración de VLANs, Trunking y Spanning Tree.",
    "stack_virt_1": "Despliegue y gestión de contenedores con Docker.",
    "stack_virt_title": "Virtualización & Contenedores",
    "stat_exp": "Experiencia IT & SecOps",
    "exp_minsait_period": "Nov 2025 - May 2026",
    "exp_attestto_company": "Attestto · Jornada parcial",
    "hero_pill_disability": "Cuota >33% LGD",
    "stack_auto_title": "Automatización & Código",
    "exp_minsait_context": "Soporte de Infraestructuras Críticas & Macroproyecto CTTI – Sector Sanitario (Metropolitana Sud)",
    "exp_minsait_4": "Resolución de incidencias mediante BMC Remedy.",
    "footer_status": "All Systems Operational · Cloudflare Secured",
    "avail_join_status": "Incorporación Inmediata",
    "stack_auto_4": "Control de versiones fluido con Git / GitHub.",
    "stack_os_1": "Administración avanzada de servidores Linux (Debian/CentOS).",
    "avail_schedule_text": "Jornada partida, turnos rotativos, guardias.",
    "contact_lets_talk": "Parlem",
    "edu_smr_level": "Sistemas Microinformáticos y Redes",
    "footer_privacy": "Política de Privacidad",
    "nav_education": "Formació",
    "exp_iis_2": "Diagnóstico de hardware y reparación.",
    "edu_asir_level": "Administración de Sistemas Informáticos en Red",
    "exp_attestto_location": "Delaware, Estados Unidos · En remoto",
    "hero_tag3": "Cuota >33% LGD",
    "footer_spec_1": "ASIR & SMR · ITB",
    "edu_asir_title": "ASIR (Grado Superior)",
    "exp_iis_role": "Técnico de Mantenimiento Informático (Prácticas)",
    "exp_iis_1": "Soporte técnico en aulas y resolución de incidencias.",
    "stack_virt_4": "Aislamiento de entornos de desarrollo y producción.",
    "exp_iis_3": "Gestión de cableado y red física.",
    "footer_spec_2": "Google Workspace & Cloud IAM",
    "exp_iis_6": "Mantenimiento preventivo y correctivo.",
    "proj_filter_security": "Ciberseguridad & Web3",
    "theme_aria": "Cambiar tema",
    "menu_aria": "Abrir menú",
    "hero_role": "Systems & Cloud Administrator | Cybersecurity · Cloud/IAM",
    "btn_cv": "Descargar CV",
    "btn_contact": "Contactar"
  }
};

  const LEGAL = {
  es: {
    privacy: `<h3>Política de privacidad</h3><p class="muted">Responsable: Alberto Trujillo Mingorance (${EMAIL}). Los datos del formulario se usan solo para responder consultas profesionales.</p>`,
    terms: `<h3>Términos</h3><p class="muted">Portfolio profesional. Contenido protegido. Queda prohibida la reproducción no autorizada.</p>`,
    compliance: `<h3>Certificado de discapacidad &gt;33%</h3><p class="muted">Certificado oficial. Incentivos a la contratación y cuota de reserva (Ley 43/2006 / LGD).</p>`,
  },
  en: {
    privacy: `<h3>Privacy policy</h3><p class="muted">Controller: Alberto Trujillo Mingorance (${EMAIL}). Contact-form data is used only to reply to professional enquiries.</p>`,
    terms: `<h3>Terms</h3><p class="muted">Professional portfolio. Content is protected. Unauthorized reproduction is prohibited.</p>`,
    compliance: `<h3>Disability certificate &gt;33%</h3><p class="muted">Official certificate. Hiring incentives and statutory quota (Ley 43/2006 / LGD).</p>`,
  },
  ca: {
    privacy: `<h3>Política de privadesa</h3><p class="muted">Responsable: Alberto Trujillo Mingorance (${EMAIL}). Les dades del formulari només s’usen per respondre consultes professionals.</p>`,
    terms: `<h3>Termes</h3><p class="muted">Portfoli professional. Contingut protegit. Queda prohibida la reproducció no autoritzada.</p>`,
    compliance: `<h3>Certificat de discapacitat &gt;33%</h3><p class="muted">Certificat oficial. Incentius a la contractació i quota de reserva (Llei 43/2006 / LGD).</p>`,
  },
};

function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

const LANGS = ['es', 'en', 'ca'];

function currentLang() {
  const value = localStorage.getItem(LANG_KEY);
  return LANGS.includes(value) ? value : 'es';
}

function t(key) {
  const lang = currentLang();
  return translations[lang][key] ?? translations.es[key] ?? key;
}

function applyI18n(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('[data-lang-flag]').forEach((el) => {
    el.classList.toggle('hidden', el.getAttribute('data-lang-flag') !== lang);
  });
  const code = document.getElementById('lang-code');
  if (code) code.textContent = lang.toUpperCase();
  localStorage.setItem(LANG_KEY, lang);
}

function initI18n() {
  applyI18n(currentLang());
  const trigger = document.getElementById('lang-trigger');
  const menu = document.getElementById('lang-menu');
  const setOpen = (open) => {
    menu?.classList.toggle('is-open', open);
    trigger?.setAttribute('aria-expanded', String(open));
  };
  trigger?.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!menu?.classList.contains('is-open'));
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      applyI18n(btn.getAttribute('data-lang'));
      setOpen(false);
    });
  });
  document.addEventListener('click', () => setOpen(false));
}

function initJobMore() {
  document.querySelectorAll('[data-more]').forEach((btn) => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const extra = btn.closest('article')?.querySelector('.job-more');
      if (!extra) return;
      const open = extra.classList.contains('hidden');
      extra.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      const label = btn.querySelector('[data-i18n-more]');
      if (label) {
        label.setAttribute('data-i18n', open ? 'see_less' : 'see_more');
        label.textContent = t(open ? 'see_less' : 'see_more');
      }
    });
  });
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') document.documentElement.dataset.theme = 'light';
  
  const btns = document.querySelectorAll('.theme-toggle-btn');
  btns.forEach(btn => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      if (next === 'light') document.documentElement.dataset.theme = 'light';
      else document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, next);
    });
  });
}

function showToast(message) {
  const root = document.getElementById('toast-container');
  if (!root) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  root.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2800);
}

function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('nav-backdrop');
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    drawer?.classList.toggle('is-open', open);
    backdrop?.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
  };

  toggle?.addEventListener('click', () => setOpen(!drawer?.classList.contains('is-open')));
  backdrop?.addEventListener('click', () => setOpen(false));
  document.querySelectorAll('[data-nav-close]').forEach((btn) => {
    btn.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('[data-nav-link]')];
  const onScroll = () => {
    const y = window.scrollY;
    let current = sections[0]?.id || '';
    sections.forEach((section) => {
      if (y >= section.offsetTop - 140) current = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) setOpen(false);
  });
  onScroll();
}

function initModals() {
  const overlay = document.getElementById('legal-modal');
  const content = document.getElementById('modal-content');
  if (!overlay || !content) return;
  const close = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  };
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-modal]');
    if (trigger) {
      event.preventDefault();
      const key = trigger.getAttribute('data-modal');
      const pack = LEGAL[currentLang()] || LEGAL.es;
      content.innerHTML = pack[key] || '';
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      return;
    }
    if (event.target === overlay || event.target.closest('[data-modal-close]')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function initContact() {
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn && copyBtn.dataset.bound !== '1') {
    copyBtn.dataset.bound = '1';
    let copyTimer = 0;
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        copyBtn.textContent = t('copied');
        window.clearTimeout(copyTimer);
        copyTimer = window.setTimeout(() => {
          copyBtn.textContent = t('copy_email');
        }, 2000);
        showToast(t('copied'));
      } catch {
        copyBtn.textContent = EMAIL;
      }
    });
  }

  const form = document.getElementById('contact-form');
  if (!form) return;
  const feedback = document.getElementById('form-feedback');
  const submit = form.querySelector('button[type="submit"]');
  const message = form.querySelector('#message');
  const counter = document.getElementById('msg-count');
  const updateCount = () => {
    if (counter && message) counter.textContent = `${message.value.length} / 4000`;
  };
  message?.addEventListener('input', updateCount);
  updateCount();
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const original = submit ? submit.textContent : '';
    if (submit) {
      submit.disabled = true;
      submit.textContent = '...';
    }
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const response = await fetch('https://ai.trujillomingorance.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.error || t('form_err'));
      form.reset();
      if (feedback) {
        feedback.textContent = t('form_ok');
        feedback.classList.remove('hidden');
        feedback.style.color = 'var(--color-ok)';
      }
      showToast(t('form_ok'));
    } catch (error) {
      const message = error instanceof Error ? error.message : t('form_err');
      if (feedback) {
        feedback.textContent = message;
        feedback.classList.remove('hidden');
      }
      showToast(message);
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = original;
      }
    }
  });
}

ready(() => {
  if (window.__portfolioAppReady) return;
  window.__portfolioAppReady = true;

  const btnRequestCv = document.getElementById('btn-request-cv');
  const cvModal = document.getElementById('cv-challenge-modal');
  const cvClose = document.getElementById('cv-challenge-close');
  const cvVerify = document.getElementById('cv-challenge-verify');
  const cvInput = document.getElementById('cv-challenge-input');
  const cvError = document.getElementById('cv-challenge-error');

  if (btnRequestCv && cvModal) {
      btnRequestCv.addEventListener('click', (e) => {
          e.preventDefault();
          cvModal.style.display = 'flex';
          cvInput.value = '';
          cvError.style.display = 'none';
          setTimeout(() => cvInput.focus(), 100);
      });

      if (cvClose) cvClose.addEventListener('click', () => { cvModal.style.display = 'none'; });

      cvModal.addEventListener('click', (e) => {
          if (e.target === cvModal) cvModal.style.display = 'none';
      });

      const verifyChallenge = () => {
          const val = cvInput.value.trim();
          if (val === '22') {
              cvError.style.display = 'none';
              cvVerify.innerHTML = '<i class="fas fa-unlock"></i> Access Granted';
              cvVerify.classList.replace('btn-green', 'btn-blue');
              setTimeout(() => {
                  window.open(atob("aHR0cHM6Ly9kcml2ZS5" + "nb29nbGUuY29tL2ZpbGUvZC8" + "xWmJoMUJONXdmTnJhVWF" + "1RTEzcy01c2JRX3JaNnoy" + "OXMvdmlldz91c3A9c2hhcmluZw=="), "_blank");
                  cvModal.style.display = 'none';
                  cvVerify.innerHTML = '<i class="fas fa-terminal"></i> Verify';
                  cvVerify.classList.replace('btn-blue', 'btn-green');
              }, 800);
          } else {
              cvError.style.display = 'block';
              cvInput.value = '';
              cvInput.focus();
          }
      };

      if (cvVerify) cvVerify.addEventListener('click', verifyChallenge);
      if (cvInput) cvInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') verifyChallenge();
      });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  const root = document.getElementById('app');
    try { initI18n(); } catch (error) { console.error('[i18n]', error); }
  try { initJobMore(); } catch (error) { console.error('[more]', error); }
  try { initTheme(); } catch (error) { console.error('[theme]', error); }
  try { initNavigation(); } catch (error) { console.error('[nav]', error); }
  try { initTerminal(); } catch (error) { console.error('[terminal]', error); }
  try { initProjectFilters(); } catch (error) { console.error('[filters]', error); }
  try { initContact(); } catch (error) { console.error('[contact]', error); }
  try { initModals(); } catch (error) { console.error('[modals]', error); }
});



