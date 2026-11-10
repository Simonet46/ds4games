// Video "cómo se juega" de los juegos Secret Stories (Les Secrets de la Tour Eiffel y 1812).
// Cada HTML llama a secretStories(G) con sus cartas, su código y sus textos.
//   G.rows: 4 filas { color, tall, cards: [imagen x 6] }   G.dreams: 4 cartas de Autor (una por fila)
//   G.code y G.guess: el código secreto y un primer intento   G.sobres: imágenes de los sobres (1812) o nada
//   G.T: textos { how, name, steps[5], hits[5], chips }   G.box, G.url
function secretStories(G) {
  const { p, put, words, reveal } = V;
  const { mk, pic, card, text, vis, heads, renderHeads, progress, outro } = HT;
  const T = G.T;
  const SC = [[3.4, 10.4], [10.4, 18.2], [18.2, 24.6], [24.6, 32.6], [32.6, 39.6]];
  const END = 39.6;
  window.DURATION = 44.6;

  // Intro
  const kick0 = text("kick", T.how);
  const name = text("big", T.name);
  const NW = words(name);
  const box0 = pic(G.box, 600);
  box0.style.filter = "drop-shadow(0 40px 50px rgba(40,25,10,.35))";

  // La mesa: 4 filas de 6 cartas
  const CW = 136, X = (j) => -385 + j * 150, RY = [-230, -40, 85, 210];
  const ch = (r) => (G.rows[r].tall ? 204 : 91);
  const dots = G.rows.map((r) => { const d = mk("c rowdot"); d.style.setProperty("--r", r.color); return d; });
  const grid = G.rows.map((r) => r.cards.map((n) => card(n, CW, r.tall ? 204 : 91)));

  // Los dados
  const dice = G.rows.map((r, i) => { const d = mk("c die" + (i === 2 ? " y" : "")); d.style.setProperty("--r", r.color); return d; });
  const DX = [-255, -85, 85, 255];

  // Las cartas de Autor
  const dreams = G.dreams.map((n) => card(n, 170, 255));
  const dreamDots = G.rows.map((r) => { const d = mk("c rowdot"); d.style.setProperty("--r", r.color); return d; });
  const MX = [-300, -100, 100, 300];

  // El código que dicen los Lectores, las fichas sobre las cartas elegidas y la respuesta del Autor
  const digits = G.rows.map((r, i) => { const d = mk("c digit" + (i === 2 ? " y" : "")); d.style.setProperty("--r", r.color); return d; });
  const toks = G.rows.map((r) => { const d = mk("c tok"); d.style.borderColor = r.color; return d; });
  const hitsN = (code) => code.filter((n, i) => n === G.code[i]).length;
  const h1 = hitsN(G.guess);
  const hitDots = G.sobres ? [] : [0, 1, 2, 3].map(() => mk("c hit"));
  const sobre1 = G.sobres ? pic(G.sobres[h1], 250) : null;
  const sobre2 = G.sobres ? pic(G.sobres[4], 250) : null;
  const lab1 = text("label", T.hits[h1]), lab2 = text("label", T.hits[4]);

  const H = heads(T.steps, SC);
  const prog = progress(SC);
  const out = outro(G.box, G.boxW || 560, T.chips, G.url, END);

  window.render = function (t) {
    // Intro
    const io = vis(t, -1, SC[0][0], 0.4, 0.5);
    put(kick0, { y: -760 + (1 - p(t, 0.1, 0.6, "expo")) * 20, op: p(t, 0.1, 0.6) * io });
    reveal(NW, t, 0.2, { gap: 0.08, dur: 0.55, dy: 60 });
    put(name, { y: T.name.length > 12 ? -590 : -640, op: io });
    put(box0, { y: 160 + (1 - p(t, 0.4, 1.3, "expo")) * 120, s: 0.94 + 0.06 * p(t, 0.4, 3.4, "out"), op: p(t, 0.4, 1.0) * io });

    renderHeads(H, t);
    prog(t);

    const [a1] = SC[0], [a2, b2] = SC[1], [a3, b3] = SC[2], [a4, b4] = SC[3], [a5, b5] = SC[4];
    const go = vis(t, a1, b5, 0.01, 0.45);

    // Fichas sobre las cartas: primer intento en el paso 4, el código correcto en el paso 5.
    const move = p(t, a5 + 0.5, a5 + 1.3, "inOut");
    const win = p(t, a5 + 1.6, a5 + 2.1, "expo");
    const showCode = t >= a2 + 2.5 && t < b2 - 0.5;

    G.rows.forEach((r, i) => {
      const y = RY[i];
      const kr = p(t, a1 + 0.6 + i * 0.32, a1 + 1.1 + i * 0.32, "expo");
      put(dots[i], { x: -490, y, s: kr, op: kr * go });
      grid[i].forEach((c, j) => {
        const k = p(t, a1 + 0.65 + i * 0.32 + j * 0.05, a1 + 1.2 + i * 0.32 + j * 0.05, "expo");
        const target = j === G.code[i] - 1;
        // Paso 2: el Autor ve el código. Paso 5: el código descifrado.
        const hl2 = showCode ? p(t, a2 + 2.5 + i * 0.12, a2 + 2.9 + i * 0.12, "expo") * (1 - p(t, b2 - 0.9, b2 - 0.5)) : 0;
        const hl5 = t >= a5 ? win * (1 - p(t, b5 - 0.4, b5)) : 0;
        const dim = target ? 0 : Math.max(hl2, hl5) * 0.65;
        c.style.setProperty("--k", target ? Math.max(hl2, hl5) : 0);
        c.style.setProperty("--hl", hl5 > 0 ? "#1fa86a" : r.color);
        put(c, { x: X(j), y: y + (1 - k) * 40, s: 1 + (target ? Math.max(hl2, hl5) * 0.06 : 0), op: k * go * (1 - dim) });
        c.style.zIndex = target ? 3 : 1;
      });

      // Dados: ruedan y caen en el código.
      const kd = p(t, a2 + 0.5 + i * 0.12, a2 + 1.0 + i * 0.12, "back");
      const settle = a2 + 1.6 + i * 0.2;
      const roll = t < settle;
      dice[i].textContent = roll ? String(1 + (Math.floor(t * 14 + i * 3) % 6)) : String(G.code[i]);
      const wob = roll ? Math.sin(t * 40 + i) * 12 : 0;
      put(dice[i], { x: DX[i], y: 480 - (roll ? Math.abs(Math.sin(t * 9 + i)) * 30 : 0), r: wob, s: kd * (roll ? 1 : 1 + 0.12 * (1 - p(t, settle, settle + 0.3))), op: Math.min(1, kd * 1.5) * vis(t, a2, b2, 0.01) });

      // Cartas de Autor
      const km = p(t, a3 + 0.6 + i * 0.3, a3 + 1.2 + i * 0.3, "expo");
      const om = vis(t, a3, b3, 0.01);
      put(dreams[i], { x: MX[i], y: 560 + (1 - km) * 120, r: (1 - km) * (i % 2 ? 6 : -6), op: km * om });
      put(dreamDots[i], { x: MX[i], y: 395 + (1 - km) * 60, op: km * om });

      // Código dicho y fichas
      const kg = p(t, a4 + 0.6 + i * 0.25, a4 + 1.0 + i * 0.25, "expo");
      const od = vis(t, a4, b5, 0.01);
      const flipD = p(t, a5 + 0.5 + i * 0.15, a5 + 0.9 + i * 0.15, "inOut");
      digits[i].textContent = String(flipD > 0.5 ? G.code[i] : G.guess[i]);
      put(digits[i], { x: -180 + i * 120, y: 470 + (1 - kg) * 40, sy: Math.abs(Math.cos(flipD * Math.PI)) * 0.96 + 0.04, op: kg * od });
      const j0 = G.guess[i] - 1, j1 = G.code[i] - 1;
      const tx = X(j0) + (X(j1) - X(j0)) * move;
      put(toks[i], { x: tx + 52, y: y - ch(i) / 2 + 6 - (1 - kg) * 50, s: 1 + Math.sin(move * Math.PI) * 0.25, op: kg * od });
      toks[i].style.zIndex = 6;
    });

    // Respuesta del Autor: marcas (Eiffel) o sobre (1812)
    const kh = (i, a) => p(t, a + i * 0.2, a + 0.3 + i * 0.2, "back");
    const o4 = vis(t, a4, b4, 0.01), o5 = vis(t, a5, b5, 0.01, 0.45);
    hitDots.forEach((d, i) => {
      const on4 = i < h1, on5 = t >= a5 + 1.6;
      d.classList.toggle("on", t >= a5 ? on5 : on4 && t >= a4 + 2.0 + i * 0.2);
      const pop = t >= a5 ? kh(i, a5 + 1.6) : (on4 ? kh(i, a4 + 2.0) : 1);
      put(d, { x: -105 + i * 70, y: 640, s: 0.8 + 0.2 * pop, op: p(t, a4 + 1.8, a4 + 2.1) * Math.max(o4, t >= a5 ? o5 : 0) });
    });
    if (sobre1) {
      const ks = p(t, a4 + 2.0, a4 + 2.6, "expo");
      put(sobre1, { y: 700 + (1 - ks) * 80, r: -3, op: ks * o4 * (1 - p(t, a4 + 6.5, a4 + 7.0)) });
      const ks2 = p(t, a5 + 1.6, a5 + 2.2, "expo");
      put(sobre2, { y: 700 + (1 - ks2) * 80, r: 3, op: ks2 * o5 });
    }
    const ly = G.sobres ? 590 : 730;
    put(lab1, { y: ly, op: p(t, a4 + 2.4, a4 + 2.8) * o4 });
    put(lab2, { y: ly, op: p(t, a5 + 2.0, a5 + 2.4) * o5 });

    out(t);
  };
}
