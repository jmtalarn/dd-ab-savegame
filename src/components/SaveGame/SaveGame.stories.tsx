import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SaveGame from "./SaveGame";

const meta = {
  title: "Components/SaveGame",
  component: SaveGame,

} satisfies Meta<typeof SaveGame>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    onDeleteGame: fn(),
    onSaveGame: fn(),
    onSetCurrentSaveGame: fn(),
    saveGames: ["Game 1", "Other day game", "Antoher savegame"]
  }
};

