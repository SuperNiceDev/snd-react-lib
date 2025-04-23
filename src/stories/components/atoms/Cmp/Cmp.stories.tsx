import React, { MouseEvent, useEffect, useState } from "react";

import Cmp, { ICmp, Variant } from "snd-react-lib/components/atoms/Cmp";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

// import { componentsPath } from "snd-react-lib/stories/constants";
import css from "./Cmp.stories.module.scss";

// eslint-disable-next-line
// @ts-ignore
// const log = window.debug("log: Cmp.stories");

interface IStory extends ICmp {
  classNameStory: string;
  forceRender: string;
}

// --------------------

export default {
  // title: `${componentsPath}/components/atoms/Cmp`,
  component: Cmp,
  argTypes: {
    forceRender: {
      name: "my forceRender: ",
      description: "my description",
      // https://storybook.js.org/docs/essentials/controls#annotation
      // control: {
      //   type: "text",
      //   type: "inline-radio",
      // },
      // control: "text",
      // control: "radio",
      control: "inline-radio",
      options: ["yes", "no"],
      // table: {
      //   disable: true,
      // },
    },
  },
  // parameters: {
  //   layout: "fullscreen",
} as Meta<IStory>;

// https://storybook.js.org/docs/writing-stories/typescript#using-satisfies-for-better-type-safety

// const meta = {
//   // ...
// } satisfies Meta<IStory>;
// export default meta;
// type Story = StoryObj<typeof meta>;

// --------------------

const Template = ({ forceRender, classNameStory, ...props }: IStory) => {
  // const Template: ComponentStory<typeof Cmp> = ({
  //   forceRender,
  //   ...props
  // }: IStory) => {
  // const Template: ComponentStory<typeof Cmp & IStory> = ({
  //   forceRender,
  //   ...props
  // }: IStory) => {
  const [name, setName] = useState<string>("one");
  // const [timeStamp, setTimeStamp] = useState(new Date().toString());

  const onNameClick = (name: string) => () => {
    setName(name);
    // setTimeStamp(new Date().toString());
  };

  const [id, setId] = useState<string>("001");

  const onIdClick = (id: string) => () => {
    setId(id);
  };

  const onCmpClick = (evt: MouseEvent<HTMLElement>) => {
    action("onCmpClick() evt: ")(evt);
  };

  const [_forceRender, setForceRender] = useState<"yes" | "no">("no");

  const onForceRenderBtnClick = () => {
    setForceRender((prev) => (prev === "yes" ? "no" : "yes"));
  };

  useEffect(() => {
    setForceRender((prev) => (prev === "yes" ? "no" : "yes"));
  }, [forceRender]);

  // log("Template -----");
  // log("Template timeStamp: ", timeStamp);

  return (
    <div className={`${css.root} ${classNameStory}`}>
      <button className={css.button} onClick={onNameClick("one")}>
        set Cmp name to 'one'
      </button>
      <button className={css.button} onClick={onNameClick("two")}>
        set Cmp name to 'two'
      </button>

      <button className={css.button} onClick={onIdClick("001")}>
        set Cmp name to '001'
      </button>
      <button className={css.button} onClick={onIdClick("002")}>
        set Cmp name to '002'
      </button>

      <button className={css.button} onClick={onForceRenderBtnClick}>
        Toggle forceRender
      </button>

      <div className={css.info}>forceRender: {_forceRender}</div>
      {/* <div className={css.info}>timeStamp: {timeStamp}</div> */}
      <Cmp {...props} name={name} id={id} onClick={onCmpClick} />
    </div>
  );
};

// https://storybook.js.org/docs/writing-stories/args

export const Story1 = {
  name: "Cmp",
  render: (args: IStory) => <Template {...args} />,
  // render: (args: IStory) => <div>Test {args.toString()}</div>,
  args: {
    className: "myCmp",
    id: "Cmp-ID",
    name: "xxx",
    primary: true,
    variant: Variant.BIG,
    text: "My text",
    classNameStory: "App desktop",
    forceRender: "yes",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Story2 = {
  name: "Cmp 2",
  render: (args: IStory) => <Template {...args} />,
  args: {
    ...Story1.args,
    name: "xxxYYY",
  },
  parameters: {
    layout: "fullscreen",
  },
};
