import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan } from '@fortawesome/pro-duotone-svg-icons';
import { Button, Popconfirm } from 'antd';
import styles from './SaveGame.module.css';


type SaveGameProps = {
  onSaveGame?: (key: string) => void;
  onDeleteGame?: (keyToDelete: string) => void;
  onSetCurrentSaveGame?: (key: string) => void;
  saveGames: string[];
}
const SaveGame = ({ onDeleteGame, onSetCurrentSaveGame, onSaveGame, saveGames }: SaveGameProps) => {

  const [open, setOpen] = useState<boolean>(false);

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const saveGameKey = new Intl.DateTimeFormat(undefined, options).format(today);

  const countSaveGames = saveGames.filter(savegame => savegame.startsWith(saveGameKey)).length;


  const createSaveGame = () => {
    const key = `${saveGameKey}${countSaveGames ? ` ${countSaveGames + 1}` : ''}`;
    onSaveGame?.(key);
  }

  const deleteSaveGame = (key: string) => {
    onDeleteGame?.(key);
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

    {saveGames.map(savegame => (
      <div key={savegame} className={styles.savegame}>
        <Button onClick={() => onSetCurrentSaveGame?.(savegame)}>{savegame}</Button>
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
