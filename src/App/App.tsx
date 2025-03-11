import React from "react";

import { StyledEngineProvider } from "@mui/material";
import Cmp from "@src/components/atoms/Cmp";
import InputText from "@src/components/atoms/InputText";
import Text from "@src/components/atoms/Text";
import MuiTest from "@src/components/molecules/MuiTest";
import { ContextTasksProvider } from "@src/context/ContextTasks";
import MuiProvider from "@src/context/MuiProvider";
import "@src/css/base.css";
import "@src/css/base.scss";
import "@src/css/reset.css";
import "@src/css/tailwind.css";
import AddTask from "@src/stories/context/ContextTasks/AddTask";
import TaskList from "@src/stories/context/ContextTasks/TaskList";

const App = () => {
  return (
    <div className="App">
      <div className="testText">
        {`<Text>`}
        <Text text="Text text prop test" />
        {`</Text>`}
      </div>

      <div className="line">{`// -------------------------`}</div>

      <div className="">
        {`<InputText>`}
        <div className="tw-font-bold tw-text-sm tw-text-gray-500">
          <InputText
            className="tw-py-1 tw-px-2 tw-text-xs tw-text-red-500 tw-border tw-border-red-500"
            placeholder="InputText placeholder prop test"
            // value="InputText value prop test"
            defaultValue="InputText defaultValue prop test"
          />
        </div>
        {`</InputText>`}
      </div>

      <div className="line">{`// -------------------------`}</div>

      <div className="testCmp">
        <Cmp />
      </div>

      <div className="line">{`// -------------------------`}</div>

      <div className="testContextProviderTasks">
        {`<ContextProviderTasks>`}
        <ContextTasksProvider>
          <h1>Day off in Kyoto</h1>
          <AddTask />
          <TaskList />
        </ContextTasksProvider>
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
