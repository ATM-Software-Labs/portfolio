# Alberto Trujillo Mingorance

[alberto.trujillomingorance.com](https://alberto.trujillomingorance.com)

Ingeniero de sistemas y seguridad cloud. Barcelona / remoto. Incorporación inmediata.

ASIR (perfil ciberseguridad) + SMR. Ex-SecOps en Attestto y Ex-Minsait (Indra). Certificado de discapacidad &gt;33%.

**Áreas:** Cloud/IAM · Hardening · Zero-Trust · Active Directory · Microsoft Entra ID · Cloudflare.

## Este repositorio

Sitio estático en **Vite + JavaScript vanilla + Tailwind CSS**, publicado en **Cloudflare Pages**. El formulario de contacto es una Pages Function (`functions/api/contact.js`).

```
index.html              página
src/css/styles.css      estilos
src/js/                 terminal, filtros, nav, contacto
functions/api/          POST /api/contact
public/                 CV, imágenes, cabeceras
wrangler.toml           salida dist/ → proyecto alberto-portfolio
```

## Local

Node 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploy

Push a `main` (Pages construye y publica) o:

```bash
npm run deploy
```

Secrets del formulario en el dashboard de Pages: `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`. Ver `.env.example`.

## Contacto

[alberto@trujillomingorance.com](mailto:alberto@trujillomingorance.com) · [LinkedIn](https://linkedin.com/in/alberto-trujillo-mingorance-288237266/) · [GitHub](https://github.com/atrumin16)

MIT.
