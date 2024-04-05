import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import Player from '../../../components/Player'
import { Class, Characters } from '../../../components/Character/Character.types';



type Props = {
	playerClass: Class.Fighter | Class.Sorcerer | Class.Bard | Class.Rogue;
}
const PlayerWithContext = ({ playerClass = Class.Fighter }: Props) => {
	const { getCurrentSaveGameData, setCharacter } = useContext(DataContext);

	const { players } = getCurrentSaveGameData();
	const player = players?.[playerClass];
	return <Player
		playerClass={playerClass}
		playerStats={{ character: player }}
		onSave={({ character = Characters[0] }) => setCharacter({ character, index: playerClass })}
	/>
}

export default PlayerWithContext;

