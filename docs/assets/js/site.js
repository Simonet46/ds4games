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
    var turn = 1, over = false;
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
      turnEl.textContent = D.t.turn.replace("{n}", turn).replace("{total}", D.turns);
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
      msg.innerHTML = won ? D.t.win : D.t.lose.replace("{code}", code(D.answer));
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
      li.innerHTML = code(p) + '<img src="' + D.sobres[hits] + '" width="160" height="' + D.sobreH + '" alt="">' + "<span>" + D.t.hits[hits] + "</span>";
      log.appendChild(li);
      if (hits === 4) return end(true);
      if (turn >= D.turns) return end(false);
      turn++;
      status(true);
      msg.textContent = D.t.hits[hits] + ". " + D.t.pick.replace(/\.$/, "") + ".";
    });
    again.addEventListener("click", function () {
      over = false;
      turn = 1;
      form.classList.remove("done");
      inputs.forEach(function (inp) { inp.disabled = false; inp.checked = false; inp.closest("label").classList.remove("ok", "no"); });
      form.querySelectorAll(".dwhy").forEach(function (p) { p.hidden = true; });
      log.innerHTML = "";
      say.hidden = false;
      again.hidden = true;
      status();
      form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
    status();
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
