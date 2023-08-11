import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dungeon from './Dungeon';

export default {
  title: 'Components/Dungeon',
  component: Dungeon,

} as ComponentMeta<typeof Dungeon>;


const Template: ComponentStory<typeof Dungeon> = (args) => <Dungeon {...args} />;

export const Default = Template.bind({});

Default.args = {};

