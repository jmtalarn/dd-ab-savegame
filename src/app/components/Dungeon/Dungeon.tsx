import { useContext } from 'react';
import { SaveGameContext } from '../../../store/SaveGameProvider';
import Dungeon from '../../../components/Dungeon'
import { Dungeon as Dungeons } from '../../../components/Dungeon/Dungeon.types';




type Props = {
	index: 0 | 1 | 2 | 3;
}
const DungeonWithContext = ({ index = 0 }: Props) => {
	const { saveGame, setDungeon } = useContext(SaveGameContext);
	console.log({ saveGame })
	const { dungeons } = saveGame;
	const dungeon = dungeons ? dungeons[index] as Dungeons : Dungeons.Gauntlgrym;
	return <Dungeon
		dungeon={dungeon}
		blocked={index === 3}
		onSave={(dungeon) => { setDungeon({ dungeon, index: index as (0 | 1 | 2) }) }}
		dungeonToIgnore={dungeons ? dungeons[3] : undefined}
	/>
}

export default DungeonWithContext;

