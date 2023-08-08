export enum Race {
  Elf = 'elf',
  Dwarf = 'dwarf',
  Human = 'human',
  RedDragonBorn = 'dragonborn',
}
export enum Class {
  Bard = 'bard',
  Fighter = 'fighter',
  Sorcerer = 'sorcerer',
  Rogue = 'rogue',
}
export enum Sex {
  Male = 'male',
  Female = 'female',
}

type PersonalityBard = 'El rebelde' | 'El erudito' | 'El buscador' | 'El pacificador';
type PersonalityFighter = 'El rebelde' | 'El erudito' | 'El buscador' | 'El pacificador';
type PersonalitySorcerer = 'El sanador' | 'El tornado' | 'El sabio' | 'El embaucador';
type PersonalityRogue = 'El campeón' | 'El forajido' | 'El vagabundo' | 'El bandido';

export type PersonalityType = PersonalityBard | PersonalityFighter | PersonalitySorcerer | PersonalityRogue;

type AttacksBard = 'Desastre natural' | 'Distracción teatral';
type AttacksFighter = 'Fuerza bruta' | 'Disparo engañoso';
type AttacksSorcerer = 'Ilusionismo' | 'Esta vivo!';
type AttacksRogue = 'Superviviente' | 'Juego de manos';

export type AttacksType = AttacksBard | AttacksFighter | AttacksSorcerer | AttacksRogue;

export type LifeRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const Characters: Character[] = [
  {
    race: Race.Elf,
    class: Class.Bard,
    name: 'Lucan Silverfrond',
    sex: Sex.Male,
    // personality: PersonalityBard,
    // attacks: AttacksBard,
  },
  {
    race: Race.Elf,
    class: Class.Bard,
    name: 'Thia Silverfron',
    sex: Sex.Female,
    // personality: PersonalityBard,
    // attacks: AttacksBard,
  },
  {
    race: Race.Dwarf,
    class: Class.Fighter,
    name: 'Tak Strongheart',
    sex: Sex.Male,
    // personality: PersonalityFighter,
    // attacks: AttacksFighter,
  },
  {
    race: Race.Dwarf,
    class: Class.Fighter,
    name: 'Ris Strongheart',
    sex: Sex.Female,
    // personality: PersonalityFighter,
    // attacks: AttacksFighter,
  },
  {
    race: Race.Human,
    class: Class.Sorcerer,
    name: 'Salazar Astorio',
    sex: Sex.Male,
    // personality: PersonalitySorcerer,
    // attacks: AttacksSorcerer,
  },
  {
    race: Race.Human,
    class: Class.Sorcerer,
    name: 'Kiya Astorio',
    sex: Sex.Female,
    // personality: PersonalitySorcerer,
    // attacks: AttacksSorcerer,
  },
  {
    race: Race.RedDragonBorn,
    class: Class.Rogue,
    name: 'Patrin Nemmonis',
    sex: Sex.Male,
    // personality: PersonalityRogue,
    // attacks: AttacksRogue,
  },
  {
    race: Race.RedDragonBorn,
    class: Class.Rogue,
    name: 'Korinn Nemmonis',
    sex: Sex.Female,
    // personality: PersonalityRogue;
    // attacks: AttacksRogue;
  },
];

export type Character = {
  race: Race;
  class: Class;
  name: string;
  sex: Sex;
  // personality?: PersonalityType;
  // attacks?: AttacksType;
  // personality: PersonalityType;
  // attacks: AttacksType;
};

export enum BackPacksNames {
  Artist = 'Mochila de artista',
  Thief = 'Mochila de ladrón',
  Healer = 'Mochila de Sanador',
  Hunter = 'Mochila de cazador',
  Trader = 'Mochila de mercader',
  Erudite = 'Mochila de erudito',
  Explorer = 'Mochila de explorador',
  Crawler = 'Mochila de explorador de mazmorras',
}

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

export enum Dungeon {
  Gauntlgrym = 'Gauntlgrym',
  Neverwinter = 'Neverwinter',
  NeverwinterForest = 'Bosque de Neverwinter',
  HotenowMount = 'Monte Hotenow',
}

export type DungeonPosition = 1 | 2 | 3 | 4 | 5 | 6;
export type AttackLevel = 1 | 2;
export enum Object {
  'Lira de pantaoles en llamas',
  'Pseudodragon',
  'Cria de oso lechuza',
  'Manto arácnido',
  'Cuerda para rato',
  'Hacha de los señores enanos',
  'Poción inagotable de pavoneo',
  'El anilo único',
  'Sapo gigante',
  'Gafas de visión caballeresca',
  'Mimeto mascota',
  'Tomo abrumador',
}

export type PlayerStats = {
  character: Character;
  level: AttackLevel;
  coins: number;
  life: LifeRange;
  position: { dungeon: Dungeon; position: DungeonPosition };
  personality: PersonalityType;
  attacks: AttacksType;
  objects: Object[];
  identifier: string;
  backpack: BackPackType;
};
