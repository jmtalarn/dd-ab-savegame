import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CharacterName from './CharacterName';
import { Class } from '../Character/Character.types';

export default {
  title: 'Components/CharacterName',
  component: CharacterName,
  argTypes: {
    classType: {
      options: Object.keys(Class),
      mapping: Class,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof CharacterName>;

const Template: ComponentStory<typeof CharacterName> = (args) => <CharacterName {...args} />; //{...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'The Ultimate Warrior',
};
