// "Descargar CV" opens the PDF on Google Drive directly (matches the 2026-10-05
// production hot-fix "fix: Descargar CV opens Drive PDF directly", which was deployed
// by direct upload and never committed; ported here so git deploys keep it).
const CV_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1Ew6EZ41OLrXEimzHezCG4Q82dLgZfr42';
const CV_VIEW_URL = 'https://drive.google.com/file/d/1Ew6EZ41OLrXEimzHezCG4Q82dLgZfr42/view?usp=sharing';

// eslint-disable-next-line no-unused-vars
export function initCvDownload(_opts) {
  const buttons = document.querySelectorAll('.js-request-cv');
  if (buttons.length === 0) return;

  buttons.forEach((button) => {
    if (button.tagName === 'A') {
      button.setAttribute('href', CV_DOWNLOAD_URL);
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'noopener noreferrer');
      button.setAttribute('download', '');
    }
    button.addEventListener('click', (event) => {
      if (button.tagName === 'A' && button.getAttribute('href')?.startsWith('http')) return;
      event.preventDefault();
      const win = window.open(CV_DOWNLOAD_URL, '_blank');
      if (win) win.opener = null;
      else window.location.href = CV_VIEW_URL;
    });
  });
}
