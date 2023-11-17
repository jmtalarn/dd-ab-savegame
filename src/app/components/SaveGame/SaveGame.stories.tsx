import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataProvider } from "../../../store/DataProvider"
import SaveGame from './SaveGame';


export default {
  title: 'App/SaveGame',
  component: SaveGame,
} as ComponentMeta<typeof SaveGame>;


const Template: ComponentStory<typeof SaveGame> = (args) => <DataProvider>
  <SaveGame {...args} />
</DataProvider>;

export const Default = Template.bind({});

Default.args = {};


