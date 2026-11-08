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
      var toyco = region === "AR" && g.storeAR;
      var a = el.querySelector("a.buy-link");
      if (a) {
        a.href = toyco ? g.storeAR : g.store;
        a.textContent = toyco ? CFG.t.buyToyco : CFG.t.buy;
      }
      var price = el.querySelector(".buy-price");
      if (price) {
        price.innerHTML = toyco ? "" : g.price + " €" + (region === "AR" ? "<small>≈ ARS " + ars(g.price) + " " + CFG.t.approx + "</small>" : "");
        price.hidden = !!toyco;
      }
      var note = el.querySelector(".buy-note");
      if (note) {
        note.textContent = toyco ? CFG.t.toycoNote
          : region === "AR" ? CFG.t.shipAR.replace("{eur}", CFG.shipAR).replace("{ars}", ars(CFG.shipAR))
          : CFG.t.shipFR;
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
