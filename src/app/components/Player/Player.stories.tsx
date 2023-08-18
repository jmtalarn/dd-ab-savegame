import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SaveGameProvider } from "../../../store/SaveGameProvider"
import { Class } from '../../../components/Character/Character.types';
import Player from './Player';


export default {
  title: 'App/Player',
  component: Player,
  argTypes: {
    playerClass: {
      control: 'select',
      options: ["Fighter", "Sorcerer", "Bard", "Rogue"],
      mapping: {
        "Fighter": [Class.Fighter],
        "Sorcerer": [Class.Sorcerer],
        "Bard": [Class.Bard],
        "Rogue": [Class.Rogue]
      }
    }
  }
} as ComponentMeta<typeof Player>;



const Template: ComponentStory<typeof Player> = (args) => <SaveGameProvider initialState={{}}>
  <Player {...args} />
</SaveGameProvider>;

export const Default = Template.bind({});

Default.args = {};


