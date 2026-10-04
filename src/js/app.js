/**
 * i18n ES/EN, tema, nav, contacto. Terminal/filtros: ./terminal.js
 */
import '../css/styles.css';
import { initProjectFilters } from './terminal.js';
import { applyContent, loadPublishedContent, publishedContent } from './content.js';
import { markup } from './markup.js';
import { executeTurnstile, mountTurnstile, resetTurnstile } from './turnstile-widget.js';
import { initCvDownload } from './cv.js';

const EMAIL = ['alberto', 'trujillomingorance.com'].join('@');
const LANG_KEY = 'lang';
const THEME_KEY = 'theme';

const translations = {
  "es": {
    "hero_pill_org": "ATM Software Labs",
    "exp_atm_role": "Administrador de sistemas y ciberseguridad",
    "exp_atm_company": "ATM Software Labs",
    "exp_atm_location": "Barcelona, Cataluña, España · En remoto",
    "exp_atm_period": "may. 2026 – actualidad · 5 meses",
    "exp_atm_context": "Laboratorio técnico independiente: investigación aplicada, arquitecturas seguras y pruebas en entornos reales de sistemas y redes.",
    "exp_atm_1": "Despliegue de plataformas web sobre infraestructura edge y Cloudflare.",
    "exp_atm_2": "Redes seguras con filtrado DNS y modelo Zero-Trust.",
    "exp_atm_3": "Monitorización continua de sistemas y alertas automatizadas.",
    "exp_atm_4": "Runbooks y guías técnicas de despliegue reproducibles.",
    "exp_atm_5": "Seguridad de sistemas, copias de seguridad y automatización con PowerShell y Bash.",
    "exp_minsait_location": "Barcelona, Cataluña, España · Híbrido",
    "exp_iis_location": "Carrer de Cristóbal de Moura, 223, Barcelona · Presencial",
    "exp_iis_context": "Mantenimiento y soporte presencial en el entorno educativo.",
    "edu_asir_1": "Linux y Windows Server: servidores, clientes y servicios.",
    "edu_asir_2": "DNS, DHCP, servidores web y transferencia de archivos.",
    "edu_asir_3": "Seguridad perimetral, copias de seguridad y monitorización.",
    "edu_asir_4": "Virtualización y despliegue de infraestructura.",
    "edu_smr_1": "Montaje, diagnóstico y reparación de hardware y periféricos.",
    "edu_smr_2": "Cableado estructurado, routers, switches y direccionamiento IP.",
    "edu_smr_3": "Usuarios, permisos y recursos compartidos en Windows y Linux.",
    "edu_smr_4": "Soporte de primer nivel, malware y copias de seguridad locales.",
    "hero_contact": "Contactar",
    "nav_contact": "Contacto",
    "hero_tag1": "ASIR + SMR (Grado Sup. & Medio)",
    "footer_disability": "Certificado Discapacidad >33%",
    "projects_title": "Proyectos",
    "exp_minsait_company": "Minsait · Contrato de prácticas",
    "exp_minsait_1": "Incidencias de software, hardware y conectividad en puestos de trabajo, con acceso remoto.",
    "stack_cloud_3": "Despliegue serverless de contenedores en Fly.io.",
    "availability_title": "Disponibilidad y Datos Clave",
    "avail_mobility_title": "Movilidad Geográfica",
    "stack_title": "Arsenal Tecnológico",
    "hero_subtitle": "Administrador de sistemas y ciberseguridad",
    "form_email": "Email",
    "footer_legal_title": "Legal & Compliance",
    "exp_minsait_2": "Cuentas y permisos de usuario en Directorio Activo.",
    "exp_attestto_1": "Administración de identidades y accesos: Google Workspace, Cloudflare, IAM y GitHub.",
    "edu_asir_desc": "Administración, seguridad y alta disponibilidad de sistemas y redes.",
    "stat_exp_val": "+3 Años",
    "hero_description": "Titulado en ASIR y SMR. Diseño y operación de arquitecturas seguras: plataformas en Cloudflare y el edge, redes con filtrado DNS y Zero-Trust, monitorización con alertas, y administración de identidades.",
    "stack_virt_3": "Virtualización completa con Proxmox VE y VirtualBox.",
    "exp_minsait_role": "Técnico de soporte de TI",
    "stack_cloud_title": "Cloud e IAM",
    "footer_sitemap": "Sitemap XML",
    "edu_title": "Formación",
    "footer_specs_title": "Especialidades & Certificación",
    "footer_nav_title": "Navegación",
    "footer_spec_5": "Análisis Cuantitativo de Riesgos",
    "exp_iis_period": "may. 2023 – nov. 2023 · 7 meses",
    "edu_smr_desc": "Instalación, soporte y mantenimiento de equipos y redes locales.",
    "avail_join_text": "Disponibilidad Inmediata para nuevos retos.",
    "footer_brand_desc": "Administrador de sistemas y ciberseguridad. Infraestructura edge, redes Zero-Trust, hardening e identidad.",
    "hero_tag2": "Disponibilidad inmediata",
    "nav_experience": "Experiencia",
    "form_name": "Nombre",
    "stack_cloud_1": "Administración de nube e identidades: Google Workspace / IAM.",
    "proj_filter_automation": "Automatización",
    "stack_os_3": "Servicios de Directorio: Active Directory, Samba AD, OpenLDAP.",
    "footer_spec_4": "Linux Security Hardening",
    "hero_pill_loc": "Barcelona · Remoto",
    "hero_download_cv": "Descargar CV",
    "exp_attestto_role": "Administrador de sistemas y seguridad cloud",
    "nav_stack": "Stack Técnico",
    "edu_smr_title": "CFGM · Sistemas microinformáticos y redes",
    "stack_os_title": "Sistemas Operativos",
    "stat_disability": "Discapacidad Oficial Certificada",
    "proj_filter_systems": "Sistemas y cloud",
    "nav_projects": "Proyectos",
    "stack_auto_3": "Gestión de configuración con Ansible.",
    "hero_pill_edu": "ASIR · SMR",
    "exp_minsait_3": "Impresoras y periféricos conectados en red.",
    "stack_net_4": "Análisis de tráfico y detección de incidentes.",
    "terminal_title": "Consola Interactive SysAdmin",
    "exp_iis_4": "Distribución centralizada de software, inventario y renovación del parque.",
    "stack_cloud_4": "Estándares de Identidad Digital: W3C DID/VC, GLEIF / vLEI, eIDAS.",
    "exp_attestto_4": "Mantenimiento de servicios de identidad digital (W3C DID/VC, vLEI y eIDAS) y documentación técnica.",
    "edu_entra_title": "Microsoft Entra ID (ID: F89C9FFB072C4C9A)",
    "exp_attestto_period": "jul. 2026 – sept. 2026 · 3 meses",
    "stack_os_4": "Hardening de sistemas y gestión de parches de seguridad.",
    "stack_net_2": "Enrutamiento dinámico (OSPF, RIP) y estático.",
    "copy_email": "Copiar Email",
    "avail_disability_title": "Discapacidad >33%",
    "avail_join_title": "Incorporación Inmediata",
    "form_send": "Enviar Mensaje",
    "form_ok": "Mensaje enviado. Te responderé a este correo.",
    "form_err": "No se ha podido enviar el mensaje. Inténtalo de nuevo.",
    "footer_ai_indexing": "AI Indexing (llms.txt)",
    "avail_schedule_title": "Flexibilidad Horaria",
    "exp_attestto_2": "Directivas de mínimo privilegio y hardening de entornos.",
    "stack_virt_2": "Creación de Dockerfiles y orquestación básica (Docker Compose).",
    "stack_os_2": "Gestión de dominios Windows Server y Group Policy Objects (GPO).",
    "stack_net_title": "Redes, Ciberseguridad & Riesgos",
    "exp_iis_5": "Instalación automatizada de software.",
    "exp_title": "Experiencia",
    "exp_attestto_3": "Supervisión de la seguridad en repositorios de código y respuesta ante incidencias.",
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
    "exp_attestto_context": "Gestión, despliegue y protección de la infraestructura corporativa en la nube.",
    "stack_auto_2": "Desarrollo de herramientas de administración con Python.",
    "exp_attestto_5": "Mantenimiento de infraestructura segura, confiable y bien documentada, además de soporte a la comunidad hispanohablante y localización (EN-ES).",
    "exp_iis_company": "Institut Indústria Sostenible de Barcelona · Contrato de prácticas",
    "stack_net_3": "Cortafuegos, VPN y segmentación de la red.",
    "stack_cloud_2": "Seguridad perimetral y proxies/DNS con Cloudflare.",
    "stack_auto_1": "Scripting potente: Bash (Linux) y PowerShell (Windows).",
    "footer_copyright": "Todos los derechos reservados.",
    "form_message": "Mensaje",
    "stack_net_1": "Configuración de VLANs, Trunking y Spanning Tree.",
    "stack_virt_1": "Despliegue y gestión de contenedores con Docker.",
    "stack_virt_title": "Virtualización & Contenedores",
    "stat_exp": "Experiencia IT & SecOps",
    "exp_minsait_period": "nov. 2025 – may. 2026 · 7 meses",
    "exp_attestto_company": "Attestto · Jornada parcial",
    "hero_pill_disability": "Cuota >33% LGD",
    "stack_auto_title": "Automatización & Código",
    "exp_minsait_context": "Soporte técnico remoto en el proyecto Metro Sud, bajo los estándares del CTTI.",
    "exp_minsait_4": "Registro, escalado y cierre de peticiones en ticketing, dentro de los SLA.",
    "footer_status": "All Systems Operational · Cloudflare Secured",
    "avail_join_status": "Incorporación Inmediata",
    "stack_auto_4": "Control de versiones fluido con Git / GitHub.",
    "stack_os_1": "Administración avanzada de servidores Linux (Debian/CentOS).",
    "avail_schedule_text": "Jornada partida, turnos rotativos, guardias.",
    "contact_lets_talk": "Hablemos",
    "edu_smr_level": "Ciclo Formativo de Grado Medio",
    "footer_privacy": "Política de Privacidad",
    "nav_education": "Formación",
    "exp_iis_2": "Diagnóstico, sustitución y reparación de hardware en ordenadores, impresoras y periféricos.",
    "edu_asir_level": "Ciclo Formativo de Grado Superior",
    "exp_attestto_location": "Delaware, Estados Unidos · En remoto",
    "hero_tag3": "Cuota >33% LGD",
    "footer_spec_1": "ASIR & SMR · ITB",
    "edu_asir_title": "CFGS · Administración de Sistemas Informáticos en Red",
    "exp_iis_role": "Técnico de soporte de equipos informáticos",
    "exp_iis_1": "Despliegue masivo y clonación de imágenes con Clonezilla para aulas y puestos.",
    "stack_virt_4": "Aislamiento de entornos de desarrollo y producción.",
    "exp_iis_3": "Cableado estructurado y red local.",
    "footer_spec_2": "Google Workspace & Cloud IAM",
    "exp_iis_6": "Mantenimiento preventivo y correctivo.",
    "proj_filter_security": "Ciberseguridad",
    "theme_aria": "Cambiar tema",
    "menu_aria": "Abrir menú",
    "hero_role": "Administrador de sistemas y ciberseguridad",
    "btn_cv": "Descargar CV",
    "cv_title": "Descargar CV",
    "cv_help": "Confirma que eres una persona. El PDF se genera con la experiencia, la formación y los proyectos que hay ahora mismo en esta página.",
    "cv_generate": "Generar PDF",
    "cv_working": "Generando…",
    "cv_error": "No se ha podido generar el CV. Vuelve a intentarlo.",
    "btn_contact": "Contactar"
  },
  "en": {
    "hero_pill_org": "ATM Software Labs",
    "exp_atm_role": "Systems and cybersecurity administrator",
    "exp_atm_company": "ATM Software Labs",
    "exp_atm_location": "Barcelona, Catalonia, Spain · Remote",
    "exp_atm_period": "May 2026 – present · 5 months",
    "exp_atm_context": "Independent technical lab: applied research, secure architectures and tests on real systems and networks.",
    "exp_atm_1": "Deployment of web platforms on edge infrastructure and Cloudflare.",
    "exp_atm_2": "Secure networks with DNS filtering and a Zero-Trust model.",
    "exp_atm_3": "Continuous system monitoring and automated alerts.",
    "exp_atm_4": "Runbooks and reproducible technical deployment guides.",
    "exp_atm_5": "System security, backups and automation with PowerShell and Bash.",
    "exp_minsait_location": "Barcelona, Catalonia, Spain · Hybrid",
    "exp_iis_location": "Carrer de Cristóbal de Moura, 223, Barcelona · On-site",
    "exp_iis_context": "On-site maintenance and support in an education environment.",
    "edu_asir_1": "Linux and Windows Server: servers, clients and services.",
    "edu_asir_2": "DNS, DHCP, web servers and file transfer.",
    "edu_asir_3": "Perimeter security, backups and monitoring.",
    "edu_asir_4": "Virtualization and infrastructure deployment.",
    "edu_smr_1": "Assembly, diagnosis and repair of hardware and peripherals.",
    "edu_smr_2": "Structured cabling, routers, switches and IP addressing.",
    "edu_smr_3": "Users, permissions and shared resources on Windows and Linux.",
    "edu_smr_4": "First-line support, malware removal and local backups.",
    "hero_contact": "Contact Me",
    "nav_contact": "Contact",
    "hero_tag1": "ASIR + SMR (advanced and intermediate vocational)",
    "footer_disability": "Disability certificate >33%",
    "projects_title": "Projects",
    "exp_minsait_company": "Minsait · Internship",
    "exp_minsait_1": "Software, hardware and connectivity incidents on workstations, using remote access.",
    "stack_cloud_3": "Serverless container deploys on Fly.io.",
    "availability_title": "Availability",
    "avail_mobility_title": "Geographical Mobility",
    "stack_title": "Tech Stack",
    "hero_subtitle": "Systems and cybersecurity administrator",
    "form_email": "Email",
    "footer_legal_title": "Legal & Compliance",
    "exp_minsait_2": "User accounts and permissions in Active Directory.",
    "exp_attestto_1": "Identity and access administration: Google Workspace, Cloudflare, IAM and GitHub.",
    "edu_asir_desc": "Administration, security and high availability of systems and networks.",
    "stat_exp_val": "+3 Años",
    "hero_description": "ASIR and SMR. I design and run secure architectures: Cloudflare and edge platforms, DNS filtering and Zero-Trust networks, monitoring with alerts, and identity administration.",
    "stack_virt_3": "Full virtualization with Proxmox VE and VirtualBox.",
    "exp_minsait_role": "IT support technician",
    "stack_cloud_title": "Cloud & IAM",
    "footer_sitemap": "Sitemap XML",
    "edu_title": "Education",
    "footer_specs_title": "Specialties",
    "footer_nav_title": "Navigation",
    "footer_spec_5": "Quantitative risk analysis",
    "exp_iis_period": "May 2023 – Nov 2023 · 7 months",
    "edu_smr_desc": "Installation, support and maintenance of computers and local networks.",
    "avail_join_text": "Available for new challenges immediately.",
    "footer_brand_desc": "Systems and cybersecurity administrator. Edge infrastructure, Zero-Trust networks, hardening and identity.",
    "hero_tag2": "Immediate availability",
    "nav_experience": "Experience",
    "form_name": "Name",
    "stack_cloud_1": "Cloud and identity administration: Google Workspace / IAM.",
    "proj_filter_automation": "Automation",
    "stack_os_3": "Directory services: Active Directory, Samba AD, OpenLDAP.",
    "footer_spec_4": "Linux Security Hardening",
    "hero_pill_loc": "Barcelona · Remote",
    "hero_download_cv": "Download CV",
    "exp_attestto_role": "Cloud systems and security administrator",
    "nav_stack": "Tech Stack",
    "edu_smr_title": "Intermediate vocational diploma · Computer systems and networks",
    "stack_os_title": "Operating systems",
    "stat_disability": "Certified official disability",
    "proj_filter_systems": "Systems & cloud",
    "nav_projects": "Projects",
    "stack_auto_3": "Configuration management with Ansible.",
    "hero_pill_edu": "ASIR · SMR",
    "exp_minsait_3": "Networked printers and peripherals.",
    "stack_net_4": "Traffic analysis and incident detection.",
    "terminal_title": "Sysadmin console",
    "exp_iis_4": "Centralized software distribution, inventory and hardware refresh.",
    "stack_cloud_4": "Digital identity standards: W3C DID/VC, GLEIF / vLEI, eIDAS.",
    "exp_attestto_4": "Operation of digital-identity services (W3C DID/VC, vLEI and eIDAS) and technical documentation.",
    "edu_entra_title": "Microsoft Entra ID (ID: F89C9FFB072C4C9A)",
    "exp_attestto_period": "Jul 2026 – Sep 2026 · 3 months",
    "stack_os_4": "System hardening and security patching.",
    "stack_net_2": "Dynamic (OSPF, RIP) and static routing.",
    "copy_email": "Copy Email",
    "avail_disability_title": "Official Disability >33%",
    "avail_join_title": "Immediate Start",
    "form_send": "Send Message",
    "form_ok": "Message sent. I will reply to this email.",
    "form_err": "The message could not be sent. Please try again.",
    "footer_ai_indexing": "AI Indexing (llms.txt)",
    "avail_schedule_title": "Flexible Schedule",
    "exp_attestto_2": "Least-privilege policies and environment hardening.",
    "stack_virt_2": "Dockerfiles and basic Compose orchestration.",
    "stack_os_2": "Windows Server domains and Group Policy.",
    "stack_net_title": "Networks, security and risk",
    "exp_iis_5": "Automated software installation.",
    "exp_title": "Experience",
    "exp_attestto_3": "Code-repository security monitoring and incident response.",
    "exp_minsait_5": "Level-2 support for clinical and internal IT staff.",
    "proj_filter_all": "All projects",
    "footer_spec_3": "W3C DID/VC & vLEI / GLEIF",
    "contact_intro": "Have a project or job opportunity? Feel free to reach out.",
    "stat_uptime": "Edge monitoring",
    "avail_disability_text": "Eligible for employment bonuses and quotas.",
    "stat_cloud": "Serverless & Edge Cloud",
    "avail_mobility_text": "On-site, hybrid, or remote.",
    "footer_terms": "Terms",
    "edu_entra_level": "Identities and Access Official Credential",
    "exp_attestto_context": "Management, deployment and protection of corporate cloud infrastructure.",
    "stack_auto_2": "Administration tools written in Python.",
    "exp_attestto_5": "Maintained secure, documented infrastructure and Spanish-language community support.",
    "exp_iis_company": "Institut Indústria Sostenible de Barcelona · Internship",
    "stack_net_3": "Firewalls, VPNs and network segmentation.",
    "stack_cloud_2": "Perimeter security and DNS proxies with Cloudflare.",
    "stack_auto_1": "Scripting with Bash on Linux and PowerShell on Windows.",
    "footer_copyright": "All rights reserved.",
    "form_message": "Message",
    "stack_net_1": "VLANs, trunking and Spanning Tree.",
    "stack_virt_1": "Container deployment and management with Docker.",
    "stack_virt_title": "Virtualization and containers",
    "stat_exp": "IT and SecOps experience",
    "exp_minsait_period": "Nov 2025 – May 2026 · 7 months",
    "exp_attestto_company": "Attestto · Part-time",
    "hero_pill_disability": "Quota >33% LGD",
    "stack_auto_title": "Automation and code",
    "exp_minsait_context": "Remote technical support on the Metro Sud project, under CTTI standards.",
    "exp_minsait_4": "Logging, escalation and closure of tickets within SLA.",
    "footer_status": "All Systems Operational · Cloudflare Secured",
    "avail_join_status": "Available immediately",
    "stack_auto_4": "Version control with Git and GitHub.",
    "stack_os_1": "Linux server administration (Debian/CentOS).",
    "avail_schedule_text": "Split shifts, rotating, or on-call.",
    "contact_lets_talk": "Let's Talk",
    "edu_smr_level": "Intermediate vocational training",
    "footer_privacy": "Privacy policy",
    "nav_education": "Education",
    "exp_iis_2": "Diagnosis, replacement and repair of hardware on computers, printers and peripherals.",
    "edu_asir_level": "Advanced vocational training",
    "exp_attestto_location": "Delaware, United States · Remote",
    "hero_tag3": "Quota >33% LGD",
    "footer_spec_1": "ASIR & SMR · ITB",
    "edu_asir_title": "Higher vocational diploma · Computer systems, networking and telecommunications",
    "exp_iis_role": "Computer equipment support technician",
    "exp_iis_1": "Mass imaging and cloning with Clonezilla for classrooms and workstations.",
    "stack_virt_4": "Isolation of development and production environments.",
    "exp_iis_3": "Structured cabling and the local network.",
    "footer_spec_2": "Google Workspace & Cloud IAM",
    "exp_iis_6": "Preventive and corrective maintenance.",
    "proj_filter_security": "Cybersecurity",
    "theme_aria": "Switch theme",
    "menu_aria": "Open menu",
    "hero_role": "Systems and cybersecurity administrator",
    "btn_cv": "Download CV",
    "cv_title": "Download CV",
    "cv_help": "Confirm you are a person. The PDF is built from the experience, education and projects currently on this page.",
    "cv_generate": "Generate PDF",
    "cv_working": "Generating…",
    "cv_error": "The CV could not be generated. Please try again.",
    "btn_contact": "Contact Me"
  },
  "ca": {
    "hero_pill_org": "ATM Software Labs",
    "exp_atm_role": "Administrador de sistemes i ciberseguretat",
    "exp_atm_company": "ATM Software Labs",
    "exp_atm_location": "Barcelona, Catalunya, Espanya · En remot",
    "exp_atm_period": "maig 2026 – actualitat · 5 mesos",
    "exp_atm_context": "Laboratori tècnic independent: recerca aplicada, arquitectures segures i proves en entorns reals de sistemes i xarxes.",
    "exp_atm_1": "Desplegament de plataformes web sobre infraestructura edge i Cloudflare.",
    "exp_atm_2": "Xarxes segures amb filtratge DNS i model Zero-Trust.",
    "exp_atm_3": "Monitorització contínua de sistemes i alertes automatitzades.",
    "exp_atm_4": "Runbooks i guies tècniques de desplegament reproduïbles.",
    "exp_atm_5": "Seguretat de sistemes, còpies de seguretat i automatització amb PowerShell i Bash.",
    "exp_minsait_location": "Barcelona, Catalunya, Espanya · Híbrid",
    "exp_iis_location": "Carrer de Cristóbal de Moura, 223, Barcelona · Presencial",
    "exp_iis_context": "Manteniment i suport presencial en l'entorn educatiu.",
    "edu_asir_1": "Linux i Windows Server: servidors, clients i serveis.",
    "edu_asir_2": "DNS, DHCP, servidors web i transferència de fitxers.",
    "edu_asir_3": "Seguretat perimetral, còpies de seguretat i monitorització.",
    "edu_asir_4": "Virtualització i desplegament d'infraestructura.",
    "edu_smr_1": "Muntatge, diagnòstic i reparació de maquinari i perifèrics.",
    "edu_smr_2": "Cablejat estructurat, routers, switches i adreçament IP.",
    "edu_smr_3": "Usuaris, permisos i recursos compartits a Windows i Linux.",
    "edu_smr_4": "Suport de primer nivell, malware i còpies de seguretat locals.",
    "hero_contact": "Contactar",
    "nav_contact": "Contacte",
    "hero_tag1": "ASIR + SMR (grau superior i mitjà)",
    "footer_disability": "Certificat de discapacitat >33%",
    "projects_title": "Projectes",
    "exp_minsait_company": "Minsait · Contracte de pràctiques",
    "exp_minsait_1": "Incidències de programari, maquinari i connectivitat en llocs de treball, amb accés remot.",
    "stack_cloud_3": "Desplegament serverless de contenidors a Fly.io.",
    "availability_title": "Disponibilitat",
    "avail_mobility_title": "Mobilitat Geogràfica",
    "stack_title": "Arsenal Tecnològic",
    "hero_subtitle": "Administrador de sistemes i ciberseguretat",
    "form_email": "Email",
    "footer_legal_title": "Legal & Compliance",
    "exp_minsait_2": "Comptes i permisos d'usuari al Directori Actiu.",
    "exp_attestto_1": "Administració d'identitats i accessos: Google Workspace, Cloudflare, IAM i GitHub.",
    "edu_asir_desc": "Administració, seguretat i alta disponibilitat de sistemes i xarxes.",
    "stat_exp_val": "+3 Años",
    "hero_description": "Titulat en ASIR i SMR. Disseny i operació d'arquitectures segures: plataformes a Cloudflare i l'edge, xarxes amb filtratge DNS i Zero-Trust, monitorització amb alertes i administració d'identitats.",
    "stack_virt_3": "Virtualització completa amb Proxmox VE i VirtualBox.",
    "exp_minsait_role": "Tècnic de suport de TI",
    "stack_cloud_title": "Cloud i IAM",
    "footer_sitemap": "Sitemap XML",
    "edu_title": "Formació",
    "footer_specs_title": "Especialitats",
    "footer_nav_title": "Navegació",
    "footer_spec_5": "Anàlisi quantitativa de riscos",
    "exp_iis_period": "maig 2023 – nov. 2023 · 7 mesos",
    "edu_smr_desc": "Instal·lació, suport i manteniment d'equips i xarxes locals.",
    "avail_join_text": "Disponibilidad Inmediata para nuevos retos.",
    "footer_brand_desc": "Administrador de sistemes i ciberseguretat. Infraestructura edge, xarxes Zero-Trust, hardening i identitat.",
    "hero_tag2": "Disponibilitat immediata",
    "nav_experience": "Experiència",
    "form_name": "Nom",
    "stack_cloud_1": "Administració de núvol i identitats: Google Workspace / IAM.",
    "proj_filter_automation": "Automatització",
    "stack_os_3": "Serveis de directori: Active Directory, Samba AD, OpenLDAP.",
    "footer_spec_4": "Linux Security Hardening",
    "hero_pill_loc": "Barcelona · Remot",
    "hero_download_cv": "Descarregar CV",
    "exp_attestto_role": "Administrador de sistemes i seguretat cloud",
    "nav_stack": "Stack Tècnic",
    "edu_smr_title": "CFGM · Sistemes microinformàtics i xarxes",
    "stack_os_title": "Sistemes operatius",
    "stat_disability": "Discapacitat oficial certificada",
    "proj_filter_systems": "Sistemes i cloud",
    "nav_projects": "Projectes",
    "stack_auto_3": "Gestió de configuració amb Ansible.",
    "hero_pill_edu": "ASIR · SMR",
    "exp_minsait_3": "Impressores i perifèrics connectats en xarxa.",
    "stack_net_4": "Anàlisi de trànsit i detecció d'incidents.",
    "terminal_title": "Consola d'administració",
    "exp_iis_4": "Distribució centralitzada de programari, inventari i renovació del parc.",
    "stack_cloud_4": "Estàndards d'identitat digital: W3C DID/VC, GLEIF / vLEI, eIDAS.",
    "exp_attestto_4": "Manteniment de serveis d'identitat digital (W3C DID/VC, vLEI i eIDAS) i documentació tècnica.",
    "edu_entra_title": "Microsoft Entra ID (ID: F89C9FFB072C4C9A)",
    "exp_attestto_period": "jul. 2026 – set. 2026 · 3 mesos",
    "stack_os_4": "Hardening de sistemes i pedaços de seguretat.",
    "stack_net_2": "Enrutament dinàmic (OSPF, RIP) i estàtic.",
    "copy_email": "Copiar Email",
    "avail_disability_title": "Discapacitat >33%",
    "avail_join_title": "Incorporació Immediata",
    "form_send": "Enviar Missatge",
    "form_ok": "Missatge enviat. Et respondré a aquest correu.",
    "form_err": "No s'ha pogut enviar el missatge. Torna-ho a provar.",
    "footer_ai_indexing": "AI Indexing (llms.txt)",
    "avail_schedule_title": "Flexibilitat Horària",
    "exp_attestto_2": "Directives de mínim privilegi i hardening d'entorns.",
    "stack_virt_2": "Dockerfiles i orquestració bàsica amb Docker Compose.",
    "stack_os_2": "Dominis Windows Server i directives de grup.",
    "stack_net_title": "Xarxes, ciberseguretat i risc",
    "exp_iis_5": "Instalación automatizada de software.",
    "exp_title": "Experiència",
    "exp_attestto_3": "Supervisió de la seguretat als repositoris de codi i resposta davant d'incidències.",
    "exp_minsait_5": "Soporte de Nivel 2 a personal sanitario e IT interno.",
    "proj_filter_all": "Tots els projectes",
    "footer_spec_3": "W3C DID/VC & vLEI / GLEIF",
    "contact_intro": "Tens un projecte o oportunitat laboral? No dubtis a contactar-me.",
    "stat_uptime": "Monitorització edge",
    "avail_disability_text": "Certificado oficial >33%, medidas de fomento del empleo.",
    "stat_cloud": "Serverless & Edge Cloud",
    "avail_mobility_text": "Presencial, híbrido o teletrabajo.",
    "footer_terms": "Termes",
    "edu_entra_level": "Identities and Access Official Credential",
    "exp_attestto_context": "Gestió, desplegament i protecció de la infraestructura corporativa al núvol.",
    "stack_auto_2": "Eines d'administració amb Python.",
    "exp_attestto_5": "Mantenimiento de infraestructura segura, confiable y bien documentada, además de soporte a la comunidad hispanohablante y localización (EN-ES).",
    "exp_iis_company": "Institut Indústria Sostenible de Barcelona · Contracte de pràctiques",
    "stack_net_3": "Tallafocs, VPN i segmentació de la xarxa.",
    "stack_cloud_2": "Seguretat perimetral i proxies DNS amb Cloudflare.",
    "stack_auto_1": "Scripting amb Bash a Linux i PowerShell a Windows.",
    "footer_copyright": "Tots els drets reservats.",
    "form_message": "Missatge",
    "stack_net_1": "VLAN, trunking i Spanning Tree.",
    "stack_virt_1": "Desplegament i gestió de contenidors amb Docker.",
    "stack_virt_title": "Virtualització i contenidors",
    "stat_exp": "Experiència IT i SecOps",
    "exp_minsait_period": "nov. 2025 – maig 2026 · 7 mesos",
    "exp_attestto_company": "Attestto · Jornada parcial",
    "hero_pill_disability": "Quota >33% LGD",
    "stack_auto_title": "Automatització i codi",
    "exp_minsait_context": "Suport tècnic remot al projecte Metro Sud, sota els estàndards del CTTI.",
    "exp_minsait_4": "Registre, escalat i tancament de peticions de ticketing, dins dels SLA.",
    "footer_status": "All Systems Operational · Cloudflare Secured",
    "avail_join_status": "Incorporació immediata",
    "stack_auto_4": "Control de versions amb Git i GitHub.",
    "stack_os_1": "Administració de servidors Linux (Debian/CentOS).",
    "avail_schedule_text": "Jornada partida, turnos rotativos, guardias.",
    "contact_lets_talk": "Parlem",
    "edu_smr_level": "Cicle Formatiu de Grau Mitjà",
    "footer_privacy": "Política de privadesa",
    "nav_education": "Formació",
    "exp_iis_2": "Diagnòstic, substitució i reparació de maquinari en ordinadors, impressores i perifèrics.",
    "edu_asir_level": "Cicle Formatiu de Grau Superior",
    "exp_attestto_location": "Delaware, Estats Units · En remot",
    "hero_tag3": "Quota >33% LGD",
    "footer_spec_1": "ASIR & SMR · ITB",
    "edu_asir_title": "CFGS · Administració de Sistemes Informàtics en Xarxa",
    "exp_iis_role": "Tècnic de suport d'equips informàtics",
    "exp_iis_1": "Desplegament massiu i clonació d'imatges amb Clonezilla per a aules i llocs de treball.",
    "stack_virt_4": "Aïllament dels entorns de desenvolupament i producció.",
    "exp_iis_3": "Cablejat estructurat i xarxa local.",
    "footer_spec_2": "Google Workspace & Cloud IAM",
    "exp_iis_6": "Mantenimiento preventivo y correctivo.",
    "proj_filter_security": "Ciberseguretat",
    "theme_aria": "Canviar el tema",
    "menu_aria": "Obrir el menú",
    "hero_role": "Administrador de sistemes i ciberseguretat",
    "btn_cv": "Descarregar CV",
    "cv_title": "Descarregar el CV",
    "cv_help": "Confirma que ets una persona. El PDF es genera amb l'experiència, la formació i els projectes que hi ha ara en aquesta pàgina.",
    "cv_generate": "Generar PDF",
    "cv_working": "Generant…",
    "cv_error": "No s'ha pogut generar el CV. Torna-ho a provar.",
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
  if (publishedContent()) applyContent(publishedContent(), lang);
}

function initI18n() {
  applyI18n(currentLang());
  const picker = document.getElementById('lang-picker');
  const trigger = document.getElementById('lang-trigger');
  const menu = document.getElementById('lang-menu');
  const setOpen = (open) => {
    if (!menu || !trigger) return;
    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  };
  trigger?.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });
  menu?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-lang]');
    if (!button) return;
    event.stopPropagation();
    applyI18n(button.getAttribute('data-lang'));
    setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!picker?.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  loadPublishedContent().then((content) => {
    if (content) applyContent(content, currentLang());
  });
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

function applyTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
  const dark = next === 'dark';
  document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
    btn.innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    btn.title = dark ? 'Modo claro' : 'Modo oscuro';
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = dark ? '#080c14' : '#f8fafc';
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === 'dark' ? 'dark' : 'light');
  document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
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
  const toggle = document.querySelector('.mobile-menu-toggle');
  const drawer = document.getElementById('main-nav');
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    drawer?.classList.toggle('active', open);
    toggle?.classList.toggle('active', open);
    toggle?.setAttribute('aria-expanded', String(open));
    const icon = toggle?.querySelector('i');
    if (icon) icon.className = open ? 'fas fa-times' : 'fas fa-bars';
  };

  toggle?.addEventListener('click', () => setOpen(!drawer?.classList.contains('active')));
  document.querySelectorAll('#main-nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
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
    if (window.innerWidth >= 992) setOpen(false);
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
  let contactToken = '';
  let contactWidget = null;
  let pendingToken = null;
  let widgetReady = null;

  const failToken = () => {
    contactToken = '';
    if (!pendingToken) return;
    const reject = pendingToken.reject;
    pendingToken = null;
    reject();
  };

  function ensureWidget() {
    if (contactWidget != null) return Promise.resolve(contactWidget);
    if (widgetReady) return widgetReady;
    widgetReady = mountTurnstile(document.getElementById('contact-turnstile'), 'contact', {
      onToken: (token) => {
        contactToken = token;
        if (!pendingToken) return;
        const resolve = pendingToken.resolve;
        pendingToken = null;
        resolve(token);
      },
      onExpire: () => {
        contactToken = '';
      },
      onError: failToken,
    }).then((id) => {
      contactWidget = id;
      return id;
    }).catch((error) => {
      widgetReady = null;
      throw error;
    });
    return widgetReady;
  }

  function obtainToken() {
    if (contactToken) return Promise.resolve(contactToken);
    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => {
        pendingToken = null;
        resetTurnstile(contactWidget);
        reject(new Error(t('form_err')));
      }, 90000);
      pendingToken = {
        resolve: (token) => {
          window.clearTimeout(timer);
          resolve(token);
        },
        reject: () => {
          window.clearTimeout(timer);
          reject(new Error(t('form_err')));
        },
      };
      executeTurnstile(contactWidget);
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const original = submit ? submit.textContent : '';
    if (submit) {
      submit.disabled = true;
      submit.textContent = '...';
    }
    try {
      await ensureWidget();
      const token = await obtainToken();
      contactToken = '';
      const data = Object.fromEntries(new FormData(form).entries());
      data.turnstile = token;
      const response = await fetch('/api/contact', {
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
      contactToken = '';
      resetTurnstile(contactWidget);
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
  const app = document.getElementById('app');
  if (app && !app.innerHTML.trim()) app.innerHTML = markup;

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
  try { initProjectFilters(); } catch (error) { console.error('[filters]', error); }
  try { initContact(); } catch (error) { console.error('[contact]', error); }
  try { initModals(); } catch (error) { console.error('[modals]', error); }
  try { initCvDownload({ t }); } catch (error) { console.error('[cv]', error); }
});




