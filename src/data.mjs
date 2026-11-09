// Datos que comparten todos los idiomas. Cambiá precios, links de compra o el tipo de cambio acá.

export const SITE = {
  // Dominio propio. Vacío: la web se ve en simonet46.github.io/ds4games.
  // Para pasar a www.ds4games.com: poné "www.ds4games.com", corré `node build.mjs` y subí los cambios
  // (crea docs/CNAME y cambia todas las direcciones absolutas). Los pasos del DNS están en el README.
  domain: "",
  // Dirección mientras no haya dominio propio.
  baseUrl: "https://simonet46.github.io/ds4games/",
  email: "juegosds4games@gmail.com",
  city: "Montpellier, France",
  social: {
    instagram: "https://www.instagram.com/ds4games/",
    facebook: "https://www.facebook.com/ds4games",
    youtube: "https://www.youtube.com/channel/UC0UYlncFWm1ywQL2jl7iVnA",
  },
  // Pesos por euro para mostrar precios aproximados a Argentina (referencia: cotización minorista, julio de 2026).
  rate: 1750,
  // Envíos desde Francia, en euros.
  ship: { FR: 10, INT: 12, AR: 20 },
  langs: ["es", "fr", "en"],
  slugs: {
    es: { about: "nosotros", contact: "contacto" },
    fr: { about: "a-propos", contact: "contact" },
    en: { about: "about", contact: "contact" },
  },
};

// Perfil de cada juego, de 1 a 5. Ajustalo si querés otro valor.
// luck: suerte · logic: lógica · team: trabajo en equipo · strategy: estrategia · speed: rapidez · talk: conversación
export const PROFILE_KEYS = ["luck", "logic", "team", "strategy", "speed", "talk"];

export const GAME_ORDER = ["olympikos", "tour-eiffel", "1812"];

export const GAMES = {
  olympikos: {
    price: 19,
    // Tienda actual (Wix). Reemplazar cuando haya tienda nueva.
    // Tienda de respaldo (Wix), por si falta un link de pago.
    store: "https://www.ds4games.com/product-page/olympikos",
    // Links de pago por país. En Argentina, Olympikos se compra en Toyco.
    links: { FR: "", INT: "", AR: "https://toyco.com.ar/productos/olympikos/" },
    toycoAR: true,
    box: "oly-box",
    hero: "oly-marathon",
    tile: "oly-sprint",
    players: "2–6",
    minutes: 20,
    profile: { luck: 3, logic: 2, team: 1, strategy: 2, speed: 5, talk: 2 },
    complexity: 1,
    best: "4–6",
    gallery: [
      ["oly-handball", "handball"], ["oly-sitting-volley", "sittingVolley"], ["oly-breakdance", "breakdance"],
      ["oly-table-tennis", "tableTennis"], ["oly-climbing", "climbing"], ["oly-judo", "judo"],
      ["oly-goalball", "goalball"], ["oly-biathlon", "biathlon"], ["oly-boxing", "boxing"],
      ["oly-bmx", "bmx"], ["oly-ski-jump", "skiJump"], ["oly-wheelchair-race", "wheelchairRace"],
      ["oly-pole-vault", "poleVault"], ["oly-gymnastics", "gymnastics"], ["oly-hurdles", "hurdles"],
      ["oly-basketball", "basketball"],
    ],
    pdfs: [
      { file: "olympikos-reglas-es.pdf", lang: "ES", kind: "rules" },
      { file: "olympikos-regles-fr.pdf", lang: "FR", kind: "rules" },
      { file: "olympikos-rules-en.pdf", lang: "EN", kind: "rules" },
      { file: "olympikos-anecdotas-es.pdf", lang: "ES", kind: "booklet" },
      { file: "olympikos-livret-fr.pdf", lang: "FR", kind: "booklet" },
      { file: "olympikos-anecdotes-en.pdf", lang: "EN", kind: "booklet" },
    ],
    videos: [],
  },
  "tour-eiffel": {
    price: 19,
    store: "https://www.ds4games.com/product-page/copia-de-olympikos",
    links: { FR: "", INT: "", AR: "" },
    box: "eif-box",
    hero: "eif-components-wood",
    tile: "eif-parchment",
    players: "3–5",
    minutes: 25,
    profile: { luck: 2, logic: 5, team: 2, strategy: 3, speed: 1, talk: 3 },
    complexity: 2,
    best: "4–5",
    gallery: [
      ["eif-box-photo", "box"], ["eif-dancer", "dancer", "tall"], ["eif-police", "police", "tall"], ["eif-nun", "nun", "tall"],
      ["eif-components", "components"], ["eif-components-wood", "all"], ["eif-box-dark", "frontBack"],
    ],
    pdfs: [
      { file: "tour-eiffel-reglamento-es.pdf", lang: "ES", kind: "rules" },
      { file: "tour-eiffel-regles-fr.pdf", lang: "FR", kind: "rules" },
    ],
    videos: [
      { id: "45Xt7FNBv5Q", lang: "ES", kind: "video" },
      { id: "E6ZELCMXZ7A", lang: "FR", kind: "rulesVideo" },
      { id: "LUd8I9ea92s", lang: "FR", kind: "playVideo" },
    ],
  },
  "1812": {
    price: 19,
    store: "https://www.ds4games.com/product-page/1812",
    links: { FR: "", INT: "", AR: "" },
    box: "arg-box",
    hero: "arg-art",
    tile: "arg-open-photo",
    players: "2–7",
    minutes: 20,
    profile: { luck: 2, logic: 4, team: 5, strategy: 3, speed: 2, talk: 5 },
    complexity: 2,
    best: "3–5",
    gallery: [
      ["arg-box-photo", "box"], ["arg-author-art", "art", "tall"], ["arg-book-dark", "book"], ["arg-flag", "flag", "tall"], ["arg-open-photo", "dice"],
      ["arg-gameplay", "play"], ["arg-shelf", "shelf", "tall"], ["arg-cards", "cards"], ["arg-grid", "grid"],
    ],
    levels: [[1, 5, true, 5], [2, 6, true, 4], [3, 6, true, 4], [4, 6, false, 4], [5, 6, false, 3]],
    // Prefijo de las imágenes de cartas: arg-card-…, arg-dream-…, arg-sobre-…
    art: "arg",
    // Las 40 cartas de Lector, en el orden del archivo de impresión. Imagen: arg-card-<nombre>. Nombres en i18n (cardNames).
    // Colores de fila: los de los dados (azul, rojo, amarillo, verde).
    rows: [
      { key: "p", color: "#3b82f6", tall: true, cards: ["ama-llaves", "vendedora", "cacique", "granadero", "gaucho", "velero", "senor", "lavandera", "dama", "fraile"] },
      { key: "s", color: "#ef4444", cards: ["cena", "baile", "llegada", "imprenta", "batalla", "misa", "manzana", "naipes", "barco", "pato"] },
      { key: "l", color: "#facc15", cards: ["rosario", "ruinas", "fuerte", "centro", "cataratas", "mendoza", "lujan", "jujuy", "tucuman", "cabildo"] },
      { key: "c", color: "#22c55e", cards: ["bizcochos", "vino", "mate", "empanadas", "carbonada", "pastelitos", "pollo", "asado", "mazamorra", "locro"] },
    ],
    // Cartas de Autor (oníricas) que se muestran en la página. Imagen: arg-dream-<número>.
    dreams: [1, 3, 10, 13, 19, 22, 24, 25, 33, 37, 40, 44, 45, 46, 51, 57],
    // Ronda de prueba: el ejemplo del reglamento (nivel 3, código 2 4 3 1).
    // Por fila: carta de Autor, las 6 cartas de Lector en la mesa y la columna correcta (1 a 6).
    demo: {
      turns: 4,
      rows: [
        { dream: 8, cards: ["gaucho", "lavandera", "granadero", "cacique", "fraile", "dama"], answer: 2 },
        { dream: 11, cards: ["llegada", "imprenta", "misa", "batalla", "manzana", "naipes"], answer: 4 },
        { dream: 9, cards: ["rosario", "jujuy", "cabildo", "centro", "tucuman", "lujan"], answer: 3 },
        { dream: 29, cards: ["locro", "empanadas", "mate", "carbonada", "vino", "asado"], answer: 1 },
      ],
    },
    pdfs: [
      { file: "1812-reglamento-es.pdf", lang: "ES", kind: "rules" },
      { file: "1812-regles-fr.pdf", lang: "FR", kind: "rules" },
      { file: "1812-rules-en.pdf", lang: "EN", kind: "rules" },
    ],
    videos: [
      { id: "K6c30lSuaHs", lang: "ES", kind: "rulesVideo" },
      { id: "Hwxbh_eW9pU", lang: "FR", kind: "rulesVideo" },
    ],
  },
};
