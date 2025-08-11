import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import UseDidMountEffectDemo from "snd-react-lib/stories/hooks/UseDidMountEffect.stories/UseDidMountEffectDemo";

const meta: Meta<typeof UseDidMountEffectDemo> = {
  title: "Hooks/useDidMountEffect",
  component: UseDidMountEffectDemo,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof UseDidMountEffectDemo>;

export const Basic: Story = {
  name: "Default Usage",
  render: () => <UseDidMountEffectDemo className="" />,
};

export const MultipleIncrements: Story = {
  name: "Multiple Dependency Changes",
  render: () => <UseDidMountEffectDemo className="" />,
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button");
    if (button) {
      button.click();
      button.click();
      button.click();
    }
  },
};

export const SimulateMountOnly: Story = {
  name: "Mount Without Callback",
  render: () => {
    const Component = () => {
      const [count] = React.useState(0);
      React.useEffect(() => {}, []);
      return <div>Component mounted. Count: {count}</div>;
    };
    return <Component />;
  },
};
