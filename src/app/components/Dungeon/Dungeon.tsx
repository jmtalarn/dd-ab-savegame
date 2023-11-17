import { useContext } from 'react';
import { SaveGameContext } from '../../../store/SaveGameProvider';
import Dungeon from '../../../components/Dungeon'
import { Dungeon as Dungeons } from '../../../components/Dungeon/Dungeon.types';




type Props = {
	index: 0 | 1 | 2 | 3;
}
const DungeonWithContext = ({ index = 0 }: Props) => {
	const { saveGame, setDungeon } = useContext(SaveGameContext);
	const { dungeons } = saveGame;
	const dungeon = dungeons[index] as Dungeons
	return <Dungeon
		dungeon={dungeon}
		blocked={index === 3}
		onSave={({ dungeon }) => { setDungeon({ dungeon, index }) }}
		dungeonToIgnore={dungeons[3]}
	/>
}

export default DungeonWithContext;

