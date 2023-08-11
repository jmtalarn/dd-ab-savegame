export enum Boss {
	Kraken = 'El kraken',
	Felbris = 'Felbris, el contemplador', //"El bosque de Neverwinter",
	Orn = 'Orn, el gigante de fuego',
	Deathsleep = 'Deathsleep, el dragon verde'
}


export enum Dungeon {
	Gauntlgrym = 'Gauntlgrym',
	Neverwinter = 'Neverwinter',
	NeverwinterForest = 'Bosque de Neverwinter',
	HotenowMount = 'Monte Hotenow',
}


export const BossDungeonMap: Map<Boss, Dungeon> = new Map([
	[Boss.Kraken, Dungeon.Neverwinter],
	[Boss.Orn, Dungeon.HotenowMount],
	[Boss.Deathsleep, Dungeon.NeverwinterForest],
	[Boss.Felbris, Dungeon.Neverwinter]
]);
