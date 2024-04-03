import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import SaveGame from '../../../components/SaveGame'
import { SaveGameType } from '../../../store/SaveGameProvider';

const SaveGameWithContext = () => {
	const {
		saveGames,
		setCurrentSaveGame,
		setNewSaveGame,
		deleteSaveGame } = useContext(DataContext);

	const onSetCurrentSaveGame = (currentKey: string) => {
		const emptySaveGame: SaveGameType = {};
		setCurrentSaveGame?.({ key: currentKey, savegame: saveGames?.get(currentKey) || emptySaveGame });
	}

	const onSetNewSaveGame = (key: string) => {
		setNewSaveGame?.({ key, savegame: { dungeons: [] } })
	}

	return <SaveGame
		onSaveGame={onSetNewSaveGame}
		onDeleteGame={deleteSaveGame}
		onSetCurrentSaveGame={onSetCurrentSaveGame}
		saveGames={[...(saveGames?.keys() ?? [])]} />
}

export default SaveGameWithContext;

