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

  /* Ronda de prueba: el visitante juega como Lector y recibe un sobre con los aciertos */
  doc.querySelectorAll("[data-demo]").forEach(function (form) {
    var D = JSON.parse(form.getAttribute("data-demo"));
    var say = form.querySelector(".dsay"), again = form.querySelector(".dagain");
    var turnEl = form.querySelector(".dturn"), msg = form.querySelector(".dmsg"), log = form.querySelector(".dlog");
    var inputs = [].slice.call(form.querySelectorAll("input[type=radio]"));
    var turn = 1, over = false, last = [];
    function rnd(n) { return Math.floor(Math.random() * n); }
    // Mesa nueva: por fila, una carta correcta (con sus cartas de Autor) y cinco cartas al azar del mazo.
    function deal() {
      if (!D.pool) return;
      D.pool.forEach(function (opts, i) {
        var s = rnd(opts.length);
        if (opts.length > 1 && s === last[i]) s = (s + 1 + rnd(opts.length - 1)) % opts.length;
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
        row.querySelectorAll(".dcard img").forEach(function (im, k) { im.removeAttribute("srcset"); im.src = sc.d[k]; });
        row.querySelectorAll(".dwhy li").forEach(function (li, k) {
          var im = li.querySelector("img");
          im.removeAttribute("srcset");
          im.src = sc.d[k];
          li.querySelector("span").textContent = sc.w[k];
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
      var ready = picks().every(Boolean);
      say.disabled = !ready;
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
      msg.innerHTML = (won ? (turn > D.turns ? D.t.winLast : D.t.win) : D.t.lose.replace("{code}", code(D.answer))) + (D.rivals ? " " + D.t.theirs : "");
      say.hidden = true;
      again.hidden = false;
      again.focus();
    }
    form.addEventListener("change", function () { if (!over) status(); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var p = picks();
      if (over || !p.every(Boolean)) return;
      var hits = p.filter(function (n, i) { return n === D.answer[i]; }).length;
      var li = doc.createElement("li");
      // Sobre con los aciertos (1812) o, si no hay sobres, cuatro marcas como las del anotador.
      var answer = D.sobres ? '<img src="' + D.sobres[hits] + '" width="160" height="' + D.sobreH + '" alt="">'
        : '<span class="dhits" aria-hidden="true">' + [0, 1, 2, 3].map(function (i) { return i < hits ? '<i class="on"></i>' : "<i></i>"; }).join("") + "</span>";
      li.innerHTML = code(p) + answer + "<span>" + D.t.hits[hits] + "</span>";
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
    });
    again.addEventListener("click", function () {
      over = false;
      turn = 1;
      form.classList.remove("done");
      inputs.forEach(function (inp) { inp.disabled = false; inp.checked = false; inp.closest("label").classList.remove("ok", "no"); });
      form.querySelectorAll(".dwhy").forEach(function (p) { p.hidden = true; });
      form.querySelectorAll(".dcard").forEach(function (c, i) { c.hidden = !c.matches(":first-child"); c.classList.remove("new"); });
      log.innerHTML = "";
      say.hidden = false;
      again.hidden = true;
      deal();
      status();
      form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
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
    var ri = 0, timer = null, t0 = 0, ticks = 0, stacks = [], placed = 0, me = "", pools = [];
    function fmt(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
    function medals() { return [].slice.call(rounds[ri].querySelectorAll(".omedal")); }
    function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
    function push(m, n, ring, mine) {
      stacks[m].push({ n: n, ring: ring, mine: mine });
      var li = doc.createElement("li");
      if (mine) li.className = "me";
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
      picks.forEach(function (p) { p.disabled = false; });
      label.textContent = fmt(D.t.round, { n: ri + 1, total: rounds.length });
      timeEl.textContent = fmt(D.t.time, { s: 0 });
      msg.textContent = D.t.ready;
      start.hidden = false; start.disabled = false; next.hidden = true;
    }
    function finish() {
      clearInterval(timer);
      var R = D.rounds[ri], total = 0;
      rounds[ri].classList.remove("live");
      rounds[ri].classList.add("done");
      medals().forEach(function (el, m) {
        var st = stacks[m], right = R.answers[m], first = -1, mine = -1, pts = 0, text;
        st.forEach(function (c, i) { if (c.ring === right && first < 0) first = i; if (c.mine) mine = i; });
        if (st[mine].ring !== right) text = fmt(D.t.wrong, { sport: R.sports[right - 1] });
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
      msg.textContent = fmt(D.t.total, { p: total });
      next.hidden = false;
      next.focus();
    }
    function go() {
      var c = box.querySelector('input[name="nation"]:checked');
      me = c ? c.value : picks[0].value;
      picks.forEach(function (p) { p.disabled = true; });
      var rivals = Object.keys(D.flags).filter(function (n) { return n !== me; });
      pools = [0, 1, 2].map(function () { return shuffle(rivals.slice()); });
      rounds[ri].classList.add("live");
      medals().forEach(function (el) { el.querySelectorAll(".obtn").forEach(function (b) { b.disabled = false; }); });
      start.hidden = true;
      msg.textContent = D.t.pick;
      t0 = Date.now();
      timer = setInterval(function () {
        var s = Math.floor((Date.now() - t0) / 1000);
        timeEl.textContent = fmt(D.t.time, { s: s });
        var due = Math.min(Math.floor(s / D.every), rivals.length);
        while (ticks < due) {
          ticks++;
          [0, 1, 2].forEach(function (m) { push(m, pools[m].pop(), 1 + Math.floor(Math.random() * 5), false); });
          msg.textContent = fmt(D.t.rivals, { n: ticks });
        }
      }, 250);
      var b = rounds[ri].querySelector(".obtn");
      if (b) b.focus();
    }
    box.addEventListener("click", function (e) {
      var b = e.target.closest(".obtn");
      if (!b || b.disabled || !timer) return;
      var el = b.closest(".omedal"), m = medals().indexOf(el);
      b.classList.add("on");
      b.setAttribute("aria-pressed", "true");
      el.querySelectorAll(".obtn").forEach(function (x) { x.disabled = true; });
      push(m, me, +b.getAttribute("data-ring"), true);
      if (++placed === 3) { timer = clearInterval(timer); finish(); }
      else {
        var nextBtn = medals()[m + 1] && medals()[m + 1].querySelector(".obtn:not(:disabled)");
        if (nextBtn) nextBtn.focus();
      }
    });
    start.addEventListener("click", go);
    next.addEventListener("click", function () {
      ri = (ri + 1) % rounds.length;
      reset();
      box.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
    reset();
  });

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
