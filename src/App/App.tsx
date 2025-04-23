import React from "react";

import Cmp from "snd-react-lib/components/atoms/Cmp";
import InputText from "snd-react-lib/components/atoms/InputText";
import Text from "snd-react-lib/components/atoms/Text";
import "snd-react-lib/css/base.css";
import "snd-react-lib/css/base.scss";
import "snd-react-lib/css/tailwind.css";

// import { StyledEngineProvider } from "@mui/material";
// import Text from "snd-react-lib/components/atoms/Text";
// import MuiTest from "snd-react-lib/components/molecules/MuiTest";
// import AddTask from "snd-react-lib/components/organisms/TaskList/AddTask";
// import TaskList from "snd-react-lib/components/organisms/TaskList/TaskList";
// import { ContextTasksProvider } from "snd-react-lib/context/ContextTasks";
// import MuiProvider from "snd-react-lib/context/MuiProvider";

const App = () => {
  return (
    <div className="App">
      <div className="">
        <code>{`<Text>`}</code>
        <Text
          className="tw:font-bold tw:text-sm tw:text-lime-500"
          text="Text text prop test"
        />
        <code>{`</Text>`}</code>
      </div>

      <div className="">
        <code>{`<InputText>`}</code>
        <div className="tw:font-bold tw:text-sm tw:text-lime-500">
          <InputText
            className="tw:py-1 tw:px-2 tw:text-xs tw:text-lime-500 tw:border tw:border-lime-500"
            placeholder="InputText prop placeholder test"
            defaultValue="InputText prop default value test"
            // value="InputText prop value test"
          />
        </div>
        <code>{`</InputText>`}</code>
      </div>

      <div className="">
        <Cmp />
      </div>

      {/* <div className="">
        <code>{`<ContextTasks>`}</code>
        <ContextTasksProvider>
          <h1>Day off in Kyoto</h1>
          <AddTask />
          <TaskList />
        </ContextTasksProvider>
        <code>{`<ContextTasks>`}</code>
      </div>

      <div className="">
        <StyledEngineProvider injectFirst>
          <MuiProvider>
            <MuiTest />
          </MuiProvider>
        </StyledEngineProvider>
      </div> */}
    </div>
  );
};

export default App;
