import type { Meta, StoryObj } from '@storybook/react';

import Player from "./Character";
import {
  Characters,
  Character,
} from "./Character.types";

const meta = {
  title: "Components/Character",
  component: Player,
  argTypes: {
    character: {
      options: Characters.map((character) => character.name),
      mapping: Characters.reduce(
        (acc: Record<string, Character>, curr: Character): object => {
          acc[curr.name] = curr;
          return acc;
        },
        {},
      ),
    },
  },
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    character: Characters[0],
  }
};

