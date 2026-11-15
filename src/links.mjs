// Cartas de Autor que evocan cada carta correcta de la partida de prueba, con puntaje (1 débil, 2 buena, 3 fuerte)
// y por qué. Las cuatro de data.mjs (demo.rows/pool) ya tienen texto en src/i18n/whys.mjs; acá solo va su puntaje.
// Juego → carta de Lector → número de carta de Autor → { s, es, fr, en }.
export const LINKS = {
  "tour-eiffel": {
    "cireur": {
      "7": {
        "s": 3
      },
      "13": {
        "s": 1
      },
      "3": {
        "s": 2
      },
      "10": {
        "s": 2
      },
      "18": {
        "s": 2,
        "es": "Los zapatos rojos del señor de traje brillan como recién lustrados.",
        "fr": "Les chaussures rouges du monsieur en costume brillent comme si on venait de les cirer.",
        "en": "The man in the suit has shiny red shoes, as if they had just been polished."
      },
      "16": {
        "s": 1,
        "es": "Un chico que anda por la calle de noche: la calle es donde trabaja el lustrabotas.",
        "fr": "Un gamin qui court dans la rue la nuit : la rue, c’est là que travaille le cireur.",
        "en": "A kid out in the street at night: the street is where the shoeshine boy works."
      },
      "12": {
        "s": 1,
        "es": "Columnas de piedra, como las del edificio con cúpula que está detrás del lustrabotas.",
        "fr": "Des colonnes de pierre, comme celles du bâtiment à coupole derrière le cireur.",
        "en": "Stone columns, like those of the domed building behind the shoeshine boy."
      }
    },
    "cabaret": {
      "16": {
        "s": 3
      },
      "4": {
        "s": 1
      },
      "18": {
        "s": 2
      },
      "10": {
        "s": 1
      },
      "3": {
        "s": 1,
        "es": "Un señor de galera, como el espectador que aplaude junto al escenario.",
        "fr": "Un monsieur en haut-de-forme, comme le spectateur qui applaudit près de la scène.",
        "en": "A gentleman in a top hat, like the spectator applauding by the stage."
      }
    },
    "notre-dame": {
      "12": {
        "s": 3
      },
      "16": {
        "s": 2
      },
      "13": {
        "s": 1
      },
      "3": {
        "s": 1
      },
      "10": {
        "s": 1,
        "es": "El sombrero alto y puntiagudo, como la aguja de la catedral.",
        "fr": "Le chapeau haut et pointu, comme la flèche de la cathédrale.",
        "en": "The tall pointed hat, like the cathedral’s spire."
      }
    },
    "cognac": {
      "18": {
        "s": 3
      },
      "7": {
        "s": 2
      },
      "4": {
        "s": 1
      },
      "12": {
        "s": 1
      },
      "16": {
        "s": 1,
        "es": "El farol encendido en la noche, como la vela que alumbra la mesa del coñac.",
        "fr": "Le réverbère allumé dans la nuit, comme la bougie qui éclaire la table du cognac.",
        "en": "The lit street lamp at night, like the candle lighting the cognac table."
      },
      "3": {
        "s": 1,
        "es": "Un caballero de galera: el coñac y los habanos son cosa de señores.",
        "fr": "Un monsieur en haut-de-forme : le cognac et les cigares, c’est une affaire de messieurs.",
        "en": "A gentleman in a top hat: cognac and cigars are a gentleman’s pleasure."
      },
      "13": {
        "s": 1,
        "es": "Ella lee un libro; junto al coñac hay una libreta y una pluma.",
        "fr": "Elle lit un livre ; à côté du cognac, il y a un carnet et une plume.",
        "en": "She is reading a book; next to the cognac lie a notebook and a quill."
      }
    },
    "deshollinador": {
      "16": {
        "s": 3
      },
      "12": {
        "s": 2
      },
      "10": {
        "s": 1
      },
      "3": {
        "s": 2
      },
      "7": {
        "s": 2,
        "es": "Un señor mete una manivela por el cuello de la botella y caen migas, como el cepillo que baja por la chimenea.",
        "fr": "Un homme enfonce une manivelle dans le goulot et des miettes tombent, comme la brosse qui descend dans la cheminée.",
        "en": "A man pushes a crank down the bottle’s neck and crumbs fall, like the brush going down the chimney."
      },
      "18": {
        "s": 1,
        "es": "Volutas de humo bajo el techo del cuarto, como el humo de las chimeneas.",
        "fr": "Des volutes de fumée sous le plafond, comme la fumée des cheminées.",
        "en": "Wisps of smoke under the ceiling, like the smoke from the chimneys."
      },
      "13": {
        "s": 1,
        "es": "Otro chico en apuros, como el deshollinador que trabaja descalzo en las alturas.",
        "fr": "Un autre gamin en difficulté, comme le ramoneur qui travaille pieds nus tout là-haut.",
        "en": "Another kid in trouble, like the chimney sweep working barefoot up high."
      }
    },
    "policia": {
      "3": {
        "s": 1
      },
      "16": {
        "s": 3
      },
      "13": {
        "s": 2
      },
      "10": {
        "s": 2
      },
      "18": {
        "s": 1,
        "es": "Un señor de bigote, como el del policía, asustado por manos que salen del piso.",
        "fr": "Un monsieur moustachu, comme le policier, effrayé par des mains qui sortent du sol.",
        "en": "A mustached man, like the policeman, frightened by hands coming out of the floor."
      },
      "7": {
        "s": 1,
        "es": "Gansos encerrados en una botella, como presos en el calabozo.",
        "fr": "Des oies enfermées dans une bouteille, comme des prisonniers au cachot.",
        "en": "Geese locked inside a bottle, like prisoners in a cell."
      },
      "4": {
        "s": 1,
        "es": "Hormigas que se llevan la comida a escondidas: pequeños ladrones para atrapar.",
        "fr": "Des fourmis qui emportent la nourriture en douce : de petits voleurs à attraper.",
        "en": "Ants sneaking off with the food: little thieves to catch."
      },
      "12": {
        "s": 1,
        "es": "Gárgolas que vigilan desde lo alto, como un guardia en su puesto.",
        "fr": "Des gargouilles qui surveillent d’en haut, comme un agent à son poste.",
        "en": "Gargoyles keeping watch from above, like an officer on duty."
      }
    },
    "magia": {
      "10": {
        "s": 3
      },
      "7": {
        "s": 2
      },
      "3": {
        "s": 1
      },
      "16": {
        "s": 2
      },
      "18": {
        "s": 2,
        "es": "La botella y la copa flotan en el aire, como la mujer que levita en el espectáculo.",
        "fr": "La bouteille et le verre flottent dans les airs, comme la femme qui lévite pendant le spectacle.",
        "en": "The bottle and glass float in midair, like the woman levitating in the show."
      }
    },
    "zoo": {
      "4": {
        "s": 2
      },
      "7": {
        "s": 2
      },
      "16": {
        "s": 1
      },
      "10": {
        "s": 1
      },
      "3": {
        "s": 2,
        "es": "Una reja de hierro y un señor de galera, como el visitante sentado frente al recinto.",
        "fr": "Une grille en fer et un monsieur en haut-de-forme, comme le visiteur assis devant l’enclos.",
        "en": "An iron fence and a man in a top hat, like the visitor sitting by the enclosure."
      },
      "13": {
        "s": 2,
        "es": "Una dama de vestido violeta con su animalito, como la señora que pasea por el zoológico.",
        "fr": "Une dame en robe violette avec son animal, comme celle qui se promène au zoo.",
        "en": "A lady in a purple dress with her pet, like the woman strolling through the zoo."
      },
      "12": {
        "s": 1,
        "es": "Gárgolas con alas y cuernos: bestias raras para mirar.",
        "fr": "Des gargouilles avec des ailes et des cornes : d’étranges bêtes à regarder.",
        "en": "Gargoyles with wings and horns: strange beasts to look at."
      }
    },
    "catacumbas": {
      "10": {
        "s": 3
      },
      "18": {
        "s": 2
      },
      "4": {
        "s": 1
      },
      "12": {
        "s": 1
      },
      "13": {
        "s": 1,
        "es": "La roca y el arco de un túnel en el acantilado, como las galerías bajo París.",
        "fr": "La roche et l’arche d’un tunnel dans la falaise, comme les galeries sous Paris.",
        "en": "Rock and a tunnel arch in the cliff, like the galleries under Paris."
      },
      "3": {
        "s": 1,
        "es": "Candados y hierros, como la cadena con grillete tirada en el túnel.",
        "fr": "Des cadenas et du fer, comme la chaîne et le boulet abandonnés dans le tunnel.",
        "en": "Padlocks and iron, like the chain and shackle lying in the tunnel."
      },
      "16": {
        "s": 1,
        "es": "Calabazas con cara y un farol en la noche, como las calaveras a la luz de las antorchas.",
        "fr": "Des citrouilles grimaçantes et un réverbère dans la nuit, comme les crânes à la lueur des torches.",
        "en": "Grinning pumpkins and a lamp at night, like skulls lit by torches."
      }
    },
    "pont-neuf": {
      "13": {
        "s": 3
      },
      "7": {
        "s": 1
      },
      "3": {
        "s": 1
      },
      "12": {
        "s": 1
      },
      "16": {
        "s": 1,
        "es": "El farol, como los que bordean el puente.",
        "fr": "Le réverbère, comme ceux qui bordent le pont.",
        "en": "The street lamp, like the ones lining the bridge."
      }
    },
    "versalles": {
      "3": {
        "s": 3
      },
      "13": {
        "s": 1
      },
      "12": {
        "s": 2
      },
      "7": {
        "s": 1
      },
      "10": {
        "s": 2,
        "es": "Los árboles redondos, como los arbustos podados de los jardines.",
        "fr": "Les arbres tout ronds, comme les arbustes taillés des jardins.",
        "en": "The round trees, like the trimmed shrubs in the gardens."
      },
      "18": {
        "s": 2,
        "es": "Espejos y cuadros con marcos dorados, como en la Galería de los Espejos.",
        "fr": "Des miroirs et des tableaux aux cadres dorés, comme dans la galerie des Glaces.",
        "en": "Mirrors and paintings in gilded frames, like in the Hall of Mirrors."
      }
    },
    "quesos": {
      "4": {
        "s": 3
      },
      "7": {
        "s": 1
      },
      "18": {
        "s": 2
      },
      "3": {
        "s": 1
      },
      "16": {
        "s": 1,
        "es": "Calabazas redondas y anaranjadas, como las hormas de queso.",
        "fr": "Des citrouilles rondes et orangées, comme des meules de fromage.",
        "en": "Round orange pumpkins, like wheels of cheese."
      }
    },
    "champagne": {
      "18": {
        "s": 3
      },
      "7": {
        "s": 2
      },
      "13": {
        "s": 1
      },
      "16": {
        "s": 1
      },
      "12": {
        "s": 2,
        "es": "Las coronas talladas, como la corona dorada en la etiqueta de la botella.",
        "fr": "Les couronnes sculptées, comme la couronne dorée sur l’étiquette de la bouteille.",
        "en": "The carved crowns, like the golden crown on the bottle’s label."
      },
      "4": {
        "s": 1,
        "es": "Uvas y manjares: el champán se hace con uvas y acompaña los banquetes.",
        "fr": "Du raisin et des mets fins : le champagne se fait avec du raisin et accompagne les banquets.",
        "en": "Grapes and fine food: champagne is made from grapes and goes with feasts."
      },
      "3": {
        "s": 1,
        "es": "Un caballero de galera, vestido como para un brindis elegante.",
        "fr": "Un monsieur en haut-de-forme, habillé comme pour un toast élégant.",
        "en": "A gentleman in a top hat, dressed as if for an elegant toast."
      }
    }
  },
  "1812": {
    "lavandera": {
      "8": {
        "s": 2
      },
      "18": {
        "s": 3
      },
      "46": {
        "s": 2
      },
      "25": {
        "s": 2
      },
      "37": {
        "s": 3,
        "es": "Un balde lleno de agua que gira y un trapeador: el balde y el agua de la lavandera.",
        "fr": "Un seau plein d'eau qui tourbillonne et une serpillière : le seau et l'eau de la lavandière.",
        "en": "A bucket of swirling water and a mop: the washerwoman's bucket and water."
      },
      "10": {
        "s": 2,
        "es": "Una tela clara cuelga de un palo y flamea, como la ropa tendida al sol.",
        "fr": "Un tissu clair pend à un bâton et flotte, comme le linge étendu au soleil.",
        "en": "A pale cloth hangs from a pole and flutters, like laundry hung out to dry."
      },
      "28": {
        "s": 2,
        "es": "Un bolsillo y grandes botones de camisa: la ropa que lava la lavandera.",
        "fr": "Une poche et de gros boutons de chemise : les vêtements que lave la lavandière.",
        "en": "A pocket and big shirt buttons: the clothes the washerwoman washes."
      },
      "11": {
        "s": 2,
        "es": "Todo bajo el agua y lleno de burbujas, como la espuma del jabón al lavar.",
        "fr": "Tout est sous l'eau et plein de bulles, comme la mousse du savon au lavage.",
        "en": "Everything underwater and full of bubbles, like soap suds while washing."
      },
      "53": {
        "s": 2,
        "es": "Una mujer con delantal y cofia, vestida como las mujeres trabajadoras de la época.",
        "fr": "Une femme en tablier et coiffe, vêtue comme les travailleuses de l'époque.",
        "en": "A woman in an apron and bonnet, dressed like the working women of the time."
      },
      "40": {
        "s": 2,
        "es": "Una chica parada con el agua hasta los tobillos, como la lavandera trabajando en el río.",
        "fr": "Une fille debout dans l'eau jusqu'aux chevilles, comme la lavandière au travail dans la rivière.",
        "en": "A girl standing ankle-deep in water, like the washerwoman working in the river."
      },
      "3": {
        "s": 1,
        "es": "Un bote que avanza sobre el agua: el río donde se lavaba la ropa.",
        "fr": "Une barque qui avance sur l'eau : la rivière où l'on lavait le linge.",
        "en": "A boat gliding on the water: the river where clothes were washed."
      },
      "58": {
        "s": 1,
        "es": "Banderines de tela que cuelgan y flamean, como prendas colgadas en la soga.",
        "fr": "Des fanions de tissu qui pendent et flottent, comme du linge sur la corde.",
        "en": "Cloth pennants hanging and fluttering, like garments on the clothesline."
      },
      "41": {
        "s": 2,
        "es": "Lluvia y un barril grande, como el tacho con agua donde se lava la ropa.",
        "fr": "De la pluie et un grand tonneau, comme le baquet d'eau où l'on lave le linge.",
        "en": "Rain and a big barrel, like the tub of water where clothes are washed."
      },
      "12": {
        "s": 1,
        "es": "Un líquido que pasa de un recipiente a otro, como el agua que se vuelca al lavar.",
        "fr": "Un liquide qui passe d'un récipient à l'autre, comme l'eau qu'on verse en lavant.",
        "en": "Liquid poured from one vessel to another, like water tipped out while washing."
      },
      "59": {
        "s": 1,
        "es": "Agua, arena y botellas en la orilla, como la orilla del río donde se lavaba.",
        "fr": "De l'eau, du sable et des bouteilles sur la rive, comme la berge où l'on lavait.",
        "en": "Water, sand and bottles on the shore, like the riverbank where washing was done."
      },
      "21": {
        "s": 1,
        "es": "Un río que salpica abajo del puente: el agua donde trabajaba la lavandera.",
        "fr": "Une rivière qui éclabousse sous le pont : l'eau où travaillait la lavandière.",
        "en": "A river splashing under the bridge: the water where the washerwoman worked."
      },
      "19": {
        "s": 1,
        "es": "Una manga de saco con botones: ropa para lavar y planchar.",
        "fr": "Une manche de veste à boutons : des vêtements à laver et repasser.",
        "en": "A coat sleeve with buttons: clothes to wash and iron."
      },
      "34": {
        "s": 1,
        "es": "Un sombrero colgado de una rama, como la ropa colgada para secar.",
        "fr": "Un chapeau accroché à une branche, comme le linge suspendu pour sécher.",
        "en": "A hat hanging from a branch, like clothes hung up to dry."
      },
      "49": {
        "s": 1,
        "es": "Alguien descalzo que camina por un sendero, como la lavandera que va al río.",
        "fr": "Quelqu'un pieds nus sur un sentier, comme la lavandière qui va à la rivière.",
        "en": "Someone barefoot on a path, like the washerwoman walking to the river."
      },
      "31": {
        "s": 1,
        "es": "Un hombre con un abrigo largo y arrugado: ropa que necesita una lavada.",
        "fr": "Un homme au long manteau froissé : des vêtements qui ont besoin d'un lavage.",
        "en": "A man in a long, crumpled coat: clothes in need of a wash."
      }
    },
    "batalla": {
      "11": {
        "s": 2
      },
      "27": {
        "s": 3
      },
      "6": {
        "s": 3
      },
      "52": {
        "s": 3
      },
      "58": {
        "s": 2,
        "es": "Un soldado de uniforme con charreteras mira a lo lejos, listo para la batalla.",
        "fr": "Un soldat en uniforme à épaulettes regarde au loin, prêt pour la bataille.",
        "en": "A uniformed soldier with epaulettes looks into the distance, ready for battle."
      },
      "50": {
        "s": 2,
        "es": "Una espada clavada en el pasto: lo que queda en el campo de batalla.",
        "fr": "Une épée plantée dans l'herbe : ce qui reste sur le champ de bataille.",
        "en": "A sword stuck in the grass: what is left on the battlefield."
      },
      "21": {
        "s": 2,
        "es": "Un caballero con armadura a caballo, como la caballería que va a pelear.",
        "fr": "Un chevalier en armure à cheval, comme la cavalerie qui part au combat.",
        "en": "An armored knight on horseback, like the cavalry riding into the fight."
      },
      "31": {
        "s": 2,
        "es": "Una calavera y huesos enterrados: los caídos que deja la batalla.",
        "fr": "Un crâne et des os enterrés : les morts que laisse la bataille.",
        "en": "A buried skull and bones: the fallen left behind by the battle."
      },
      "15": {
        "s": 2,
        "es": "Calavera, huesos y una gomera que dispara: armas y muerte, como en la batalla.",
        "fr": "Crâne, os et un lance-pierre qui tire : des armes et la mort, comme à la bataille.",
        "en": "Skull, bones and a slingshot firing: weapons and death, as in battle."
      },
      "18": {
        "s": 2,
        "es": "Una mujer con un revólver en la mano: un arma de fuego, como en la batalla.",
        "fr": "Une femme avec un revolver à la main : une arme à feu, comme à la bataille.",
        "en": "A woman holding a revolver: a firearm, as in battle."
      },
      "49": {
        "s": 1,
        "es": "Alguien con las manos atadas a la espalda, como un prisionero después de la batalla.",
        "fr": "Quelqu'un les mains liées dans le dos, comme un prisonnier après la bataille.",
        "en": "Someone with hands tied behind their back, like a prisoner after the battle."
      },
      "60": {
        "s": 1,
        "es": "Un diablo acerca una corona al fuego: la lucha por el poder que lleva a la guerra.",
        "fr": "Un diable approche une couronne du feu : la lutte pour le pouvoir qui mène à la guerre.",
        "en": "A devil dangles a crown over the fire: the fight for power that leads to war."
      },
      "36": {
        "s": 2,
        "es": "Piezas de ajedrez enfrentadas en el tablero: una batalla en miniatura.",
        "fr": "Des pièces d'échecs face à face sur l'échiquier : une bataille en miniature.",
        "en": "Chess pieces facing off on the board: a battle in miniature."
      },
      "9": {
        "s": 1,
        "es": "Patas de caballo que avanzan entre las rocas, como la caballería en marcha.",
        "fr": "Des pattes de cheval qui avancent entre les rochers, comme la cavalerie en marche.",
        "en": "Horse legs striding through the rocks, like cavalry on the march."
      },
      "10": {
        "s": 1,
        "es": "Una bandera en su palo, como la bandera que se lleva a la batalla.",
        "fr": "Un drapeau sur son bâton, comme celui qu'on porte à la bataille.",
        "en": "A flag on its pole, like the flag carried into battle."
      },
      "19": {
        "s": 1,
        "es": "Una manga roja con botones, como la casaca de un soldado.",
        "fr": "Une manche rouge à boutons, comme la veste d'un soldat.",
        "en": "A red sleeve with buttons, like a soldier's coat."
      },
      "22": {
        "s": 1,
        "es": "Una cara con el ceño fruncido y la mirada dura, lista para pelear.",
        "fr": "Un visage aux sourcils froncés et au regard dur, prêt à se battre.",
        "en": "A frowning face with a hard stare, ready to fight."
      },
      "26": {
        "s": 1,
        "es": "Un volcán que estalla, como el estruendo de los cañones.",
        "fr": "Un volcan qui explose, comme le fracas des canons.",
        "en": "An erupting volcano, like the roar of cannons."
      },
      "38": {
        "s": 1,
        "es": "Tablas rotas y astilladas: lo que queda destruido después del combate.",
        "fr": "Des planches brisées et éclatées : ce qui reste détruit après le combat.",
        "en": "Broken, splintered planks: what is left destroyed after the fight."
      },
      "13": {
        "s": 1,
        "es": "Un joven con bastón frente a una bestia enorme: un enfrentamiento.",
        "fr": "Un jeune avec un bâton face à une bête énorme : un affrontement.",
        "en": "A youth with a staff facing a huge beast: a confrontation."
      }
    },
    "cabildo": {
      "9": {
        "s": 3
      },
      "44": {
        "s": 2
      },
      "58": {
        "s": 3
      },
      "39": {
        "s": 2
      },
      "29": {
        "s": 2,
        "es": "Una torre con balconcito y techo de tejas, como la torre del Cabildo.",
        "fr": "Une tour avec un petit balcon et un toit de tuiles, comme la tour du Cabildo.",
        "en": "A tower with a small balcony and a tiled roof, like the Cabildo's tower."
      },
      "36": {
        "s": 2,
        "es": "La base tiene puertas en arco y escalones, como la recova del Cabildo.",
        "fr": "Le socle a des portes en arc et des marches, comme les arcades du Cabildo.",
        "en": "The base has arched doors and steps, like the Cabildo's arcade."
      },
      "11": {
        "s": 2,
        "es": "Un edificio antiguo con grandes ventanas en arco y rejas, como el Cabildo.",
        "fr": "Un vieil édifice aux grandes fenêtres en arc et grillagées, comme le Cabildo.",
        "en": "An old building with tall arched, barred windows, like the Cabildo."
      },
      "10": {
        "s": 2,
        "es": "Una bandera en su mástil: las banderas de mayo de 1810.",
        "fr": "Un drapeau sur son mât : les drapeaux de mai 1810.",
        "en": "A flag on its pole: the flags of May 1810."
      },
      "17": {
        "s": 2,
        "es": "Muchos reunidos en ronda alrededor de un cofre: una asamblea, como el cabildo abierto.",
        "fr": "Beaucoup de gens réunis en cercle autour d'un coffre : une assemblée, comme le cabildo ouvert.",
        "en": "Many gathered in a circle around a chest: an assembly, like the open cabildo."
      },
      "6": {
        "s": 1,
        "es": "Una torre con banderas sobre una muralla: un edificio importante de la ciudad.",
        "fr": "Une tour avec des drapeaux sur une muraille : un édifice important de la ville.",
        "en": "A tower with flags above a wall: an important building in town."
      },
      "24": {
        "s": 1,
        "es": "Escalones de piedra y una maceta, como la entrada de un edificio colonial.",
        "fr": "Des marches de pierre et une jardinière, comme l'entrée d'un édifice colonial.",
        "en": "Stone steps and a planter, like the entrance of a colonial building."
      },
      "53": {
        "s": 1,
        "es": "Una mujer con vestido de época y cofia, como las damas en la plaza en 1810.",
        "fr": "Une femme en robe d'époque et coiffe, comme les dames sur la place en 1810.",
        "en": "A woman in a period dress and bonnet, like the ladies in the square in 1810."
      },
      "46": {
        "s": 2,
        "es": "Paraguas bajo la lluvia, como la gente que esperó frente al Cabildo el 25 de Mayo.",
        "fr": "Des parapluies sous la pluie, comme la foule devant le Cabildo le 25 mai.",
        "en": "Umbrellas in the rain, like the crowd waiting outside the Cabildo on May 25."
      },
      "41": {
        "s": 2,
        "es": "Un señor de galera bajo la lluvia, como los vecinos de 1810 esperando noticias.",
        "fr": "Un monsieur en haut-de-forme sous la pluie, comme les habitants de 1810 attendant des nouvelles.",
        "en": "A gentleman in a top hat in the rain, like the townsfolk of 1810 awaiting news."
      },
      "60": {
        "s": 2,
        "es": "Una corona colgando sobre el fuego: el fin del poder del rey en 1810.",
        "fr": "Une couronne suspendue au-dessus du feu : la fin du pouvoir du roi en 1810.",
        "en": "A crown dangling over the fire: the end of the king's power in 1810."
      },
      "51": {
        "s": 1,
        "es": "Una pieza de rey en el nido: el rey de España, lejos de la colonia.",
        "fr": "Une pièce de roi dans le nid : le roi d'Espagne, loin de la colonie.",
        "en": "A king piece in the nest: the king of Spain, far from the colony."
      },
      "19": {
        "s": 1,
        "es": "Una mano que señala con decisión, como un vecino que vota en el cabildo abierto.",
        "fr": "Une main qui désigne avec décision, comme un habitant qui vote au cabildo ouvert.",
        "en": "A hand pointing decisively, like a citizen casting a vote at the open cabildo."
      },
      "14": {
        "s": 1,
        "es": "Un libro abierto con un rey dibujado: las actas y leyes del Cabildo.",
        "fr": "Un livre ouvert avec un roi dessiné : les actes et lois du Cabildo.",
        "en": "An open book with a king drawn in it: the Cabildo's records and laws."
      },
      "28": {
        "s": 1,
        "es": "Una llave grande: las llaves de la ciudad que guardaba el Cabildo.",
        "fr": "Une grande clé : les clés de la ville que gardait le Cabildo.",
        "en": "A big key: the keys of the city kept by the Cabildo."
      },
      "5": {
        "s": 1,
        "es": "Un señor con sombrero de pluma y bigote, como un vecino importante de la época.",
        "fr": "Un monsieur au chapeau à plume et moustache, comme un notable de l'époque.",
        "en": "A man with a plumed hat and mustache, like a notable of the time."
      }
    },
    "locro": {
      "29": {
        "s": 3
      },
      "57": {
        "s": 2
      },
      "12": {
        "s": 2
      },
      "2": {
        "s": 2
      },
      "30": {
        "s": 2,
        "es": "Una estufa que larga vapor: la olla de locro hirviendo en el fuego.",
        "fr": "Un poêle qui fume : la marmite de locro qui bout sur le feu.",
        "en": "A stove giving off steam: the pot of locro boiling on the fire."
      },
      "18": {
        "s": 2,
        "es": "Un bol, un tenedor, un tomate y carne: ingredientes y cubiertos para comer.",
        "fr": "Un bol, une fourchette, une tomate et de la viande : des ingrédients et des couverts.",
        "en": "A bowl, a fork, a tomato and meat: ingredients and cutlery for a meal."
      },
      "60": {
        "s": 1,
        "es": "Algo colgado sobre las llamas, como la olla de guiso sobre el fuego.",
        "fr": "Quelque chose suspendu au-dessus des flammes, comme la marmite de ragoût sur le feu.",
        "en": "Something hanging over the flames, like the stew pot over the fire."
      },
      "37": {
        "s": 1,
        "es": "Un balde donde todo gira, como el locro que se revuelve en la olla.",
        "fr": "Un seau où tout tourbillonne, comme le locro qu'on remue dans la marmite.",
        "en": "A bucket where everything swirls, like locro being stirred in the pot."
      },
      "50": {
        "s": 1,
        "es": "Alguien sirviendo algo caliente en una taza: comida calentita en la mesa.",
        "fr": "Quelqu'un qui verse quelque chose de chaud dans une tasse : un plat chaud à table.",
        "en": "Someone pouring something hot into a cup: a warm dish at the table."
      },
      "26": {
        "s": 1,
        "es": "Un volcán que borbotea por arriba, como un guiso que hierve en la olla.",
        "fr": "Un volcan qui bouillonne par le haut, comme un ragoût qui bout dans la marmite.",
        "en": "A volcano bubbling over at the top, like a stew boiling in the pot."
      },
      "22": {
        "s": 1,
        "es": "Una llama encendida en una base de metal, como el fuego bajo la olla.",
        "fr": "Une flamme allumée sur un socle de métal, comme le feu sous la marmite.",
        "en": "A flame burning on a metal base, like the fire under the pot."
      },
      "46": {
        "s": 1,
        "es": "Lluvia y frío: un día para comer un locro bien caliente.",
        "fr": "Pluie et froid : un jour à manger un locro bien chaud.",
        "en": "Rain and cold: a day for a piping hot locro."
      },
      "17": {
        "s": 2,
        "es": "Muchos reunidos en ronda mirando al centro, como alrededor de la olla de locro.",
        "fr": "Beaucoup de gens en cercle regardant le centre, comme autour de la marmite de locro.",
        "en": "Many gathered in a circle facing the center, like around the pot of locro."
      },
      "53": {
        "s": 1,
        "es": "Una mujer con delantal, como la cocinera que prepara el locro.",
        "fr": "Une femme en tablier, comme la cuisinière qui prépare le locro.",
        "en": "A woman in an apron, like the cook preparing the locro."
      },
      "14": {
        "s": 1,
        "es": "Una copa honda en la mano, como un cuenco para servir.",
        "fr": "Une coupe profonde à la main, comme un bol pour servir.",
        "en": "A deep cup in hand, like a bowl for serving."
      },
      "41": {
        "s": 1,
        "es": "Un barril grande y redondo, como una olla enorme para muchos.",
        "fr": "Un grand tonneau rond, comme une énorme marmite pour beaucoup de monde.",
        "en": "A big round barrel, like a huge pot for a crowd."
      },
      "43": {
        "s": 1,
        "es": "Cubos que caen, como los ingredientes cortados en cubitos.",
        "fr": "Des cubes qui tombent, comme les ingrédients coupés en dés.",
        "en": "Falling cubes, like ingredients cut into dice."
      },
      "39": {
        "s": 1,
        "es": "Una canasta con cosas para la mesa: lo que se lleva al almuerzo.",
        "fr": "Un panier avec de quoi garnir la table : ce qu'on apporte au repas.",
        "en": "A basket with things for the table: what's brought to the meal."
      },
      "6": {
        "s": 1,
        "es": "Un gato que echa fuego por la boca: el fuego fuerte para cocinar.",
        "fr": "Un chat qui crache du feu : le feu vif pour cuisiner.",
        "en": "A cat breathing fire: the strong fire for cooking."
      },
      "13": {
        "s": 1,
        "es": "Un paisaje blanco y frío: el locro es comida de invierno.",
        "fr": "Un paysage blanc et froid : le locro est un plat d'hiver.",
        "en": "A cold, white landscape: locro is a winter dish."
      }
    },
    "gaucho": {
      "5": {
        "s": 3
      },
      "13": {
        "s": 2
      },
      "15": {
        "s": 2
      },
      "49": {
        "s": 2
      },
      "21": {
        "s": 2,
        "es": "Un jinete cruza el puente a caballo, como el gaucho siempre montado.",
        "fr": "Un cavalier traverse le pont à cheval, comme le gaucho toujours en selle.",
        "en": "A rider crosses the bridge on horseback, like the gaucho always in the saddle."
      },
      "9": {
        "s": 2,
        "es": "Patas de caballo con cascos: el caballo, compañero del gaucho.",
        "fr": "Des pattes de cheval avec leurs sabots : le cheval, compagnon du gaucho.",
        "en": "Horse legs with hooves: the horse, the gaucho's companion."
      },
      "1": {
        "s": 2,
        "es": "Un hombre de campo con sombrero ancho de paja, como un paisano.",
        "fr": "Un homme de la campagne au large chapeau de paille, comme un paysan.",
        "en": "A country man in a wide straw hat, like a rural peasant."
      },
      "31": {
        "s": 2,
        "es": "Un hombre con sombrero y abrigo largo, apoyado en un árbol en el campo.",
        "fr": "Un homme au chapeau et long manteau, adossé à un arbre dans la campagne.",
        "en": "A man in a hat and long coat leaning on a tree out in the countryside."
      },
      "27": {
        "s": 1,
        "es": "Lanzas en fila, como las que usaban los gauchos para pelear.",
        "fr": "Des lances en rang, comme celles des gauchos au combat.",
        "en": "A row of spears, like the lances gauchos used in battle."
      },
      "26": {
        "s": 1,
        "es": "Pasto verde y lomas a lo lejos: el campo abierto del gaucho.",
        "fr": "De l'herbe verte et des collines au loin : la campagne ouverte du gaucho.",
        "en": "Green grass and distant hills: the gaucho's open country."
      },
      "46": {
        "s": 1,
        "es": "Alguien envuelto en un abrigo largo bajo la lluvia, como el gaucho con su poncho.",
        "fr": "Quelqu'un enveloppé dans un long manteau sous la pluie, comme le gaucho dans son poncho.",
        "en": "Someone wrapped in a long coat in the rain, like the gaucho in his poncho."
      },
      "12": {
        "s": 1,
        "es": "Una pava que sirve algo caliente: el gaucho nunca deja su mate.",
        "fr": "Une bouilloire qui verse une boisson chaude : le gaucho ne quitte jamais son maté.",
        "en": "A kettle pouring something hot: the gaucho never goes without his mate."
      },
      "60": {
        "s": 2,
        "es": "Alguien junto a un fuego en el piso, como el gaucho al lado del fogón.",
        "fr": "Quelqu'un près d'un feu au sol, comme le gaucho près du feu de camp.",
        "en": "Someone by a fire on the ground, like the gaucho beside his campfire."
      },
      "34": {
        "s": 2,
        "es": "Una rueda de madera grande, como la de la carreta que cruza el campo.",
        "fr": "Une grande roue en bois, comme celle de la charrette qui traverse la plaine.",
        "en": "A big wooden wheel, like a cart crossing the plains."
      },
      "52": {
        "s": 2,
        "es": "Una bota alta de cuero, como las botas del gaucho.",
        "fr": "Une haute botte de cuir, comme les bottes du gaucho.",
        "en": "A tall leather boot, like the gaucho's boots."
      },
      "50": {
        "s": 1,
        "es": "Una espada clavada en el pasto, como el facón del gaucho.",
        "fr": "Une épée plantée dans l'herbe, comme le couteau du gaucho.",
        "en": "A sword stuck in the grass, like the gaucho's facón knife."
      },
      "22": {
        "s": 1,
        "es": "Una cara curtida de cejas tupidas y mirada dura, como la de un paisano.",
        "fr": "Un visage buriné aux sourcils épais et au regard dur, comme celui d'un paysan.",
        "en": "A weathered face with bushy brows and a hard stare, like a countryman's."
      },
      "17": {
        "s": 1,
        "es": "Muchos reunidos en ronda, como los gauchos alrededor del fuego.",
        "fr": "Beaucoup de gens réunis en cercle, comme les gauchos autour du feu.",
        "en": "Many gathered in a circle, like gauchos around the fire."
      },
      "37": {
        "s": 1,
        "es": "Un viejo barbudo envuelto en un manto, como el gaucho con su poncho.",
        "fr": "Un vieil homme barbu enveloppé d'une cape, comme le gaucho dans son poncho.",
        "en": "An old bearded man wrapped in a cloak, like the gaucho in his poncho."
      },
      "39": {
        "s": 1,
        "es": "Una botella en la canasta, como la bebida de la pulpería.",
        "fr": "Une bouteille dans le panier, comme la boisson de la pulpería.",
        "en": "A bottle in the basket, like a drink from the country store."
      }
    },
    "granadero": {
      "11": {
        "s": 2
      },
      "27": {
        "s": 3
      },
      "52": {
        "s": 3
      },
      "6": {
        "s": 2
      },
      "58": {
        "s": 3,
        "es": "Un soldado de uniforme azul con charreteras doradas, como el granadero.",
        "fr": "Un soldat en uniforme bleu à épaulettes dorées, comme le grenadier.",
        "en": "A soldier in a blue uniform with gold epaulettes, like the grenadier."
      },
      "21": {
        "s": 2,
        "es": "Un jinete con armadura a caballo: los granaderos eran soldados de caballería.",
        "fr": "Un cavalier en armure : les grenadiers étaient des soldats de cavalerie.",
        "en": "An armored rider on horseback: the grenadiers were cavalry soldiers."
      },
      "50": {
        "s": 2,
        "es": "Una espada clavada en el pasto: el sable del granadero.",
        "fr": "Une épée plantée dans l'herbe : le sabre du grenadier.",
        "en": "A sword stuck in the grass: the grenadier's sabre."
      },
      "19": {
        "s": 2,
        "es": "Una manga roja con botones, como la casaca de un uniforme militar.",
        "fr": "Une manche rouge à boutons, comme la veste d'un uniforme militaire.",
        "en": "A red sleeve with buttons, like the coat of a military uniform."
      },
      "9": {
        "s": 2,
        "es": "Patas de caballo entre rocas y montañas, como el cruce de los Andes.",
        "fr": "Des pattes de cheval entre rochers et montagnes, comme la traversée des Andes.",
        "en": "Horse legs among rocks and mountains, like the crossing of the Andes."
      },
      "5": {
        "s": 1,
        "es": "Sombrero con pluma y bigotes enormes, como un oficial de la época.",
        "fr": "Chapeau à plume et moustache énorme, comme un officier de l'époque.",
        "en": "A plumed hat and a huge mustache, like an officer of the time."
      },
      "18": {
        "s": 1,
        "es": "Una mujer con un revólver: un arma, como las de los soldados.",
        "fr": "Une femme avec un revolver : une arme, comme celles des soldats.",
        "en": "A woman with a revolver: a weapon, like soldiers carry."
      },
      "10": {
        "s": 1,
        "es": "Una bandera en su asta, como el estandarte del regimiento.",
        "fr": "Un drapeau sur sa hampe, comme l'étendard du régiment.",
        "en": "A flag on its pole, like the regiment's banner."
      },
      "15": {
        "s": 1,
        "es": "Una bota alta, como las botas de montar del granadero.",
        "fr": "Une haute botte, comme les bottes de cavalier du grenadier.",
        "en": "A tall boot, like the grenadier's riding boots."
      },
      "26": {
        "s": 1,
        "es": "Montañas a lo lejos, como la cordillera que cruzaron los granaderos.",
        "fr": "Des montagnes au loin, comme la cordillère que franchirent les grenadiers.",
        "en": "Mountains in the distance, like the range the grenadiers crossed."
      },
      "22": {
        "s": 1,
        "es": "Una cara seria de ceño fruncido, como un soldado disciplinado.",
        "fr": "Un visage sérieux aux sourcils froncés, comme un soldat discipliné.",
        "en": "A serious, frowning face, like a disciplined soldier."
      },
      "28": {
        "s": 1,
        "es": "Botones grandes y redondos, como los de la casaca del uniforme.",
        "fr": "De gros boutons ronds, comme ceux de la veste d'uniforme.",
        "en": "Big round buttons, like those on a uniform coat."
      },
      "36": {
        "s": 1,
        "es": "Figuras paradas en el tablero, como soldados en formación.",
        "fr": "Des figures debout sur l'échiquier, comme des soldats en formation.",
        "en": "Figures standing on the board, like soldiers in formation."
      },
      "60": {
        "s": 1,
        "es": "Una corona colgando sobre el fuego: los granaderos peleaban contra el rey.",
        "fr": "Une couronne au-dessus du feu : les grenadiers combattaient le roi.",
        "en": "A crown hanging over the fire: the grenadiers fought against the king."
      },
      "38": {
        "s": 1,
        "es": "Tablas altas en fila, como una tropa formada.",
        "fr": "De hautes planches en rang, comme une troupe alignée.",
        "en": "Tall planks in a row, like troops lined up."
      },
      "49": {
        "s": 1,
        "es": "Alguien que avanza por un camino largo, como la marcha del ejército.",
        "fr": "Quelqu'un qui avance sur un long chemin, comme la marche de l'armée.",
        "en": "Someone walking a long road, like the army's march."
      }
    },
    "fraile": {
      "17": {
        "s": 3
      },
      "37": {
        "s": 3
      },
      "41": {
        "s": 2
      },
      "14": {
        "s": 2
      },
      "30": {
        "s": 2,
        "es": "Un hábito oscuro con capucha tirado junto a las velas, como el del fraile.",
        "fr": "Un habit sombre à capuche posé près des bougies, comme celui du moine.",
        "en": "A dark hooded habit lying by the candles, like the friar's."
      },
      "22": {
        "s": 2,
        "es": "Una cabeza pelada en la coronilla, como la tonsura del fraile.",
        "fr": "Une tête rasée sur le sommet, comme la tonsure du moine.",
        "en": "A head bald on top, like the friar's tonsure."
      },
      "49": {
        "s": 1,
        "es": "Alguien que camina descalzo por un camino de tierra, como un fraile humilde.",
        "fr": "Quelqu'un qui marche pieds nus sur un chemin de terre, comme un moine humble.",
        "en": "Someone walking barefoot along a dirt path, like a humble friar."
      },
      "24": {
        "s": 1,
        "es": "Flores en una maceta junto a los escalones, como el jardín del convento.",
        "fr": "Des fleurs dans une jardinière près des marches, comme le jardin du couvent.",
        "en": "Flowers in a planter by the steps, like the convent garden."
      },
      "2": {
        "s": 1,
        "es": "Frutas sobre una mesa de madera: la comida sencilla del convento.",
        "fr": "Des fruits sur une table en bois : le repas simple du couvent.",
        "en": "Fruit on a wooden table: the simple meals of the convent."
      },
      "60": {
        "s": 1,
        "es": "Un diablo junto al fuego: lo que el fraile combate con sus rezos.",
        "fr": "Un diable près du feu : ce que le moine combat par ses prières.",
        "en": "A devil by the fire: what the friar fights with his prayers."
      },
      "13": {
        "s": 1,
        "es": "Un chico con un bastón largo, como el bastón de un fraile caminante.",
        "fr": "Un garçon avec un long bâton, comme le bâton d'un moine pèlerin.",
        "en": "A boy with a tall staff, like a wandering friar's staff."
      },
      "38": {
        "s": 1,
        "es": "Tablas viejas y una florcita: la pobreza humilde del convento.",
        "fr": "De vieilles planches et une petite fleur : la pauvreté humble du couvent.",
        "en": "Old planks and a tiny flower: the humble poverty of the convent."
      },
      "52": {
        "s": 2,
        "es": "Una figura con un manto negro y capucha, como el hábito del fraile.",
        "fr": "Une figure en manteau noir à capuche, comme l'habit du moine.",
        "en": "A figure in a black hooded robe, like a friar's habit."
      },
      "9": {
        "s": 2,
        "es": "Una torre con campana, como el campanario del convento.",
        "fr": "Une tour avec une cloche, comme le clocher du couvent.",
        "en": "A tower with a bell, like the convent's bell tower."
      },
      "11": {
        "s": 1,
        "es": "Un edificio viejo con grandes ventanas en arco, como un convento.",
        "fr": "Un vieil édifice aux grandes fenêtres en arc, comme un couvent.",
        "en": "An old building with tall arched windows, like a convent."
      },
      "29": {
        "s": 1,
        "es": "Una torre con agujas en el techo, como la torre de la iglesia del convento.",
        "fr": "Une tour aux flèches pointues, comme le clocher de l'église du couvent.",
        "en": "A tower with spires, like the convent church's tower."
      },
      "39": {
        "s": 1,
        "es": "Una botella de vino en una canasta: los frailes también hacían vino.",
        "fr": "Une bouteille de vin dans un panier : les moines faisaient aussi du vin.",
        "en": "A bottle of wine in a basket: friars made wine too."
      },
      "46": {
        "s": 1,
        "es": "Alguien encorvado y envuelto bajo la lluvia, como un fraile humilde y solitario.",
        "fr": "Quelqu'un voûté et emmitouflé sous la pluie, comme un moine humble et solitaire.",
        "en": "Someone hunched and wrapped up in the rain, like a humble, lonely friar."
      },
      "34": {
        "s": 1,
        "es": "Un túnel oscuro de tierra, como la cueva de un ermitaño.",
        "fr": "Un tunnel de terre sombre, comme la grotte d'un ermite.",
        "en": "A dark earthen tunnel, like a hermit's cave."
      },
      "59": {
        "s": 1,
        "es": "Una isla solitaria con una cruz de palo: el retiro y la oración.",
        "fr": "Une île solitaire avec une croix de bois : la retraite et la prière.",
        "en": "A lonely island with a wooden stake like a cross: retreat and prayer."
      }
    },
    "naipes": {
      "43": {
        "s": 2
      },
      "36": {
        "s": 2
      },
      "53": {
        "s": 3
      },
      "28": {
        "s": 2
      },
      "14": {
        "s": 3,
        "es": "Una copa dorada: como el palo de copas de la baraja española.",
        "fr": "Une coupe dorée : comme la couleur des coupes du jeu espagnol.",
        "en": "A golden cup: like the cups suit of the Spanish deck."
      },
      "50": {
        "s": 2,
        "es": "Una espada clavada en el pasto: el palo de espadas de la baraja.",
        "fr": "Une épée plantée dans l'herbe : la couleur des épées du jeu de cartes.",
        "en": "A sword stuck in the grass: the swords suit of the deck."
      },
      "25": {
        "s": 2,
        "es": "La botella tiene una etiqueta con un corazón, como el palo de corazones.",
        "fr": "La bouteille a une étiquette avec un cœur, comme la couleur cœur.",
        "en": "The bottle's label has a heart on it, like the hearts suit."
      },
      "8": {
        "s": 2,
        "es": "Números que flotan por todos lados, como los números de las cartas.",
        "fr": "Des chiffres qui flottent partout, comme les chiffres des cartes.",
        "en": "Numbers floating everywhere, like the numbers on playing cards."
      },
      "51": {
        "s": 2,
        "es": "Una pieza de rey en el nido: como el rey de la baraja.",
        "fr": "Une pièce de roi dans le nid : comme le roi du jeu de cartes.",
        "en": "A king piece in the nest: like the king in the deck."
      },
      "60": {
        "s": 1,
        "es": "Una corona que cuelga sobre el fuego: el rey, la carta que todos quieren.",
        "fr": "Une couronne suspendue au-dessus du feu : le roi, la carte que tous veulent.",
        "en": "A crown dangling over the fire: the king, the card everyone wants."
      },
      "44": {
        "s": 1,
        "es": "Alguien que mueve los hilos de una marioneta, como el tramposo que maneja el juego.",
        "fr": "Quelqu'un qui tire les ficelles d'une marionnette, comme le tricheur qui mène le jeu.",
        "en": "Someone pulling a puppet's strings, like a cheat controlling the game."
      },
      "41": {
        "s": 1,
        "es": "Un hombre de galera de noche junto a un barril, como en una pulpería donde se juega.",
        "fr": "Un homme en haut-de-forme la nuit près d'un tonneau, comme dans une taverne où l'on joue.",
        "en": "A man in a top hat at night by a barrel, like in a tavern where people gamble."
      },
      "38": {
        "s": 2,
        "es": "Palos de madera parados, como el palo de bastos de la baraja.",
        "fr": "Des bâtons de bois dressés, comme la couleur des bâtons du jeu espagnol.",
        "en": "Wooden sticks standing up, like the clubs (bastos) suit of the Spanish deck."
      },
      "45": {
        "s": 2,
        "es": "Un mapache con antifaz y sombrero, como un tramposo en la mesa de juego.",
        "fr": "Un raton laveur masqué et chapeauté, comme un tricheur à la table de jeu.",
        "en": "A masked raccoon in a hat, like a cheat at the card table."
      },
      "17": {
        "s": 2,
        "es": "Todos en ronda alrededor de un cofre, como jugadores alrededor del pozo.",
        "fr": "Tous en cercle autour d'un coffre, comme des joueurs autour de la mise.",
        "en": "Everyone in a circle around a chest, like players around the pot."
      },
      "27": {
        "s": 1,
        "es": "Lanzas de madera en fila, como los bastos de la baraja.",
        "fr": "Des lances en bois en rang, comme les bâtons du jeu de cartes.",
        "en": "A row of wooden spears, like the clubs of the deck."
      },
      "19": {
        "s": 1,
        "es": "Un dedo que señala sobre la mesa, como el jugador que elige su apuesta.",
        "fr": "Un doigt qui désigne sur la table, comme le joueur qui choisit sa mise.",
        "en": "A finger pointing on the table, like a player choosing a bet."
      },
      "22": {
        "s": 1,
        "es": "Una cara seria que no deja ver nada, como la de un buen jugador de truco.",
        "fr": "Un visage fermé qui ne laisse rien voir, comme celui d'un bon joueur de cartes.",
        "en": "A stony face giving nothing away, like a good card player's."
      },
      "31": {
        "s": 1,
        "es": "Joyas enterradas junto a un esqueleto: lo que se gana o se pierde jugando.",
        "fr": "Des joyaux enterrés près d'un squelette : ce qu'on gagne ou perd au jeu.",
        "en": "Jewels buried by a skeleton: what is won or lost at cards."
      },
      "5": {
        "s": 1,
        "es": "Un señor que fuma con boquilla, como un jugador en la pulpería.",
        "fr": "Un monsieur qui fume avec un fume-cigarette, comme un joueur à la taverne.",
        "en": "A man smoking from a cigarette holder, like a gambler at the tavern."
      }
    },
    "misa": {
      "41": {
        "s": 3
      },
      "14": {
        "s": 3
      },
      "17": {
        "s": 2
      },
      "22": {
        "s": 2
      },
      "9": {
        "s": 3,
        "es": "Un campanario con su campana: la campana de la iglesia que llama a misa.",
        "fr": "Un clocher avec sa cloche : la cloche de l'église qui appelle à la messe.",
        "en": "A bell tower with its bell: the church bell calling people to mass."
      },
      "30": {
        "s": 2,
        "es": "Dos velas encendidas, como las del altar durante la misa.",
        "fr": "Deux bougies allumées, comme celles de l'autel pendant la messe.",
        "en": "Two lit candles, like the ones on the altar during mass."
      },
      "39": {
        "s": 1,
        "es": "Una botella de vino en una canasta: el vino que se usa en la misa.",
        "fr": "Une bouteille de vin dans un panier : le vin utilisé à la messe.",
        "en": "A bottle of wine in a basket: the wine used at mass."
      },
      "37": {
        "s": 1,
        "es": "Un viejo de barba con capucha, como un cura de la iglesia.",
        "fr": "Un vieil homme barbu à capuche, comme un prêtre de l'église.",
        "en": "An old bearded man in a hood, like a church priest."
      },
      "29": {
        "s": 1,
        "es": "Una torre alta con agujas en el techo, como la torre de una iglesia.",
        "fr": "Une haute tour aux flèches pointues, comme le clocher d'une église.",
        "en": "A tall tower with spires on its roof, like a church tower."
      },
      "24": {
        "s": 1,
        "es": "Escalones de piedra con flores, como la entrada de la iglesia.",
        "fr": "Des marches de pierre avec des fleurs, comme l'entrée de l'église.",
        "en": "Stone steps with flowers, like the church entrance."
      },
      "11": {
        "s": 1,
        "es": "Grandes ventanas en arco, como los ventanales de una iglesia.",
        "fr": "De grandes fenêtres en arc, comme les vitraux d'une église.",
        "en": "Tall arched windows, like the windows of a church."
      },
      "53": {
        "s": 1,
        "es": "Una mujer con cofia y vestido de época, arreglada como para ir a misa.",
        "fr": "Une femme en coiffe et robe d'époque, apprêtée comme pour aller à la messe.",
        "en": "A woman in a bonnet and period dress, dressed up as if for mass."
      },
      "59": {
        "s": 2,
        "es": "Un palo clavado con un moño, parecido a una cruz.",
        "fr": "Un piquet planté avec un nœud, qui ressemble à une croix.",
        "en": "A stake in the ground with a bow, looking like a cross."
      },
      "36": {
        "s": 1,
        "es": "Figuras talladas en madera, como las estatuas de santos de la iglesia.",
        "fr": "Des figures sculptées dans le bois, comme les statues de saints de l'église.",
        "en": "Carved wooden figures, like the saints' statues in church."
      },
      "60": {
        "s": 1,
        "es": "Un diablo junto al fuego: lo que se aleja con la oración.",
        "fr": "Un diable près du feu : ce que l'on éloigne par la prière.",
        "en": "A devil by the fire: what prayer keeps away."
      },
      "58": {
        "s": 1,
        "es": "Una torre alta en punta, como el campanario de la iglesia.",
        "fr": "Une haute tour pointue, comme le clocher de l'église.",
        "en": "A tall pointed tower, like the church bell tower."
      },
      "12": {
        "s": 1,
        "es": "Algo que se sirve de taza en taza, como la comunión que se reparte.",
        "fr": "Quelque chose qu'on verse de tasse en tasse, comme la communion qu'on distribue.",
        "en": "Something poured from cup to cup, like communion being shared."
      },
      "33": {
        "s": 1,
        "es": "Una mano abierta que ofrece algo, como una ofrenda en el altar.",
        "fr": "Une main ouverte qui offre quelque chose, comme une offrande à l'autel.",
        "en": "An open hand offering something up, like an offering at the altar."
      },
      "44": {
        "s": 1,
        "es": "Relojes: la hora fija de la misa del domingo.",
        "fr": "Des horloges : l'heure fixe de la messe du dimanche.",
        "en": "Clocks: the set hour of Sunday mass."
      },
      "45": {
        "s": 1,
        "es": "Una luz que brilla en la oscuridad, como la luz dentro de la iglesia.",
        "fr": "Une lumière qui brille dans le noir, comme la lumière dans l'église.",
        "en": "A light shining in the dark, like the light inside the church."
      }
    },
    "barco": {
      "25": {
        "s": 2
      },
      "59": {
        "s": 2
      },
      "1": {
        "s": 2
      },
      "21": {
        "s": 2
      },
      "3": {
        "s": 3,
        "es": "Un bote con forma de cisne y gente a bordo: el viaje por el agua.",
        "fr": "Une barque en forme de cygne avec des passagers : le voyage sur l'eau.",
        "en": "A swan-shaped boat with people aboard: the journey over water."
      },
      "11": {
        "s": 1,
        "es": "Todo hundido bajo el agua con burbujas, como un barco naufragado.",
        "fr": "Tout englouti sous l'eau avec des bulles, comme un navire naufragé.",
        "en": "Everything sunk underwater with bubbles, like a shipwreck."
      },
      "46": {
        "s": 1,
        "es": "Lluvia fuerte y paraguas volando: la tormenta en alta mar.",
        "fr": "Pluie forte et parapluies qui s'envolent : la tempête en haute mer.",
        "en": "Heavy rain and umbrellas flying off: a storm at sea."
      },
      "26": {
        "s": 1,
        "es": "Globos que viajan por el aire: otro modo de llegar desde lejos.",
        "fr": "Des montgolfières qui voyagent dans les airs : une autre façon d'arriver de loin.",
        "en": "Balloons travelling through the air: another way of arriving from afar."
      },
      "10": {
        "s": 1,
        "es": "Una bandera en un palo, como la bandera en el mástil del barco.",
        "fr": "Un drapeau sur un bâton, comme le pavillon au mât du navire.",
        "en": "A flag on a pole, like the flag on a ship's mast."
      },
      "39": {
        "s": 1,
        "es": "Una canasta voladora trae una botella desde lejos: mercadería que llega.",
        "fr": "Un panier volant apporte une bouteille de loin : de la marchandise qui arrive.",
        "en": "A flying basket brings a bottle from afar: goods arriving."
      },
      "8": {
        "s": 1,
        "es": "Una mujer parada sobre postes en medio del agua, como en un muelle.",
        "fr": "Une femme debout sur des poteaux au milieu de l'eau, comme sur un quai.",
        "en": "A woman standing on posts in the middle of the water, like on a pier."
      },
      "40": {
        "s": 1,
        "es": "Alguien con los pies en el agua y ondas alrededor, como en la orilla al desembarcar.",
        "fr": "Quelqu'un les pieds dans l'eau avec des ondes autour, comme sur la rive au débarquement.",
        "en": "Someone standing in water with ripples around, like at the shore when landing."
      },
      "34": {
        "s": 2,
        "es": "Una rueda con rayos, parecida al timón de un barco.",
        "fr": "Une roue à rayons, qui ressemble à la barre d'un navire.",
        "en": "A spoked wheel, much like a ship's helm."
      },
      "17": {
        "s": 2,
        "es": "Un baúl cerrado con soga, como el equipaje que llega en barco.",
        "fr": "Une malle fermée avec une corde, comme les bagages qui arrivent par bateau.",
        "en": "A trunk tied with rope, like luggage arriving by ship."
      },
      "58": {
        "s": 1,
        "es": "Banderas que flamean en un mástil, como en el barco.",
        "fr": "Des drapeaux qui flottent sur un mât, comme sur le navire.",
        "en": "Flags fluttering on a mast, like on the ship."
      },
      "22": {
        "s": 1,
        "es": "Pájaros que vuelan alrededor, como las gaviotas que siguen al barco.",
        "fr": "Des oiseaux qui volent autour, comme les mouettes qui suivent le navire.",
        "en": "Birds flying around, like gulls following the ship."
      },
      "57": {
        "s": 1,
        "es": "Tentáculos que salen de la jarra, como un monstruo del mar.",
        "fr": "Des tentacules qui sortent de la carafe, comme un monstre marin.",
        "en": "Tentacles rising from the jug, like a sea monster."
      },
      "37": {
        "s": 1,
        "es": "Un remolino de agua, como los que enfrenta un barco en el mar.",
        "fr": "Un tourbillon d'eau, comme ceux qu'affronte un navire en mer.",
        "en": "A whirlpool of water, like those a ship faces at sea."
      },
      "43": {
        "s": 1,
        "es": "Cajas que flotan, como la carga que trae el barco.",
        "fr": "Des caisses qui flottent, comme la cargaison du navire.",
        "en": "Floating boxes, like the cargo a ship brings."
      },
      "31": {
        "s": 1,
        "es": "Joyas y huesos enterrados, como un tesoro de piratas.",
        "fr": "Des joyaux et des os enterrés, comme un trésor de pirates.",
        "en": "Buried jewels and bones, like pirate treasure."
      }
    },
    "cataratas": {
      "8": {
        "s": 3
      },
      "25": {
        "s": 2
      },
      "46": {
        "s": 2
      },
      "11": {
        "s": 2
      },
      "21": {
        "s": 2,
        "es": "Un barranco profundo con agua que salpica abajo, como la Garganta del Diablo.",
        "fr": "Un ravin profond avec de l'eau qui éclabousse en bas, comme la Gorge du Diable.",
        "en": "A deep gorge with water splashing below, like the Devil's Throat."
      },
      "37": {
        "s": 2,
        "es": "Un remolino de agua que sube con fuerza, como el rocío de las cataratas.",
        "fr": "Un tourbillon d'eau qui monte avec force, comme les embruns des chutes.",
        "en": "A whirl of water rising with force, like the spray of the falls."
      },
      "12": {
        "s": 2,
        "es": "Un chorro que cae en cascada de taza en taza, como el agua que cae en saltos.",
        "fr": "Un jet qui tombe en cascade de tasse en tasse, comme l'eau qui chute en paliers.",
        "en": "A stream cascading from cup to cup, like water dropping in falls."
      },
      "40": {
        "s": 2,
        "es": "Árboles enormes y agua: la selva húmeda alrededor de las cataratas.",
        "fr": "Des arbres énormes et de l'eau : la jungle humide autour des chutes.",
        "en": "Huge trees and water: the humid jungle around the falls."
      },
      "41": {
        "s": 1,
        "es": "Una cortina de lluvia que cae de arriba, como el agua de las cataratas.",
        "fr": "Un rideau de pluie qui tombe d'en haut, comme l'eau des chutes.",
        "en": "A curtain of rain falling from above, like the water of the falls."
      },
      "59": {
        "s": 1,
        "es": "Una palmera y el agua alrededor: un paisaje tropical, como el de Iguazú.",
        "fr": "Un palmier entouré d'eau : un paysage tropical, comme celui d'Iguazú.",
        "en": "A palm tree surrounded by water: a tropical landscape, like Iguazú."
      },
      "3": {
        "s": 1,
        "es": "Un bote en el agua, como los que se acercan a los saltos.",
        "fr": "Une barque sur l'eau, comme celles qui s'approchent des chutes.",
        "en": "A boat on the water, like the ones that approach the falls."
      },
      "50": {
        "s": 1,
        "es": "Una silla al borde de un precipicio: el gran salto de las cataratas.",
        "fr": "Une chaise au bord d'un précipice : le grand saut des chutes.",
        "en": "A chair at the edge of a cliff: the great drop of the falls."
      },
      "18": {
        "s": 2,
        "es": "La falda cae larga y azul como una cascada de agua.",
        "fr": "La jupe tombe longue et bleue comme une cascade d'eau.",
        "en": "The long blue skirt falls like a cascade of water."
      },
      "13": {
        "s": 1,
        "es": "Nubes blancas por todos lados, como la neblina de las cataratas.",
        "fr": "Des nuages blancs partout, comme la brume des chutes.",
        "en": "White clouds everywhere, like the mist of the falls."
      },
      "9": {
        "s": 1,
        "es": "Rocas altas y un barranco, como las paredes de piedra del cañón.",
        "fr": "De hauts rochers et un ravin, comme les parois de pierre du canyon.",
        "en": "Tall rocks and a ravine, like the stone walls of the canyon."
      },
      "1": {
        "s": 1,
        "es": "Peces que saltan alrededor de un pescador, como en el río Iguazú.",
        "fr": "Des poissons qui sautent autour d'un pêcheur, comme dans le fleuve Iguazú.",
        "en": "Fish leaping around a fisherman, like in the Iguazú River."
      },
      "22": {
        "s": 1,
        "es": "Pájaros que vuelan alrededor, como las aves de la selva misionera.",
        "fr": "Des oiseaux qui volent autour, comme ceux de la jungle de Misiones.",
        "en": "Birds flying around, like the birds of the Misiones jungle."
      },
      "2": {
        "s": 1,
        "es": "Frutas tropicales, como las de la selva cerca de Iguazú.",
        "fr": "Des fruits tropicaux, comme ceux de la jungle près d'Iguazú.",
        "en": "Tropical fruit, like that of the jungle near Iguazú."
      },
      "10": {
        "s": 1,
        "es": "Globos de muchos colores, como el arco iris que se forma en las cataratas.",
        "fr": "Des ballons de toutes les couleurs, comme l'arc-en-ciel qui se forme aux chutes.",
        "en": "Balloons of many colors, like the rainbow that forms at the falls."
      },
      "24": {
        "s": 1,
        "es": "Plantas verdes y frondosas, como la vegetación de la selva.",
        "fr": "Des plantes vertes et feuillues, comme la végétation de la jungle.",
        "en": "Lush green plants, like the jungle vegetation."
      }
    },
    "mendoza": {
      "39": {
        "s": 3
      },
      "2": {
        "s": 2
      },
      "5": {
        "s": 2
      },
      "26": {
        "s": 2
      },
      "41": {
        "s": 2,
        "es": "Un barril grande, como los toneles de vino de las bodegas de Mendoza.",
        "fr": "Un grand tonneau, comme les fûts de vin des caves de Mendoza.",
        "en": "A big barrel, like the wine casks in Mendoza's wineries."
      },
      "9": {
        "s": 2,
        "es": "Rocas y montañas altas, como la cordillera de los Andes en Mendoza.",
        "fr": "Des rochers et de hautes montagnes, comme la cordillère des Andes à Mendoza.",
        "en": "Rocks and tall mountains, like the Andes range in Mendoza."
      },
      "14": {
        "s": 2,
        "es": "Una copa dorada: el vino que hizo famosa a Mendoza.",
        "fr": "Une coupe dorée : le vin qui a rendu Mendoza célèbre.",
        "en": "A golden goblet: the wine that made Mendoza famous."
      },
      "33": {
        "s": 1,
        "es": "Un paisaje de desierto seco, como las tierras áridas de Cuyo.",
        "fr": "Un paysage de désert sec, comme les terres arides du Cuyo.",
        "en": "A dry desert landscape, like the arid lands of Cuyo."
      },
      "25": {
        "s": 1,
        "es": "Una botella con etiqueta, como una botella de vino mendocino.",
        "fr": "Une bouteille avec étiquette, comme une bouteille de vin de Mendoza.",
        "en": "A labelled bottle, like a bottle of Mendoza wine."
      },
      "18": {
        "s": 1,
        "es": "Una botella y un vaso entre las cosas: el vino de la región.",
        "fr": "Une bouteille et un verre parmi les objets : le vin de la région.",
        "en": "A bottle and a glass among the things: the region's wine."
      },
      "21": {
        "s": 1,
        "es": "Un jinete cruza un puente entre montañas, como el cruce de los Andes desde Mendoza.",
        "fr": "Un cavalier traverse un pont entre les montagnes, comme la traversée des Andes depuis Mendoza.",
        "en": "A rider crosses a bridge between mountains, like the Andes crossing from Mendoza."
      },
      "13": {
        "s": 1,
        "es": "Un paisaje alto, blanco y frío, como las cumbres nevadas de la cordillera.",
        "fr": "Un paysage haut, blanc et froid, comme les sommets enneigés de la cordillère.",
        "en": "A high, white, cold landscape, like the snowy peaks of the Andes."
      },
      "53": {
        "s": 2,
        "es": "Alguien que arranca lo que cuelga del árbol, como en la cosecha.",
        "fr": "Quelqu'un qui cueille ce qui pend de l'arbre, comme lors de la récolte.",
        "en": "Someone picking what hangs from the tree, like at harvest time."
      },
      "27": {
        "s": 1,
        "es": "Lanzas en fila, como el Ejército de los Andes que se armó en Mendoza.",
        "fr": "Des lances en rang, comme l'Armée des Andes formée à Mendoza.",
        "en": "A row of spears, like the Army of the Andes raised in Mendoza."
      },
      "58": {
        "s": 1,
        "es": "Un soldado de uniforme azul, como los que partieron de Mendoza con San Martín.",
        "fr": "Un soldat en uniforme bleu, comme ceux partis de Mendoza avec San Martín.",
        "en": "A soldier in blue uniform, like those who left Mendoza with San Martín."
      },
      "24": {
        "s": 1,
        "es": "Plantas en tierra seca dentro de una maceta, como las viñas plantadas.",
        "fr": "Des plantes dans une terre sèche en jardinière, comme les vignes plantées.",
        "en": "Plants in dry soil in a planter, like planted vines."
      },
      "59": {
        "s": 1,
        "es": "Botellas vacías tiradas: el vino que sale de Mendoza.",
        "fr": "Des bouteilles vides éparpillées : le vin qui vient de Mendoza.",
        "en": "Scattered empty bottles: the wine that comes from Mendoza."
      },
      "57": {
        "s": 1,
        "es": "Una jarra de vidrio llena de un líquido oscuro, como el vino.",
        "fr": "Une carafe en verre pleine d'un liquide sombre, comme du vin.",
        "en": "A glass jug full of a dark liquid, like wine."
      },
      "50": {
        "s": 1,
        "es": "Un líquido rojizo que se sirve y salpica, como el vino mendocino.",
        "fr": "Un liquide rougeâtre qu'on verse et qui éclabousse, comme le vin de Mendoza.",
        "en": "A reddish liquid poured and splashing, like Mendoza wine."
      },
      "12": {
        "s": 1,
        "es": "Un chorro oscuro que se sirve de taza en taza, como el vino de las bodegas.",
        "fr": "Un jet sombre versé de tasse en tasse, comme le vin des caves.",
        "en": "A dark stream poured cup to cup, like wine from the wineries."
      }
    },
    "ruinas": {
      "33": {
        "s": 2
      },
      "38": {
        "s": 3
      },
      "34": {
        "s": 2
      },
      "31": {
        "s": 2
      },
      "11": {
        "s": 2,
        "es": "Un edificio y una torre hundidos y cubiertos de algas: un lugar abandonado.",
        "fr": "Un édifice et une tour engloutis et couverts d'algues : un lieu abandonné.",
        "en": "A sunken building and tower covered in seaweed: an abandoned place."
      },
      "6": {
        "s": 2,
        "es": "Una muralla de piedra con almenas, como las paredes viejas que quedan en pie.",
        "fr": "Une muraille de pierre crénelée, comme les vieux murs encore debout.",
        "en": "A crenellated stone wall, like the old walls still standing."
      },
      "52": {
        "s": 2,
        "es": "Un casco aplastado con flores creciendo alrededor: restos que la naturaleza cubre.",
        "fr": "Un casque écrasé avec des fleurs qui poussent autour : des restes que la nature recouvre.",
        "en": "A crushed helmet with flowers growing around it: remains that nature reclaims."
      },
      "15": {
        "s": 1,
        "es": "Una calavera y huesos tirados: lo que queda de otra época.",
        "fr": "Un crâne et des os éparpillés : ce qui reste d'une autre époque.",
        "en": "A skull and scattered bones: what is left of another time."
      },
      "24": {
        "s": 1,
        "es": "Escalones de piedra y una flor marchita, como un lugar viejo y olvidado.",
        "fr": "Des marches de pierre et une fleur fanée, comme un lieu vieux et oublié.",
        "en": "Stone steps and a wilted flower, like an old, forgotten place."
      },
      "44": {
        "s": 1,
        "es": "Relojes por todos lados: el tiempo que pasa y deja todo en ruinas.",
        "fr": "Des horloges partout : le temps qui passe et laisse tout en ruines.",
        "en": "Clocks everywhere: the passing time that leaves everything in ruins."
      },
      "40": {
        "s": 1,
        "es": "Troncos enormes de árboles, como la selva que rodea las ruinas de Misiones.",
        "fr": "D'énormes troncs d'arbres, comme la jungle autour des ruines des Missions.",
        "en": "Huge tree trunks, like the jungle around the Misiones ruins."
      },
      "29": {
        "s": 1,
        "es": "Una torre medio hundida en un bol: un edificio que se viene abajo.",
        "fr": "Une tour à moitié engloutie dans un bol : un édifice qui s'effondre.",
        "en": "A tower half-sunk in a bowl: a building falling apart."
      },
      "9": {
        "s": 2,
        "es": "Una torre con campana entre rocas, como el campanario de una vieja misión.",
        "fr": "Une tour avec une cloche entre les rochers, comme le clocher d'une vieille mission.",
        "en": "A bell tower among rocks, like the belfry of an old mission."
      },
      "36": {
        "s": 2,
        "es": "Figuras talladas con puertas en arco y escalones, como piedras de una misión.",
        "fr": "Des figures sculptées avec des portes en arc et des marches, comme les pierres d'une mission.",
        "en": "Carved figures with arched doors and steps, like the stones of a mission."
      },
      "26": {
        "s": 2,
        "es": "Una gran cara de piedra en el pasto, como un monumento antiguo.",
        "fr": "Un grand visage de pierre dans l'herbe, comme un monument ancien.",
        "en": "A great stone face in the grass, like an ancient monument."
      },
      "58": {
        "s": 1,
        "es": "Calaveras en la fachada y una torre vieja: un lugar de otra época.",
        "fr": "Des crânes sur la façade et une vieille tour : un lieu d'une autre époque.",
        "en": "Skulls on the facade and an old tower: a place from another time."
      },
      "21": {
        "s": 1,
        "es": "Un puente viejo con tablas que faltan, como algo abandonado.",
        "fr": "Un vieux pont aux planches manquantes, comme quelque chose d'abandonné.",
        "en": "An old bridge with missing planks, like something abandoned."
      },
      "28": {
        "s": 1,
        "es": "Un tronco roto y una rama seca: lo que el tiempo destruye.",
        "fr": "Un tronc brisé et une branche sèche : ce que le temps détruit.",
        "en": "A broken stump and a dry twig: what time destroys."
      },
      "59": {
        "s": 1,
        "es": "Una isla desierta con botellas tiradas: un lugar que quedó abandonado.",
        "fr": "Une île déserte avec des bouteilles abandonnées : un lieu délaissé.",
        "en": "A deserted island with scattered bottles: a place left behind."
      },
      "14": {
        "s": 1,
        "es": "Un libro viejo con un rey dibujado: la historia de otros tiempos.",
        "fr": "Un vieux livre avec un roi dessiné : l'histoire d'autres temps.",
        "en": "An old book with a king drawn in it: the history of other times."
      }
    },
    "vino": {
      "39": {
        "s": 3
      },
      "14": {
        "s": 2
      },
      "25": {
        "s": 2
      },
      "2": {
        "s": 2
      },
      "41": {
        "s": 3,
        "es": "Un barril con la tapa color tinto: el tonel donde se guarda el vino.",
        "fr": "Un tonneau au couvercle couleur rouge vin : le fût où l'on garde le vin.",
        "en": "A barrel with a wine-red top: the cask where wine is kept."
      },
      "18": {
        "s": 2,
        "es": "Una botella y un vaso caen de la falda: la bebida en la mesa.",
        "fr": "Une bouteille et un verre tombent de la jupe : la boisson sur la table.",
        "en": "A bottle and a glass fall from the skirt: the drink on the table."
      },
      "59": {
        "s": 1,
        "es": "Botellas vacías tiradas en la arena y el agua.",
        "fr": "Des bouteilles vides éparpillées dans le sable et l'eau.",
        "en": "Empty bottles scattered in the sand and the water."
      },
      "57": {
        "s": 1,
        "es": "Una jarra de vidrio llena de un líquido oscuro, como una jarra de vino.",
        "fr": "Une carafe en verre pleine d'un liquide sombre, comme une carafe de vin.",
        "en": "A glass jug full of a dark liquid, like a jug of wine."
      },
      "12": {
        "s": 1,
        "es": "Un chorro oscuro que se sirve de taza en taza, como el vino que se sirve.",
        "fr": "Un jet sombre versé de tasse en tasse, comme le vin qu'on sert.",
        "en": "A dark stream poured from cup to cup, like wine being served."
      },
      "50": {
        "s": 1,
        "es": "Alguien que sirve y salpica un líquido rojizo, como vino derramado.",
        "fr": "Quelqu'un qui verse et éclabousse un liquide rougeâtre, comme du vin renversé.",
        "en": "Someone pouring and splashing a reddish liquid, like spilled wine."
      },
      "5": {
        "s": 1,
        "es": "Un paisaje seco con rocas y cactus, como la tierra de viñedos de Cuyo.",
        "fr": "Un paysage sec de rochers et de cactus, comme la terre des vignobles du Cuyo.",
        "en": "A dry landscape of rocks and cacti, like Cuyo's vineyard country."
      },
      "9": {
        "s": 1,
        "es": "Cerros secos y piedra, como las laderas donde crecen las viñas.",
        "fr": "Des collines sèches et de la pierre, comme les coteaux où pousse la vigne.",
        "en": "Dry hills and stone, like the slopes where vines grow."
      },
      "34": {
        "s": 2,
        "es": "Un túnel bajo tierra, oscuro y fresco, como la cava donde descansa el vino.",
        "fr": "Un tunnel sous terre, sombre et frais, comme la cave où repose le vin.",
        "en": "A dark, cool underground tunnel, like the cellar where wine rests."
      },
      "52": {
        "s": 1,
        "es": "Un chorro rojo oscuro que corre por el pasto, del color del vino tinto.",
        "fr": "Un filet rouge sombre qui coule dans l'herbe, couleur de vin rouge.",
        "en": "A dark red stream running through the grass, the color of red wine."
      },
      "36": {
        "s": 1,
        "es": "Una guitarra y figuras de fiesta: la música que acompaña el vino.",
        "fr": "Une guitare et des figures en fête : la musique qui accompagne le vin.",
        "en": "A guitar and festive figures: the music that goes with wine."
      },
      "33": {
        "s": 1,
        "es": "Un reloj de arena: el tiempo que el vino necesita para estacionarse.",
        "fr": "Un sablier : le temps dont le vin a besoin pour vieillir.",
        "en": "An hourglass: the time wine needs to age."
      },
      "53": {
        "s": 1,
        "es": "Alguien que cosecha lo que cuelga del árbol, como en la vendimia.",
        "fr": "Quelqu'un qui cueille ce qui pend de l'arbre, comme aux vendanges.",
        "en": "Someone picking what hangs from the tree, like at the grape harvest."
      },
      "24": {
        "s": 1,
        "es": "Plantas en una maceta con tierra, como las viñas que dan las uvas.",
        "fr": "Des plantes en jardinière avec de la terre, comme les vignes qui donnent le raisin.",
        "en": "Plants in soil in a planter, like the vines that give the grapes."
      },
      "10": {
        "s": 1,
        "es": "Globos de colores: una fiesta donde se brinda con vino.",
        "fr": "Des ballons colorés : une fête où l'on trinque avec du vin.",
        "en": "Colorful balloons: a party where people toast with wine."
      },
      "37": {
        "s": 1,
        "es": "Un balde donde todo da vueltas, como la uva que se pisa y se mezcla.",
        "fr": "Un seau où tout tourbillonne, comme le raisin qu'on foule et qu'on mélange.",
        "en": "A bucket where everything swirls, like grapes being trodden and mixed."
      }
    },
    "mate": {
      "12": {
        "s": 2
      },
      "57": {
        "s": 2
      },
      "30": {
        "s": 2
      },
      "50": {
        "s": 2
      },
      "17": {
        "s": 2,
        "es": "Gente sentada en ronda, como la ronda de mate que pasa de mano en mano.",
        "fr": "Des gens assis en cercle, comme la ronde de maté qui passe de main en main.",
        "en": "People sitting in a circle, like the mate round passed from hand to hand."
      },
      "29": {
        "s": 2,
        "es": "Una cuchara junto a un recipiente, como la bombilla en el mate.",
        "fr": "Une cuillère à côté d'un récipient, comme la bombilla dans le maté.",
        "en": "A spoon beside a vessel, like the bombilla in the mate."
      },
      "26": {
        "s": 2,
        "es": "Hojas verdes que salen de arriba, como la yerba que asoma del mate.",
        "fr": "Des feuilles vertes qui jaillissent du haut, comme la yerba qui dépasse du maté.",
        "en": "Green leaves bursting out the top, like yerba heaped in the mate."
      },
      "60": {
        "s": 1,
        "es": "Un fuego encendido en el piso: para calentar el agua de la pava.",
        "fr": "Un feu allumé au sol : pour chauffer l'eau de la bouilloire.",
        "en": "A fire burning on the floor: to heat the water in the kettle."
      },
      "22": {
        "s": 1,
        "es": "Una llama azul bajo una tapa de metal, como el fuego que calienta la pava.",
        "fr": "Une flamme bleue sous un couvercle métallique, comme le feu qui chauffe la bouilloire.",
        "en": "A blue flame under a metal dome, like the fire heating the kettle."
      },
      "14": {
        "s": 1,
        "es": "Una mano que sostiene una copa, como quien pasa el mate al siguiente.",
        "fr": "Une main qui tient une coupe, comme celui qui passe le maté au suivant.",
        "en": "A hand holding up a cup, like someone passing the mate along."
      },
      "2": {
        "s": 1,
        "es": "Frutas redondas sobre la mesa, como la calabaza de la que se hace el mate.",
        "fr": "Des fruits ronds sur la table, comme la calebasse dont on fait le maté.",
        "en": "Round fruit on the table, like the gourd the mate is made from."
      },
      "24": {
        "s": 1,
        "es": "Hojas verdes de una planta, como la planta de yerba mate.",
        "fr": "Les feuilles vertes d'une plante, comme la plante de yerba maté.",
        "en": "The green leaves of a plant, like the yerba mate plant."
      },
      "5": {
        "s": 2,
        "es": "Un señor que chupa una boquilla larga y fina, como la bombilla del mate.",
        "fr": "Un monsieur qui tire sur un long fume-cigarette fin, comme la bombilla du maté.",
        "en": "A man drawing on a long thin holder, like the bombilla of the mate."
      },
      "37": {
        "s": 1,
        "es": "Un balde lleno de agua: el agua que se calienta para el mate.",
        "fr": "Un seau plein d'eau : l'eau qu'on chauffe pour le maté.",
        "en": "A bucket full of water: the water heated for mate."
      },
      "46": {
        "s": 1,
        "es": "Lluvia afuera: un día para quedarse adentro tomando mate.",
        "fr": "De la pluie dehors : un jour à rester à l'intérieur à boire du maté.",
        "en": "Rain outside: a day for staying in and drinking mate."
      },
      "1": {
        "s": 1,
        "es": "Un hombre de campo tranquilo con sombrero, como el que se toma unos mates.",
        "fr": "Un homme de la campagne tranquille au chapeau, comme celui qui boit son maté.",
        "en": "A calm country man in a hat, like someone sipping mate."
      },
      "31": {
        "s": 1,
        "es": "Alguien apoyado en un árbol, descansando a la sombra, como en la hora del mate.",
        "fr": "Quelqu'un adossé à un arbre, au repos à l'ombre, comme à l'heure du maté.",
        "en": "Someone leaning on a tree, resting in the shade, like at mate time."
      },
      "11": {
        "s": 1,
        "es": "Todo verde y con burbujas, como el agua de la yerba en el mate.",
        "fr": "Tout est vert et plein de bulles, comme l'eau de la yerba dans le maté.",
        "en": "Everything green and bubbly, like the water over the yerba in a mate."
      },
      "25": {
        "s": 1,
        "es": "Un frasco de vidrio, como el frasco donde se guarda la yerba.",
        "fr": "Un bocal en verre, comme celui où l'on garde la yerba.",
        "en": "A glass jar, like the jar where yerba is kept."
      },
      "41": {
        "s": 1,
        "es": "Velas encendidas de noche, como una charla larga con mate.",
        "fr": "Des bougies allumées la nuit, comme une longue conversation autour du maté.",
        "en": "Candles lit at night, like a long chat over mate."
      }
    },
    "pollo": {
      "51": {
        "s": 3
      },
      "10": {
        "s": 2
      },
      "22": {
        "s": 2
      },
      "13": {
        "s": 1
      },
      "18": {
        "s": 3,
        "es": "Una pata de pollo cae de la falda: el pollo listo para comer.",
        "fr": "Une cuisse de poulet tombe de la jupe : le poulet prêt à manger.",
        "en": "A chicken leg falls from the skirt: chicken ready to eat."
      },
      "19": {
        "s": 2,
        "es": "Una pluma grande clavada en el zapato, como las plumas de un ave.",
        "fr": "Une grande plume plantée dans la chaussure, comme les plumes d'une volaille.",
        "en": "A big feather stuck in the shoe, like a bird's feathers."
      },
      "3": {
        "s": 1,
        "es": "Un bote con forma de cisne: otra ave.",
        "fr": "Une barque en forme de cygne : un autre oiseau.",
        "en": "A swan-shaped boat: another bird."
      },
      "43": {
        "s": 1,
        "es": "Un pájaro dibujado dentro de un cubo, como un ave encerrada.",
        "fr": "Un oiseau dessiné dans un cube, comme une volaille enfermée.",
        "en": "A bird drawn inside a cube, like a cooped-up bird."
      },
      "39": {
        "s": 1,
        "es": "Una canasta con alas de pájaro: alas, como las del pollo.",
        "fr": "Un panier avec des ailes d'oiseau : des ailes, comme celles du poulet.",
        "en": "A basket with bird wings: wings, like a chicken's."
      },
      "60": {
        "s": 1,
        "es": "Algo colgado sobre el fuego, como el pollo que se asa.",
        "fr": "Quelque chose suspendu au-dessus du feu, comme le poulet qu'on rôtit.",
        "en": "Something hanging over the fire, like chicken roasting."
      },
      "30": {
        "s": 1,
        "es": "Una estufa caliente, como el horno donde se cocina el pollo.",
        "fr": "Un poêle chaud, comme le four où l'on cuit le poulet.",
        "en": "A hot stove, like the oven where chicken is cooked."
      },
      "5": {
        "s": 1,
        "es": "Un sombrero con una pluma grande, como la pluma de un ave de corral.",
        "fr": "Un chapeau avec une grande plume, comme la plume d'une volaille.",
        "en": "A hat with a big feather, like a farmyard bird's feather."
      },
      "33": {
        "s": 2,
        "es": "Un tocado con cabeza de ave y pico, como la cabeza de un pollo.",
        "fr": "Une coiffe à tête d'oiseau avec un bec, comme la tête d'un poulet.",
        "en": "A headdress with a bird's head and beak, like a chicken's head."
      },
      "11": {
        "s": 1,
        "es": "Un casco con alitas, como las alas de un ave.",
        "fr": "Un casque à petites ailes, comme les ailes d'un oiseau.",
        "en": "A helmet with little wings, like a bird's wings."
      },
      "58": {
        "s": 1,
        "es": "Un sombrero con una pluma roja, como una pluma de gallina.",
        "fr": "Un chapeau à plume rouge, comme une plume de poule.",
        "en": "A hat with a red feather, like a hen's feather."
      },
      "45": {
        "s": 1,
        "es": "Un mapache: un animal que se mete en el gallinero.",
        "fr": "Un raton laveur : un animal qui s'invite dans le poulailler.",
        "en": "A raccoon: an animal that sneaks into the henhouse."
      },
      "6": {
        "s": 1,
        "es": "Un gato gigante que ataca a los ratones: el peligro que acecha al corral.",
        "fr": "Un chat géant qui attaque les souris : le danger qui guette la basse-cour.",
        "en": "A giant cat attacking mice: the danger lurking near the farmyard."
      },
      "29": {
        "s": 1,
        "es": "Un bol de sopa con cuchara, como un caldo de pollo.",
        "fr": "Un bol de soupe avec une cuillère, comme un bouillon de poulet.",
        "en": "A bowl of soup with a spoon, like chicken broth."
      },
      "15": {
        "s": 1,
        "es": "Huesos por todos lados, como los huesitos que quedan del pollo.",
        "fr": "Des os partout, comme les petits os qui restent du poulet.",
        "en": "Bones everywhere, like the little bones left from the chicken."
      },
      "25": {
        "s": 1,
        "es": "Un conejo: otro animal de granja, como el pollo.",
        "fr": "Un lapin : un autre animal de ferme, comme le poulet.",
        "en": "A rabbit: another farm animal, like the chicken."
      }
    },
    "asado": {
      "30": {
        "s": 2
      },
      "60": {
        "s": 3
      },
      "15": {
        "s": 2
      },
      "51": {
        "s": 2
      },
      "22": {
        "s": 2,
        "es": "Una llama encendida: el fuego de la parrilla.",
        "fr": "Une flamme allumée : le feu du barbecue.",
        "en": "A burning flame: the fire of the grill."
      },
      "18": {
        "s": 2,
        "es": "Una pata de carne y un tenedor: la carne lista para comer.",
        "fr": "Une cuisse de viande et une fourchette : la viande prête à manger.",
        "en": "A meat leg and a fork: meat ready to eat."
      },
      "17": {
        "s": 2,
        "es": "Gente reunida en ronda, como los amigos alrededor del asado.",
        "fr": "Des gens réunis en cercle, comme les amis autour de l'asado.",
        "en": "People gathered in a circle, like friends around the asado."
      },
      "6": {
        "s": 1,
        "es": "Un gato que escupe fuego: las llamas que cocinan la carne.",
        "fr": "Un chat qui crache du feu : les flammes qui cuisent la viande.",
        "en": "A cat breathing fire: the flames that cook the meat."
      },
      "31": {
        "s": 1,
        "es": "Huesos enterrados, como los huesos que quedan después del asado.",
        "fr": "Des os enterrés, comme les os qui restent après l'asado.",
        "en": "Buried bones, like the bones left after the asado."
      },
      "13": {
        "s": 1,
        "es": "Un animal grande del campo: la carne que termina en la parrilla.",
        "fr": "Un grand animal de la campagne : la viande qui finit sur le gril.",
        "en": "A big country animal: the meat that ends up on the grill."
      },
      "39": {
        "s": 1,
        "es": "Una botella de vino en una canasta: el vino que acompaña el asado.",
        "fr": "Une bouteille de vin dans un panier : le vin qui accompagne l'asado.",
        "en": "A bottle of wine in a basket: the wine that goes with the asado."
      },
      "50": {
        "s": 1,
        "es": "Una espada clavada en el pasto, como el cuchillo para cortar la carne.",
        "fr": "Une épée plantée dans l'herbe, comme le couteau pour couper la viande.",
        "en": "A sword stuck in the grass, like the knife for cutting the meat."
      },
      "27": {
        "s": 2,
        "es": "Lanzas largas y puntiagudas, como los asadores clavados junto al fuego.",
        "fr": "De longues lances pointues, comme les broches plantées près du feu.",
        "en": "Long pointed spears, like the spits stuck in the ground by the fire."
      },
      "38": {
        "s": 2,
        "es": "Tablas de madera: la leña que se junta para el fuego del asado.",
        "fr": "Des planches de bois : le bois qu'on rassemble pour le feu de l'asado.",
        "en": "Wooden planks: the firewood gathered for the asado fire."
      },
      "5": {
        "s": 1,
        "es": "Humo que sube en el aire, como el humo de la parrilla.",
        "fr": "De la fumée qui monte dans l'air, comme celle du barbecue.",
        "en": "Smoke rising in the air, like smoke from the grill."
      },
      "45": {
        "s": 1,
        "es": "Una luz que brilla fuerte, como las brasas encendidas.",
        "fr": "Une lumière qui brille fort, comme les braises ardentes.",
        "en": "A light glowing brightly, like burning embers."
      },
      "36": {
        "s": 1,
        "es": "Una guitarra: la música en la sobremesa del asado.",
        "fr": "Une guitare : la musique après le repas de l'asado.",
        "en": "A guitar: the music after the asado meal."
      },
      "1": {
        "s": 1,
        "es": "Peces que se pescan: otra cosa que puede ir a la parrilla.",
        "fr": "Des poissons qu'on pêche : autre chose qui peut aller sur le gril.",
        "en": "Fish being caught: something else that can go on the grill."
      },
      "28": {
        "s": 1,
        "es": "Un tronco roto y ramitas, como la leña para prender el fuego.",
        "fr": "Un tronc brisé et des brindilles, comme le bois pour allumer le feu.",
        "en": "A broken stump and twigs, like kindling to start the fire."
      },
      "41": {
        "s": 1,
        "es": "Un barril y velas encendidas, como una noche de asado con vino.",
        "fr": "Un tonneau et des bougies allumées, comme une soirée asado avec du vin.",
        "en": "A barrel and lit candles, like an asado night with wine."
      }
    }
  },
  "2080": {
    "p36": {
      "80": {
        "s": 3
      },
      "100": {
        "s": 3
      },
      "36": {
        "s": 2
      },
      "63": {
        "s": 2
      },
      "30": {
        "s": 3,
        "es": "Una familia viaja dentro de una cápsula de vidrio entre autos voladores: pasajeros en un taxi del cielo.",
        "fr": "Une famille voyage dans une capsule de verre parmi des voitures volantes : des passagers dans un taxi du ciel.",
        "en": "A family rides inside a glass capsule among flying cars: passengers in a sky taxi."
      },
      "69": {
        "s": 3,
        "es": "Una gaviota con gorro y antiparras de aviador maneja una carretilla con cohetes: un piloto del aire.",
        "fr": "Une mouette avec bonnet et lunettes d’aviateur mène une brouette à fusées : un pilote des airs.",
        "en": "A seagull in an aviator cap and goggles rides a rocket wheelbarrow: a pilot of the air."
      },
      "84": {
        "s": 2,
        "es": "Un ornitorrinco con gorro de aviador vuela con un cohete en la espalda: pilotear por el cielo.",
        "fr": "Un ornithorynque en bonnet d’aviateur vole avec une fusée sur le dos : piloter dans le ciel.",
        "en": "A platypus in an aviator cap flies with a rocket on its back: piloting through the sky."
      },
      "26": {
        "s": 2,
        "es": "Pasajeros felices en un carrito que corre entre las nubes: un viaje por el aire.",
        "fr": "Des passagers ravis dans un wagonnet qui file entre les nuages : un trajet dans les airs.",
        "en": "Happy passengers in a car racing among the clouds: a trip through the air."
      },
      "59": {
        "s": 2,
        "es": "Un chico surfea las nubes en una tabla voladora y abajo pasa un teleférico: moverse por el aire.",
        "fr": "Un garçon surfe sur les nuages avec une planche volante, un téléphérique passe en bas : se déplacer dans les airs.",
        "en": "A boy surfs the clouds on a flying board while a cable car passes below: getting around by air."
      },
      "61": {
        "s": 2,
        "es": "Alfombras voladoras en un remolino sobre el desierto: el taxi aéreo de los cuentos.",
        "fr": "Des tapis volants dans un tourbillon au-dessus du désert : le taxi volant des contes.",
        "en": "Flying carpets swirling over the desert: the air taxi of fairy tales."
      },
      "27": {
        "s": 2,
        "es": "Un gato viaja en una alfombra voladora entre cúpulas: un pasajero que va por el cielo.",
        "fr": "Un chat voyage sur un tapis volant entre des coupoles : un passager qui file dans le ciel.",
        "en": "A cat rides a flying carpet among domes: a passenger travelling across the sky."
      },
      "106": {
        "s": 1,
        "es": "Un osito con casco mira por la ventanilla redonda de una nave con naves chiquitas afuera: la cabina.",
        "fr": "Un ourson casqué regarde par le hublot d’un vaisseau, de petits engins dehors : la cabine.",
        "en": "A helmeted teddy looks out a ship’s porthole at small craft outside: the cockpit."
      },
      "31": {
        "s": 1,
        "es": "Una chica en un auto rojo al lado de un robot al volante: alguien que te lleva.",
        "fr": "Une fille dans une voiture rouge à côté d’un robot au volant : quelqu’un qui vous conduit.",
        "en": "A woman in a red car next to a robot at the wheel: someone driving you around."
      },
      "1": {
        "s": 1,
        "es": "Un astronauta descansa junto a su cohete: el piloto en su pausa.",
        "fr": "Un astronaute se repose à côté de sa fusée : le pilote en pause.",
        "en": "An astronaut rests beside his rocket: the pilot on a break."
      },
      "15": {
        "s": 2,
        "es": "Un auto antiguo con faroles prendidos espera en la calle de noche, como un taxi.",
        "fr": "Une vieille voiture aux phares allumés attend dans la rue la nuit, comme un taxi.",
        "en": "An old car with its headlights on waits in the street at night, like a taxi."
      },
      "108": {
        "s": 2,
        "es": "Un tren colgado de un hilo viaja por el aire entre montañas: transporte por el cielo.",
        "fr": "Un train suspendu à un fil voyage dans les airs entre les montagnes : un transport aérien.",
        "en": "A train hanging from a thread travels through the air between mountains: transport in the sky."
      },
      "22": {
        "s": 1,
        "es": "Dos extraterrestres viajan arriba de un asteroide: pasajeros a toda velocidad.",
        "fr": "Deux extraterrestres voyagent sur un astéroïde : des passagers à toute vitesse.",
        "en": "Two aliens ride on an asteroid: passengers at full speed."
      },
      "107": {
        "s": 1,
        "es": "Un cofre con alas vuela sobre el campo: algo que se lleva por el aire.",
        "fr": "Un coffre ailé vole au-dessus de la campagne : quelque chose transporté par les airs.",
        "en": "A winged chest flies over the countryside: something carried by air."
      },
      "97": {
        "s": 1,
        "es": "Un dron lleva una oveja rosa por el cielo: llevar a alguien volando.",
        "fr": "Un drone emmène un mouton rose dans le ciel : transporter quelqu’un en volant.",
        "en": "A drone carries a pink sheep through the sky: flying someone somewhere."
      },
      "81": {
        "s": 1,
        "es": "Drones que llevan canastas por el aire: el tránsito del cielo.",
        "fr": "Des drones qui portent des paniers dans les airs : la circulation du ciel.",
        "en": "Drones carrying baskets through the air: sky traffic."
      },
      "74": {
        "s": 1,
        "es": "Un cohete de juguete junto a la ventana: soñar con manejar algo que vuela.",
        "fr": "Une fusée jouet près de la fenêtre : rêver de piloter un engin volant.",
        "en": "A toy rocket by the window: dreaming of flying a craft."
      },
      "40": {
        "s": 1,
        "es": "Un chico arrastra con una soga una montaña con alas: llevar algo por el aire.",
        "fr": "Un garçon tire avec une corde une montagne ailée : emmener quelque chose dans les airs.",
        "en": "A boy tows a winged mountain on a rope: taking something through the air."
      },
      "70": {
        "s": 1,
        "es": "Un tren recorre una muralla que serpentea entre las nubes: un viaje por las alturas.",
        "fr": "Un train parcourt une muraille qui serpente dans les nuages : un voyage en hauteur.",
        "en": "A train runs along a wall winding through the clouds: a journey up high."
      },
      "94": {
        "s": 1,
        "es": "Drones con luces vuelan en el cielo de noche: el tráfico aéreo.",
        "fr": "Des drones lumineux volent dans le ciel nocturne : le trafic aérien.",
        "en": "Drones with lights fly in the night sky: air traffic."
      }
    },
    "s03": {
      "76": {
        "s": 3
      },
      "101": {
        "s": 2
      },
      "29": {
        "s": 2
      },
      "46": {
        "s": 1
      },
      "57": {
        "s": 3,
        "es": "Una pareja de abuelos repara un corazón de metal cubierto de flores: amar a una máquina.",
        "fr": "Un couple de grands-parents répare un cœur de métal couvert de fleurs : aimer une machine.",
        "en": "An elderly couple repairs a metal heart covered in flowers: loving a machine."
      },
      "81": {
        "s": 2,
        "es": "Un postre enorme de crema decorado con flores y frutas, como una torta de casamiento.",
        "fr": "Un énorme dessert à la crème orné de fleurs et de fruits, comme une pièce montée de mariage.",
        "en": "A huge cream dessert decorated with flowers and fruit, like a wedding cake."
      },
      "66": {
        "s": 2,
        "es": "Una balanza con un gato de un lado y un chip de luz del otro: lo vivo y lo artificial, iguales.",
        "fr": "Une balance avec un chat d’un côté et une puce lumineuse de l’autre : le vivant et l’artificiel, à égalité.",
        "en": "A scale with a cat on one side and a glowing chip on the other: the living and the artificial, equal."
      },
      "111": {
        "s": 2,
        "es": "Un robot de juguete sonríe junto a un enchufe del que brotan flores: ternura entre máquinas y vida.",
        "fr": "Un robot jouet sourit près d’une prise d’où poussent des fleurs : tendresse entre machine et vivant.",
        "en": "A toy robot smiles beside a plug sprouting flowers: tenderness between machines and life."
      },
      "87": {
        "s": 2,
        "es": "Una chica le habla con un caracol a una figura hecha de luz: enamorarse de alguien sin cuerpo.",
        "fr": "Une fille parle dans un coquillage à une silhouette de lumière : aimer quelqu’un sans corps.",
        "en": "A girl speaks through a shell to a figure made of light: falling for someone with no body."
      },
      "26": {
        "s": 1,
        "es": "Una pareja de abuelos festeja feliz con un robot al lado: humanos y máquinas en la fiesta.",
        "fr": "Un couple âgé fait la fête avec un robot à côté : humains et machines célèbrent ensemble.",
        "en": "An elderly couple celebrates with a robot beside them: humans and machines partying together."
      },
      "33": {
        "s": 1,
        "es": "Una cocinera y robots preparan platos que vuelan: el banquete de una fiesta.",
        "fr": "Une cuisinière et des robots préparent des plats qui volent : le banquet d’une fête.",
        "en": "A cook and robots prepare flying dishes: the banquet of a celebration."
      },
      "112": {
        "s": 1,
        "es": "Una abuela de holograma y un robot hacen las compras juntos: la vida con lo virtual.",
        "fr": "Une grand-mère hologramme et un robot font les courses ensemble : vivre avec le virtuel.",
        "en": "A hologram grandma and a robot shop together: life alongside the virtual."
      },
      "52": {
        "s": 1,
        "es": "Un árbol lleno de sobres con sello de lacre: cartas de amor.",
        "fr": "Un arbre couvert d’enveloppes scellées à la cire : des lettres d’amour.",
        "en": "A tree full of wax-sealed envelopes: love letters."
      },
      "107": {
        "s": 1,
        "es": "Un cofre con alas y una cinta roja que vuela: un regalo para una ocasión especial.",
        "fr": "Un coffre ailé et un ruban rouge qui volent : un cadeau pour une grande occasion.",
        "en": "A winged chest and a flying red ribbon: a gift for a special occasion."
      },
      "31": {
        "s": 2,
        "es": "Una chica y un robot van juntos en un auto rojo, felices, como una pareja.",
        "fr": "Une fille et un robot roulent ensemble dans une voiture rouge, heureux, comme un couple.",
        "en": "A woman and a robot ride together in a red car, happy, like a couple."
      },
      "15": {
        "s": 2,
        "es": "Un señor de frac y moño, vestido como para una ceremonia.",
        "fr": "Un monsieur en queue-de-pie et nœud papillon, habillé comme pour une cérémonie.",
        "en": "A man in tails and a bow tie, dressed as if for a ceremony."
      },
      "63": {
        "s": 1,
        "es": "Un viajero y su robot sentados juntos: compañeros inseparables.",
        "fr": "Un voyageur et son robot assis côte à côte : des compagnons inséparables.",
        "en": "A traveller and his robot sitting side by side: inseparable companions."
      },
      "30": {
        "s": 1,
        "es": "Una familia que viaja con un robot entre ellos: la máquina como parte de la familia.",
        "fr": "Une famille qui voyage avec un robot parmi elle : la machine fait partie de la famille.",
        "en": "A family travelling with a robot among them: the machine as part of the family."
      },
      "72": {
        "s": 1,
        "es": "Pétalos de cerezo que caen junto a la ventana, como en una boda.",
        "fr": "Des pétales de cerisier qui tombent près de la fenêtre, comme à un mariage.",
        "en": "Cherry petals falling by the window, like at a wedding."
      },
      "14": {
        "s": 1,
        "es": "Una chica con corona de flores bajo un árbol: aire de novia.",
        "fr": "Une fille avec une couronne de fleurs sous un arbre : un air de mariée.",
        "en": "A girl with a flower crown under a tree: bridal looks."
      },
      "99": {
        "s": 1,
        "es": "Un huevo bajo una campana de vidrio y una cuna: formar una familia.",
        "fr": "Un œuf sous une cloche de verre et un berceau : fonder une famille.",
        "en": "An egg under a glass bell and a cradle: starting a family."
      },
      "48": {
        "s": 1,
        "es": "Flores con forma de oreja y pájaros que les cantan: decirse cosas lindas.",
        "fr": "Des fleurs en forme d’oreille et des oiseaux qui leur chantent : se dire des mots doux.",
        "en": "Ear-shaped flowers with birds singing to them: sweet words whispered."
      },
      "21": {
        "s": 1,
        "es": "Una mujer con el pecho abierto como una ventana: abrir el corazón.",
        "fr": "Une femme dont la poitrine s’ouvre comme une fenêtre : ouvrir son cœur.",
        "en": "A woman whose chest opens like a window: opening one’s heart."
      },
      "54": {
        "s": 1,
        "es": "Una terraza con mesa y flores frente a una cúpula iluminada: una noche romántica.",
        "fr": "Une terrasse avec table et fleurs face à une coupole illuminée : une soirée romantique.",
        "en": "A terrace with a table and flowers facing a lit dome: a romantic night."
      }
    },
    "l09": {
      "8": {
        "s": 3
      },
      "11": {
        "s": 3
      },
      "98": {
        "s": 2
      },
      "21": {
        "s": 2
      },
      "34": {
        "s": 3,
        "es": "Un cine en el fondo del mar con peces de espectadores: la vida de una ciudad bajo el agua.",
        "fr": "Un cinéma au fond de la mer avec des poissons spectateurs : la vie d’une ville sous l’eau.",
        "en": "A cinema on the seabed with fish in the audience: life in a city under the sea."
      },
      "64": {
        "s": 3,
        "es": "Un estadio de fútbol bajo el mar, con ruinas y tribunas llenas de peces: una ciudad submarina.",
        "fr": "Un stade de foot sous la mer, avec ruines et tribunes pleines de poissons : une ville sous-marine.",
        "en": "A football stadium under the sea, with ruins and stands full of fish: an underwater city."
      },
      "85": {
        "s": 2,
        "es": "Una casa con ventanas adentro de una ola: vivir dentro del agua.",
        "fr": "Une maison avec des fenêtres à l’intérieur d’une vague : habiter dans l’eau.",
        "en": "A house with windows built inside a wave: living within the water."
      },
      "54": {
        "s": 2,
        "es": "Una cúpula transparente que frena el agua y protege al perro, como la de Ocean City.",
        "fr": "Une coupole transparente qui arrête l’eau et protège le chien, comme celle d’Ocean City.",
        "en": "A clear dome that keeps the water off the dog, like Ocean City’s dome."
      },
      "102": {
        "s": 2,
        "es": "Una casa con forma de cebolla que flota en el mar, rodeada de botes: vivir en el océano.",
        "fr": "Une maison en forme d’oignon qui flotte sur la mer, entourée de barques : vivre sur l’océan.",
        "en": "An onion-shaped house floating at sea, surrounded by boats: living on the ocean."
      },
      "103": {
        "s": 2,
        "es": "Una naranja con cúpulas de vidrio y casitas adentro: una ciudad bajo cúpulas.",
        "fr": "Une orange avec des coupoles de verre et des maisonnettes dedans : une ville sous cloche.",
        "en": "An orange with glass domes and little houses inside: a city under domes."
      },
      "74": {
        "s": 2,
        "es": "Un mundo entero adentro de una bola de vidrio: vivir encerrado en una burbuja.",
        "fr": "Un monde entier dans une boule de verre : vivre enfermé dans une bulle.",
        "en": "A whole world inside a glass globe: living sealed in a bubble."
      },
      "30": {
        "s": 1,
        "es": "Burbujas de vidrio con ciudades y mundos adentro, como cúpulas habitadas.",
        "fr": "Des bulles de verre avec des villes et des mondes dedans, comme des coupoles habitées.",
        "en": "Glass bubbles with cities and worlds inside, like inhabited domes."
      },
      "106": {
        "s": 1,
        "es": "Mirar afuera por una ventana redonda, como por el vidrio de una cúpula.",
        "fr": "Regarder dehors par un hublot rond, comme à travers la vitre d’une coupole.",
        "en": "Looking out through a round window, like through the glass of a dome."
      },
      "18": {
        "s": 1,
        "es": "El mar que se levanta como una pared de agua: estar debajo de las olas.",
        "fr": "La mer qui se dresse comme un mur d’eau : être sous les vagues.",
        "en": "The sea rising like a wall of water: being beneath the waves."
      },
      "59": {
        "s": 2,
        "es": "Islas con cúpulas de vidrio y gente que mira desde un balcón: una ciudad bajo cúpulas.",
        "fr": "Des îles sous coupoles de verre et des gens au balcon : une ville sous cloche.",
        "en": "Islands under glass domes and people watching from a balcony: a domed city."
      },
      "81": {
        "s": 1,
        "es": "Una cúpula blanca en medio de un lago, rodeada de botes: vivir en el agua.",
        "fr": "Une coupole blanche au milieu d’un lac, entourée de barques : vivre sur l’eau.",
        "en": "A white dome in the middle of a lake, ringed by boats: living on the water."
      },
      "87": {
        "s": 1,
        "es": "Una chica en el muelle frente al mar: lo que hay debajo del agua.",
        "fr": "Une fille sur le ponton face à la mer : ce qui se cache sous l’eau.",
        "en": "A girl on the pier facing the sea: what lies beneath the water."
      },
      "19": {
        "s": 1,
        "es": "Una casa entera adentro de una maceta: una ciudad escondida en otro lugar.",
        "fr": "Une maison entière dans un pot de fleurs : une ville cachée ailleurs.",
        "en": "A whole house inside a flowerpot: a city hidden somewhere else."
      },
      "94": {
        "s": 1,
        "es": "Una casa de vidrio con forma de reloj de arena: vivir detrás de un vidrio.",
        "fr": "Une maison de verre en forme de sablier : vivre derrière une vitre.",
        "en": "A glass house shaped like an hourglass: living behind glass."
      },
      "99": {
        "s": 1,
        "es": "Una campana de vidrio que protege lo que tiene adentro, como una cúpula.",
        "fr": "Une cloche de verre qui protège ce qu’elle contient, comme une coupole.",
        "en": "A glass bell protecting what’s inside, like a dome."
      },
      "4": {
        "s": 1,
        "es": "Un paraguas que guarda agua y tormenta adentro: el agua por encima de la cabeza.",
        "fr": "Un parapluie qui garde eau et orage dedans : l’eau au-dessus de la tête.",
        "en": "An umbrella holding water and a storm inside: water above your head."
      },
      "72": {
        "s": 1,
        "es": "Peces de vidrio que nadan por el aire sobre la ciudad: el mar en la ciudad.",
        "fr": "Des poissons de verre qui nagent dans l’air au-dessus de la ville : la mer en ville.",
        "en": "Glass fish swimming through the air over the city: the sea in the city."
      },
      "12": {
        "s": 1,
        "es": "Rodajas de luz con ciudades y un faro adentro: ciudades encerradas.",
        "fr": "Des tranches lumineuses avec des villes et un phare dedans : des villes enfermées.",
        "en": "Glowing slices with cities and a lighthouse inside: enclosed cities."
      },
      "20": {
        "s": 1,
        "es": "Una ciudad de edificios con ventanas iluminadas de noche: una ciudad de otro mundo.",
        "fr": "Une ville d’immeubles aux fenêtres éclairées la nuit : une ville d’un autre monde.",
        "en": "A city of buildings with lit windows at night: an otherworldly city."
      }
    },
    "i11": {
      "4": {
        "s": 3
      },
      "5": {
        "s": 3
      },
      "17": {
        "s": 2
      },
      "14": {
        "s": 2
      },
      "54": {
        "s": 3,
        "es": "Una burbuja transparente que frena la lluvia sobre el perro: el clima controlado.",
        "fr": "Une bulle transparente qui arrête la pluie au-dessus du chien : la météo maîtrisée.",
        "en": "A clear bubble stops the rain over the dog: weather under control."
      },
      "74": {
        "s": 3,
        "es": "Por la ventana llueve y en la bola de vidrio hay un desierto: dos climas a la vez.",
        "fr": "Il pleut derrière la fenêtre et la boule de verre contient un désert : deux climats à la fois.",
        "en": "Rain on the window and a desert in the glass globe: two climates at once."
      },
      "97": {
        "s": 2,
        "es": "Una nube rosa atada a un dron: el tiempo que se maneja a gusto.",
        "fr": "Un nuage rose attaché à un drone : le temps qu’on mène à sa guise.",
        "en": "A pink cloud tied to a drone: weather steered at will."
      },
      "12": {
        "s": 2,
        "es": "Un pan cortado en rodajas con distintos paisajes y cielos: elegir qué vista mirar.",
        "fr": "Un pain coupé en tranches avec des paysages et des ciels différents : choisir la vue.",
        "en": "A loaf sliced into different landscapes and skies: choosing which view to see."
      },
      "21": {
        "s": 2,
        "es": "Unos postigos que se abren sobre el mar en pleno desierto: una ventana a otro paisaje.",
        "fr": "Des volets qui s’ouvrent sur la mer en plein désert : une fenêtre sur un autre paysage.",
        "en": "Shutters opening onto the sea in the middle of the desert: a window to another landscape."
      },
      "68": {
        "s": 1,
        "es": "Un escritorio frente a una ventana abierta a un paisaje soleado.",
        "fr": "Un bureau face à une fenêtre ouverte sur un paysage ensoleillé.",
        "en": "A desk facing a window open onto a sunny landscape."
      },
      "72": {
        "s": 1,
        "es": "La ventana separa la ciudad llena de humo de un árbol en flor adentro.",
        "fr": "La fenêtre sépare la ville enfumée d’un arbre en fleurs à l’intérieur.",
        "en": "The window separates the smoky city from a blossoming tree indoors."
      },
      "29": {
        "s": 1,
        "es": "Tormenta con rayos y lluvia: el mal tiempo que uno quisiera cambiar.",
        "fr": "Orage, éclairs et pluie : le mauvais temps qu’on voudrait changer.",
        "en": "Storm, lightning and rain: the bad weather you’d like to change."
      },
      "106": {
        "s": 1,
        "es": "Una ventana redonda que muestra un cielo de estrellas y galaxias: otra vista.",
        "fr": "Un hublot qui montre un ciel d’étoiles et de galaxies : une autre vue.",
        "en": "A round window showing a sky of stars and galaxies: another view."
      },
      "80": {
        "s": 1,
        "es": "Una ventana abierta a un atardecer cálido sobre el pueblo.",
        "fr": "Une fenêtre ouverte sur un coucher de soleil chaud au-dessus du village.",
        "en": "A window open onto a warm sunset over the village."
      },
      "25": {
        "s": 2,
        "es": "Un chico con piloto bajo una cascada, con arcoíris y sol: lluvia y buen tiempo juntos.",
        "fr": "Un enfant en ciré sous une cascade, avec arc-en-ciel et soleil : pluie et beau temps ensemble.",
        "en": "A child in a raincoat under a waterfall, with a rainbow and sun: rain and fine weather together."
      },
      "102": {
        "s": 2,
        "es": "Mar con tormenta de un lado y atardecer del otro: el tiempo cambia según dónde mires.",
        "fr": "Mer agitée d’un côté et coucher de soleil de l’autre : le temps change selon où l’on regarde.",
        "en": "A stormy sea on one side and a sunset on the other: the weather changes with where you look."
      },
      "85": {
        "s": 1,
        "es": "Una ola congelada bajo un atardecer cálido: frío y calor en la misma vista.",
        "fr": "Une vague gelée sous un coucher de soleil chaud : froid et chaleur dans la même vue.",
        "en": "A frozen wave under a warm sunset: cold and warmth in one view."
      },
      "108": {
        "s": 1,
        "es": "Montañas nevadas al sol del atardecer: el clima de la montaña.",
        "fr": "Des montagnes enneigées au soleil couchant : le climat de montagne.",
        "en": "Snowy mountains in the setting sun: mountain weather."
      },
      "15": {
        "s": 1,
        "es": "Una calle mojada de lluvia, de noche: el tiempo de afuera.",
        "fr": "Une rue mouillée de pluie, la nuit : le temps qu’il fait dehors.",
        "en": "A rain-soaked street at night: the weather outside."
      },
      "18": {
        "s": 1,
        "es": "Una playa soleada que se dobla como una hoja: cambiar de paisaje.",
        "fr": "Une plage ensoleillée qui se plie comme une feuille : changer de paysage.",
        "en": "A sunny beach folding like a sheet of paper: switching landscapes."
      },
      "19": {
        "s": 1,
        "es": "Una ventana con un petirrojo en una rama: mirar el tiempo desde adentro.",
        "fr": "Une fenêtre avec un rouge-gorge sur une branche : regarder le temps de l’intérieur.",
        "en": "A window with a robin on a branch: watching the weather from indoors."
      },
      "31": {
        "s": 1,
        "es": "Un auto que corre por un paisaje de hielo bajo una luna enorme: otro clima.",
        "fr": "Une voiture qui file dans un paysage de glace sous une lune énorme : un autre climat.",
        "en": "A car racing through an icy landscape under a huge moon: another climate."
      },
      "66": {
        "s": 1,
        "es": "Un campo de girasoles con sol del atardecer: el tiempo lindo.",
        "fr": "Un champ de tournesols au soleil couchant : le beau temps.",
        "en": "A sunflower field in the evening sun: lovely weather."
      },
      "94": {
        "s": 1,
        "es": "Una gota de agua cae sobre un brote: la lluvia justa.",
        "fr": "Une goutte d’eau tombe sur une pousse : juste la pluie qu’il faut.",
        "en": "A drop of water falls on a sprout: just the right rain."
      }
    },
    "p30": {
      "68": {
        "s": 3
      },
      "54": {
        "s": 2
      },
      "40": {
        "s": 1
      },
      "97": {
        "s": 2
      },
      "1": {
        "s": 2,
        "es": "Un perro con casco al lado del astronauta: el compañero de paseo, incluso en la Luna.",
        "fr": "Un chien casqué à côté de l’astronaute : le compagnon de balade, même sur la Lune.",
        "en": "A helmeted dog beside the astronaut: a walking companion, even on the Moon."
      },
      "36": {
        "s": 2,
        "es": "Un dron lanza pelotas de tenis por todos lados, como para que corran los perros.",
        "fr": "Un drone lance des balles de tennis partout, comme pour faire courir les chiens.",
        "en": "A drone launches tennis balls everywhere, as if for dogs to chase."
      },
      "107": {
        "s": 2,
        "es": "Un dron tira de una cinta roja larga, como de una correa.",
        "fr": "Un drone tire un long ruban rouge, comme une laisse.",
        "en": "A drone pulls a long red ribbon, like a leash."
      },
      "30": {
        "s": 1,
        "es": "Un perro viaja con la familia dentro de la cápsula: siempre con su paseadora.",
        "fr": "Un chien voyage avec la famille dans la capsule : toujours avec sa promeneuse.",
        "en": "A dog travels with the family in the capsule: always out with its walker."
      },
      "52": {
        "s": 1,
        "es": "Un ciervo con arnés y bolso de cuero: un animal que sale a hacer su recorrido.",
        "fr": "Un cerf avec harnais et sacoche de cuir : un animal qui fait sa tournée.",
        "en": "A deer with a harness and leather bag: an animal out on its round."
      },
      "84": {
        "s": 1,
        "es": "Un ornitorrinco con arnés y antiparras: un animal bien equipado para salir.",
        "fr": "Un ornithorynque avec harnais et lunettes : un animal bien équipé pour sortir.",
        "en": "A platypus in a harness and goggles: an animal well kitted out for an outing."
      },
      "106": {
        "s": 1,
        "es": "Animalitos dormidos en burbujas que alguien mira: cuidar mascotas.",
        "fr": "Des petits animaux endormis dans des bulles qu’on observe : veiller sur des animaux.",
        "en": "Little creatures asleep in bubbles being watched: looking after pets."
      },
      "15": {
        "s": 1,
        "es": "Un señor que pasea de noche por la vereda mojada: la vuelta del paseo.",
        "fr": "Un monsieur qui se promène la nuit sur le trottoir mouillé : la balade du soir.",
        "en": "A gentleman strolling at night on the wet pavement: the evening walk."
      },
      "63": {
        "s": 1,
        "es": "Un robotito con bufanda sigue al viajero, como una mascota fiel.",
        "fr": "Un petit robot à écharpe suit le voyageur, comme un animal fidèle.",
        "en": "A little robot in a scarf follows the traveller, like a loyal pet."
      },
      "17": {
        "s": 1,
        "es": "Un jardinero con dos gatos a sus pies: alguien que vive entre animales.",
        "fr": "Un jardinier avec deux chats à ses pieds : quelqu’un qui vit entouré d’animaux.",
        "en": "A gardener with two cats at his feet: someone surrounded by animals."
      },
      "100": {
        "s": 1,
        "es": "Un chico que camina llevando una manguera larga, como una correa.",
        "fr": "Un garçon qui marche en tenant un long tuyau, comme une laisse.",
        "en": "A boy walking with a long hose, like a leash."
      },
      "9": {
        "s": 1,
        "es": "Una chica que avanza tirada por un hilo largo, como llevada por una correa.",
        "fr": "Une fille qui avance tirée par un long fil, comme tenue en laisse.",
        "en": "A girl moving along pulled by a long thread, as if on a leash."
      },
      "70": {
        "s": 1,
        "es": "Una lana larguísima que sale de un tejido, como una correa sin fin.",
        "fr": "Une laine interminable qui sort d’un tricot, comme une laisse sans fin.",
        "en": "An endless strand of yarn coming off the knitting, like a never-ending leash."
      },
      "11": {
        "s": 1,
        "es": "Un gato dormido en su almohadón: cuidar a las mascotas de otros.",
        "fr": "Un chat endormi sur son coussin : s’occuper des animaux des autres.",
        "en": "A cat asleep on its cushion: caring for other people’s pets."
      },
      "85": {
        "s": 1,
        "es": "Un oso polar dormido después de un largo paseo.",
        "fr": "Un ours polaire endormi après une longue balade.",
        "en": "A polar bear asleep after a long walk."
      },
      "66": {
        "s": 1,
        "es": "Un gato que duerme tranquilo: una mascota bien cuidada.",
        "fr": "Un chat qui dort tranquillement : un animal bien soigné.",
        "en": "A cat sleeping peacefully: a well-cared-for pet."
      },
      "74": {
        "s": 1,
        "es": "Una criatura peluda en una jaula, esperando que la saquen a pasear.",
        "fr": "Une créature poilue dans une cage, qui attend qu’on la sorte.",
        "en": "A furry creature in a cage, waiting to be taken out."
      },
      "59": {
        "s": 1,
        "es": "Una manada de mamuts que camina en grupo: muchos animales juntos.",
        "fr": "Un troupeau de mammouths qui marche en groupe : beaucoup d’animaux ensemble.",
        "en": "A herd of mammoths walking together: lots of animals at once."
      },
      "112": {
        "s": 1,
        "es": "Un robotito que sigue a la abuela por el negocio, como un perro fiel.",
        "fr": "Un petit robot qui suit la grand-mère dans le magasin, comme un chien fidèle.",
        "en": "A little robot following grandma around the shop, like a loyal dog."
      },
      "61": {
        "s": 1,
        "es": "Camellos que vuelan en el remolino: animales que se escapan del paseo.",
        "fr": "Des chameaux qui volent dans le tourbillon : des animaux qui s’échappent de la balade.",
        "en": "Camels flying in the whirlwind: animals escaping from their walk."
      }
    },
    "p15": {
      "75": {
        "s": 3
      },
      "22": {
        "s": 2
      },
      "106": {
        "s": 2
      },
      "69": {
        "s": 2
      },
      "100": {
        "s": 3,
        "es": "Un chico con una aspiradora en la espalda junta tornillos y resortes en el cielo: limpiar allá arriba.",
        "fr": "Un garçon avec un aspirateur sur le dos ramasse vis et ressorts dans le ciel : nettoyer là-haut.",
        "en": "A boy with a vacuum on his back sucks up screws and springs in the sky: cleaning up there."
      },
      "18": {
        "s": 3,
        "es": "Un robot junta basura en la playa: recolectar desechos.",
        "fr": "Un robot ramasse des déchets sur la plage : collecter les ordures.",
        "en": "A robot picks up litter on the beach: collecting waste."
      },
      "1": {
        "s": 2,
        "es": "Un astronauta en la Luna con la Tierra de fondo: trabajar en el espacio.",
        "fr": "Un astronaute sur la Lune avec la Terre au fond : travailler dans l’espace.",
        "en": "An astronaut on the Moon with Earth behind: working in space."
      },
      "107": {
        "s": 2,
        "es": "Una caja de herramientas que flota por el cielo, como un objeto perdido en órbita.",
        "fr": "Une caisse à outils qui flotte dans le ciel, comme un objet perdu en orbite.",
        "en": "A toolbox floating through the sky, like an object lost in orbit."
      },
      "111": {
        "s": 1,
        "es": "Un enchufe gigante tirado en el pasto: chatarra que alguien tiene que juntar.",
        "fr": "Une prise géante abandonnée dans l’herbe : de la ferraille qu’il faut ramasser.",
        "en": "A giant plug lying in the grass: scrap someone has to collect."
      },
      "74": {
        "s": 1,
        "es": "Un cohete de juguete: el viaje al espacio.",
        "fr": "Une fusée jouet : le voyage dans l’espace.",
        "en": "A toy rocket: the trip into space."
      },
      "9": {
        "s": 1,
        "es": "Un dedal y un carretel que vuelan por el aire: objetos sueltos flotando.",
        "fr": "Un dé à coudre et une bobine qui volent : des objets qui flottent.",
        "en": "A thimble and a spool flying through the air: loose objects floating."
      },
      "40": {
        "s": 1,
        "es": "Rocas que se desprenden y caen de una montaña voladora: escombros en el cielo.",
        "fr": "Des rochers qui se détachent d’une montagne volante : des débris dans le ciel.",
        "en": "Rocks breaking off a flying mountain: debris in the sky."
      },
      "57": {
        "s": 1,
        "es": "Dos abuelos arreglan una máquina vieja y oxidada: darle una segunda vida a la chatarra.",
        "fr": "Deux grands-parents réparent une vieille machine rouillée : une seconde vie pour la ferraille.",
        "en": "Two old people fix a rusty old machine: a second life for scrap."
      },
      "112": {
        "s": 1,
        "es": "Un carrito lleno hasta el tope: juntar y cargar un montón de cosas.",
        "fr": "Un chariot rempli à ras bord : ramasser et charger plein de choses.",
        "en": "A cart filled to the brim: gathering and hauling loads of things."
      },
      "61": {
        "s": 2,
        "es": "Un remolino de cosas que vuelan y giran: basura dando vueltas, como en órbita.",
        "fr": "Un tourbillon d’objets qui volent et tournent : des déchets qui tournent comme en orbite.",
        "en": "A whirlwind of flying, spinning things: junk circling as if in orbit."
      },
      "80": {
        "s": 1,
        "es": "Luces atrapadas en un frasco: juntar cosas que flotan.",
        "fr": "Des lumières enfermées dans un bocal : ramasser ce qui flotte.",
        "en": "Lights caught in a jar: collecting things that float."
      },
      "31": {
        "s": 1,
        "es": "Una luna enorme y un planeta en el cielo: el espacio cerca de casa.",
        "fr": "Une lune énorme et une planète dans le ciel : l’espace tout proche.",
        "en": "A huge moon and a planet in the sky: space close to home."
      },
      "63": {
        "s": 1,
        "es": "Un viajero con antiparras y naves que pasan: trabajar entre vehículos del cielo.",
        "fr": "Un voyageur à lunettes et des vaisseaux qui passent : travailler parmi les engins du ciel.",
        "en": "A traveller in goggles with ships passing: working among sky vehicles."
      },
      "94": {
        "s": 1,
        "es": "Una antena parabólica apuntando al cielo: mirar lo que hay en órbita.",
        "fr": "Une antenne parabolique tournée vers le ciel : surveiller ce qui est en orbite.",
        "en": "A satellite dish pointing at the sky: watching what’s in orbit."
      },
      "46": {
        "s": 1,
        "es": "Una cinta que clasifica cajas en una fábrica: ordenar lo que se junta.",
        "fr": "Un tapis roulant qui trie des cartons dans une usine : trier ce qu’on ramasse.",
        "en": "A conveyor sorting boxes in a factory: sorting what gets collected."
      },
      "27": {
        "s": 1,
        "es": "Tazas y dulces que flotan por el aire: objetos sueltos en el cielo.",
        "fr": "Des tasses et des douceurs qui flottent dans l’air : des objets perdus dans le ciel.",
        "en": "Cups and sweets floating in the air: loose objects in the sky."
      },
      "36": {
        "s": 1,
        "es": "Pelotas que vuelan por el aire alrededor de un dron: cosas que hay que atrapar.",
        "fr": "Des balles qui volent autour d’un drone : des choses à attraper.",
        "en": "Balls flying around a drone: things to catch."
      },
      "102": {
        "s": 1,
        "es": "Botes cargados atados a una casa: juntar y arrastrar cargas.",
        "fr": "Des barques chargées attachées à une maison : rassembler et remorquer des charges.",
        "en": "Loaded boats tied to a house: gathering and towing loads."
      },
      "30": {
        "s": 1,
        "es": "Una cápsula que flota entre burbujas: un vehículo en el espacio.",
        "fr": "Une capsule qui flotte entre des bulles : un engin dans l’espace.",
        "en": "A capsule floating among bubbles: a vehicle in space."
      }
    },
    "p26": {
      "59": {
        "s": 3
      },
      "99": {
        "s": 2
      },
      "53": {
        "s": 3
      },
      "30": {
        "s": 2
      },
      "84": {
        "s": 2,
        "es": "Turistas en jeep miran con binoculares: un safari, como en una reserva de animales.",
        "fr": "Des touristes en jeep observent aux jumelles : un safari, comme dans une réserve.",
        "en": "Tourists in a jeep look through binoculars: a safari, like in a wildlife reserve."
      },
      "106": {
        "s": 2,
        "es": "Criaturas fantásticas dormidas en burbujas: animales raros que alguien cuida.",
        "fr": "Des créatures fantastiques endormies dans des bulles : des animaux rares qu’on soigne.",
        "en": "Fantastic creatures asleep in bubbles: rare animals someone looks after."
      },
      "40": {
        "s": 2,
        "es": "Un chico sujeta con una soga algo gigante: domar a un animal enorme.",
        "fr": "Un garçon retient avec une corde quelque chose de gigantesque : dompter une bête énorme.",
        "en": "A boy holds something gigantic with a rope: taming an enormous beast."
      },
      "74": {
        "s": 2,
        "es": "Una criatura peluda encerrada en una jaula: un animal raro bajo cuidado.",
        "fr": "Une créature poilue dans une cage : un animal rare sous surveillance.",
        "en": "A furry creature in a cage: a rare animal in someone’s care."
      },
      "47": {
        "s": 1,
        "es": "Un esqueleto entero que se mueve con energía: un fósil que vuelve a la vida.",
        "fr": "Un squelette entier qui bouge grâce à l’énergie : un fossile qui reprend vie.",
        "en": "A whole skeleton moving on energy: a fossil coming back to life."
      },
      "42": {
        "s": 1,
        "es": "Esqueletos que caminan por el desierto, como fósiles que se levantan.",
        "fr": "Des squelettes qui marchent dans le désert, comme des fossiles qui se relèvent.",
        "en": "Skeletons walking through the desert, like fossils getting up."
      },
      "94": {
        "s": 1,
        "es": "Un brote dentro de un reloj de arena: hacer volver lo que ya pasó.",
        "fr": "Une pousse dans un sablier : faire revenir ce qui a disparu.",
        "en": "A sprout inside an hourglass: bringing back what is gone."
      },
      "17": {
        "s": 1,
        "es": "Un jardinero con sus gatos: alguien que cuida seres vivos.",
        "fr": "Un jardinier avec ses chats : quelqu’un qui prend soin du vivant.",
        "en": "A gardener with his cats: someone who cares for living things."
      },
      "85": {
        "s": 1,
        "es": "Un oso polar duerme junto a la casa: convivir con un animal grande.",
        "fr": "Un ours polaire dort près de la maison : vivre à côté d’un gros animal.",
        "en": "A polar bear sleeps by the house: living alongside a big animal."
      },
      "97": {
        "s": 1,
        "es": "Una oveja rosa atada a un dron: un animal que se lleva a pasear.",
        "fr": "Un mouton rose attaché à un drone : un animal qu’on promène.",
        "en": "A pink sheep tied to a drone: an animal being led around."
      },
      "22": {
        "s": 2,
        "es": "Un asteroide en llamas cae sobre la Tierra: lo que se llevó a los dinosaurios.",
        "fr": "Un astéroïde en feu tombe sur la Terre : ce qui a emporté les dinosaures.",
        "en": "A flaming asteroid falls toward Earth: what wiped out the dinosaurs."
      },
      "52": {
        "s": 1,
        "es": "Un ciervo con su bolso en un bosque: vivir entre animales.",
        "fr": "Un cerf avec sa sacoche dans une forêt : vivre parmi les animaux.",
        "en": "A deer with its satchel in a forest: living among animals."
      },
      "1": {
        "s": 1,
        "es": "Un perro con casco al lado de su dueño: cuidar a un animal en un lugar extraño.",
        "fr": "Un chien casqué près de son maître : prendre soin d’un animal dans un lieu étrange.",
        "en": "A helmeted dog beside its owner: caring for an animal somewhere strange."
      },
      "112": {
        "s": 1,
        "es": "Frascos llenos de insectos de colores: una colección de bichos.",
        "fr": "Des bocaux pleins d’insectes colorés : une collection de bestioles.",
        "en": "Jars full of colourful insects: a collection of critters."
      },
      "61": {
        "s": 1,
        "es": "Camellos que vuelan en un remolino: animales difíciles de controlar.",
        "fr": "Des chameaux qui volent dans un tourbillon : des animaux difficiles à maîtriser.",
        "en": "Camels flying in a whirlwind: animals hard to control."
      },
      "25": {
        "s": 1,
        "es": "Una cascada en medio de la selva: un paisaje salvaje.",
        "fr": "Une cascade au milieu de la jungle : un paysage sauvage.",
        "en": "A waterfall in the middle of the jungle: wild scenery."
      },
      "48": {
        "s": 1,
        "es": "Pájaros entre flores gigantes: un jardín lleno de animales.",
        "fr": "Des oiseaux parmi des fleurs géantes : un jardin plein d’animaux.",
        "en": "Birds among giant flowers: a garden full of animals."
      },
      "57": {
        "s": 1,
        "es": "Dos abuelos cuidan algo enorme subidos a una escalera.",
        "fr": "Deux grands-parents s’occupent de quelque chose d’énorme, perchés sur une échelle.",
        "en": "Two old people tend to something enormous from a ladder."
      },
      "20": {
        "s": 1,
        "es": "Un jardinero con farol recorre de noche entre gigantes dormidos.",
        "fr": "Un jardinier avec une lanterne passe la nuit entre des géants endormis.",
        "en": "A gardener with a lantern walks at night among sleeping giants."
      },
      "64": {
        "s": 1,
        "es": "Un pulpo y peces en un estadio: animales que se cuidan en grupo.",
        "fr": "Un poulpe et des poissons dans un stade : des animaux réunis.",
        "en": "An octopus and fish in a stadium: animals gathered together."
      }
    },
    "s16": {
      "107": {
        "s": 2
      },
      "36": {
        "s": 3
      },
      "52": {
        "s": 2
      },
      "97": {
        "s": 3
      },
      "81": {
        "s": 3,
        "es": "Drones que llevan canastas con flores por el aire: entregas que llegan volando.",
        "fr": "Des drones qui portent des paniers de fleurs : des livraisons qui arrivent par les airs.",
        "en": "Drones carrying baskets of flowers through the air: deliveries arriving by air."
      },
      "102": {
        "s": 2,
        "es": "Un dron que lleva una canasta sobre el mar: un envío por el aire.",
        "fr": "Un drone qui transporte un panier au-dessus de la mer : un envoi par les airs.",
        "en": "A drone carrying a basket over the sea: a shipment by air."
      },
      "17": {
        "s": 2,
        "es": "Un dron le trae agua a una maceta: un servicio que llega del cielo.",
        "fr": "Un drone apporte de l’eau à un pot de fleurs : un service venu du ciel.",
        "en": "A drone brings water to a flowerpot: a service from the sky."
      },
      "69": {
        "s": 2,
        "es": "Una carretilla con cohetes que vuela cargada de ladrillos: llevar mercadería por el aire.",
        "fr": "Une brouette à fusées qui vole chargée de briques : transporter des marchandises par les airs.",
        "en": "A rocket wheelbarrow flying with a load of bricks: carrying goods by air."
      },
      "25": {
        "s": 2,
        "es": "Abejas robot que traen hamburguesas en burbujas: la comida que llega volando.",
        "fr": "Des abeilles robots qui apportent des hamburgers dans des bulles : le repas qui arrive en volant.",
        "en": "Robot bees bringing burgers in bubbles: food that arrives flying."
      },
      "33": {
        "s": 2,
        "es": "Platos que vuelan solos hacia las mesas: el pedido que llega por el aire.",
        "fr": "Des plats qui volent tout seuls vers les tables : la commande arrive par les airs.",
        "en": "Dishes flying by themselves to the tables: the order arriving by air."
      },
      "46": {
        "s": 2,
        "es": "Cajas que se abren y de las que salen cosas volando: un paquete en camino.",
        "fr": "Des cartons qui s’ouvrent et d’où s’envolent des choses : un colis en route.",
        "en": "Boxes opening with things flying out: a parcel on its way."
      },
      "80": {
        "s": 1,
        "es": "Un helicóptero chiquito aterriza sobre un frasco: algo que llega por el aire a la mesa.",
        "fr": "Un petit hélicoptère se pose sur un bocal : quelque chose qui arrive par les airs sur la table.",
        "en": "A tiny helicopter lands on a jar: something arriving by air on the table."
      },
      "112": {
        "s": 1,
        "es": "Un robot escanea las compras de la abuela: comprar sin salir del futuro.",
        "fr": "Un robot scanne les achats de la grand-mère : faire ses courses dans le futur.",
        "en": "A robot scans grandma’s shopping: buying things in the future."
      },
      "98": {
        "s": 1,
        "es": "Drones que pasan por el pasillo de una oficina: volar por todos lados.",
        "fr": "Des drones qui passent dans le couloir d’un bureau : ils volent partout.",
        "en": "Drones flying down an office corridor: they go everywhere."
      },
      "27": {
        "s": 2,
        "es": "Hadas con alas que llevan bandejas de dulces por el aire: un envío volando.",
        "fr": "Des fées ailées qui portent des plateaux de douceurs : une livraison en vol.",
        "en": "Winged fairies carrying trays of sweets through the air: an airborne delivery."
      },
      "68": {
        "s": 1,
        "es": "Drones que pasan frente a una ventana abierta: algo puede llegar por ahí.",
        "fr": "Des drones qui passent devant une fenêtre ouverte : quelque chose peut arriver par là.",
        "en": "Drones passing an open window: something could arrive that way."
      },
      "72": {
        "s": 1,
        "es": "Un dron que vuela sobre la ciudad: el reparto del futuro.",
        "fr": "Un drone qui survole la ville : la livraison du futur.",
        "en": "A drone flying over the city: tomorrow’s delivery."
      },
      "84": {
        "s": 1,
        "es": "Drones en el cielo sobre el desierto: llegan hasta los lugares más lejanos.",
        "fr": "Des drones dans le ciel au-dessus du désert : ils vont jusqu’aux endroits les plus lointains.",
        "en": "Drones in the sky over the desert: reaching the most remote places."
      },
      "94": {
        "s": 1,
        "es": "Drones con luces que vuelan de noche cerca de una casa.",
        "fr": "Des drones lumineux qui volent la nuit près d’une maison.",
        "en": "Drones with lights flying at night near a house."
      },
      "99": {
        "s": 1,
        "es": "Drones que vuelan adentro de una casa, como si trajeran algo.",
        "fr": "Des drones qui volent dans une maison, comme s’ils apportaient quelque chose.",
        "en": "Drones flying inside a house, as if bringing something."
      },
      "100": {
        "s": 1,
        "es": "Drones alrededor de un chico que junta tornillos en el cielo.",
        "fr": "Des drones autour d’un garçon qui ramasse des vis dans le ciel.",
        "en": "Drones around a boy collecting screws in the sky."
      },
      "101": {
        "s": 1,
        "es": "Drones sobre una mesa con globos: algo que llega para la fiesta.",
        "fr": "Des drones au-dessus d’une table avec des ballons : quelque chose arrive pour la fête.",
        "en": "Drones above a table with balloons: something arriving for the party."
      },
      "103": {
        "s": 1,
        "es": "Drones que vuelan sobre una mesa con fruta: la compra que llega a casa.",
        "fr": "Des drones qui volent au-dessus d’une table avec des fruits : les courses arrivent à la maison.",
        "en": "Drones flying over a table with fruit: groceries arriving home."
      },
      "61": {
        "s": 1,
        "es": "Alfombras y bultos que vuelan por el aire: cargas que viajan solas.",
        "fr": "Des tapis et des ballots qui volent dans les airs : des colis qui voyagent seuls.",
        "en": "Carpets and bundles flying through the air: loads travelling on their own."
      }
    },
    "s22": {
      "34": {
        "s": 3
      },
      "11": {
        "s": 3
      },
      "64": {
        "s": 3
      },
      "98": {
        "s": 2
      },
      "8": {
        "s": 2,
        "es": "Un pez con una ciudad iluminada adentro y un submarino: pasear bajo el mar.",
        "fr": "Un poisson avec une ville illuminée dedans et un sous-marin : se promener sous la mer.",
        "en": "A fish with a lit-up city inside and a submarine: an outing under the sea."
      },
      "21": {
        "s": 2,
        "es": "Una ventana con postigos que muestra una ballena y un submarino: ver el fondo del mar.",
        "fr": "Une fenêtre à volets qui montre une baleine et un sous-marin : voir le fond de la mer.",
        "en": "A shuttered window showing a whale and a submarine: seeing the ocean floor."
      },
      "18": {
        "s": 2,
        "es": "Una playa con sombrillas, bañistas y castillos de arena: las vacaciones en el mar.",
        "fr": "Une plage avec parasols, baigneurs et châteaux de sable : les vacances à la mer.",
        "en": "A beach with umbrellas, swimmers and sandcastles: a seaside holiday."
      },
      "26": {
        "s": 2,
        "es": "Un hotel con pileta, cascadas y montaña rusa: vacaciones de lujo.",
        "fr": "Un hôtel avec piscine, cascades et montagnes russes : des vacances de luxe.",
        "en": "A hotel with a pool, waterfalls and a roller coaster: a luxury holiday."
      },
      "30": {
        "s": 2,
        "es": "Una familia que viaja adentro de una burbuja de vidrio: turismo con vista.",
        "fr": "Une famille qui voyage dans une bulle de verre : du tourisme avec vue.",
        "en": "A family travelling inside a glass bubble: sightseeing with a view."
      },
      "85": {
        "s": 1,
        "es": "Una casa con ventanas metida en una ola: dormir dentro del agua.",
        "fr": "Une maison à fenêtres logée dans une vague : dormir dans l’eau.",
        "en": "A house with windows set inside a wave: sleeping in the water."
      },
      "87": {
        "s": 1,
        "es": "Una chica sentada en el muelle frente al mar al atardecer: tiempo libre junto al agua.",
        "fr": "Une fille assise sur le ponton face à la mer au coucher du soleil : du temps libre au bord de l’eau.",
        "en": "A girl sitting on the pier facing the sea at sunset: free time by the water."
      },
      "106": {
        "s": 1,
        "es": "Mirar por una ventana redonda criaturas que flotan en burbujas, como peces afuera.",
        "fr": "Regarder par un hublot des créatures qui flottent dans des bulles, comme des poissons dehors.",
        "en": "Watching creatures float in bubbles through a porthole, like fish outside."
      },
      "1": {
        "s": 1,
        "es": "Un astronauta descansa con las manos en la nuca: unas vacaciones lejos de todo.",
        "fr": "Un astronaute se repose les mains derrière la tête : des vacances loin de tout.",
        "en": "An astronaut lounges with hands behind his head: a holiday far from everything."
      },
      "54": {
        "s": 1,
        "es": "Una cúpula transparente que protege del agua, como la pared de vidrio del hotel.",
        "fr": "Une coupole transparente qui protège de l’eau, comme la paroi vitrée de l’hôtel.",
        "en": "A clear dome that keeps the water out, like the hotel’s glass wall."
      },
      "25": {
        "s": 2,
        "es": "Un chico feliz bajo una cascada: chapotear y divertirse en el agua.",
        "fr": "Un enfant ravi sous une cascade : barboter et s’amuser dans l’eau.",
        "en": "A happy child under a waterfall: splashing and having fun in the water."
      },
      "102": {
        "s": 1,
        "es": "Una casa que flota en el mar con botes atados: alojarse sobre el agua.",
        "fr": "Une maison qui flotte sur la mer avec des barques amarrées : loger sur l’eau.",
        "en": "A house floating at sea with boats moored: staying on the water."
      },
      "81": {
        "s": 1,
        "es": "Botes que pasean por un lago al atardecer: tiempo libre en el agua.",
        "fr": "Des barques qui se promènent sur un lac au coucher du soleil : du loisir sur l’eau.",
        "en": "Boats drifting on a lake at sunset: leisure on the water."
      },
      "74": {
        "s": 1,
        "es": "Una carpa adentro de una bola de vidrio: unas vacaciones en un mundo encerrado.",
        "fr": "Une tente dans une boule de verre : des vacances dans un monde clos.",
        "en": "A tent inside a glass globe: a holiday in an enclosed world."
      },
      "59": {
        "s": 1,
        "es": "Turistas que miran desde un balcón: una excursión con vista.",
        "fr": "Des touristes qui regardent depuis un balcon : une excursion avec vue.",
        "en": "Tourists looking out from a balcony: a sightseeing outing."
      },
      "63": {
        "s": 1,
        "es": "Un viajero que descansa con una taza mirando el paisaje: vacaciones.",
        "fr": "Un voyageur qui se repose avec une tasse face au paysage : les vacances.",
        "en": "A traveller resting with a cup, taking in the view: holidays."
      },
      "31": {
        "s": 1,
        "es": "Una chica que pasea en auto descapotable saludando: viaje de placer.",
        "fr": "Une fille en décapotable qui salue : un voyage d’agrément.",
        "en": "A woman waving from a convertible: a pleasure trip."
      },
      "5": {
        "s": 1,
        "es": "Una heladera que se abre al mar al atardecer: escaparse a la costa.",
        "fr": "Un frigo qui s’ouvre sur la mer au coucher du soleil : s’évader au bord de mer.",
        "en": "A fridge opening onto the sea at sunset: escaping to the coast."
      },
      "76": {
        "s": 1,
        "es": "Una cena para dos frente al mar: unas vacaciones especiales.",
        "fr": "Un dîner pour deux face à la mer : des vacances spéciales.",
        "en": "Dinner for two facing the sea: a special getaway."
      },
      "72": {
        "s": 1,
        "es": "Peces de vidrio que nadan por el aire: ver peces de cerca.",
        "fr": "Des poissons de verre qui nagent dans l’air : voir des poissons de près.",
        "en": "Glass fish swimming through the air: seeing fish up close."
      }
    },
    "s32": {
      "108": {
        "s": 3
      },
      "9": {
        "s": 2
      },
      "40": {
        "s": 1
      },
      "12": {
        "s": 1
      },
      "63": {
        "s": 3,
        "es": "Un viajero sentado en lo alto con una taza en la mano, mirando el paisaje: una pausa con vista.",
        "fr": "Un voyageur assis tout en haut, une tasse à la main, face au paysage : une pause avec vue.",
        "en": "A traveller sitting up high, cup in hand, gazing at the landscape: a break with a view."
      },
      "1": {
        "s": 2,
        "es": "Un astronauta descansa con su taza mirando la Tierra desde lo alto.",
        "fr": "Un astronaute se repose avec sa tasse en regardant la Terre de là-haut.",
        "en": "An astronaut relaxes with his mug, looking at Earth from up high."
      },
      "14": {
        "s": 2,
        "es": "Amigos sentados bajo un árbol con un termo y una taza: compartir algo caliente al aire libre.",
        "fr": "Des amis assis sous un arbre avec un thermos et une tasse : partager une boisson chaude dehors.",
        "en": "Friends sitting under a tree with a thermos and a mug: sharing a hot drink outdoors."
      },
      "97": {
        "s": 2,
        "es": "Un árbol en la cima de una loma mirando el pueblo al atardecer: un lugar para sentarse a mirar.",
        "fr": "Un arbre au sommet d’une colline face au village au coucher du soleil : un endroit pour s’asseoir et regarder.",
        "en": "A tree on a hilltop overlooking the village at sunset: a spot to sit and look."
      },
      "70": {
        "s": 2,
        "es": "Una muralla tejida que serpentea entre montañas y nubes: un paisaje de montaña.",
        "fr": "Une muraille tricotée qui serpente entre montagnes et nuages : un paysage de montagne.",
        "en": "A knitted wall winding through mountains and clouds: a mountain landscape."
      },
      "27": {
        "s": 2,
        "es": "Una tetera que sirve tazas en el aire: una infusión para compartir.",
        "fr": "Une théière qui sert des tasses dans les airs : une infusion à partager.",
        "en": "A teapot pouring cups in mid-air: a hot drink to share."
      },
      "11": {
        "s": 1,
        "es": "Un señor toma algo caliente en su sillón: la pausa tranquila.",
        "fr": "Un monsieur boit quelque chose de chaud dans son fauteuil : la pause tranquille.",
        "en": "A man sips a hot drink in his armchair: a quiet break."
      },
      "98": {
        "s": 1,
        "es": "Un hombre con una taza humeante mira algo con calma.",
        "fr": "Un homme avec une tasse fumante contemple quelque chose avec calme.",
        "en": "A man with a steaming mug calmly gazes at something."
      },
      "87": {
        "s": 1,
        "es": "Una chica sentada en el muelle frente al atardecer: mirar el paisaje sin apuro.",
        "fr": "Une fille assise sur le ponton face au coucher du soleil : contempler sans se presser.",
        "en": "A girl sitting on the pier at sunset: taking in the view unhurried."
      },
      "85": {
        "s": 1,
        "es": "Montañas nevadas al fondo del atardecer: la vista de la montaña.",
        "fr": "Des montagnes enneigées au fond du coucher de soleil : la vue sur la montagne.",
        "en": "Snowy mountains behind the sunset: the mountain view."
      },
      "84": {
        "s": 1,
        "es": "Gente con binoculares mira el paisaje rojo y una montaña al fondo.",
        "fr": "Des gens aux jumelles contemplent le paysage rouge et une montagne au loin.",
        "en": "People with binoculars take in the red landscape and a mountain in the distance."
      },
      "54": {
        "s": 1,
        "es": "Una terraza con jarra y mesa frente a la ciudad: algo para tomar con vista.",
        "fr": "Une terrasse avec carafe et table face à la ville : boire quelque chose avec vue.",
        "en": "A terrace with a jug and table facing the city: a drink with a view."
      },
      "76": {
        "s": 1,
        "es": "Dos copas en una mesa con vista al pueblo: compartir algo al aire libre.",
        "fr": "Deux verres sur une table avec vue sur le village : partager un verre dehors.",
        "en": "Two glasses at a table overlooking the village: sharing a drink outdoors."
      },
      "59": {
        "s": 1,
        "es": "Gente en un balcón que mira montañas nevadas e islas: la vista desde arriba.",
        "fr": "Des gens sur un balcon face à des montagnes enneigées : la vue d’en haut.",
        "en": "People on a balcony looking at snowy mountains and islands: the view from above."
      },
      "107": {
        "s": 1,
        "es": "Un valle con montañas y un pueblo en la colina: un paisaje para mirar.",
        "fr": "Une vallée avec des montagnes et un village sur la colline : un paysage à contempler.",
        "en": "A valley with mountains and a hilltop village: a landscape to admire."
      },
      "26": {
        "s": 1,
        "es": "Montañas y pueblos al fondo vistos desde lo alto: un paseo con vista.",
        "fr": "Des montagnes et des villages vus d’en haut : une balade avec vue.",
        "en": "Mountains and villages seen from high up: an outing with a view."
      },
      "66": {
        "s": 1,
        "es": "Colinas al atardecer con un campo de girasoles: la calma del campo.",
        "fr": "Des collines au coucher du soleil et un champ de tournesols : le calme de la campagne.",
        "en": "Hills at sunset with a sunflower field: countryside calm."
      },
      "31": {
        "s": 1,
        "es": "Montañas de hielo bajo una luna gigante: un paisaje de altura.",
        "fr": "Des montagnes de glace sous une lune géante : un paysage d’altitude.",
        "en": "Ice mountains under a giant moon: a high-altitude landscape."
      },
      "5": {
        "s": 1,
        "es": "Un atardecer sobre el mar: el momento de sentarse a mirar.",
        "fr": "Un coucher de soleil sur la mer : le moment de s’asseoir et regarder.",
        "en": "A sunset over the sea: time to sit and watch."
      },
      "101": {
        "s": 1,
        "es": "Una mesita en una terraza con vista al atardecer: una pausa compartida.",
        "fr": "Une petite table en terrasse face au coucher du soleil : une pause partagée.",
        "en": "A small terrace table facing the sunset: a shared break."
      }
    },
    "l11": {
      "26": {
        "s": 3
      },
      "1": {
        "s": 3
      },
      "106": {
        "s": 2
      },
      "31": {
        "s": 2
      },
      "103": {
        "s": 3,
        "es": "Una naranja con cráteres, cúpulas de vidrio y una escalera: una base en otra luna.",
        "fr": "Une orange à cratères, avec coupoles de verre et échelle : une base sur une autre lune.",
        "en": "An orange with craters, glass domes and a ladder: a base on another moon."
      },
      "75": {
        "s": 3,
        "es": "Una casa iluminada con terraza colgada junto a un planeta: un hotel en el espacio.",
        "fr": "Une maison illuminée avec terrasse suspendue près d’une planète : un hôtel dans l’espace.",
        "en": "A lit-up house with a terrace hanging next to a planet: a hotel in space."
      },
      "22": {
        "s": 2,
        "es": "La Luna y la Tierra vistas desde el espacio: el viaje a la Luna.",
        "fr": "La Lune et la Terre vues de l’espace : le voyage vers la Lune.",
        "en": "The Moon and Earth seen from space: the trip to the Moon."
      },
      "74": {
        "s": 2,
        "es": "Una carpa en un suelo rojo con una huella y un cohete al lado: acampar en otro mundo.",
        "fr": "Une tente sur un sol rouge avec une empreinte et une fusée à côté : camper sur un autre monde.",
        "en": "A tent on red ground with a footprint and a rocket beside it: camping on another world."
      },
      "59": {
        "s": 2,
        "es": "Turistas en un balcón mirando islas con cúpulas de vidrio: un destino increíble.",
        "fr": "Des touristes sur un balcon face à des îles sous coupoles de verre : une destination incroyable.",
        "en": "Tourists on a balcony looking at islands with glass domes: an incredible destination."
      },
      "85": {
        "s": 1,
        "es": "Una casa con ventanitas iluminadas en un paisaje helado: alojarse en un lugar extremo.",
        "fr": "Une maison aux fenêtres éclairées dans un paysage glacé : loger dans un lieu extrême.",
        "en": "A house with lit windows in a frozen landscape: staying somewhere extreme."
      },
      "94": {
        "s": 1,
        "es": "Una casa de vidrio bajo una luna creciente: dormir de noche en un lugar raro.",
        "fr": "Une maison de verre sous un croissant de lune : passer la nuit dans un lieu étrange.",
        "en": "A glass house under a crescent moon: spending the night somewhere strange."
      },
      "30": {
        "s": 1,
        "es": "Una familia de turistas que viaja en una cápsula: vacaciones en otro mundo.",
        "fr": "Une famille de touristes qui voyage en capsule : des vacances dans un autre monde.",
        "en": "A family of tourists travelling in a capsule: a holiday in another world."
      },
      "63": {
        "s": 1,
        "es": "Un viajero con su robot descansa en lo alto mirando naves y ciudades: turismo del futuro.",
        "fr": "Un voyageur et son robot se reposent en hauteur face aux vaisseaux : le tourisme du futur.",
        "en": "A traveller and his robot rest up high watching ships and cities: future tourism."
      },
      "54": {
        "s": 1,
        "es": "Una cúpula transparente bajo la luna llena: vivir protegido bajo una burbuja.",
        "fr": "Une coupole transparente sous la pleine lune : vivre à l’abri sous une bulle.",
        "en": "A clear dome under the full moon: living sheltered under a bubble."
      },
      "42": {
        "s": 1,
        "es": "Una luna enorme sobre un desierto de piedra: un paisaje de otro mundo.",
        "fr": "Une lune énorme au-dessus d’un désert de pierre : un paysage d’un autre monde.",
        "en": "A huge moon over a stone desert: an otherworldly landscape."
      },
      "35": {
        "s": 1,
        "es": "Una luna llena gigante sobre un concierto: noche de fiesta bajo la luna.",
        "fr": "Une pleine lune géante au-dessus d’un concert : une nuit de fête sous la lune.",
        "en": "A giant full moon over a concert: a party night under the moon."
      },
      "111": {
        "s": 1,
        "es": "Naves que pasan bajo una luna creciente: viajar de noche por el cielo.",
        "fr": "Des vaisseaux qui passent sous un croissant de lune : voyager la nuit dans le ciel.",
        "en": "Ships passing under a crescent moon: travelling the night sky."
      },
      "52": {
        "s": 1,
        "es": "Una luna llena como estampilla: mandar saludos desde la Luna.",
        "fr": "Une pleine lune en forme de timbre : envoyer des nouvelles depuis la Lune.",
        "en": "A full moon shaped like a stamp: sending greetings from the Moon."
      },
      "11": {
        "s": 1,
        "es": "Un señor que descansa en un sillón con té: la comodidad de un hotel.",
        "fr": "Un monsieur qui se repose dans un fauteuil avec un thé : le confort d’un hôtel.",
        "en": "A man relaxing in an armchair with tea: hotel comfort."
      },
      "33": {
        "s": 1,
        "es": "Un restaurante con platos que vuelan e islas flotantes: comer en un lugar imposible.",
        "fr": "Un restaurant aux plats volants et îles flottantes : dîner dans un lieu impossible.",
        "en": "A restaurant with flying dishes and floating islands: dining somewhere impossible."
      },
      "99": {
        "s": 1,
        "es": "Una campana de vidrio con luz: vivir protegido bajo una cúpula.",
        "fr": "Une cloche de verre lumineuse : vivre à l’abri sous une coupole.",
        "en": "A glowing glass bell: living sheltered under a dome."
      },
      "76": {
        "s": 1,
        "es": "Una cena para dos con platillos voladores en el cielo: una noche especial.",
        "fr": "Un dîner pour deux avec des soucoupes volantes dans le ciel : une soirée spéciale.",
        "en": "Dinner for two with flying saucers in the sky: a special night."
      },
      "98": {
        "s": 1,
        "es": "Un pasillo moderno con ventanales: el lobby de un hotel del futuro.",
        "fr": "Un couloir moderne aux grandes baies : le hall d’un hôtel du futur.",
        "en": "A modern corridor with big windows: the lobby of a future hotel."
      },
      "20": {
        "s": 1,
        "es": "Edificios con ventanas iluminadas bajo la luna: un alojamiento de noche.",
        "fr": "Des bâtiments aux fenêtres éclairées sous la lune : un hébergement de nuit.",
        "en": "Buildings with lit windows under the moon: a place to stay the night."
      }
    },
    "l02": {
      "81": {
        "s": 2
      },
      "102": {
        "s": 2
      },
      "27": {
        "s": 2
      },
      "61": {
        "s": 1
      },
      "54": {
        "s": 2,
        "es": "Una gran cúpula blanca iluminada junto al río: un monumento famoso.",
        "fr": "Une grande coupole blanche illuminée au bord du fleuve : un monument célèbre.",
        "en": "A great white dome lit up by the river: a famous monument."
      },
      "70": {
        "s": 2,
        "es": "Una gran muralla tejida sobre las montañas: otra maravilla del mundo.",
        "fr": "Une grande muraille tricotée sur les montagnes : une autre merveille du monde.",
        "en": "A great knitted wall over the mountains: another wonder of the world."
      },
      "8": {
        "s": 2,
        "es": "Un palacio con cúpulas doradas adentro de un pez: cúpulas de cuento.",
        "fr": "Un palais à coupoles dorées dans un poisson : des coupoles de conte.",
        "en": "A palace with golden domes inside a fish: fairy-tale domes."
      },
      "21": {
        "s": 2,
        "es": "Una mujer en un pueblo de piedra dorada, con palmeras y un toldo rojo: el Oriente.",
        "fr": "Une femme dans un village de pierre dorée, avec palmiers et auvent rouge : l’Orient.",
        "en": "A woman in a golden stone town with palms and a red awning: the Orient."
      },
      "30": {
        "s": 1,
        "es": "Burbujas con la torre Eiffel y las pirámides: los monumentos del mundo.",
        "fr": "Des bulles avec la tour Eiffel et les pyramides : les monuments du monde.",
        "en": "Bubbles holding the Eiffel Tower and the pyramids: the world’s monuments."
      },
      "103": {
        "s": 1,
        "es": "Cúpulas blancas sobre una naranja pelada: un palacio de cúpulas.",
        "fr": "Des coupoles blanches sur une orange pelée : un palais à coupoles.",
        "en": "White domes on a peeled orange: a palace of domes."
      },
      "48": {
        "s": 1,
        "es": "Palacios con cúpulas y arcos al fondo de un jardín: una arquitectura lejana.",
        "fr": "Des palais à coupoles et arcades au fond d’un jardin : une architecture lointaine.",
        "en": "Palaces with domes and arches behind a garden: faraway architecture."
      },
      "99": {
        "s": 1,
        "es": "Un huevo bajo una campana de vidrio redonda, como una cúpula blanca.",
        "fr": "Un œuf sous une cloche de verre ronde, comme une coupole blanche.",
        "en": "An egg under a round glass bell, like a white dome."
      },
      "42": {
        "s": 1,
        "es": "Arcos de piedra en ruinas en el desierto: monumentos antiguos.",
        "fr": "Des arches de pierre en ruine dans le désert : des monuments anciens.",
        "en": "Ruined stone arches in the desert: ancient monuments."
      },
      "59": {
        "s": 1,
        "es": "Cúpulas de vidrio sobre islas flotantes: un lugar de cúpulas.",
        "fr": "Des coupoles de verre sur des îles flottantes : un lieu de coupoles.",
        "en": "Glass domes on floating islands: a place of domes."
      },
      "63": {
        "s": 1,
        "es": "Una ciudad con cúpulas y puentes a lo lejos: palacios de otro lugar.",
        "fr": "Une ville à coupoles et ponts au loin : des palais d’ailleurs.",
        "en": "A city with domes and bridges in the distance: palaces from afar."
      },
      "84": {
        "s": 1,
        "es": "Una gran roca roja famosa en el desierto: un monumento que se visita.",
        "fr": "Un grand rocher rouge célèbre dans le désert : un monument qu’on visite.",
        "en": "A famous great red rock in the desert: a landmark to visit."
      },
      "72": {
        "s": 1,
        "es": "Una cúpula entre el humo de la ciudad: un monumento en peligro.",
        "fr": "Une coupole dans la fumée de la ville : un monument menacé.",
        "en": "A dome amid the city’s smoke: a monument at risk."
      },
      "4": {
        "s": 1,
        "es": "Una plaza con torre de cúpula y fuente: un lugar con historia.",
        "fr": "Une place avec une tour à coupole et une fontaine : un lieu chargé d’histoire.",
        "en": "A square with a domed tower and a fountain: a place with history."
      },
      "12": {
        "s": 1,
        "es": "Rodajas con palacios y paisajes: viajar a lugares famosos.",
        "fr": "Des tranches avec des palais et des paysages : voyager vers des lieux célèbres.",
        "en": "Slices showing palaces and landscapes: travelling to famous places."
      },
      "26": {
        "s": 1,
        "es": "Un gran hotel como un palacio iluminado sobre el agua.",
        "fr": "Un grand hôtel comme un palais illuminé au-dessus de l’eau.",
        "en": "A grand hotel like a palace lit up above the water."
      },
      "33": {
        "s": 1,
        "es": "Castillos que flotan entre las nubes: palacios de cuento.",
        "fr": "Des châteaux qui flottent dans les nuages : des palais de conte.",
        "en": "Castles floating in the clouds: fairy-tale palaces."
      },
      "53": {
        "s": 1,
        "es": "Un museo lleno de visitantes: los lugares que todos quieren ver.",
        "fr": "Un musée plein de visiteurs : les lieux que tout le monde veut voir.",
        "en": "A museum full of visitors: places everyone wants to see."
      },
      "15": {
        "s": 1,
        "es": "Torres y agujas de una ciudad antigua en la noche.",
        "fr": "Les tours et les flèches d’une ville ancienne dans la nuit.",
        "en": "Towers and spires of an old city at night."
      },
      "111": {
        "s": 1,
        "es": "Un pueblo con torre sobre la colina, iluminado de noche.",
        "fr": "Un village avec sa tour sur la colline, illuminé la nuit.",
        "en": "A village with a tower on the hill, lit up at night."
      }
    },
    "l24": {
      "56": {
        "s": 3
      },
      "42": {
        "s": 3
      },
      "35": {
        "s": 3
      },
      "47": {
        "s": 2
      },
      "112": {
        "s": 3,
        "es": "Una abuela transparente que brilla: como las almas que vuelven de visita.",
        "fr": "Une grand-mère transparente et lumineuse : comme les âmes qui reviennent en visite.",
        "en": "A glowing, see-through grandma: like the souls that come back to visit."
      },
      "87": {
        "s": 2,
        "es": "Una figura de luz que vuela por el cielo: un espíritu que pasa.",
        "fr": "Une silhouette de lumière qui vole dans le ciel : un esprit qui passe.",
        "en": "A figure of light flying across the sky: a passing spirit."
      },
      "101": {
        "s": 2,
        "es": "Globos, papel picado y una vela encendida: una fiesta con ofrenda.",
        "fr": "Des ballons, des confettis et une bougie allumée : une fête avec offrande.",
        "en": "Balloons, confetti and a lit candle: a celebration with an offering."
      },
      "57": {
        "s": 2,
        "es": "Un corazón cubierto de flores rojas entre faroles, de noche: color y recuerdo.",
        "fr": "Un cœur couvert de fleurs rouges entre des lanternes, la nuit : couleur et souvenir.",
        "en": "A heart covered in red flowers among lanterns at night: colour and remembrance."
      },
      "64": {
        "s": 1,
        "es": "Un arco de fútbol hecho con huesos gigantes: huesos que se vuelven fiesta.",
        "fr": "Un but de foot fait d’os géants : des os qui deviennent fête.",
        "en": "A football goal made of giant bones: bones turned into a party."
      },
      "53": {
        "s": 1,
        "es": "Esqueletos de dinosaurio en el museo: los huesos de los que ya no están.",
        "fr": "Des squelettes de dinosaures au musée : les os de ceux qui ne sont plus là.",
        "en": "Dinosaur skeletons in the museum: the bones of those who are gone."
      },
      "29": {
        "s": 1,
        "es": "Una lluvia de pétalos rojos de noche, como las flores del desfile.",
        "fr": "Une pluie de pétales rouges la nuit, comme les fleurs du défilé.",
        "en": "A shower of red petals at night, like the parade’s flowers."
      },
      "22": {
        "s": 1,
        "es": "Fuegos artificiales sobre la noche: una celebración.",
        "fr": "Des feux d’artifice dans la nuit : une célébration.",
        "en": "Fireworks in the night: a celebration."
      },
      "46": {
        "s": 1,
        "es": "Una bandada de caritas sonrientes con alas: un desfile alegre.",
        "fr": "Une volée de smileys ailés : un défilé joyeux.",
        "en": "A flock of winged smiley faces: a cheerful parade."
      },
      "20": {
        "s": 1,
        "es": "Alguien camina con un farol de noche entre edificios con caras dormidas.",
        "fr": "Quelqu’un marche avec une lanterne la nuit entre des immeubles aux visages endormis.",
        "en": "Someone walks with a lantern at night among buildings with sleeping faces."
      },
      "15": {
        "s": 2,
        "es": "Una sombra oscura sentada en el banco junto al señor: un muerto que vuelve de visita.",
        "fr": "Une ombre assise sur le banc près du monsieur : un mort qui revient en visite.",
        "en": "A dark shadow sitting on the bench by the man: one of the dead back to visit."
      },
      "52": {
        "s": 1,
        "es": "Faroles encendidos en el bosque de noche: luces para guiar a los que vuelven.",
        "fr": "Des lanternes allumées dans la forêt la nuit : des lumières pour guider ceux qui reviennent.",
        "en": "Lanterns lit in the forest at night: lights to guide those who return."
      },
      "111": {
        "s": 1,
        "es": "Flores que brillan en la noche: una ofrenda luminosa.",
        "fr": "Des fleurs qui brillent dans la nuit : une offrande lumineuse.",
        "en": "Flowers glowing in the night: a luminous offering."
      },
      "99": {
        "s": 1,
        "es": "La sombra de un dodo en la pared: un animal que ya no está y vuelve.",
        "fr": "L’ombre d’un dodo sur le mur : un animal disparu qui revient.",
        "en": "The shadow of a dodo on the wall: a vanished animal coming back."
      },
      "14": {
        "s": 1,
        "es": "Una chica con corona de flores: el adorno de la fiesta.",
        "fr": "Une fille avec une couronne de fleurs : la parure de la fête.",
        "en": "A girl with a flower crown: festival adornment."
      },
      "48": {
        "s": 1,
        "es": "Mariposas de colores que vuelan: almas que llegan, como en la tradición.",
        "fr": "Des papillons colorés qui volent : des âmes qui arrivent, comme le veut la tradition.",
        "en": "Colourful butterflies flying: souls arriving, as tradition has it."
      },
      "80": {
        "s": 1,
        "es": "Lucecitas que flotan en un frasco: pequeñas almas brillando.",
        "fr": "De petites lumières qui flottent dans un bocal : de petites âmes qui brillent.",
        "en": "Little lights floating in a jar: small glowing souls."
      },
      "76": {
        "s": 1,
        "es": "Una vela encendida en la mesa: recordar a alguien.",
        "fr": "Une bougie allumée sur la table : se souvenir de quelqu’un.",
        "en": "A candle lit on the table: remembering someone."
      },
      "26": {
        "s": 1,
        "es": "Abuelos que gritan felices en una montaña rusa: una fiesta para los mayores.",
        "fr": "Des grands-parents qui crient de joie sur des montagnes russes : la fête des anciens.",
        "en": "Grandparents shrieking with joy on a roller coaster: a party for the elders."
      },
      "94": {
        "s": 1,
        "es": "Un reloj de arena: el tiempo que pasa y lo que se va.",
        "fr": "Un sablier : le temps qui passe et ce qui s’en va.",
        "en": "An hourglass: time passing and what slips away."
      }
    },
    "i09": {
      "84": {
        "s": 3
      },
      "69": {
        "s": 2
      },
      "63": {
        "s": 1
      },
      "40": {
        "s": 1
      },
      "100": {
        "s": 3,
        "es": "Un chico con un aparato de metal en la espalda camina entre las nubes: una mochila del futuro.",
        "fr": "Un garçon avec un appareil de métal sur le dos marche dans les nuages : un sac à dos du futur.",
        "en": "A boy with a metal device on his back walks among clouds: a backpack of the future."
      },
      "59": {
        "s": 3,
        "es": "Un chico vuela sobre una tabla con propulsores: moverse por el aire.",
        "fr": "Un garçon vole sur une planche à propulseurs : se déplacer dans les airs.",
        "en": "A boy flies on a board with thrusters: getting around by air."
      },
      "1": {
        "s": 2,
        "es": "Un cohete listo para despegar: el impulso para volar.",
        "fr": "Une fusée prête à décoller : la poussée pour voler.",
        "en": "A rocket ready for takeoff: the thrust to fly."
      },
      "74": {
        "s": 2,
        "es": "Un cohete de juguete en la ventana: el sueño de volar con un cohete.",
        "fr": "Une fusée jouet à la fenêtre : le rêve de voler avec une fusée.",
        "en": "A toy rocket by the window: the dream of flying on a rocket."
      },
      "22": {
        "s": 2,
        "es": "Dos extraterrestres viajan sobre un asteroide en llamas: volar a toda velocidad.",
        "fr": "Deux extraterrestres chevauchent un astéroïde en feu : voler à toute vitesse.",
        "en": "Two aliens ride a flaming asteroid: flying at full speed."
      },
      "107": {
        "s": 2,
        "es": "Un cofre con alas que vuela solo: cualquier cosa puede despegar.",
        "fr": "Un coffre ailé qui vole tout seul : n’importe quoi peut décoller.",
        "en": "A winged chest flying on its own: anything can take off."
      },
      "25": {
        "s": 1,
        "es": "Un chico con mochila rodeado de abejas robot que vuelan.",
        "fr": "Un garçon avec un sac à dos entouré d’abeilles robots qui volent.",
        "en": "A boy with a backpack surrounded by flying robot bees."
      },
      "36": {
        "s": 1,
        "es": "Un dron que se maneja con un control: volar por la ciudad.",
        "fr": "Un drone piloté avec une manette : voler à travers la ville.",
        "en": "A drone steered with a controller: flying around the city."
      },
      "80": {
        "s": 1,
        "es": "Un helicóptero chiquito despega de un frasco: volar desde casa.",
        "fr": "Un petit hélicoptère décolle d’un bocal : s’envoler de chez soi.",
        "en": "A tiny helicopter takes off from a jar: flying from home."
      },
      "46": {
        "s": 1,
        "es": "Caritas con alas que salen volando de una caja: despegar.",
        "fr": "Des smileys ailés qui s’envolent d’un carton : décoller.",
        "en": "Winged smiley faces flying out of a box: taking off."
      },
      "98": {
        "s": 2,
        "es": "Un buzo con un tanque en la espalda: un aparato que se lleva puesto para moverse.",
        "fr": "Un plongeur avec une bouteille sur le dos : un appareil qu’on porte pour se déplacer.",
        "en": "A diver with a tank on his back: a device you wear to get around."
      },
      "30": {
        "s": 1,
        "es": "Autos que vuelan alrededor de una cápsula: moverse por el aire en la ciudad.",
        "fr": "Des voitures volantes autour d’une capsule : se déplacer dans les airs en ville.",
        "en": "Flying cars around a capsule: getting around the city by air."
      },
      "61": {
        "s": 1,
        "es": "Alfombras que vuelan en un remolino: viajar por el aire.",
        "fr": "Des tapis qui volent dans un tourbillon : voyager dans les airs.",
        "en": "Carpets flying in a whirlwind: travelling by air."
      },
      "27": {
        "s": 1,
        "es": "Hadas con alas que vuelan entre cúpulas: ir volando de un lado a otro.",
        "fr": "Des fées ailées qui volent entre les coupoles : aller d’un endroit à l’autre en volant.",
        "en": "Winged fairies flying between domes: getting from place to place by air."
      },
      "26": {
        "s": 1,
        "es": "Abuelos que van a toda velocidad en una montaña rusa entre las nubes.",
        "fr": "Des grands-parents qui filent à toute allure sur des montagnes russes dans les nuages.",
        "en": "Grandparents speeding along a roller coaster in the clouds."
      },
      "97": {
        "s": 1,
        "es": "Un dron que levanta una oveja por el cielo: hasta lo pesado vuela.",
        "fr": "Un drone qui soulève un mouton dans le ciel : même le lourd s’envole.",
        "en": "A drone lifting a sheep into the sky: even heavy things fly."
      },
      "9": {
        "s": 1,
        "es": "Una chica que sube volando por la montaña tirada por un hilo.",
        "fr": "Une fille qui monte la montagne en volant, tirée par un fil.",
        "en": "A girl flying up the mountain pulled by a thread."
      },
      "31": {
        "s": 1,
        "es": "Un auto rojo a toda velocidad: moverse rápido.",
        "fr": "Une voiture rouge à toute vitesse : se déplacer vite.",
        "en": "A red car at full speed: getting around fast."
      },
      "47": {
        "s": 1,
        "es": "Una máquina que larga energía y hace volar a un esqueleto: el impulso.",
        "fr": "Une machine qui libère de l’énergie et fait voler un squelette : la poussée.",
        "en": "A machine releasing energy that sends a skeleton flying: thrust."
      },
      "106": {
        "s": 1,
        "es": "Un osito con casco de astronauta: equipado para volar.",
        "fr": "Un ourson avec un casque d’astronaute : équipé pour voler.",
        "en": "A teddy in an astronaut helmet: kitted out to fly."
      }
    },
    "i26": {
      "25": {
        "s": 3
      },
      "48": {
        "s": 2
      },
      "97": {
        "s": 1
      },
      "112": {
        "s": 1
      },
      "17": {
        "s": 3,
        "es": "Un dron riega las flores de una maceta en el jardín: una máquina que cuida las plantas.",
        "fr": "Un drone arrose les fleurs d’un pot au jardin : une machine qui soigne les plantes.",
        "en": "A drone waters the flowers in a garden pot: a machine caring for plants."
      },
      "111": {
        "s": 2,
        "es": "Flores que brotan de un enchufe junto a un robot: naturaleza y máquinas juntas.",
        "fr": "Des fleurs qui poussent d’une prise près d’un robot : nature et machines ensemble.",
        "en": "Flowers sprouting from a plug beside a robot: nature and machines together."
      },
      "81": {
        "s": 2,
        "es": "Drones que vuelan cargando flores: máquinas que van de flor en flor.",
        "fr": "Des drones qui volent chargés de fleurs : des machines qui vont de fleur en fleur.",
        "en": "Drones flying with loads of flowers: machines going from flower to flower."
      },
      "46": {
        "s": 2,
        "es": "Seres chiquitos con alas que salen de una fábrica con robots: un enjambre fabricado.",
        "fr": "De petits êtres ailés qui sortent d’une usine à robots : un essaim fabriqué.",
        "en": "Little winged beings leaving a robot factory: a manufactured swarm."
      },
      "66": {
        "s": 2,
        "es": "Un campo de girasoles con un pájaro: las flores que hay que polinizar.",
        "fr": "Un champ de tournesols avec un oiseau : les fleurs à polliniser.",
        "en": "A field of sunflowers with a bird: the flowers that need pollinating."
      },
      "72": {
        "s": 2,
        "es": "Un cerezo en flor que nace de una máscara antigás: salvar las flores en un mundo contaminado.",
        "fr": "Un cerisier en fleurs qui pousse d’un masque à gaz : sauver les fleurs dans un monde pollué.",
        "en": "A cherry tree blooming from a gas mask: saving flowers in a polluted world."
      },
      "57": {
        "s": 1,
        "es": "Un corazón de metal cubierto de flores: máquina y naturaleza.",
        "fr": "Un cœur de métal couvert de fleurs : machine et nature.",
        "en": "A metal heart covered in flowers: machine and nature."
      },
      "14": {
        "s": 1,
        "es": "Un árbol con una mitad en flor rosa: la primavera.",
        "fr": "Un arbre dont une moitié est en fleurs roses : le printemps.",
        "en": "A tree with one half in pink blossom: springtime."
      },
      "19": {
        "s": 1,
        "es": "Una maceta con planta y una regadera: cuidar lo que crece.",
        "fr": "Un pot avec une plante et un arrosoir : prendre soin de ce qui pousse.",
        "en": "A pot with a plant and a watering can: caring for what grows."
      },
      "94": {
        "s": 1,
        "es": "Un brote y una gota de agua dentro de un reloj de arena: salvar la naturaleza a tiempo.",
        "fr": "Une pousse et une goutte d’eau dans un sablier : sauver la nature à temps.",
        "en": "A sprout and a water drop inside an hourglass: saving nature in time."
      },
      "27": {
        "s": 2,
        "es": "Hadas con alas que van y vienen con dulces, como abejas con su miel.",
        "fr": "Des fées ailées qui vont et viennent avec des douceurs, comme des abeilles avec leur miel.",
        "en": "Winged fairies coming and going with sweets, like bees with their honey."
      },
      "101": {
        "s": 1,
        "es": "Flores y drones sobre una terraza: máquinas que vuelan entre plantas.",
        "fr": "Des fleurs et des drones sur une terrasse : des machines qui volent parmi les plantes.",
        "en": "Flowers and drones over a terrace: machines flying among plants."
      },
      "52": {
        "s": 1,
        "es": "Un árbol lleno de cosas colgadas y pájaros: una colmena de cartas.",
        "fr": "Un arbre plein de choses suspendues et d’oiseaux : une ruche de lettres.",
        "en": "A tree full of hanging things and birds: a hive of letters."
      },
      "33": {
        "s": 1,
        "es": "Robots que ayudan en la cocina entre frascos y comida.",
        "fr": "Des robots qui aident en cuisine entre bocaux et nourriture.",
        "en": "Robots helping in the kitchen among jars and food."
      },
      "107": {
        "s": 1,
        "es": "Un dron chiquito que vuela sobre el campo: una máquina que zumba.",
        "fr": "Un petit drone qui vole au-dessus de la campagne : une machine qui bourdonne.",
        "en": "A tiny drone flying over the countryside: a buzzing machine."
      },
      "36": {
        "s": 1,
        "es": "Un dron que vuela entre árboles y cascadas: una máquina en la naturaleza.",
        "fr": "Un drone qui vole entre arbres et cascades : une machine dans la nature.",
        "en": "A drone flying among trees and waterfalls: a machine in nature."
      },
      "84": {
        "s": 1,
        "es": "Drones chiquitos que vuelan entre los árboles: un enjambre mecánico.",
        "fr": "De petits drones qui volent entre les arbres : un essaim mécanique.",
        "en": "Tiny drones flying among the trees: a mechanical swarm."
      },
      "54": {
        "s": 1,
        "es": "Una terraza llena de flores y limones: un jardín que da frutos.",
        "fr": "Une terrasse pleine de fleurs et de citrons : un jardin qui donne des fruits.",
        "en": "A terrace full of flowers and lemons: a garden bearing fruit."
      },
      "29": {
        "s": 1,
        "es": "Pétalos rojos que vuelan por el aire.",
        "fr": "Des pétales rouges qui volent dans l’air.",
        "en": "Red petals flying through the air."
      },
      "40": {
        "s": 1,
        "es": "Alas blancas que levantan una montaña: muchos que trabajan juntos.",
        "fr": "Des ailes blanches qui soulèvent une montagne : beaucoup qui travaillent ensemble.",
        "en": "White wings lifting a mountain: many working together."
      }
    },
    "i07": {
      "72": {
        "s": 3
      },
      "111": {
        "s": 3
      },
      "14": {
        "s": 1
      },
      "20": {
        "s": 1
      },
      "98": {
        "s": 3,
        "es": "Una lamparita gigante llena de agua clara y peces: una luz que limpia.",
        "fr": "Une ampoule géante remplie d’eau claire et de poissons : une lumière qui purifie.",
        "en": "A giant light bulb filled with clear water and fish: a light that purifies."
      },
      "80": {
        "s": 2,
        "es": "Un frasco de luciérnagas que ilumina la mesa: una lámpara viva.",
        "fr": "Un bocal de lucioles qui éclaire la table : une lampe vivante.",
        "en": "A jar of fireflies lighting the table: a living lamp."
      },
      "15": {
        "s": 2,
        "es": "Un farol que ilumina la calle de noche: la luz que cuida.",
        "fr": "Un réverbère qui éclaire la rue la nuit : la lumière qui veille.",
        "en": "A street lamp lighting the street at night: a light that watches over."
      },
      "74": {
        "s": 2,
        "es": "Una lámpara encendida junto a la ventana: la luz que da calor a la casa.",
        "fr": "Une lampe allumée près de la fenêtre : la lumière qui réchauffe la maison.",
        "en": "A lamp glowing by the window: light that warms the home."
      },
      "99": {
        "s": 1,
        "es": "Una campana de vidrio que brilla y una lámpara en la pared: un aparato que cuida.",
        "fr": "Une cloche de verre lumineuse et une lampe au mur : un appareil qui protège.",
        "en": "A glowing glass bell and a wall lamp: a device that protects."
      },
      "94": {
        "s": 1,
        "es": "Un brote bajo una luz dorada: una lámpara que hace crecer la vida.",
        "fr": "Une pousse sous une lumière dorée : une lampe qui fait pousser la vie.",
        "en": "A sprout under golden light: a lamp that helps life grow."
      },
      "18": {
        "s": 1,
        "es": "Un robot limpia la playa: una máquina que deja el mundo más limpio.",
        "fr": "Un robot nettoie la plage : une machine qui rend le monde plus propre.",
        "en": "A robot cleans the beach: a machine making the world cleaner."
      },
      "19": {
        "s": 1,
        "es": "Una lamparita encendida adentro de una maceta con planta: luz y verde.",
        "fr": "Une petite lampe allumée dans un pot de fleurs : lumière et verdure.",
        "en": "A little lamp lit inside a plant pot: light and greenery."
      },
      "11": {
        "s": 1,
        "es": "Una lámpara con pantalla que ilumina un living tranquilo.",
        "fr": "Une lampe à abat-jour qui éclaire un salon paisible.",
        "en": "A shaded lamp lighting a calm living room."
      },
      "4": {
        "s": 1,
        "es": "Un paraguas que encierra la tormenta: un aparato que protege a quien lo usa.",
        "fr": "Un parapluie qui enferme l’orage : un objet qui protège celui qui l’utilise.",
        "en": "An umbrella that holds the storm: a device that protects its user."
      },
      "68": {
        "s": 1,
        "es": "Una lámpara de escritorio y una ventana abierta al aire fresco.",
        "fr": "Une lampe de bureau et une fenêtre ouverte sur l’air frais.",
        "en": "A desk lamp and a window open to fresh air."
      },
      "54": {
        "s": 1,
        "es": "Una burbuja transparente que protege al perro de afuera: un aire propio.",
        "fr": "Une bulle transparente qui protège le chien de l’extérieur : un air à soi.",
        "en": "A clear bubble shielding the dog from outside: its own air."
      },
      "47": {
        "s": 1,
        "es": "Una máquina que brilla y da energía: un aparato que da vida.",
        "fr": "Une machine lumineuse qui donne de l’énergie : un appareil qui donne vie.",
        "en": "A glowing machine giving off energy: a device that gives life."
      },
      "5": {
        "s": 1,
        "es": "Una brisa que sale de la heladera y vuela los papeles: aire nuevo.",
        "fr": "Une brise qui sort du frigo et fait voler les papiers : un air nouveau.",
        "en": "A breeze blowing out of the fridge, sending papers flying: fresh air."
      },
      "25": {
        "s": 1,
        "es": "Una cascada de agua limpia: la naturaleza pura.",
        "fr": "Une cascade d’eau claire : la nature pure.",
        "en": "A waterfall of clean water: pure nature."
      },
      "97": {
        "s": 1,
        "es": "Un árbol fuerte bajo un cielo limpio: aire sano.",
        "fr": "Un arbre robuste sous un ciel pur : un air sain.",
        "en": "A sturdy tree under a clear sky: healthy air."
      },
      "17": {
        "s": 1,
        "es": "Un jardín verde y lleno de flores: un ambiente sano.",
        "fr": "Un jardin vert plein de fleurs : un environnement sain.",
        "en": "A green garden full of flowers: a healthy environment."
      },
      "52": {
        "s": 1,
        "es": "Faroles que iluminan el bosque de noche.",
        "fr": "Des lanternes qui éclairent la forêt la nuit.",
        "en": "Lanterns lighting the forest at night."
      },
      "57": {
        "s": 1,
        "es": "Faroles encendidos junto a dos abuelos que trabajan de noche.",
        "fr": "Des lanternes allumées près de deux grands-parents qui travaillent la nuit.",
        "en": "Lanterns lit beside two old people working at night."
      },
      "106": {
        "s": 1,
        "es": "Una luz de holograma sobre la mesa de una nave: luz del futuro.",
        "fr": "Une lumière d’hologramme sur la table d’un vaisseau : la lumière du futur.",
        "en": "A hologram light on a ship’s table: light of the future."
      }
    }
  }
};
