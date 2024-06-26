import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import { MenuDrawerContext } from '../MenuDrawer';
import Dungeon from '../../../components/Dungeon'
import { Dungeon as Dungeons } from '../../../components/Dungeon/Dungeon.types';
import BottomButtons from '../BottomButtons';



type Props = {
	index: 0 | 1 | 2 | 3;
}
const DungeonWithContext = ({ index = 0 }: Props) => {
	const { getCurrentSaveGameData, setDungeon } = useContext(DataContext);
	const { setSelectedMenuItem } = useContext(MenuDrawerContext);
	const { dungeons = [] } = getCurrentSaveGameData() ?? {};
	console.log({ dungeons, index })
	const dungeon = dungeons ? dungeons[index] as Dungeons : Dungeons.Gauntlgrym;
	return <Dungeon
		dungeon={dungeon as Dungeons}
		blocked={index === 3}
		onSave={({ dungeon }) => { setDungeon({ dungeon, index: index as (0 | 1 | 2) }); setSelectedMenuItem(undefined); }}
		dungeonToIgnore={(index !== 3 && dungeons) ? dungeons[3] : undefined}
	>
		<BottomButtons />
	</Dungeon>
}

export default DungeonWithContext;

