import { useContext } from 'react';
import { SaveGameContext } from '../../../store/SaveGameProvider';
import Player from '../../../components/Player'
import { Class } from '../../../components/Character/Character.types';




type Props = {
	playerClass: Class.Fighter | Class.Sorcerer | Class.Bard | Class.Rogue;
}
const PlayerWithContext = ({ playerClass = Class.Fighter }: Props) => {
	const { saveGame, setCharacter } = useContext(SaveGameContext);
	const { players } = saveGame;
	const player = players?.[playerClass];
	return <Player
		playerClass={playerClass}
		playerStats={player}
		onSave={(values) => setCharacter({ character: values, index: playerClass })}
	/>
}

export default PlayerWithContext;

