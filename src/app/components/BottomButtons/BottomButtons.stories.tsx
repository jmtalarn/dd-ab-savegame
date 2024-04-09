import type { Meta, StoryObj } from '@storybook/react';
import { MenuDrawerProvider } from '../MenuDrawer';
import BottomButtons from "./BottomButtons";


const meta = {
  title: "App/BottomButtons",
  decorators: [(story) => (
    <MenuDrawerProvider>
      {story()}
    </MenuDrawerProvider>)],
  component: BottomButtons,
} satisfies Meta<typeof BottomButtons>;
export default meta;

type Story = StoryObj<typeof BottomButtons>;

export const Default: Story = { args: {} };
