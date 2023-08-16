import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';


export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />; //{...args} />;

export const Default = Template.bind({});

Default.args = {

};
