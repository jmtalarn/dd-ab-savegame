import type { Meta } from '@storybook/react';

import { SaveGameProvider } from "../../../store/SaveGameProvider";
import Boss from "./Boss";

const meta = {
  title: "App/Boss",
  component: Boss,
  decorators: [(story) => <SaveGameProvider>
    {story()}
  </SaveGameProvider>]
} satisfies Meta<typeof Boss>;
export default meta;

export const Default = {};

export const Error = {};

// const Template: StoryObj<typeof meta> = (args) => (
//   <SaveGameProvider>
//     <Boss {...args} />
//   </SaveGameProvider>
// );

// export const Default = Template.bind({});

// Default.args = {};
