import React from "react";

// import Text, { Tags } from "snd-react-lib/components/atoms/Text";
import Text, { Tags, TextProps } from "snd-react-lib/components/atoms/Text";
import type { Meta, StoryObj } from "@storybook/react";

import css from "./Text.stories.module.scss";

// type TextProps = typeof Text;

const meta: Meta<TextProps> = {
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
};
export default meta;

const Template = (args: TextProps) => {
  return (
    <div className={css.root}>
      <Text {...args} />
    </div>
  );
};

type StoryType = StoryObj<TextProps>;

export const Story1: StoryType = {
  name: "Text",
  render: (args: TextProps) => <Template {...args} />,
  args: {
    className: "myText",
    Tag: Tags.p,
    text: "my text",
  },
};
