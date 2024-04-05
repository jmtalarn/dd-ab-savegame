import { createContext, useState, useEffect } from 'react';
import { setInLocalStorage, getFromLocalStorage } from './LocalStoreManager';
import { Boss, BossDungeonMap } from '../components/Boss/Boss.types';
import { Dungeon } from '../components/Dungeon/Dungeon.types';
import {
	Character, Class
} from '../components/Character/Character.types';


export type DataContextType = {
	currentSaveGame?: string,
	saveGames?: Map<string, SaveGameType>,
	getCurrentSaveGameData: () => SaveGameType,
	setCurrentSaveGame: (key: string) => void;
	setBoss: ({ boss }: { boss: Boss }) => void;
	setDungeon: ({ dungeon, index }: { dungeon: Dungeon, index: 0 | 1 | 2 }) => void;
	setCharacter: ({ playerStats, index }: { playerStats: PlayerStats, index: Class }) => void;
	newSaveGame?: (key: string) => void,
	deleteSaveGame?: (keyToDelete: string) => void
}

export type SaveGameType = {
	boss?: Boss;
	dungeons?: Array<Dungeon | undefined>;
	players?: {
		[Class.Fighter]?: Character;
		[Class.Sorcerer]?: Character;
		[Class.Bard]?: Character;
		[Class.Rogue]?: Character;
	};
}


export const DataContext = createContext<DataContextType>({});

type DataProviderProps = {
	children?: React.ReactNode
}
export const DataProvider = ({ children }: DataProviderProps) => {
	// this state will be shared with all components 

	const [data, setData] = useState<DataContextType>(getFromLocalStorage);

	const { currentSaveGame, saveGames } = data;

	useEffect(() => {
		setInLocalStorage(data);
	}, [data]);

	const setCurrentSaveGame = (key: string) => {
		setData({ currentSaveGame: key, saveGames });
	}
	const getCurrentSaveGameData = () => saveGames.get(currentSaveGame);

	const saveCurrentSaveGame = (savegame: SaveGameType) => {
		setData({ currentSaveGame, saveGames: new Map(saveGames.set(currentSaveGame, savegame)) });
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
		const currentSaveGameData = saveGames.get(currentSaveGame);
		console.log(currentSaveGame, currentSaveGameData);
		const dungeons = [...currentSaveGameData.dungeons!];
		dungeons[3] = BossDungeonMap.get(Number(boss));

		const newSaveGame = {
			...currentSaveGameData,
			boss,
			dungeons: [...dungeons]
		};

		saveCurrentSaveGame(newSaveGame);


	}
	const setDungeon = ({ dungeon, index }: { dungeon: Dungeon, index: 0 | 1 | 2 }) => {
		const saveGame = saveGames.get(currentSaveGame);
		const dungeons = [...saveGame.dungeons!];

		dungeons[index] = dungeon;
		const newSaveGame = {
			...saveGame,
			dungeons: [...dungeons]
		};

		saveCurrentSaveGame(newSaveGame);
	}

	const setCharacter = ({ playerStats, index }: { playerStats: PlayerStats, index: Class }) => {
		const saveGame = saveGames.get(currentSaveGame);

		const { players } = saveGame;

		const newSaveGame = {
			...saveGame,
			players: { ...players, [index]: playerStats }
		};

		saveCurrentSaveGame(newSaveGame);
	}

	return (
		<DataContext.Provider
			value={{
				currentSaveGame,
				getCurrentSaveGameData,
				saveGames,
				setBoss,
				setDungeon,
				setCharacter,
				setCurrentSaveGame,
				newSaveGame,
				deleteSaveGame
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

