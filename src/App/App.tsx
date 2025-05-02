import React from "react";

import InputText from "snd-react-lib/components/atoms/InputText";
import Text from "snd-react-lib/components/atoms/Text";
import "snd-react-lib/css/base.css";
import "snd-react-lib/css/base.scss";
import "snd-react-lib/css/tailwind.css";

const App = () => {
  return (
    <div className="App">
      <div className="">
        <code>{`<Text>`}</code>
        <Text
          className="tw:font-bold tw:text-sm tw:text-fuchsia-500"
          text="Text text prop test"
        />
        <code>{`</Text>`}</code>
      </div>

      <div className="">
        <code>{`<InputText>`}</code>
        <div className="tw:font-bold tw:text-sm tw:text-fuchsia-500">
          <InputText
            className="tw:py-1 tw:px-2 tw:text-xs tw:text-fuchsia-500 tw:border tw:border-fuchsia-500"
            placeholder="InputText prop placeholder test"
            defaultValue="InputText prop default value test"
            // value="InputText prop value test"
          />
        </div>
        <code>{`</InputText>`}</code>
      </div>
    </div>
  );
};

export default App;
