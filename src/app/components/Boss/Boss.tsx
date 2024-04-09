import { useContext } from 'react';
import { DataContext } from '../../../store/DataProvider';
import Boss from '../../../components/Boss'
import BottomButtons from '../BottomButtons';

const BossWithContext = () => {
	const { getCurrentSaveGameData, setBoss } = useContext(DataContext);
	console.log("getCurrentSaveGameData", getCurrentSaveGameData())
	const { boss = undefined } = getCurrentSaveGameData() ?? {};
	return (
		<Boss
			boss={boss}
			onSave={(boss) => setBoss(boss)}
		>
			<BottomButtons />
		</Boss>
	)
}

export default BossWithContext;

