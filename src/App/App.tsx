import React from "react";

import Cmp from "@src/components/atoms/Cmp";
import InputText from "@src/components/atoms/InputText";
import Text from "@src/components/atoms/Text";
import MuiTest from "@src/components/molecules/MuiTest";
import ContextProviderTasks from "@src/context/ContextProviderTasks";
import MuiProvider from "@src/context/MuiProvider";
import "@src/css/base.css";
import "@src/css/base.scss";
import "@src/css/reset.css";
import "@src/css/tailwind.css";
import AddTask from "@src/stories/context/ContextProviderTasks/AddTask";
import TaskList from "@src/stories/context/ContextProviderTasks/TaskList";

const App = () => {
  return (
    <div className="App">
      <div className="testText">
        {`<Text>`}
        <Text text="my text" />
        {`</Text>`}
      </div>
      <div className="line">{`// -------------------------`}</div>
      <div className="testText">
        {`<InputText>`}
        <InputText value="my value" />
        {`</InputText>`}
      </div>
      <div className="line">{`// -------------------------`}</div>
      <div className="testCmp">
        <Cmp />
      </div>
      <div className="line">{`// -------------------------`}</div>
      <div className="testContextProviderTasks">
        {`<ContextProviderTasks>`}
        <ContextProviderTasks>
          <h1>Day off in Kyoto</h1>
          <AddTask />
          <TaskList />
        </ContextProviderTasks>
        {`<ContextProviderTasks>`}
      </div>
      <div className="line">{`// -------------------------`}</div>
      <div className="testMuiTest">
        <MuiProvider>
          <MuiTest />
        </MuiProvider>
      </div>
    </div>
  );
};

export default App;
