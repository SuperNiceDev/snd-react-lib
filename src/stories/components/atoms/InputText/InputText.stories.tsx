import React, { useEffect, useState } from "react";

import InputText, {
  InputTextProps,
  InputTypes,
} from "@src/components/atoms/InputText";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import css from "./InputText.stories.module.scss";

// type InputTextProps = typeof InputText;

// const log = window.debug("log: InputText.stories");

export default {
  component: InputText,
  // argTypes: typeof InputText,
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

type StoryProps = StoryObj<InputTextProps>;

const Template = (args: InputTextProps) => {
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

  return (
    <div className={css.root}>
      <InputText {...args} value={value} onChange={onChange} />
      <div className={css.renderTest}>Render Test 1</div>
      <div className={css.renderTest}>Render Test 2</div>
      <div className={css.renderTest}>Render Test 3</div>
    </div>
  );
};

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
  render: (args: StoryProps) => <Template {...args} />,
  args: {
    ...sharedArgs,
    className: css.myInput,
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
    className: `${css.myInput} ${css.myInputMultiline}`,
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
