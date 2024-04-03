import type { Meta, StoryObj } from '@storybook/react';

import Menu from "./Menu";


const meta = {
  title: "Components/Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = { args: {} };
