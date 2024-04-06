import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import { MenuDrawerContext } from '../MenuDrawer/MenuDrawer';
import Player from '../../../components/Player'
import { Class } from '../../../components/Character/Character.types';



type Props = {
	playerClass: Class.Fighter | Class.Sorcerer | Class.Bard | Class.Rogue;
}
const PlayerWithContext = ({ playerClass = Class.Fighter }: Props) => {
	const { getCurrentSaveGameData, setCharacter } = useContext(DataContext);
	const { setSelectedMenuItem } = useContext(MenuDrawerContext);

	const { players } = getCurrentSaveGameData();
	const player = players?.[playerClass];

	return <Player
		playerClass={playerClass}
		playerStats={{ ...player }}
		onSave={(playerStats) => setCharacter({ playerStats, index: playerClass })}
		onCancel={() => { setSelectedMenuItem?.(undefined) }}
	/>
}

export default PlayerWithContext;

