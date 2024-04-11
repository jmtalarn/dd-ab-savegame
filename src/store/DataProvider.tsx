import { createContext, useState, useEffect } from 'react';
import { setInLocalStorage, getFromLocalStorage } from './LocalStoreManager';
import { Boss, BossLabel, BossDungeonMap } from '../components/Boss/Boss.types';
import { Dungeon, DungeonLabel } from '../components/Dungeon/Dungeon.types';
import {
	PlayerStats, Class, ClassLabel
} from '../components/Character/Character.types';
import { ordinalize } from '../utils';

export type DataContextType = {
	currentSaveGame?: string,
	saveGames: Map<string, SaveGameType>,
	getCurrentSaveGameData: () => SaveGameType,
	setCurrentSaveGame: (key?: string) => void;
	setBoss: ({ boss }: { boss: Boss }) => void;
	setDungeon: ({ dungeon, index }: { dungeon: Dungeon, index: 0 | 1 | 2 }) => void;
	setCharacter: ({ playerStats, index }: { playerStats: PlayerStats, index: Class }) => void;
	newSaveGame: (key: string) => void,
	deleteSaveGame: (keyToDelete: string) => void
}

export type DataContextTypeData = Pick<DataContextType, "currentSaveGame" | "saveGames">;

export type DataContextTypeMethods = Pick<DataContextType,
	"getCurrentSaveGameData" |
	"setCurrentSaveGame" |
	"setBoss" |
	"setDungeon" |
	"setCharacter" |
	"newSaveGame" |
	"deleteSaveGame"
>;

export type SaveGameType = {
	boss?: Boss;
	dungeons?: Array<Dungeon | undefined>;
	players?: {
		[Class.Fighter]?: PlayerStats;
		[Class.Sorcerer]?: PlayerStats;
		[Class.Bard]?: PlayerStats;
		[Class.Rogue]?: PlayerStats;
	};
}


export const DataContext = createContext<DataContextType>({
	saveGames: new Map<string, SaveGameType>(),
	getCurrentSaveGameData: () => { throw new Error(`DataProvider must be used in order to get the current save game data`) },

	setCurrentSaveGame: (key?: string) => { throw new Error(`DataProvider must be used in order to use ${key} as current save game key`) },

	setBoss: ({ boss }: { boss: Boss }) => { throw new Error(`DataProvider must be used in order to use ${BossLabel.get(boss)} as the final boss`) },

	setDungeon: ({ dungeon, index }: { dungeon: Dungeon, index: 0 | 1 | 2 }) => { throw new Error(`DataProvider must be used in order to use ${DungeonLabel.get(dungeon)} as the ${ordinalize((index + 1), 4)}`) },

	setCharacter: ({ playerStats, index }: { playerStats: PlayerStats, index: Class }) => {
		throw new Error(`DataProvider must be used in order to save the player stats ${JSON.stringify(playerStats)} for the ${ClassLabel.get(index)}`);
	},

	newSaveGame: (key: string) => { throw new Error(`DataProvider must be used in order to create a new savegame for the key ${key}`); },

	deleteSaveGame: (keyToDelete: string) => { throw new Error(`DataProvider must be used in order to delete the savegame for the key ${keyToDelete}`); }
});

type DataProviderProps = {
	children?: React.ReactNode
}
export const DataProvider = ({ children }: DataProviderProps) => {
	// this state will be shared with all components 
	const [data, setData] = useState<DataContextTypeData>(() => (getFromLocalStorage()));

	const setCurrentSaveGame = (key?: string) => {
		setData({ currentSaveGame: key, saveGames });
	}
	const getCurrentSaveGameData = () => (currentSaveGame ? saveGames.get(currentSaveGame) : {}) || {};

	const saveCurrentSaveGame = (savegame: SaveGameType) => {
		setData({ currentSaveGame, saveGames: new Map(currentSaveGame ? saveGames.set(currentSaveGame, savegame) : saveGames) });
	}

	const newSaveGame = (key: string) => {

		setData(
			{
				currentSaveGame,
				saveGames: new Map(
					saveGames?.set(
						key,
						{
							dungeons: [],
							players: {
								[Class.Fighter]: { level: "1", life: 10, coins: 0 },
								[Class.Sorcerer]: { level: "1", life: 10, coins: 0 },
								[Class.Bard]: { level: "1", life: 10, coins: 0 },
								[Class.Rogue]: { level: "1", life: 10, coins: 0 },
							}
						}
					)
				)
			}
		);
	}

	const deleteSaveGame = (keyToDelete: string) => {
		const newMap = new Map(saveGames);
		newMap?.delete(keyToDelete);
		setData({ currentSaveGame, saveGames: newMap });
	}


	const setBoss = ({ boss }: { boss: Boss }) => {
		const currentSaveGameData = (currentSaveGame ? saveGames.get(currentSaveGame) : { dungeons: [] }) || { dungeons: [] };

		const dungeons = [...currentSaveGameData.dungeons!];
		console.log("Dungeon for boss", { dungeon: BossDungeonMap.get(Number(boss)) });
		dungeons[3] = BossDungeonMap.get(Number(boss))?.toString() as unknown as Dungeon;

		const newSaveGame = {
			...currentSaveGameData,
			boss,
			dungeons: [...dungeons]
		};

		saveCurrentSaveGame(newSaveGame);


	}
	const setDungeon = ({ dungeon, index }: { dungeon: Dungeon, index: 0 | 1 | 2 }) => {
		const saveGame = (currentSaveGame ? saveGames.get(currentSaveGame) : { dungeons: [] }) || { dungeons: [] };
		const dungeons = [...saveGame.dungeons!];

		dungeons[index] = dungeon as Dungeon;
		const newSaveGame = {
			...saveGame,
			dungeons: [...dungeons]
		};

		saveCurrentSaveGame(newSaveGame);
	}

	const setCharacter = ({ playerStats, index }: { playerStats: PlayerStats, index: Class }) => {
		const saveGame = currentSaveGame ? saveGames.get(currentSaveGame) : undefined;

		const { players } = saveGame || { players: {} };

		const newSaveGame = {
			...saveGame,
			players: { ...players, [index]: playerStats }
		};

		saveCurrentSaveGame(newSaveGame);
	}

	const methods: DataContextTypeMethods = {
		getCurrentSaveGameData,
		setBoss,
		setDungeon,
		setCharacter,
		setCurrentSaveGame,
		newSaveGame,
		deleteSaveGame
	}



	const { currentSaveGame, saveGames } = data;

	useEffect(() => {
		setInLocalStorage(data);
	}, [data]);



	return (
		<DataContext.Provider
			value={{
				currentSaveGame,
				saveGames,
				...methods
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

