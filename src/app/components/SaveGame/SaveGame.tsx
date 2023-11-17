import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import SaveGame from '../../../components/SaveGame'
import { Dungeon as Dungeons } from '../../../components/Dungeon/Dungeon.types'

const SaveGameWithContext = () => {
	const {
		saveGames,
		setCurrentSaveGame,
		setNewSaveGame,
		deleteSaveGame } = useContext(DataContext);

	const onSetCurrentSaveGame = (currentKey: string) => {
		setCurrentSaveGame({ key: currentKey, savegame: saveGames?.get(currentKey) });
	}

	const onSetNewSaveGame = (key: string) => {
		setNewSaveGame({ key, savegame: { dungeons: [] } })
	}

	return <SaveGame
		onSaveGame={onSetNewSaveGame}
		onDeleteGame={deleteSaveGame}
		onSetCurrentSaveGame={onSetCurrentSaveGame}
		saveGames={[...(saveGames?.keys() ?? [])]} />
}

export default SaveGameWithContext;

