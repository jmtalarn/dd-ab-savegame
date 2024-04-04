import { Dungeon } from "../Dungeon/Dungeon.types"

export enum Boss {
	Kraken,
	Felbris,
	Orn,
	Deathsleep,
}

export const BossLabel: Map<Boss, string> = new Map([
	[Boss.Kraken, 'El kraken'],
	[Boss.Felbris, 'Felbris, el contemplador'], //"El bosque de Neverwinter",
	[Boss.Orn, 'Orn, el gigante de fuego'],
	[Boss.Deathsleep, 'Deathsleep, el dragon verde']
])



export const BossDungeonMap: Map<Boss, Dungeon> = new Map([
	[Boss.Kraken, Dungeon.Neverwinter],
	[Boss.Orn, Dungeon.HotenowMount],
	[Boss.Deathsleep, Dungeon.NeverwinterForest],
	[Boss.Felbris, Dungeon.Neverwinter]
]);
