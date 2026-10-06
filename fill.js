// When the page is opened locally (not built by Amplify), the placeholders
// are still there. Replace them with readable values.
document.querySelectorAll('[data-fill]').forEach(function (el) {
  if (el.textContent.indexOf('__') !== -1) el.textContent = 'local';
});
if (document.body.dataset.env.indexOf('__') !== -1) document.body.dataset.env = 'local';
