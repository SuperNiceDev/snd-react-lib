import React from "react";

import { StyledEngineProvider } from "@mui/material";
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
      <div className="testInputText tw-font-bold tw-text-sm tw-text-gray-500">
        {`<InputText>`}
        <InputText
          className="tw-py-1 tw-px-2 tw-font-bold tw-text-xs tw-text-red-500 tw-border tw-border-red-500"
          value="my value"
        />
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
        <StyledEngineProvider injectFirst>
          <MuiProvider>
            <MuiTest />
          </MuiProvider>
        </StyledEngineProvider>
      </div>
    </div>
  );
};

export default App;
