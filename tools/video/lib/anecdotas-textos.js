// Textos de los videos narrados de anécdotas de Olympikos.
// Salen del libreto "Entre bastidores de los JJ.OO." (es) y del livret (fr), adaptados para leer en voz alta.
// Cada línea es [lo que dice la voz, el subtítulo]. La voz lee los números en letras; el subtítulo los muestra en cifras.
// La línea 0 es el título de la anécdota. La voz de cada línea está en tools/video/voz/<id>-<idioma>-<nn>.mp3.
window.ANEC_OUTRO = {
  es: ["Esta y muchas otras anécdotas vienen en el libreto de Olympikos.", "Esta y muchas otras anécdotas vienen en el libreto de Olympikos."],
  fr: ["Retrouvez cette anecdote et bien d’autres dans le livret d’Olympikos.", "Retrouvez cette anecdote et bien d’autres dans le livret d’Olympikos."],
};
window.ANEC_UI = {
  es: { kick: "Anécdotas olímpicas", booklet: "El libreto de Olympikos", chips: ["2–6 jugadores", "+8 años", "20 min"] },
  fr: { kick: "Anecdotes olympiques", booklet: "Le livret d’Olympikos", chips: ["2–6 joueurs", "8 ans et +", "20 min"] },
};
window.ANEC = {
  bradbury: {
    es: {
      sport: "Patinaje de velocidad",
      lines: [
        ["Los últimos serán los primeros.", "Los últimos serán los primeros"],
        ["Salt Lake City, dos mil dos. Final de los mil metros de patinaje de velocidad.", "Salt Lake City, 2002. Final de los 1000 metros de patinaje de velocidad."],
        ["A dos vueltas del final, el australiano Steven Bradbury está lejos de los cuatro primeros.", "A dos vueltas del final, el australiano Steven Bradbury está lejos de los cuatro primeros."],
        ["Y ya era una sorpresa verlo en esa final...", "Y ya era una sorpresa verlo en esa final…"],
        ["Cuando de repente... ¡sus cuatro adversarios se caen!", "Cuando de repente… ¡sus cuatro adversarios se caen!"],
        ["Bradbury se convierte en el primer campeón olímpico de invierno del hemisferio sur.", "Bradbury se convierte en el primer campeón olímpico de invierno del hemisferio sur."],
        ["Desde entonces, en Australia, cuando pasa algo improbable, dicen: hacer una Bradbury.", "Desde entonces, en Australia, cuando pasa algo improbable, dicen «hacer una Bradbury»."],
      ],
    },
    fr: {
      sport: "Patinage de vitesse",
      lines: [
        ["Les derniers seront les premiers.", "Les derniers seront les premiers"],
        ["Salt Lake City, deux mille deux. Finale du mille mètres de patinage de vitesse.", "Salt Lake City, 2002. Finale du 1000 mètres de patinage de vitesse."],
        ["À deux tours de l’arrivée, l’Australien Steven Bradbury est loin des quatre premiers.", "À deux tours de l’arrivée, l’Australien Steven Bradbury est loin des quatre premiers."],
        ["Il faut dire qu’il est déjà surprenant de le voir en finale...", "Il faut dire qu’il est déjà surprenant de le voir en finale…"],
        ["Quand tout à coup... ses quatre adversaires tombent !", "Quand tout à coup… ses quatre adversaires tombent !"],
        ["Le voici propulsé premier champion olympique d’hiver de l’hémisphère Sud.", "Le voici propulsé premier champion olympique d’hiver de l’hémisphère Sud."],
        ["Depuis, en Australie, on dit : faire une Bradbury, quand un événement improbable se produit.", "Depuis, en Australie, on dit « faire une Bradbury » quand un événement improbable se produit."],
      ],
    },
  },
  vinci: {
    es: {
      sport: "Halterofilia",
      lines: [
        ["¡La cabeza pelada trae suerte!", "¡La cabeza pelada trae suerte!"],
        ["Juegos de Melbourne, mil novecientos cincuenta y seis. Es la hora del pesaje.", "Juegos de Melbourne, 1956. Es la hora del pesaje."],
        ["El estadounidense Charles Vinci pesa setecientos cincuenta gramos más que los cincuenta y seis kilos permitidos.", "El estadounidense Charles Vinci pesa 750 gramos más que los 56 kilos permitidos."],
        ["Después de una hora de carrera y sudor, todavía le sobran doscientos gramos.", "Después de una hora de carrera y sudor, todavía le sobran 200 gramos."],
        ["Entonces se le ocurre una idea: ¡afeitarse la cabeza!", "Entonces se le ocurre una idea: ¡afeitarse la cabeza!"],
        ["Con menos pelo, gana la medalla de oro... ¡y cuatro años después, lo vuelve a lograr!", "Con menos pelo, gana la medalla de oro… ¡y cuatro años después, lo vuelve a lograr!"],
      ],
    },
    fr: {
      sport: "Haltérophilie",
      lines: [
        ["D’un cheveu !", "D’un cheveu !"],
        ["Jeux de Melbourne, mille neuf cent cinquante-six. C’est l’heure de la pesée.", "Jeux de Melbourne, 1956. C’est l’heure de la pesée."],
        ["L’Américain Charles Vinci dépasse de sept cent cinquante grammes les cinquante-six kilos autorisés.", "L’Américain Charles Vinci dépasse de 750 grammes les 56 kg autorisés."],
        ["Après une heure de course et de transpiration, il reste deux cents grammes au-dessus de la limite.", "Après une heure de course et de transpiration, il reste 200 grammes au-dessus de la limite."],
        ["C’est alors qu’il a une idée : se raser le crâne !", "C’est alors qu’il a une idée : se raser le crâne !"],
        ["Les cheveux en moins, il remporte la médaille d’or... et fera même le doublé quatre ans plus tard !", "Les cheveux en moins, il remporte la médaille d’or… et fera même le doublé quatre ans plus tard !"],
      ],
    },
  },
  karelin: {
    es: {
      sport: "Lucha",
      lines: [
        ["La montaña rusa.", "La montaña rusa"],
        ["A los quince años, Aleksandr Karelin se rompe la pierna durante un torneo de lucha.", "A los 15 años, Aleksandr Karelin se rompe la pierna durante un torneo de lucha."],
        ["Su madre trata de convencerlo de que deje...", "Su madre trata de convencerlo de que deje…"],
        ["Su respuesta es contundente: No voy a abandonar un deporte al que ya le he dado una pierna.", "Su respuesta es contundente: «No voy a abandonar un deporte al que ya le he dado una pierna»."],
        ["Apodado Alejandro el Grande, el ruso fue tres veces campeón olímpico de lucha grecorromana.", "Apodado «Alejandro el Grande», el ruso fue tres veces campeón olímpico de lucha grecorromana."],
        ["Su carrera: ochocientas ochenta y siete victorias, y solo dos derrotas.", "Su carrera: 887 victorias y solo 2 derrotas."],
        ["Permaneció invicto durante trece años.", "Permaneció invicto durante 13 años."],
      ],
    },
    fr: {
      sport: "Lutte",
      lines: [
        ["La montagne russe.", "La montagne russe"],
        ["À quinze ans, Aleksandr Karelin se casse la jambe lors d’un tournoi de lutte.", "À 15 ans, Aleksandr Karelin se casse la jambe lors d’un tournoi de lutte."],
        ["Sa mère tente alors de le convaincre d’arrêter...", "Sa mère tente alors de le convaincre d’arrêter…"],
        ["Sa réponse est cinglante : Je ne vais pas abandonner un sport auquel j’ai déjà donné une jambe !", "Sa réponse est cinglante : « Je ne vais pas abandonner un sport auquel j’ai déjà donné une jambe ! »"],
        ["Surnommé Alexandre le Grand, le Russe fut ensuite trois fois champion olympique de lutte gréco-romaine.", "Surnommé « Alexandre le Grand », le Russe fut ensuite trois fois champion olympique de lutte gréco-romaine."],
        ["Sa carrière : huit cent quatre-vingt-sept victoires, et deux défaites.", "Sa carrière : 887 victoires, 2 défaites."],
        ["Il demeura invaincu pendant treize ans.", "Il demeura invaincu pendant 13 ans."],
      ],
    },
  },
  stevenson: {
    es: {
      sport: "Boxeo",
      lines: [
        ["El dinero no hace al boxeador.", "El dinero no hace al boxeador"],
        ["El cubano Teófilo Stevenson fue tres veces campeón olímpico de boxeo: en mil novecientos setenta y dos, setenta y seis y ochenta.", "El cubano Teófilo Stevenson fue tres veces campeón olímpico de boxeo: en 1972, 1976 y 1980."],
        ["Firme defensor del deporte amateur y de Cuba, se negó a emigrar a Estados Unidos para hacerse profesional.", "Firme defensor del deporte amateur y de Cuba, se negó a emigrar a Estados Unidos para hacerse profesional."],
        ["Y eso que le ofrecían millones de dólares para enfrentarse a Muhammad Ali.", "Y eso que le ofrecían millones de dólares para enfrentarse a Muhammad Ali."],
        ["Se dice que respondió: ¿Qué es un millón de dólares, comparado con el amor de ocho millones de cubanos?", "Se dice que respondió: «¿Qué es un millón de dólares comparado con el amor de ocho millones de cubanos?»"],
      ],
    },
    fr: {
      sport: "Boxe",
      lines: [
        ["L’argent ne fait pas le boxeur.", "L’argent ne fait pas le boxeur"],
        ["Le Cubain Teófilo Stevenson a été trois fois champion olympique de boxe : en mille neuf cent soixante-douze, soixante-seize et quatre-vingt.", "Le Cubain Teófilo Stevenson a été trois fois champion olympique de boxe : en 1972, 1976 et 1980."],
        ["Fervent défenseur du sport amateur et de Cuba, il a refusé d’immigrer aux États-Unis pour passer professionnel.", "Fervent défenseur du sport amateur et de Cuba, il a refusé d’immigrer aux États-Unis pour passer professionnel."],
        ["Et ce, malgré les millions de dollars qu’on lui proposait pour affronter Mohamed Ali.", "Et ce, malgré les millions de dollars qu’on lui proposait pour affronter Mohamed Ali."],
        ["Il aurait déclaré : Qu’est-ce qu’un million de dollars, comparé à l’amour de huit millions de Cubains ?", "Il aurait déclaré : « Qu’est-ce qu’un million de dollars comparé à l’amour de huit millions de Cubains ? »"],
      ],
    },
  },
  im: {
    es: {
      sport: "Tiro con arco",
      lines: [
        ["El impresionista impresionante.", "El impresionista impresionante"],
        ["Juegos de Londres, dos mil doce. Seiscientos noventa y nueve puntos en setenta y dos flechas.", "Juegos de Londres, 2012. 699 puntos en 72 flechas."],
        ["Con ese puntaje, el surcoreano Im Dong-Hyun se convierte en el recordista mundial de tiro con arco.", "Con ese puntaje, el surcoreano Im Dong-Hyun se convierte en el recordista mundial de tiro con arco."],
        ["Sin embargo, según los criterios estadounidenses, es legalmente ciego.", "Sin embargo, según los criterios estadounidenses, es «legalmente ciego»."],
        ["Tiene una agudeza visual de un décimo en el ojo izquierdo, y de dos décimos en el derecho.", "Tiene una agudeza visual de 1/10 en el ojo izquierdo y de 2/10 en el derecho."],
        ["Según él, cuando mira el blanco, se parece a una pintura impresionista sumergida en agua.", "Según él, cuando mira el blanco, se parece a una pintura impresionista sumergida en agua."],
      ],
    },
    fr: {
      sport: "Tir à l’arc",
      lines: [
        ["L’impressionniste impressionnant.", "L’impressionniste impressionnant"],
        ["Jeux de Londres, deux mille douze. Six cent quatre-vingt-dix-neuf points en soixante-douze flèches.", "Jeux de Londres, 2012. 699 points en 72 flèches."],
        ["Avec ce score, le Sud-Coréen Im Dong-Hyun devient recordman du monde de tir à l’arc.", "Avec ce score, le Sud-Coréen Im Dong-Hyun devient recordman du monde de tir à l’arc."],
        ["Pourtant, il est légalement aveugle, selon les critères américains !", "Pourtant, il est « légalement aveugle » selon les critères américains !"],
        ["Il a une acuité visuelle de un dixième à l’œil gauche, et de deux dixièmes à l’œil droit.", "Il a une acuité visuelle de 1/10 à l’œil gauche et de 2/10 à l’œil droit."],
        ["Selon ses dires, quand il regarde la cible, elle ressemble à un tableau impressionniste trempé dans l’eau.", "Selon ses dires, quand il regarde la cible, elle ressemble à un tableau impressionniste trempé dans l’eau."],
      ],
    },
  },
};
