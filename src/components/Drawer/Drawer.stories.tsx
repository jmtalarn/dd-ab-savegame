import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Drawer from './Drawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Drawer',
  component: Drawer,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   defaultStacked: { control: 'boolean' },
  // },
} as ComponentMeta<typeof Drawer>;

const children = (
  <>
    <p>
      Ipsum irure minim dolor anim qui tempor officia velit. Eu qui esse labore aliqua esse laborum commodo mollit minim
      qui. Ad occaecat amet exercitation magna proident fugiat irure. Eu est adipisicing Lorem fugiat cupidatat sint
      amet cillum ea labore elit veniam ad sunt. Pariatur fugiat sint aliqua deserunt et nostrud eu eiusmod esse labore
      ut amet.Ad ullamco dolore commodo velit ea.{' '}
    </p>
    <p>
      Magna ullamco quis sunt sunt dolor ipsum exercitation ut reprehenderit in occaecat nisi ea voluptate. Commodo
      laboris reprehenderit tempor ea irure culpa minim exercitation et laborum. Magna do sunt dolor officia excepteur
      anim nostrud do velit aliqua ex velit ex esse.
    </p>
  </>
);
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />; //{...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Drawer',
  children,
  open: true,
  // label: 'Button',
};

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
