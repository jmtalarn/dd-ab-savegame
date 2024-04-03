import type { Meta } from '@storybook/react';
import { Dungeon as Dungeons } from "../../../components/Dungeon/Dungeon.types";
import { SaveGameProvider } from "../../../store/SaveGameProvider";
import Dungeon from "./Dungeon";

const dungeons = [
  Dungeons.Gauntlgrym,
  Dungeons.HotenowMount,
  Dungeons.Neverwinter,
  Dungeons.NeverwinterForest,
];


const meta = {
  title: "App/Dungeon",
  component: Dungeon,
  argTypes: {
    index: { control: { type: "number", min: 0, max: 3 } },
  },
  decorators: [(story) => <SaveGameProvider initialState={{ dungeons }}>
    {story()}
  </SaveGameProvider>]
} satisfies Meta<typeof Dungeon>;
export default meta;

export const Default = {};

export const Error = {};

// const Template: StoryObj<typeof meta> = (args) => (
//   <SaveGameProvider initialState={{ dungeons }}>
//     <Dungeon {...args} />
//   </SaveGameProvider>
// );

// export const Default = Template.bind({});

// Default.args = {};
