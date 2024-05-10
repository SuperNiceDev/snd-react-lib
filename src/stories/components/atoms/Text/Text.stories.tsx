import React from "react";
import type { Meta } from "@storybook/react";

import Text, { IText, Tags } from "@src/components/atoms/Text";

import css from "./Text.stories.module.scss";

export default {
  component: Text,
  argTypes: {
    Tag: {
      name: "Tag: ",
      description: "",
      defaultValue: Tags.p,
      control: {
        type: "inline-radio",
      },
      options: [
        Tags.div,
        Tags.span,
        Tags.label,
        Tags.p,
        Tags.h1,
        Tags.h2,
        Tags.h3,
        Tags.h4,
        Tags.h5,
        Tags.h6,
      ],
    },
  },
} as Meta;

const Template = (args: IText) => {
  return (
    <div className={css.root}>
      <Text {...args} />
    </div>
  );
};

export const Story1 = {
  name: "Text",
  render: (args: IText) => <Template {...args} />,
  args: {
    className: "myText",
    Tag: Tags.p,
    text: `my text`,
  },
};
