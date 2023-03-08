import react from 'react';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSkull,
  faDungeon,
  faRoute,
  faSwords,
  faAxeBattle,
  faHatWizard,
  faDagger,
  faBowArrow,
  faCircle1,
  faCircle2,
  faCircle3,
} from '@fortawesome/pro-duotone-svg-icons';
import styles from './Menu.module.css';
//dungeon
//eye-evil
//dice-d20
//dice-d10
//dagger
//axe-battle
//swords
//sword
//scroll-old
//puzzle
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
        icon: (
          <div>
            <FontAwesomeIcon icon={faAxeBattle} className={styles.fighter} />
          </div>
        ),
        label: <span className={styles.fighter}>Fighter</span>,
      },
      {
        key: 'sorcerer',
        icon: (
          <div>
            <FontAwesomeIcon icon={faHatWizard} className={styles.sorcerer} />
          </div>
        ),
        label: <span className={styles.sorcerer}>Sorcerer</span>,
      },
      {
        key: 'bard',
        icon: (
          <div>
            <FontAwesomeIcon icon={faBowArrow} className={styles.bard} />
          </div>
        ),
        label: <span className={styles.bard}>Bard</span>,
      },
      {
        key: 'rogue',
        icon: (
          <div>
            <FontAwesomeIcon icon={faDagger} className={styles.rogue} />
          </div>
        ),
        label: <span className={styles.rogue}>Rogue</span>,
      },
    ],
  },
];

const Menu = () => <MenuAntd mode="inline" items={items} openKeys={['heroes', 'dungeons']}></MenuAntd>;

export default Menu;
