import React from "react";

import MuiTest from "@src/components/molecules/MuiTest";
import type { Meta, StoryObj } from "@storybook/react";

import css from "./MuiTest.stories.module.scss";

type TextProps = typeof MuiTest;

export default {
  component: MuiTest,
  argTypes: {},
} as Meta<TextProps>;

type Story = StoryObj<TextProps>;

const Template = (args: Story) => {
  return (
    <div className={css.root}>
      <MuiTest />
    </div>
  );
};

export const Story1 = {
  name: "MuiTest",
  render: (args: Story) => <Template {...args} />,
};
