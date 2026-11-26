# Borderless Deals: website

Marketing site for **Borderless Deals**, the agent-run marketplace for cross-border M&A, launching with the US–India corridor. The site is built from *Borderless Deals: Concept Memo (Draft v2)*.

| Pass | What | Where |
|---|---|---|
| 1 | Website outline: sections, content, visuals, design guidance and Hormozi offer logic | [`docs/website-outline.md`](docs/website-outline.md) |
| 2 | Animated app-schematic visuals (GIF), one per section | Sources in `visuals/src/*.html`, output in `site/assets/gif/*.gif` |
| 3 | Simple static website (6 pages) | `site/` |

## View the site

Open `site/index.html` in a browser, or serve it locally:

```bash
cd site && python3 -m http.server 8080
```

## Edit pages

Page bodies live in `site/_pages/*.html`. The shared header, footer and join form live in `site/build.py`. After editing, rebuild:

```bash
python3 site/build.py
```

In a page body, `<!--JOIN-->` inserts the join call-to-action band. You can override its copy with `<!--JOIN headline=...;sub=...;button=...;role=...-->`.

## Re-render the GIFs

Each scene is an 800×500 HTML page made of CSS animations, built on the shared kit `visuals/src/_base.css`. `render.js` pauses every animation, steps through it at 12 fps with Playwright, and encodes the frames with ffmpeg.

```bash
cd visuals && node render.js                 # all scenes
```

```bash
cd visuals && node render.js stage-gates     # one scene
```

`visuals/worldmap.py` regenerates the dotted world map used by the map scenes. Still posters of each scene are written to `visuals/posters/`.
