import React, { ComponentPropsWithRef } from "react";

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Text, { Tags } from "snd-react-lib/components/atoms/Text";

import css from "./Text.stories.module.scss";

type Props = ComponentPropsWithRef<typeof Text>;

const meta = {
  component: Text,
  argTypes: {
    Tag: {
      name: "Tag: ",
      description: "",
      defaultValue: Tags.p,
      control: "inline-radio",
      options: Object.values(Tags),
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

const Template = (args: Props) => {
  return (
    <div className={css.root}>
      <Text {...args} />
    </div>
  );
};

type StoryType = StoryObj<Props>;

export const Story1: StoryType = {
  name: "Text",
  render: (args: Props) => <Template {...args} />,
  args: {
    className: "text-3xl text-fuchsia-800_ text-[var(--foreground)] font-bold",
    Tag: Tags.p,
    text: "my text",
  },
};
