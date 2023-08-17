import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SaveGameProvider } from "../../../store/SaveGameProvider"
import Boss from './Boss';


export default {
  title: 'App/Boss',
  component: Boss,
} as ComponentMeta<typeof Boss>;


const Template: ComponentStory<typeof Boss> = (args) => <SaveGameProvider>
  <Boss {...args} />
</SaveGameProvider>;

export const Default = Template.bind({});

Default.args = {};


