import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import { MenuDrawerContext } from '../MenuDrawer/MenuDrawer';
import Boss from '../../../components/Boss'


const BossWithContext = () => {
	const { getCurrentSaveGameData, setBoss } = useContext(DataContext);
	const { setSelectedMenuItem } = useContext(MenuDrawerContext);
	const { boss } = getCurrentSaveGameData();
	return <Boss
		boss={boss}
		onSave={(boss) => setBoss(boss)}
		onCancel={() => { setSelectedMenuItem?.(undefined) }}
	/>
}

export default BossWithContext;

