import { useState } from 'react';

import Menu from '../../../components/Menu/Menu'
import { MenuKeys, MenuKeysKey } from '../../../components/Menu/MenuKeys';
import Drawer from '../../../components/Drawer'
import CharacterName from '../../../components/CharacterName';
import Boss from '../Boss';
import Dungeon from '../Dungeon';
import Player from '../Player';
import { Class } from '../../../components/Character/Character.types';
import { capitalize, ordinalize } from '../../../utils'
import type { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';


const getComponentAndTitle = (keys?: MenuKeys[]) => {
	if (!keys || !keys.length) { return ({ title: null, component: null }) }
	const kind = MenuKeysKey.get(keys.slice(-1)[0]);
	console.log({ kind, keys })
	switch (kind) {
		case MenuKeys.FinalBoss:
			return ({ component: <Boss />, title: "Final Boss" });
		case MenuKeys.Dungeons: {
			const index = parseInt(keys[0].split(" ")[1], 10);
			const title = `${ordinalize(index, 4)} Dungeon`;
			return ({ component: <Dungeon index={(index - 1) as (0 | 1 | 2 | 3)} />, title });
		}
		case MenuKeys.Heroes: {
			const playerClass = keys[0] as unknown as Class;
			const title = <CharacterName classType={playerClass} text={`${capitalize(playerClass)} character`} />;
			return ({ component: <Player playerClass={playerClass} />, title });
		}
		default:
			return ({ title: null, component: null });
	}
}


const MenuDrawer = () => {
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuKeys[]>();
	const { title, component } = getComponentAndTitle(selectedMenuItem);

	const onClick: MenuProps['onClick'] = ({ keyPath }: MenuInfo) => {
		setSelectedMenuItem(keyPath as MenuKeys[]);
	};

	const onClose = () => {
		setSelectedMenuItem(undefined);
	}

	return <>
		<Menu onClick={onClick}></Menu>
		{selectedMenuItem && (<Drawer open={!!selectedMenuItem} onClose={onClose} title={title}>{component}</Drawer>)}
	</>

}

export default MenuDrawer;
