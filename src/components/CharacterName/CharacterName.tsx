import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAxeBattle, faHatWizard, faDagger, faBowArrow } from '@fortawesome/pro-duotone-svg-icons';
import cx from 'classnames';
import generic from '../../styles/generic.module.css';
import styles from './CharacterName.module.css';
import { Class } from '../Character/Character.types';

const ClassIconMap = {
  [Class.Bard]: faBowArrow,
  [Class.Sorcerer]: faHatWizard,
  [Class.Fighter]: faAxeBattle,
  [Class.Rogue]: faDagger,
};
type Props = {
  classType: Class;
  text: string;
};

const CharacterName = ({ classType, text }: Props) => {
  return (
    <div className={cx(generic[classType], styles.label)}>
      <FontAwesomeIcon icon={ClassIconMap[classType]} />
      <span>{text}</span>
    </div>
  );
};

export default CharacterName;
