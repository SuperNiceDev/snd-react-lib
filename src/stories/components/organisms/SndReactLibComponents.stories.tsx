import React, { ComponentPropsWithRef } from "react";

import type { Meta } from "@storybook/react-webpack5";
import SndReactLibComponents from "snd-react-lib/components/organisms/SndReactLibComponents";

type SndReactLibComponents = ComponentPropsWithRef<
  typeof SndReactLibComponents
>;

const meta = {
  component: SndReactLibComponents,
  argTypes: {},
} satisfies Meta<typeof SndReactLibComponents>;

export default meta;

const Template = () => {
  return (
    <div className="">
      <SndReactLibComponents />
    </div>
  );
};

export const Story = {
  name: "SndReactLibComponents",
  render: () => <Template />,
  parameters: {
    layout: "fullscreen",
  },
};
