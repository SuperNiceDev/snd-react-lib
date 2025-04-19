import React from "react";

import AddTask from "@src/components/organisms/TaskList/AddTask";
import TaskList from "@src/components/organisms/TaskList/TaskList";
import { ContextTasksProvider } from "@src/context/ContextTasks";
import type { Meta } from "@storybook/react";

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
