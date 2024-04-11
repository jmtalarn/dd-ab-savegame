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


export type MenuDrawerContextType = {
	selectedMenuItem?: MenuKeys[];
	setSelectedMenuItem: (menuKeys: MenuKeys[] | undefined) => void;
}

export const MenuDrawerContext = createContext<MenuDrawerContextType>({ setSelectedMenuItem: (menuKeys: MenuKeys[] | undefined) => { throw new Error(`MenuDrawerProvider must be used in order to set the selected menu item ${menuKeys?.toString()}`) } });

export const MenuDrawerProvider = ({ children }: { children?: React.ReactNode }) => {
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuKeys[] | undefined>();

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
	const kind = MenuKeysKey.get(keys.slice(-1)[0].toString());

	switch (kind) {
		case MenuKeys.FinalBoss:
			return ({ component: <Boss />, title: "Final Boss" });
		case MenuKeys.Dungeons: {
			const index = parseInt(keys[0].toString().split(" ")[1], 10);
			const title = `${ordinalize(index, 4)} Dungeon`;
			return ({ component: <Dungeon index={(index - 1) as (0 | 1 | 2 | 3)} />, title });
		}
		case MenuKeys.Heroes: {
			const playerClass = keys[0].toString();
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
	console.log({ title, component })
	const onClick: MenuProps['onClick'] = ({ keyPath }: MenuInfo) => {
		setSelectedMenuItem(keyPath as unknown as MenuKeys[]);
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
