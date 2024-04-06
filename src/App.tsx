import { useContext } from 'react';

// import { Button } from 'antd';

import Title from './components/Title'
import SaveGame from './app/components/SaveGame';
import MenuDrawer, { MenuDrawerProvider } from './app/components/MenuDrawer';
import Drawer from './components/Drawer'
import { DataProvider, DataContext } from "./store/DataProvider"
import 'antd/dist/reset.css';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
// <a href="https://reactjs.org" target="_blank">
//   <FontAwesomeIcon icon={faReact} size="8x" />
// </a>



const InnerApp = () => {
  const { currentSaveGame, setCurrentSaveGame } = useContext(DataContext);

  const onClose = () => setCurrentSaveGame?.(undefined)
  return (
    <div className="App">
      <Title />
      <SaveGame />
      {currentSaveGame && <Drawer open={!!currentSaveGame} onClose={onClose} title="Update your data"><MenuDrawer onCancel={onClose} /></Drawer>}
    </div >
  )
}

const App = () => (<DataProvider><MenuDrawerProvider><InnerApp /></MenuDrawerProvider></DataProvider>)
export default App;
