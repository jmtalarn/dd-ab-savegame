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
import { ItemType } from 'antd/es/menu/hooks/useItems';



const items: MenuProps['items'] = [
  {
    key: MenuKeysLabel.get(MenuKeys.FinalBoss) || "The final Boss!",
    icon: (
      <div>
        <FontAwesomeIcon icon={faSkull} />
      </div>
    ),
    label: 'Final Boss',
  },
  {
    key: MenuKeysLabel.get(MenuKeys.Dungeons) || "The Dungeons",
    icon: (
      <div>
        <FontAwesomeIcon icon={faRoute} />
      </div>
    ),
    label: 'Dungeons',
    children: [
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon1) || "The first dungeon",
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle1} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'First dungeon',
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon2) || "The second dungeon",
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle2} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Second dungeon',
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon3) || "The third dungeon",
        icon: (
          <div className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faDungeon} />
            <FontAwesomeIcon icon={faCircle3} className={styles['dungeon-index']} transform="shrink-5 left-10 down-5" />
          </div>
        ),
        label: 'Third dungeon',
      },
      {
        key: MenuKeysLabel.get(MenuKeys.Dungeon4) || "The final dungeon",
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
    key: MenuKeysLabel.get(MenuKeys.Heroes) || "The heroes",
    icon: (
      <div>
        <FontAwesomeIcon icon={faSwords} />
      </div>
    ),
    label: 'Heroes',
    children: [
      {
        key: MenuKeysLabel.get(MenuKeys.Fighter) || "The Fighter",
        label: <CharacterName classType={Class.Fighter} text="Fighter" />,
      } as ItemType,
      {
        key: MenuKeysLabel.get(MenuKeys.Sorcerer) || "The Sorcerer",
        label: <CharacterName classType={Class.Sorcerer} text="Sorcerer" />,
      } as ItemType,
      {
        key: MenuKeysLabel.get(MenuKeys.Bard) || "The Bard",
        label: <CharacterName classType={Class.Bard} text="Bard" />,
      } as ItemType,
      {
        key: MenuKeysLabel.get(MenuKeys.Rogue) || "The Rogue",
        label: <CharacterName classType={Class.Rogue} text="Rogue" />,
      } as ItemType,
    ],
  },
];


type MenuAntdProps = {
  onClick?: MenuProps['onClick'];
}

const Menu = ({ onClick }: MenuAntdProps) => {
  return <MenuAntd
    className={styles.menu}
    onClick={onClick}
    mode="inline"
    items={items}
    openKeys={[MenuKeysLabel.get(MenuKeys.Heroes) || '', MenuKeysLabel.get(MenuKeys.Dungeons) || '']}
  //defaultOpenKeys={[MenuKeys.Heroes, MenuKeys.Dungeons]}
  />
};

export default Menu;
