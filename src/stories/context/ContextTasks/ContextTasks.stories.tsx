import React from "react";

import { ContextTasksProvider } from "@src/context/ContextTasks";
import type { Meta } from "@storybook/react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default {} as Meta;

const Template = () => {
  return (
    <ContextTasksProvider>
      <AddTask />
      <TaskList />
    </ContextTasksProvider>
  );
};

export const Story1 = {
  name: "ContextTasks",
  render: Template,
};
