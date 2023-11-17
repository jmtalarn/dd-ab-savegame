import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SaveGame from './SaveGame';


export default {
  title: 'Components/SaveGame',
  component: SaveGame,
} as ComponentMeta<typeof SaveGame>;



const Template: ComponentStory<typeof SaveGame> = (args) => {
  const [saveGames, setSaveGames] = useState<string[]>([]);
  const onSaveGame = (key) => {
    setSaveGames([...saveGames, key]);
  }
  const onDeleteGame = (key) => {
    setSaveGames(saveGames.filter(savegamekey => savegamekey !== key))
  }
  return <SaveGame saveGames={saveGames} onSaveGame={onSaveGame} onDeleteGame={onDeleteGame} {...args} />
};

export const Default = Template.bind({});

Default.args = {

};
