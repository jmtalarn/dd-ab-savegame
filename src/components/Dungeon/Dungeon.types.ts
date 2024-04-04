export enum Dungeon {
	Gauntlgrym,
	Neverwinter,
	NeverwinterForest,
	HotenowMount,
}

export const DungeonLabel: Map<Dungeon, string> = new Map([
	[Dungeon.Gauntlgrym, 'Gauntlgrym'],
	[Dungeon.Neverwinter, 'Neverwinter'],
	[Dungeon.NeverwinterForest, 'Bosque de Neverwinter'],
	[Dungeon.HotenowMount, 'Monte Hotenow']
]);
