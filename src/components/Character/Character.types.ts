import { Dungeon } from "../Dungeon/Dungeon.types"

export enum Race {
  Elf,
  Dwarf,
  Human,
  RedDragonBorn,
}

export const RaceLabel: Map<Race, string> = new Map([
  [Race.Elf, 'elf'],
  [Race.Dwarf, 'dwarf'],
  [Race.Human, 'human'],
  [Race.RedDragonBorn, 'dragonborn'],
]);

export enum Class {
  Bard = 1,
  Fighter,
  Sorcerer,
  Rogue,
}

export const ClassLabel: Map<Class, string> = new Map([
  [Class.Bard, 'bard'],
  [Class.Fighter, 'fighter'],
  [Class.Sorcerer, 'sorcerer'],
  [Class.Rogue, 'rogue']
]);

export const ClassKey: Map<string, Class> = new Map([
  ['bard', Class.Bard],
  ['fighter', Class.Fighter],
  ['sorcerer', Class.Sorcerer],
  ['rogue', Class.Rogue]
]);

export enum Sex {
  Male,
  Female,
}
export const SexLabel: Map<Sex, string> = new Map([
  [Sex.Male, 'male'],
  [Sex.Female, 'female']
]);

const PersonalityBard = ['El rebelde', 'El erudito', 'El buscador', 'El pacificador'];
const PersonalityFighter = ['El genio', 'El apostador', 'El esbirro', 'El manitas'];
const PersonalitySorcerer = ['El sanador', 'El tornado', 'El sabio', 'El embaucador'];
const PersonalityRogue = ['El campeón', 'El forajido', 'El vagabundo', 'El bandido'];

export const PersonalityValues = {
  PersonalityBard,
  PersonalityFighter,
  PersonalitySorcerer,
  PersonalityRogue
};

const Personalities = [...PersonalityBard, ...PersonalityFighter, ...PersonalitySorcerer, ...PersonalityRogue];
type PersonalitiesType = typeof Personalities;

export type PersonalityType = PersonalitiesType[number];

const AttacksBard = ['Desastre natural', 'Distracción teatral'];
const AttacksFighter = ['Fuerza bruta', 'Disparo engañoso'];
const AttacksSorcerer = ['Ilusionismo', 'Esta vivo!'];
const AttacksRogue = ['Superviviente', 'Juego de manos'];


export const AttackValues = {
  AttacksBard,
  AttacksFighter,
  AttacksSorcerer,
  AttacksRogue
};

const Attacks = [...AttacksBard,
...AttacksFighter,
...AttacksSorcerer,
...AttacksRogue];

type AttacksType = typeof Attacks;

export type AttackType = AttacksType[number];

export type LifeRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const Characters: Character[] = [
  {
    race: Race.Elf,
    class: Class.Bard,
    name: 'Lucan Silverfrond',
    sex: Sex.Male,
  },
  {
    race: Race.Elf,
    class: Class.Bard,
    name: 'Thia Silverfron',
    sex: Sex.Female,
  },
  {
    race: Race.Dwarf,
    class: Class.Fighter,
    name: 'Tak Strongheart',
    sex: Sex.Male,
  },
  {
    race: Race.Dwarf,
    class: Class.Fighter,
    name: 'Ris Strongheart',
    sex: Sex.Female,
  },
  {
    race: Race.Human,
    class: Class.Sorcerer,
    name: 'Salazar Astorio',
    sex: Sex.Male,
  },
  {
    race: Race.Human,
    class: Class.Sorcerer,
    name: 'Kiya Astorio',
    sex: Sex.Female,
  },
  {
    race: Race.RedDragonBorn,
    class: Class.Rogue,
    name: 'Patrin Nemmonis',
    sex: Sex.Male,
  },
  {
    race: Race.RedDragonBorn,
    class: Class.Rogue,
    name: 'Korinn Nemmonis',
    sex: Sex.Female,
  },
];

export type Character = {
  race: Race;
  class: Class;
  name: string;
  sex: Sex;
};

export enum BackPacksNames {
  Artist,
  Thief,
  Healer,
  Hunter,
  Trader,
  Erudite,
  Explorer,
  Crawler,
}

export const BackPacksNamesLabel: Map<BackPacksNames, string> = new Map([
  [BackPacksNames.Artist, 'Mochila de artista'],
  [BackPacksNames.Thief, 'Mochila de ladrón'],
  [BackPacksNames.Healer, 'Mochila de Sanador'],
  [BackPacksNames.Hunter, 'Mochila de cazador'],
  [BackPacksNames.Trader, 'Mochila de mercader'],
  [BackPacksNames.Erudite, 'Mochila de erudito'],
  [BackPacksNames.Explorer, 'Mochila de explorador'],
  [BackPacksNames.Crawler, 'Mochila de explorador de mazmorras'],
])

export const BackPacks: BackPackType[] = [
  {
    backpack: BackPacksNames.Artist,
    items: ['Disfraz de bufón', 'Útiles para disfrazarse', 'Gaitas antiguas', 'Cinco dagas para malabares'],
  }
  , {
    backpack: BackPacksNames.Trader,
    items: ['Conjunto de ropas de calidad', 'Lámpara de aceite', 'Kit de venenos', 'Halcón de caza'],
  }
  , { backpack: BackPacksNames.Healer, items: ['Barra de jabón', 'Caja de vendas', 'Sierra', 'Capa impermeable'] }
  , { backpack: BackPacksNames.Explorer, items: ['Sartén', 'Catalejo', 'Libro de idiomas', 'Útiles de escalada'] }
  , {
    backpack: BackPacksNames.Erudite,
    items: ['Montón de mapas', 'Pluma para escribir', 'Libro sobre monstruos ígneos', 'Lupa'],
  }
  , {
    backpack: BackPacksNames.Crawler,
    items: ['Mapas de mazmorras', 'Rollo largo de cuerda', 'Viales de ácido', 'Antorcha y yesquero'],
  }
  , {
    backpack: BackPacksNames.Thief,
    items: ['Palanqueta', 'Ovillo de hilo grande', 'Garfio de escalada', 'Cerradura y cadenas'],
  }
  , {
    backpack: BackPacksNames.Hunter,
    items: ['Caña de pescar', 'Trampa para cazar grande', 'Manta muy cálida', 'Bolsa de dientes de dragón'],
  }

]


export type BackPackType =
  | {
    backpack: BackPacksNames.Artist;
    items: ['Disfraz de bufón', 'Útiles para disfrazarse', 'Gaitas antiguas', 'Cinco dagas para malabares'];
  }
  | {
    backpack: BackPacksNames.Trader;
    items: ['Conjunto de ropas de calidad', 'Lámpara de aceite', 'Kit de venenos', 'Halcón de caza'];
  }
  | { backpack: BackPacksNames.Healer; items: ['Barra de jabón', 'Caja de vendas', 'Sierra', 'Capa impermeable'] }
  | { backpack: BackPacksNames.Explorer; items: ['Sartén', 'Catalejo', 'Libro de idiomas', 'Útiles de escalada'] }
  | {
    backpack: BackPacksNames.Erudite;
    items: ['Montón de mapas', 'Pluma para escribir', 'Libro sobre monstruos ígneos', 'Lupa'];
  }
  | {
    backpack: BackPacksNames.Crawler;
    items: ['Mapas de mazmorras', 'Rollo largo de cuerda', 'Viales de ácido', 'Antorcha y yesquero'];
  }
  | {
    backpack: BackPacksNames.Thief;
    items: ['Palanqueta', 'Ovillo de hilo grande', 'Garfio de escalada', 'Cerradura y cadenas'];
  }
  | {
    backpack: BackPacksNames.Hunter;
    items: ['Caña de pescar', 'Trampa para cazar grande', 'Manta muy cálida', 'Bolsa de dientes de dragón'];
  };



export type DungeonPosition = 1 | 2 | 3 | 4 | 5 | 6;
export type AttackLevel = "1" | "2";
export enum ObjectLooted {
  'Lira de pantaoles en llamas',
  'Pseudodragon',
  'Cria de oso lechuza',
  'Manto arácnido',
  'Cuerda para rato',
  'Hacha de los señores enanos',
  'Poción inagotable de pavoneo',
  'El anillo único',
  'Sapo gigante',
  'Gafas de visión caballeresca',
  'Mimeto mascota',
  'Tomo abrumador',
}
export type PlayerPosition = {
  dungeon?: Dungeon;
  dungeonPosition?: DungeonPosition;
};

export type PlayerStats = {
  character?: Character;
  identifier?: string;
  level?: AttackLevel;
  coins?: number;
  life?: LifeRange;
  position?: PlayerPosition;
  personality?: PersonalityType;
  attacks?: AttackType;
  loot?: ObjectLooted[];
  backpack?: BackPackType;
};
