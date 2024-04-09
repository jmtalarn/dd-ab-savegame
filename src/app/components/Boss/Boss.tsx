import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import { MenuDrawerContext } from '../MenuDrawer';
import Boss from '../../../components/Boss'
import BottomButtons from '../BottomButtons';

const BossWithContext = () => {
	const { getCurrentSaveGameData, setBoss } = useContext(DataContext);
	const { setSelectedMenuItem } = useContext(MenuDrawerContext);
	console.log("getCurrentSaveGameData", getCurrentSaveGameData())
	const { boss = undefined } = getCurrentSaveGameData() ?? {};
	return (
		<Boss
			boss={boss}
			onSave={(boss) => { setBoss(boss); setSelectedMenuItem(undefined); }}
		>
			<BottomButtons />
		</Boss>
	)
}

export default BossWithContext;

