import { useState } from 'react';
// useContext } from 'react';
// import { SaveGameContext } from '../../../store/SaveGameProvider';
import Menu, { MenuKeys } from '../../../components/Menu/Menu'
import Drawer from '../../../components/Drawer'
import CharacterName from '../../../components/CharacterName';
import Boss from '../Boss';
import Dungeon from '../Dungeon';
import Player from '../Player';
import { Class } from '../../../components/Character/Character.types';
import { capitalize, ordinalize } from '../../../utils'

const getComponentAndTitle = (keys?: MenuKeys[]) => {

	if (!keys || !keys.length) { return ({ title: null, component: null }) }
	const [kind] = keys.slice(-1);

	switch (kind) {
		case MenuKeys.FinalBoss:
			return ({ component: <Boss />, title: "Final Boss" });
		case MenuKeys.Dungeons: {
			const index = parseInt(keys[0].split(" ")[1], 10);
			const title = `${ordinalize(index, 4)} Dungeon`;
			return ({ component: <Dungeon index={index - 1} />, title });
		}
		case MenuKeys.Heroes: {
			const playerClass = keys[0] as Class;
			const title = <CharacterName classType={playerClass} text={`${capitalize(playerClass)} character`} />;
			return ({ component: <Player playerClass={playerClass} />, title });
		}
	}
}


const MenuDrawer = () => {
	//const { saveGame, setDungeon, setBoss, setCharacter } = useContext(SaveGameContext);
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuKeys[]>();
	const { title, component } = getComponentAndTitle(selectedMenuItem);

	const onClick: MenuProps['onClick'] = ({ keyPath }) => {
		setSelectedMenuItem(keyPath);
	};

	const onClose = () => {
		setSelectedMenuItem(null);
	}

	return <>
		<Menu onClick={onClick}></Menu>
		{selectedMenuItem && (<Drawer open={!!selectedMenuItem} onClose={onClose} title={title}>{component}</Drawer>)}
	</>

}

export default MenuDrawer;
