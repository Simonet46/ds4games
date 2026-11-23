/* Jugar ahora · en línea: dos pantallas conectadas por un servidor público de mensajes (MQTT sobre WebSocket,
   sin cuenta). Pasa por cualquier red, también las de los celulares. La sala es un código de 6 letras.
   El que crea la sala es Jugador 1 y manda la semilla de cada mesa; el que entra con el link es Jugador 2.
   Cada acción de un juego (ds4:act) viaja a la otra pantalla, que la aplica con el._ds4.apply(). */
(function () {
  "use strict";
  var doc = document, box = doc.querySelector(".pnet");
  if (!box) return;
  var T = JSON.parse(box.getAttribute("data-net"));
  // La librería va con la web (no depende de otro sitio que alguna red pueda bloquear).
  var LIB = (doc.currentScript && doc.currentScript.src.replace(/online\.js.*$/, "mqtt.min.js")) || "https://unpkg.com/mqtt@5.10.1/dist/mqtt.min.js";
  // Primero un servidor por el puerto 443 (el de cualquier web): casi ninguna red lo bloquea. Los otros usan puertos
  // propios, que algunas redes (de empresas, escuelas o celulares) cortan.
  var BROKERS = [
    { u: "wss://public.cloud.shiftr.io", o: { username: "public", password: "public" } },
    { u: "wss://broker.hivemq.com:8884/mqtt" },
    { u: "wss://broker.emqx.io:8084/mqtt" },
    { u: "wss://test.mosquitto.org:8081/mqtt" },
  ];
  var createBtn = box.querySelector(".pnet-create"), share = box.querySelector(".pnet-share");
  var linkEl = box.querySelector(".pnet-link"), copyBtn = box.querySelector(".pnet-copy"), wa = box.querySelector(".pnet-wa");
  var state = box.querySelector(".pnet-state");
  var radios = [].slice.call(doc.querySelectorAll('input[name="players"]'));
  var games = [].slice.call(doc.querySelectorAll(".pgame [data-demo], .pgame [data-race]"));
  var pill = doc.createElement("p");
  pill.className = "pnet-pill";
  pill.hidden = true;
  pill.setAttribute("aria-live", "polite");
  doc.body.appendChild(pill);
  // Chat entre las dos pantallas: un botón abajo a la derecha abre la charla.
  var chat = doc.createElement("div");
  chat.className = "pchat";
  chat.hidden = true;
  chat.innerHTML = '<button type="button" class="pchat-btn" aria-expanded="false"><span aria-hidden="true">💬</span> <span class="pchat-l"></span><b class="pchat-n" hidden></b></button>' +
    '<div class="pchat-box glass" hidden><div class="pchat-top"><strong class="pchat-h"></strong><button type="button" class="pchat-x">×</button></div>' +
    '<ol class="pchat-log" aria-live="polite"></ol><form class="pchat-f"><input type="text" maxlength="300" autocomplete="off"><button type="submit" class="btn btn-primary"></button></form></div>';
  doc.body.appendChild(chat);
  var cBtn = chat.querySelector(".pchat-btn"), cBox = chat.querySelector(".pchat-box"), cLog = chat.querySelector(".pchat-log");
  var cIn = chat.querySelector("input"), cN = chat.querySelector(".pchat-n"), unread = 0;
  chat.querySelector(".pchat-l").textContent = T.chat;
  chat.querySelector(".pchat-h").textContent = T.chat;
  chat.querySelector(".pchat-x").setAttribute("aria-label", T.chatClose);
  chat.querySelector(".pchat-f button").textContent = T.chatSend;
  cIn.placeholder = T.chatPh;
  cLog.setAttribute("data-empty", T.chatEmpty);
  function openChat(on) {
    cBox.hidden = !on;
    cBtn.setAttribute("aria-expanded", String(on));
    if (on) { unread = 0; cN.hidden = true; cLog.scrollTop = cLog.scrollHeight; cIn.focus(); }
  }
  function addMsg(text, mine) {
    var li = doc.createElement("li");
    li.className = mine ? "me" : "";
    var who = doc.createElement("span");
    who.textContent = mine ? T.you.charAt(0).toUpperCase() + T.you.slice(1) : nameOf(mine ? me : 1 - me);
    var p = doc.createElement("p");
    p.textContent = text;
    li.appendChild(who); li.appendChild(p);
    cLog.appendChild(li);
    cLog.scrollTop = cLog.scrollHeight;
    if (!mine && cBox.hidden) { unread++; cN.textContent = unread; cN.hidden = false; }
  }
  cBtn.addEventListener("click", function () { openChat(cBox.hidden); });
  chat.querySelector(".pchat-x").addEventListener("click", function () { openChat(false); });
  chat.querySelector(".pchat-f").addEventListener("submit", function (e) {
    e.preventDefault();
    var t = cIn.value.trim().slice(0, 300);
    if (!t || !linked) return;
    send({ t: "chat", x: t });
    addMsg(t, true);
    cIn.value = "";
  });
  var client = null, room = "", me = -1, linked = false, chosen = "", lastSeen = 0, beat = 0, gen = 0;
  var broker = 0, partner = "", seq = 0, lastN = 0;
  var myId = Math.random().toString(36).slice(2, 10);
  // Nombres: cada uno escribe el suyo y se lo manda a la otra pantalla. Los juegos los leen de doc.ds4Names.
  var nameIn = box.querySelector(".pnet-name input"), names = ["", ""];
  function clean(v) { return String(v || "").replace(/[<>&"'\u0000-\u001f]/g, "").trim().slice(0, 20); }
  try { nameIn.value = clean(localStorage.getItem("ds4-name")); } catch (e) {}
  function nameOf(i) { return names[i] || fill(T.player, { n: i + 1 }); }
  function setNames() {
    doc.ds4Names = linked ? names.slice() : null;
    games.forEach(function (g) { g.dispatchEvent(new CustomEvent("ds4:names")); });
    if (linked && !pill.classList.contains("off")) live();
  }
  function sendName() {
    var v = clean(nameIn.value);
    try { localStorage.setItem("ds4-name", v); } catch (e) {}
    if (me < 0) return;
    names[me] = v;
    if (linked) { send({ t: "name", v: v }); setNames(); }
  }
  nameIn.addEventListener("change", sendName);

  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
  function say(t) { state.textContent = t; }
  function online() { var r = doc.querySelector('input[name="players"]:checked'); return r && r.value === "online"; }
  function idOf(el) { return el.closest("section[id]").id; }
  function wait() { doc.body.classList.toggle("net-wait", online() && !linked); }
  function topic(to) { return "ds4games/v1/" + room + "/" + to; }
  function raw(to, m) { if (client && client.connected) client.publish(topic(to), JSON.stringify(m), { qos: 1 }); }
  // Cada mensaje lleva un número: si el servidor lo entrega dos veces, la segunda se ignora.
  function send(m) { if (linked) raw(1 - me, { t: "m", n: ++seq, d: m }); }

  function loadLib(cb) {
    if (window.mqtt) return cb();
    var s = doc.createElement("script");
    s.src = LIB;
    s.onload = cb;
    s.onerror = function () { say(T.fail); createBtn.disabled = false; };
    doc.head.appendChild(s);
  }
  // Se conecta al primer servidor que responda.
  function connect(i, ok) {
    broker = i;
    if (i >= BROKERS.length) { say(T.fail); createBtn.disabled = false; createBtn.hidden = false; return; }
    var my = ++gen, done = false;
    var opt = { connectTimeout: 7000, reconnectPeriod: 2000, clean: true, clientId: "ds4-" + myId + "-" + my };
    for (var k in BROKERS[i].o || {}) opt[k] = BROKERS[i].o[k];
    var c = window.mqtt.connect(BROKERS[i].u, opt);
    var fallback = setTimeout(function () { if (!done) { done = true; c.end(true); if (me === 0) connect(i + 1, ok); else say(T.fail); } }, 8000);
    c.on("connect", function () {
      if (my !== gen) return;
      if (!done) { done = true; clearTimeout(fallback); client = c; ok(); }
      c.subscribe(topic(me), { qos: 1 });
      if (me === 1) raw(0, { t: "hello", id: myId });
    });
    c.on("message", function (_, buf) {
      if (my !== gen) return;
      var m; try { m = JSON.parse(buf.toString()); } catch (e) { return; }
      receive(m);
    });
  }
  function leave() {
    gen++;
    if (client) { try { client.end(true); } catch (e) {} }
    client = null; linked = false; me = -1; room = ""; partner = ""; seq = 0; lastN = 0;
    names = ["", ""]; doc.ds4Names = null;
    clearInterval(beat);
    games.forEach(function (g) {
      if (!g.hasAttribute("data-me")) return;
      g.removeAttribute("data-me");
      g.dispatchEvent(new CustomEvent("ds4:players"));
    });
    box.classList.remove("live");
    pill.hidden = true;
    chat.hidden = true; openChat(false); cLog.innerHTML = ""; unread = 0; cN.hidden = true;
    wait();
  }

  // Cada juego avisa sus jugadas; acá se mandan a la otra pantalla.
  games.forEach(function (g) {
    g.addEventListener("ds4:act", function (e) { send({ g: idOf(g), a: e.detail }); });
  });
  doc.addEventListener("ds4:chose", function (e) { chosen = e.detail; send({ t: "game", slug: chosen }); });
  var h0 = (location.hash || "").slice(1);
  if (/^(olympikos|tour-eiffel|1812|2080)$/.test(h0)) chosen = h0;

  function receive(m) {
    lastSeen = Date.now();
    if (!pill.hidden && pill.classList.contains("off") && linked) live();
    if (m.t === "hello" && me === 0) {
      raw(1, { t: "welcome" });
      // El mismo Jugador 2 que se reconectó sigue la partida; uno nuevo (recargó la página) recibe una mesa nueva.
      if (linked && m.id === partner) return;
      partner = m.id; seq = 0; lastN = 0;
      return link();
    }
    if (m.t === "welcome" && me === 1) { if (!linked) link(); return; }
    if (m.t !== "m" || !linked) return;
    if (m.n <= lastN) return;
    lastN = m.n;
    var d = m.d;
    if (d.t === "name") { names[1 - me] = clean(d.v); return setNames(); }
    if (d.t === "chat") { if (typeof d.x === "string") addMsg(d.x.slice(0, 300), false); return; }
    if (d.t === "game") { chosen = d.slug; if (doc.ds4Choose) doc.ds4Choose(d.slug); return; }
    var sec = d.g && doc.getElementById(d.g), g = sec && sec.querySelector("[data-demo], [data-race]");
    if (g && g._ds4) g._ds4.apply(d.a);
  }
  function live() {
    pill.textContent = fill(T.pill, { name: nameOf(me) });
    pill.classList.remove("off");
    pill.hidden = false;
    chat.hidden = false;
    box.classList.add("live");
    say(fill(T.connected, { name: nameOf(me) }));
  }
  // Quedaron conectados: las dos pantallas juegan; Jugador 1 reparte la misma mesa para las dos.
  function link() {
    linked = true;
    games.forEach(function (g) { g.setAttribute("data-me", String(me)); g.setAttribute("data-players", "2"); });
    share.hidden = me !== 0;
    names[me] = clean(nameIn.value);
    send({ t: "name", v: names[me] });
    setNames();
    wait();
    if (me === 0) {
      games.forEach(function (g) {
        var a = g.hasAttribute("data-race") ? { k: "next", ri: 0 } : { k: "again", s: Math.floor(Math.random() * 2147483647) };
        g._ds4.apply(a);
        send({ g: idOf(g), a: a });
      });
      if (chosen) send({ t: "game", slug: chosen });
    } else games.forEach(function (g) { if (g._ds4) g._ds4.restart(); });
    // Latido: si no llega nada de la otra pantalla en 15 s, se avisa (y se recupera solo si vuelve).
    clearInterval(beat);
    lastSeen = Date.now();
    beat = setInterval(function () {
      raw(1 - me, { t: "ping" });
      if (Date.now() - lastSeen > 15000 && !pill.classList.contains("off")) {
        pill.textContent = T.pillOff;
        pill.classList.add("off");
        say(T.lost);
        box.classList.remove("live");
      }
    }, 5000);
  }

  function code() {
    var a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", c = "";
    for (var i = 0; i < 6; i++) c += a[Math.floor(Math.random() * a.length)];
    return c;
  }
  function create() {
    leave();
    me = 0; room = code();
    createBtn.disabled = true;
    say(T.joining);
    wait();
    loadLib(function () {
      connect(0, function () {
        var url = location.origin + location.pathname + "#sala-" + room + (broker ? "-" + broker : "");
        linkEl.value = url;
        wa.href = "https://wa.me/?text=" + encodeURIComponent(fill(T.share, { url: url }));
        share.hidden = false;
        createBtn.disabled = false;
        createBtn.hidden = true;
        say(T.waiting);
      });
    });
  }
  function join(c, b) {
    leave();
    radios.forEach(function (r) { r.checked = r.value === "online"; });
    radios.forEach(function (r) { if (r.checked) r.dispatchEvent(new Event("change", { bubbles: true })); });
    me = 1; room = c;
    box.hidden = false;
    createBtn.hidden = true;
    say(T.joining);
    wait();
    setTimeout(function () { box.scrollIntoView({ block: "center" }); }, 300);
    loadLib(function () {
      connect(b, function () {
        // Si la sala no contesta, se vuelve a saludar unas veces.
        var tries = 0, t = setInterval(function () {
          if (linked || me !== 1) return clearInterval(t);
          if (++tries > 6) { clearInterval(t); say(T.fail); return; }
          raw(0, { t: "hello", id: myId });
        }, 3000);
      });
    });
  }

  radios.forEach(function (r) {
    r.addEventListener("change", function () {
      box.hidden = !online();
      if (!online()) { leave(); share.hidden = true; createBtn.hidden = false; say(""); }
      wait();
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
    var m = /^#sala-([A-Z0-9]{6})(?:-(\d))?$/.exec(location.hash || "");
    if (m) { join(m[1], +(m[2] || 0)); return true; }
  }
  if (!fromHash() && online()) box.hidden = false;
  wait();
  // Si pegan el link de una sala en una pestaña que ya tenía la página abierta.
  window.addEventListener("hashchange", fromHash);
})();
