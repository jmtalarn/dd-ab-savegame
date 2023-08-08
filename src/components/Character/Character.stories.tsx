import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Player from './Character';
import { Class, Dungeon, Race, Sex, Characters, Character } from './Character.types';

export default {
  title: 'Components/Character',
  component: Player,
  argTypes: {
    character: {
      options: Characters.map((character) => character.name),
      mapping: Characters.reduce((acc: Record<string, Character>, curr: Character): object => {
        acc[curr.name] = curr;
        return acc;
      }, {}),
    },
  },
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />; //{...args} />;

export const Default = Template.bind({});

Default.args = {
  character: Characters[0],
};
