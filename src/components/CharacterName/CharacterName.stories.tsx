import type { Meta, StoryObj } from '@storybook/react';

import CharacterName from "./CharacterName";
import { Class } from "../Character/Character.types";

const meta = {
  title: "Components/CharacterName",
  component: CharacterName,
  argTypes: {
    classType: {
      options: Object.keys(Class),
      mapping: Class,
      control: { type: "select" },
    },
  }
} satisfies Meta<typeof CharacterName>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    classType: Class.Bard,
    text: "The Ultimate Warrior",
  }
};
