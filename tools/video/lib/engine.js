// Motor mínimo de animación por tiempo: cada video define window.DURATION
// y window.render(t). El renderizador llama a render(t) cuadro por cuadro,
// así el resultado es siempre idéntico (sin depender del reloj).
(function () {
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const ease = {
    lin: (t) => t,
    out: (t) => 1 - Math.pow(1 - t, 3),
    in: (t) => t * t * t,
    inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    expo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    back: (t) => { const c1 = 1.6, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
    bounce: (t) => {
      const n = 7.5625, d = 2.75;
      if (t < 1 / d) return n * t * t;
      if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
      if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
      return n * (t -= 2.625 / d) * t + 0.984375;
    },
  };
  // Progreso de t dentro de [a, b], con curva.
  const p = (t, a, b, e = "out") => ease[e](clamp((t - a) / (b - a)));
  const lerp = (a, b, k) => a + (b - a) * k;
  // Entra en [a, a+din] y sale en [b-dout, b].
  const env = (t, a, b, din = 0.4, dout = 0.4) => Math.min(p(t, a, a + din), 1 - p(t, b - dout, b, "inOut"));

  // Posiciona un elemento con ancla en su centro.
  function put(el, o = {}) {
    const { x = 0, y = 0, s = 1, sx = 1, sy = 1, r = 0, rx = 0, ry = 0, z = 0, op = 1, blur = 0 } = o;
    el.style.transform =
      `translate(-50%,-50%) translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotate(${r}deg) scale(${s * sx},${s * sy})`;
    el.style.opacity = op;
    if ("blur" in o) el.style.filter = blur > 0.05 ? `blur(${blur}px)` : "none";
    el.style.visibility = op <= 0.001 ? "hidden" : "visible";
  }

  // Corta un texto en palabras animables.
  function words(el) {
    const parts = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    return parts.map((w, i) => {
      const s = document.createElement("span");
      s.className = "w";
      s.textContent = w;
      el.appendChild(s);
      if (i < parts.length - 1) el.appendChild(document.createTextNode(" "));
      return s;
    });
  }

  // Revela palabras escalonadas: subida, desenfoque y opacidad.
  function reveal(spans, t, start, { gap = 0.08, dur = 0.5, dy = 60, blur = 14 } = {}) {
    spans.forEach((s, i) => {
      const k = p(t, start + i * gap, start + i * gap + dur, "expo");
      s.style.transform = `translateY(${(1 - k) * dy}px)`;
      s.style.opacity = k;
      s.style.filter = k < 0.99 ? `blur(${(1 - k) * blur}px)` : "none";
    });
  }

  // Generador pseudoaleatorio con semilla (partículas reproducibles).
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  const lang = (new URLSearchParams(location.search).get("lang") || "es").toLowerCase();
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  window.V = { clamp, ease, p, lerp, env, put, words, reveal, rng, lang, $, $$ };
})();
