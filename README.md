# Alberto Trujillo Mingorance

[alberto.trujillomingorance.com](https://alberto.trujillomingorance.com)

Portfolio de **Systems & Cloud Security Engineer**. ASIR (perfil ciberseguridad) + SMR. Barcelona / remoto.

Stack que se enseña en el sitio: Linux, Windows Server, Active Directory, Microsoft Entra ID, Cloudflare, Hardening, Zero-Trust, Cloud/IAM.

## Stack del repo

Vite 6 · JavaScript vanilla · Tailwind CSS 4 · Cloudflare Pages + Pages Function (`/api/contact`).

No hay framework, i18n ni backend más allá del formulario.

```
index.html                 # página
src/css/styles.css         # Tailwind + tokens
src/js/app.js              # terminal, filtros, contacto, nav
functions/api/contact.js   # POST del formulario (Resend)
public/                    # estáticos, CV, cabeceras
```

## Local

Node 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # salida en dist/
```

## Deploy

Push a `main`. Cloudflare Pages ejecuta `npm run build` y publica `dist/`.

Formulario de contacto: secrets `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO` en el dashboard de Pages. Plantilla en `.env.example`.

## Contacto

- Email: [alberto@trujillomingorance.com](mailto:alberto@trujillomingorance.com)
- LinkedIn: [alberto-trujillo-mingorance](https://linkedin.com/in/alberto-trujillo-mingorance-288237266/)
- GitHub: [atrumin16](https://github.com/atrumin16)

MIT.
