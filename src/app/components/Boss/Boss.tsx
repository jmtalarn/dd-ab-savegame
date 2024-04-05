import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import Boss from '../../../components/Boss'


const BossWithContext = () => {
	const { getCurrentSaveGameData, setBoss } = useContext(DataContext);
	const { boss } = getCurrentSaveGameData();
	return <Boss boss={boss} onSave={(boss) => setBoss(boss)} />
}

export default BossWithContext;

