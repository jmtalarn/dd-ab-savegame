import { useContext } from 'react';
import { SaveGameContext } from '../../../store/SaveGameProvider';
import Boss from '../../../components/Boss'


const BossWithContext = () => {
	const { saveGame, setBoss } = useContext(SaveGameContext);
	console.log({ saveGame })
	const { boss } = saveGame;
	return <Boss boss={boss} onSave={boss => setBoss({ boss })} />
}

export default BossWithContext;

