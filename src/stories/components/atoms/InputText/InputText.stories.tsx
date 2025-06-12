import React, { useEffect, useState } from "react";

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import InputText, {
  InputTextProps,
  InputTypes,
} from "snd-react-lib/components/atoms/InputText";

import css from "./InputText.stories.module.scss";

// type InputTextProps = typeof InputText;

export default {
  component: InputText,
  argTypes: {
    type: {
      name: "InputTypes",
      description: "my description",
      control: {
        type: "radio",
      },
      options: [InputTypes.text, InputTypes.password, InputTypes.number],
    },
  },
} as Meta<InputTextProps>;

const Template = (args: InputTextProps) => {
  const { className, multiline } = args;
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    if (args.value !== value) {
      setValue(args.value);
    }
    // eslint-disable-next-line
  }, [args.value]);

  const onChange = (evt: any) => {
    console.log("onChange: ", evt.target.value);
    action("onChange")(evt.target.value);
    setValue(evt.target.value);
  };

  // log("value: ", value);

  const cln = multiline
    ? `${css.myInput} ${css.myInputMultiline} ${className}`
    : `${css.myInput} ${className}`;

  return (
    // <div className={`${css.root}`}>
    <div className={`${css.root} text-red-500 font-bold text-xs`}>
      <span>InputText: </span>
      <InputText {...args} className={cln} value={value} onChange={onChange} />
      <div className={css.renderTest}>Render Test 1</div>
      <div className={css.renderTest}>Render Test 2</div>
      <div className={css.renderTest}>Render Test 3</div>
    </div>
  );
};

type StoryType = StoryObj<InputTextProps>;

const sharedArgs = {
  name: "my_name",
  type: InputTypes.text,
  multiline: false,
  disabled: false,
  focus: true,
  // defaultValue: "my defaultValue",
  value: "my value",
  placeholder: "my placeholder",
  ariaLabel: "my ariaLabel",
  maxLength: 12,
};

export const StoryInputText = {
  name: "InputText",
  render: (args: StoryType) => <Template {...args} />,
  args: {
    ...sharedArgs,
    className:
      "py-1 px-2 text-xs text-fuchsia-500 border border-fuchsia-500",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const StoryInputTextMultiline = {
  name: "InputText multiline",
  render: (args: InputTextProps) => <Template {...args} />,
  args: {
    ...sharedArgs,
    className:
      "py-1 px-2 text-xs text-fuchsia-500 border border-fuchsia-500",
    multiline: true,
    value: `Lorem Ispum,

Lorem Ispum,

Lorem Ispum,
Lorem Ispum,
Lorem Ispum,

Lorem Ispum
`,
  },
  parameters: {
    layout: "fullscreen",
  },
};
