import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { pathToFileURL } from 'node:url';

// Prerender the (Spanish, default) page markup into #app at build time so the first
// paint and crawlers do not have to wait for the JS bundle. app.js only injects the
// markup when #app is empty, so behaviour at runtime is unchanged.
function prerenderMarkup() {
  return {
    name: 'prerender-markup',
    apply: 'build',
    async transformIndexHtml(html, ctx) {
      if (!ctx.filename.endsWith('/index.html') || ctx.filename.endsWith('/admin.html')) return html;
      const { markup } = await import(pathToFileURL(resolve(root, 'src/js/markup.js')).href + '?t=' + Date.now());
      return html.replace('<div id="app"></div>', '<div id="app">' + markup + '</div>');
    },
  };
}

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss(), prerenderMarkup()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://127.0.0.1:8788',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        admin: resolve(root, 'admin.html'),
      },
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  }
});
