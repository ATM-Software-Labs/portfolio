export const markup = `
<!-- Back to Top Floating Button -->
    <div class="floating-controls">
        <button id="back-to-top" class="floating-btn hidden" aria-label="Back to Top">
            <i class="fas fa-arrow-up"></i>
        </button>
    </div>

    <!-- Header / Navigation -->
    <header class="site-header glass-nav">
        <div class="container nav-container">
            <a href="#" class="logo" aria-label="Alberto Trujillo - Inicio">
                <span class="logo-icon">AT</span>
                <span class="logo-text">Alberto Trujillo</span>
            </a>

            <!-- Navigation Links -->
            <nav class="main-nav" id="main-nav" aria-label="Navegación principal">
                <div class="mobile-nav-header">
                    <span class="mobile-nav-title">Navegación</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#experiencia"><i class="fas fa-briefcase nav-icon"></i><span data-i18n="nav_experience">Experiencia</span></a></li>
                    <li><a href="#stack"><i class="fas fa-layer-group nav-icon"></i><span data-i18n="nav_stack">Stack Técnico</span></a></li>
                    <li><a href="#proyectos"><i class="fas fa-code-branch nav-icon"></i><span data-i18n="nav_projects">Proyectos</span></a></li>
                    <li><a href="#formacion"><i class="fas fa-graduation-cap nav-icon"></i><span data-i18n="nav_education">Formación</span></a></li>
                    <li><a href="#contacto"><i class="fas fa-envelope nav-icon"></i><span data-i18n="nav_contact">Contacto</span></a></li>
                </ul>
                <div class="mobile-nav-footer">
                    <a href="https://drive.google.com/file/d/1387NS8scWWrC4ZsOjqfbeecrPPXMwrHK/view?usp=sharing" target="_blank" rel="noopener" class="btn btn-primary btn-sm mobile-cv-btn" style="width:100%; justify-content:center; gap:8px;">
                        <i class="fas fa-file-alt" aria-hidden="true"></i>
                        <span data-i18n="btn_cv">Descargar CV</span>
                    </a>
                </div>
            </nav>

            <!-- Header Controls & Actions -->
            <div class="header-actions-wrapper">
                <div class="lang-picker" id="lang-picker">
                    <button type="button" class="lang-picker-btn" id="lang-trigger" aria-haspopup="listbox" aria-expanded="false" aria-label="Idioma">
                        <span id="lang-code">ES</span>
                    </button>
                    <ul class="lang-picker-menu" id="lang-menu" role="listbox" hidden>
                        <li><button type="button" role="option" data-lang="es">Español</button></li>
                        <li><button type="button" role="option" data-lang="ca">Català</button></li>
                        <li><button type="button" role="option" data-lang="en">English</button></li>
                    </ul>
                </div>
                <div class="header-controls desktop-controls">
                    <button class="header-theme-btn theme-toggle-btn" aria-label="Alternar modo oscuro" title="Modo Oscuro / Claro">
                        <i class="fas fa-moon"></i>
                    </button>
                </div>

                <div class="mobile-actions">
                    <button class="header-theme-btn theme-toggle-btn mobile-theme-btn" aria-label="Alternar modo oscuro">
                        <i class="fas fa-moon"></i>
                    </button>
                    <button class="mobile-menu-toggle" aria-label="Abrir menú de navegación" aria-expanded="false">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <div class="hero-gradient"></div>
            <div class="container hero-container">
                <div class="hero-grid">
                    <div class="hero-content">
                        <div class="status-badge scroll-reveal mb-4">
                            <span class="status-pulse"></span>
                            <span data-i18n="avail_join_status">Incorporación Inmediata</span>
                        </div>

                        <h1 class="hero-name scroll-reveal">Alberto Trujillo Mingorance</h1>
                        <p class="hero-description scroll-reveal" style="font-size: 1.1rem; margin-top: 0.5rem; color: var(--text-light);"><a href="https://trujillomingorance.com/sobre-mi" style="color: var(--primary-color);">Alberto Trujillo Mingorance</a>, administrador de sistemas y ciberseguridad en Barcelona. Autor de <a href="https://ai.trujillomingorance.com" style="color: var(--primary-color);">Trujillo AI</a>.</p>
                        <h2 class="hero-subtitle scroll-reveal typing-effect" data-i18n="hero_subtitle">Administrador de sistemas y ciberseguridad</h2>
                        
                        <p class="hero-description scroll-reveal" data-i18n="hero_description">
                            Titulado en ASIR (7,05) y SMR (7,35). Diseño y operación de arquitecturas seguras: plataformas en Cloudflare y el edge, redes con filtrado DNS y Zero-Trust, monitorización con alertas, y administración de identidades.
                        </p>

                        <div class="hero-ctas scroll-reveal">
                            <a href="https://drive.google.com/file/d/1387NS8scWWrC4ZsOjqfbeecrPPXMwrHK/view?usp=sharing" target="_blank" rel="noopener" class="btn btn-primary btn-green" id="btn-request-cv"><i class="fas fa-file-alt" aria-hidden="true"></i> <span data-i18n="btn_cv">Descargar CV</span></a>
                            <a href="#contacto" class="btn btn-outline" data-i18n="hero_contact">Contactar</a>
                        </div>
                    </div>

                    <!-- Executive Profile Summary Card -->
                    <div class="hero-profile-col scroll-reveal">
                        <div class="profile-summary-card">
                            <div class="profile-avatar-wrapper">
                                <img src="/assets/images/Alberto.webp?v=p2" alt="Fotografía profesional de Alberto Trujillo Mingorance - SecOps & Systems Engineer" class="profile-avatar-img">
                                <span class="profile-status-online" title="Disponible para contratación"></span>
                            </div>
                            <p class="profile-card-role" data-i18n="hero_role">Administrador de sistemas y ciberseguridad</p>
                            <div class="profile-meta-pills">
                                <span class="meta-pill"><i class="fas fa-map-marker-alt text-blue"></i> <span data-i18n="hero_pill_loc">Barcelona · Remoto</span></span>
                                <span class="meta-pill"><i class="fas fa-building text-green"></i> <span data-i18n="hero_pill_org">ATM Software Labs</span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Disponibilidad Section -->
        <section id="disponibilidad" class="section-padding scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="availability_title">Disponibilidad y Datos Clave</h2>
                <div class="grid-4 availability-grid">
                    <div class="glass-card">
                        <div class="card-icon blue-icon"><i class="fas fa-universal-access"></i></div>
                        <h3 data-i18n="avail_disability_title">Discapacidad >33%</h3>
                        <p data-i18n="avail_disability_text">Certificado oficial >33%, medidas de fomento del empleo.</p>
                    </div>
                    <div class="glass-card">
                        <div class="card-icon green-icon"><i class="fas fa-calendar-check"></i></div>
                        <h3 data-i18n="avail_join_title">Incorporación Inmediata</h3>
                        <p data-i18n="avail_join_text">Disponibilidad Inmediata para nuevos retos.</p>
                    </div>
                    <div class="glass-card">
                        <div class="card-icon purple-icon"><i class="fas fa-clock"></i></div>
                        <h3 data-i18n="avail_schedule_title">Flexibilidad Horaria</h3>
                        <p data-i18n="avail_schedule_text">Jornada partida, turnos rotativos, guardias.</p>
                    </div>
                    <div class="glass-card">
                        <div class="card-icon indigo-icon"><i class="fas fa-route"></i></div>
                        <h3 data-i18n="avail_mobility_title">Movilidad Geográfica</h3>
                        <p data-i18n="avail_mobility_text">Presencial, híbrido o teletrabajo.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experiencia Section -->
        <section id="experiencia" class="section-padding bg-alt scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="exp_title">Experiencia</h2>
                <div class="timeline">

                    <div class="timeline-item">
                        <div class="timeline-marker indigo-marker"></div>
                        <div class="glass-card job-card border-left-indigo">
                            <div class="job-header">
                                <img src="https://labs.trujillomingorance.com/avatar.png" alt="ATM Software Labs" class="job-logo job-logo-photo">
                                <div class="job-title-wrapper">
                                    <h3 data-i18n="exp_atm_role">Administrador de sistemas y ciberseguridad</h3>
                                    <h4 data-i18n="exp_atm_company">ATM Software Labs</h4>
                                    <div class="job-meta-details">
                                        <span class="job-location"><i class="fas fa-map-marker-alt"></i> <span data-i18n="exp_atm_location">Barcelona, Cataluña, España · En remoto</span></span>
                                    </div>
                                </div>
                                <span class="job-period indigo-badge" data-i18n="exp_atm_period">may. 2026 – actualidad · 5 meses</span>
                            </div>
                            <p class="job-context" data-i18n="exp_atm_context">Laboratorio técnico independiente: investigación aplicada, arquitecturas seguras y pruebas en entornos reales de sistemas y redes.</p>
                            <ul class="job-tasks">
                                <li data-i18n="exp_atm_1">Despliegue de plataformas web sobre infraestructura edge y Cloudflare.</li>
                                <li data-i18n="exp_atm_2">Redes seguras con filtrado DNS y modelo Zero-Trust.</li>
                                <li data-i18n="exp_atm_3">Monitorización continua de sistemas y alertas automatizadas.</li>
                                <li data-i18n="exp_atm_4">Runbooks y guías técnicas de despliegue reproducibles.</li>
                                <li data-i18n="exp_atm_5">Seguridad de sistemas, copias de seguridad y automatización con PowerShell y Bash.</li>
                            </ul>
                            <div class="job-skills-tags">
                                <span class="skill-pill">Cloudflare</span>
                                <span class="skill-pill">Zero-Trust</span>
                                <span class="skill-pill">Filtrado DNS</span>
                                <span class="skill-pill">PowerShell</span>
                                <span class="skill-pill">Bash</span>
                                <span class="skill-pill">Monitorización</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker purple-marker"></div>
                        <div class="glass-card job-card border-left-purple">
                            <div class="job-header">
                                <img src="/assets/images/attestto_logo.jpg?v=p2" alt="Logotipo de Attestto" class="job-logo">
                                <div class="job-title-wrapper">
                                    <h3 data-i18n="exp_attestto_role">Administrador de sistemas y seguridad cloud</h3>
                                    <h4 data-i18n="exp_attestto_company">Attestto · Jornada parcial</h4>
                                    <div class="job-meta-details">
                                        <span class="job-location"><i class="fas fa-map-marker-alt"></i> <span data-i18n="exp_attestto_location">Delaware, Estados Unidos · En remoto</span></span>
                                    </div>
                                </div>
                                <span class="job-period purple-badge" data-i18n="exp_attestto_period">jul. 2026 – sept. 2026 · 3 meses</span>
                            </div>
                            <p class="job-context" data-i18n="exp_attestto_context">Gestión, despliegue y protección de la infraestructura corporativa en la nube.</p>
                            <ul class="job-tasks">
                                <li data-i18n="exp_attestto_1">Administración de identidades y accesos: Google Workspace, Cloudflare, IAM y GitHub.</li>
                                <li data-i18n="exp_attestto_2">Directivas de mínimo privilegio y hardening de entornos.</li>
                                <li data-i18n="exp_attestto_3">Supervisión de la seguridad en repositorios de código y respuesta ante incidencias.</li>
                                <li data-i18n="exp_attestto_4">Mantenimiento de servicios de identidad digital (W3C DID/VC, vLEI y eIDAS) y documentación técnica.</li>
                            </ul>
                            <div class="job-skills-tags">
                                <span class="skill-pill">Google Workspace</span>
                                <span class="skill-pill">Cloudflare</span>
                                <span class="skill-pill">IAM</span>
                                <span class="skill-pill">GitHub</span>
                                <span class="skill-pill">Hardening</span>
                                <span class="skill-pill">Identidad digital</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker blue-marker"></div>
                        <div class="glass-card job-card border-left-blue">
                            <div class="job-header">
                                <img src="/assets/images/minsait_logo.jpeg?v=p2" alt="Logotipo de Minsait" class="job-logo">
                                <div class="job-title-wrapper">
                                    <h3 data-i18n="exp_minsait_role">Técnico de soporte de TI</h3>
                                    <h4 data-i18n="exp_minsait_company">Minsait · Contrato de prácticas</h4>
                                    <div class="job-meta-details">
                                        <span class="job-location"><i class="fas fa-map-marker-alt"></i> <span data-i18n="exp_minsait_location">Barcelona, Cataluña, España · Híbrido</span></span>
                                    </div>
                                </div>
                                <span class="job-period blue-badge" data-i18n="exp_minsait_period">nov. 2025 – may. 2026 · 7 meses</span>
                            </div>
                            <p class="job-context" data-i18n="exp_minsait_context">Soporte técnico remoto en el proyecto Metro Sud, bajo los estándares del CTTI.</p>
                            <ul class="job-tasks">
                                <li data-i18n="exp_minsait_1">Incidencias de software, hardware y conectividad en puestos de trabajo, con acceso remoto.</li>
                                <li data-i18n="exp_minsait_2">Cuentas y permisos de usuario en Directorio Activo.</li>
                                <li data-i18n="exp_minsait_3">Impresoras y periféricos conectados en red.</li>
                                <li data-i18n="exp_minsait_4">Registro, escalado y cierre de peticiones en ticketing, dentro de los SLA.</li>
                            </ul>
                            <div class="job-skills-tags">
                                <span class="skill-pill">Directorio Activo</span>
                                <span class="skill-pill">Soporte remoto</span>
                                <span class="skill-pill">Ticketing</span>
                                <span class="skill-pill">SLA</span>
                                <span class="skill-pill">CTTI</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker green-marker"></div>
                        <div class="glass-card job-card border-left-green">
                            <div class="job-header">
                                <img src="/assets/images/1742933903062.jpeg?v=p2" alt="Logotipo del Institut Indústria Sostenible de Barcelona" class="job-logo">
                                <div class="job-title-wrapper">
                                    <h3 data-i18n="exp_iis_role">Técnico de soporte de equipos informáticos</h3>
                                    <h4 data-i18n="exp_iis_company">Institut Indústria Sostenible de Barcelona · Contrato de prácticas</h4>
                                    <div class="job-meta-details">
                                        <span class="job-location"><i class="fas fa-map-marker-alt"></i> <span data-i18n="exp_iis_location">Carrer de Cristóbal de Moura, 223, Barcelona · Presencial</span></span>
                                    </div>
                                </div>
                                <span class="job-period green-badge" data-i18n="exp_iis_period">may. 2023 – nov. 2023 · 7 meses</span>
                            </div>
                            <p class="job-context" data-i18n="exp_iis_context">Mantenimiento y soporte presencial en el entorno educativo.</p>
                            <ul class="job-tasks">
                                <li data-i18n="exp_iis_1">Despliegue masivo y clonación de imágenes con Clonezilla para aulas y puestos.</li>
                                <li data-i18n="exp_iis_2">Diagnóstico, sustitución y reparación de hardware en ordenadores, impresoras y periféricos.</li>
                                <li data-i18n="exp_iis_3">Cableado estructurado y red local.</li>
                                <li data-i18n="exp_iis_4">Distribución centralizada de software, inventario y renovación del parque.</li>
                            </ul>
                            <div class="job-skills-tags">
                                <span class="skill-pill">Clonezilla</span>
                                <span class="skill-pill">Hardware</span>
                                <span class="skill-pill">Cableado</span>
                                <span class="skill-pill">Inventario</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stack Técnico Section -->
        <section id="stack" class="section-padding scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="stack_title">Arsenal Tecnológico</h2>
                <div class="grid-3 stack-grid">
                    <div class="glass-card">
                        <h3 class="stack-category"><i class="fas fa-cloud purple-icon"></i> <span data-i18n="stack_cloud_title">Cloud e IAM</span></h3>
                        <ul class="stack-list">
                            <li data-i18n="stack_cloud_1">Administración de nube e identidades: Google Workspace / IAM.</li>
                            <li data-i18n="stack_cloud_2">Seguridad perimetral y proxies/DNS con Cloudflare.</li>
                            <li data-i18n="stack_cloud_3">Despliegue serverless de contenedores en Fly.io.</li>
                            <li data-i18n="stack_cloud_4">Estándares de Identidad Digital: W3C DID/VC, GLEIF / vLEI, eIDAS.</li>
                        </ul>
                    </div>
                    <div class="glass-card">
                        <h3 class="stack-category"><i class="fab fa-docker blue-icon"></i> <span data-i18n="stack_virt_title">Virtualización & Contenedores</span></h3>
                        <ul class="stack-list">
                            <li data-i18n="stack_virt_1">Despliegue y gestión de contenedores con Docker.</li>
                            <li data-i18n="stack_virt_2">Creación de Dockerfiles y orquestación básica (Docker Compose).</li>
                            <li data-i18n="stack_virt_3">Virtualización completa con Proxmox VE y VirtualBox.</li>
                            <li data-i18n="stack_virt_4">Aislamiento de entornos de desarrollo y producción.</li>
                        </ul>
                    </div>
                    <div class="glass-card">
                        <h3 class="stack-category"><span class="os-icons"><i class="fab fa-linux"></i><i class="fab fa-windows"></i></span> <span data-i18n="stack_os_title">Sistemas Operativos</span></h3>
                        <ul class="stack-list">
                            <li data-i18n="stack_os_1">Administración avanzada de servidores Linux (Debian/CentOS).</li>
                            <li data-i18n="stack_os_2">Gestión de dominios Windows Server y Group Policy Objects (GPO).</li>
                            <li data-i18n="stack_os_3">Servicios de Directorio: Active Directory, Samba AD, OpenLDAP.</li>
                            <li data-i18n="stack_os_4">Hardening de sistemas y gestión de parches de seguridad.</li>
                        </ul>
                    </div>
                    <div class="glass-card">
                        <h3 class="stack-category"><i class="fas fa-shield-alt orange-icon"></i> <span data-i18n="stack_net_title">Redes, Ciberseguridad & Riesgos</span></h3>
                        <ul class="stack-list">
                            <li data-i18n="stack_net_1">Configuración de VLANs, Trunking y Spanning Tree.</li>
                            <li data-i18n="stack_net_2">Enrutamiento dinámico (OSPF, RIP) y estático.</li>
                            <li data-i18n="stack_net_3">Cortafuegos, VPN y segmentación de la red.</li>
                            <li data-i18n="stack_net_4">Análisis de tráfico y detección de incidentes.</li>
                        </ul>
                    </div>
                    <div class="glass-card">
                        <h3 class="stack-category"><i class="fas fa-terminal indigo-icon"></i> <span data-i18n="stack_auto_title">Automatización & Código</span></h3>
                        <ul class="stack-list">
                            <li data-i18n="stack_auto_1">Scripting potente: Bash (Linux) y PowerShell (Windows).</li>
                            <li data-i18n="stack_auto_2">Desarrollo de herramientas de administración con Python.</li>
                            <li data-i18n="stack_auto_3">Gestión de configuración con Ansible.</li>
                            <li data-i18n="stack_auto_4">Control de versiones fluido con Git / GitHub.</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>

        <!-- Proyectos Section -->
        <section id="proyectos" class="section-padding bg-alt scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="projects_title">Proyectos</h2>

                <!-- Project Category Filters -->
                <div id="project-filters" class="filter-container">
                    <button type="button" class="filter-btn active" data-filter="all" data-i18n="proj_filter_all">Todos los Proyectos</button>
                    <button type="button" class="filter-btn" data-filter="systems" data-i18n="proj_filter_systems">Sistemas y cloud</button>
                    <button type="button" class="filter-btn" data-filter="security" data-i18n="proj_filter_security">Ciberseguridad</button>
                    <button type="button" class="filter-btn" data-filter="automation" data-i18n="proj_filter_automation">Automatización</button>
                </div>

                <p id="project-empty" class="project-empty hidden" data-i18n="proj_empty">No hay proyectos en esta categoría.</p>
<div id="project-grid" class="projects-container">
    <div class="glass-card project-card-mini" data-category="automation"><div class="project-header-mini"><h3 data-i18n="proj_title_atm_tools">
                <i class="fas fa-tools text-sky"></i> ATM Tools
            </h3>
            <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;" data-i18n="proj_desc_atm_tools">Client-Side tool suite oriented towards extreme accessibility. Zero backend, maximum privacy.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="https://tools.trujillomingorance.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Visitar Web" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fas fa-external-link-alt"></i> Visitar</a>
            <a href="https://github.com/ATM-Software-Labs/atm-tools" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver Cdigo" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fab fa-github"></i> Cdigo</a>
        </div>
    </div>

    <div class="glass-card project-card-mini" data-category="security"><div class="project-header-mini"><h3 data-i18n="proj_title_open_sentinel">
                <i class="fas fa-shield-alt text-sky"></i> Open-Sentinel
            </h3>
            <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;" data-i18n="proj_desc_open_sentinel">Open-source, self-hosted PC telemetry, multi-channel boot alerts, and remote forensic control console.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="https://github.com/ATM-Software-Labs/open-sentinel-github" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver Cdigo" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fab fa-github"></i> Cdigo</a>
        </div>
    </div>

    <div class="glass-card project-card-mini" data-category="automation"><div class="project-header-mini"><h3 data-i18n="proj_title_rewrite_ai">
                <i class="fas fa-pen-nib text-sky"></i> Rewrite AI
            </h3>
            <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;" data-i18n="proj_desc_rewrite_ai">Zero-AI Stealth Text Humanizer & Academic Anti-Plagiarism Engine on Cloudflare Edge.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="https://rewrite.trujillomingorance.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Visitar Web" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fas fa-external-link-alt"></i> Visitar</a>
            <a href="https://github.com/ATM-Software-Labs/rewrite-ai" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver Cdigo" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fab fa-github"></i> Cdigo</a>
        </div>
    </div>

    <div class="glass-card project-card-mini" data-category="systems"><div class="project-header-mini"><h3 data-i18n="proj_title_trujillo_ai">
                <i class="fas fa-robot text-sky"></i> Trujillo AI Studio
            </h3>
            <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;" data-i18n="proj_desc_trujillo_ai">Open-source multimodal AI studio and Discord bot on Cloudflare Workers and Groq LPU.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="https://ai.trujillomingorance.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Visitar Web" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fas fa-external-link-alt"></i> Visitar</a>
            <a href="https://github.com/ATM-Software-Labs/trujillo-ai-studio" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver Cdigo" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fab fa-github"></i> Cdigo</a>
        </div>
    </div>

    <div class="glass-card project-card-mini" data-category="systems"><div class="project-header-mini"><h3 data-i18n="proj_title_trujillo_guides">
                <i class="fas fa-book text-sky"></i> Trujillo Guides
            </h3>
            <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;" data-i18n="proj_desc_trujillo_guides">Production engineering runbooks, zero-cost email architecture, and infrastructure guides.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="https://guides.trujillomingorance.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Visitar Web" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fas fa-external-link-alt"></i> Visitar</a>
            <a href="https://github.com/ATM-Software-Labs/trujillo-guides" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver Cdigo" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fab fa-github"></i> Cdigo</a>
        </div>
    </div>

    <div class="glass-card project-card-mini" data-category="security"><div class="project-header-mini"><h3 data-i18n="proj_title_focusguard">
                <i class="fas fa-network-wired text-sky"></i> FocusGuard SaaS
            </h3>
            <p class="project-summary" style="font-size: 0.9rem; line-height: 1.4;" data-i18n="proj_desc_focusguard">DNS-over-HTTPS Zero-Trust Gateway for enterprise edge filtering and telemetry blocking.</p>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="https://focusguard.trujillomingorance.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Visitar Web" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fas fa-external-link-alt"></i> Visitar</a>
            <a href="https://github.com/ATM-Software-Labs/focusguard-saas" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Ver Cdigo" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;"><i class="fab fa-github"></i> Cdigo</a>
        </div>
    </div>
</div>
</div>
</section>

        <!-- Formación Section -->
        <section id="formacion" class="section-padding scroll-reveal">
            <div class="container">
                <h2 class="section-title" data-i18n="edu_title">Formación</h2>
                <div class="grid-2 education-grid">
                    <div class="glass-card border-left-blue edu-card">
                        <img src="/assets/images/itecbcn_logo.jpeg?v=p2" alt="Logotipo oficial de Institut Tecnològic de Barcelona ITB - Alberto Trujillo Mingorance ASIR y SMR" class="edu-logo">
                        <div class="edu-content">
                            <h3 data-i18n="edu_asir_title">CFGS · Administración de Sistemas Informáticos en Red</h3>
                            <h4 data-i18n="edu_asir_level">Ciclo Formativo de Grado Superior</h4>
                            <p class="edu-school">Institut Tecnològic de Barcelona</p>
                            <span class="edu-period">sept. 2024 – jun. 2026</span>
                            <p class="edu-desc" data-i18n="edu_asir_desc">Nota 7,05. Administración, seguridad y alta disponibilidad de sistemas y redes.</p>
                            <ul class="job-tasks edu-tasks">
                                <li data-i18n="edu_asir_1">Linux y Windows Server: servidores, clientes y servicios.</li>
                                <li data-i18n="edu_asir_2">DNS, DHCP, servidores web y transferencia de archivos.</li>
                                <li data-i18n="edu_asir_3">Seguridad perimetral, copias de seguridad y monitorización.</li>
                                <li data-i18n="edu_asir_4">Virtualización y despliegue de infraestructura.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="glass-card border-left-green edu-card">
                        <img src="/assets/images/itecbcn_logo.jpeg?v=p2" alt="Logotipo oficial de Institut Tecnològic de Barcelona ITB - Alberto Trujillo Mingorance ASIR y SMR" class="edu-logo">
                        <div class="edu-content">
                            <h3 data-i18n="edu_smr_title">CFGM · Sistemas microinformáticos y redes</h3>
                            <h4 data-i18n="edu_smr_level">Ciclo Formativo de Grado Medio</h4>
                            <p class="edu-school">Institut Tecnològic de Barcelona</p>
                            <span class="edu-period">sept. 2022 – jun. 2024</span>
                            <p class="edu-desc" data-i18n="edu_smr_desc">Nota 7,35. Instalación, soporte y mantenimiento de equipos y redes locales.</p>
                            <ul class="job-tasks edu-tasks">
                                <li data-i18n="edu_smr_1">Montaje, diagnóstico y reparación de hardware y periféricos.</li>
                                <li data-i18n="edu_smr_2">Cableado estructurado, routers, switches y direccionamiento IP.</li>
                                <li data-i18n="edu_smr_3">Usuarios, permisos y recursos compartidos en Windows y Linux.</li>
                                <li data-i18n="edu_smr_4">Soporte de primer nivel, malware y copias de seguridad locales.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <h3 class="section-subtitle" style="margin-top: 3rem; margin-bottom: 1.5rem; font-size: 1.5rem;">Credenciales Oficiales</h3>
                <div class="grid-1" id="credential-grid">
                    <div class="glass-card border-left-purple edu-card">
                        <img src="/assets/images/microsoft_logo.svg" alt="" class="edu-logo">
                        <div class="edu-content">
                            <h3 data-i18n="edu_entra_title">Microsoft Entra ID (ID: F89C9FFB072C4C9A)</h3>
                            <h4 data-i18n="edu_entra_level">Identities and Access Official Credential</h4>
                            <p class="edu-school">Microsoft Applied Skills</p>
                            <span class="edu-period">2026</span>
                        </div>
                        <a href="https://learn.microsoft.com/en-us/users/albertotrujillomingorance/credentials/F89C9FFB072C4C9A" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm edu-verify">
                            <i class="fas fa-check-circle text-green"></i> Verificar
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- Contacto Section -->
        <section id="contacto" class="section-padding scroll-reveal">
            <div class="container contact-container glass-card padding-0">
                <div class="contact-split">
                    <div class="contact-info bg-gradient-blue">
                        <h2 data-i18n="contact_lets_talk">Hablemos</h2>
                        <p data-i18n="contact_intro">¿Tienes un proyecto en mente o una oportunidad laboral? No dudes en contactarme.</p>
                        
                        

                        <div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
                            <button type="button" id="copy-email" class="btn btn-outline btn-sm copy-email-btn" style="border-color: rgba(255,255,255,0.4); color: white;">
                                <i class="fas fa-envelope"></i> <span data-i18n="copy_email">Copiar Email</span>
                            </button>
                            <a href="https://github.com/atrumin16" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="border-color: rgba(255,255,255,0.4); color: white;">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/albertotrujillomingorance/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="border-color: rgba(255,255,255,0.4); color: white;">
                                <i class="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                    
                    <div class="contact-form-wrapper">
                        <form action="/api/contact" method="POST" class="contact-form" id="contact-form">
                            <!-- Honeypot anti-spam field -->
                            <div style="display:none;" aria-hidden="true">
                                <label for="website">Leave this field blank</label>
                                <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="name" data-i18n="form_name">Nombre</label>
                                <input type="text" id="name" name="name" required class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email" data-i18n="form_email">Email</label>
                                <input type="email" id="email" name="email" required class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="message" data-i18n="form_message">Mensaje</label>
                                <textarea id="message" name="message" rows="5" required class="form-control"></textarea>
                            </div>
                            <div id="contact-turnstile"></div>
                            <button type="submit" class="btn btn-primary" data-i18n="form_send">Enviar Mensaje</button>
                            
                            <div id="form-feedback" class="hidden form-feedback"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Corporate Enterprise Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Col 1: Brand & Executive Summary -->
                <div class="footer-brand-col">
                    <a href="#" class="logo footer-logo">
                        <span class="logo-icon">AT</span>
                        <span class="logo-text">Alberto Trujillo</span>
                    </a>
                    <p class="footer-brand-desc" data-i18n="footer_brand_desc">
                        Ingeniero de SecOps, Sistemas y Ciberseguridad. Especializado en Cloud/IAM, Hardening de Infraestructuras e Identidad Digital Descentralizada.
                    </p>
                    <div class="footer-status-pill">
                        <span class="status-pulse"></span>
                        <span data-i18n="footer_status">All Systems Operational · Cloudflare Secured</span>
                    </div>
                </div>

                <!-- Col 2: Navigation Links -->
                <div class="footer-col">
                    <h4 class="footer-col-title" data-i18n="footer_nav_title">Navegación</h4>
                    <ul class="footer-links">
                        <li><a href="#experiencia" data-i18n="nav_experience">Experiencia</a></li>
                        <li><a href="#stack" data-i18n="nav_stack">Stack Técnico</a></li>
                        <li><a href="#proyectos" data-i18n="nav_projects">Proyectos</a></li>
                        <li><a href="#formacion" data-i18n="nav_education">Formación</a></li>
                        <li><a href="#contacto" data-i18n="nav_contact">Contacto</a></li>
                    </ul>
                </div>

                <!-- Col 3: Specializations & Credentials -->
                <div class="footer-col">
                    <h4 class="footer-col-title" data-i18n="footer_specs_title">Especialidades & Certificación</h4>
                    <ul class="footer-links">
                        <li><span class="footer-text-link" data-i18n="footer_spec_1">ASIR & SMR · ITB</span></li>
                        <li><span class="footer-text-link" data-i18n="footer_spec_2">Google Workspace & Cloud IAM</span></li>
                        <li><span class="footer-text-link" data-i18n="footer_spec_3">W3C DID/VC & vLEI / GLEIF</span></li>
                        <li><span class="footer-text-link" data-i18n="footer_spec_4">Linux Security Hardening</span></li>
                        <li><span class="footer-text-link" data-i18n="footer_spec_5">Análisis Cuantitativo de Riesgos</span></li>
                    </ul>
                </div>

                <!-- Col 4: Legal & Compliance (Enterprise Touch) -->
                <div class="footer-col">
                    <h4 class="footer-col-title" data-i18n="footer_legal_title">Legal & Compliance</h4>
                    <ul class="footer-links">
                        <li><button type="button" class="legal-trigger text-btn" data-modal="privacy" data-i18n="footer_privacy">Política de Privacidad</button></li>
                        <li><button type="button" class="legal-trigger text-btn" data-modal="terms" data-i18n="footer_terms">Términos y Condiciones</button></li>
                        <li><button type="button" class="legal-trigger text-btn" data-modal="compliance" data-i18n="footer_disability">Certificado Discapacidad >33%</button></li>
                        <li><a href="/sitemap.xml" target="_blank" data-i18n="footer_sitemap">Sitemap XML</a></li>
                        <li><a href="/llms.txt" target="_blank" data-i18n="footer_ai_indexing">AI Indexing (llms.txt)</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-legal-copy">
                    <p>&copy; <span id="copyright-year">2026</span> Alberto Trujillo Mingorance. <span data-i18n="footer_copyright">Todos los derechos reservados.</span> <a href="/admin">Editor</a></p>
                </div>
                <div class="footer-social-icons">
                    <a href="https://github.com/atrumin16" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/albertotrujillomingorance/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="#" data-i18n-href="mailto_link" aria-label="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Enterprise Legal Compliance Modal -->
    <div id="legal-modal" class="modal-overlay hidden">
        <div class="modal-card">
            <button type="button" class="modal-close" id="modal-close-btn">&times;</button>
            <div id="modal-content" class="modal-body">
                <!-- Content populated dynamically -->
            </div>
        </div>
    </div>

    <!-- Toast Notification Container -->
    <div id="toast-container" class="toast-container"></div>
`;
