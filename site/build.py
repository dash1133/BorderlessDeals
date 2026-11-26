"""Tiny static build: wraps each _pages/<name>.html body in the shared layout -> <name>.html.
Page files start with a front-matter block:  <!--title: ... | desc: ...-->"""
import pathlib, re
ROOT = pathlib.Path(__file__).parent
NAV = [("index", "Home"), ("brokers", "For Brokers"), ("buyers", "For Buyers & PE"),
       ("providers", "For Providers"), ("how-it-works", "How it works"), ("faq", "FAQ")]
LAYOUT = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title><meta name="description" content="{desc}">
<link rel="icon" href="assets/img/logo.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/site.css"></head>
<body>
<header class="nav"><div class="wrap">
  <a class="brand" href="index.html"><img class="mark" src="assets/img/logo.svg" alt=""><span>BORDERLESS <b>DEALS</b><small>Cross-border M&amp;A, agent-run</small></span></a>
  <nav class="links" aria-label="Main">{links}</nav>
  <button class="menu" aria-expanded="false" aria-label="Open menu">Menu</button>
  <a class="btn btn-primary" href="brokers.html#join">Join as a broker</a>
</div></header>
<main>
{body}
</main>
<footer><div class="wrap">
  <div class="cols">
    <div><a class="brand" href="index.html"><img class="mark" src="assets/img/logo.svg" alt=""><span>BORDERLESS <b>DEALS</b></span></a>
      <p style="color:var(--ink-3);margin-top:12px;max-width:320px">The agent-run marketplace for cross-border M&amp;A. Starting with the US&ndash;India corridor.</p></div>
    <div><h4>Who it's for</h4><a href="brokers.html">Brokers</a><a href="buyers.html">Buyers &amp; private equity</a><a href="providers.html">Service providers</a></div>
    <div><h4>Platform</h4><a href="how-it-works.html">How it works</a><a href="how-it-works.html#gates">Stage gates</a><a href="how-it-works.html#trust">Trust &amp; confidentiality</a></div>
    <div><h4>Company</h4><a href="faq.html">FAQ</a><a href="brokers.html#join">Join</a><a href="index.html#join">Contact</a></div>
  </div>
  <div class="legal"><span>&copy; 2026 Borderless Deals. Built on deal-execution technology from AgenticPM.</span>
  <span>Borderless Deals is a technology and marketplace platform, not a broker-dealer. Brokers on the platform hold their own licences.</span></div>
</div></footer>
<script src="assets/js/site.js"></script>
</body></html>
"""
JOIN = """<section id="join"><div class="wrap"><div class="cta-band">
  <div><div class="eyebrow" style="color:#9DB5FF">{eyebrow}</div><h2>{headline}</h2>
    <p>{sub}</p>
    <ul class="points" style="margin-top:18px"><li style="color:#C9D3EA">Free to join. No percentage of your deal, ever.</li>
    <li style="color:#C9D3EA">You decide what is shown, to whom, and when.</li>
    <li style="color:#C9D3EA">Agents recommend; people decide.</li></ul></div>
  <form class="join" action="#" method="post">
    <label>Full name<input name="name" autocomplete="name" required></label>
    <label>Firm<input name="firm" autocomplete="organization" required></label>
    <label>I am a<select name="role">{options}</select></label>
    <button class="btn btn-primary btn-lg" type="submit">{button}</button>
    <div class="thanks">Thank you. We'll be in touch about the founding cohort.</div>
    <div class="fine">Three fields. No credit card. No spam.</div>
  </form></div></div></section>"""
ROLES = ["Sell-side broker", "Buy-side broker", "Strategic buyer / corp dev", "Private equity", "Service provider", "Other"]
def join_html(attrs):
    a = dict(eyebrow="Founding cohort · US–India corridor", headline="Take your next mandate global.",
             sub="Join the founding brokers, buyers and providers building the first agent-run corridor between the US and India.",
             button="Request my founding seat", role="Sell-side broker")
    a.update(attrs)
    a["options"] = "".join(f"<option{' selected' if r == a['role'] else ''}>{r}</option>" for r in ROLES)
    return JOIN.format(**a)

for src in sorted((ROOT / "_pages").glob("*.html")):
    raw = src.read_text()
    m = re.match(r"<!--(.*?)-->\s*", raw, re.S)
    fm = re.match(r"\s*title:(.*?)\|\s*desc:(.*)", m.group(1), re.S) if m else None
    meta = {"title": fm.group(1).strip(), "desc": fm.group(2).strip()} if fm else {}
    links = "".join(f'<a href="{n}.html"{" aria-current=page" if n == src.stem else ""}>{label}</a>' for n, label in NAV)
    out = LAYOUT.format(title=meta.get("title", "Borderless Deals"), desc=meta.get("desc", ""),
                        links=links, body=re.sub(r"<!--JOIN(.*?)-->", lambda j: join_html(dict(kv.split("=",1) for kv in j.group(1).split(";") if "=" in kv)) , raw[m.end():] if m else raw))
    (ROOT / f"{src.stem}.html").write_text(out)
    print("built", src.stem + ".html")
