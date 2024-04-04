import { useContext } from 'react';
import { SaveGameContext } from '../../../store/SaveGameProvider';
import Player from '../../../components/Player'
import { Class, Characters } from '../../../components/Character/Character.types';



type Props = {
	playerClass: Class.Fighter | Class.Sorcerer | Class.Bard | Class.Rogue;
}
const PlayerWithContext = ({ playerClass = Class.Fighter }: Props) => {
	const { saveGame, setCharacter } = useContext(SaveGameContext);
	console.log({ saveGame })
	const { players } = saveGame;
	const player = players?.[playerClass];
	return <Player
		playerClass={playerClass}
		playerStats={{ character: player }}
		onSave={({ character = Characters[0] }) => setCharacter({ character, index: playerClass })}
	/>
}

export default PlayerWithContext;

