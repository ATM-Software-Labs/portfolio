# Alberto Trujillo Mingorance - Personal Systems & Security Portfolio

> 🛡️ **Ultra-Secure, Zero-Trust Architecture** | ⚡ **Cloudflare Edge Deployed** | 🧠 **Minimalist UI**

Welcome to the source code of my personal portfolio. This project serves not only as my digital resume but also as a demonstration of **Systems Engineering, SecOps, and Frontend Architecture**.

## 🌐 Architecture & Security (OpSec)

This repository enforces strict, military-grade security paradigms to prevent scraping, phishing, and unauthorized code inspection:

- **Strict Content Security Policy (CSP):** Zero-trust external connections. Only whitelisted APIs (Resend API) and CDNs (FontAwesome/Google Fonts) are allowed.
- **Scraping Defenses:** Plaintext emails and contact vectors are obfuscated via dynamic JavaScript assembly.
- **Source Map Blackout:** Built with Vite using 	erser minification and sourcemaps: false to deliberately obscure client-side application logic from trivial inspection.
- **Hydration Bypass:** The core DOM is injected statically to ensure a 100% resilient render even if JavaScript is globally disabled or blocked by aggressive AdBlockers.
- **Zero-Footprint Assets:** CV downloads are strictly protected. Bots cannot scrape the PDF. Access is exclusively granted via a secured Contact API flow.

## 🚀 Tech Stack

- **Frontend:** Vanilla JavaScript, HTML5, CSS3, Tailwind CSS (via Vite Edge).
- **Edge Deployment:** Cloudflare Pages & Workers.
- **Interactions:** Custom interactive Terminal emulator, IntersectionObserver scroll reveals.
- **Backend API:** Serverless integration with Resend API for secure mail transport.

## 🔒 License & Copyright

All rights reserved. The architecture and code design belong to **ATM Software Labs** & Alberto Trujillo Mingorance. Unauthorized duplication or scraping of this repository is strictly prohibited.
