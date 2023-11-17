import { useContext } from 'react';

// import { Button } from 'antd';

import Title from './components/Title'
import SaveGame from './app/components/SaveGame';
import MenuDrawer from './app/components/MenuDrawer';
import Drawer from './components/Drawer'
import { DataProvider, DataContext } from "./store/DataProvider"
import { SaveGameProvider } from "./store/SaveGameProvider"
import 'antd/dist/reset.css';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
// <a href="https://reactjs.org" target="_blank">
//   <FontAwesomeIcon icon={faReact} size="8x" />
// </a>

function App() {


  return (
    <DataProvider>
      <InnerApp />
    </DataProvider>
  );
}

const InnerApp = () => {
  const { currentSaveGame, setCurrentSaveGame } = useContext(DataContext);
  const savegame = currentSaveGame?.savegame ?? { dungeons: [] };

  const onClose = () => setCurrentSaveGame(null)

  return (<SaveGameProvider initialState={savegame}>
    <div className="App">
      <Title />
      <SaveGame />
      {currentSaveGame && <Drawer open={!!currentSaveGame} onClose={onClose} title="Update your data"><MenuDrawer /></Drawer>}
    </div >
  </SaveGameProvider>)
}

export default App;
