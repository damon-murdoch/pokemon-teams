// Pokemon Info Data Structure
const POKEMON = [
  {
    "dex": 1,
    "species": "bulbasaur",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 2,
    "species": "ivysaur",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 3,
    "species": "venusaur",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 4,
    "species": "charmander",
    "type1": "fire"
  },
  {
    "dex": 5,
    "species": "charmeleon",
    "type1": "fire"
  },
  {
    "dex": 6,
    "species": "charizard",
    "type1": "fire",
    "type2": "flying"
  },
  {
    "dex": 7,
    "species": "squirtle",
    "type1": "water"
  },
  {
    "dex": 8,
    "species": "wartortle",
    "type1": "water"
  },
  {
    "dex": 9,
    "species": "blastoise",
    "type1": "water"
  },
  {
    "dex": 10,
    "species": "caterpie",
    "type1": "bug"
  },
  {
    "dex": 11,
    "species": "metapod",
    "type1": "bug"
  },
  {
    "dex": 12,
    "species": "butterfree",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 13,
    "species": "weedle",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 14,
    "species": "kakuna",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 15,
    "species": "beedrill",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 16,
    "species": "pidgey",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 17,
    "species": "pidgeotto",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 18,
    "species": "pidgeot",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 19,
    "species": "rattata",
    "type1": "normal"
  },
  {
    "dex": 19,
    "species": "rattata-alola",
    "type1": "dark",
    "type2": "normal"
  },
  {
    "dex": 20,
    "species": "raticate",
    "type1": "normal"
  },
  {
    "dex": 20,
    "species": "raticate-alola",
    "type1": "dark",
    "type2": "normal"
  },
  {
    "dex": 21,
    "species": "spearow",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 22,
    "species": "fearow",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 23,
    "species": "ekans",
    "type1": "poison"
  },
  {
    "dex": 24,
    "species": "arbok",
    "type1": "poison"
  },
  {
    "dex": 25,
    "species": "pikachu",
    "type1": "electric"
  },
  {
    "dex": 26,
    "species": "raichu",
    "type1": "electric"
  },
  {
    "dex": 26,
    "species": "raichu-alola",
    "type1": "electric",
    "type2": "psychic"
  },
  {
    "dex": 27,
    "species": "sandshrew",
    "type1": "ground"
  },
  {
    "dex": 27,
    "species": "sandshrew-alola",
    "type1": "ice",
    "type2": "steel"
  },
  {
    "dex": 28,
    "species": "sandslash",
    "type1": "ground"
  },
  {
    "dex": 28,
    "species": "sandslash-alola",
    "type1": "ice",
    "type2": "steel"
  },
  {
    "dex": 29,
    "species": "nidoran\u2640",
    "type1": "poison"
  },
  {
    "dex": 30,
    "species": "nidorina",
    "type1": "poison"
  },
  {
    "dex": 31,
    "species": "nidoqueen",
    "type1": "poison",
    "type2": "ground"
  },
  {
    "dex": 32,
    "species": "nidoran\u2642",
    "type1": "poison"
  },
  {
    "dex": 33,
    "species": "nidorino",
    "type1": "poison"
  },
  {
    "dex": 34,
    "species": "nidoking",
    "type1": "poison",
    "type2": "ground"
  },
  {
    "dex": 35,
    "species": "clefairy",
    "type1": "fairy"
  },
  {
    "dex": 36,
    "species": "clefable",
    "type1": "fairy"
  },
  {
    "dex": 37,
    "species": "vulpix",
    "type1": "fire"
  },
  {
    "dex": 37,
    "species": "vulpix-alola",
    "type1": "ice"
  },
  {
    "dex": 38,
    "species": "ninetales",
    "type1": "fire"
  },
  {
    "dex": 38,
    "species": "ninetales-alola",
    "type1": "ice",
    "type2": "fairy"
  },
  {
    "dex": 39,
    "species": "jigglypuff",
    "type1": "normal",
    "type2": "fairy"
  },
  {
    "dex": 40,
    "species": "wigglytuff",
    "type1": "normal",
    "type2": "fairy"
  },
  {
    "dex": 41,
    "species": "zubat",
    "type1": "poison",
    "type2": "flying"
  },
  {
    "dex": 42,
    "species": "golbat",
    "type1": "poison",
    "type2": "flying"
  },
  {
    "dex": 43,
    "species": "oddish",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 44,
    "species": "gloom",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 45,
    "species": "vileplume",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 46,
    "species": "paras",
    "type1": "bug",
    "type2": "grass"
  },
  {
    "dex": 47,
    "species": "parasect",
    "type1": "bug",
    "type2": "grass"
  },
  {
    "dex": 48,
    "species": "venonat",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 49,
    "species": "venomoth",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 50,
    "species": "diglett",
    "type1": "ground"
  },
  {
    "dex": 50,
    "species": "diglett-alola",
    "type1": "ground",
    "type2": "steel"
  },
  {
    "dex": 51,
    "species": "dugtrio",
    "type1": "ground"
  },
  {
    "dex": 51,
    "species": "dugtrio-alola",
    "type1": "ground",
    "type2": "steel"
  },
  {
    "dex": 52,
    "species": "meowth",
    "type1": "normal"
  },
  {
    "dex": 52,
    "species": "meowth-alola",
    "type1": "dark"
  },
  {
    "dex": 52,
    "species": "meowth-galar",
    "type1": "steel"
  },
  {
    "dex": 53,
    "species": "persian",
    "type1": "normal"
  },
  {
    "dex": 53,
    "species": "persian-alola",
    "type1": "dark"
  },
  {
    "dex": 54,
    "species": "psyduck",
    "type1": "water"
  },
  {
    "dex": 55,
    "species": "golduck",
    "type1": "water"
  },
  {
    "dex": 56,
    "species": "mankey",
    "type1": "fighting"
  },
  {
    "dex": 57,
    "species": "primeape",
    "type1": "fighting"
  },
  {
    "dex": 58,
    "species": "growlithe",
    "type1": "fire"
  },
  {
    "dex": 58,
    "species": "growlithe-hisui",
    "type1": "fire",
    "type2": "rock"
  },
  {
    "dex": 59,
    "species": "arcanine",
    "type1": "fire"
  },
  {
    "dex": 59,
    "species": "arcanine-hisui",
    "type1": "fire",
    "type2": "rock"
  },
  {
    "dex": 60,
    "species": "poliwag",
    "type1": "water"
  },
  {
    "dex": 61,
    "species": "poliwhirl",
    "type1": "water"
  },
  {
    "dex": 62,
    "species": "poliwrath",
    "type1": "water",
    "type2": "fighting"
  },
  {
    "dex": 63,
    "species": "abra",
    "type1": "psychic"
  },
  {
    "dex": 64,
    "species": "kadabra",
    "type1": "psychic"
  },
  {
    "dex": 65,
    "species": "alakazam",
    "type1": "psychic"
  },
  {
    "dex": 66,
    "species": "machop",
    "type1": "fighting"
  },
  {
    "dex": 67,
    "species": "machoke",
    "type1": "fighting"
  },
  {
    "dex": 68,
    "species": "machamp",
    "type1": "fighting"
  },
  {
    "dex": 69,
    "species": "bellsprout",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 70,
    "species": "weepinbell",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 71,
    "species": "victreebel",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 72,
    "species": "tentacool",
    "type1": "water",
    "type2": "poison"
  },
  {
    "dex": 73,
    "species": "tentacruel",
    "type1": "water",
    "type2": "poison"
  },
  {
    "dex": 74,
    "species": "geodude",
    "type1": "rock",
    "type2": "ground"
  },
  {
    "dex": 74,
    "species": "geodude-alola",
    "type1": "rock",
    "type2": "electric"
  },
  {
    "dex": 75,
    "species": "graveler",
    "type1": "rock",
    "type2": "ground"
  },
  {
    "dex": 75,
    "species": "graveler-alola",
    "type1": "rock",
    "type2": "electric"
  },
  {
    "dex": 76,
    "species": "golem",
    "type1": "rock",
    "type2": "ground"
  },
  {
    "dex": 76,
    "species": "golem-alola",
    "type1": "rock",
    "type2": "electric"
  },
  {
    "dex": 77,
    "species": "ponyta",
    "type1": "fire"
  },
  {
    "dex": 77,
    "species": "ponyta-galar",
    "type1": "psychic"
  },
  {
    "dex": 78,
    "species": "rapidash",
    "type1": "fire"
  },
  {
    "dex": 78,
    "species": "rapidash-galar",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 79,
    "species": "slowpoke",
    "type1": "water",
    "type2": "psychic"
  },
  {
    "dex": 79,
    "species": "slowpoke-galar",
    "type1": "psychic"
  },
  {
    "dex": 80,
    "species": "slowbro",
    "type1": "water",
    "type2": "psychic"
  },
  {
    "dex": 80,
    "species": "slowbro-galar",
    "type1": "poison",
    "type2": "psychic"
  },
  {
    "dex": 81,
    "species": "magnemite",
    "type1": "electric",
    "type2": "steel"
  },
  {
    "dex": 82,
    "species": "magneton",
    "type1": "electric",
    "type2": "steel"
  },
  {
    "dex": 83,
    "species": "farfetch'd",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 83,
    "species": "farfetch'd-galar",
    "type1": "fighting"
  },
  {
    "dex": 84,
    "species": "doduo",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 85,
    "species": "dodrio",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 86,
    "species": "seel",
    "type1": "water"
  },
  {
    "dex": 87,
    "species": "dewgong",
    "type1": "water",
    "type2": "ice"
  },
  {
    "dex": 88,
    "species": "grimer",
    "type1": "poison"
  },
  {
    "dex": 88,
    "species": "grimer-alola",
    "type1": "poison",
    "type2": "dark"
  },
  {
    "dex": 89,
    "species": "muk",
    "type1": "poison"
  },
  {
    "dex": 89,
    "species": "muk-alola",
    "type1": "poison",
    "type2": "dark"
  },
  {
    "dex": 90,
    "species": "shellder",
    "type1": "water"
  },
  {
    "dex": 91,
    "species": "cloyster",
    "type1": "water",
    "type2": "ice"
  },
  {
    "dex": 92,
    "species": "gastly",
    "type1": "ghost",
    "type2": "poison"
  },
  {
    "dex": 93,
    "species": "haunter",
    "type1": "ghost",
    "type2": "poison"
  },
  {
    "dex": 94,
    "species": "gengar",
    "type1": "ghost",
    "type2": "poison"
  },
  {
    "dex": 95,
    "species": "onix",
    "type1": "rock",
    "type2": "ground"
  },
  {
    "dex": 96,
    "species": "drowzee",
    "type1": "psychic"
  },
  {
    "dex": 97,
    "species": "hypno",
    "type1": "psychic"
  },
  {
    "dex": 98,
    "species": "krabby",
    "type1": "water"
  },
  {
    "dex": 99,
    "species": "kingler",
    "type1": "water"
  },
  {
    "dex": 100,
    "species": "voltorb",
    "type1": "electric"
  },
  {
    "dex": 100,
    "species": "voltorb-hisui",
    "type1": "electric",
    "type2": "grass"
  },
  {
    "dex": 101,
    "species": "electrode",
    "type1": "electric"
  },
  {
    "dex": 101,
    "species": "electrode-hisui",
    "type1": "electric",
    "type2": "grass"
  },
  {
    "dex": 102,
    "species": "exeggcute",
    "type1": "grass",
    "type2": "psychic"
  },
  {
    "dex": 103,
    "species": "exeggutor",
    "type1": "grass",
    "type2": "psychic"
  },
  {
    "dex": 103,
    "species": "exeggutor-alola",
    "type1": "grass",
    "type2": "dragon"
  },
  {
    "dex": 104,
    "species": "cubone",
    "type1": "ground"
  },
  {
    "dex": 105,
    "species": "marowak",
    "type1": "ground"
  },
  {
    "dex": 105,
    "species": "marowak-alola",
    "type1": "fire",
    "type2": "ghost"
  },
  {
    "dex": 106,
    "species": "hitmonlee",
    "type1": "fighting"
  },
  {
    "dex": 107,
    "species": "hitmonchan",
    "type1": "fighting"
  },
  {
    "dex": 108,
    "species": "lickitung",
    "type1": "normal"
  },
  {
    "dex": 109,
    "species": "koffing",
    "type1": "poison"
  },
  {
    "dex": 110,
    "species": "weezing",
    "type1": "poison"
  },
  {
    "dex": 110,
    "species": "weezing-galar",
    "type1": "poison",
    "type2": "fairy"
  },
  {
    "dex": 111,
    "species": "rhyhorn",
    "type1": "ground",
    "type2": "rock"
  },
  {
    "dex": 112,
    "species": "rhydon",
    "type1": "ground",
    "type2": "rock"
  },
  {
    "dex": 113,
    "species": "chansey",
    "type1": "normal"
  },
  {
    "dex": 114,
    "species": "tangela",
    "type1": "grass"
  },
  {
    "dex": 115,
    "species": "kangaskhan",
    "type1": "normal"
  },
  {
    "dex": 116,
    "species": "horsea",
    "type1": "water"
  },
  {
    "dex": 117,
    "species": "seadra",
    "type1": "water"
  },
  {
    "dex": 118,
    "species": "goldeen",
    "type1": "water"
  },
  {
    "dex": 119,
    "species": "seaking",
    "type1": "water"
  },
  {
    "dex": 120,
    "species": "staryu",
    "type1": "water"
  },
  {
    "dex": 121,
    "species": "starmie",
    "type1": "water",
    "type2": "psychic"
  },
  {
    "dex": 122,
    "species": "mr. mime",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 122,
    "species": "mr. mime-galar",
    "type1": "ice",
    "type2": "psychic"
  },
  {
    "dex": 123,
    "species": "scyther",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 124,
    "species": "jynx",
    "type1": "ice",
    "type2": "psychic"
  },
  {
    "dex": 125,
    "species": "electabuzz",
    "type1": "electric"
  },
  {
    "dex": 126,
    "species": "magmar",
    "type1": "fire"
  },
  {
    "dex": 127,
    "species": "pinsir",
    "type1": "bug"
  },
  {
    "dex": 128,
    "species": "tauros",
    "type1": "normal"
  },
  {
    dex: "128",
    species: "tauros-paldea-combat",
    type1: "fighting",
  },
  {
    dex: "128",
    species: "tauros-paldea-blaze",
    type1: "fighting",
    type2: "fire",
  },
  {
    dex: "128",
    species: "tauros-paldea-aqua",
    type1: "fighting",
    type2: "water",
  },
  {
    "dex": 129,
    "species": "magikarp",
    "type1": "water"
  },
  {
    "dex": 130,
    "species": "gyarados",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 131,
    "species": "lapras",
    "type1": "water",
    "type2": "ice"
  },
  {
    "dex": 132,
    "species": "ditto",
    "type1": "normal"
  },
  {
    "dex": 133,
    "species": "eevee",
    "type1": "normal"
  },
  {
    "dex": 134,
    "species": "vaporeon",
    "type1": "water"
  },
  {
    "dex": 135,
    "species": "jolteon",
    "type1": "electric"
  },
  {
    "dex": 136,
    "species": "flareon",
    "type1": "fire"
  },
  {
    "dex": 137,
    "species": "porygon",
    "type1": "normal"
  },
  {
    "dex": 138,
    "species": "omanyte",
    "type1": "rock",
    "type2": "water"
  },
  {
    "dex": 139,
    "species": "omastar",
    "type1": "rock",
    "type2": "water"
  },
  {
    "dex": 140,
    "species": "kabuto",
    "type1": "rock",
    "type2": "water"
  },
  {
    "dex": 141,
    "species": "kabutops",
    "type1": "rock",
    "type2": "water"
  },
  {
    "dex": 142,
    "species": "aerodactyl",
    "type1": "rock",
    "type2": "flying"
  },
  {
    "dex": 143,
    "species": "snorlax",
    "type1": "normal"
  },
  {
    "dex": 144,
    "species": "articuno",
    "type1": "ice",
    "type2": "flying"
  },
  {
    "dex": 144,
    "species": "articuno-galar",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 145,
    "species": "zapdos",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 145,
    "species": "zapdos-galar",
    "type1": "fighting",
    "type2": "flying"
  },
  {
    "dex": 146,
    "species": "moltres",
    "type1": "fire",
    "type2": "flying"
  },
  {
    "dex": 146,
    "species": "moltres-galar",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 147,
    "species": "dratini",
    "type1": "dragon"
  },
  {
    "dex": 148,
    "species": "dragonair",
    "type1": "dragon"
  },
  {
    "dex": 149,
    "species": "dragonite",
    "type1": "dragon",
    "type2": "flying"
  },
  {
    "dex": 150,
    "species": "mewtwo",
    "type1": "psychic"
  },
  {
    "dex": 151,
    "species": "mew",
    "type1": "psychic"
  },
  {
    "dex": 152,
    "species": "chikorita",
    "type1": "grass"
  },
  {
    "dex": 153,
    "species": "bayleef",
    "type1": "grass"
  },
  {
    "dex": 154,
    "species": "meganium",
    "type1": "grass"
  },
  {
    "dex": 155,
    "species": "cyndaquil",
    "type1": "fire"
  },
  {
    "dex": 156,
    "species": "quilava",
    "type1": "fire"
  },
  {
    "dex": 157,
    "species": "typhlosion",
    "type1": "fire"
  },
  {
    "dex": 157,
    "species": "typhlosion-hisui",
    "type1": "fire",
    "type2": "ghost"
  },
  {
    "dex": 158,
    "species": "totodile",
    "type1": "water"
  },
  {
    "dex": 159,
    "species": "croconaw",
    "type1": "water"
  },
  {
    "dex": 160,
    "species": "feraligatr",
    "type1": "water"
  },
  {
    "dex": 161,
    "species": "sentret",
    "type1": "normal"
  },
  {
    "dex": 162,
    "species": "furret",
    "type1": "normal"
  },
  {
    "dex": 163,
    "species": "hoothoot",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 164,
    "species": "noctowl",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 165,
    "species": "ledyba",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 166,
    "species": "ledian",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 167,
    "species": "spinarak",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 168,
    "species": "ariados",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 169,
    "species": "crobat",
    "type1": "poison",
    "type2": "flying"
  },
  {
    "dex": 170,
    "species": "chinchou",
    "type1": "water",
    "type2": "electric"
  },
  {
    "dex": 171,
    "species": "lanturn",
    "type1": "water",
    "type2": "electric"
  },
  {
    "dex": 172,
    "species": "pichu",
    "type1": "electric"
  },
  {
    "dex": 173,
    "species": "cleffa",
    "type1": "fairy"
  },
  {
    "dex": 174,
    "species": "igglybuff",
    "type1": "normal",
    "type2": "fairy"
  },
  {
    "dex": 175,
    "species": "togepi",
    "type1": "fairy"
  },
  {
    "dex": 176,
    "species": "togetic",
    "type1": "fairy",
    "type2": "flying"
  },
  {
    "dex": 177,
    "species": "natu",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 178,
    "species": "xatu",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 179,
    "species": "mareep",
    "type1": "electric"
  },
  {
    "dex": 180,
    "species": "flaaffy",
    "type1": "electric"
  },
  {
    "dex": 181,
    "species": "ampharos",
    "type1": "electric"
  },
  {
    "dex": 182,
    "species": "bellossom",
    "type1": "grass"
  },
  {
    "dex": 183,
    "species": "marill",
    "type1": "water",
    "type2": "fairy"
  },
  {
    "dex": 184,
    "species": "azumarill",
    "type1": "water",
    "type2": "fairy"
  },
  {
    "dex": 185,
    "species": "sudowoodo",
    "type1": "rock"
  },
  {
    "dex": 186,
    "species": "politoed",
    "type1": "water"
  },
  {
    "dex": 187,
    "species": "hoppip",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 188,
    "species": "skiploom",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 189,
    "species": "jumpluff",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 190,
    "species": "aipom",
    "type1": "normal"
  },
  {
    "dex": 191,
    "species": "sunkern",
    "type1": "grass"
  },
  {
    "dex": 192,
    "species": "sunflora",
    "type1": "grass"
  },
  {
    "dex": 193,
    "species": "yanma",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 194,
    "species": "wooper",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 194,
    "species": "wooper-paldea",
    "type1": "poison",
    "type2": "ground"
  },
  {
    "dex": 195,
    "species": "quagsire",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 196,
    "species": "espeon",
    "type1": "psychic"
  },
  {
    "dex": 197,
    "species": "umbreon",
    "type1": "dark"
  },
  {
    "dex": 198,
    "species": "murkrow",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 199,
    "species": "slowking",
    "type1": "water",
    "type2": "psychic"
  },
  {
    "dex": 199,
    "species": "slowking-galar",
    "type1": "poison",
    "type2": "psychic"
  },
  {
    "dex": 200,
    "species": "misdreavus",
    "type1": "ghost"
  },
  {
    "dex": 201,
    "species": "unown",
    "type1": "psychic"
  },
  {
    "dex": 202,
    "species": "wobbuffet",
    "type1": "psychic"
  },
  {
    "dex": 203,
    "species": "girafarig",
    "type1": "normal",
    "type2": "psychic"
  },
  {
    "dex": 204,
    "species": "pineco",
    "type1": "bug"
  },
  {
    "dex": 205,
    "species": "forretress",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 206,
    "species": "dunsparce",
    "type1": "normal"
  },
  {
    "dex": 207,
    "species": "gligar",
    "type1": "ground",
    "type2": "flying"
  },
  {
    "dex": 208,
    "species": "steelix",
    "type1": "steel",
    "type2": "ground"
  },
  {
    "dex": 209,
    "species": "snubbull",
    "type1": "fairy"
  },
  {
    "dex": 210,
    "species": "granbull",
    "type1": "fairy"
  },
  {
    "dex": 211,
    "species": "qwilfish",
    "type1": "water",
    "type2": "poison"
  },
  {
    "dex": 211,
    "species": "qwilfish-hisui",
    "type1": "dark",
    "type2": "poison"
  },
  {
    "dex": 212,
    "species": "scizor",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 213,
    "species": "shuckle",
    "type1": "bug",
    "type2": "rock"
  },
  {
    "dex": 214,
    "species": "heracross",
    "type1": "bug",
    "type2": "fighting"
  },
  {
    "dex": 215,
    "species": "sneasel",
    "type1": "dark",
    "type2": "ice"
  },
  {
    "dex": 215,
    "species": "sneasel-hisui",
    "type1": "fighting",
    "type2": "poison"
  },
  {
    "dex": 216,
    "species": "teddiursa",
    "type1": "normal"
  },
  {
    "dex": 217,
    "species": "ursaring",
    "type1": "normal"
  },
  {
    "dex": 218,
    "species": "slugma",
    "type1": "fire"
  },
  {
    "dex": 219,
    "species": "magcargo",
    "type1": "fire",
    "type2": "rock"
  },
  {
    "dex": 220,
    "species": "swinub",
    "type1": "ice",
    "type2": "ground"
  },
  {
    "dex": 221,
    "species": "piloswine",
    "type1": "ice",
    "type2": "ground"
  },
  {
    "dex": 222,
    "species": "corsola",
    "type1": "water",
    "type2": "rock"
  },
  {
    "dex": 222,
    "species": "corsola-galar",
    "type1": "ghost"
  },
  {
    "dex": 223,
    "species": "remoraid",
    "type1": "water"
  },
  {
    "dex": 224,
    "species": "octillery",
    "type1": "water"
  },
  {
    "dex": 225,
    "species": "delibird",
    "type1": "ice",
    "type2": "flying"
  },
  {
    "dex": 226,
    "species": "mantine",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 227,
    "species": "skarmory",
    "type1": "steel",
    "type2": "flying"
  },
  {
    "dex": 228,
    "species": "houndour",
    "type1": "dark",
    "type2": "fire"
  },
  {
    "dex": 229,
    "species": "houndoom",
    "type1": "dark",
    "type2": "fire"
  },
  {
    "dex": 230,
    "species": "kingdra",
    "type1": "water",
    "type2": "dragon"
  },
  {
    "dex": 231,
    "species": "phanpy",
    "type1": "ground"
  },
  {
    "dex": 232,
    "species": "donphan",
    "type1": "ground"
  },
  {
    "dex": 233,
    "species": "porygon2",
    "type1": "normal"
  },
  {
    "dex": 234,
    "species": "stantler",
    "type1": "normal"
  },
  {
    "dex": 235,
    "species": "smeargle",
    "type1": "normal"
  },
  {
    "dex": 236,
    "species": "tyrogue",
    "type1": "fighting"
  },
  {
    "dex": 237,
    "species": "hitmontop",
    "type1": "fighting"
  },
  {
    "dex": 238,
    "species": "smoochum",
    "type1": "ice",
    "type2": "psychic"
  },
  {
    "dex": 239,
    "species": "elekid",
    "type1": "electric"
  },
  {
    "dex": 240,
    "species": "magby",
    "type1": "fire"
  },
  {
    "dex": 241,
    "species": "miltank",
    "type1": "normal"
  },
  {
    "dex": 242,
    "species": "blissey",
    "type1": "normal"
  },
  {
    "dex": 243,
    "species": "raikou",
    "type1": "electric"
  },
  {
    "dex": 244,
    "species": "entei",
    "type1": "fire"
  },
  {
    "dex": 245,
    "species": "suicune",
    "type1": "water"
  },
  {
    "dex": 246,
    "species": "larvitar",
    "type1": "rock",
    "type2": "ground"
  },
  {
    "dex": 247,
    "species": "pupitar",
    "type1": "rock",
    "type2": "ground"
  },
  {
    "dex": 248,
    "species": "tyranitar",
    "type1": "rock",
    "type2": "dark"
  },
  {
    "dex": 249,
    "species": "lugia",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 250,
    "species": "ho-oh",
    "type1": "fire",
    "type2": "flying"
  },
  {
    "dex": 251,
    "species": "celebi",
    "type1": "psychic",
    "type2": "grass"
  },
  {
    "dex": 252,
    "species": "treecko",
    "type1": "grass"
  },
  {
    "dex": 253,
    "species": "grovyle",
    "type1": "grass"
  },
  {
    "dex": 254,
    "species": "sceptile",
    "type1": "grass"
  },
  {
    "dex": 255,
    "species": "torchic",
    "type1": "fire"
  },
  {
    "dex": 256,
    "species": "combusken",
    "type1": "fire",
    "type2": "fighting"
  },
  {
    "dex": 257,
    "species": "blaziken",
    "type1": "fire",
    "type2": "fighting"
  },
  {
    "dex": 258,
    "species": "mudkip",
    "type1": "water"
  },
  {
    "dex": 259,
    "species": "marshtomp",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 260,
    "species": "swampert",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 261,
    "species": "poochyena",
    "type1": "dark"
  },
  {
    "dex": 262,
    "species": "mightyena",
    "type1": "dark"
  },
  {
    "dex": 263,
    "species": "zigzagoon",
    "type1": "normal"
  },
  {
    "dex": 263,
    "species": "zigzagoon-galar",
    "type1": "dark",
    "type2": "normal"
  },
  {
    "dex": 264,
    "species": "linoone",
    "type1": "normal"
  },
  {
    "dex": 264,
    "species": "linoone-galar",
    "type1": "dark",
    "type2": "normal"
  },
  {
    "dex": 265,
    "species": "wurmple",
    "type1": "bug"
  },
  {
    "dex": 266,
    "species": "silcoon",
    "type1": "bug"
  },
  {
    "dex": 267,
    "species": "beautifly",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 268,
    "species": "cascoon",
    "type1": "bug"
  },
  {
    "dex": 269,
    "species": "dustox",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 270,
    "species": "lotad",
    "type1": "water",
    "type2": "grass"
  },
  {
    "dex": 271,
    "species": "lombre",
    "type1": "water",
    "type2": "grass"
  },
  {
    "dex": 272,
    "species": "ludicolo",
    "type1": "water",
    "type2": "grass"
  },
  {
    "dex": 273,
    "species": "seedot",
    "type1": "grass"
  },
  {
    "dex": 274,
    "species": "nuzleaf",
    "type1": "grass",
    "type2": "dark"
  },
  {
    "dex": 275,
    "species": "shiftry",
    "type1": "grass",
    "type2": "dark"
  },
  {
    "dex": 276,
    "species": "taillow",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 277,
    "species": "swellow",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 278,
    "species": "wingull",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 279,
    "species": "pelipper",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 280,
    "species": "ralts",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 281,
    "species": "kirlia",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 282,
    "species": "gardevoir",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 283,
    "species": "surskit",
    "type1": "bug",
    "type2": "water"
  },
  {
    "dex": 284,
    "species": "masquerain",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 285,
    "species": "shroomish",
    "type1": "grass"
  },
  {
    "dex": 286,
    "species": "breloom",
    "type1": "grass",
    "type2": "fighting"
  },
  {
    "dex": 287,
    "species": "slakoth",
    "type1": "normal"
  },
  {
    "dex": 288,
    "species": "vigoroth",
    "type1": "normal"
  },
  {
    "dex": 289,
    "species": "slaking",
    "type1": "normal"
  },
  {
    "dex": 290,
    "species": "nincada",
    "type1": "bug",
    "type2": "ground"
  },
  {
    "dex": 291,
    "species": "ninjask",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 292,
    "species": "shedinja",
    "type1": "bug",
    "type2": "ghost"
  },
  {
    "dex": 293,
    "species": "whismur",
    "type1": "normal"
  },
  {
    "dex": 294,
    "species": "loudred",
    "type1": "normal"
  },
  {
    "dex": 295,
    "species": "exploud",
    "type1": "normal"
  },
  {
    "dex": 296,
    "species": "makuhita",
    "type1": "fighting"
  },
  {
    "dex": 297,
    "species": "hariyama",
    "type1": "fighting"
  },
  {
    "dex": 298,
    "species": "azurill",
    "type1": "normal",
    "type2": "fairy"
  },
  {
    "dex": 299,
    "species": "nosepass",
    "type1": "rock"
  },
  {
    "dex": 300,
    "species": "skitty",
    "type1": "normal"
  },
  {
    "dex": 301,
    "species": "delcatty",
    "type1": "normal"
  },
  {
    "dex": 302,
    "species": "sableye",
    "type1": "dark",
    "type2": "ghost"
  },
  {
    "dex": 303,
    "species": "mawile",
    "type1": "steel",
    "type2": "fairy"
  },
  {
    "dex": 304,
    "species": "aron",
    "type1": "steel",
    "type2": "rock"
  },
  {
    "dex": 305,
    "species": "lairon",
    "type1": "steel",
    "type2": "rock"
  },
  {
    "dex": 306,
    "species": "aggron",
    "type1": "steel",
    "type2": "rock"
  },
  {
    "dex": 307,
    "species": "meditite",
    "type1": "fighting",
    "type2": "psychic"
  },
  {
    "dex": 308,
    "species": "medicham",
    "type1": "fighting",
    "type2": "psychic"
  },
  {
    "dex": 309,
    "species": "electrike",
    "type1": "electric"
  },
  {
    "dex": 310,
    "species": "manectric",
    "type1": "electric"
  },
  {
    "dex": 311,
    "species": "plusle",
    "type1": "electric"
  },
  {
    "dex": 312,
    "species": "minun",
    "type1": "electric"
  },
  {
    "dex": 313,
    "species": "volbeat",
    "type1": "bug"
  },
  {
    "dex": 314,
    "species": "illumise",
    "type1": "bug"
  },
  {
    "dex": 315,
    "species": "roselia",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 316,
    "species": "gulpin",
    "type1": "poison"
  },
  {
    "dex": 317,
    "species": "swalot",
    "type1": "poison"
  },
  {
    "dex": 318,
    "species": "carvanha",
    "type1": "water",
    "type2": "dark"
  },
  {
    "dex": 319,
    "species": "sharpedo",
    "type1": "water",
    "type2": "dark"
  },
  {
    "dex": 320,
    "species": "wailmer",
    "type1": "water"
  },
  {
    "dex": 321,
    "species": "wailord",
    "type1": "water"
  },
  {
    "dex": 322,
    "species": "numel",
    "type1": "fire",
    "type2": "ground"
  },
  {
    "dex": 323,
    "species": "camerupt",
    "type1": "fire",
    "type2": "ground"
  },
  {
    "dex": 324,
    "species": "torkoal",
    "type1": "fire"
  },
  {
    "dex": 325,
    "species": "spoink",
    "type1": "psychic"
  },
  {
    "dex": 326,
    "species": "grumpig",
    "type1": "psychic"
  },
  {
    "dex": 327,
    "species": "spinda",
    "type1": "normal"
  },
  {
    "dex": 328,
    "species": "trapinch",
    "type1": "ground"
  },
  {
    "dex": 329,
    "species": "vibrava",
    "type1": "ground",
    "type2": "dragon"
  },
  {
    "dex": 330,
    "species": "flygon",
    "type1": "ground",
    "type2": "dragon"
  },
  {
    "dex": 331,
    "species": "cacnea",
    "type1": "grass"
  },
  {
    "dex": 332,
    "species": "cacturne",
    "type1": "grass",
    "type2": "dark"
  },
  {
    "dex": 333,
    "species": "swablu",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 334,
    "species": "altaria",
    "type1": "dragon",
    "type2": "flying"
  },
  {
    "dex": 335,
    "species": "zangoose",
    "type1": "normal"
  },
  {
    "dex": 336,
    "species": "seviper",
    "type1": "poison"
  },
  {
    "dex": 337,
    "species": "lunatone",
    "type1": "rock",
    "type2": "psychic"
  },
  {
    "dex": 338,
    "species": "solrock",
    "type1": "rock",
    "type2": "psychic"
  },
  {
    "dex": 339,
    "species": "barboach",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 340,
    "species": "whiscash",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 341,
    "species": "corphish",
    "type1": "water"
  },
  {
    "dex": 342,
    "species": "crawdaunt",
    "type1": "water",
    "type2": "dark"
  },
  {
    "dex": 343,
    "species": "baltoy",
    "type1": "ground",
    "type2": "psychic"
  },
  {
    "dex": 344,
    "species": "claydol",
    "type1": "ground",
    "type2": "psychic"
  },
  {
    "dex": 345,
    "species": "lileep",
    "type1": "rock",
    "type2": "grass"
  },
  {
    "dex": 346,
    "species": "cradily",
    "type1": "rock",
    "type2": "grass"
  },
  {
    "dex": 347,
    "species": "anorith",
    "type1": "rock",
    "type2": "bug"
  },
  {
    "dex": 348,
    "species": "armaldo",
    "type1": "rock",
    "type2": "bug"
  },
  {
    "dex": 349,
    "species": "feebas",
    "type1": "water"
  },
  {
    "dex": 350,
    "species": "milotic",
    "type1": "water"
  },
  {
    "dex": 351,
    "species": "castform",
    "type1": "normal"
  },
  {
    "dex": 351,
    "species": "castform-sunny",
    "type1": "fire"
  },
  {
    "dex": 351,
    "species": "castform-rainy",
    "type1": "water"
  },
  {
    "dex": 351,
    "species": "castform-snowy",
    "type1": "ice"
  },
  {
    "dex": 352,
    "species": "kecleon",
    "type1": "normal"
  },
  {
    "dex": 353,
    "species": "shuppet",
    "type1": "ghost"
  },
  {
    "dex": 354,
    "species": "banette",
    "type1": "ghost"
  },
  {
    "dex": 355,
    "species": "duskull",
    "type1": "ghost"
  },
  {
    "dex": 356,
    "species": "dusclops",
    "type1": "ghost"
  },
  {
    "dex": 357,
    "species": "tropius",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 358,
    "species": "chimecho",
    "type1": "psychic"
  },
  {
    "dex": 359,
    "species": "absol",
    "type1": "dark"
  },
  {
    "dex": 360,
    "species": "wynaut",
    "type1": "psychic"
  },
  {
    "dex": 361,
    "species": "snorunt",
    "type1": "ice"
  },
  {
    "dex": 362,
    "species": "glalie",
    "type1": "ice"
  },
  {
    "dex": 363,
    "species": "spheal",
    "type1": "ice",
    "type2": "water"
  },
  {
    "dex": 364,
    "species": "sealeo",
    "type1": "ice",
    "type2": "water"
  },
  {
    "dex": 365,
    "species": "walrein",
    "type1": "ice",
    "type2": "water"
  },
  {
    "dex": 366,
    "species": "clamperl",
    "type1": "water"
  },
  {
    "dex": 367,
    "species": "huntail",
    "type1": "water"
  },
  {
    "dex": 368,
    "species": "gorebyss",
    "type1": "water"
  },
  {
    "dex": 369,
    "species": "relicanth",
    "type1": "water",
    "type2": "rock"
  },
  {
    "dex": 370,
    "species": "luvdisc",
    "type1": "water"
  },
  {
    "dex": 371,
    "species": "bagon",
    "type1": "dragon"
  },
  {
    "dex": 372,
    "species": "shelgon",
    "type1": "dragon"
  },
  {
    "dex": 373,
    "species": "salamence",
    "type1": "dragon",
    "type2": "flying"
  },
  {
    "dex": 374,
    "species": "beldum",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 375,
    "species": "metang",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 376,
    "species": "metagross",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 377,
    "species": "regirock",
    "type1": "rock"
  },
  {
    "dex": 378,
    "species": "regice",
    "type1": "ice"
  },
  {
    "dex": 379,
    "species": "registeel",
    "type1": "steel"
  },
  {
    "dex": 380,
    "species": "latias",
    "type1": "dragon",
    "type2": "psychic"
  },
  {
    "dex": 381,
    "species": "latios",
    "type1": "dragon",
    "type2": "psychic"
  },
  {
    "dex": 382,
    "species": "kyogre",
    "type1": "water"
  },
  {
    "dex": 383,
    "species": "groudon",
    "type1": "ground"
  },
  {
    "dex": 384,
    "species": "rayquaza",
    "type1": "dragon",
    "type2": "flying"
  },
  {
    "dex": 385,
    "species": "jirachi",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 386,
    "species": "deoxys",
    "type1": "psychic"
  },
  {
    "dex": 386,
    "species": "deoxys-attack",
    "type1": "psychic"
  },
  {
    "dex": 386,
    "species": "deoxys-defense",
    "type1": "psychic"
  },
  {
    "dex": 386,
    "species": "deoxys-speed",
    "type1": "psychic"
  },
  {
    "dex": 387,
    "species": "turtwig",
    "type1": "grass"
  },
  {
    "dex": 388,
    "species": "grotle",
    "type1": "grass"
  },
  {
    "dex": 389,
    "species": "torterra",
    "type1": "grass",
    "type2": "ground"
  },
  {
    "dex": 390,
    "species": "chimchar",
    "type1": "fire"
  },
  {
    "dex": 391,
    "species": "monferno",
    "type1": "fire",
    "type2": "fighting"
  },
  {
    "dex": 392,
    "species": "infernape",
    "type1": "fire",
    "type2": "fighting"
  },
  {
    "dex": 393,
    "species": "piplup",
    "type1": "water"
  },
  {
    "dex": 394,
    "species": "prinplup",
    "type1": "water"
  },
  {
    "dex": 395,
    "species": "empoleon",
    "type1": "water",
    "type2": "steel"
  },
  {
    "dex": 396,
    "species": "starly",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 397,
    "species": "staravia",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 398,
    "species": "staraptor",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 399,
    "species": "bidoof",
    "type1": "normal"
  },
  {
    "dex": 400,
    "species": "bibarel",
    "type1": "normal",
    "type2": "water"
  },
  {
    "dex": 401,
    "species": "kricketot",
    "type1": "bug"
  },
  {
    "dex": 402,
    "species": "kricketune",
    "type1": "bug"
  },
  {
    "dex": 403,
    "species": "shinx",
    "type1": "electric"
  },
  {
    "dex": 404,
    "species": "luxio",
    "type1": "electric"
  },
  {
    "dex": 405,
    "species": "luxray",
    "type1": "electric"
  },
  {
    "dex": 406,
    "species": "budew",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 407,
    "species": "roserade",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 408,
    "species": "cranidos",
    "type1": "rock"
  },
  {
    "dex": 409,
    "species": "rampardos",
    "type1": "rock"
  },
  {
    "dex": 410,
    "species": "shieldon",
    "type1": "rock",
    "type2": "steel"
  },
  {
    "dex": 411,
    "species": "bastiodon",
    "type1": "rock",
    "type2": "steel"
  },
  {
    "dex": 412,
    "species": "burmy",
    "type1": "bug"
  },
  {
    "dex": 412,
    "species": "burmy-sandy",
    "type1": "bug"
  },
  {
    "dex": 412,
    "species": "burmy-trash",
    "type1": "bug"
  },
  {
    "dex": 413,
    "species": "wormadam",
    "type1": "bug",
    "type2": "grass"
  },
  {
    "dex": 413,
    "species": "wormadam-sandy",
    "type1": "bug",
    "type2": "ground"
  },
  {
    "dex": 413,
    "species": "wormadam-trash",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 414,
    "species": "mothim",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 415,
    "species": "combee",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 416,
    "species": "vespiquen",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 417,
    "species": "pachirisu",
    "type1": "electric"
  },
  {
    "dex": 418,
    "species": "buizel",
    "type1": "water"
  },
  {
    "dex": 419,
    "species": "floatzel",
    "type1": "water"
  },
  {
    "dex": 420,
    "species": "cherubi",
    "type1": "grass"
  },
  {
    "dex": 421,
    "species": "cherrim",
    "type1": "grass"
  },
  {
    "dex": 421,
    "species": "cherrim-sunshine",
    "type1": "grass"
  },
  {
    "dex": 422,
    "species": "shellos",
    "type1": "water"
  },
  {
    "dex": 422,
    "species": "shellos-east",
    "type1": "water"
  },
  {
    "dex": 423,
    "species": "gastrodon",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 423,
    "species": "gastrodon-east",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 424,
    "species": "ambipom",
    "type1": "normal"
  },
  {
    "dex": 425,
    "species": "drifloon",
    "type1": "ghost",
    "type2": "flying"
  },
  {
    "dex": 426,
    "species": "drifblim",
    "type1": "ghost",
    "type2": "flying"
  },
  {
    "dex": 427,
    "species": "buneary",
    "type1": "normal"
  },
  {
    "dex": 428,
    "species": "lopunny",
    "type1": "normal"
  },
  {
    "dex": 429,
    "species": "mismagius",
    "type1": "ghost"
  },
  {
    "dex": 430,
    "species": "honchkrow",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 431,
    "species": "glameow",
    "type1": "normal"
  },
  {
    "dex": 432,
    "species": "purugly",
    "type1": "normal"
  },
  {
    "dex": 433,
    "species": "chingling",
    "type1": "psychic"
  },
  {
    "dex": 434,
    "species": "stunky",
    "type1": "poison",
    "type2": "dark"
  },
  {
    "dex": 435,
    "species": "skuntank",
    "type1": "poison",
    "type2": "dark"
  },
  {
    "dex": 436,
    "species": "bronzor",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 437,
    "species": "bronzong",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 438,
    "species": "bonsly",
    "type1": "rock"
  },
  {
    "dex": 439,
    "species": "mime jr.",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 440,
    "species": "happiny",
    "type1": "normal"
  },
  {
    "dex": 441,
    "species": "chatot",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 442,
    "species": "spiritomb",
    "type1": "ghost",
    "type2": "dark"
  },
  {
    "dex": 443,
    "species": "gible",
    "type1": "dragon",
    "type2": "ground"
  },
  {
    "dex": 444,
    "species": "gabite",
    "type1": "dragon",
    "type2": "ground"
  },
  {
    "dex": 445,
    "species": "garchomp",
    "type1": "dragon",
    "type2": "ground"
  },
  {
    "dex": 446,
    "species": "munchlax",
    "type1": "normal"
  },
  {
    "dex": 447,
    "species": "riolu",
    "type1": "fighting"
  },
  {
    "dex": 448,
    "species": "lucario",
    "type1": "fighting",
    "type2": "steel"
  },
  {
    "dex": 449,
    "species": "hippopotas",
    "type1": "ground"
  },
  {
    "dex": 450,
    "species": "hippowdon",
    "type1": "ground"
  },
  {
    "dex": 451,
    "species": "skorupi",
    "type1": "poison",
    "type2": "bug"
  },
  {
    "dex": 452,
    "species": "drapion",
    "type1": "poison",
    "type2": "dark"
  },
  {
    "dex": 453,
    "species": "croagunk",
    "type1": "poison",
    "type2": "fighting"
  },
  {
    "dex": 454,
    "species": "toxicroak",
    "type1": "poison",
    "type2": "fighting"
  },
  {
    "dex": 455,
    "species": "carnivine",
    "type1": "grass"
  },
  {
    "dex": 456,
    "species": "finneon",
    "type1": "water"
  },
  {
    "dex": 457,
    "species": "lumineon",
    "type1": "water"
  },
  {
    "dex": 458,
    "species": "mantyke",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 459,
    "species": "snover",
    "type1": "grass",
    "type2": "ice"
  },
  {
    "dex": 460,
    "species": "abomasnow",
    "type1": "grass",
    "type2": "ice"
  },
  {
    "dex": 461,
    "species": "weavile",
    "type1": "dark",
    "type2": "ice"
  },
  {
    "dex": 462,
    "species": "magnezone",
    "type1": "electric",
    "type2": "steel"
  },
  {
    "dex": 463,
    "species": "lickilicky",
    "type1": "normal"
  },
  {
    "dex": 464,
    "species": "rhyperior",
    "type1": "ground",
    "type2": "rock"
  },
  {
    "dex": 465,
    "species": "tangrowth",
    "type1": "grass"
  },
  {
    "dex": 466,
    "species": "electivire",
    "type1": "electric"
  },
  {
    "dex": 467,
    "species": "magmortar",
    "type1": "fire"
  },
  {
    "dex": 468,
    "species": "togekiss",
    "type1": "fairy",
    "type2": "flying"
  },
  {
    "dex": 469,
    "species": "yanmega",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 470,
    "species": "leafeon",
    "type1": "grass"
  },
  {
    "dex": 471,
    "species": "glaceon",
    "type1": "ice"
  },
  {
    "dex": 472,
    "species": "gliscor",
    "type1": "ground",
    "type2": "flying"
  },
  {
    "dex": 473,
    "species": "mamoswine",
    "type1": "ice",
    "type2": "ground"
  },
  {
    "dex": 474,
    "species": "porygon-z",
    "type1": "normal"
  },
  {
    "dex": 475,
    "species": "gallade",
    "type1": "psychic",
    "type2": "fighting"
  },
  {
    "dex": 476,
    "species": "probopass",
    "type1": "rock",
    "type2": "steel"
  },
  {
    "dex": 477,
    "species": "dusknoir",
    "type1": "ghost"
  },
  {
    "dex": 478,
    "species": "froslass",
    "type1": "ice",
    "type2": "ghost"
  },
  {
    "dex": 479,
    "species": "rotom",
    "type1": "electric",
    "type2": "ghost"
  },
  {
    "dex": 479,
    "species": "rotom-heat",
    "type1": "electric",
    "type2": "fire"
  },
  {
    "dex": 479,
    "species": "rotom-wash",
    "type1": "electric",
    "type2": "water"
  },
  {
    "dex": 479,
    "species": "rotom-frost",
    "type1": "electric",
    "type2": "ice"
  },
  {
    "dex": 479,
    "species": "rotom-fan",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 479,
    "species": "rotom-mow",
    "type1": "electric",
    "type2": "grass"
  },
  {
    "dex": 480,
    "species": "uxie",
    "type1": "psychic"
  },
  {
    "dex": 481,
    "species": "mesprit",
    "type1": "psychic"
  },
  {
    "dex": 482,
    "species": "azelf",
    "type1": "psychic"
  },
  {
    "dex": 483,
    "species": "dialga",
    "type1": "steel",
    "type2": "dragon"
  },
  {
    "dex": 483,
    "species": "dialga-origin",
    "type1": "steel",
    "type2": "dragon"
  },
  {
    "dex": 484,
    "species": "palkia",
    "type1": "water",
    "type2": "dragon"
  },
  {
    "dex": 484,
    "species": "palkia-origin",
    "type1": "water",
    "type2": "dragon"
  },
  {
    "dex": 485,
    "species": "heatran",
    "type1": "fire",
    "type2": "steel"
  },
  {
    "dex": 486,
    "species": "regigigas",
    "type1": "normal"
  },
  {
    "dex": 487,
    "species": "giratina",
    "type1": "ghost",
    "type2": "dragon"
  },
  {
    "dex": 487,
    "species": "giratina-origin",
    "type1": "ghost",
    "type2": "dragon"
  },
  {
    "dex": 488,
    "species": "cresselia",
    "type1": "psychic"
  },
  {
    "dex": 489,
    "species": "phione",
    "type1": "water"
  },
  {
    "dex": 490,
    "species": "manaphy",
    "type1": "water"
  },
  {
    "dex": 491,
    "species": "darkrai",
    "type1": "dark"
  },
  {
    "dex": 492,
    "species": "shaymin",
    "type1": "grass"
  },
  {
    "dex": 492,
    "species": "shaymin-sky",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 493,
    "species": "arceus",
    "type1": "normal"
  },
  {
    "dex": 494,
    "species": "victini",
    "type1": "psychic",
    "type2": "fire"
  },
  {
    "dex": 495,
    "species": "snivy",
    "type1": "grass"
  },
  {
    "dex": 496,
    "species": "servine",
    "type1": "grass"
  },
  {
    "dex": 497,
    "species": "serperior",
    "type1": "grass"
  },
  {
    "dex": 498,
    "species": "tepig",
    "type1": "fire"
  },
  {
    "dex": 499,
    "species": "pignite",
    "type1": "fire",
    "type2": "fighting"
  },
  {
    "dex": 500,
    "species": "emboar",
    "type1": "fire",
    "type2": "fighting"
  },
  {
    "dex": 501,
    "species": "oshawott",
    "type1": "water"
  },
  {
    "dex": 502,
    "species": "dewott",
    "type1": "water"
  },
  {
    "dex": 503,
    "species": "samurott",
    "type1": "water"
  },
  {
    "dex": 503,
    "species": "samurott-hisui",
    "type1": "water",
    "type2": "dark"
  },
  {
    "dex": 504,
    "species": "patrat",
    "type1": "normal"
  },
  {
    "dex": 505,
    "species": "watchog",
    "type1": "normal"
  },
  {
    "dex": 506,
    "species": "lillipup",
    "type1": "normal"
  },
  {
    "dex": 507,
    "species": "herdier",
    "type1": "normal"
  },
  {
    "dex": 508,
    "species": "stoutland",
    "type1": "normal"
  },
  {
    "dex": 509,
    "species": "purrloin",
    "type1": "dark"
  },
  {
    "dex": 510,
    "species": "liepard",
    "type1": "dark"
  },
  {
    "dex": 511,
    "species": "pansage",
    "type1": "grass"
  },
  {
    "dex": 512,
    "species": "simisage",
    "type1": "grass"
  },
  {
    "dex": 513,
    "species": "pansear",
    "type1": "fire"
  },
  {
    "dex": 514,
    "species": "simisear",
    "type1": "fire"
  },
  {
    "dex": 515,
    "species": "panpour",
    "type1": "water"
  },
  {
    "dex": 516,
    "species": "simipour",
    "type1": "water"
  },
  {
    "dex": 517,
    "species": "munna",
    "type1": "psychic"
  },
  {
    "dex": 518,
    "species": "musharna",
    "type1": "psychic"
  },
  {
    "dex": 519,
    "species": "pidove",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 520,
    "species": "tranquill",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 521,
    "species": "unfezant",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 522,
    "species": "blitzle",
    "type1": "electric"
  },
  {
    "dex": 523,
    "species": "zebstrika",
    "type1": "electric"
  },
  {
    "dex": 524,
    "species": "roggenrola",
    "type1": "rock"
  },
  {
    "dex": 525,
    "species": "boldore",
    "type1": "rock"
  },
  {
    "dex": 526,
    "species": "gigalith",
    "type1": "rock"
  },
  {
    "dex": 527,
    "species": "woobat",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 528,
    "species": "swoobat",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 529,
    "species": "drilbur",
    "type1": "ground"
  },
  {
    "dex": 530,
    "species": "excadrill",
    "type1": "ground",
    "type2": "steel"
  },
  {
    "dex": 531,
    "species": "audino",
    "type1": "normal"
  },
  {
    "dex": 532,
    "species": "timburr",
    "type1": "fighting"
  },
  {
    "dex": 533,
    "species": "gurdurr",
    "type1": "fighting"
  },
  {
    "dex": 534,
    "species": "conkeldurr",
    "type1": "fighting"
  },
  {
    "dex": 535,
    "species": "tympole",
    "type1": "water"
  },
  {
    "dex": 536,
    "species": "palpitoad",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 537,
    "species": "seismitoad",
    "type1": "water",
    "type2": "ground"
  },
  {
    "dex": 538,
    "species": "throh",
    "type1": "fighting"
  },
  {
    "dex": 539,
    "species": "sawk",
    "type1": "fighting"
  },
  {
    "dex": 540,
    "species": "sewaddle",
    "type1": "bug",
    "type2": "grass"
  },
  {
    "dex": 541,
    "species": "swadloon",
    "type1": "bug",
    "type2": "grass"
  },
  {
    "dex": 542,
    "species": "leavanny",
    "type1": "bug",
    "type2": "grass"
  },
  {
    "dex": 543,
    "species": "venipede",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 544,
    "species": "whirlipede",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 545,
    "species": "scolipede",
    "type1": "bug",
    "type2": "poison"
  },
  {
    "dex": 546,
    "species": "cottonee",
    "type1": "grass",
    "type2": "fairy"
  },
  {
    "dex": 547,
    "species": "whimsicott",
    "type1": "grass",
    "type2": "fairy"
  },
  {
    "dex": 548,
    "species": "petilil",
    "type1": "grass"
  },
  {
    "dex": 549,
    "species": "lilligant",
    "type1": "grass"
  },
  {
    "dex": 549,
    "species": "lilligant-hisui",
    "type1": "grass",
    "type2": "fighting"
  },
  {
    "dex": 550,
    "species": "basculin",
    "type1": "water"
  },
  {
    "dex": 550,
    "species": "basculin-blue-striped",
    "type1": "water"
  },
  {
    "dex": 550,
    "species": "basculin-white-striped",
    "type1": "water"
  },
  {
    "dex": 551,
    "species": "sandile",
    "type1": "ground",
    "type2": "dark"
  },
  {
    "dex": 552,
    "species": "krokorok",
    "type1": "ground",
    "type2": "dark"
  },
  {
    "dex": 553,
    "species": "krookodile",
    "type1": "ground",
    "type2": "dark"
  },
  {
    "dex": 554,
    "species": "darumaka",
    "type1": "fire"
  },
  {
    "dex": 554,
    "species": "darumaka-galar",
    "type1": "ice"
  },
  {
    "dex": 555,
    "species": "darmanitan",
    "type1": "fire"
  },
  {
    "dex": 555,
    "species": "darmanitan-zen",
    "type1": "fire",
    "type2": "psychic"
  },
  {
    "dex": 555,
    "species": "darmanitan-galar",
    "type1": "ice"
  },
  {
    "dex": 555,
    "species": "darmanitan-zen",
    "type1": "ice",
    "type2": "fire"
  },
  {
    "dex": 556,
    "species": "maractus",
    "type1": "grass"
  },
  {
    "dex": 557,
    "species": "dwebble",
    "type1": "bug",
    "type2": "rock"
  },
  {
    "dex": 558,
    "species": "crustle",
    "type1": "bug",
    "type2": "rock"
  },
  {
    "dex": 559,
    "species": "scraggy",
    "type1": "dark",
    "type2": "fighting"
  },
  {
    "dex": 560,
    "species": "scrafty",
    "type1": "dark",
    "type2": "fighting"
  },
  {
    "dex": 561,
    "species": "sigilyph",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 562,
    "species": "yamask",
    "type1": "ghost"
  },
  {
    "dex": 562,
    "species": "yamask-galar",
    "type1": "ground",
    "type2": "ghost"
  },
  {
    "dex": 563,
    "species": "cofagrigus",
    "type1": "ghost"
  },
  {
    "dex": 564,
    "species": "tirtouga",
    "type1": "water",
    "type2": "rock"
  },
  {
    "dex": 565,
    "species": "carracosta",
    "type1": "water",
    "type2": "rock"
  },
  {
    "dex": 566,
    "species": "archen",
    "type1": "rock",
    "type2": "flying"
  },
  {
    "dex": 567,
    "species": "archeops",
    "type1": "rock",
    "type2": "flying"
  },
  {
    "dex": 568,
    "species": "trubbish",
    "type1": "poison"
  },
  {
    "dex": 569,
    "species": "garbodor",
    "type1": "poison"
  },
  {
    "dex": 570,
    "species": "zorua",
    "type1": "dark"
  },
  {
    "dex": 570,
    "species": "zorua-hisui",
    "type1": "normal",
    "type2": "ghost"
  },
  {
    "dex": 571,
    "species": "zoroark",
    "type1": "dark"
  },
  {
    "dex": 571,
    "species": "zoroark-hisui",
    "type1": "normal",
    "type2": "ghost"
  },
  {
    "dex": 572,
    "species": "minccino",
    "type1": "normal"
  },
  {
    "dex": 573,
    "species": "cinccino",
    "type1": "normal"
  },
  {
    "dex": 574,
    "species": "gothita",
    "type1": "psychic"
  },
  {
    "dex": 575,
    "species": "gothorita",
    "type1": "psychic"
  },
  {
    "dex": 576,
    "species": "gothitelle",
    "type1": "psychic"
  },
  {
    "dex": 577,
    "species": "solosis",
    "type1": "psychic"
  },
  {
    "dex": 578,
    "species": "duosion",
    "type1": "psychic"
  },
  {
    "dex": 579,
    "species": "reuniclus",
    "type1": "psychic"
  },
  {
    "dex": 580,
    "species": "ducklett",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 581,
    "species": "swanna",
    "type1": "water",
    "type2": "flying"
  },
  {
    "dex": 582,
    "species": "vanillite",
    "type1": "ice"
  },
  {
    "dex": 583,
    "species": "vanillish",
    "type1": "ice"
  },
  {
    "dex": 584,
    "species": "vanilluxe",
    "type1": "ice"
  },
  {
    "dex": 585,
    "species": "deerling",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 585,
    "species": "deerling-summer",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 585,
    "species": "deerling-autumn",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 585,
    "species": "deerling-winter",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 586,
    "species": "sawsbuck",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 586,
    "species": "sawsbuck-summer",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 586,
    "species": "sawsbuck-autumn",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 586,
    "species": "sawsbuck-winter",
    "type1": "normal",
    "type2": "grass"
  },
  {
    "dex": 587,
    "species": "emolga",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 588,
    "species": "karrablast",
    "type1": "bug"
  },
  {
    "dex": 589,
    "species": "escavalier",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 590,
    "species": "foongus",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 591,
    "species": "amoonguss",
    "type1": "grass",
    "type2": "poison"
  },
  {
    "dex": 592,
    "species": "frillish",
    "type1": "water",
    "type2": "ghost"
  },
  {
    "dex": 593,
    "species": "jellicent",
    "type1": "water",
    "type2": "ghost"
  },
  {
    "dex": 594,
    "species": "alomomola",
    "type1": "water"
  },
  {
    "dex": 595,
    "species": "joltik",
    "type1": "bug",
    "type2": "electric"
  },
  {
    "dex": 596,
    "species": "galvantula",
    "type1": "bug",
    "type2": "electric"
  },
  {
    "dex": 597,
    "species": "ferroseed",
    "type1": "grass",
    "type2": "steel"
  },
  {
    "dex": 598,
    "species": "ferrothorn",
    "type1": "grass",
    "type2": "steel"
  },
  {
    "dex": 599,
    "species": "klink",
    "type1": "steel"
  },
  {
    "dex": 600,
    "species": "klang",
    "type1": "steel"
  },
  {
    "dex": 601,
    "species": "klinklang",
    "type1": "steel"
  },
  {
    "dex": 602,
    "species": "tynamo",
    "type1": "electric"
  },
  {
    "dex": 603,
    "species": "eelektrik",
    "type1": "electric"
  },
  {
    "dex": 604,
    "species": "eelektross",
    "type1": "electric"
  },
  {
    "dex": 605,
    "species": "elgyem",
    "type1": "psychic"
  },
  {
    "dex": 606,
    "species": "beheeyem",
    "type1": "psychic"
  },
  {
    "dex": 607,
    "species": "litwick",
    "type1": "ghost",
    "type2": "fire"
  },
  {
    "dex": 608,
    "species": "lampent",
    "type1": "ghost",
    "type2": "fire"
  },
  {
    "dex": 609,
    "species": "chandelure",
    "type1": "ghost",
    "type2": "fire"
  },
  {
    "dex": 610,
    "species": "axew",
    "type1": "dragon"
  },
  {
    "dex": 611,
    "species": "fraxure",
    "type1": "dragon"
  },
  {
    "dex": 612,
    "species": "haxorus",
    "type1": "dragon"
  },
  {
    "dex": 613,
    "species": "cubchoo",
    "type1": "ice"
  },
  {
    "dex": 614,
    "species": "beartic",
    "type1": "ice"
  },
  {
    "dex": 615,
    "species": "cryogonal",
    "type1": "ice"
  },
  {
    "dex": 616,
    "species": "shelmet",
    "type1": "bug"
  },
  {
    "dex": 617,
    "species": "accelgor",
    "type1": "bug"
  },
  {
    "dex": 618,
    "species": "stunfisk",
    "type1": "ground",
    "type2": "electric"
  },
  {
    "dex": 618,
    "species": "stunfisk-galar",
    "type1": "ground",
    "type2": "steel"
  },
  {
    "dex": 619,
    "species": "mienfoo",
    "type1": "fighting"
  },
  {
    "dex": 620,
    "species": "mienshao",
    "type1": "fighting"
  },
  {
    "dex": 621,
    "species": "druddigon",
    "type1": "dragon"
  },
  {
    "dex": 622,
    "species": "golett",
    "type1": "ground",
    "type2": "ghost"
  },
  {
    "dex": 623,
    "species": "golurk",
    "type1": "ground",
    "type2": "ghost"
  },
  {
    "dex": 624,
    "species": "pawniard",
    "type1": "dark",
    "type2": "steel"
  },
  {
    "dex": 625,
    "species": "bisharp",
    "type1": "dark",
    "type2": "steel"
  },
  {
    "dex": 626,
    "species": "bouffalant",
    "type1": "normal"
  },
  {
    "dex": 627,
    "species": "rufflet",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 628,
    "species": "braviary",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 628,
    "species": "braviary-hisui",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 629,
    "species": "vullaby",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 630,
    "species": "mandibuzz",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 631,
    "species": "heatmor",
    "type1": "fire"
  },
  {
    "dex": 632,
    "species": "durant",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 633,
    "species": "deino",
    "type1": "dark",
    "type2": "dragon"
  },
  {
    "dex": 634,
    "species": "zweilous",
    "type1": "dark",
    "type2": "dragon"
  },
  {
    "dex": 635,
    "species": "hydreigon",
    "type1": "dark",
    "type2": "dragon"
  },
  {
    "dex": 636,
    "species": "larvesta",
    "type1": "bug",
    "type2": "fire"
  },
  {
    "dex": 637,
    "species": "volcarona",
    "type1": "bug",
    "type2": "fire"
  },
  {
    "dex": 638,
    "species": "cobalion",
    "type1": "steel",
    "type2": "fighting"
  },
  {
    "dex": 639,
    "species": "terrakion",
    "type1": "rock",
    "type2": "fighting"
  },
  {
    "dex": 640,
    "species": "virizion",
    "type1": "grass",
    "type2": "fighting"
  },
  {
    "dex": 641,
    "species": "tornadus",
    "type1": "flying"
  },
  {
    "dex": 641,
    "species": "tornadus-therian",
    "type1": "flying"
  },
  {
    "dex": 642,
    "species": "thundurus",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 642,
    "species": "thundurus-therian",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 643,
    "species": "reshiram",
    "type1": "dragon",
    "type2": "fire"
  },
  {
    "dex": 644,
    "species": "zekrom",
    "type1": "dragon",
    "type2": "electric"
  },
  {
    "dex": 645,
    "species": "landorus",
    "type1": "ground",
    "type2": "flying"
  },
  {
    "dex": 645,
    "species": "landorus-therian",
    "type1": "ground",
    "type2": "flying"
  },
  {
    "dex": 646,
    "species": "kyurem",
    "type1": "dragon",
    "type2": "ice"
  },
  {
    "dex": 646,
    "species": "kyurem-white",
    "type1": "dragon",
    "type2": "ice"
  },
  {
    "dex": 646,
    "species": "kyurem-black",
    "type1": "dragon",
    "type2": "ice"
  },
  {
    "dex": 647,
    "species": "keldeo",
    "type1": "water",
    "type2": "fighting"
  },
  {
    "dex": 647,
    "species": "keldeo-resolute",
    "type1": "water",
    "type2": "fighting"
  },
  {
    "dex": 648,
    "species": "meloetta",
    "type1": "normal",
    "type2": "psychic"
  },
  {
    "dex": 648,
    "species": "meloetta-pirouette",
    "type1": "normal",
    "type2": "fighting"
  },
  {
    "dex": 649,
    "species": "genesect",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 649,
    "species": "genesect-douse",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 649,
    "species": "genesect-shock",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 649,
    "species": "genesect-burn",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 649,
    "species": "genesect-chill",
    "type1": "bug",
    "type2": "steel"
  },
  {
    "dex": 650,
    "species": "chespin",
    "type1": "grass"
  },
  {
    "dex": 651,
    "species": "quilladin",
    "type1": "grass"
  },
  {
    "dex": 652,
    "species": "chesnaught",
    "type1": "grass",
    "type2": "fighting"
  },
  {
    "dex": 653,
    "species": "fennekin",
    "type1": "fire"
  },
  {
    "dex": 654,
    "species": "braixen",
    "type1": "fire"
  },
  {
    "dex": 655,
    "species": "delphox",
    "type1": "fire",
    "type2": "psychic"
  },
  {
    "dex": 656,
    "species": "froakie",
    "type1": "water"
  },
  {
    "dex": 657,
    "species": "frogadier",
    "type1": "water"
  },
  {
    "dex": 658,
    "species": "greninja",
    "type1": "water",
    "type2": "dark"
  },
  {
    "dex": 659,
    "species": "bunnelby",
    "type1": "normal"
  },
  {
    "dex": 660,
    "species": "diggersby",
    "type1": "normal",
    "type2": "ground"
  },
  {
    "dex": 661,
    "species": "fletchling",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 662,
    "species": "fletchinder",
    "type1": "fire",
    "type2": "flying"
  },
  {
    "dex": 663,
    "species": "talonflame",
    "type1": "fire",
    "type2": "flying"
  },
  {
    "dex": 664,
    "species": "scatterbug",
    "type1": "bug"
  },
  {
    "dex": 665,
    "species": "spewpa",
    "type1": "bug"
  },
  {
    "dex": 666,
    "species": "vivillon",
    "type1": "bug",
    "type2": "flying"
  },
  {
    "dex": 667,
    "species": "litleo",
    "type1": "fire",
    "type2": "normal"
  },
  {
    "dex": 668,
    "species": "pyroar",
    "type1": "fire",
    "type2": "normal"
  },
  {
    "dex": 669,
    "species": "flab\u00e9b\u00e9-red-flower",
    "type1": "fairy"
  },
  {
    "dex": 669,
    "species": "flab\u00e9b\u00e9-yellow-flower",
    "type1": "fairy"
  },
  {
    "dex": 669,
    "species": "flab\u00e9b\u00e9-orange-flower",
    "type1": "fairy"
  },
  {
    "dex": 669,
    "species": "flab\u00e9b\u00e9-blue-flower",
    "type1": "fairy"
  },
  {
    "dex": 669,
    "species": "flab\u00e9b\u00e9-white-flower",
    "type1": "fairy"
  },
  {
    "dex": 670,
    "species": "floette-red-flower",
    "type1": "fairy"
  },
  {
    "dex": 670,
    "species": "floette-yellow-flower",
    "type1": "fairy"
  },
  {
    "dex": 670,
    "species": "floette-orange-flower",
    "type1": "fairy"
  },
  {
    "dex": 670,
    "species": "floette-blue-flower",
    "type1": "fairy"
  },
  {
    "dex": 670,
    "species": "floette-white-flower",
    "type1": "fairy"
  },
  {
    "dex": 671,
    "species": "florges-red-flower",
    "type1": "fairy"
  },
  {
    "dex": 671,
    "species": "florges-yellow-flower",
    "type1": "fairy"
  },
  {
    "dex": 671,
    "species": "florges-orange-flower",
    "type1": "fairy"
  },
  {
    "dex": 671,
    "species": "florges-blue-flower",
    "type1": "fairy"
  },
  {
    "dex": 671,
    "species": "florges-white-flower",
    "type1": "fairy"
  },
  {
    "dex": 672,
    "species": "skiddo",
    "type1": "grass"
  },
  {
    "dex": 673,
    "species": "gogoat",
    "type1": "grass"
  },
  {
    "dex": 674,
    "species": "pancham",
    "type1": "fighting"
  },
  {
    "dex": 675,
    "species": "pangoro",
    "type1": "fighting",
    "type2": "dark"
  },
  {
    "dex": 676,
    "species": "furfrou",
    "type1": "normal"
  },
  {
    "dex": 677,
    "species": "espurr",
    "type1": "psychic"
  },
  {
    "dex": 678,
    "species": "meowstic",
    "type1": "psychic"
  },
  {
    "dex": 678,
    "species": "meowstic-f",
    "type1": "psychic"
  },
  {
    "dex": 679,
    "species": "honedge",
    "type1": "steel",
    "type2": "ghost"
  },
  {
    "dex": 680,
    "species": "doublade",
    "type1": "steel",
    "type2": "ghost"
  },
  {
    "dex": 681,
    "species": "aegislash",
    "type1": "steel",
    "type2": "ghost"
  },
  {
    "dex": 681,
    "species": "aegislash-blade",
    "type1": "steel",
    "type2": "ghost"
  },
  {
    "dex": 682,
    "species": "spritzee",
    "type1": "fairy"
  },
  {
    "dex": 683,
    "species": "aromatisse",
    "type1": "fairy"
  },
  {
    "dex": 684,
    "species": "swirlix",
    "type1": "fairy"
  },
  {
    "dex": 685,
    "species": "slurpuff",
    "type1": "fairy"
  },
  {
    "dex": 686,
    "species": "inkay",
    "type1": "dark",
    "type2": "psychic"
  },
  {
    "dex": 687,
    "species": "malamar",
    "type1": "dark",
    "type2": "psychic"
  },
  {
    "dex": 688,
    "species": "binacle",
    "type1": "rock",
    "type2": "water"
  },
  {
    "dex": 689,
    "species": "barbaracle",
    "type1": "rock",
    "type2": "water"
  },
  {
    "dex": 690,
    "species": "skrelp",
    "type1": "poison",
    "type2": "water"
  },
  {
    "dex": 691,
    "species": "dragalge",
    "type1": "poison",
    "type2": "dragon"
  },
  {
    "dex": 692,
    "species": "clauncher",
    "type1": "water"
  },
  {
    "dex": 693,
    "species": "clawitzer",
    "type1": "water"
  },
  {
    "dex": 694,
    "species": "helioptile",
    "type1": "electric",
    "type2": "normal"
  },
  {
    "dex": 695,
    "species": "heliolisk",
    "type1": "electric",
    "type2": "normal"
  },
  {
    "dex": 696,
    "species": "tyrunt",
    "type1": "rock",
    "type2": "dragon"
  },
  {
    "dex": 697,
    "species": "tyrantrum",
    "type1": "rock",
    "type2": "dragon"
  },
  {
    "dex": 698,
    "species": "amaura",
    "type1": "rock",
    "type2": "ice"
  },
  {
    "dex": 699,
    "species": "aurorus",
    "type1": "rock",
    "type2": "ice"
  },
  {
    "dex": 700,
    "species": "sylveon",
    "type1": "fairy"
  },
  {
    "dex": 701,
    "species": "hawlucha",
    "type1": "fighting",
    "type2": "flying"
  },
  {
    "dex": 702,
    "species": "dedenne",
    "type1": "electric",
    "type2": "fairy"
  },
  {
    "dex": 703,
    "species": "carbink",
    "type1": "rock",
    "type2": "fairy"
  },
  {
    "dex": 704,
    "species": "goomy",
    "type1": "dragon"
  },
  {
    "dex": 705,
    "species": "sliggoo",
    "type1": "dragon"
  },
  {
    "dex": 705,
    "species": "sliggoo-hisui",
    "type1": "steel",
    "type2": "dragon"
  },
  {
    "dex": 706,
    "species": "goodra",
    "type1": "dragon"
  },
  {
    "dex": 706,
    "species": "goodra-hisui",
    "type1": "steel",
    "type2": "dragon"
  },
  {
    "dex": 707,
    "species": "klefki",
    "type1": "steel",
    "type2": "fairy"
  },
  {
    "dex": 708,
    "species": "phantump",
    "type1": "ghost",
    "type2": "grass"
  },
  {
    "dex": 709,
    "species": "trevenant",
    "type1": "ghost",
    "type2": "grass"
  },
  {
    "dex": 710,
    "species": "pumpkaboo",
    "type1": "ghost",
    "type2": "grass"
  },
  {
    "dex": 711,
    "species": "gourgeist",
    "type1": "ghost",
    "type2": "grass"
  },
  {
    "dex": 712,
    "species": "bergmite",
    "type1": "ice"
  },
  {
    "dex": 713,
    "species": "avalugg",
    "type1": "ice"
  },
  {
    "dex": 713,
    "species": "avalugg-hisui",
    "type1": "ice",
    "type2": "rock"
  },
  {
    "dex": 714,
    "species": "noibat",
    "type1": "flying",
    "type2": "dragon"
  },
  {
    "dex": 715,
    "species": "noivern",
    "type1": "flying",
    "type2": "dragon"
  },
  {
    "dex": 716,
    "species": "xerneas-neutral",
    "type1": "fairy"
  },
  {
    "dex": 716,
    "species": "xerneas",
    "type1": "fairy"
  },
  {
    "dex": 717,
    "species": "yveltal",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 718,
    "species": "zygarde-50%",
    "type1": "dragon",
    "type2": "ground"
  },
  {
    "dex": 718,
    "species": "zygarde-10%",
    "type1": "dragon",
    "type2": "ground"
  },
  {
    "dex": 718,
    "species": "zygarde-complete",
    "type1": "dragon",
    "type2": "ground"
  },
  {
    "dex": 719,
    "species": "diancie",
    "type1": "rock",
    "type2": "fairy"
  },
  {
    "dex": 720,
    "species": "hoopa",
    "type1": "psychic",
    "type2": "ghost"
  },
  {
    "dex": 720,
    "species": "hoopa-unbound",
    "type1": "psychic",
    "type2": "dark"
  },
  {
    "dex": 721,
    "species": "volcanion",
    "type1": "fire",
    "type2": "water"
  },
  {
    "dex": 722,
    "species": "rowlet",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 723,
    "species": "dartrix",
    "type1": "grass",
    "type2": "flying"
  },
  {
    "dex": 724,
    "species": "decidueye",
    "type1": "grass",
    "type2": "ghost"
  },
  {
    "dex": 724,
    "species": "decidueye-hisui",
    "type1": "grass",
    "type2": "fighting"
  },
  {
    "dex": 725,
    "species": "litten",
    "type1": "fire"
  },
  {
    "dex": 726,
    "species": "torracat",
    "type1": "fire"
  },
  {
    "dex": 727,
    "species": "incineroar",
    "type1": "fire",
    "type2": "dark"
  },
  {
    "dex": 728,
    "species": "popplio",
    "type1": "water"
  },
  {
    "dex": 729,
    "species": "brionne",
    "type1": "water"
  },
  {
    "dex": 730,
    "species": "primarina",
    "type1": "water",
    "type2": "fairy"
  },
  {
    "dex": 731,
    "species": "pikipek",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 732,
    "species": "trumbeak",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 733,
    "species": "toucannon",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 734,
    "species": "yungoos",
    "type1": "normal"
  },
  {
    "dex": 735,
    "species": "gumshoos",
    "type1": "normal"
  },
  {
    "dex": 736,
    "species": "grubbin",
    "type1": "bug"
  },
  {
    "dex": 737,
    "species": "charjabug",
    "type1": "bug",
    "type2": "electric"
  },
  {
    "dex": 738,
    "species": "vikavolt",
    "type1": "bug",
    "type2": "electric"
  },
  {
    "dex": 739,
    "species": "crabrawler",
    "type1": "fighting"
  },
  {
    "dex": 740,
    "species": "crabominable",
    "type1": "fighting",
    "type2": "ice"
  },
  {
    "dex": 741,
    "species": "oricorio",
    "type1": "fire",
    "type2": "flying"
  },
  {
    "dex": 741,
    "species": "oricorio-pom-pom",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 741,
    "species": "oricorio-pa'u",
    "type1": "psychic",
    "type2": "flying"
  },
  {
    "dex": 741,
    "species": "oricorio-sensu",
    "type1": "ghost",
    "type2": "flying"
  },
  {
    "dex": 742,
    "species": "cutiefly",
    "type1": "bug",
    "type2": "fairy"
  },
  {
    "dex": 743,
    "species": "ribombee",
    "type1": "bug",
    "type2": "fairy"
  },
  {
    "dex": 744,
    "species": "rockruff",
    "type1": "rock"
  },
  {
    "dex": 745,
    "species": "lycanroc",
    "type1": "rock"
  },
  {
    "dex": 745,
    "species": "lycanroc-midnight",
    "type1": "rock"
  },
  {
    "dex": 745,
    "species": "lycanroc-dusk",
    "type1": "rock"
  },
  {
    "dex": 746,
    "species": "wishiwashi",
    "type1": "water"
  },
  {
    "dex": 746,
    "species": "wishiwashi-school",
    "type1": "water"
  },
  {
    "dex": 747,
    "species": "mareanie",
    "type1": "poison",
    "type2": "water"
  },
  {
    "dex": 748,
    "species": "toxapex",
    "type1": "poison",
    "type2": "water"
  },
  {
    "dex": 749,
    "species": "mudbray",
    "type1": "ground"
  },
  {
    "dex": 750,
    "species": "mudsdale",
    "type1": "ground"
  },
  {
    "dex": 751,
    "species": "dewpider",
    "type1": "water",
    "type2": "bug"
  },
  {
    "dex": 752,
    "species": "araquanid",
    "type1": "water",
    "type2": "bug"
  },
  {
    "dex": 753,
    "species": "fomantis",
    "type1": "grass"
  },
  {
    "dex": 754,
    "species": "lurantis",
    "type1": "grass"
  },
  {
    "dex": 755,
    "species": "morelull",
    "type1": "grass",
    "type2": "fairy"
  },
  {
    "dex": 756,
    "species": "shiinotic",
    "type1": "grass",
    "type2": "fairy"
  },
  {
    "dex": 757,
    "species": "salandit",
    "type1": "poison",
    "type2": "fire"
  },
  {
    "dex": 758,
    "species": "salazzle",
    "type1": "poison",
    "type2": "fire"
  },
  {
    "dex": 759,
    "species": "stufful",
    "type1": "normal",
    "type2": "fighting"
  },
  {
    "dex": 760,
    "species": "bewear",
    "type1": "normal",
    "type2": "fighting"
  },
  {
    "dex": 761,
    "species": "bounsweet",
    "type1": "grass"
  },
  {
    "dex": 762,
    "species": "steenee",
    "type1": "grass"
  },
  {
    "dex": 763,
    "species": "tsareena",
    "type1": "grass"
  },
  {
    "dex": 764,
    "species": "comfey",
    "type1": "fairy"
  },
  {
    "dex": 765,
    "species": "oranguru",
    "type1": "normal",
    "type2": "psychic"
  },
  {
    "dex": 766,
    "species": "passimian",
    "type1": "fighting"
  },
  {
    "dex": 767,
    "species": "wimpod",
    "type1": "bug",
    "type2": "water"
  },
  {
    "dex": 768,
    "species": "golisopod",
    "type1": "bug",
    "type2": "water"
  },
  {
    "dex": 769,
    "species": "sandygast",
    "type1": "ghost",
    "type2": "ground"
  },
  {
    "dex": 770,
    "species": "palossand",
    "type1": "ghost",
    "type2": "ground"
  },
  {
    "dex": 771,
    "species": "pyukumuku",
    "type1": "water"
  },
  {
    "dex": 772,
    "species": "type: null",
    "type1": "normal"
  },
  {
    "dex": 773,
    "species": "silvally",
    "type1": "normal"
  },
  {
    "dex": 774,
    "species": "minior-meteor",
    "type1": "rock",
    "type2": "flying"
  },
  {
    "dex": 774,
    "species": "minior",
    "type1": "rock",
    "type2": "flying"
  },
  {
    "dex": 775,
    "species": "komala",
    "type1": "normal"
  },
  {
    "dex": 776,
    "species": "turtonator",
    "type1": "fire",
    "type2": "dragon"
  },
  {
    "dex": 777,
    "species": "togedemaru",
    "type1": "electric",
    "type2": "steel"
  },
  {
    "dex": 778,
    "species": "mimikyu",
    "type1": "ghost",
    "type2": "fairy"
  },
  {
    "dex": 778,
    "species": "mimikyu-busted",
    "type1": "ghost",
    "type2": "fairy"
  },
  {
    "dex": 779,
    "species": "bruxish",
    "type1": "water",
    "type2": "psychic"
  },
  {
    "dex": 780,
    "species": "drampa",
    "type1": "normal",
    "type2": "dragon"
  },
  {
    "dex": 781,
    "species": "dhelmise",
    "type1": "ghost",
    "type2": "grass"
  },
  {
    "dex": 782,
    "species": "jangmo-o",
    "type1": "dragon"
  },
  {
    "dex": 783,
    "species": "hakamo-o",
    "type1": "dragon",
    "type2": "fighting"
  },
  {
    "dex": 784,
    "species": "kommo-o",
    "type1": "dragon",
    "type2": "fighting"
  },
  {
    "dex": 785,
    "species": "tapu koko",
    "type1": "electric",
    "type2": "fairy"
  },
  {
    "dex": 786,
    "species": "tapu lele",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 787,
    "species": "tapu bulu",
    "type1": "grass",
    "type2": "fairy"
  },
  {
    "dex": 788,
    "species": "tapu fini",
    "type1": "water",
    "type2": "fairy"
  },
  {
    "dex": 789,
    "species": "cosmog",
    "type1": "psychic"
  },
  {
    "dex": 790,
    "species": "cosmoem",
    "type1": "psychic"
  },
  {
    "dex": 791,
    "species": "solgaleo",
    "type1": "psychic",
    "type2": "steel"
  },
  {
    "dex": 792,
    "species": "lunala",
    "type1": "psychic",
    "type2": "ghost"
  },
  {
    "dex": 793,
    "species": "nihilego",
    "type1": "rock",
    "type2": "poison"
  },
  {
    "dex": 794,
    "species": "buzzwole",
    "type1": "bug",
    "type2": "fighting"
  },
  {
    "dex": 795,
    "species": "pheromosa",
    "type1": "bug",
    "type2": "fighting"
  },
  {
    "dex": 796,
    "species": "xurkitree",
    "type1": "electric"
  },
  {
    "dex": 797,
    "species": "celesteela",
    "type1": "steel",
    "type2": "flying"
  },
  {
    "dex": 798,
    "species": "kartana",
    "type1": "grass",
    "type2": "steel"
  },
  {
    "dex": 799,
    "species": "guzzlord",
    "type1": "dark",
    "type2": "dragon"
  },
  {
    "dex": 800,
    "species": "necrozma",
    "type1": "psychic"
  },
  {
    "dex": 800,
    "species": "necrozma-dusk-mane",
    "type1": "psychic",
    "type2": "steel"
  },
  {
    "dex": 800,
    "species": "necrozma-dawn-wings",
    "type1": "psychic",
    "type2": "ghost"
  },
  {
    "dex": 801,
    "species": "magearna",
    "type1": "steel",
    "type2": "fairy"
  },
  {
    "dex": 802,
    "species": "marshadow",
    "type1": "fighting",
    "type2": "ghost"
  },
  {
    "dex": 803,
    "species": "poipole",
    "type1": "poison"
  },
  {
    "dex": 804,
    "species": "naganadel",
    "type1": "poison",
    "type2": "dragon"
  },
  {
    "dex": 805,
    "species": "stakataka",
    "type1": "rock",
    "type2": "steel"
  },
  {
    "dex": 806,
    "species": "blacephalon",
    "type1": "fire",
    "type2": "ghost"
  },
  {
    "dex": 807,
    "species": "zeraora",
    "type1": "electric"
  },
  {
    "dex": 808,
    "species": "meltan",
    "type1": "steel"
  },
  {
    "dex": 809,
    "species": "melmetal",
    "type1": "steel"
  },
  {
    "dex": 810,
    "species": "grookey",
    "type1": "grass"
  },
  {
    "dex": 811,
    "species": "thwackey",
    "type1": "grass"
  },
  {
    "dex": 812,
    "species": "rillaboom",
    "type1": "grass"
  },
  {
    "dex": 813,
    "species": "scorbunny",
    "type1": "fire"
  },
  {
    "dex": 814,
    "species": "raboot",
    "type1": "fire"
  },
  {
    "dex": 815,
    "species": "cinderace",
    "type1": "fire"
  },
  {
    "dex": 816,
    "species": "sobble",
    "type1": "water"
  },
  {
    "dex": 817,
    "species": "drizzile",
    "type1": "water"
  },
  {
    "dex": 818,
    "species": "inteleon",
    "type1": "water"
  },
  {
    "dex": 819,
    "species": "skwovet",
    "type1": "normal"
  },
  {
    "dex": 820,
    "species": "greedent",
    "type1": "normal"
  },
  {
    "dex": 821,
    "species": "rookidee",
    "type1": "flying"
  },
  {
    "dex": 822,
    "species": "corvisquire",
    "type1": "flying"
  },
  {
    "dex": 823,
    "species": "corviknight",
    "type1": "flying",
    "type2": "steel"
  },
  {
    "dex": 824,
    "species": "blipbug",
    "type1": "bug"
  },
  {
    "dex": 825,
    "species": "dottler",
    "type1": "bug",
    "type2": "psychic"
  },
  {
    "dex": 826,
    "species": "orbeetle",
    "type1": "bug",
    "type2": "psychic"
  },
  {
    "dex": 827,
    "species": "nickit",
    "type1": "dark"
  },
  {
    "dex": 828,
    "species": "thievul",
    "type1": "dark"
  },
  {
    "dex": 829,
    "species": "gossifleur",
    "type1": "grass"
  },
  {
    "dex": 830,
    "species": "eldegoss",
    "type1": "grass"
  },
  {
    "dex": 831,
    "species": "wooloo",
    "type1": "normal"
  },
  {
    "dex": 832,
    "species": "dubwool",
    "type1": "normal"
  },
  {
    "dex": 833,
    "species": "chewtle",
    "type1": "water"
  },
  {
    "dex": 834,
    "species": "drednaw",
    "type1": "water",
    "type2": "rock"
  },
  {
    "dex": 835,
    "species": "yamper",
    "type1": "electric"
  },
  {
    "dex": 836,
    "species": "boltund",
    "type1": "electric"
  },
  {
    "dex": 837,
    "species": "rolycoly",
    "type1": "rock"
  },
  {
    "dex": 838,
    "species": "carkol",
    "type1": "rock",
    "type2": "fire"
  },
  {
    "dex": 839,
    "species": "coalossal",
    "type1": "rock",
    "type2": "fire"
  },
  {
    "dex": 840,
    "species": "applin",
    "type1": "grass",
    "type2": "dragon"
  },
  {
    "dex": 841,
    "species": "flapple",
    "type1": "grass",
    "type2": "dragon"
  },
  {
    "dex": 842,
    "species": "appletun",
    "type1": "grass",
    "type2": "dragon"
  },
  {
    "dex": 843,
    "species": "silicobra",
    "type1": "ground"
  },
  {
    "dex": 844,
    "species": "sandaconda",
    "type1": "ground"
  },
  {
    "dex": 845,
    "species": "cramorant",
    "type1": "flying",
    "type2": "water"
  },
  {
    "dex": 845,
    "species": "cramorant-gulping",
    "type1": "flying",
    "type2": "water"
  },
  {
    "dex": 845,
    "species": "cramorant-gorging",
    "type1": "flying",
    "type2": "water"
  },
  {
    "dex": 846,
    "species": "arrokuda",
    "type1": "water"
  },
  {
    "dex": 847,
    "species": "barraskewda",
    "type1": "water"
  },
  {
    "dex": 848,
    "species": "toxel",
    "type1": "electric",
    "type2": "poison"
  },
  {
    "dex": 849,
    "species": "toxtricity",
    "type1": "electric",
    "type2": "poison"
  },
  {
    "dex": 849,
    "species": "toxtricity-low-key",
    "type1": "electric",
    "type2": "poison"
  },
  {
    "dex": 850,
    "species": "sizzlipede",
    "type1": "fire",
    "type2": "bug"
  },
  {
    "dex": 851,
    "species": "centiskorch",
    "type1": "fire",
    "type2": "bug"
  },
  {
    "dex": 852,
    "species": "clobbopus",
    "type1": "fighting"
  },
  {
    "dex": 853,
    "species": "grapploct",
    "type1": "fighting"
  },
  {
    "dex": 854,
    "species": "sinistea",
    "type1": "ghost"
  },
  {
    "dex": 855,
    "species": "polteageist",
    "type1": "ghost"
  },
  {
    "dex": 856,
    "species": "hatenna",
    "type1": "psychic"
  },
  {
    "dex": 857,
    "species": "hattrem",
    "type1": "psychic"
  },
  {
    "dex": 858,
    "species": "hatterene",
    "type1": "psychic",
    "type2": "fairy"
  },
  {
    "dex": 859,
    "species": "impidimp",
    "type1": "dark",
    "type2": "fairy"
  },
  {
    "dex": 860,
    "species": "morgrem",
    "type1": "dark",
    "type2": "fairy"
  },
  {
    "dex": 861,
    "species": "grimmsnarl",
    "type1": "dark",
    "type2": "fairy"
  },
  {
    "dex": 862,
    "species": "obstagoon",
    "type1": "dark",
    "type2": "normal"
  },
  {
    "dex": 863,
    "species": "perrserker",
    "type1": "steel"
  },
  {
    "dex": 864,
    "species": "cursola",
    "type1": "ghost"
  },
  {
    "dex": 865,
    "species": "sirfetch'd",
    "type1": "fighting"
  },
  {
    "dex": 866,
    "species": "mr. rime",
    "type1": "ice",
    "type2": "psychic"
  },
  {
    "dex": 867,
    "species": "runerigus",
    "type1": "ground",
    "type2": "ghost"
  },
  {
    "dex": 868,
    "species": "milcery",
    "type1": "fairy"
  },
  {
    "dex": 869,
    "species": "alcremie",
    "type1": "fairy"
  },
  {
    "dex": 870,
    "species": "falinks",
    "type1": "fighting"
  },
  {
    "dex": 871,
    "species": "pincurchin",
    "type1": "electric"
  },
  {
    "dex": 872,
    "species": "snom",
    "type1": "ice",
    "type2": "bug"
  },
  {
    "dex": 873,
    "species": "frosmoth",
    "type1": "ice",
    "type2": "bug"
  },
  {
    "dex": 874,
    "species": "stonjourner",
    "type1": "rock"
  },
  {
    "dex": 875,
    "species": "eiscue",
    "type1": "ice"
  },
  {
    "dex": 875,
    "species": "eiscue-noice",
    "type1": "ice"
  },
  {
    "dex": 876,
    "species": "indeedee",
    "type1": "psychic",
    "type2": "normal"
  },
  {
    "dex": 876,
    "species": "indeedee-f",
    "type1": "psychic",
    "type2": "normal"
  },
  {
    "dex": 877,
    "species": "morpeko",
    "type1": "electric",
    "type2": "dark"
  },
  {
    "dex": 877,
    "species": "morpeko-hangry",
    "type1": "electric",
    "type2": "dark"
  },
  {
    "dex": 878,
    "species": "cufant",
    "type1": "steel"
  },
  {
    "dex": 879,
    "species": "copperajah",
    "type1": "steel"
  },
  {
    "dex": 880,
    "species": "dracozolt",
    "type1": "electric",
    "type2": "dragon"
  },
  {
    "dex": 881,
    "species": "arctozolt",
    "type1": "electric",
    "type2": "ice"
  },
  {
    "dex": 882,
    "species": "dracovish",
    "type1": "water",
    "type2": "dragon"
  },
  {
    "dex": 883,
    "species": "arctovish",
    "type1": "water",
    "type2": "ice"
  },
  {
    "dex": 884,
    "species": "duraludon",
    "type1": "steel",
    "type2": "dragon"
  },
  {
    "dex": 885,
    "species": "dreepy",
    "type1": "dragon",
    "type2": "ghost"
  },
  {
    "dex": 886,
    "species": "drakloak",
    "type1": "dragon",
    "type2": "ghost"
  },
  {
    "dex": 887,
    "species": "dragapult",
    "type1": "dragon",
    "type2": "ghost"
  },
  {
    "dex": 888,
    "species": "zacian",
    "type1": "fairy"
  },
  {
    "dex": 888,
    "species": "zacian-crowned",
    "type1": "fairy",
    "type2": "steel"
  },
  {
    "dex": 889,
    "species": "zamazenta",
    "type1": "fighting"
  },
  {
    "dex": 889,
    "species": "zamazenta-crowned",
    "type1": "fighting",
    "type2": "steel"
  },
  {
    "dex": 890,
    "species": "eternatus",
    "type1": "poison",
    "type2": "dragon"
  },
  {
    "dex": 891,
    "species": "kubfu",
    "type1": "fighting"
  },
  {
    "dex": 892,
    "species": "urshifu",
    "type1": "fighting",
    "type2": "dark"
  },
  {
    "dex": 892,
    "species": "urshifu-rapid-strike",
    "type1": "fighting",
    "type2": "water"
  },
  {
    "dex": 893,
    "species": "zarude",
    "type1": "dark",
    "type2": "grass"
  },
  {
    "dex": 894,
    "species": "regieleki",
    "type1": "electric"
  },
  {
    "dex": 895,
    "species": "regidrago",
    "type1": "dragon"
  },
  {
    "dex": 896,
    "species": "glastrier",
    "type1": "ice"
  },
  {
    "dex": 897,
    "species": "spectrier",
    "type1": "ghost"
  },
  {
    "dex": 898,
    "species": "calyrex",
    "type1": "psychic",
    "type2": "grass"
  },
  {
    "dex": 898,
    "species": "calyrex-ice",
    "type1": "psychic",
    "type2": "ice"
  },
  {
    "dex": 898,
    "species": "calyrex-shadow",
    "type1": "psychic",
    "type2": "ghost"
  },
  {
    "dex": 899,
    "species": "wyrdeer",
    "type1": "normal",
    "type2": "psychic"
  },
  {
    "dex": 900,
    "species": "kleavor",
    "type1": "bug",
    "type2": "rock"
  },
  {
    "dex": 901,
    "species": "ursaluna",
    "type1": "ground",
    "type2": "normal"
  },
  {
    "dex": 902,
    "species": "basculegion",
    "type1": "water",
    "type2": "ghost"
  },
  {
    "dex": 902,
    "species": "basculegion-f",
    "type1": "water",
    "type2": "ghost"
  },
  {
    "dex": 903,
    "species": "sneasler",
    "type1": "fighting",
    "type2": "poison"
  },
  {
    "dex": 904,
    "species": "overqwil",
    "type1": "dark",
    "type2": "poison"
  },
  {
    "dex": 905,
    "species": "enamorus",
    "type1": "fairy",
    "type2": "flying"
  },
  {
    "dex": 905,
    "species": "enamorus-therian",
    "type1": "fairy",
    "type2": "flying"
  },
  {
    "dex": 906,
    "species": "sprigatito",
    "type1": "grass"
  },
  {
    "dex": 907,
    "species": "floragato",
    "type1": "grass"
  },
  {
    "dex": 908,
    "species": "meowscarada",
    "type1": "grass",
    "type2": "dark"
  },
  {
    "dex": 909,
    "species": "fuecoco",
    "type1": "fire"
  },
  {
    "dex": 910,
    "species": "crocalor",
    "type1": "fire"
  },
  {
    "dex": 911,
    "species": "skeledirge",
    "type1": "fire",
    "type2": "ghost"
  },
  {
    "dex": 912,
    "species": "quaxly",
    "type1": "water"
  },
  {
    "dex": 913,
    "species": "quaxwell",
    "type1": "water"
  },
  {
    "dex": 914,
    "species": "quaquaval",
    "type1": "water",
    "type2": "fighting"
  },
  {
    "dex": 915,
    "species": "lechonk",
    "type1": "normal"
  },
  {
    "dex": 916,
    "species": "oinkologne",
    "type1": "normal"
  },
  {
    "dex": 916,
    "species": "oinkologne-f",
    "type1": "normal"
  },
  {
    "dex": 917,
    "species": "tarountula",
    "type1": "bug"
  },
  {
    "dex": 918,
    "species": "spidops",
    "type1": "bug"
  },
  {
    "dex": 919,
    "species": "nymble",
    "type1": "bug"
  },
  {
    "dex": 920,
    "species": "lokix",
    "type1": "bug",
    "type2": "dark"
  },
  {
    "dex": 921,
    "species": "pawmi",
    "type1": "electric"
  },
  {
    "dex": 922,
    "species": "pawmo",
    "type1": "electric",
    "type2": "fighting"
  },
  {
    "dex": 923,
    "species": "pawmot",
    "type1": "electric",
    "type2": "fighting"
  },
  {
    "dex": 924,
    "species": "tandemaus",
    "type1": "normal"
  },
  {
    "dex": 925,
    "species": "maushold",
    "type1": "normal"
  },
  {
    "dex": 925,
    "species": "maushold-four",
    "type1": "normal"
  },
  {
    "dex": 926,
    "species": "fidough",
    "type1": "fairy"
  },
  {
    "dex": 927,
    "species": "dachsbun",
    "type1": "fairy"
  },
  {
    "dex": 928,
    "species": "smoliv",
    "type1": "grass",
    "type2": "normal"
  },
  {
    "dex": 929,
    "species": "dolliv",
    "type1": "grass",
    "type2": "normal"
  },
  {
    "dex": 930,
    "species": "arboliva",
    "type1": "grass",
    "type2": "normal"
  },
  {
    "dex": 931,
    "species": "squawkabilly",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 931,
    "species": "squawkabilly-blue",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 931,
    "species": "squawkabilly-yellow",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 931,
    "species": "squawkabilly-white",
    "type1": "normal",
    "type2": "flying"
  },
  {
    "dex": 932,
    "species": "nacli",
    "type1": "rock"
  },
  {
    "dex": 933,
    "species": "naclstack",
    "type1": "rock"
  },
  {
    "dex": 934,
    "species": "garganacl",
    "type1": "rock"
  },
  {
    "dex": 935,
    "species": "charcadet",
    "type1": "fire"
  },
  {
    "dex": 936,
    "species": "armarouge",
    "type1": "fire",
    "type2": "psychic"
  },
  {
    "dex": 937,
    "species": "ceruledge",
    "type1": "fire",
    "type2": "ghost"
  },
  {
    "dex": 938,
    "species": "tadbulb",
    "type1": "electric"
  },
  {
    "dex": 939,
    "species": "bellibolt",
    "type1": "electric"
  },
  {
    "dex": 940,
    "species": "wattrel",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 941,
    "species": "kilowattrel",
    "type1": "electric",
    "type2": "flying"
  },
  {
    "dex": 942,
    "species": "maschiff",
    "type1": "dark"
  },
  {
    "dex": 943,
    "species": "mabosstiff",
    "type1": "dark"
  },
  {
    "dex": 944,
    "species": "shroodle",
    "type1": "poison",
    "type2": "normal"
  },
  {
    "dex": 945,
    "species": "grafaiai",
    "type1": "poison",
    "type2": "normal"
  },
  {
    "dex": 946,
    "species": "bramblin",
    "type1": "grass",
    "type2": "ghost"
  },
  {
    "dex": 947,
    "species": "brambleghast",
    "type1": "grass",
    "type2": "ghost"
  },
  {
    "dex": 948,
    "species": "toedscool",
    "type1": "ground",
    "type2": "grass"
  },
  {
    "dex": 949,
    "species": "toedscruel",
    "type1": "ground",
    "type2": "grass"
  },
  {
    "dex": 950,
    "species": "klawf",
    "type1": "rock"
  },
  {
    "dex": 951,
    "species": "capsakid",
    "type1": "grass"
  },
  {
    "dex": 952,
    "species": "scovillain",
    "type1": "grass",
    "type2": "fire"
  },
  {
    "dex": 953,
    "species": "rellor",
    "type1": "bug"
  },
  {
    "dex": 954,
    "species": "rabsca",
    "type1": "bug",
    "type2": "psychic"
  },
  {
    "dex": 955,
    "species": "flittle",
    "type1": "psychic"
  },
  {
    "dex": 956,
    "species": "espathra",
    "type1": "psychic"
  },
  {
    "dex": 957,
    "species": "tinkatink",
    "type1": "fairy",
    "type2": "steel"
  },
  {
    "dex": 958,
    "species": "tinkatuff",
    "type1": "fairy",
    "type2": "steel"
  },
  {
    "dex": 959,
    "species": "tinkaton",
    "type1": "fairy",
    "type2": "steel"
  },
  {
    "dex": 960,
    "species": "wiglett",
    "type1": "water"
  },
  {
    "dex": 961,
    "species": "wugtrio",
    "type1": "water"
  },
  {
    "dex": 962,
    "species": "bombirdier",
    "type1": "flying",
    "type2": "dark"
  },
  {
    "dex": 963,
    "species": "finizen",
    "type1": "water"
  },
  {
    "dex": 964,
    "species": "palafin",
    "type1": "water"
  },
  {
    "dex": 964,
    "species": "palafin-hero",
    "type1": "water"
  },
  {
    "dex": 965,
    "species": "varoom",
    "type1": "steel",
    "type2": "poison"
  },
  {
    "dex": 966,
    "species": "revavroom",
    "type1": "steel",
    "type2": "poison"
  },
  {
    "dex": 967,
    "species": "cyclizar",
    "type1": "dragon",
    "type2": "normal"
  },
  {
    "dex": 968,
    "species": "orthworm",
    "type1": "steel"
  },
  {
    "dex": 969,
    "species": "glimmet",
    "type1": "rock",
    "type2": "poison"
  },
  {
    "dex": 970,
    "species": "glimmora",
    "type1": "rock",
    "type2": "poison"
  },
  {
    "dex": 971,
    "species": "greavard",
    "type1": "ghost"
  },
  {
    "dex": 972,
    "species": "houndstone",
    "type1": "ghost"
  },
  {
    "dex": 973,
    "species": "flamigo",
    "type1": "flying",
    "type2": "fighting"
  },
  {
    "dex": 974,
    "species": "cetoddle",
    "type1": "ice"
  },
  {
    "dex": 975,
    "species": "cetitan",
    "type1": "ice"
  },
  {
    "dex": 976,
    "species": "veluza",
    "type1": "water",
    "type2": "psychic"
  },
  {
    "dex": 977,
    "species": "dondozo",
    "type1": "water"
  },
  {
    "dex": 978,
    "species": "tatsugiri",
    "type1": "dragon",
    "type2": "water"
  },
  {
    "dex": 978,
    "species": "tatsugiri-droopy",
    "type1": "dragon",
    "type2": "water"
  },
  {
    "dex": 978,
    "species": "tatsugiri-stretchy",
    "type1": "dragon",
    "type2": "water"
  },
  {
    "dex": 979,
    "species": "annihilape",
    "type1": "fighting",
    "type2": "ghost"
  },
  {
    "dex": 980,
    "species": "clodsire",
    "type1": "poison",
    "type2": "ground"
  },
  {
    "dex": 981,
    "species": "farigiraf",
    "type1": "normal",
    "type2": "psychic"
  },
  {
    "dex": 982,
    "species": "dudunsparce",
    "type1": "normal"
  },
  {
    "dex": 982,
    "species": "dudunsparce-three-segment",
    "type1": "normal"
  },
  {
    "dex": 983,
    "species": "kingambit",
    "type1": "dark",
    "type2": "steel"
  },
  {
    "dex": 984,
    "species": "great tusk",
    "type1": "ground",
    "type2": "fighting"
  },
  {
    "dex": 985,
    "species": "scream tail",
    "type1": "fairy",
    "type2": "psychic"
  },
  {
    "dex": 986,
    "species": "brute bonnet",
    "type1": "grass",
    "type2": "dark"
  },
  {
    "dex": 987,
    "species": "flutter mane",
    "type1": "ghost",
    "type2": "fairy"
  },
  {
    "dex": 988,
    "species": "slither wing",
    "type1": "bug",
    "type2": "fighting"
  },
  {
    "dex": 989,
    "species": "sandy shocks",
    "type1": "electric",
    "type2": "ground"
  },
  {
    "dex": 990,
    "species": "iron treads",
    "type1": "ground",
    "type2": "steel"
  },
  {
    "dex": 991,
    "species": "iron bundle",
    "type1": "ice",
    "type2": "water"
  },
  {
    "dex": 992,
    "species": "iron hands",
    "type1": "fighting",
    "type2": "electric"
  },
  {
    "dex": 993,
    "species": "iron jugulis",
    "type1": "dark",
    "type2": "flying"
  },
  {
    "dex": 994,
    "species": "iron moth",
    "type1": "fire",
    "type2": "poison"
  },
  {
    "dex": 995,
    "species": "iron thorns",
    "type1": "rock",
    "type2": "electric"
  },
  {
    "dex": 996,
    "species": "frigibax",
    "type1": "dragon",
    "type2": "ice"
  },
  {
    "dex": 997,
    "species": "arctibax",
    "type1": "dragon",
    "type2": "ice"
  },
  {
    "dex": 998,
    "species": "baxcalibur",
    "type1": "dragon",
    "type2": "ice"
  },
  {
    "dex": 999,
    "species": "gimmighoul",
    "type1": "ghost"
  },
  {
    "dex": 999,
    "species": "gimmighoul-roaming",
    "type1": "ghost"
  },
  {
    "dex": 1000,
    "species": "gholdengo",
    "type1": "steel",
    "type2": "ghost"
  },
  {
    "dex": 1001,
    "species": "wo-chien",
    "type1": "dark",
    "type2": "grass"
  },
  {
    "dex": 1002,
    "species": "chien-pao",
    "type1": "dark",
    "type2": "ice"
  },
  {
    "dex": 1003,
    "species": "ting-lu",
    "type1": "dark",
    "type2": "ground"
  },
  {
    "dex": 1004,
    "species": "chi-yu",
    "type1": "dark",
    "type2": "fire"
  },
  {
    "dex": 1005,
    "species": "roaring moon",
    "type1": "dragon",
    "type2": "dark"
  },
  {
    "dex": 1006,
    "species": "iron valiant",
    "type1": "fairy",
    "type2": "fighting"
  },
  {
    "dex": 1007,
    "species": "koraidon",
    "type1": "fighting",
    "type2": "dragon"
  },
  {
    "dex": 1008,
    "species": "miraidon",
    "type1": "electric",
    "type2": "dragon"
  },
  {
    "dex": 1009,
    "species": "walking wake",
    "type1": "water",
    "type2": "dragon"
  },
  {
    "dex": 1010,
    "species": "iron leaves",
    "type1": "grass",
    "type2": "psychic"
  },
  {
    "dex": 0,
    "species": "dipplin",
    "type1": "grass",
    "type2": "dragon"
  },
  {
    "dex": 0,
    "species": "archaludon",
    "type1": "steel",
    "type2": "dragon"
  },
  {
    "dex": 0,
    "species": "raging bolt",
    "type1": "electric",
    "type2": "dragon"
  },
  {
    "dex": 0,
    "species": "iron crown",
    "type1": "steel",
    "type2": "psychic"
  },
  {
    "dex": 0,
    "species": "ogerpon",
    "type1": "unknown"
  },
  {
    "dex": 0,
    "species": "okidogi",
    "type1": "unknown"
  },
  {
    "dex": 0,
    "species": "munkidori",
    "type1": "unknown"
  },
  {
    "dex": 0,
    "species": "fezandipiti",
    "type1": "unknown"
  },
  {
    "dex": 0,
    "species": "terapagos",
    "type1": "unknown"
  }
]