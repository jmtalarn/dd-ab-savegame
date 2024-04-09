import type { Meta } from '@storybook/react';
// import { Dungeon as Dungeons } from "../../../components/Dungeon/Dungeon.types";
import { DataProvider } from "../../../store/DataProvider";
import Dungeon from "./Dungeon";
import { MenuDrawerProvider } from '../MenuDrawer';

// const dungeons = [
//   Dungeons.Gauntlgrym,
//   Dungeons.HotenowMount,
//   Dungeons.Neverwinter,
//   Dungeons.NeverwinterForest,
// ];


const meta = {
  title: "App/Dungeon",
  component: Dungeon,
  argTypes: {
    index: { control: { type: "number", min: 0, max: 3 } },
  },
  decorators: [(story) => <DataProvider>
    <MenuDrawerProvider>
      {story()}
    </MenuDrawerProvider>
  </DataProvider>]
} satisfies Meta<typeof Dungeon>;
export default meta;

export const Default = {};
