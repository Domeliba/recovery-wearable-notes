(function () {
  'use strict';
  const config = window.WHOOP_REFERRAL || {};
  const lang = document.documentElement.lang === 'it' ? 'it' : 'en';
  const validLink = typeof config.url === 'string' && /^https:\/\/join\.whoop\.com\/[A-Za-z0-9]+$/.test(config.url);
  // The working HTML link and translated content remain usable if config fails.
  if (validLink) document.querySelectorAll('.referral').forEach(link => { link.href = config.url; });
  if (typeof config.code === 'string' && config.code) {
    document.querySelectorAll('.referralCode').forEach(node => { node.textContent = config.code; });
  }
  const offer = config.offers && config.offers[lang];
  if (offer) document.querySelectorAll('.offerText').forEach(node => { node.textContent = offer; });
  if (config.lastChecked) document.querySelectorAll('.lastChecked').forEach(node => { node.textContent = config.lastChecked; });
  document.querySelectorAll('.copyCode').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const code = document.querySelector('.referralCode');
      const status = document.getElementById(button.getAttribute('aria-describedby'));
      if (!code || !status) return;
      try {
        await navigator.clipboard.writeText(code.textContent.trim());
        status.textContent = lang === 'it' ? 'Codice copiato.' : 'Code copied.';
      } catch (_) {
        status.textContent = lang === 'it' ? 'Seleziona e copia il codice mostrato qui sopra.' : 'Select and copy the code shown above.';
      }
    });
  });
})();
