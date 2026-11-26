// Build a single PDF of the website content: cover + every page, animations shown as stills.
// Usage: node tools/make-content-pdf.js   (run `python3 site/build.py` first)
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');

const ROOT = path.join(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const POSTERS = path.join(ROOT, 'visuals', 'posters');
const OUT = path.join(ROOT, 'docs', 'Borderless-Deals-website-content.pdf');
const PAGES = [
  ['index', 'Home', 'Sell to the world.'],
  ['sell-side-brokers', 'Sell-side brokers', 'Persona page'],
  ['buy-side-brokers', 'Buy-side brokers', 'Persona page'],
  ['strategic-buyers', 'Strategic buyers', 'Persona page'],
  ['private-equity', 'Private equity', 'Persona page'],
  ['providers', 'Service providers', 'Supporting page'],
  ['how-it-works', 'How it works', 'Supporting page'],
  ['faq', 'FAQ', 'Supporting page'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  const bodies = [];
  for (const [file, name] of PAGES) {
    await page.goto('file://' + path.join(SITE, file + '.html'));
    const html = await page.evaluate(({ posters }) => {
      const main = document.querySelector('main').cloneNode(true);
      main.querySelectorAll('#join').forEach(n => n.remove());                 // sign-up band appears once, at the end
      main.querySelectorAll('details').forEach(d => d.setAttribute('open', ''));
      main.querySelectorAll('img').forEach(img => {                            // animated GIF -> still poster
        const m = (img.getAttribute('src') || '').match(/gif\/([a-z-]+)\.gif$/);
        if (m) { img.src = 'file://' + posters + '/' + m[1] + '.png'; img.removeAttribute('loading'); }
        else img.src = img.src;                                                // absolutise
      });
      return main.innerHTML;
    }, { posters: POSTERS });
    bodies.push({ file, name, html });
  }
  // keep one sign-up band (from the home page) for the end
  await page.goto('file://' + path.join(SITE, 'index.html'));
  const join = await page.evaluate(({ posters }) => {
    const j = document.querySelector('#join').cloneNode(true);
    j.querySelectorAll('img').forEach(img => { const m = img.getAttribute('src').match(/gif\/([a-z-]+)\.gif$/); if (m) img.src = 'file://' + posters + '/' + m[1] + '.png'; });
    return j.outerHTML;
  }, { posters: POSTERS });

  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const doc = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${SITE}/assets/css/site.css">
<style>
  @page { size: Letter; margin: 0.45in 0.45in 0.55in; }
  body { background:#fff }
  section { padding: 40px 0 !important; }
  .hero, .page-hero { padding: 36px 0 40px !important; }
  .card, .visual, details, .stat, .steps li, .offer, .seat, .compare, .guarantee, .cta-band { break-inside: avoid; }
  h1, h2, h3, .eyebrow { break-after: avoid; }
  .split, .grid3, .grid2, .grid4 { break-inside: avoid; }
  .pagehead { break-before: page; display:flex; justify-content:space-between; align-items:baseline;
    border-bottom: 2px solid var(--ink); padding: 0 24px 10px; margin: 0 0 8px; }
  .pagehead b { font-size: 26px; letter-spacing:-.01em } .pagehead span { color: var(--ink-3); font-size: 15px }
  .cover { height: 1250px; display:flex; flex-direction:column; justify-content:center; padding: 0 80px;
    background: radial-gradient(ellipse 60% 50% at 10% 0%, rgba(31,79,224,.12), transparent 70%),
      linear-gradient(var(--grid) 1px, transparent 1px) 0 0/48px 48px, linear-gradient(90deg, var(--grid) 1px, transparent 1px) 0 0/48px 48px, var(--bg-2); }
  .cover h1 { font-size: 84px; margin: 24px 0 8px } .cover .category { font-size: 30px }
  .cover ol { margin-top: 48px; font-size: 20px; line-height: 2; padding-left: 24px; color: var(--ink-2) }
  .cover .meta { margin-top: 40px; color: var(--ink-3); font-size: 16px }
  .btn { box-shadow:none !important }
</style></head><body>
<div class="cover">
  <div class="brand"><img class="mark" src="file://${SITE}/assets/img/logo.svg" style="width:48px;height:48px"><span style="font-size:24px">BORDERLESS <b>DEALS</b></span></div>
  <h1>Sell to the <span class="hl">world</span>.</h1>
  <p class="category">AI-enabled platform for cross-border M&amp;A.</p>
  <p class="lede" style="font-size:20px;max-width:760px">Website content: every page, in order. The animated visuals are shown as stills.</p>
  <ol>${PAGES.map(([f, n, k]) => `<li><b>${n}</b> <span class="muted">· ${k} · ${f}.html</span></li>`).join('')}</ol>
  <p class="meta">Draft for review · ${date}</p>
</div>
${bodies.map(b => `<div class="pagehead"><b>${b.name}</b><span>${b.file}.html</span></div>${b.html}`).join('\n')}
<div class="pagehead"><b>Sign-up band</b><span>shown at the end of every page</span></div>
${join}
</body></html>`;
  const tmp = path.join(require('os').tmpdir(), 'bd-content.html');
  fs.writeFileSync(tmp, doc);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await page.pdf({ path: OUT, format: 'Letter', printBackground: true, scale: 0.62,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:8px;color:#6B7894;width:100%;padding:0 0.45in;display:flex;justify-content:space-between;font-family:Inter,sans-serif"><span>Borderless Deals · website content · draft</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    margin: { top: '0.45in', bottom: '0.55in', left: '0.45in', right: '0.45in' } });
  await browser.close();
  console.log('wrote', OUT, (fs.statSync(OUT).size / 1024 / 1024).toFixed(1) + ' MB');
})();
