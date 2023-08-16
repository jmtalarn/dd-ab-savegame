import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/pro-duotone-svg-icons';
import cx from 'classnames';
import styles from './Title.module.css';
import { ReactComponent as TitleIcon } from "../../assets/icon.svg"



const Title = () => {
  return (<header className={cx([styles.header])}>
    <h1 className={cx([styles.title])}>
      <TitleIcon className={cx([styles['title-icon']])} />
      <span>Dungeons & Dragons</span><span> ~ </span><span>Adventure Begins</span>
    </h1>
    <h2 className={cx([styles.title])}>
      <FontAwesomeIcon icon={faFloppyDisk} />
      <span>Save game</span>
    </h2>

  </header>
  );
};

export default Title;
