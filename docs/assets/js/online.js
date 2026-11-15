/* Jugar ahora · en línea: dos pantallas conectadas directo (WebRTC con PeerJS, sin cuenta).
   El que crea la sala es Jugador 1 y manda la semilla de cada mesa; el que entra con el link es Jugador 2.
   Cada acción de un juego (ds4:act) viaja a la otra pantalla, que la aplica con el._ds4.apply(). */
(function () {
  "use strict";
  var doc = document, box = doc.querySelector(".pnet");
  if (!box) return;
  var T = JSON.parse(box.getAttribute("data-net"));
  var PEER_JS = "https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js", PREFIX = "ds4games-";
  var createBtn = box.querySelector(".pnet-create"), share = box.querySelector(".pnet-share");
  var linkEl = box.querySelector(".pnet-link"), copyBtn = box.querySelector(".pnet-copy"), wa = box.querySelector(".pnet-wa");
  var state = box.querySelector(".pnet-state"), lead = box.querySelector(".pnet-lead");
  var radios = [].slice.call(doc.querySelectorAll('input[name="players"]'));
  var games = [].slice.call(doc.querySelectorAll(".pgame [data-demo], .pgame [data-race]"));
  var peer = null, conn = null, me = -1, chosen = "";

  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
  function say(t) { state.textContent = t; }
  function online() { var r = doc.querySelector('input[name="players"]:checked'); return r && r.value === "online"; }
  function idOf(el) { return el.closest("section[id]").id; }

  function loadPeer(cb) {
    if (window.Peer) return cb();
    var s = doc.createElement("script");
    s.src = PEER_JS;
    s.onload = cb;
    s.onerror = function () { say(T.fail); };
    doc.head.appendChild(s);
  }
  function code() {
    var a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", c = "";
    for (var i = 0; i < 6; i++) c += a[Math.floor(Math.random() * a.length)];
    return c;
  }
  function leave() {
    if (conn) { try { conn.close(); } catch (e) {} }
    if (peer) { try { peer.destroy(); } catch (e) {} }
    conn = peer = null; me = -1;
    games.forEach(function (g) {
      if (!g.hasAttribute("data-me")) return;
      g.removeAttribute("data-me");
      g.dispatchEvent(new CustomEvent("ds4:players"));
    });
    box.classList.remove("live");
  }
  function send(m) { if (conn && conn.open) conn.send(m); }

  // Cada juego avisa sus jugadas; acá se mandan a la otra pantalla.
  games.forEach(function (g) {
    g.addEventListener("ds4:act", function (e) { send({ g: idOf(g), a: e.detail }); });
  });
  doc.addEventListener("ds4:chose", function (e) { chosen = e.detail; send({ t: "game", slug: chosen }); });
  var h0 = (location.hash || "").slice(1);
  if (/^(olympikos|tour-eiffel|1812|2080)$/.test(h0)) chosen = h0;

  function start(c, who) {
    conn = c; me = who;
    games.forEach(function (g) { g.setAttribute("data-me", String(me)); g.setAttribute("data-players", "2"); });
    box.classList.add("live");
    share.hidden = me !== 0;
    say(fill(T.connected, { name: fill(T.player, { n: me + 1 }) }));
    conn.on("data", function (m) {
      if (!m) return;
      if (m.t === "game") { chosen = m.slug; if (doc.ds4Choose) doc.ds4Choose(m.slug); return; }
      var sec = m.g && doc.getElementById(m.g), g = sec && sec.querySelector("[data-demo], [data-race]");
      if (g && g._ds4) g._ds4.apply(m.a);
    });
    conn.on("close", function () { say(T.lost); leave(); createBtn.hidden = false; });
    // Jugador 1 reparte: la misma mesa en las dos pantallas.
    if (me === 0) {
      games.forEach(function (g) {
        var a = g.hasAttribute("data-race") ? { k: "next", ri: 0 } : { k: "again", s: Math.floor(Math.random() * 2147483647) };
        g._ds4.apply(a);
        send({ g: idOf(g), a: a });
      });
      if (chosen) send({ t: "game", slug: chosen });
    } else games.forEach(function (g) { if (g._ds4) g._ds4.restart(); });
  }

  function create() {
    leave();
    createBtn.disabled = true;
    say(T.joining);
    loadPeer(function () {
      var c = code();
      peer = new window.Peer(PREFIX + c);
      peer.on("open", function () {
        var url = location.origin + location.pathname + "#sala-" + c;
        linkEl.value = url;
        wa.href = "https://wa.me/?text=" + encodeURIComponent(fill(T.share, { url: url }));
        share.hidden = false;
        createBtn.disabled = false;
        createBtn.hidden = true;
        say(T.waiting);
      });
      peer.on("connection", function (c2) {
        if (conn && conn.open) { c2.close(); return; }
        c2.on("open", function () { start(c2, 0); });
      });
      peer.on("error", function (e) {
        createBtn.disabled = false;
        if (e && e.type === "unavailable-id") return create();
        if (!conn) say(T.fail);
      });
    });
  }

  function join(c) {
    radios.forEach(function (r) { r.checked = r.value === "online"; });
    radios.forEach(function (r) { if (r.checked) r.dispatchEvent(new Event("change", { bubbles: true })); });
    box.hidden = false;
    createBtn.hidden = true;
    say(T.joining);
    setTimeout(function () { box.scrollIntoView({ block: "center" }); }, 300);
    loadPeer(function () {
      peer = new window.Peer();
      peer.on("open", function () {
        var c2 = peer.connect(PREFIX + c, { reliable: true });
        c2.on("open", function () { start(c2, 1); });
      });
      peer.on("error", function () { if (!conn) { say(T.fail); createBtn.hidden = false; } });
    });
  }

  radios.forEach(function (r) {
    r.addEventListener("change", function () {
      box.hidden = !online();
      if (!online()) { leave(); share.hidden = true; createBtn.hidden = false; say(""); }
    });
  });
  createBtn.addEventListener("click", create);
  copyBtn.addEventListener("click", function () {
    linkEl.select();
    var done = function () { say(T.copied); };
    if (navigator.clipboard) navigator.clipboard.writeText(linkEl.value).then(done, function () { doc.execCommand("copy"); done(); });
    else { doc.execCommand("copy"); done(); }
  });

  function fromHash() {
    var m = /^#sala-([A-Z0-9]{6})$/.exec(location.hash || "");
    if (m) { leave(); join(m[1]); return true; }
  }
  if (!fromHash() && online()) box.hidden = false;
  // Si pegan el link de una sala en una pestaña que ya tenía la página abierta.
  window.addEventListener("hashchange", fromHash);
})();
