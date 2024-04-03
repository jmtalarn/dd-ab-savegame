
import type { Meta, StoryObj } from '@storybook/react';

import Drawer from "./Drawer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Drawer",
  component: Drawer,

} satisfies Meta<typeof Drawer>;
export default meta;

const children = (
  <>
    <p>
      Ipsum irure minim dolor anim qui tempor officia velit. Eu qui esse labore
      aliqua esse laborum commodo mollit minim qui. Ad occaecat amet
      exercitation magna proident fugiat irure. Eu est adipisicing Lorem fugiat
      cupidatat sint amet cillum ea labore elit veniam ad sunt. Pariatur fugiat
      sint aliqua deserunt et nostrud eu eiusmod esse labore ut amet.Ad ullamco
      dolore commodo velit ea.{" "}
    </p>
    <p>
      Magna ullamco quis sunt sunt dolor ipsum exercitation ut reprehenderit in
      occaecat nisi ea voluptate. Commodo laboris reprehenderit tempor ea irure
      culpa minim exercitation et laborum. Magna do sunt dolor officia excepteur
      anim nostrud do velit aliqua ex velit ex esse.
    </p>
  </>
);


type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Drawer",
    children,
    open: true,
  }
};

