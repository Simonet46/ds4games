// Video narrado de una anécdota de Olympikos (usa lib/engine.js, lib/howto.js y lib/anecdotas-textos.js).
//
//   anecdota({ id, img, acc, bg, gaps, quotes, build })   (ver tools/video/olympikos-anecdota-*.html)
//     id: clave en window.ANEC         img: ilustración del deporte (docs/assets/img)
//     acc, bg: color del aro y fondo   gaps: { línea: segundos de silencio después de esa línea } (0,35 s si no se dice)
//     quotes: líneas que son una cita (subtítulo en cursiva)
//     build(ctx) arma las piezas de la anécdota y devuelve scene(t, C): dibuja el cuadro t y puede devolver
//       { shake, blur, zoom } para la ilustración.
//
// La línea de tiempo sale de la duración real de cada audio de voz (ver render.swift): C.cue(i) es el segundo
// en que empieza la línea i y C.end(i) el segundo en que termina.
function anecdota(G) {
  const { p, put, words, reveal, lang } = V;
  const { mk, pic, text, row, IMG } = HT;
  const T = window.ANEC[G.id][lang], UI = window.ANEC_UI[lang], OUT = window.ANEC_OUTRO[lang];
  const n = T.lines.length;
  const stage = document.getElementById("stage");
  stage.style.setProperty("--bg", G.bg);
  stage.style.setProperty("--acc", G.acc);
  document.documentElement.lang = lang;
  window.VOICE = T.lines.map((_, i) => `voz/${G.id}-${lang}-${String(i).padStart(2, "0")}.mp3`).concat(`voz/outro-${lang}.mp3`);

  // Cabecera, título e ilustración
  const kick = text("kick", UI.kick);
  const pill = mk("c spill", "<i></i><span></span>");
  pill.querySelector("span").textContent = T.sport;
  const ttl = mk("c atitle");
  ttl.textContent = T.lines[0][1];
  const TW = words(ttl);
  const photo = mk("c photo", `<img src="${IMG(G.img)}" alt="">`);
  const photoImg = photo.querySelector("img");

  // Piezas propias de la anécdota (debajo de la ilustración)
  const scene = G.build({ T, lang, UI });

  // Subtítulos: uno por línea (la 0 es el título) y el del cierre
  const caps = T.lines.map((l, i) => {
    if (!i) return null;
    const el = mk("c acap" + ((G.quotes || []).includes(i) ? " q" : ""));
    el.textContent = l[1];
    return { el, w: words(el) };
  });
  const ocap = mk("c acap out");
  ocap.textContent = OUT[1];
  const OW = words(ocap);
  const bar = mk("c abar", "<i></i>");
  const barI = bar.querySelector("i");

  // Cierre: libreto, caja, datos y dirección
  const book = pic(lang === "fr" ? "vid-oly-livret-fr-720" : "vid-oly-libreto-es-720", 400);
  book.style.borderRadius = "14px";
  book.style.boxShadow = "0 30px 50px -24px rgba(20,20,30,.55)";
  const box = pic("oly-box-1080", 500);
  box.style.filter = "drop-shadow(0 34px 40px rgba(20,20,30,.35))";
  const chips = UI.chips.map((c) => text("pill", c));
  const url = text("url", "ds4games.com");
  let CX = null;

  // Línea de tiempo
  let C = null;
  window.setup = (durs) => {
    const gap = (i) => (G.gaps && G.gaps[i] != null ? G.gaps[i] : 0.35);
    const cues = [];
    let t = 0.7;
    for (let i = 0; i < n; i++) { cues.push(t); t += durs[i] + gap(i); }
    const outA = t + 0.15;           // empieza el cierre
    cues.push(outA + 0.7);           // voz del cierre
    const END = cues[n] + durs[n] + 2.6;
    window.CUES = cues;
    window.DURATION = END;
    C = {
      n, outA, END,
      cue: (i) => (i >= n ? outA : cues[i]),
      end: (i) => cues[i] + durs[i],
      dur: (i) => durs[i],
      // Avance de 0 a 1 que empieza off segundos después de la línea i.
      k: (t, i, off = 0, d = 0.5, e = "expo") => p(t, C.cue(i) + off, C.cue(i) + off + d, e),
      // Visible desde la línea i hasta la línea j (o hasta el cierre).
      vis: (t, i, j = n, din = 0.35, dout = 0.35) => Math.min(p(t, C.cue(i), C.cue(i) + din, "out"), 1 - p(t, C.cue(j) - dout, C.cue(j), "in")),
    };
  };
  // Sin renderizador (vista previa en el navegador): duración estimada por cantidad de letras.
  const guess = () => window.setup(T.lines.map((l) => l[0].length / 15).concat(OUT[0].length / 15));

  window.render = function (t) {
    if (!C) guess();
    const { outA, END } = C;
    const main = 1 - p(t, outA - 0.45, outA, "in");

    // Cabecera
    const k0 = p(t, 0.05, 0.7, "expo");
    put(kick, { y: -815 + (1 - k0) * 20, op: k0 * main });
    const k1 = p(t, 0.2, 0.8, "expo");
    put(pill, { y: -745 + (1 - k1) * 20, op: k1 * main });
    reveal(TW, t, C.cue(0), { gap: 0.09, dur: 0.55, dy: 50, blur: 10 });
    put(ttl, { y: -585, op: main });

    // Escena propia
    const fx = scene(t, C) || {};

    // Ilustración con un zoom lento
    const kp = p(t, 0.3, 1.3, "expo");
    const sh = fx.shake || 0;
    put(photo, { x: sh ? Math.sin(t * 70) * 14 * sh : 0, y: -185 + (1 - kp) * 80 + (sh ? Math.cos(t * 55) * 8 * sh : 0), s: 0.96 + 0.04 * kp, op: kp * main });
    photoImg.style.transform = `scale(${1.03 + 0.1 * p(t, 0, outA, "lin") + (fx.zoom || 0)})`;
    photoImg.style.filter = fx.blur > 0.05 ? `blur(${fx.blur}px) saturate(${1 + fx.blur * 0.04})` : "none";

    // Subtítulos: las palabras se encienden a medida que la voz las dice
    caps.forEach((c, i) => {
      if (!c) return;
      const a = C.cue(i), b = i + 1 < n ? C.cue(i + 1) : outA - 0.2;
      const op = Math.min(p(t, a - 0.02, a + 0.2, "out"), 1 - p(t, b - 0.24, b - 0.04, "in"));
      put(c.el, { y: 545 + (1 - p(t, a - 0.02, a + 0.4, "expo")) * 24, op: op * main });
      if (op <= 0) return;
      lightWords(c.w, (t - a) / C.dur(i));
    });
    const ko = p(t, C.cue(n) - 0.15, C.cue(n) + 0.25, "expo");
    put(ocap, { y: 255 + (1 - ko) * 24, op: ko });
    lightWords(OW, (t - C.cue(n)) / C.dur(n));

    // Barra de avance
    put(bar, { y: 690, op: k0 * main });
    barI.style.transform = `scaleX(${Math.min(1, t / outA)})`;

    // Cierre
    const kb = p(t, outA, outA + 0.9, "expo");
    put(book, { x: -205, y: -255 + (1 - kb) * 90, r: -7 + (1 - kb) * -6, s: 0.92 + 0.08 * kb, op: kb });
    const kx = p(t, outA + 0.15, outA + 1.05, "expo");
    put(box, { x: 175, y: -215 + (1 - kx) * 90, r: 4 + (1 - kx) * 6, s: 0.92 + 0.08 * kx + 0.02 * p(t, outA, END, "lin"), op: kx });
    CX = CX || row(chips);
    chips.forEach((c, i) => { const kc = p(t, outA + 0.6 + i * 0.12, outA + 1.2 + i * 0.12, "expo"); put(c, { x: CX[i], y: 420 + (1 - kc) * 30, op: kc }); });
    const ku = p(t, outA + 1.0, outA + 1.6, "expo");
    put(url, { y: 570 + (1 - ku) * 30, op: ku });
  };

  // Enciende las palabras según el avance k (0 a 1), repartido por cantidad de letras.
  function lightWords(ws, k) {
    const lens = ws.map((w) => w.textContent.length + 1);
    const tot = lens.reduce((a, b) => a + b, 0);
    let acc = 0;
    ws.forEach((w, j) => {
      const on = p(k * tot * 1.08, acc - 2, acc + lens[j], "lin");
      w.style.opacity = 0.26 + 0.74 * on;
      acc += lens[j];
    });
  }
}

// Utilidades para las escenas
const AN = {
  // Número con separador de miles según el idioma.
  num: (x, lang) => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "fr" ? "\u00a0" : "."),
  // SVG suelto centrado en el escenario.
  svg(w, h, inner) {
    const d = HT.mk("c svg");
    d.innerHTML = `<svg width="${w}" height="${h}" viewBox="${-w / 2} ${-h / 2} ${w} ${h}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
    d.style.width = w + "px";
    d.style.height = h + "px";
    return d;
  },
  stat(big, small, cls = "") {
    const d = HT.mk("c stat " + cls, "<b></b><span></span>");
    d.querySelector("b").textContent = big;
    d.querySelector("span").textContent = small;
    return d;
  },
  // Medalla de oro con su año debajo.
  gold(year, w = 170) {
    const m = HT.pic("oly-medal-4-240", w, "medal");
    const y = HT.text("year", year);
    return { m, y };
  },
  RINGS: { black: "#1a1919", blue: "#3d78ad", yellow: "#e4a758", green: "#43925b", red: "#cc4f5c" },
};
