import type { Meta } from '@storybook/react';

import { DataProvider } from "../../../store/DataProvider";
import { MenuDrawerProvider } from '../MenuDrawer';
import Boss from "./Boss";

const meta = {
  title: "App/Boss",
  component: Boss,
  decorators: [(story) => (
    <DataProvider>
      <MenuDrawerProvider>
        {story()}
      </MenuDrawerProvider>
    </DataProvider>
  )]
} satisfies Meta<typeof Boss>;
export default meta;

export const Default = {};



