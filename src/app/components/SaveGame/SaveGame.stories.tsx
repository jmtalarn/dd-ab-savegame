import type { Meta } from '@storybook/react';
import { DataProvider } from "../../../store/DataProvider";
import SaveGame from "./SaveGame";

const meta = {
  title: "App/SaveGame",
  component: SaveGame,
  decorators: [(story) => <DataProvider>{story()}</DataProvider>]
} satisfies Meta<typeof SaveGame>;
export default meta;

export const Default = {};

export const Error = {};
