import type { Meta } from '@storybook/react';
import { DataProvider } from "../../../store/DataProvider";
import { Class } from "../../../components/Character/Character.types";
import Player from "./Player";
import { MenuDrawerProvider } from '../MenuDrawer';

const meta = {
  title: "App/Player",
  component: Player,
  argTypes: {
    playerClass: {
      control: "select",
      options: ["Fighter", "Sorcerer", "Bard", "Rogue"],
      mapping: {
        Fighter: [Class.Fighter],
        Sorcerer: [Class.Sorcerer],
        Bard: [Class.Bard],
        Rogue: [Class.Rogue],
      },
    },
  },
  decorators: [(story) => <DataProvider><MenuDrawerProvider>{story()}</MenuDrawerProvider></DataProvider>]
} satisfies Meta<typeof Player>;
export default meta;

export const Default = {};
