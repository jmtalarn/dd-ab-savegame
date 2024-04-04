export enum MenuKeys {
	FinalBoss,
	Dungeons,
	Dungeon1,
	Dungeon2,
	Dungeon3,
	Dungeon4,
	Heroes,
	Fighter,
	Sorcerer,
	Rogue,
	Bard,
}

export const MenuKeysLabel: Map<MenuKeys, string> = new Map([
	[MenuKeys.FinalBoss, 'finalboss'],
	[MenuKeys.Dungeons, 'dungeons'],
	[MenuKeys.Dungeon1, 'dungeon 1'],
	[MenuKeys.Dungeon2, 'dungeon 2'],
	[MenuKeys.Dungeon3, 'dungeon 3'],
	[MenuKeys.Dungeon4, 'dungeon 4'],
	[MenuKeys.Heroes, 'heroes'],
	[MenuKeys.Fighter, 'fighter'],
	[MenuKeys.Sorcerer, 'sorcerer'],
	[MenuKeys.Rogue, 'rogue'],
	[MenuKeys.Bard, 'bard']
]);

export const MenuKeysKey: Map<string, MenuKeys> = new Map([
	['finalboss', MenuKeys.FinalBoss],
	['dungeons', MenuKeys.Dungeons],
	['dungeon1', MenuKeys.Dungeon1],
	['dungeon2', MenuKeys.Dungeon2],
	['dungeon3', MenuKeys.Dungeon3],
	['dungeon4', MenuKeys.Dungeon4],
	['heroes', MenuKeys.Heroes],
	['fighter', MenuKeys.Fighter],
	['sorcerer', MenuKeys.Sorcerer],
	['rogue', MenuKeys.Rogue],
	['bard', MenuKeys.Bard]
]);
