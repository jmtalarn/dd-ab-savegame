import type { Meta } from '@storybook/react';
import { SaveGameProvider } from "../../../store/SaveGameProvider";
import { Class } from "../../../components/Character/Character.types";
import Player from "./Player";

const meta = {
  title: "App/Player",
  component: Player,
  argTypes: {
    playerClass: {
      control: "select",
      options: ["Fighter", "Sorcerer", "Bard", "Rogue"],
      mapping: {
        Fighter: [Class.Fighter],
        Sorcerer: [Class.Sorcerer],
        Bard: [Class.Bard],
        Rogue: [Class.Rogue],
      },
    },
  },
  decorators: [(story) => <SaveGameProvider initialState={{}}>{story()}</SaveGameProvider>]
} satisfies Meta<typeof Player>;
export default meta;

export const Default = {};

export const Error = {};

// const Template: StoryObj<typeof meta> = (args) => (
//   <SaveGameProvider initialState={{}}>
//     <Player {...args} />
//   </SaveGameProvider>
// );

// export const Default = Template.bind({});

// Default.args = {};
