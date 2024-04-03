import type { Meta, StoryObj } from '@storybook/react';

import Dungeon from "./Dungeon";

const meta = {
  title: "Components/Dungeon",
  component: Dungeon,
} satisfies Meta<typeof Dungeon>;
export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} };
