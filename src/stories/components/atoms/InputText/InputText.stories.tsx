import React, { ReactElement, useEffect, useState } from "react";

import InputText, {
  InputTextProps,
  InputTypes,
} from "@src/components/atoms/InputText";
import { action } from "@storybook/addon-actions";

import css from "./InputText.stories.module.scss";

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
};

const Template = (args: InputTextProps) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    if (args.value !== value) {
      setValue(args.value);
    }
  }, [args.value]);

  const onChange = (evt: any) => {
    console.log("onChange: ", evt.target.value);
    action("onChange")(evt.target.value);
    setValue(evt.target.value);
  };

  // log("value: ", value);

  return (
    <div className={css.root}>
      <InputText
        //
        {...args}
        value={value}
        onChange={onChange}
      />
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
  render: (args: InputTextProps): ReactElement => <Template {...args} />,
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
  render: (args: InputTextProps): ReactElement => <Template {...args} />,
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
