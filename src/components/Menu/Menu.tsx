import react from 'react';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CharacterName from '../CharacterName';
import {
  faSkull,
  faDungeon,
  faRoute,
  faSwords,
  faCircle1,
  faCircle2,
  faCircle3,
} from '@fortawesome/pro-duotone-svg-icons';
import styles from './Menu.module.css';

import '../../styles/generic.module.css';
import { Class } from '../Character/Character.types';

export enum MenuKeys {
  FinalBoss = 'final boss',
  Dungeons = 'dungeons',
  Dungeon1 = 'dungeon 1',
  Dungeon2 = 'dungeon 2',
  Dungeon3 = 'dungeon 3',
  Dungeon4 = 'dungeon 4',
  Heroes = 'heroes',
  Fighter = 'fighter',
  Sorcerer = 'sorcerer',
  Rogue = 'rogue',
  Bard = 'bard'
}

const items: ItemType[] = [
  {
    key: MenuKeys.FinalBoss,
    icon: (
      <div>
        <FontAwesomeIcon icon={faSkull} />
      </div>
    ),
    label: 'Final Boss',
  },
  {
    key: MenuKeys.Dungeons,
    icon: (
      <div>
        <FontAwesomeIcon icon={faRoute} />
      </div>
    ),
    label: 'Dungeons',

    children: [
      {
        key: MenuKeys.Dungeon1,
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle1} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'First dungeon',
      },
      {
        key: MenuKeys.Dungeon2,
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle2} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Second dungeon',
      },
      {
        key: MenuKeys.Dungeon3,
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle3} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Third dungeon',
      },
      {
        key: MenuKeys.Dungeon4,
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faSkull} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Final dungeon',
      },
    ],
  },
  {
    key: MenuKeys.Heroes,
    icon: (
      <div>
        <FontAwesomeIcon icon={faSwords} />
      </div>
    ),
    label: 'Heroes',

    children: [
      {
        key: MenuKeys.Fighter,
        label: <CharacterName classType={Class.Fighter} text="Fighter" />,
      },
      {
        key: MenuKeys.Sorcerer,
        label: <CharacterName classType={Class.Sorcerer} text="Sorcerer" />,
      },
      {
        key: MenuKeys.Bard,
        label: <CharacterName classType={Class.Bard} text="Bard" />,
      },
      {
        key: MenuKeys.Rogue,
        label: <CharacterName classType={Class.Rogue} text="Rogue" />,
      },
    ],
  },
];


type MenuAntdProps = {
  onClick?: MenuProps['onClick'];
}

const Menu = ({ onClick }: MenuAntdProps) => <MenuAntd
  className={styles.menu}
  onClick={onClick}
  mode="inline"
  items={items}
  openKeys={[MenuKeys.Heroes, MenuKeys.Dungeons]}
/>;

export default Menu;
