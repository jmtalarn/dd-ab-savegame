import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
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
import { MenuKeys, MenuKeysLabel } from './MenuKeys';
import '../../styles/generic.module.css';
import { Class } from '../Character/Character.types';



const items: MenuProps['items'] = [
  {
    key: MenuKeysLabel.get(MenuKeys.FinalBoss),
    icon: (
      <div>
        <FontAwesomeIcon icon={faSkull} />
      </div>
    ),
    label: 'Final Boss',
  },
  {
    key: MenuKeysLabel.get(MenuKeys.Dungeons),
    icon: (
      <div>
        <FontAwesomeIcon icon={faRoute} />
      </div>
    ),
    label: 'Dungeons',
    children: [
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon1),
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle1} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'First dungeon',
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon2),
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle2} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Second dungeon',
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon3),
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle3} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Third dungeon',
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon4),
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
    key: MenuKeysLabel.get(MenuKeys.Heroes),
    icon: (
      <div>
        <FontAwesomeIcon icon={faSwords} />
      </div>
    ),
    label: 'Heroes',
    children: [
      {
        key: MenuKeysLabel.get(MenuKeys.Fighter),
        label: <CharacterName classType={Class.Fighter} text="Fighter" />,
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Sorcerer),
        label: <CharacterName classType={Class.Sorcerer} text="Sorcerer" />,
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Bard),
        label: <CharacterName classType={Class.Bard} text="Bard" />,
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Rogue),
        label: <CharacterName classType={Class.Rogue} text="Rogue" />,
      },
    ],
  },
];


type MenuAntdProps = {
  onClick?: MenuProps['onClick'];
}

const Menu = ({ onClick }: MenuAntdProps) => {
  console.log({ items })
  return <MenuAntd
    className={styles.menu}
    onClick={onClick}
    mode="inline"
    items={items}
    openKeys={[MenuKeysLabel.get(MenuKeys.Heroes), MenuKeysLabel.get(MenuKeys.Dungeons)]}
  //defaultOpenKeys={[MenuKeys.Heroes, MenuKeys.Dungeons]}
  />
};

export default Menu;
