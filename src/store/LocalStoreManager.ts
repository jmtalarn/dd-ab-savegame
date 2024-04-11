
import { DataContextTypeData, SaveGameType } from "./DataProvider"

const LS_KEY = "DD-AB_SAVEGAME";

export const setInLocalStorage = ({ currentSaveGame, saveGames }: DataContextTypeData) => {
	window.localStorage.setItem(LS_KEY,
		JSON.stringify({
			currentSaveGame,
			saveGames: saveGames ? [...saveGames.entries()] : []
		}));
}
type LocalStorageDataContextType = {
	currentSavegame: string;
	saveGames: [string, SaveGameType][]
}

export const getFromLocalStorage = (): DataContextTypeData => {
	const storedData = window.localStorage.getItem(LS_KEY);
	if (storedData) {
		const { currentSavegame, saveGames }: LocalStorageDataContextType = JSON.parse(storedData);

		return (
			{
				currentSaveGame: currentSavegame,
				saveGames: saveGames.reduce(
					(acc: Map<string, SaveGameType>, curr: (string | SaveGameType)[]) => {
						acc.set(curr[0] as string, curr[1] as SaveGameType);
						return acc;
					}
					, new Map<string, SaveGameType>()
				)
			})
	} else {
		return { saveGames: new Map<string, SaveGameType>() }
	}

}

