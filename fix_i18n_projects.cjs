const fs = require('fs');
let i18n = fs.readFileSync('src/js/i18n.js', 'utf8');

// The previous regex might have replaced ALL proj_solana_desc with the Spanish one.
// Let's manually replace them by order. The order is usually ES, CA, EN.
// But first, let's fix FocusGuard and Open-Sentinel descriptions.

i18n = i18n.replace(/proj_focus_desc: 'Solución de seguridad y proxy DNS gestionado diseñado para familias y pequeños negocios. Implementa un filtrado Zero-Trust en tiempo real para bloquear contenido no deseado y amenazas, desplegado sobre la infraestructura serverless de Cloudflare Workers.',/, "proj_focus_desc: 'Solución de seguridad y proxy DNS gestionado. Implementa un filtrado Zero-Trust en tiempo real para bloquear amenazas usando Cloudflare Workers y D1.',");
i18n = i18n.replace(/proj_focus_desc: 'Solució de seguretat i proxy DNS gestionat dissenyat per a famílies i petits negocis. Implementa un filtratge Zero-Trust en temps real per bloquejar contingut no desitjat i amenaces, desplegat sobre la infraestructura serverless de Cloudflare Workers.',/, "proj_focus_desc: 'Solució de seguretat i proxy DNS gestionat. Implementa un filtratge Zero-Trust en temps real per bloquejar amenaces usant Cloudflare Workers i D1.',");
i18n = i18n.replace(/proj_focus_desc: 'Managed security and DNS proxy solution designed for families and small businesses. Implements real-time Zero-Trust filtering to block unwanted content and threats, deployed on Cloudflare Workers serverless infrastructure.',/, "proj_focus_desc: 'Managed security and DNS proxy solution. Implements real-time Zero-Trust filtering to block threats using Cloudflare Workers and D1.',");

i18n = i18n.replace(/proj_sentinel_desc: '.*',/g, "proj_sentinel_desc: 'Script de securización automatizada para servidores Linux. Aplica hardening, configura firewalls, audita vulnerabilidades y monitoriza los logs del sistema en tiempo real.',");

// Restore ES, CA, EN descriptions for Solana Forensics:
let solanaCount = 0;
i18n = i18n.replace(/proj_solana_desc: '.*',/g, () => {
    solanaCount++;
    if(solanaCount === 1) return "proj_solana_desc: 'Herramienta de auditoría y análisis forense para rastrear transacciones en blockchain, identificar patrones sospechosos y verificar la integridad de los activos digitales.',";
    if(solanaCount === 2) return "proj_solana_desc: 'Eina d\\'auditoria i anàlisi forense per rastrejar transaccions en blockchain, identificar patrons sospitosos i verificar la integritat dels actius digitals.',";
    if(solanaCount === 3) return "proj_solana_desc: 'Auditing and forensic analysis tool to track blockchain transactions, identify suspicious patterns, and verify the integrity of digital assets.',";
    return "proj_solana_desc: '...',";
});

let sentinelCount = 0;
i18n = i18n.replace(/proj_sentinel_desc: '.*',/g, () => {
    sentinelCount++;
    if(sentinelCount === 1) return "proj_sentinel_desc: 'Script de securización automatizada para servidores Linux. Aplica hardening, configura firewalls y monitoriza los logs en tiempo real.',";
    if(sentinelCount === 2) return "proj_sentinel_desc: 'Script de securització automatitzada per a servidors Linux. Aplica hardening, configura tallafocs i monitoritza els logs en temps real.',";
    if(sentinelCount === 3) return "proj_sentinel_desc: 'Automated security script for Linux servers. Applies hardening, configures firewalls, and monitors system logs in real time.',";
    return "proj_sentinel_desc: '...',";
});

let autoCount = 0;
i18n = i18n.replace(/proj_auto_desc: '.*',/g, () => {
    autoCount++;
    if(autoCount === 1) return "proj_auto_desc: 'Scripts desarrollados para reducir la carga operativa: Backups incrementales, provisioning de usuarios en AD y monitorización de recursos.',";
    if(autoCount === 2) return "proj_auto_desc: 'Scripts desenvolupats per reduir la càrrega operativa: Backups incrementals, provisioning d\\'usuaris en AD i monitorització de recursos.',";
    if(autoCount === 3) return "proj_auto_desc: 'Scripts developed to reduce operational load: Incremental backups, AD user provisioning, and resource monitoring.',";
    return "proj_auto_desc: '...',";
});

fs.writeFileSync('src/js/i18n.js', i18n);
