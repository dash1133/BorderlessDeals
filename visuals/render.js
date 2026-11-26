// Render every scene in visuals/src/*.html to an animated GIF.
// Usage: node render.js [sceneName ...]   (no args = all scenes)
// Each scene sets <body data-ms="8000" style="--T:8s">. All motion is CSS animation;
// we pause every animation and scrub currentTime per frame for a deterministic capture.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');

const SRC = path.join(__dirname, 'src');
const OUT = path.join(__dirname, '..', 'site', 'assets', 'gif');
const POSTER = path.join(__dirname, 'posters');
const FPS = 12;

(async () => {
  const only = process.argv.slice(2);
  const scenes = fs.readdirSync(SRC).filter(f => f.endsWith('.html') && !f.startsWith('_'))
    .map(f => f.replace(/\.html$/, '')).filter(n => !only.length || only.includes(n));
  fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(POSTER, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 500 }, deviceScaleFactor: 2 });
  for (const name of scenes) {
    const tmp = fs.mkdtempSync(path.join(require('os').tmpdir(), `bd-${name}-`));
    await page.goto('file://' + path.join(SRC, name + '.html'));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const ms = await page.evaluate(() => +document.body.dataset.ms || 8000);
    const n = Math.round(ms / 1000 * FPS);
    await page.evaluate(() => document.getAnimations().forEach(a => a.pause()));
    for (let i = 0; i < n; i++) {
      const t = i * 1000 / FPS;
      await page.evaluate(t => document.getAnimations().forEach(a => { a.currentTime = t; }), t);
      await page.screenshot({ path: path.join(tmp, `f${String(i).padStart(4, '0')}.png`) });
    }
    // poster = frame at ~85% (fully built state)
    fs.copyFileSync(path.join(tmp, `f${String(Math.floor(n * 0.85)).padStart(4, '0')}.png`), path.join(POSTER, name + '.png'));
    const gif = path.join(OUT, name + '.gif');
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(tmp, 'f%04d.png'),
      '-vf', 'scale=800:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=160:stats_mode=full[p];[b][p]paletteuse=dither=sierra2_4a',
      '-loop', '0', gif]);
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log(`${name}.gif  ${n} frames  ${(fs.statSync(gif).size / 1024).toFixed(0)} KB`);
  }
  await browser.close();
})();
