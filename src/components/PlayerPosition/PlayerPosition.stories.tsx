import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PlayerPosition from "./PlayerPosition";


const meta = {
  title: "Components/PlayerPosition",
  component: PlayerPosition,
} satisfies Meta<typeof PlayerPosition>;
export default meta;

type Story = StoryObj<typeof PlayerPosition>;

export const Default: Story = { args: { value: {}, onChange: fn() } };
