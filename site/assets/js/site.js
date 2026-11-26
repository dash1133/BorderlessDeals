// Mobile menu + demo join forms (no backend yet: shows a thank-you state).
document.querySelector('.menu')?.addEventListener('click', e => {
  const nav = e.target.closest('.nav'); nav.classList.toggle('open');
  e.target.setAttribute('aria-expanded', nav.classList.contains('open'));
});
document.querySelectorAll('form.join').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault(); f.classList.add('sent'); f.querySelector('button').disabled = true;
}));
// Small screens: stacked tables show each cell's column name as a label.
document.querySelectorAll('table.compare').forEach(t => {
  const heads = [...t.querySelectorAll('thead th')].map(th => th.textContent.trim());
  if (!heads.length) return;
  t.classList.add('stack');
  t.querySelectorAll('tbody tr').forEach(tr => [...tr.children].forEach((td, i) => { if (heads[i]) td.dataset.label = heads[i]; }));
});
