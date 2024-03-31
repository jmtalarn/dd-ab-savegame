import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dungeon as Dungeons } from "../../../components/Dungeon/Dungeon.types";
import { SaveGameProvider } from "../../../store/SaveGameProvider";
import Dungeon from "./Dungeon";

export default {
  title: "App/Dungeon",
  component: Dungeon,
  argTypes: {
    index: { control: { type: "number", min: 0, max: 3 } },
  },
} as ComponentMeta<typeof Dungeon>;

const dungeons = [
  Dungeons.Gauntlgrym,
  Dungeons.HotenowMount,
  Dungeons.Neverwinter,
  Dungeons.NeverwinterForest,
];

const Template: ComponentStory<typeof Dungeon> = (args) => (
  <SaveGameProvider initialState={{ dungeons }}>
    <Dungeon {...args} />
  </SaveGameProvider>
);

export const Default = Template.bind({});

Default.args = {};
