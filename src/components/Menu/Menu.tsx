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

const items: ItemType[] = [
  {
    key: 'final boss',
    icon: (
      <div>
        <FontAwesomeIcon icon={faSkull} />
      </div>
    ),
    label: 'Final Boss',
  },
  {
    key: 'dungeons',
    icon: (
      <div>
        <FontAwesomeIcon icon={faRoute} />
      </div>
    ),
    label: 'Dungeons',

    children: [
      {
        key: 'dungeon 1',
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle1} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'First dungeon',
      },
      {
        key: 'dungeon 2',
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle2} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Second dungeon',
      },
      {
        key: 'dungeon 3',
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle3} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Third dungeon',
      },
      {
        key: 'dungeon 4',
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
    key: 'heroes',
    icon: (
      <div>
        <FontAwesomeIcon icon={faSwords} />
      </div>
    ),
    label: 'Heroes',

    children: [
      {
        key: 'fighter',
        label: <CharacterName classType={Class.Fighter} text="Fighter" />,
      },
      {
        key: 'sorcerer',
        label: <CharacterName classType={Class.Sorcerer} text="Sorcerer" />,
      },
      {
        key: 'bard',
        label: <CharacterName classType={Class.Bard} text="Bard" />,
      },
      {
        key: 'rogue',
        label: <CharacterName classType={Class.Rogue} text="Rogue" />,
      },
    ],
  },
];

const Menu = () => <MenuAntd mode="inline" items={items} openKeys={['heroes', 'dungeons']}></MenuAntd>;

export default Menu;
