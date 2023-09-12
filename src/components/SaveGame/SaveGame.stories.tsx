import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SaveGame from './SaveGame';


export default {
  title: 'Components/SaveGame',
  component: SaveGame,
} as ComponentMeta<typeof SaveGame>;

const Template: ComponentStory<typeof SaveGame> = (args) => <SaveGame {...args} />; //{...args} />;

export const Default = Template.bind({});

Default.args = {

};
