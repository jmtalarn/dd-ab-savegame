import type { Meta } from '@storybook/react';
import { DataProvider } from "../../../store/DataProvider";
import MenuDrawer, { MenuDrawerProvider } from "./MenuDrawer";

const meta = {
  title: "App/MenuDrawer",
  component: MenuDrawer,
  decorators: [(story) => <DataProvider ><MenuDrawerProvider>{story()}</MenuDrawerProvider></DataProvider>]
} satisfies Meta<typeof MenuDrawer>;
export default meta;
export const Default = {};
