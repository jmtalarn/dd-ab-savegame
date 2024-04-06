import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import SaveGame from '../../../components/SaveGame'


const SaveGameWithContext = () => {
	const {
		saveGames,
		setCurrentSaveGame,
		newSaveGame,
		deleteSaveGame } = useContext(DataContext);

	const onSetCurrentSaveGame = (currentKey: string) => {
		setCurrentSaveGame?.(currentKey);
	}

	const onSetNewSaveGame = (key: string) => {
		newSaveGame?.(key)
	}

	return <SaveGame
		onSaveGame={onSetNewSaveGame}
		onDeleteGame={deleteSaveGame}
		onSetCurrentSaveGame={onSetCurrentSaveGame}
		saveGames={[...(saveGames?.keys() ?? [])]} />
}

export default SaveGameWithContext;

