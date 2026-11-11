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

export const GAME_ORDER = ["olympikos", "tour-eiffel", "1812", "2080"];

export const GAMES = {
  olympikos: {
    price: 19,
    // Tienda actual (Wix). Reemplazar cuando haya tienda nueva.
    // Tienda de respaldo (Wix), por si falta un link de pago.
    store: "https://www.ds4games.com/product-page/olympikos",
    // Links de pago por país. En Argentina, Olympikos se compra en Toyco.
    links: { FR: "https://buy.stripe.com/6oU5kD5UL5uV2haedz0kE07", INT: "https://buy.stripe.com/6oUfZhdnd4qR3le1qN0kE08", AR: "https://toyco.com.ar/productos/olympikos/" },
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
    // Prefijo de las imágenes: oly-clue-…, oly-sport-…, oly-medal-…, oly-flag-…
    art: "oly",
    // Cartas de indicio que se muestran en la página. Imagen: oly-clue-<página del PDF de impresión de indicios>.
    clues: [3, 13, 15, 16, 17, 20, 23, 31, 32, 37, 38, 45, 54, 65, 70, 73],
    // Ronda de prueba con la variante para dos: cada `every` segundos juega una delegación rival en cada medalla.
    // Por ronda: los deportes de los aros 1 a 5 (número de la carta) y, por medalla (bronce, plata, oro),
    // [indicio, aro correcto, vertical]. Vertical: pista muy buena; horizontal: pista regular.
    // La primera ronda es el ejemplo del reglamento (el bate para la esgrima en silla de ruedas, horizontal).
    race: {
      every: 10,
      nations: ["ar", "fr", "us", "ke", "au", "cn"],
      home: { es: "ar", fr: "fr", en: "us" },
      rings: ["#1a1919", "#3d78ad", "#e4a758", "#43925b", "#cc4f5c"],
      rounds: [
        { sports: [24, 22, 2, 1, 25], medals: [[51, 2, false], [26, 3, true], [52, 4, false]] },
        { sports: [12, 29, 13, 20, 7], medals: [[18, 3, true], [28, 5, false], [64, 2, false]] },
        { sports: [21, 14, 28, 16, 11], medals: [[63, 5, true], [59, 1, false], [44, 3, false]] },
      ],
    },
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
    links: { FR: "https://buy.stripe.com/14A5kD1Ev9Lb6xq9Xj0kE09", INT: "https://buy.stripe.com/28E00j5UL3mN9JC8Tf0kE0a", AR: "https://buy.stripe.com/9B67sL2IzcXnbRK8Tf0kE0b" },
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
    // Las mismas secciones que 1812: cartas de Lector, cartas de Autor y ronda de prueba.
    art: "eif",
    // Las 48 cartas de Lector. Las seis primeras de cada fila son las de la mesa del ejemplo del reglamento.
    rows: [
      { key: "p", color: "#3b82f6", tall: true, cards: ["florera", "telefonista", "lumiere", "bailarina", "cireur", "policia", "cochera", "fort", "monet", "deshollinador", "reveilleur", "hermana"] },
      { key: "s", color: "#ef4444", cards: ["cabaret", "cafe", "petanca", "flores", "bouquinistes", "circo", "bici", "equitacion", "magia", "omnibus", "opera", "zoo"] },
      { key: "l", color: "#facc15", cards: ["luxemburgo", "orsay", "sacre-coeur", "invalides", "arco", "notre-dame", "bastilla", "catacumbas", "cementerio", "pont-neuf", "trocadero", "versalles"] },
      { key: "c", color: "#22c55e", cards: ["caneles", "fondue", "cognac", "croissants", "baguette", "macarons", "caracoles", "champagne", "ostras", "ranas", "quesos", "tartare"] },
    ],
    // Cartas de Autor de la tira (las otras cuatro están en la ronda de prueba). Imagen: eif-dream-<número>.
    dreams: [3, 4, 10, 13],
    // Ronda de prueba: la mesa del ejemplo del reglamento. Las pistas las eligió la web (código 5 1 6 3).
    // Cuatro rondas y una última oportunidad: si el Lector acierta ahí, gana solo.
    demo: {
      turns: 4,
      lastChance: true,
      rows: [
        { dreams: [7, 13, 3, 10], cards: ["florera", "telefonista", "lumiere", "bailarina", "cireur", "policia"], answer: 5 },
        { dreams: [16, 4, 18, 10], cards: ["cabaret", "cafe", "petanca", "flores", "bouquinistes", "circo"], answer: 1 },
        { dreams: [12, 16, 13, 3], cards: ["luxemburgo", "orsay", "sacre-coeur", "invalides", "arco", "notre-dame"], answer: 6 },
        { dreams: [18, 7, 4, 12], cards: ["caneles", "fondue", "cognac", "croissants", "baguette", "macarons"], answer: 3 },
      ],
      // Otras mesas posibles: cada partida nueva elige una por fila (carta correcta y sus 4 cartas de Autor).
      pool: [
        [{ card: "deshollinador", dreams: [16, 12, 10, 3] }, { card: "policia", dreams: [3, 16, 13, 10] }],
        [{ card: "magia", dreams: [10, 7, 3, 16] }, { card: "zoo", dreams: [4, 7, 16, 10] }],
        [{ card: "catacumbas", dreams: [10, 18, 4, 12] }, { card: "pont-neuf", dreams: [13, 7, 3, 12] }, { card: "versalles", dreams: [3, 13, 12, 7] }],
        [{ card: "quesos", dreams: [4, 7, 18, 3] }, { card: "champagne", dreams: [18, 7, 13, 16] }],
      ],
    },
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
    links: { FR: "https://buy.stripe.com/7sY28rfvlcXndZSd9v0kE0c", INT: "https://buy.stripe.com/14A5kD6YP5uVdZSd9v0kE0d", AR: "https://buy.stripe.com/5kQ9AT1Evg9zaNG5H30kE0e" },
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
        { dreams: [8, 18, 46, 25], cards: ["gaucho", "lavandera", "granadero", "cacique", "fraile", "dama"], answer: 2 },
        { dreams: [11, 27, 6, 52], cards: ["llegada", "imprenta", "misa", "batalla", "manzana", "naipes"], answer: 4 },
        { dreams: [9, 44, 58, 39], cards: ["rosario", "jujuy", "cabildo", "centro", "tucuman", "lujan"], answer: 3 },
        { dreams: [29, 57, 12, 2], cards: ["locro", "empanadas", "mate", "carbonada", "vino", "asado"], answer: 1 },
      ],
      // Otras mesas posibles: cada partida nueva elige una por fila (carta correcta y sus 4 cartas de Autor).
      pool: [
        [{ card: "gaucho", dreams: [5, 13, 15, 49] }, { card: "granadero", dreams: [11, 27, 52, 6] }, { card: "fraile", dreams: [17, 37, 41, 14] }],
        [{ card: "naipes", dreams: [43, 36, 53, 28] }, { card: "misa", dreams: [41, 14, 17, 22] }, { card: "barco", dreams: [25, 59, 1, 21] }],
        [{ card: "cataratas", dreams: [8, 25, 46, 11] }, { card: "mendoza", dreams: [39, 2, 5, 26] }, { card: "ruinas", dreams: [33, 38, 34, 31] }],
        [{ card: "vino", dreams: [39, 14, 25, 2] }, { card: "mate", dreams: [12, 57, 30, 50] }, { card: "pollo", dreams: [51, 10, 22, 13] }, { card: "asado", dreams: [30, 60, 15, 51] }],
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
  // 2080: el próximo Secret Stories (todavía sin imprimir). soon: sin precio ni compra, con "Avisame cuando salga".
  // Igual que Les Secrets de la Tour Eiffel, salvo una regla: los Lectores dicen su código en voz alta, pero el Autor
  // le contesta a cada uno en privado cuántas cifras acertó.
  "2080": {
    soon: true,
    price: 19,
    store: "",
    links: { FR: "", INT: "", AR: "" },
    box: "f80-box",
    hero: "f80-hero",
    tile: "f80-tile",
    players: "3–5",
    minutes: 25,
    profile: { luck: 2, logic: 5, team: 2, strategy: 4, speed: 1, talk: 3 },
    complexity: 2,
    best: "4–5",
    gallery: [
      ["f80-box-1", "box1"], ["f80-box-2", "box2"], ["f80-back-personajes", "backP", "tall"], ["f80-back-situaciones", "backS"],
      ["f80-back-lugares", "backL"], ["f80-back-inventos", "backI"],
    ],
    art: "f80",
    // Cartas de Lector de "2080 juego futurista/Cartas para imprimir" (elegidas por Diego el 11/11/2026). Imagen: f80-card-<código>.
    rows: [
      { key: "p", color: "#3b82f6", tall: true, cards: ["p01", "p02", "p03", "p04", "p05", "p06", "p07", "p08", "p09", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20", "p21", "p22", "p23", "p24", "p25", "p26", "p27", "p28", "p29", "p30", "p31", "p32", "p33", "p34", "p35", "p36", "p37", "p38", "p39", "p40", "p41", "p42", "p43", "p44", "p45", "p46", "p47", "p48", "p49", "p50", "p51"] },
      { key: "s", color: "#ef4444", cards: ["s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s29", "s30", "s31", "s32", "s33", "s34", "s35", "s36"] },
      { key: "l", color: "#facc15", cards: ["l01", "l02", "l03", "l04", "l05", "l06", "l07", "l08", "l09", "l10", "l11", "l12", "l13", "l14", "l15", "l16", "l17", "l18", "l19", "l20", "l21", "l22", "l23", "l24", "l25", "l26", "l27", "l28"] },
      { key: "i", color: "#22c55e", cards: ["i01", "i02", "i03", "i04", "i05", "i06", "i07", "i08", "i09", "i10", "i11", "i12", "i13", "i14", "i15", "i16", "i17", "i18", "i19", "i20", "i21", "i22", "i23", "i24", "i25", "i26", "i27", "i28", "i29", "i30", "i31"] },
    ],
    // Cartas Visión que se muestran en la página. Imagen: f80-dream-<número de "Cartas para imprimir/5 Visión">.
    dreams: [15, 18, 19, 33, 47, 57, 66, 70, 74, 85, 87, 94, 103, 106, 108, 111],
    // Ronda de prueba (código 4 3 6 5). Dos Lectores rivales dicen su código en voz alta; sus aciertos son secretos.
    demo: {
      turns: 4,
      lastChance: true,
      rows: [
        { dreams: [80, 100, 36, 63], cards: ["p01", "p02", "p04", "p36", "p05", "p06"], answer: 4 },
        { dreams: [76, 101, 29, 46], cards: ["s01", "s02", "s03", "s04", "s05", "s06"], answer: 3 },
        { dreams: [8, 11, 98, 21], cards: ["l03", "l04", "l05", "l06", "l08", "l09"], answer: 6 },
        { dreams: [4, 5, 17, 14], cards: ["i10", "i02", "i09", "i07", "i11", "i08"], answer: 5 },
      ],
      // Otras mesas posibles: cada partida nueva elige una por fila (carta correcta y sus 4 cartas Visión).
      pool: [
        [{ card: "p30", dreams: [68, 54, 40, 97] }, { card: "p15", dreams: [75, 22, 106, 69] }, { card: "p26", dreams: [59, 99, 53, 30] }],
        [{ card: "s16", dreams: [107, 36, 52, 97] }, { card: "s22", dreams: [34, 11, 64, 98] }, { card: "s32", dreams: [108, 9, 40, 12] }],
        [{ card: "l11", dreams: [26, 1, 106, 31] }, { card: "l02", dreams: [81, 102, 27, 61] }, { card: "l24", dreams: [56, 42, 35, 47] }],
        [{ card: "i09", dreams: [84, 69, 63, 40] }, { card: "i26", dreams: [25, 48, 97, 112] }, { card: "i07", dreams: [72, 111, 14, 20] }],
      ],
      // Dos Lectores rivales: sus códigos se inventan en cada partida (nunca aciertan los cuatro).
      rivals: 2,
    },
    pdfs: [],
    videos: [],
  },
};
