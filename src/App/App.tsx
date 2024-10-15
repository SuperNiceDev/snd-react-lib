import React, { ReactElement } from "react";

import Text from "@src/components/atoms/Text";
import MuiTest from "@src/components/molecules/MuiTest";
import ContextProviderTasks from "@src/context/ContextProviderTasks";
import "@src/css/base.css";
import "@src/css/base.scss";
import "@src/css/reset.css";
import "@src/css/tailwind.css";
import AddTask from "@src/stories/context/ContextProviderTasks/AddTask";
import TaskList from "@src/stories/context/ContextProviderTasks/TaskList";

const App = (): ReactElement => {
  return (
    <div className="App">
      <div className="ctn">
        <Text text="my text" />
      </div>
      <ContextProviderTasks>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </ContextProviderTasks>
      <div className="ctn">
        <MuiTest />
      </div>
    </div>
  );
};

export default App;
