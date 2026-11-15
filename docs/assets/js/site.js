/* DS4Games: menú, región de compra, test de juego, animaciones y formulario. Sin dependencias. */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  var cfgEl = doc.getElementById("ds4-config");
  var CFG = cfgEl ? JSON.parse(cfgEl.textContent) : {};
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Navegación: vidrio al hacer scroll y menú del celular */
  var nav = doc.querySelector(".nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    var btn = nav.querySelector(".menu-btn");
    if (btn) {
      var close = function () { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      doc.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
      nav.querySelectorAll(".sheet a").forEach(function (a) { a.addEventListener("click", close); });
    }
  }

  /* Región de compra: Francia, Argentina u otro país */
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function detect() {
    var saved = store("ds4-region");
    if (saved === "FR" || saved === "AR" || saved === "INT") return saved;
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    var langs = (navigator.languages || [navigator.language || ""]).join(",");
    if (/^America\/(Argentina\/|Buenos_Aires|Cordoba|Catamarca|Jujuy|Mendoza|Rosario)/.test(tz) || /es-AR/i.test(langs)) return "AR";
    if (tz === "Europe/Paris" || /^fr/i.test(langs)) return "FR";
    return "INT";
  }
  function ars(eur) {
    var n = Math.round((eur * (CFG.rate || 0)) / 50) * 50;
    try { return n.toLocaleString("es-AR"); } catch (e) { return String(n); }
  }
  function applyRegion(region) {
    doc.querySelectorAll("select[data-region]").forEach(function (s) { s.value = region; });
    doc.querySelectorAll("[data-buy]").forEach(function (el) {
      var g = (CFG.games || {})[el.getAttribute("data-buy")];
      if (!g) return;
      var links = g.links || {};
      var toyco = region === "AR" && g.toycoAR;
      var a = el.querySelector("a.buy-link");
      if (a) {
        // Si la tienda de respaldo está en este mismo dominio, ya no existe (era la de Wix).
        var store = g.store && g.store.indexOf("//" + location.host + "/") < 0 ? g.store : "";
        var href = links[region] || store;
        a.href = href || g.mail;
        a.textContent = toyco ? CFG.t.buyToyco : href ? CFG.t.buy : CFG.t.buyMail;
        if (href) { a.target = "_blank"; a.rel = "noopener"; } else a.removeAttribute("target");
      }
      var price = el.querySelector(".buy-price");
      if (price) {
        price.innerHTML = toyco ? "" : g.price + " €" + (region === "AR" ? "<small>≈ ARS " + ars(g.price) + " " + CFG.t.approx + "</small>" : "");
        price.hidden = !!toyco;
      }
      var note = el.querySelector(".buy-note");
      if (note) {
        var ship = CFG.ship || {};
        note.textContent = toyco ? CFG.t.toycoNote
          : region === "AR" ? CFG.t.shipAR.replace("{eur}", ship.AR).replace("{ars}", ars(ship.AR))
          : region === "FR" ? CFG.t.shipFR.replace("{eur}", ship.FR)
          : CFG.t.shipINT.replace("{eur}", ship.INT);
      }
    });
  }
  var region = detect();
  applyRegion(region);
  doc.querySelectorAll("select[data-region]").forEach(function (s) {
    s.addEventListener("change", function () { region = s.value; store("ds4-region", region); applyRegion(region); });
  });

  /* Test: ¿qué juego es para ustedes? */
  var quiz = doc.querySelector("[data-quiz]");
  if (quiz) {
    var out = quiz.querySelector(".result");
    var score = {
      q1: { two: { olympikos: 1, "1812": 1 }, mid: { "tour-eiffel": 1 }, many: { olympikos: 1, "tour-eiffel": 1 } },
      q2: { compete: { olympikos: 2, "tour-eiffel": 2 }, team: { "1812": 3, "tour-eiffel": 1 } },
      q3: { sport: { olympikos: 3 }, paris: { "tour-eiffel": 3 }, arg: { "1812": 3 } }
    };
    quiz.addEventListener("change", function () {
      var picks = {}, total = { olympikos: 0, "tour-eiffel": 0, "1812": 0 };
      ["q1", "q2", "q3"].forEach(function (q) {
        var c = quiz.querySelector('input[name="' + q + '"]:checked');
        if (c) picks[q] = c.value;
      });
      if (Object.keys(picks).length < 3) return;
      Object.keys(picks).forEach(function (q) {
        var add = score[q][picks[q]] || {};
        Object.keys(add).forEach(function (g) { total[g] += add[g]; });
      });
      var best = Object.keys(total).sort(function (a, b) { return total[b] - total[a]; })[0];
      var tpl = doc.getElementById("quiz-" + best);
      if (tpl && out) {
        out.removeAttribute("data-empty");
        out.innerHTML = tpl.innerHTML;
      }
    });
  }

  /* Aparición suave al hacer scroll */
  var items = doc.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* Inclinación 3D de las cajas con el mouse */
  if (!reduce && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    doc.querySelectorAll("[data-tilt]").forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(900px) rotateY(" + (x * 12).toFixed(2) + "deg) rotateX(" + (-y * 10).toFixed(2) + "deg)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  /* Pestañas de las cartas de Lector (sin JS se ven todas las filas) */
  doc.querySelectorAll("[data-tabs]").forEach(function (box) {
    var tabs = [].slice.call(box.querySelectorAll('[role="tab"]'));
    function show(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab, panel = doc.getElementById(t.getAttribute("aria-controls"));
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        if (on) panel.removeAttribute("data-off"); else panel.setAttribute("data-off", "");
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { show(t); });
      t.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { e.preventDefault(); show(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });
  });

  // Azar con semilla: en línea, las dos pantallas arman la misma mesa y los mismos rivales.
  function seeded(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function newSeed() { return Math.floor(Math.random() * 2147483647); }

  /* Ronda de prueba: el visitante juega como Lector y recibe un sobre con los aciertos */
  doc.querySelectorAll("[data-demo]").forEach(function (form) {
    var D = JSON.parse(form.getAttribute("data-demo"));
    var say = form.querySelector(".dsay"), again = form.querySelector(".dagain");
    var turnEl = form.querySelector(".dturn"), msg = form.querySelector(".dmsg"), log = form.querySelector(".dlog");
    var inputs = [].slice.call(form.querySelectorAll("input[type=radio]"));
    var turn = 1, over = false, last = [];
    // Página Jugar ahora: con data-players="2" juegan dos Lectores en la misma pantalla.
    var P = D.p || {}, cur = 0, winners = [], secret = null;
    function duo() { return !!D.p && form.getAttribute("data-players") === "2"; }
    // En línea (Jugar ahora): data-me dice qué Lector es esta pantalla; cada acción se manda a la otra pantalla
    // y las dos arman la misma mesa con la misma semilla.
    function net() { return duo() && form.hasAttribute("data-me"); }
    function meIdx() { return +form.getAttribute("data-me"); }
    function emit(a) { if (net()) form.dispatchEvent(new CustomEvent("ds4:act", { detail: a })); }
    function who(i) { return (P.reader || "").replace("{n}", i + 1) + (net() && i === meIdx() ? " (" + P.you + ")" : ""); }
    function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
    var rng = Math.random;
    function rnd(n) { return Math.floor(rng() * n); }
    // Mesa nueva: por fila, una carta correcta (con sus cartas de Autor) y cinco cartas al azar del mazo.
    function shuffle(a) { for (var k = a.length - 1; k > 0; k--) { var x = rnd(k + 1), y = a[k]; a[k] = a[x]; a[x] = y; } return a; }
    function deal() {
      if (!D.pool) return;
      var scs = [];
      D.pool.forEach(function (opts, i) {
        var s = rnd(opts.length);
        if (rng === Math.random && opts.length > 1 && s === last[i]) s = (s + 1 + rnd(opts.length - 1)) % opts.length;
        last[i] = s;
        var sc = opts[s];
        var rest = D.deck[i].filter(function (c) { return c[0] !== sc.c; });
        for (var k = rest.length - 1; k > 0; k--) { var x = rnd(k + 1), y = rest[k]; rest[k] = rest[x]; rest[x] = y; }
        var right = D.deck[i].filter(function (c) { return c[0] === sc.c; })[0];
        var cards = rest.slice(0, 5), pos = rnd(6);
        cards.splice(pos, 0, right);
        D.answer[i] = pos + 1;
        var row = form.querySelectorAll(".drow")[i];
        row.querySelectorAll(".dopts label").forEach(function (lab, j) {
          var c = cards[j], im = lab.querySelector("img");
          lab.title = c[1];
          im.removeAttribute("srcset");
          im.src = c[2];
          lab.querySelector(".sr-only").textContent = (j + 1) + ". " + c[1];
        });
        scs[i] = sc;
      });
      // El Autor saca 7 cartas de Autor al azar. En cada ronda juega, para cada fila, la que más evoca la carta
      // correcta, descarta esas y vuelve a llenar la mano.
      var pile = shuffle(D.dd.slice()), used = [], hand = [], plan = scs.map(function () { return []; });
      function draw() {
        while (hand.length < 7) {
          if (!pile.length) { pile = shuffle(used); used = []; }
          if (!pile.length) break;
          hand.push(pile.pop());
        }
      }
      for (var t = 0; t < D.turns; t++) {
        draw();
        // Prueba todas las formas de repartir la mano entre las filas: primero que ninguna fila quede sin pista,
        // después que las pistas sean lo más fuertes posible.
        var best = null;
        (function pick(i, takenH, acc, val) {
          if (i === scs.length) { if (!best || val > best.val) best = { val: val, acc: acc.slice() }; return; }
          hand.forEach(function (c, h) {
            if (takenH.indexOf(h) >= 0 || plan[i].some(function (p) { return p.n === c[0]; })) return;
            var L = scs[i].l[c[0]], v = (L ? 10 + L[0] : 0) + rng() * 0.5;
            acc.push({ h: h, L: L }); takenH.push(h);
            pick(i + 1, takenH, acc, val + v);
            acc.pop(); takenH.pop();
          });
        })(0, [], [], 0);
        if (!best) break;
        best.acc.forEach(function (x, i) {
          var card = hand[x.h];
          used.push(card);
          plan[i].push({ n: card[0], u: card[1], w: x.L ? x.L[1] : D.none });
        });
        hand = hand.filter(function (_, h) { return !best.acc.some(function (x) { return x.h === h; }); });
      }
      scs.forEach(function (_, i) {
        var row = form.querySelectorAll(".drow")[i];
        row.querySelectorAll(".dcard img").forEach(function (im, k) { if (plan[i][k]) { im.removeAttribute("srcset"); im.src = plan[i][k].u; } });
        row.querySelectorAll(".dwhy li").forEach(function (li, k) {
          var im = li.querySelector("img");
          if (!plan[i][k]) return;
          im.removeAttribute("srcset");
          im.src = plan[i][k].u;
          li.querySelector("span").textContent = plan[i][k].w;
        });
      });
      // 2080: los rivales inventan sus códigos (nunca los cuatro correctos).
      if (D.rivals) {
        D.codes = [];
        for (var r = 0; r < D.rivals; r++) {
          var list = [];
          for (var t = 0; t < maxTurns; t++) {
            var cd;
            do { cd = D.answer.map(function () { return 1 + rnd(6); }); } while (cd.every(function (n, i) { return n === D.answer[i]; }));
            list.push(cd);
          }
          D.codes.push(list);
        }
      }
    }
    // Con última oportunidad (Tour Eiffel) hay un intento más después de los turnos con cartas.
    var maxTurns = D.turns + (D.last ? 1 : 0);
    function picks() {
      return D.answer.map(function (_, i) {
        var c = form.querySelector('input[name="r' + i + '"]:checked');
        return c ? +c.value : 0;
      });
    }
    function code(nums) {
      return '<span class="dcode">' + nums.map(function (n, i) { return '<b style="--row:' + D.colors[i] + '">' + n + "</b>"; }).join("") + "</span>";
    }
    function status(keepMsg) {
      turnEl.textContent = turn > D.turns ? D.t.last : D.t.turn.replace("{n}", turn).replace("{total}", D.turns);
      if (duo()) turnEl.textContent += " · " + fill(D.mode === "coop" ? P.decides : P.turnOf, { name: who(cur) });
      var ready = picks().every(Boolean), mine = !net() || cur === meIdx();
      if (net()) inputs.forEach(function (inp) { inp.disabled = over || !mine; });
      say.disabled = !ready || !mine;
      if (!keepMsg) msg.textContent = ready ? D.t.ready : D.t.pick;
    }
    function end(won) {
      over = true;
      form.classList.add("done");
      inputs.forEach(function (inp) {
        var lab = inp.closest("label");
        inp.disabled = true;
        if (+inp.value === D.answer[+inp.name.slice(1)]) lab.classList.add("ok");
        else if (inp.checked) lab.classList.add("no");
      });
      form.querySelectorAll(".dwhy").forEach(function (p) { p.hidden = false; });
      // 2080: al final se ven los aciertos que el Autor les dijo en secreto a los rivales.
      log.querySelectorAll(".dlock").forEach(function (s) { s.textContent = D.t.hits[+s.getAttribute("data-h")]; s.classList.add("open"); });
      if (duo() && D.mode !== "coop") {
        var lastT = turn > D.turns;
        msg.innerHTML = !won ? D.t.lose.replace("{code}", code(D.answer))
          : winners.length > 1 ? P.tie : fill(lastT ? P.winLast : P.win, { name: who(winners[0]) });
        if (D.mode === "private") msg.innerHTML += " " + P.secretEnd;
      } else msg.innerHTML = (won ? (turn > D.turns ? D.t.winLast : D.t.win) : D.t.lose.replace("{code}", code(D.answer))) + (D.rivals && !duo() ? " " + D.t.theirs : "");
      say.hidden = true;
      again.hidden = false;
      again.focus();
    }
    form.addEventListener("change", function (e) {
      if (over) return;
      if (e.target.type === "radio" && e.isTrusted) emit({ k: "pick", n: e.target.name, v: e.target.value });
      status();
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (net() && cur !== meIdx()) return;
      emit({ k: "say", p: picks() });
      play();
    });
    function play() {
      var p = picks();
      if (over || !p.every(Boolean)) return;
      var hits = p.filter(function (n, i) { return n === D.answer[i]; }).length;
      var li = doc.createElement("li");
      // Sobre con los aciertos (1812) o, si no hay sobres, cuatro marcas como las del anotador.
      var answer = D.sobres ? '<img src="' + D.sobres[hits] + '" width="160" height="' + D.sobreH + '" alt="">'
        : '<span class="dhits" aria-hidden="true">' + [0, 1, 2, 3].map(function (i) { return i < hits ? '<i class="on"></i>' : "<i></i>"; }).join("") + "</span>";
      li.innerHTML = code(p) + answer + "<span>" + D.t.hits[hits] + "</span>";
      if (duo()) return duoTurn(li, p, hits);
      if (D.rivals) {
        // Todos dicen su código en voz alta, pero el Autor contesta a cada uno en privado.
        li.insertAdjacentHTML("afterbegin", '<span class="dwho">' + D.t.you + "</span>");
        li.querySelector("span:last-child").textContent = D.t.hits[hits] + " · " + D.t.secret;
        log.appendChild(li);
        D.codes.forEach(function (codes, r) {
          var rc = codes[Math.min(turn, codes.length) - 1];
          var h = rc.filter(function (n, i) { return n === D.answer[i]; }).length;
          var rl = doc.createElement("li");
          rl.className = "drival";
          rl.innerHTML = '<span class="dwho">' + D.names[r] + "</span>" + code(rc) + '<span class="dlock" data-h="' + h + '">🔒</span>';
          log.appendChild(rl);
        });
      } else log.appendChild(li);
      if (hits === 4) return end(true);
      if (turn >= maxTurns) return end(false);
      turn++;
      // El Autor suma una carta nueva al lado de cada fila (hasta cuatro).
      form.querySelectorAll(".dstack").forEach(function (st) {
        var c = st.querySelectorAll(".dcard")[turn - 1];
        if (c) { c.hidden = false; c.classList.add("new"); }
      });
      status(true);
      msg.textContent = D.t.hits[hits] + ". " + (turn > D.turns ? D.t.lastMsg : D.t.pick.replace(/\.$/, "") + ".");
    }
    // Dos Lectores: en 1812 deciden juntos (se turnan para decidir); en Tour Eiffel y 2080 cada uno dice su código.
    function nextRound(hits) {
      turn++;
      form.querySelectorAll(".dstack").forEach(function (st) {
        var c = st.querySelectorAll(".dcard")[turn - 1];
        if (c) { c.hidden = false; c.classList.add("new"); }
      });
      status(true);
      msg.textContent = (hits === null ? "" : D.t.hits[hits] + ". ") + (turn > D.turns ? D.t.lastMsg : D.t.pick);
    }
    function clearPicks() { inputs.forEach(function (inp) { inp.checked = false; }); }
    function duoTurn(li, p, hits) {
      li.insertAdjacentHTML("afterbegin", '<span class="dwho">' + who(cur) + "</span>");
      if (D.mode === "private") {
        li.innerHTML = '<span class="dwho">' + who(cur) + "</span>" + code(p) + '<span class="dlock" data-h="' + hits + '">🔒</span>';
      }
      log.appendChild(li);
      if (D.mode === "coop") {
        if (hits === 4) return end(true);
        if (turn >= maxTurns) return end(false);
        cur = 1 - cur;
        clearPicks();
        return nextRound(hits);
      }
      if (hits === 4) winners.push(cur);
      var me = cur;
      if (cur === 0) {
        cur = 1;
        clearPicks();
        status(true);
        var next = fill(P.turnOf, { name: who(1) });
        msg.textContent = D.mode === "private" ? D.t.pick : D.t.hits[hits] + ". " + next.charAt(0).toUpperCase() + next.slice(1) + ".";
        if (D.mode === "private") showSecret(me, hits);
        return;
      }
      cur = 0;
      if (winners.length) return end(true);
      if (turn >= maxTurns) return end(false);
      clearPicks();
      nextRound(D.mode === "private" ? null : hits);
      if (D.mode === "private") showSecret(me, hits);
    }
    // 2080: el Autor le contesta en secreto a cada Lector. La pantalla tapa la mesa hasta que el otro tome el turno.
    function showSecret(me, hits) {
      if (net() && me !== meIdx()) { msg.textContent = fill(P.gotSecret, { name: who(me) }); return; }
      if (!secret) {
        secret = doc.createElement("div");
        secret.className = "dsecret";
        secret.setAttribute("role", "dialog");
        secret.setAttribute("aria-modal", "true");
        secret.innerHTML = '<div class="dsecret-in glass"><p class="eyebrow"></p><p class="dsecret-n"></p><p class="muted"></p><button type="button" class="btn btn-primary"></button></div>';
        form.appendChild(secret);
        secret.querySelector("button").addEventListener("click", function () { secret.hidden = true; doc.body.classList.remove("lock"); say.focus(); });
      }
      var other = who(1 - me);
      secret.querySelector(".eyebrow").textContent = fill(P.secretH, { name: who(me) });
      secret.querySelector(".dsecret-n").textContent = D.t.hits[hits];
      secret.querySelector(".muted").textContent = fill(net() ? P.secretOnline : P.secretNote, { name: other });
      secret.querySelector("button").textContent = net() ? P.ok : fill(P.pass, { name: other });
      secret.hidden = false;
      doc.body.classList.add("lock");
      secret.querySelector("button").focus();
    }
    function restart(seed) {
      rng = seed == null ? Math.random : seeded(seed);
      over = false;
      turn = 1; cur = 0; winners = [];
      if (secret) { secret.hidden = true; doc.body.classList.remove("lock"); }
      form.classList.remove("done");
      inputs.forEach(function (inp) { inp.disabled = false; inp.checked = false; inp.closest("label").classList.remove("ok", "no"); });
      form.querySelectorAll(".dwhy").forEach(function (p) { p.hidden = true; });
      form.querySelectorAll(".dcard").forEach(function (c, i) { c.hidden = !c.matches(":first-child"); c.classList.remove("new"); });
      log.innerHTML = "";
      say.hidden = false;
      again.hidden = true;
      deal();
      status();
    }
    again.addEventListener("click", function () {
      var sd = newSeed();
      emit({ k: "again", s: sd });
      restart(sd);
      form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
    form.addEventListener("ds4:players", function () { restart(); });
    // Lo que llega de la otra pantalla.
    form._ds4 = {
      restart: restart,
      apply: function (a) {
        if (a.k === "again") restart(a.s);
        else if (a.k === "pick") { var r = form.querySelector('input[name="' + a.n + '"][value="' + a.v + '"]'); if (r) { r.checked = true; status(); } }
        else if (a.k === "say") { clearPicks(); a.p.forEach(function (v, i) { var r = form.querySelector('input[name="r' + i + '"][value="' + v + '"]'); if (r) r.checked = true; }); play(); }
      },
    };
    deal();
    status();
  });

  /* Olympikos: ronda contra el reloj. La web es el Entrenador; cada D.every segundos una delegación
     rival juega una carta al azar en cada medalla. El primero que acierta se lleva la medalla. */
  doc.querySelectorAll("[data-race]").forEach(function (box) {
    var D = JSON.parse(box.getAttribute("data-race"));
    var start = box.querySelector(".ostart"), next = box.querySelector(".onext");
    var label = box.querySelector(".olabel"), timeEl = box.querySelector(".otime"), msg = box.querySelector(".omsg");
    var rounds = [].slice.call(box.querySelectorAll(".oround"));
    var picks = [].slice.call(box.querySelectorAll('input[name="nation"]'));
    var ri = 0, timer = null, t0 = 0, ticks = 0, stacks = [], placed = 0, me = [], pools = [];
    // Página Jugar ahora: con data-players="2" juegan dos Atletas, cada uno con sus aros.
    var P = D.p || {};
    function duo() { return !!D.p && box.getAttribute("data-players") === "2"; }
    // En línea: la pantalla del Atleta 1 manda (rivales, orden de los aros y resultado); la otra pide y muestra.
    function net() { return duo() && box.hasAttribute("data-me"); }
    function meIdx() { return +box.getAttribute("data-me"); }
    function host() { return !net() || meIdx() === 0; }
    function emit(a) { if (net()) box.dispatchEvent(new CustomEvent("ds4:act", { detail: a })); }
    var rng = Math.random;
    function who(i) { return (P.athlete || "").replace("{n}", i + 1) + (net() && i === meIdx() ? " (" + P.you + ")" : ""); }
    var picks2 = [].slice.call(box.querySelectorAll('input[name="nation2"]'));
    function fmt(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
    function medals() { return [].slice.call(rounds[ri].querySelectorAll(".omedal")); }
    function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
    function push(m, n, ring, mine) {
      // mine: -1 delegación rival, 0 Atleta 1, 1 Atleta 2.
      stacks[m].push({ n: n, ring: ring, mine: mine });
      var li = doc.createElement("li");
      if (mine >= 0) li.className = mine ? "me me2" : "me";
      li.innerHTML = '<img src="' + D.flags[n] + '" width="64" height="' + D.flagH + '" alt=""><i style="--ring:' + D.rings[ring - 1] + '">' + ring + "</i>";
      medals()[m].querySelector(".ostack").appendChild(li);
    }
    function reset() {
      clearInterval(timer);
      timer = null;
      rounds.forEach(function (r, i) { r.hidden = i !== ri; r.classList.remove("live", "done"); });
      medals().forEach(function (el) {
        el.querySelectorAll(".obtn").forEach(function (b) { b.disabled = true; b.classList.remove("on", "ok", "no"); b.removeAttribute("aria-pressed"); });
        el.querySelector(".ostack").innerHTML = "";
        var res = el.querySelector(".ores"); res.textContent = ""; res.className = "ores";
      });
      rounds[ri].querySelectorAll(".osports li").forEach(function (li) { li.classList.remove("ok"); });
      stacks = [[], [], []]; placed = 0; ticks = 0;
      picks.forEach(function (p) { p.disabled = net() && meIdx() !== 0; });
      picks2.forEach(function (p) { p.disabled = net() && meIdx() !== 1; });
      box.classList.toggle("two-p", duo());
      label.textContent = fmt(D.t.round, { n: ri + 1, total: rounds.length });
      timeEl.textContent = fmt(D.t.time, { s: 0 });
      msg.textContent = D.t.ready;
      start.hidden = false; start.disabled = false; next.hidden = true;
    }
    function finish() {
      clearInterval(timer);
      var R = D.rounds[ri], total = 0, sums = [0, 0];
      rounds[ri].classList.remove("live");
      rounds[ri].classList.add("done");
      medals().forEach(function (el, m) {
        var st = stacks[m], right = R.answers[m], first = -1, mine = -1, pts = 0, text;
        st.forEach(function (c, i) { if (c.ring === right && first < 0) first = i; if (c.mine === 0) mine = i; });
        if (duo()) {
          // Cada Atleta: el primero que acierta suma la medalla; los demás que aciertan, 1.
          var parts = [0, 1].map(function (pl) {
            var k = -1;
            st.forEach(function (c, i) { if (c.mine === pl) k = i; });
            var v = st[k].ring !== right ? 0 : first === k ? m + 2 : 1;
            sums[pl] += v;
            pts = Math.max(pts, v);
            return fmt(P.medal, { name: who(pl), p: v });
          });
          text = pts ? parts.join(" · ") : fmt(D.t.wrong, { sport: R.sports[right - 1] });
        } else if (st[mine].ring !== right) text = fmt(D.t.wrong, { sport: R.sports[right - 1] });
        else if (first === mine) { pts = m + 2; text = fmt(D.t.first, { p: pts }); }
        else { pts = 1; text = fmt(D.t.late, { nation: D.names[st[first].n] }); }
        total += pts;
        var lis = el.querySelector(".ostack").children;
        st.forEach(function (c, i) { lis[i].classList.add(c.ring === right ? "ok" : "no"); });
        if (first >= 0) lis[first].classList.add("first");
        el.querySelectorAll(".obtn").forEach(function (b) {
          if (+b.getAttribute("data-ring") === right) b.classList.add("ok");
          else if (b.classList.contains("on")) b.classList.add("no");
        });
        var res = el.querySelector(".ores");
        res.textContent = text;
        res.classList.add(pts > 1 ? "win" : pts ? "ok" : "no");
        rounds[ri].querySelectorAll(".osports li")[right - 1].classList.add("ok");
      });
      msg.textContent = duo()
        ? fmt(P.totals, { a: who(0), p: sums[0], b: who(1), q: sums[1] }) + " " + (sums[0] === sums[1] ? P.tie : fmt(P.win, { name: who(sums[0] > sums[1] ? 0 : 1) }))
        : fmt(D.t.total, { p: total });
      next.hidden = false;
      next.focus();
      emit({ k: "fin" });
    }
    function go(seed) {
      rng = seed == null ? Math.random : seeded(seed);
      var c = box.querySelector('input[name="nation"]:checked');
      me = [c ? c.value : picks[0].value];
      if (duo()) {
        var c2 = box.querySelector('input[name="nation2"]:checked');
        var n2 = c2 && c2.value !== me[0] ? c2.value : Object.keys(D.flags).filter(function (n) { return n !== me[0]; })[0];
        me.push(n2);
        picks2.forEach(function (p) { p.checked = p.value === n2; });
      }
      picks.concat(picks2).forEach(function (p) { p.disabled = true; });
      var rivals = Object.keys(D.flags).filter(function (n) { return me.indexOf(n) < 0; });
      pools = [0, 1, 2].map(function () { return shuffle(rivals.slice()); });
      rounds[ri].classList.add("live");
      medals().forEach(function (el) { el.querySelectorAll(net() ? '.obtn[data-p="' + meIdx() + '"]' : duo() ? ".obtn" : '.obtn[data-p="0"]').forEach(function (b) { b.disabled = false; }); });
      start.hidden = true;
      msg.textContent = D.t.pick;
      t0 = Date.now();
      timer = setInterval(function () {
        var s = Math.floor((Date.now() - t0) / 1000);
        timeEl.textContent = fmt(D.t.time, { s: s });
        var due = Math.min(Math.floor(s / D.every), rivals.length);
        while (host() && ticks < due) {
          ticks++;
          [0, 1, 2].forEach(function (m) { var n = pools[m].pop(), r = 1 + Math.floor(rng() * 5); push(m, n, r, -1); emit({ k: "push", m: m, n: n, r: r, p: -1 }); });
          msg.textContent = fmt(D.t.rivals, { n: ticks });
          emit({ k: "msg", t: msg.textContent });
        }
      }, 250);
      var b = rounds[ri].querySelector(".obtn");
      if (b) b.focus();
    }
    box.addEventListener("click", function (e) {
      var b = e.target.closest(".obtn");
      if (!b || b.disabled || !timer) return;
      var el = b.closest(".omedal"), m = medals().indexOf(el), pl = +(b.getAttribute("data-p") || 0);
      b.classList.add("on");
      b.setAttribute("aria-pressed", "true");
      el.querySelectorAll('.obtn[data-p="' + pl + '"]').forEach(function (x) { x.disabled = true; });
      if (!host()) emit({ k: "ring", m: m, r: +b.getAttribute("data-ring") });
      else place(m, pl, +b.getAttribute("data-ring"));
      {
        var nextBtn = medals()[m + 1] && medals()[m + 1].querySelector('.obtn[data-p="' + pl + '"]:not(:disabled)');
        if (nextBtn) nextBtn.focus();
      }
    });
    function place(m, pl, r) {
      push(m, me[pl], r, pl);
      emit({ k: "push", m: m, n: me[pl], r: r, p: pl });
      if (++placed === 3 * me.length) { timer = clearInterval(timer); finish(); }
    }
    start.addEventListener("click", function () { var sd = newSeed(); emit({ k: "go", s: sd }); go(sd); });
    box.addEventListener("change", function (e) {
      if (e.isTrusted && /^nation2?$/.test(e.target.name)) emit({ k: "nat", n: e.target.name, v: e.target.value });
    });
    box._ds4 = {
      restart: function () { reset(); },
      apply: function (a) {
        if (a.k === "nat") { var r = box.querySelector('input[name="' + a.n + '"][value="' + a.v + '"]'); if (r) r.checked = true; }
        else if (a.k === "go") go(a.s);
        else if (a.k === "ring" && host() && timer) {
          var el = medals()[a.m], b = el.querySelector('.obtn[data-p="1"][data-ring="' + a.r + '"]');
          if (b) { b.classList.add("on"); b.setAttribute("aria-pressed", "true"); }
          place(a.m, 1, a.r);
        } else if (a.k === "push" && !host()) {
          push(a.m, a.n, a.r, a.p);
          if (a.p === 0) { var b0 = medals()[a.m].querySelector('.obtn[data-p="0"][data-ring="' + a.r + '"]'); if (b0) b0.classList.add("on"); }
        } else if (a.k === "msg" && !host()) msg.textContent = a.t;
        else if (a.k === "fin" && !host()) { timer = clearInterval(timer); finish(); }
        else if (a.k === "next") { ri = a.ri; reset(); }
      },
    };
    box.addEventListener("ds4:players", reset);
    next.addEventListener("click", function () {
      ri = (ri + 1) % rounds.length;
      emit({ k: "next", ri: ri });
      reset();
      box.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
    reset();
  });

  /* Jugar ahora: carrusel 3D de cajas. Gira solo hasta que se elige un juego; al elegir, se ven su perfil
     y su partida. La cantidad de jugadores vale para las cuatro partidas. */
  var car = doc.querySelector("[data-carousel]");
  if (car) {
    var ring = car.querySelector(".c3d-ring"), its = [].slice.call(car.querySelectorAll(".c3d-item"));
    var hint = car.querySelector(".c3d-hint"), n = its.length;
    var angle = 0, target = null, spin = !reduce, chosen = "", raf = 0, lastT = 0, held = false;
    var infos = [].slice.call(doc.querySelectorAll("[data-info]")), boards = [].slice.call(doc.querySelectorAll(".pgame"));
    function layoutRing() {
      var w = ring.clientWidth, R = Math.min(w * 0.36, 380);
      its.forEach(function (it, i) {
        var a = (i * 360 / n - angle) * Math.PI / 180, x = Math.sin(a) * R, z = Math.cos(a) * R;
        var depth = (z / R + 1) / 2; // 0 atrás, 1 adelante
        it.style.transform = "translate(-50%, -50%) translate3d(" + x.toFixed(1) + "px, " + (-(depth * 18)).toFixed(1) + "px, " + z.toFixed(1) + "px) rotateY(" + (-Math.sin(a) * 28).toFixed(1) + "deg) scale(" + (0.62 + depth * 0.38).toFixed(3) + ")";
        it.style.zIndex = Math.round(depth * 100);
        it.style.opacity = (0.45 + depth * 0.55).toFixed(2);
        it.classList.toggle("front", depth > 0.97);
      });
    }
    function tick(t) {
      var dt = lastT ? Math.min(t - lastT, 50) : 16;
      lastT = t;
      if (target !== null) {
        var d = ((target - angle) % 360 + 540) % 360 - 180;
        if (Math.abs(d) < 0.3) { angle = target; target = null; } else angle += d * Math.min(1, dt / 140);
      } else if (spin && !held) angle += dt * 0.012;
      layoutRing();
      raf = requestAnimationFrame(tick);
    }
    function frontIndex() { return ((Math.round(angle / (360 / n)) % n) + n) % n; }
    var fromNet = false;
    doc.ds4Choose = function (slug) { fromNet = true; choose(slug, false); fromNet = false; };
    function choose(slug, scroll) {
      var i = its.map(function (it) { return it.getAttribute("data-game"); }).indexOf(slug);
      if (i < 0) return;
      // En línea: el juego elegido se elige también en la otra pantalla.
      if (chosen !== slug && !fromNet) doc.dispatchEvent(new CustomEvent("ds4:chose", { detail: slug }));
      chosen = slug;
      spin = false;
      target = i * 360 / n;
      if (reduce) { angle = target; target = null; layoutRing(); }
      its.forEach(function (it, k) { it.setAttribute("aria-pressed", k === i ? "true" : "false"); it.classList.toggle("on", k === i); });
      infos.forEach(function (el) { el.classList.toggle("on", el.getAttribute("data-info") === slug); });
      boards.forEach(function (el) { el.classList.toggle("on", el.getAttribute("data-game") === slug); });
      doc.body.classList.add("chosen");
      if (hint) hint.textContent = (its[i].querySelector(".c3d-name") || {}).textContent || "";
      try { history.replaceState(null, "", "#" + slug); } catch (e) {}
      if (scroll) doc.getElementById("elegido").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    its.forEach(function (it) { it.addEventListener("click", function () { choose(it.getAttribute("data-game"), true); }); });
    car.querySelectorAll(".c3d-arrow").forEach(function (b) {
      b.addEventListener("click", function () {
        var i = (frontIndex() + +b.getAttribute("data-dir") + n) % n;
        choose(its[i].getAttribute("data-game"), false);
      });
    });
    car.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") held = true; });
    car.addEventListener("pointerleave", function () { held = false; });
    // Deslizar con el dedo o el mouse gira el carrusel.
    var dragX = null, dragA = 0, moved = false;
    ring.addEventListener("pointerdown", function (e) { dragX = e.clientX; dragA = angle; moved = false; });
    window.addEventListener("pointermove", function (e) {
      if (dragX === null) return;
      var dx = e.clientX - dragX;
      if (Math.abs(dx) > 6) { moved = true; spin = false; target = null; angle = dragA - dx * 0.35; }
    });
    window.addEventListener("pointerup", function () {
      if (dragX === null) return;
      dragX = null;
      if (moved) choose(its[frontIndex()].getAttribute("data-game"), false);
    });
    ring.addEventListener("click", function (e) { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    window.addEventListener("resize", layoutRing);
    layoutRing();
    raf = requestAnimationFrame(tick);
    var start = (location.hash || "").slice(1);
    if (start) choose(start, false);
    // Cantidad de jugadores: reinicia la partida de cada juego (también al cargar, por si el navegador recordó otra opción).
    function setPlayers(v) {
      if (v === "online") v = "2";
      doc.querySelectorAll(".pgame [data-demo], .pgame [data-race]").forEach(function (g) {
        if (g.getAttribute("data-players") === v) return;
        g.setAttribute("data-players", v);
        g.dispatchEvent(new CustomEvent("ds4:players"));
      });
    }
    doc.querySelectorAll('input[name="players"]').forEach(function (r) {
      r.addEventListener("change", function () { setPlayers(r.value); });
      if (r.checked) setPlayers(r.value);
    });
    doc.querySelectorAll("[data-go]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var el = doc.getElementById(a.getAttribute("href").slice(1));
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
      });
    });
  }

  /* Formulario de contacto: abre el correo con el mensaje armado */
  var form = doc.querySelector("[data-contact]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var f = new FormData(form);
      var subject = (f.get("subject") || "") + " — " + (f.get("name") || "");
      var body = (f.get("message") || "") + "\n\n" + (f.get("name") || "") + "\n" + (f.get("email") || "");
      var status = form.querySelector(".form-status");
      window.location.href = "mailto:" + CFG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (status) status.hidden = false;
    });
  }
})();
