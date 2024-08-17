import React from "react";

import ContextProviderTasks from "@src/context/ContextProviderTasks";
import type { Meta } from "@storybook/react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default {} as Meta;

const Template = () => {
  return (
    <ContextProviderTasks>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </ContextProviderTasks>
  );
};

export const Story1 = {
  name: "ContextProviderTasks",
  render: Template,
};
