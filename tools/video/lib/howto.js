// Piezas comunes de los videos "cómo se juega" (usa lib/engine.js).
// Cada video arma sus escenas con estas funciones y define window.DURATION y window.render(t).
(function () {
  const { p, put, words, reveal, $ } = V;
  const IMG = (n) => `../../docs/assets/img/${n}.webp`;

  function mk(cls, html = "", parent) {
    const d = document.createElement("div");
    d.className = cls;
    d.innerHTML = html;
    (parent || $("#stage")).appendChild(d);
    return d;
  }
  function pic(name, w, cls = "") {
    const i = document.createElement("img");
    i.className = "c " + cls;
    i.src = IMG(name);
    i.style.width = w + "px";
    $("#stage").appendChild(i);
    return i;
  }
  // Carta recortada a un tamaño fijo.
  function card(name, w, h, cls = "") {
    const d = mk("c card " + cls, `<img src="${IMG(name)}" alt="">`);
    d.style.width = w + "px";
    d.style.height = h + "px";
    return d;
  }
  // Carta que se da vuelta: put(el, { ry: 180 }) muestra el frente.
  function flipCard(back, front, w, h) {
    const d = mk("c flip", `<div class="face back"><img src="${IMG(back)}" alt=""></div><div class="face front"><img src="${IMG(front)}" alt=""></div>`);
    d.style.width = w + "px";
    d.style.height = h + "px";
    return d;
  }
  function text(cls, s) { const d = mk("c " + cls); d.textContent = s; return d; }

  // Visible entre a y b, con entrada y salida suaves.
  const vis = (t, a, b, din = 0.45, dout = 0.45) => Math.min(p(t, a, a + din, "out"), 1 - p(t, b - dout, b, "in"));

  // Encabezado de cada paso: etiqueta, título y bajada.
  function heads(steps, scenes) {
    return steps.map((s, i) => {
      const el = mk("head", `<div class="kick"></div><div class="ttl"></div><div class="sub"></div>`);
      el.querySelector(".kick").textContent = s.k;
      el.querySelector(".ttl").textContent = s.t;
      el.querySelector(".sub").textContent = s.s;
      return { el, kick: el.querySelector(".kick"), w: words(el.querySelector(".ttl")), sub: el.querySelector(".sub"), a: scenes[i][0], b: scenes[i][1] };
    });
  }
  function renderHeads(H, t) {
    H.forEach((h) => {
      const on = t >= h.a - 0.01 && t < h.b;
      h.el.style.visibility = on ? "visible" : "hidden";
      if (!on) return;
      const out = p(t, h.b - 0.45, h.b, "in");
      h.el.style.opacity = 1 - out;
      h.el.style.transform = `translateY(${-out * 40}px)`;
      const k = p(t, h.a, h.a + 0.4, "expo");
      h.kick.style.opacity = k;
      h.kick.style.transform = `translateY(${(1 - k) * 20}px)`;
      reveal(h.w, t, h.a + 0.1, { gap: 0.07, dur: 0.5, dy: 50, blur: 10 });
      const ks = p(t, h.a + 0.45, h.a + 0.95, "expo");
      h.sub.style.opacity = ks;
      h.sub.style.transform = `translateY(${(1 - ks) * 24}px)`;
    });
  }

  // Puntos de avance al pie (uno por paso).
  function progress(scenes, y = 860) {
    const dots = scenes.map(() => mk("dot"));
    return (t) => {
      const first = scenes[0][0], last = scenes[scenes.length - 1][1];
      const op = Math.min(p(t, first, first + 0.4), 1 - p(t, last - 0.4, last, "in"));
      dots.forEach((d, i) => {
        const on = t >= scenes[i][0] && t < scenes[i][1];
        d.classList.toggle("on", on);
        put(d, { x: (i - (dots.length - 1) / 2) * 34, y, s: on ? 1.25 : 1, op });
      });
    };
  }

  // Fila centrada de elementos (chips): devuelve la x de cada uno.
  function row(els, gap = 22) {
    const ws = els.map((e) => e.offsetWidth);
    const total = ws.reduce((a, b) => a + b, 0) + gap * (els.length - 1);
    let x = -total / 2;
    return ws.map((w) => { const cx = x + w / 2; x += w + gap; return cx; });
  }

  // Cierre: caja, datos del juego y dirección.
  function outro(box, boxW, chips, url, a) {
    const b = pic(box, boxW, "shadow");
    b.style.filter = "drop-shadow(0 40px 50px rgba(40,25,10,.35))";
    const cs = chips.map((c) => text("pill", c));
    const u = text("url", url);
    let X = null;
    return (t) => {
      X = X || row(cs);
      const k = p(t, a, a + 0.8, "expo");
      put(b, { y: -220 + (1 - k) * 80, s: 0.9 + k * 0.1 + 0.02 * p(t, a, a + 6, "lin"), op: k });
      cs.forEach((c, i) => { const kc = p(t, a + 0.5 + i * 0.12, a + 1.1 + i * 0.12, "expo"); put(c, { x: X[i], y: 340 + (1 - kc) * 30, op: kc }); });
      const ku = p(t, a + 0.9, a + 1.5, "expo");
      put(u, { y: 520 + (1 - ku) * 30, op: ku });
    };
  }

  window.HT = { IMG, mk, pic, card, flipCard, text, vis, heads, renderHeads, progress, row, outro };
})();
