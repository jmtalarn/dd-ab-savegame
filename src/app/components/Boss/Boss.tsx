import { useContext } from 'react';
import { SaveGameContext } from '../../../store/SaveGameProvider';
import Boss from '../../../components/Boss'


const BossWithContext = () => {
	const { saveGame, setBoss } = useContext(SaveGameContext);
	const { boss } = saveGame;
	return <Boss boss={boss} onSave={setBoss} />
}

export default BossWithContext;

