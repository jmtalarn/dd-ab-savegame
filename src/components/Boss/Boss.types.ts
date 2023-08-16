import { Dungeon } from "../Dungeon/Dungeon.types"

export enum Boss {
	Kraken = 'El kraken',
	Felbris = 'Felbris, el contemplador', //"El bosque de Neverwinter",
	Orn = 'Orn, el gigante de fuego',
	Deathsleep = 'Deathsleep, el dragon verde'
}



export const BossDungeonMap: Map<Boss, Dungeon> = new Map([
	[Boss.Kraken, Dungeon.Neverwinter],
	[Boss.Orn, Dungeon.HotenowMount],
	[Boss.Deathsleep, Dungeon.NeverwinterForest],
	[Boss.Felbris, Dungeon.Neverwinter]
]);
