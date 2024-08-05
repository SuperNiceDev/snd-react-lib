import React, { ReactElement } from "react";

import Text from "@src/components/atoms/Text";
import ContextProviderTasks from "@src/context/ContextProviderTasks";
import "@src/css/base.css";
import "@src/css/base.scss";
import "@src/css/reset.css";
import AddTask from "@src/stories/context/ContextProvider/AddTask";
import TaskList from "@src/stories/context/ContextProvider/TaskList";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Text text="my text" />
      <ContextProviderTasks>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </ContextProviderTasks>
    </div>
  );
};

export default App;
