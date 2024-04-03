import type { Meta } from '@storybook/react';
import { SaveGameProvider } from "../../../store/SaveGameProvider";
import MenuDrawer from "./MenuDrawer";

const meta = {
  title: "App/MenuDrawer",
  component: MenuDrawer,
  decorators: [(story) => <SaveGameProvider initialState={{ dungeons: [] }}>{story()}</SaveGameProvider>]
} satisfies Meta<typeof MenuDrawer>;
export default meta;
export const Default = {};

export const Error = {};
// const Template: StoryObj<typeof meta> = (args) => (
//   <SaveGameProvider initialState={{ dungeons: [] }}>
//     <MenuDrawer {...args} />
//   </SaveGameProvider>
// );

// export const Default = Template.bind({});

// Default.args = {};
