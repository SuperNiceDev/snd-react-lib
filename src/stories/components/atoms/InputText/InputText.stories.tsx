import React, {
  ChangeEvent,
  ComponentPropsWithRef,
  useEffect,
  useState,
} from "react";

import type { Meta, StoryObj } from "@storybook/react-webpack5";
import InputText, {
  AutoComplete,
  InputTypes,
} from "snd-react-lib/components/atoms/InputText";
import { action } from "storybook/actions";

import css from "./InputText.stories.module.scss";

type Props = ComponentPropsWithRef<typeof InputText>;

const meta = {
  component: InputText,
  argTypes: {
    type: {
      // name: "InputTypes",
      // description: "my description",
      control: {
        type: "radio",
      },
      options: Object.values(InputTypes),
    },
    autoComplete: {
      control: {
        type: "radio",
      },
      options: Object.values(AutoComplete),
    },
  },
} satisfies Meta<typeof InputText>;

export default meta;

const Template = (args: Props) => {
  const { className, multiline } = args;
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    if (args.value !== value) {
      setValue(args.value);
    }
    // eslint-disable-next-line
  }, [args.value]);

  const onChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log("onChange: ", evt.target.value);
    action("onChange")(evt.target.value);
    setValue(evt.target.value);
  };

  const cln = multiline
    ? `${css.myInput} ${css.myInputMultiline} ${className}`
    : `${css.myInput} ${className}`;

  return (
    <div className={`${css.root} text-xs font-bold text-red-500`}>
      <span>InputText: </span>
      <InputText {...args} className={cln} value={value} onChange={onChange} />
      <div className={css.renderTest}>Render Test 1</div>
      <div className={css.renderTest}>Render Test 2</div>
      <div className={css.renderTest}>Render Test 3</div>
    </div>
  );
};

type StoryType = StoryObj<typeof meta>;

const sharedArgs = {
  className:
    "py-1 px-2 text-xs text-fuchsia-800_ text-[var(--foreground)] border border-fuchsia-800_ border-[var(--foreground)]",
  type: InputTypes.text,
  value: "my value",
  // defaultValue: "my defaultValue",
  placeholder: "my placeholder",
  name: "my_name",
  ariaLabel: "my ariaLabel",
  multiline: false,
  disabled: false,
  focus: true,
  autoComplete: AutoComplete.on,
  maxLength: 12,
};

export const StoryInputText = {
  name: "InputText",
  render: (args: StoryType) => <Template {...args} />,
  parameters: {
    layout: "fullscreen",
  },
  args: sharedArgs,
};

const multilineValue = `Lorem Ispum,

Lorem Ispum,

Lorem Ispum,
Lorem Ispum,
Lorem Ispum,

Lorem Ispum
`;

export const StoryInputTextMultiline = {
  name: "InputText multiline",
  render: (args: Props) => <Template {...args} />,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    ...sharedArgs,
    multiline: true,
    value: multilineValue,
  },
};
