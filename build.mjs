// Genera el sitio estático en docs/ a partir de src/. Uso: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync, statSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, GAMES, GAME_ORDER } from "./src/data.mjs";
import es from "./src/i18n/es.mjs";
import fr from "./src/i18n/fr.mjs";
import en from "./src/i18n/en.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, "docs");
const L = { es, fr, en };
const MANIFEST = JSON.parse(readFileSync(join(OUT, "assets/img/manifest.json"), "utf8"));
const CONTENT_IMG = { olympikos: "oly-content", "tour-eiffel": "eif-components", "1812": "arg-gameplay" };
const ACCENT = { olympikos: "var(--oly)", "tour-eiffel": "var(--eif)", "1812": "var(--arg)" };

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Rutas: español en la raíz, francés en /fr/, inglés en /en/ */
const langBase = (lang) => (lang === "es" ? "" : `${lang}/`);
function pathOf(lang, page) {
  const b = langBase(lang);
  if (page === "home") return b;
  if (page === "about" || page === "contact") return `${b}${SITE.slugs[lang][page]}/`;
  if (page.startsWith("game:")) return `${b}${page.slice(5)}/`;
  if (page === "404") return "404.html";
  return b;
}
const depth = (p) => (p.endsWith(".html") ? 0 : p.split("/").filter(Boolean).length);
// La 404 se sirve desde cualquier ruta, así que usa direcciones absolutas.
const rel = (from, to) => (from === "404.html" ? SITE.baseUrl + to : "../".repeat(depth(from)) + to || "./");

/* Imágenes responsivas */
function img(ctx, name, { alt = "", sizes = "100vw", cls = "", eager = false, attrs = "" } = {}) {
  const m = MANIFEST[name];
  if (!m) throw new Error(`Imagen sin optimizar: ${name}`);
  const w = Math.max(...m.widths);
  const h = Math.round(w * m.ratio);
  const src = (x) => rel(ctx.path, `assets/img/${name}-${x}.webp`);
  const srcset = m.widths.map((x) => `${src(x)} ${x}w`).join(", ");
  const mid = m.widths[Math.min(1, m.widths.length - 1)];
  return `<img src="${src(mid)}" srcset="${srcset}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ""} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${attrs ? " " + attrs : ""}>`;
}

function fmtSize(bytes, lang) {
  const n = (bytes / 1e6).toFixed(1);
  return (lang === "en" ? n : n.replace(".", ",")) + " MB";
}

/* Bloques comunes */
function nav(ctx, current) {
  const { t } = ctx.L;
  const link = (page, label) => {
    const p = pathOf(ctx.lang, page);
    return `<li><a href="${rel(ctx.path, p)}"${current === page ? ' aria-current="page"' : ""}>${esc(label)}</a></li>`;
  };
  const items = [
    ...GAME_ORDER.map((g) => link(`game:${g}`, g === "tour-eiffel" ? "Tour Eiffel" : ctx.L.games[g].name)),
    link("about", t.about),
    link("contact", t.contact),
  ].join("");
  const langs = SITE.langs
    .map((l) => `<a href="${rel(ctx.path, pathOf(l, current === "404" ? "home" : current))}" hreflang="${l}" lang="${l}"${l === ctx.lang ? ' aria-current="true"' : ""}>${L[l].short}</a>`)
    .join("");
  const home = rel(ctx.path, pathOf(ctx.lang, "home"));
  return `<header class="nav">
  <div class="nav-bar glass">
    <a class="brand" href="${home}" aria-label="DS4Games">${img(ctx, "logo-ds4", { alt: "", sizes: "40px", eager: true })}<span>DS4Games</span></a>
    <ul class="nav-links">${items}</ul>
    <div class="nav-end">
      <nav class="langs" aria-label="Idioma / Langue / Language">${langs}</nav>
      <a class="btn btn-primary btn-sm" href="${home}#juegos">${esc(t.buy)}</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="sheet" aria-label="${esc(t.menu)}"><span></span><span></span></button>
    </div>
  </div>
  <div class="sheet glass" id="sheet"><ul>${items}</ul><nav class="langs" aria-label="Idioma / Langue / Language">${langs}</nav></div>
</header>`;
}

function regionSelect(ctx, id) {
  const { t } = ctx.L;
  const opts = ["FR", "AR", "INT"].map((r) => `<option value="${r}">${esc(t.regions[r])}</option>`).join("");
  return `<label class="region" for="${id}">${esc(t.regionLabel)} <select id="${id}" data-region>${opts}</select></label>`;
}

function buyBlock(ctx, slug) {
  const { t } = ctx.L;
  const g = GAMES[slug];
  const toyco = g.toycoAR ? `<noscript><p class="buy-note"><a class="link" href="${g.links.AR}" target="_blank" rel="noopener">${esc(t.noJsToyco)}</a></p></noscript>` : "";
  return `<div class="buy" data-buy="${slug}">
  <div class="buy-row">
    <p class="buy-price">${g.price} €</p>
    <a class="btn btn-primary buy-link" href="${g.links.FR || g.store}" target="_blank" rel="noopener">${esc(t.buy)}</a>
    ${regionSelect(ctx, `region-${slug}`)}
  </div>
  <p class="buy-note">${esc(t.shipFR.replace("{eur}", SITE.ship.FR))}</p>${toyco}
</div>`;
}

function footer(ctx) {
  const { t } = ctx.L;
  const p = (page) => rel(ctx.path, pathOf(ctx.lang, page));
  const games = GAME_ORDER.map((g) => `<li><a href="${p(`game:${g}`)}">${esc(ctx.L.games[g].name)}</a></li>`).join("");
  const langs = SITE.langs.map((l) => `<a href="${rel(ctx.path, pathOf(l, "home"))}" hreflang="${l}" lang="${l}">${L[l].label}</a>`).join(" · ");
  return `<footer class="foot"><div class="wrap"><div class="foot-in glass">
  <div class="stack">
    <a class="brand" href="${p("home")}">${img(ctx, "logo-ds4", { alt: "", sizes: "40px" })}<span>DS4Games</span></a>
    <p class="muted">${esc(t.footTagline)}</p>
    ${regionSelect(ctx, "region-foot")}
  </div>
  <div><h4>${esc(t.footGames)}</h4><ul>${games}</ul></div>
  <div><h4>${esc(t.footStudio)}</h4><ul>
    <li><a href="${p("about")}">${esc(t.about)}</a></li>
    <li><a href="${p("contact")}">${esc(t.contact)}</a></li>
    <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
    <li><a href="${SITE.social.instagram}" target="_blank" rel="noopener">Instagram</a> · <a href="${SITE.social.facebook}" target="_blank" rel="noopener">Facebook</a> · <a href="${SITE.social.youtube}" target="_blank" rel="noopener">YouTube</a></li>
  </ul></div>
  <div class="fine"><span>${esc(t.rights)} ${esc(SITE.city)}</span><span>${langs}</span></div>
</div></div></footer>`;
}

function config(ctx) {
  const { t } = ctx.L;
  const games = Object.fromEntries(Object.entries(GAMES).map(([k, g]) => [k, { price: g.price, store: g.store, links: g.links, toycoAR: !!g.toycoAR }]));
  const data = { email: SITE.email, rate: SITE.rate, ship: SITE.ship, games, t: { buy: t.buy, buyToyco: t.buyToyco, approx: t.approx, shipFR: t.shipFR, shipINT: t.shipINT, shipAR: t.shipAR, toycoNote: t.toycoNote } };
  return `<script type="application/json" id="ds4-config">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function layout(ctx, { page, title, description, body, bodyClass = "", ogImage = "oly-box", jsonld = null, preload = "" }) {
  const abs = (p) => SITE.baseUrl + p;
  const alternates = page === "404" ? "" : SITE.langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(pathOf(l, page))}">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${abs(pathOf("es", page))}">`;
  const og = SITE.baseUrl + `assets/img/og-${ogImage}.jpg`;
  const css = rel(ctx.path, "assets/css/site.css");
  return `<!doctype html>
<html lang="${ctx.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#05060b">
${page === "404" ? "" : `<link rel="canonical" href="${abs(ctx.path)}">\n${alternates}`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="DS4Games">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${og}">
<meta property="og:locale" content="${ctx.L.ogLocale}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${rel(ctx.path, "assets/img/favicon.png")}" type="image/png">
<link rel="apple-touch-icon" href="${rel(ctx.path, "assets/img/apple-touch-icon.png")}">
<link rel="stylesheet" href="${css}">
${preload}
<script>document.documentElement.className+=" js"</script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">${esc(ctx.L.t.skip)}</a>
<div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
${nav(ctx, page)}
<main id="main">
${body}
</main>
${footer(ctx)}
${config(ctx)}
<script src="${rel(ctx.path, "assets/js/site.js")}" defer></script>
</body>
</html>
`;
}

/* Portada */
function home(ctx) {
  const { t, home: h, games } = ctx.L;
  const gp = (g) => rel(ctx.path, pathOf(ctx.lang, `game:${g}`));
  const stage = `<div class="stage reveal">
    <a class="s-arg" href="${gp("1812")}" aria-label="1812"><div class="float">${img(ctx, "arg-box", { alt: games["1812"].boxAlt, sizes: "(max-width: 640px) 34vw, 280px", attrs: "data-tilt" })}</div></a>
    <a class="s-oly" href="${gp("olympikos")}" aria-label="Olympikos"><div class="float">${img(ctx, "oly-box", { alt: games.olympikos.boxAlt, sizes: "(max-width: 640px) 44vw, 340px", eager: true, attrs: "data-tilt" })}</div></a>
    <a class="s-eif" href="${gp("tour-eiffel")}" aria-label="Les Secrets de la Tour Eiffel"><div class="float">${img(ctx, "eif-box", { alt: games["tour-eiffel"].boxAlt, sizes: "(max-width: 640px) 32vw, 260px", attrs: "data-tilt" })}</div></a>
  </div>`;

  const tiles = GAME_ORDER.map((slug) => {
    const g = GAMES[slug], c = games[slug];
    const chips = c.chips.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join("");
    return `<article class="tile t-${slug} reveal" style="--accent:${ACCENT[slug]}">
  ${img(ctx, g.tile, { alt: "", cls: "bg", sizes: "(max-width: 1200px) 100vw, 1200px" })}
  <div class="copy">
    <p class="eyebrow">${esc(c.kicker)}</p>
    <h3 class="h2 grad">${esc(c.name)}</h3>
    <p class="lead">${esc(c.tagline)}</p>
    <ul class="chips">${chips}</ul>
    <div class="btns" data-buy="${slug}">
      <a class="btn btn-primary" href="${gp(slug)}">${esc(t.learnMore)}</a>
      <a class="btn btn-glass buy-link" href="${g.links.FR || g.store}" target="_blank" rel="noopener">${esc(t.buy)}</a>
      <p class="price buy-price">${g.price} €</p>
    </div>
  </div>
  <a href="${gp(slug)}" tabindex="-1" aria-hidden="true">${img(ctx, g.box, { alt: "", cls: "box", sizes: "(max-width: 860px) 62vw, 380px", attrs: "data-tilt" })}</a>
</article>`;
  }).join("\n");

  const families = h.families.map((f) => `<div class="card glass reveal"><div class="dots">${f.dots.map((d) => `<i style="--c:${d}"></i>`).join("")}</div><h3 class="h3">${esc(f.title)}</h3><p>${esc(f.text)}</p></div>`).join("");

  const quiz = h.quiz.map((q) => `<fieldset><legend>${esc(q.q)}</legend><div class="opts">${q.opts.map(([v, label]) => `<label><input type="radio" name="${q.name}" value="${v}"><span>${esc(label)}</span></label>`).join("")}</div></fieldset>`).join("");
  const quizTpl = GAME_ORDER.map((slug) => `<template id="quiz-${slug}">${img(ctx, GAMES[slug].box, { alt: "", sizes: "120px" })}<div class="stack" style="gap:6px"><p class="muted">${esc(h.quizResult)}</p><h3 class="h3">${esc(games[slug].name)}</h3><p>${esc(games[slug].tagline)}</p><a class="link arrow" href="${gp(slug)}">${esc(t.learnMore)}</a></div></template>`).join("");

  const body = `
<section class="hero"><div class="wrap">
  <p class="eyebrow" style="color:var(--ink-2)">${esc(h.eyebrow)}</p>
  <h1 class="display" style="margin-top:14px"><span class="grad">${esc(h.h1a)}</span><br><span class="rainbow">${esc(h.h1b)}</span></h1>
  <p class="lead">${esc(h.lead)}</p>
  <div class="btns"><a class="btn btn-primary" href="#juegos">${esc(h.cta1)}</a><a class="btn btn-glass" href="${rel(ctx.path, pathOf(ctx.lang, "about"))}">${esc(h.cta2)}</a></div>
  ${stage}
</div></section>

<section class="section" id="juegos" style="scroll-margin-top:90px"><div class="wrap">
  <div class="head center reveal"><p class="eyebrow">${esc(h.gamesEyebrow)}</p><h2 class="h2 grad">${esc(h.gamesH2)}</h2></div>
  <div class="tiles">${tiles}</div>
</div></section>

<section class="section tight"><div class="wrap">
  <div class="head reveal"><p class="eyebrow">${esc(h.familiesEyebrow)}</p><h2 class="h2 grad">${esc(h.familiesH2)}</h2></div>
  <div class="duo">${families}</div>
</div></section>

<section class="section tight"><div class="wrap">
  <div class="head reveal"><p class="eyebrow">${esc(h.quizEyebrow)}</p><h2 class="h2 grad">${esc(h.quizH2)}</h2></div>
  <form class="quiz glass reveal" data-quiz onsubmit="return false">${quiz}<div class="result" aria-live="polite" data-empty>${esc(h.quizEmpty)}</div></form>
  ${quizTpl}
</div></section>

<section class="section"><div class="wrap story">
  <figure class="reveal">${img(ctx, "team-trio", { alt: h.storyAlt, sizes: "(max-width: 860px) 100vw, 560px" })}</figure>
  <div class="stack reveal"><p class="eyebrow">${esc(h.storyEyebrow)}</p><h2 class="h2 grad">${esc(h.storyH2)}</h2><p class="lead">${esc(h.storyText)}</p><p><a class="link arrow" href="${rel(ctx.path, pathOf(ctx.lang, "about"))}">${esc(h.storyLink)}</a></p></div>
</div></section>`;

  const jsonld = { "@context": "https://schema.org", "@type": "Organization", name: "DS4Games", url: SITE.baseUrl, email: SITE.email, logo: SITE.baseUrl + "assets/img/logo-ds4-480.webp", address: { "@type": "PostalAddress", addressLocality: "Montpellier", addressCountry: "FR" }, sameAs: Object.values(SITE.social) };
  return layout(ctx, { page: "home", title: h.title, description: h.description, body, ogImage: "home", jsonld });
}

/* Página de cada juego */
function gamePage(ctx, slug) {
  const { t } = ctx.L;
  const g = GAMES[slug], c = ctx.L.games[slug];
  const sub = c.sub ? `<p class="sub">${esc(c.sub)}</p>` : "";
  const chips = c.chips.map((x) => `<li>${esc(x)}</li>`).join("");
  const summary = c.summary.map((s) => `<div class="card glass reveal"><h3 class="h3">${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("");
  const steps = c.steps.map((s, i) => `<li class="card glass reveal"><span class="num" aria-hidden="true">${i + 1}</span><h3 class="h3">${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("");
  const special = c.special.map((s) => `<div class="card glass reveal"><h3 class="h3">${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("");
  const levels = g.levels ? `<div class="glass levels reveal" style="margin-top:22px"><table><caption class="sr-only">${esc(c.levelsH3)}</caption><thead><tr>${c.levelsHead.map((x) => `<th scope="col">${esc(x)}</th>`).join("")}</tr></thead><tbody>${g.levels.map(([n, cols, flag, turns]) => `<tr><td>${n}</td><td>${cols}</td><td>${flag ? esc(c.yes) : esc(c.no)}</td><td>${turns}</td></tr>`).join("")}</tbody></table></div>` : "";
  const levelsHead = g.levels ? `<h3 class="h3" style="margin-top:48px">${esc(c.levelsH3)}</h3>` : "";
  const gallery = g.gallery.map(([name, key]) => `<figure>${img(ctx, name, { alt: c.captions[key], sizes: "(max-width: 640px) 78vw, 520px" })}<figcaption>${esc(c.captions[key])}</figcaption></figure>`).join("");
  const content = c.content.map((x) => `<li>${esc(x)}</li>`).join("");
  const pdfs = g.pdfs.map((p) => {
    const size = fmtSize(statSync(join(OUT, "assets/pdf", p.file)).size, ctx.lang);
    return `<a href="${rel(ctx.path, `assets/pdf/${p.file}`)}" target="_blank" rel="noopener"><span class="ico pdf">PDF</span><span>${esc(t.kinds[p.kind])}<small>${size}</small></span><span class="lang">${p.lang}</span></a>`;
  });
  const vids = g.videos.map((v) => `<a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener"><span class="ico vid">▶</span><span>${esc(t.kinds[v.kind])}<small>YouTube</small></span><span class="lang">${v.lang}</span></a>`);
  const credits = c.credits.map(([k, v]) => `<li><span>${esc(k)}</span>&nbsp;<span class="muted">· ${esc(v)}</span></li>`).join("");
  const others = GAME_ORDER.filter((x) => x !== slug).map((x) => `<a class="other glass" href="${rel(ctx.path, pathOf(ctx.lang, `game:${x}`))}">${img(ctx, GAMES[x].box, { alt: "", sizes: "110px" })}<div class="stack" style="gap:6px"><h3 class="h3">${esc(ctx.L.games[x].name)}</h3><p class="muted">${esc(ctx.L.games[x].tagline)}</p></div></a>`).join("");

  const body = `
<section class="ghero">
  ${img(ctx, g.hero, { alt: "", cls: "bg", sizes: "100vw", eager: true })}
  <div class="wrap ghero-grid">
    <div class="panel glass">
      <p class="eyebrow">${esc(c.kicker)}</p>
      <h1 class="display grad${c.name.length > 14 ? " long" : ""}">${esc(c.name)}</h1>
      ${sub}
      <p class="lead">${esc(c.lead)}</p>
      <ul class="chips">${chips}</ul>
      ${c.langNote ? `<p class="muted" style="font-size:15px">${esc(c.langNote)}</p>` : ""}
      ${buyBlock(ctx, slug)}
    </div>
    ${img(ctx, g.box, { alt: c.boxAlt, cls: "boxart", sizes: "(max-width: 900px) 60vw, 420px", eager: true, attrs: "data-tilt" })}
  </div>
</section>

<section class="section tight"><div class="wrap"><div class="cards">${summary}</div></div></section>

<section class="section" id="reglas" style="scroll-margin-top:90px"><div class="wrap">
  <div class="head reveal"><p class="eyebrow">${esc(c.name)}</p><h2 class="h2 grad">${esc(t.howTo)}</h2></div>
  <ol class="cards" style="list-style:none;margin:0;padding:0">${steps}</ol>
</div></section>

<section class="section tight"><div class="wrap">
  <div class="head reveal"><h2 class="h2 grad">${esc(t.keyRules)}</h2></div>
  <div class="rules2">${special}</div>
  ${levelsHead}${levels}
</div></section>

<section class="section tight">
  <div class="wrap"><div class="head reveal"><h2 class="h2 grad">${esc(c.galleryH2)}</h2><p class="lead">${esc(c.galleryLead)}</p></div></div>
  <div class="gallery" tabindex="0" aria-label="${esc(c.galleryH2)}">${gallery}</div>
</section>

<section class="section tight"><div class="wrap split">
  <div class="glass panel-pad stack reveal">
    <h2 class="h3">${esc(t.inBox)}</h2>
    <div style="border-radius:16px;overflow:hidden">${img(ctx, CONTENT_IMG[slug], { alt: c.contentImgAlt, sizes: "(max-width: 860px) 100vw, 560px" })}</div>
    <ul class="list">${content}</ul>
  </div>
  <div class="stack" style="gap:22px">
    <div class="glass panel-pad stack reveal" id="descargas">
      <h2 class="h3">${esc(t.downloads)}</h2>
      <p class="muted">${esc(t.downloadsLead)}</p>
      <div class="dl">${[...pdfs, ...vids].join("")}</div>
    </div>
    <div class="glass panel-pad stack reveal">
      <h2 class="h3">${esc(t.credits)}</h2>
      <ul class="list">${credits}</ul>
      ${c.thanks ? `<p class="muted">${esc(c.thanks)}</p>` : ""}
    </div>
  </div>
</div></section>

<section class="section tight"><div class="wrap">
  <div class="head reveal"><h2 class="h3">${esc(t.otherGames)}</h2></div>
  <div class="others">${others}</div>
</div></section>`;

  const jsonld = {
    "@context": "https://schema.org", "@type": "Product", name: c.name, description: c.description,
    image: SITE.baseUrl + `assets/img/og-${slug}.jpg`, brand: { "@type": "Brand", name: "DS4Games" },
    offers: { "@type": "Offer", price: String(g.price), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: SITE.baseUrl + pathOf(ctx.lang, `game:${slug}`) },
  };
  const preload = `<link rel="preload" as="image" href="${rel(ctx.path, `assets/img/${g.hero}-${MANIFEST[g.hero].widths[0]}.webp`)}" imagesrcset="${MANIFEST[g.hero].widths.map((x) => `${rel(ctx.path, `assets/img/${g.hero}-${x}.webp`)} ${x}w`).join(", ")}" imagesizes="100vw">`;
  return layout(ctx, { page: `game:${slug}`, title: c.title, description: c.description, body, bodyClass: `g-${slug}`, ogImage: slug, jsonld, preload });
}

/* Nosotros */
function about(ctx) {
  const a = ctx.L.about;
  const blocks = a.blocks.map((b) => `<div class="card glass reveal"><h2 class="h3">${esc(b.title)}</h2><p>${esc(b.text)}</p></div>`).join("");
  const team = a.team.map(([n, r]) => `<li><span>${esc(n)}</span><span>${esc(r)}</span></li>`).join("");
  const body = `
<section class="hero" style="padding-bottom:0"><div class="wrap center stack">
  <p class="eyebrow">${esc(a.eyebrow)}</p>
  <h1 class="display grad">${esc(a.h1)}</h1>
  <p class="lead">${esc(a.lead)}</p>
</div></section>
<section class="section tight"><div class="wrap photos">
  <figure class="reveal">${img(ctx, "team-trio", { alt: a.photo1Alt, sizes: "(max-width: 640px) 100vw, 590px", eager: true })}</figure>
  <figure class="reveal">${img(ctx, "team-duo", { alt: a.photo2Alt, sizes: "(max-width: 640px) 100vw, 590px" })}</figure>
</div></section>
<section class="section tight"><div class="wrap"><div class="cards">${blocks}</div></div></section>
<section class="section tight"><div class="wrap split">
  <div class="glass panel-pad stack reveal"><h2 class="h3">${esc(a.teamH2)}</h2><ul class="list team">${team}</ul></div>
  <div class="glass panel-pad stack reveal"><h2 class="h3">${esc(a.thanksH2)}</h2><p class="lead" style="font-size:1.1rem">${esc(a.thanks)}</p></div>
</div></section>`;
  return layout(ctx, { page: "about", title: a.title, description: a.description, body, ogImage: "home" });
}

/* Contacto */
function contact(ctx) {
  const c = ctx.L.contact;
  const faq = c.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  const body = `
<section class="hero" style="padding-bottom:0"><div class="wrap center stack">
  <p class="eyebrow">${esc(c.eyebrow)}</p>
  <h1 class="display grad">${esc(c.h1)}</h1>
  <p class="lead">${esc(c.lead)}</p>
</div></section>
<section class="section tight"><div class="wrap split">
  <form class="glass panel-pad form reveal" data-contact novalidate>
    <div class="two">
      <div class="field"><label for="f-name">${esc(c.name)}</label><input id="f-name" name="name" autocomplete="name" required></div>
      <div class="field"><label for="f-email">${esc(c.email)}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
    </div>
    <div class="field"><label for="f-subject">${esc(c.subject)}</label><select id="f-subject" name="subject">${c.subjects.map((s) => `<option>${esc(s)}</option>`).join("")}</select></div>
    <div class="field"><label for="f-message">${esc(c.message)}</label><textarea id="f-message" name="message" required></textarea></div>
    <div class="btns"><button class="btn btn-primary" type="submit">${esc(c.send)}</button></div>
    <p class="muted form-status" role="status" hidden>${esc(c.sent)}</p>
  </form>
  <div class="stack" style="gap:22px">
    <div class="glass panel-pad stack reveal">
      <h2 class="h3">${esc(c.direct)}</h2>
      <p class="lead" style="font-size:1.2rem"><a class="link" href="mailto:${SITE.email}">${SITE.email}</a></p>
      <p class="muted">${esc(SITE.city)}</p>
      <h2 class="h3" style="margin-top:10px">${esc(c.follow)}</h2>
      <div class="btns"><a class="btn btn-glass btn-sm" href="${SITE.social.instagram}" target="_blank" rel="noopener">Instagram</a><a class="btn btn-glass btn-sm" href="${SITE.social.facebook}" target="_blank" rel="noopener">Facebook</a><a class="btn btn-glass btn-sm" href="${SITE.social.youtube}" target="_blank" rel="noopener">YouTube</a></div>
    </div>
    <div class="stack reveal"><h2 class="h3">${esc(c.faqH2)}</h2><div class="faq">${faq}</div></div>
  </div>
</div></section>`;
  return layout(ctx, { page: "contact", title: c.title, description: c.description, body, ogImage: "home" });
}

function notFound(ctx) {
  const n = ctx.L.notFound;
  const body = `<section class="hero" style="min-height:70vh"><div class="wrap center stack"><p class="eyebrow">404</p><h1 class="display grad">${esc(n.h1)}</h1><p class="lead">${esc(n.lead)}</p><div class="btns"><a class="btn btn-primary" href="${SITE.baseUrl}">${esc(n.cta)}</a></div></div></section>`;
  return layout(ctx, { page: "404", title: n.title, description: n.lead, body });
}

/* Escritura */
function write(path, html) {
  const file = path.endsWith(".html") ? join(OUT, path) : join(OUT, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

for (const dir of ["fr", "en", ...GAME_ORDER, "nosotros", "contacto"]) {
  const p = join(OUT, dir);
  if (existsSync(p)) rmSync(p, { recursive: true });
}

const urls = [];
for (const lang of SITE.langs) {
  const mk = (page) => ({ lang, L: L[lang], path: pathOf(lang, page) });
  write(pathOf(lang, "home"), home(mk("home")));
  urls.push(pathOf(lang, "home"));
  for (const slug of GAME_ORDER) {
    write(pathOf(lang, `game:${slug}`), gamePage(mk(`game:${slug}`), slug));
    urls.push(pathOf(lang, `game:${slug}`));
  }
  write(pathOf(lang, "about"), about(mk("about")));
  write(pathOf(lang, "contact"), contact(mk("contact")));
  urls.push(pathOf(lang, "about"), pathOf(lang, "contact"));
}
write("404.html", notFound({ lang: "es", L: es, path: "404.html" }));

writeFileSync(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE.baseUrl}${u}</loc></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE.baseUrl}sitemap.xml\n`);
writeFileSync(join(OUT, ".nojekyll"), "");
console.log(`${urls.length + 1} páginas generadas en docs/`);
