import type { Meta, StoryObj } from '@storybook/react';

//import { DataProvider } from "../../../store/DataProvider"
import App from "./App";


const meta = {
  title: "App/App",
  component: App,
} satisfies Meta<typeof App>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

