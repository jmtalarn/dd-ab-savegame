import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

//import { DataProvider } from "../../../store/DataProvider"
import App from './App';


export default {
  title: 'App/App',
  component: App,
} as ComponentMeta<typeof App>;


const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});

Default.args = {};


