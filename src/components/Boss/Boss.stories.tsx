
import type { Meta, StoryObj } from '@storybook/react';
import Boss from "./Boss";


const meta = {
  title: "Components/Boss",
  component: Boss,

} satisfies Meta<typeof Boss>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};
