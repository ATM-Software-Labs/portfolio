const translations = {
    es: {
        page_title: 'Alberto Trujillo | DevOps & Systems Engineer | Cybersecurity & Cloud/IAM',
        hero_subtitle: 'Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID / IAM · IT Infrastructure',
        nav_availability: 'Disponibilidad',
        nav_experience: 'Experiencia',
        nav_stack: 'Stack Técnico',
        nav_projects: 'Proyectos',
        nav_education: 'Formación',
        nav_blog: 'Blog',
        nav_contact: 'Contacto',
        hero_tag1: 'ASIXc + SMR (Grado Sup. & Medio)',
        hero_tag2: 'Administración de Sistemas, Cloud/IAM y Seguridad',
        hero_tag3: 'Autodidacta & Ciberseguridad',
        hero_description: 'Técnico Superior ASIXc especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.',
        hero_download_cv: 'Descargar CV',
        hero_contact: 'Contactar',
        availability_title: 'Disponibilidad y Datos Clave',
        avail_bar_2: 'Barcelona / Remote',
        avail_bar_2: 'Barcelona / Remote',
        avail_bar_1: 'Disponibilidad Inmediata',
        avail_join_status: 'Disponibilidad Inmediata',
        avail_bar_1: 'Disponibilitat Immediata',
        avail_bar_3: 'Cuota de Discapacidad >33% Acreditada',
        avail_schedule_text: 'Adaptabilidad horaria completa: jornada partida, turnos rotativos, guardias, soporte técnico o jornada intensiva según requiera el proyecto.',
        avail_mobility_title: 'Movilidad Geográfica',
        avail_mobility_text: 'Flexibilidad total para desplazamientos y reubicación. Adaptabilidad completa a entornos presenciales, híbridos o de teletrabajo.',
        exp_title: 'Trayectoria Profesional',
        
        // Attestto
        exp_attestto_role: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',
        exp_attestto_company: 'Attestto · Jornada parcial',
        exp_attestto_period: 'jul. 2026 - sep. 2026 · 3 meses',
        exp_attestto_location: 'Delaware, Estados Unidos · En remoto',
        exp_attestto_context: '',
        exp_attestto_1: 'Colaboré en la protección y gestión de la infraestructura técnica: administración de identidad y nube (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicación de hardening, políticas de mínimo privilegio, respuesta a incidentes y monitorización de seguridad en repositorios. Desarrollo de soporte para estándares de identidad abierta (W3C DID/VC, vLEI).',
        exp_attestto_2: '',
        exp_attestto_3: '',
        exp_attestto_4: '',
        exp_attestto_5: 'Mantenimiento de infraestructura segura, confiable y bien documentada, además de soporte a la comunidad hispanohablante y localización (<strong>EN↔ES</strong>).',

        

        // Minsait
        exp_minsait_role: 'Técnico de Soporte de Sistemas',
        exp_minsait_company: 'Minsait (Indra Group)',
        exp_minsait_period: 'Nov 2025 - May 2026',
        exp_minsait_context: 'Soporte de Infraestructuras Críticas & Macroproyecto CTTI – Sector Sanitario (Metropolitana Sud)',
        exp_minsait_1: 'Administración de identidades, cuentas de usuario y control de accesos mediante <strong>Active Directory</strong>.',
        exp_minsait_2: 'Gestión de credenciales, desbloqueo de cuentas y asignación de permisos en entornos ERP <strong>SAP</strong>.',
        exp_minsait_3: 'Aseguramiento de la continuidad operativa y la disponibilidad de los sistemas en una infraestructura pública crítica.',
        exp_minsait_4: 'Gestión integral y escalado de incidencias complejas a través de <strong>BMC Remedy</strong>, cumpliendo rigurosamente los SLAs del CTTI.',
        exp_minsait_5: 'Soporte técnico especializado (Nivel 2) a usuarios finales del ecosistema sanitario público, optimizando los tiempos de resolución.',
        
        // IIS
        exp_iis_role: 'Técnico de Mantenimiento Informático (Prácticas)',
        exp_iis_company: 'Institut Indústria Sostenible',
        exp_iis_period: 'May 2023 - Nov 2023',
        exp_iis_1: '<strong>Soporte en aulas:</strong> Reparación y mantenimiento de proyectores, monitores y equipos informáticos utilizados por el profesorado.',
        exp_iis_2: '<strong>Diagnóstico de hardware:</strong> Resolución de fallos comunes (fuentes de alimentación, discos, cables, periféricos, etc.).',
        exp_iis_3: '<strong>Infraestructura y cableado:</strong> Organización, etiquetado y distribución de cableado de red en aulas y racks.',
        exp_iis_4: '<strong>Clonación de sistemas:</strong> Despliegue masivo de equipos mediante <strong>Clonezilla</strong> y restauración de imágenes.',
        exp_iis_5: '<strong>Instalación automatizada:</strong> Configuración e instalación de software educativo y herramientas de aula mediante scripts y paquetes preconfigurados.',
        exp_iis_6: '<strong>Mantenimiento preventivo:</strong> Limpieza, revisión y puesta a punto de equipos para garantizar su disponibilidad diaria.',
        
        stack_title: 'Arsenal Tecnológico',
        stack_cloud_title: 'Cloud, Systems & IAM',
        stack_cloud_1: 'Administración de identidades (IAM): <strong>Microsoft Entra ID, Active Directory y Google Workspace</strong>.',
        stack_cloud_2: 'Seguridad perimetral y proxies/DNS con <strong>Cloudflare</strong>.',
        stack_cloud_3: 'Despliegue serverless de contenedores en <strong>Fly.io</strong>.',
        stack_cloud_4: 'Estándares de Identidad Digital: <strong>W3C DID/VC, GLEIF / vLEI, eIDAS</strong>.',
        stack_virt_title: 'Virtualización & Contenedores',
        stack_virt_1: 'Despliegue y gestión de contenedores con <strong>Docker</strong>.',
        stack_virt_2: 'Creación de Dockerfiles y orquestación básica (Docker Compose).',
        stack_virt_3: 'Virtualización completa con Proxmox VE y VirtualBox.',
        stack_virt_4: 'Aislamiento de entornos de desarrollo y producción.',
        stack_os_title: 'Sistemas Operativos',
        stack_os_1: 'Administración avanzada de servidores Linux (Debian/CentOS).',
        stack_os_2: 'Gestión de dominios Windows Server y Group Policy Objects (GPO).',
        stack_os_3: 'Servicios de Directorio: <strong>Active Directory, Samba AD, OpenLDAP</strong>.',
        stack_os_4: 'Hardening de sistemas y gestión de parches de seguridad.',
        stack_net_title: 'Redes & Ciberseguridad',
        stack_net_1: 'Configuración de VLANs, Trunking y Spanning Tree.',
        stack_net_2: 'Enrutamiento dinámico (<strong>OSPF, RIP</strong>) y estático.',
        stack_net_3: 'Firewalls, Segmentación de Red y Zero-Trust.',
        stack_net_4: 'Políticas de Identidad (IAM) y System Hardening.',
        stack_auto_title: 'Automatización & Código',
        stack_auto_1: 'Scripting potente: <strong>Bash</strong> (Linux) y <strong>PowerShell</strong> (Windows).',
        stack_auto_2: 'Desarrollo de herramientas de administración con <strong>Python</strong>.',
        stack_auto_3: 'Gestión de configuración con <strong>Ansible</strong>.',
        stack_auto_4: 'Control de versiones fluido con <strong>Git / GitHub</strong>.',
        projects_title: 'Laboratorio & Proyectos',
        proj_solana_badge: 'AUDITORÍA BLOCKCHAIN',
        proj_visit_platform: 'Visitar Plataforma',
        proj_solana_desc: 'Herramienta de auditoría y análisis forense para rastrear transacciones en blockchain, identificar patrones sospechosos y verificar la integridad de los activos digitales.',
        proj_tech: 'Tecnología',
        proj_solana_tech: 'Integración con RPC de Solana, Python para análisis de datos y visualización web.',
        proj_application: 'Aplicación',
        proj_solana_app: 'Detección de anomalías, trazabilidad de fondos y auditoría de Smart Contracts.',
        proj_value: 'Valor Profesional',
        proj_solana_value: 'Demostración de capacidad para adaptar conocimientos de sistemas a tecnologías emergentes (Web3).',
        proj_auto_title: 'Suite de Automatización',
        proj_auto_desc: 'Scripts desarrollados para reducir la carga operativa: Backups incrementales, provisioning de usuarios en AD y monitorización de recursos.',
        proj_view_repo: 'Ver repositorio',
        proj_auto_badge: 'AUTOMATIZACIÓN',
        proj_focus_title: 'FocusGuard - Zero-Trust Parental Shield',
        proj_focus_badge: 'SEGURIDAD & REDES',
        proj_focus_desc: 'Solución de seguridad y proxy DNS gestionado. Implementa un filtrado Zero-Trust en tiempo real para bloquear amenazas usando Cloudflare Workers y D1.',
        proj_focus_tech: 'Cloudflare Workers, D1 Database',
        proj_focus_app: 'Filtrado DNS en tiempo real',
        proj_focus_value: 'Arquitectura serverless y seguridad perimetral',
        proj_trujillo_badge: 'IA & ARQUITECTURA SERVERLESS',
        proj_trujillo_title: 'Trujillo AI — Serverless AI Studio & Discord Bot',
        proj_trujillo_desc: 'Estudio de IA generativa y bot de Discord de alta velocidad en Cloudflare Workers Edge. Incorpora streaming en tiempo real (Llama 3.3), memoria persistente KV y defensas perimetrales de grado militar.',
        proj_trujillo_tech: 'Cloudflare Workers Edge, Groq (Llama 3.3 70B), Flux AI, KV Storage, Discord API v10, SSE Streaming',
        proj_trujillo_app: 'Estudio de IA generativa, bot de Discord con comandos slash, razonamiento profundo y generación de imágenes.',
        proj_trujillo_value: 'Arquitectura de coste cero con edge caching, rate limiting L1 en RAM y sistema de defensa perimetral de grado militar.',
        edu_title: 'Formación Académica',
        edu_asir_title: 'CFGS CFGS Administració de Sistemes Informàtics en Xarxa (Perfil Ciberseguretat) - ASIXc (Perfil Ciberseguretat) - ASIXc',
        edu_asir_level: 'Grado Superior (ASIR)',
        edu_asir_desc: 'Formación superior especializada en administración de infraestructuras de red y servidores, hardening de sistemas, detección de vulnerabilidades, seguridad perimetral, cortafuegos y políticas Zero-Trust.',
        edu_smr_title: 'Sistemas Microinformáticos y Redes',
        edu_smr_level: 'Grado Medio (SMR)',
        edu_smr_desc: 'Fundamentos de hardware, montaje de equipos y configuración de redes locales.',
        blog_title: 'Blog & Artículos',
        blog_coming_soon: 'Próximamente nuevos artículos sobre sistemas, redes y blockchain.',
        blog_view_all: 'Ver todos los artículos',
        blog_page_title: 'Blog & Artículos',
        blog_page_subtitle: 'Compartiendo conocimientos sobre administración de sistemas, ciberseguridad y Web3.',
        blog_search_placeholder: 'Buscar artículos por título, tags...',
        contact_title: 'Contacto Profesional',
        contact_lets_talk: 'Hablemos',
        contact_intro: 'Estoy listo para incorporarme a equipos técnicos donde pueda aportar mis conocimientos en DevOps, cloud, sistemas y ciberseguridad.',
        form_name: 'Nombre',
        form_email: 'Email',
        form_message: 'Mensaje',
               footer_role: 'DevOps & Systems Engineer | Cybersecurity',
        footer_rights: 'Todos los derechos reservados.',
        footer_brand_desc: 'Ingeniero Junior de Sistemas y Seguridad Cloud. Especializado en Administración de Sistemas, Cloud/IAM, Hardening de Infraestructura y Seguridad de Red.',
        footer_status: 'All Systems Operational · Cloudflare Secured',
        footer_nav_title: 'Navegación',
        footer_specs_title: 'Especialidades & Certificación',
        footer_legal_title: 'Legal & Compliance',
        footer_spec_1: 'ASIXc & SMR · ITB',
        footer_spec_2: 'Google Workspace & Cloud IAM',
        footer_spec_3: 'W3C DID/VC & vLEI / GLEIF',
        footer_spec_4: 'Linux Security Hardening',
        footer_spec_5: 'Microsoft Entra ID & Active Directory',
        footer_privacy: 'Política de Privacidad',
        footer_terms: 'Términos y Condiciones',
        footer_disability: 'Certificado Discapacidad >33%',
        footer_sitemap: 'Sitemap XML',
        footer_ai_indexing: 'AI Indexing (llms.txt)',
        footer_copyright: 'Todos los derechos reservados.',
        hero_pill_loc: 'Barcelona / Remoto',
        hero_pill_edu: 'ASIR (Sup.) + SMR (Med.)',
        hero_pill_disability: 'Discapacidad Oficial >33%',
        mailto_link: 'mailto:alberto@trujillomingorance.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Alberto,%0A%0AMi%20nombre%20es%20[Tu%20Nombre]%20y%20me%20gustar%C3%ADa%20contactar%20contigo%20para%20[Asunto].%0A%0AUn%20saludo.',
        proj_filter_all: 'Todos los Proyectos',
        proj_filter_devops: 'Cloud & DevOps',
        proj_filter_security: 'Ciberseguridad',
        proj_filter_automation: 'Automatización',
        terminal_title: 'Consola Interactive SysAdmin',
        terminal_hint: 'Haz clic en las sugerencias o escribe "help" para ver los comandos.',
        copy_email: 'Copiar Email',
        stat_exp: 'Experiencia IT & DevOps',
        stat_cloud: 'Serverless & Edge Cloud',
        stat_disability: 'Discapacidad Oficial Certificada',
        stat_uptime: 'Monitorización Edge'
    },
    ca: {
        page_title: 'Alberto Trujillo | Enginyer de DevOps, Sistemes i Seguretat',
        hero_subtitle: 'Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID / IAM · IT Infrastructure',
        nav_availability: 'Disponibilitat',
        nav_experience: 'Experiència',
        nav_stack: 'Stack Tècnic',
        nav_projects: 'Projectes',
        nav_education: 'Formació',
        nav_blog: 'Blog',
        nav_contact: 'Contacte',
        hero_tag1: 'ASIXc + SMX (Grau Sup. & Mitjà)',
        hero_tag2: 'Administració de Sistemes, Cloud/IAM i Seguretat',
        hero_tag3: 'Autodidacta & Ciberseguretat',
        hero_description: 'Técnico Superior ASIXc especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.',
        hero_download_cv: 'Descarregar CV',
        hero_contact: 'Contactar',
        availability_title: 'Disponibilitat i Dades Clau',
        avail_bar_2: 'Barcelona / Remote',
        avail_bar_2: 'Barcelona / Remote',
        avail_bar_1: 'Immediate Availability',
        avail_join_status: 'Disponibilitat Immediata',
        avail_bar_1: 'Immediate Availability',
        avail_bar_3: 'Quota de Discapacitat >33% Acreditada',
        avail_schedule_text: 'Adaptabilitat horària completa: jornada partida, torns rotatius, guàrdies, suport tècnic o jornada intensiva segons requereixi el projecte.',
        avail_mobility_title: 'Mobilitat Geogràfica',
        avail_mobility_text: 'Flexibilitat total per a desplaçaments i reubicació. Adaptabilitat completa a entorns presencials, híbrids o de teletreball.',
        exp_title: 'Trajectòria Professional',
        
        // Attestto
        exp_attestto_role: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',
        exp_attestto_company: 'Attestto · Jornada parcial',
        exp_attestto_period: 'jul. 2026 - set. 2026 · 3 mesos',
        exp_attestto_location: 'Delaware, Estats Units · En remot',
        exp_attestto_context: '',
        exp_attestto_1: 'Colaboré en la protección y gestión de la infraestructura técnica: administración de identidad y nube (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicación de hardening, políticas de mínimo privilegio, respuesta a incidentes y monitorización de seguridad en repositorios. Desarrollo de soporte para estándares de identidad abierta (W3C DID/VC, vLEI).',
        exp_attestto_2: '',
        exp_attestto_3: '',
        exp_attestto_4: '',
        exp_attestto_5: 'Manteniment d\'infraestructura segura, confiable i ben documentada, així com suport a la comunitat hispanoparlant i localització (<strong>EN↔ES</strong>).',

        

        // Minsait
        exp_minsait_role: 'Tècnic de Suport de Sistemes',
        exp_minsait_company: 'Minsait (Indra Group)',
        exp_minsait_period: 'Nov 2025 - Mai 2026',
        exp_minsait_context: 'Suport d\'Infraestructures Crítiques & Macroprojecte CTTI – Sector Sanitari (Metropolitana Sud)',
        exp_minsait_1: 'Administració d\'identitats, comptes d\'usuari i control d\'accessos mitjançant <strong>Active Directory</strong>.',
        exp_minsait_2: 'Gestió de credencials, desbloqueig de comptes i assignació de permisos en entorns ERP <strong>SAP</strong>.',
        exp_minsait_3: 'Assegurament de la continuïtat operativa i la disponibilitat dels sistemes en una infraestructura pública crítica.',
        exp_minsait_4: 'Gestió integral i escalat d\'incidències complexes a través de <strong>BMC Remedy</strong>, complint rigorosament els SLAs del CTTI.',
        exp_minsait_5: 'Suport tècnic especialitzat (Nivell 2) a usuaris finals de l\'ecosistema sanitari públic, optimitzant els temps de resolució.',
        
        // IIS
        exp_iis_role: 'Tècnic de Manteniment Informàtic (Pràctiques)',
        exp_iis_company: 'Institut Indústria Sostenible',
        exp_iis_period: 'Mai 2023 - Nov 2023',
        exp_iis_1: '<strong>Suport en aules:</strong> Reparació i manteniment de projectors, monitors i equips informàtics utilitzats pel professorat.',
        exp_iis_2: '<strong>Diagnòstic de hardware:</strong> Resolució de fallades comunes (fonts d\'alimentació, discs, cables, perifèrics, etc.).',
        exp_iis_3: '<strong>Infraestructura i cablejat:</strong> Organització, etiquetatge i distribució de cablejat de xarxa en aules i racks.',
        exp_iis_4: '<strong>Clonació de sistemes:</strong> Desplegament massiu d\'equips mitjançant <strong>Clonezilla</strong> i restauració d\'imatges.',
        exp_iis_5: '<strong>Instal·lació automatizada:</strong> Configuració i instal·lació de programari educatiu i eines d\'aula mitjançant scripts i paquets preconfigurats.',
        exp_iis_6: '<strong>Manteniment preventiu:</strong> Neteja, revisió i posada a punt d\'equips per garantir la seva disponibilitat diària.',

        stack_title: 'Arsenal Tecnològic',
        stack_cloud_title: 'Cloud, Systems & IAM',
        stack_cloud_1: 'Administració d\'identitats (IAM): <strong>Microsoft Entra ID, Active Directory i Google Workspace</strong>.',
        stack_cloud_2: 'Seguretat perimetral i proxies/DNS amb <strong>Cloudflare</strong>.',
        stack_cloud_3: 'Desplegament serverless de contenidors a <strong>Fly.io</strong>.',
        stack_cloud_4: 'Estàndards d\'Identitat Digital: <strong>W3C DID/VC, GLEIF / vLEI, eIDAS</strong>.',
        stack_virt_title: 'Virtualització & Contenidors',
        stack_virt_1: 'Desplegament i gestió de contenidors amb <strong>Docker</strong>.',
        stack_virt_2: 'Creació de Dockerfiles i orquestració bàsica (Docker Compose).',
        stack_virt_3: 'Virtualització completa amb Proxmox VE i VirtualBox.',
        stack_virt_4: 'Aïllament d\'entorns de desenvolupament i producció.',
        stack_os_title: 'Sistemes Operatius',
        stack_os_1: 'Administració avançada de servidors Linux (Debian/CentOS).',
        stack_os_2: 'Gestió de dominis Windows Server i Group Policy Objects (GPO).',
        stack_os_3: 'Serveis de Directori: <strong>Active Directory, Samba AD, OpenLDAP</strong>.',
        stack_os_4: 'Hardening de sistemes i gestió de pegats de seguretat.',
        stack_net_title: 'Xarxes & Ciberseguretat',
        stack_net_1: 'Configuració de VLANs, Trunking i Spanning Tree.',
        stack_net_2: 'Enrutament dinàmic (<strong>OSPF, RIP</strong>) i estàtic.',
        stack_net_3: 'Firewalls, Segmentació de Xarxa i Zero-Trust.',
        stack_net_4: 'Polítiques d\'Identitat (IAM) i System Hardening.',
        stack_auto_title: 'Automatització & Codi',
        stack_auto_1: 'Scripting potent: <strong>Bash</strong> (Linux) i <strong>PowerShell</strong> (Windows).',
        stack_auto_2: 'Desenvolupament d\'eines d\'administració amb <strong>Python</strong>.',
        stack_auto_3: 'Gestió de configuració amb <strong>Ansible</strong>.',
        stack_auto_4: 'Control de versions fluid amb <strong>Git / GitHub</strong>.',
        projects_title: 'Laboratori & Projectes',
        proj_solana_badge: 'AUDITORIA BLOCKCHAIN',
        proj_visit_platform: 'Visitar Plataforma',
        proj_solana_desc: 'Eina d\'auditoria i anàlisi forense per rastrejar transaccions en blockchain, identificar patrons sospitosos i verificar la integritat dels actius digitals.',
        proj_tech: 'Tecnologia',
        proj_solana_tech: 'Integració amb RPC de Solana, Python per anàlisi de dades i visualització web.',
        proj_application: 'Aplicació',
        proj_solana_app: 'Detecció d\'anomalies, traçabilitat de fons i auditoria de Smart Contracts.',
        proj_value: 'Valor Professional',
        proj_solana_value: 'Demostració de capacitat per adaptar coneixements de sistemes a tecnologies emergents (Web3).',
        proj_auto_title: 'Suite d\'Automatització',
        proj_auto_desc: 'Scripts desenvolupats per reduir la càrrega operativa: Backups incrementals, provisioning d\'usuaris en AD i monitorització de recursos.',
        proj_view_repo: 'Veure repositori',
        proj_auto_badge: 'AUTOMATITZACIÓ',
        proj_focus_title: 'FocusGuard - Zero-Trust Parental Shield',
        proj_focus_badge: 'SEGURETAT & XARXES',
        proj_focus_desc: 'Solució de seguretat i proxy DNS gestionat. Implementa un filtratge Zero-Trust en temps real per bloquejar amenaces usant Cloudflare Workers i D1.',
        proj_focus_tech: 'Cloudflare Workers, D1 Database',
        proj_focus_app: 'Filtratge DNS en temps real',
        proj_focus_value: 'Arquitectura serverless i seguretat perimetral',
        proj_trujillo_badge: 'IA & ARQUITECTURA SERVERLESS',
        proj_trujillo_title: 'Trujillo AI — Serverless AI Studio & Bot de Discord',
        proj_trujillo_desc: 'Estudi d\'IA generativa i bot de Discord d\'alta velocitat en Cloudflare Workers Edge. Incorpora streaming en temps real (Llama 3.3), memòria persistent KV i defenses perimetrals de grau militar.',
        proj_trujillo_tech: 'Cloudflare Workers Edge, Groq (Llama 3.3 70B), Flux AI, KV Storage, Discord API v10, SSE Streaming',
        proj_trujillo_app: 'Estudi d\'IA generativa, bot de Discord amb comandes slash, raonament profund i generació d\'imatges.',
        proj_trujillo_value: 'Arquitectura de cost zero amb edge caching, rate limiting L1 a RAM i sistema de defensa perimetral de grau militar.',
        edu_title: 'Formación Académica',
        edu_asir_title: 'CFGS Administració de Sistemes Informàtics en Xarxa (Perfil Ciberseguretat) - ASIXc',
        edu_asir_level: 'Grau Superior (ASIX)',
        edu_asir_desc: 'Formació superior especialitzada en administració d\'infraestructures de xarxa i servidors, hardening de sistemes, detecció de vulnerabilitats, seguretat perimetral, tallafocs i polítiques Zero-Trust.',
        edu_smr_title: 'Sistemes Microinformàtics i Xarxes',
        edu_smr_level: 'Grau Mitjà (SMX)',
        edu_smr_desc: 'Fonaments de maquinari, muntatge d\'equips i configuració de xarxes locals.',
        blog_title: 'Blog & Articles',
        blog_coming_soon: 'Aviat nous articles sobre sistemes, xarxes i blockchain.',
        blog_view_all: 'Veure tots els articles',
        blog_page_title: 'Blog & Articles',
        blog_page_subtitle: 'Compartint coneixements sobre administració de sistemes, ciberseguretat i Web3.',
        blog_search_placeholder: 'Buscar articles per títol, tags...',
        contact_title: 'Contacte Professional',
        contact_lets_talk: 'Parlem',
        contact_intro: 'Estic llest per incorporar-me a equips tècnics on pugui aportar els meus coneixements en DevOps, cloud, sistemes i ciberseguretat.',
        form_name: 'Nom',
        form_email: 'Correu electrònic',
        form_message: 'Missatge',
        form_send: 'Enviar Missatge',
        form_success: 'Missatge enviat correctament!',
        form_error: 'Error en enviar. Torna-ho a provar.',
        footer_role: 'DevOps & Systems Engineer | Cybersecurity',
        footer_rights: 'Tots els drets reservats.',
        footer_brand_desc: 'Enginyer Junior de DevOps, Sistemes i Ciberseguretat. Especialitzat en Cloud/IAM, Hardening d\'Infraestructures i Identitat Digital Descentralitzada.',
        footer_status: 'All Systems Operational · Cloudflare Secured',
        footer_nav_title: 'Navegació',
        footer_specs_title: 'Especialitats i Certificació',
        footer_legal_title: 'Legal i Compliment',
        footer_spec_1: 'ASIX i SMX · ITB',
        footer_spec_2: 'Google Workspace & Cloud IAM',
        footer_spec_3: 'W3C DID/VC & vLEI / GLEIF',
        footer_spec_4: 'Linux Security Hardening',
        footer_spec_5: 'Microsoft Entra ID & Active Directory',
        footer_privacy: 'Política de Privacitat',
        footer_terms: 'Termes i Condicions',
        footer_disability: 'Certificat Discapacitat >33%',
        footer_sitemap: 'Sitemap XML',
        footer_ai_indexing: 'AI Indexing (llms.txt)',
        footer_copyright: 'Tots els drets reservats.',
        hero_pill_loc: 'Barcelona / Remot',
        hero_pill_edu: 'ASIX (Sup.) + SMX (Mitjà)',
        hero_pill_disability: 'Discapacitat Oficial >33%',
        mailto_link: 'mailto:alberto@trujillomingorance.com?subject=Contacte%20des%20de%20Portfolio&body=Hola%20Alberto,%0A%0AEl%20meu%20nom%20%C3%A9s%20[El%20teu%20nom]%20i%20m%27agradaria%20contactar%20amb%20tu%20per%20[Assumpte].%0A%0ASalutacions.',
        proj_filter_all: 'Tots els Projectes',
        proj_filter_devops: 'Cloud & DevOps',
        proj_filter_security: 'Ciberseguretat',
        proj_filter_automation: 'Automatització',
        terminal_title: 'Consola Interactiva SysAdmin',
        terminal_hint: 'Fes clic a les suggerències o escriu "help" per veure els comandaments.',
        copy_email: 'Copiar Correu',
        stat_exp: 'Experiència IT & DevOps',
        stat_cloud: 'Serverless & Edge Cloud',
        stat_disability: 'Discapacitat Oficial Certificada',
        stat_uptime: 'Monitorització Edge'
    },
    en: {
        page_title: 'Alberto Trujillo | DevOps & Systems Engineer | Cybersecurity & Cloud/IAM',
        hero_subtitle: 'Systems & Cloud Administrator | Cybersecurity · Microsoft Entra ID / IAM · IT Infrastructure',
        nav_availability: 'Availability',
        nav_experience: 'Experience',
        nav_stack: 'Tech Stack',
        nav_projects: 'Projects',
        nav_education: 'Education',
        nav_blog: 'Blog',
        nav_contact: 'Contact',
        hero_tag1: 'ASIXc + SMR (Higher & Mid Vocational Degrees)',
        hero_tag2: 'Systems Administration, Cloud/IAM & Security',
        hero_tag3: 'Self-Taught & Cybersecurity',
        hero_description: 'Técnico Superior ASIXc especializado en administración de infraestructuras críticas, gestión de identidades y accesos (Microsoft Entra ID, Active Directory), seguridad perimetral y hardening de sistemas. Incorporación inmediata.',
        hero_download_cv: 'Download CV',
        hero_contact: 'Contact Me',
        availability_title: 'Availability and Key Facts',
        avail_bar_2: 'Barcelona / Remote',
        avail_bar_2: 'Barcelona / Remote',
        avail_bar_1: 'Immediate Availability',
        avail_join_status: 'Immediate Availability',
        avail_bar_1: 'Immediate Availability',
        avail_bar_3: 'Disability Quota Eligible (>33%)',
        avail_schedule_text: 'Full schedule adaptability: split shift, rotating shifts, on-call, tech support, or intensive shift as the project requires.',
        avail_mobility_title: 'Geographic Mobility',
        avail_mobility_text: 'Full flexibility for travel and relocation. Complete adaptability to on-site, hybrid, or remote environments.',
        exp_title: 'Professional Experience',
        
        // Attestto
        exp_attestto_role: 'Junior SecOps & Systems Engineer | Cloud/IAM & Security',
        exp_attestto_company: 'Attestto · Part-time',
        exp_attestto_period: 'Jul. 2026 - Sept. 2026 · 2 mos',
        exp_attestto_location: 'Delaware, United States · Remote',
        exp_attestto_context: '',
        exp_attestto_1: 'Colaboré en la protección y gestión de la infraestructura técnica: administración de identidad y nube (Google Workspace/IAM, Cloudflare, GitHub, Fly.io), aplicación de hardening, políticas de mínimo privilegio, respuesta a incidentes y monitorización de seguridad en repositorios. Desarrollo de soporte para estándares de identidad abierta (W3C DID/VC, vLEI).',
        exp_attestto_2: '',
        exp_attestto_3: '',
        exp_attestto_4: '',
        exp_attestto_5: 'Maintaining secure, reliable, and well-documented infrastructure, along with technical support for Spanish-speaking community and localization (<strong>EN↔ES</strong>).',

        

        // Minsait
        exp_minsait_role: 'Systems Support Technician',
        exp_minsait_company: 'Minsait (Indra Group)',
        exp_minsait_period: 'Nov 2025 - May 2026',
        exp_minsait_context: 'Critical Infrastructure Support & CTTI Macroproject – Healthcare Sector (Metropolitana Sud)',
        exp_minsait_1: 'Identity administration, user accounts, and access control via <strong>Active Directory</strong>.',
        exp_minsait_2: 'Credential management, account unlocking, and permissions assignment in <strong>SAP</strong> ERP environments.',
        exp_minsait_3: 'Ensuring operational continuity and systems availability in critical public infrastructure.',
        exp_minsait_4: 'End-to-end management and escalation of complex incidents via <strong>BMC Remedy</strong>, strictly meeting CTTI SLAs.',
        exp_minsait_5: 'Specialized technical support (Level 2) to end users of the public healthcare ecosystem, optimizing resolution times.',
        
        // IIS
        exp_iis_role: 'IT Maintenance Technician (Internship)',
        exp_iis_company: 'Institut Indústria Sostenible',
        exp_iis_period: 'May 2023 - Nov 2023',
        exp_iis_1: '<strong>Classroom support:</strong> Repair and maintenance of projectors, monitors, and IT equipment used by teachers.',
        exp_iis_2: '<strong>Hardware diagnostics:</strong> Resolution of common faults (power supplies, disks, cables, peripherals, etc.).',
        exp_iis_3: '<strong>Infrastructure and cabling:</strong> Organization, labeling, and distribution of network cabling in classrooms and racks.',
        exp_iis_4: '<strong>System cloning:</strong> Mass deployment of computers using <strong>Clonezilla</strong> and image restoration.',
        exp_iis_5: '<strong>Automated installation:</strong> Configuration and installation of educational software and classroom tools using scripts and preconfigured packages.',
        exp_iis_6: '<strong>Preventive maintenance:</strong> Cleaning, review, and tuning of equipment to ensure daily availability.',

        stack_title: 'Technology Arsenal',
        stack_cloud_title: 'Cloud, Systems & IAM',
        stack_cloud_1: 'Identity Administration (IAM): <strong>Microsoft Entra ID, Active Directory, and Google Workspace</strong>.',
        stack_cloud_2: 'Perimeter security, DNS management & proxying via <strong>Cloudflare</strong>.',
        stack_cloud_3: 'Serverless container deployment on <strong>Fly.io</strong>.',
        stack_cloud_4: 'Digital Identity Standards: <strong>W3C DID/VC, GLEIF / vLEI, eIDAS</strong>.',
        stack_virt_title: 'Virtualization & Containers',
        stack_virt_1: 'Container deployment and management with <strong>Docker</strong>.',
        stack_virt_2: 'Creation of Dockerfiles and basic orchestration (Docker Compose).',
        stack_virt_3: 'Full virtualization with Proxmox VE and VirtualBox.',
        stack_virt_4: 'Isolation of development and production environments.',
        stack_os_title: 'Operating Systems',
        stack_os_1: 'Advanced Linux server administration (Debian/CentOS).',
        stack_os_2: 'Windows Server domain management and Group Policy Objects (GPO).',
        stack_os_3: 'Directory Services: <strong>Active Directory, Samba AD, OpenLDAP</strong>.',
        stack_os_4: 'System hardening and security patch management.',
        stack_net_title: 'Networking & Cybersecurity',
        stack_net_1: 'VLAN configuration, Trunking, and Spanning Tree.',
        stack_net_2: 'Dynamic routing (<strong>OSPF, RIP</strong>) and static routing.',
        stack_net_3: 'Firewalls, Network Segmentation, and Zero-Trust Policies.',
        stack_net_4: 'Identity Hardening and IAM Policies.',
        stack_auto_title: 'Automation & Code',
        stack_auto_1: 'Powerful scripting: <strong>Bash</strong> (Linux) and <strong>PowerShell</strong> (Windows).',
        stack_auto_2: 'Development of administration tools with <strong>Python</strong>.',
        stack_auto_3: 'Configuration management with <strong>Ansible</strong>.',
        stack_auto_4: 'Fluid version control with <strong>Git / GitHub</strong>.',
        projects_title: 'Lab & Projects',
        proj_solana_badge: 'BLOCKCHAIN AUDIT',
        proj_visit_platform: 'Visit Platform',
        proj_solana_desc: 'Auditing and forensic analysis tool to track blockchain transactions, identify suspicious patterns, and verify the integrity of digital assets.',
        proj_tech: 'Technology',
        proj_solana_tech: 'Integration with Solana RPC, Python for data analysis and web visualization.',
        proj_application: 'Application',
        proj_solana_app: 'Anomaly detection, fund traceability, and Smart Contracts auditing.',
        proj_value: 'Professional Value',
        proj_solana_value: 'Demonstration of ability to adapt systems knowledge to emerging technologies (Web3).',
        proj_auto_title: 'Automation Suite',
        proj_auto_desc: 'Scripts developed to reduce operational load: Incremental backups, AD user provisioning, and resource monitoring.',
        proj_view_repo: 'View repository',
        proj_auto_badge: 'AUTOMATION',
        proj_focus_title: 'FocusGuard - Zero-Trust Parental Shield',
        proj_focus_badge: 'SECURITY & NETWORKS',
        proj_focus_desc: 'Managed security and DNS proxy solution. Implements real-time Zero-Trust filtering to block threats using Cloudflare Workers and D1.',
        proj_focus_tech: 'Cloudflare Workers, D1 Database',
        proj_focus_app: 'Real-time DNS filtering',
        proj_focus_value: 'Serverless architecture & network perimeter security',
        proj_trujillo_badge: 'AI & SERVERLESS ARCHITECTURE',
        proj_trujillo_title: 'Trujillo AI — Serverless AI Studio & Discord Bot',
        proj_trujillo_desc: 'Generative AI studio and high-speed Discord bot on Cloudflare Workers Edge. Features real-time streaming (Llama 3.3), persistent KV memory, and military-grade perimeter defenses.',
        proj_trujillo_tech: 'Cloudflare Workers Edge, Groq (Llama 3.3 70B), Flux AI, KV Storage, Discord API v10, SSE Streaming',
        proj_trujillo_app: 'Generative AI studio, slash-command Discord bot, deep reasoning, live web search, and image synthesis.',
        proj_trujillo_value: 'Zero-cost edge architecture with CDN caching, in-memory L1 rate limiting, and military-grade firewall.',
        edu_title: 'Academic Education',
        edu_asir_title: 'CFGS Administració de Sistemes Informàtics en Xarxa (Cybersecurity Profile) - ASIXc',
        edu_asir_level: 'Higher Degree (ASIR)',
        edu_asir_desc: 'Higher education specialized in network and server infrastructure administration, system hardening, vulnerability detection, perimeter security, firewalls, and Zero-Trust policies.',
        edu_smr_title: 'Microcomputer Systems and Networks',
        edu_smr_level: 'Intermediate Degree (SMR)',
        edu_smr_desc: 'Hardware fundamentals, PC assembly, and local network configuration.',
        blog_title: 'Blog & Articles',
        blog_coming_soon: 'New articles about systems, networks, and blockchain coming soon.',
        blog_view_all: 'View all articles',
        blog_page_title: 'Blog & Articles',
        blog_page_subtitle: 'Sharing knowledge about systems administration, cybersecurity, and Web3.',
        blog_search_placeholder: 'Search articles by title, tags...',
        contact_title: 'Professional Contact',
        contact_lets_talk: 'Let\'s talk',
        contact_intro: 'I am ready to join technical teams where I can contribute my knowledge in DevOps, cloud, systems, and cybersecurity.',
        form_name: 'Name',
        form_email: 'Email',
        form_message: 'Message',
        form_send: 'Send Message',
        form_success: 'Message sent successfully!',
        form_error: 'Error sending message. Please try again.',
        footer_role: 'DevOps & Systems Engineer | Cybersecurity',
        footer_rights: 'All rights reserved.',
        footer_brand_desc: 'Junior Systems & Cloud Security Engineer. Specialized in Systems Administration, Cloud/IAM, Infrastructure Hardening, and Network Security.',
        footer_status: 'All Systems Operational · Cloudflare Secured',
        footer_nav_title: 'Navigation',
        footer_specs_title: 'Specializations & Certification',
        footer_legal_title: 'Legal & Compliance',
        footer_spec_1: 'ASIXc & SMR · ITB',
        footer_spec_2: 'Google Workspace & Cloud IAM',
        footer_spec_3: 'W3C DID/VC & vLEI / GLEIF',
        footer_spec_4: 'Linux Security Hardening',
        footer_spec_5: 'Microsoft Entra ID & Active Directory',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms & Conditions',
        footer_disability: 'Disability Certificate >33%',
        footer_sitemap: 'Sitemap XML',
        footer_ai_indexing: 'AI Indexing (llms.txt)',
        footer_copyright: 'All rights reserved.',
        hero_pill_loc: 'Barcelona / Remote',
        hero_pill_edu: 'ASIR (Higher) + SMR (Mid)',
        hero_pill_disability: 'Official Disability >33%',
        mailto_link: 'mailto:alberto@trujillomingorance.com?subject=Contact%20from%20Portfolio&body=Hello%20Alberto,%0A%0AMy%20name%20is%20[Your%20Name]%20and%20I%27d%20like%20to%20get%20in%20touch%20regarding%20[Subject].%0A%0ABest%20regards.',
        proj_filter_all: 'All Projects',
        proj_filter_devops: 'Cloud & DevOps',
        proj_filter_security: 'Cybersecurity',
        proj_filter_automation: 'Automation',
        terminal_title: 'Interactive SysAdmin Console',
        terminal_hint: 'Click command suggestions or type "help" to view commands.',
        copy_email: 'Copy Email',
        stat_exp: 'IT & DevOps Experience',
        stat_cloud: 'Serverless & Edge Cloud',
        stat_disability: 'Official Certified Disability',
        stat_uptime: 'Edge Monitoring'
    }
};

export function detectBrowserLanguage() {
    const rawLangs = (navigator.languages && navigator.languages.length) 
        ? navigator.languages 
        : [navigator.language || navigator.userLanguage || 'es'];
        
    for (const l of rawLangs) {
        if (!l) continue;
        const code = l.toLowerCase().split('-')[0];
        if (code === 'ca' || code === 'va') return 'ca';
        if (code === 'en') return 'en';
        if (code === 'es') return 'es';
    }
    return 'es';
}

export function calculateExperience(startYear, startMonth, lang, startLabel) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1-indexed (1 = Jan, 12 = Dec)
    
    let totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1;
    if (totalMonths < 1) totalMonths = 1;
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let durationStr = '';
    
    if (lang === 'en') {
        if (years === 0) {
            durationStr = `${months} ${months === 1 ? 'mo' : 'mos'}`;
        } else if (months === 0) {
            durationStr = `${years} ${years === 1 ? 'yr' : 'yrs'}`;
        } else {
            durationStr = `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${months === 1 ? 'mo' : 'mos'}`;
        }
        return `${startLabel} - Present · ${durationStr}`;
    } else if (lang === 'ca') {
        if (years === 0) {
            durationStr = `${months} ${months === 1 ? 'mes' : 'mesos'}`;
        } else if (months === 0) {
            durationStr = `${years} ${years === 1 ? 'any' : 'anys'}`;
        } else {
            durationStr = `${years} ${years === 1 ? 'any' : 'anys'} i ${months} ${months === 1 ? 'mes' : 'mesos'}`;
        }
        return `${startLabel} - actualitat · ${durationStr}`;
    } else {
        // Spanish (default)
        if (years === 0) {
            durationStr = `${months} ${months === 1 ? 'mes' : 'meses'}`;
        } else if (months === 0) {
            durationStr = `${years} ${years === 1 ? 'año' : 'años'}`;
        } else {
            durationStr = `${years} ${years === 1 ? 'año' : 'años'} y ${months} ${months === 1 ? 'mes' : 'meses'}`;
        }
        return `${startLabel} - actualidad · ${durationStr}`;
    }
}

export function calculateTotalItYears(lang) {
    const now = new Date();
    // Career started in May 2023 at Institut Indústria Sostenible
    const startYear = 2023;
    const startMonth = 5;
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    const years = Math.max(1, Math.floor(totalMonths / 12));
    
    if (lang === 'en') return `+${years} Years`;
    if (lang === 'ca') return `+${years} Anys`;
    return `+${years} Años`;
}

export function applyTranslation(lang) {
    const targetLang = translations[lang] ? lang : 'es';
    document.documentElement.lang = targetLang;
    
    // Dynamically calculate and refresh experience dates to prevent any staleness
    translations.es.exp_attestto_period = calculateExperience(2026, 7, 'es', 'jul. 2026');
    
    translations.es.stat_exp_val = calculateTotalItYears('es');

    translations.ca.exp_attestto_period = calculateExperience(2026, 7, 'ca', 'jul. 2026');
    
    translations.ca.stat_exp_val = calculateTotalItYears('ca');

    translations.en.exp_attestto_period = calculateExperience(2026, 7, 'en', 'Jul. 2026');
    
    translations.en.stat_exp_val = calculateTotalItYears('en');

    document.title = translations[targetLang]['page_title'];

    // Translate standard elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[targetLang][key]) {
            if (translations[targetLang][key].includes('<')) {
                el.innerHTML = translations[targetLang][key];
            } else {
                el.textContent = translations[targetLang][key];
            }
        }
    });

    // Translate placeholder attributes
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[targetLang][key]) {
            el.setAttribute('placeholder', translations[targetLang][key]);
        }
    });

    // Translate href attributes (like mailto templates)
    const hrefElements = document.querySelectorAll('[data-i18n-href]');
    hrefElements.forEach(el => {
        const key = el.getAttribute('data-i18n-href');
        if (translations[targetLang] && translations[targetLang][key]) {
            el.setAttribute('href', translations[targetLang][key]);
        }
    });

    // Update dynamic copyright year (always displays current year dynamically)
    const copyrightYearEl = document.getElementById('copyright-year');
    if (copyrightYearEl) {
        copyrightYearEl.textContent = new Date().getFullYear();
    }

    // Update active state of language switcher buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === targetLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Save language choice
    localStorage.setItem('portfolio_lang', targetLang);

    // Dispatch global event for other modules
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: targetLang } }));
}

export function initI18n() {
    const savedLang = localStorage.getItem('portfolio_lang');
    const autoLang = (savedLang && translations[savedLang]) ? savedLang : detectBrowserLanguage();

    // Attach click handlers to language switcher buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = btn.getAttribute('data-lang');
            if (targetLang) {
                applyTranslation(targetLang);
            }
        });
    });

    applyTranslation(autoLang);
}
