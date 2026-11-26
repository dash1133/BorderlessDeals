// Mobile menu + demo join forms (no backend yet: shows a thank-you state).
document.querySelector('.menu')?.addEventListener('click', e => {
  const nav = e.target.closest('.nav'); nav.classList.toggle('open');
  e.target.setAttribute('aria-expanded', nav.classList.contains('open'));
});
document.querySelectorAll('form.join').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault(); f.classList.add('sent'); f.querySelector('button').disabled = true;
}));
