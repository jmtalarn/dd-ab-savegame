import react, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan } from '@fortawesome/pro-duotone-svg-icons';
import { Button, Popconfirm } from 'antd';
//import cx from 'classnames';
import styles from './SaveGame.module.css';
//import { ReactComponent as TitleIcon } from "../../assets/icon.svg"



const SaveGame = () => {
  const [savegames, setSaveGame] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const saveGameKey = new Intl.DateTimeFormat(undefined, options).format(today);

  const countSaveGames = savegames.filter(savegame => savegame.startsWith(saveGameKey)).length;


  const createSaveGame = () => {
    const key = `${saveGameKey}${countSaveGames ? ` ${countSaveGames + 1}` : ''}`;
    //if (!savegames.includes(saveGameKey)) {
    setSaveGame([key, ...savegames])
    //}
  }

  const deleteSaveGame = (key) => {
    setSaveGame(savegames.filter(savegame => savegame !== key))
  };
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }

    if (countSaveGames === 0) {
      setOpen(false);
      createSaveGame();
    } else {
      setOpen(newOpen);
    }
  };

  return (<div className={styles['savegame-list']} >
    <Popconfirm
      title="Do you want to create a new savegame?"
      description="Already exists another savegame for today."
      open={open}
      onOpenChange={handleOpenChange}
      onConfirm={createSaveGame}
      onCancel={() => { }}
      okText="Yes"
      cancelText="No"
    >
      <Button
        className={styles['save-button']}
        type="primary"
        title="It will create a new SaveGame per the Current Date"
      //onClick={createSaveGame}
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
        <span>New Save Game for today</span>
      </Button>
    </Popconfirm>

    {savegames.map(savegame => (
      <div className={styles.savegame}>
        <Button key={savegame}>{savegame}</Button>
        <Popconfirm title="Do you want to delete this savegame?"
          onConfirm={() => deleteSaveGame(savegame)}
          onCancel={() => { }}
          okText="Yes"
          cancelText="No">
          <Button danger shape="circle" icon={<FontAwesomeIcon icon={faTrashCan} />} />
        </Popconfirm>
      </div>
    ))}


  </div>
  );
};

export default SaveGame;
