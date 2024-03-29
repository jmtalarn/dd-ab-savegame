import { createContext, useState } from 'react';
import { SaveGameType } from './SaveGameProvider';





export type DataContextType = {
	currentSaveGame?: { key: string, savegame: SaveGameType },
	saveGames?: Map<string, SaveGameType>,
}

export const DataContext = createContext<DataContextType>();

type DataProviderProps = {
	children?: React.ReactNode
}
export const DataProvider = ({ children }: DataProviderProps) => {
	// this state will be shared with all components 

	const [{ currentSaveGame, saveGames = new Map() }, setData] = useState<DataContextType>({});

	const setCurrentSaveGame = (saveGame: { key: string, savegame: SaveGameType }) => {
		setData({ currentSaveGame: saveGame, saveGames });
	}

	const setNewSaveGame = (newSaveGame: { key: string, savegame: SaveGameType }) => {
		const { key, savegame } = newSaveGame;
		setData({ currentSaveGame, saveGames: new Map(saveGames?.set(key, savegame)) });
	}

	const deleteSaveGame = (keyToDelete: string) => {
		const newMap = new Map(saveGames);
		newMap?.delete(keyToDelete);

		setData({ currentSaveGame, saveGames: newMap });
	}


	console.log("saveGames in DataProvider", saveGames)

	return (
		<DataContext.Provider
			value={{
				currentSaveGame,
				saveGames,
				setCurrentSaveGame,
				setNewSaveGame,
				deleteSaveGame
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

