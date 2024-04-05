
import { DataContextType } from "./DataProvider"

const LS_KEY = "DD-AB_SAVEGAME";

export const setInLocalStorage = ({ currentSaveGame, saveGames }: DataContextType) => {
	console.log({ currentSaveGame, saveGames })
	console.log(JSON.stringify({
		currentSaveGame,
		saveGames: saveGames ? [...saveGames.entries()] : []
	}))
	window.localStorage.setItem(LS_KEY,
		JSON.stringify({
			currentSaveGame,
			saveGames: saveGames ? [...saveGames.entries()] : []
		}));
}

export const getFromLocalStorage = () => {
	const storedData = window.localStorage.getItem(LS_KEY);
	if (storedData) {
		const { currentSavegame, saveGames } = JSON.parse(storedData)
		return (
			{
				currentSavegame,
				saveGames: saveGames.reduce(
					(acc: Map<string, SaveGameType>, curr: (string | SaveGameType)[]) => {
						acc.set(curr[0] as string, curr[1] as SaveGameType);
						return acc;
					}
					, new Map()
				)
			})
	} else {
		return { saveGames: new Map() }
	}

}

