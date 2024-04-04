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
	[MenuKeys.FinalBoss, 'final boss'],
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
