
import { DataContextType } from "./DataProvider"

const LS_KEY = "DD-AB_SAVEGAME";

export const setInLocalStorage = ({ currentSavegame, saveGames }): DataContextType => {
	console.log({ currentSavegame, saveGames })
	console.log(JSON.stringify({
		currentSavegame,
		saveGames: [...saveGames.entries()]
	}))
	window.localStorage.setItem(LS_KEY,
		JSON.stringify({
			currentSavegame,
			saveGames: [...saveGames.entries()]
		}));
}

export const getFromLocalStorage = () => {
	const storedData = window.localStorage.getItem(LS_KEY);
	if (storedData) {
		const { currentSavegame, saveGames } = JSON.parse(storedData)
		return (
			{
				currentSavegame,
				saveGames: reduceSaveGames(saveGames)
			})
	} else {
		return { saveGames: new Map() }
	}

}

const reduceSaveGames = (saveGames) => saveGames.reduce((acc, curr) => { acc.set(curr[0], curr[1]); return acc; }, new Map())
