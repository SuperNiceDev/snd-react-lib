import React from "react";

import MuiTest from "@src/components/molecules/MuiTest";
import type { Meta } from "@storybook/react";

import css from "./MuiTest.stories.module.scss";

type MuiTestProps = typeof MuiTest;

export default {
  component: MuiTest,
  argTypes: {},
} as Meta<MuiTestProps>;

const Template = () => {
  return (
    <div className={css.root}>
      <MuiTest />
    </div>
  );
};

export const Story1 = {
  name: "MuiTest",
  render: () => <Template />,
};
