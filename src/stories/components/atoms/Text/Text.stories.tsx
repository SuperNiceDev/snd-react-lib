import React from "react";

// import Text, { Tags } from "@src/components/atoms/Text";
import Text, { Tags, TextProps } from "@src/components/atoms/Text";
import type { Meta, StoryObj } from "@storybook/react";

import css from "./Text.stories.module.scss";

// type TextProps = typeof Text;

export default {
  component: Text,
  argTypes: {
    Tag: {
      name: "Tag: ",
      description: "",
      defaultValue: Tags.p,
      control: "inline-radio",
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
} as Meta<TextProps>;

type StoryProps = StoryObj<TextProps>;

const Template = (args: StoryProps) => {
  return (
    <div className={css.root}>
      <Text {...args} />
    </div>
  );
};

export const Story1 = {
  name: "Text",
  render: (args: StoryProps) => <Template {...args} />,
  args: {
    className: "myText",
    Tag: Tags.p,
    text: "my text",
  },
};
