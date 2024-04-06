import { useState, useContext, createContext } from 'react';

import Menu from '../../../components/Menu/Menu'
import { MenuKeys, MenuKeysKey } from '../../../components/Menu/MenuKeys';
import Drawer from '../../../components/Drawer'
import CharacterName from '../../../components/CharacterName';
import Boss from '../Boss';
import Dungeon from '../Dungeon';
import Player from '../Player';
import { ClassKey } from '../../../components/Character/Character.types';
import { capitalize, ordinalize } from '../../../utils'
import type { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';



export const MenuDrawerContext = createContext<MenuKeys[]>();
export const MenuDrawerProvider = ({ children }: { children?: React.ReactNode }) => {
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuKeys[]>();

	return (
		<MenuDrawerContext.Provider
			value={{
				selectedMenuItem,
				setSelectedMenuItem
			}}
		>
			{children}
		</MenuDrawerContext.Provider>
	)


}




const getComponentAndTitle = (keys?: MenuKeys[]) => {
	if (!keys || !keys.length) { return ({ title: null, component: null }) }
	const kind = MenuKeysKey.get(keys.slice(-1)[0]);

	switch (kind) {
		case MenuKeys.FinalBoss:
			return ({ component: <Boss />, title: "Final Boss" });
		case MenuKeys.Dungeons: {
			const index = parseInt(keys[0].split(" ")[1], 10);
			const title = `${ordinalize(index, 4)} Dungeon`;
			return ({ component: <Dungeon index={(index - 1) as (0 | 1 | 2 | 3)} />, title });
		}
		case MenuKeys.Heroes: {
			const playerClass = keys[0];
			const title = <CharacterName classType={ClassKey.get(playerClass)} text={`${capitalize(playerClass)} character`} />;
			return ({ component: <Player playerClass={ClassKey.get(playerClass)} />, title });
		}
		default:
			return ({ title: null, component: null });
	}
}


const MenuDrawer = () => {
	const { selectedMenuItem, setSelectedMenuItem } = useContext(MenuDrawerContext);
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
