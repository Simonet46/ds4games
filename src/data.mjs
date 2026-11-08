// Datos que comparten todos los idiomas. Cambiá precios, links de compra o el tipo de cambio acá.

export const SITE = {
  // Cuando tengas el dominio, cambiá esta URL (se usa para el sitemap, el canonical y las imágenes al compartir).
  baseUrl: "https://simonet46.github.io/ds4games/",
  email: "info@ds4games.com",
  city: "Montpellier, France",
  social: {
    instagram: "https://www.instagram.com/ds4games/",
    facebook: "https://www.facebook.com/ds4games",
    youtube: "https://www.youtube.com/channel/UC0UYlncFWm1ywQL2jl7iVnA",
  },
  // Pesos por euro para mostrar precios aproximados a Argentina (referencia: cotización minorista, julio de 2026).
  rate: 1750,
  // Envío desde Francia a Argentina, en euros.
  shipAR: 20,
  langs: ["es", "fr", "en"],
  slugs: {
    es: { about: "nosotros", contact: "contacto" },
    fr: { about: "a-propos", contact: "contact" },
    en: { about: "about", contact: "contact" },
  },
};

export const GAME_ORDER = ["olympikos", "tour-eiffel", "1812"];

export const GAMES = {
  olympikos: {
    price: 18,
    // Tienda actual (Wix). Reemplazar cuando haya tienda nueva.
    store: "https://www.ds4games.com/product-page/olympikos",
    // En Argentina se compra en Toyco.
    storeAR: "https://toyco.com.ar/productos/olympikos/",
    box: "oly-box",
    hero: "oly-marathon",
    tile: "oly-sprint",
    players: "2–6",
    minutes: 20,
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
    price: 20,
    store: "https://www.ds4games.com/product-page/copia-de-olympikos",
    storeAR: null,
    box: "eif-box",
    hero: "eif-components-wood",
    tile: "eif-parchment",
    players: "3–5",
    minutes: 25,
    gallery: [
      ["eif-box-photo", "box"], ["eif-components", "components"], ["eif-components-wood", "all"], ["eif-box-dark", "frontBack"],
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
    storeAR: null,
    box: "arg-box",
    hero: "arg-art",
    tile: "arg-open-photo",
    players: "2–7",
    minutes: 20,
    gallery: [
      ["arg-box-photo", "box"], ["arg-open-photo", "dice"], ["arg-gameplay", "play"],
      ["arg-cards", "cards"], ["arg-grid", "grid"], ["arg-art", "art"],
    ],
    levels: [[1, 5, true, 5], [2, 6, true, 4], [3, 6, true, 4], [4, 6, false, 4], [5, 6, false, 3]],
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
