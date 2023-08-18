import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SaveGameProvider } from "../../../store/SaveGameProvider"
import MenuDrawer from './MenuDrawer';


export default {
	title: 'App/MenuDrawer',
	component: MenuDrawer,
} as ComponentMeta<typeof MenuDrawer>;


const Template: ComponentStory<typeof MenuDrawer> = (args) => <SaveGameProvider initialState={{ dungeons: [] }}>
	<MenuDrawer {...args} />
</SaveGameProvider>;

export const Default = Template.bind({});

Default.args = {};


