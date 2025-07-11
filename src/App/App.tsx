import React from "react";

import InputText from "snd-react-lib/components/atoms/InputText";
import Text from "snd-react-lib/components/atoms/Text";
import "snd-react-lib/css/base.css";
import "snd-react-lib/css/base.scss";
import "snd-react-lib/css/tailwind.css";
import UseDidMountEffectDemo from "snd-react-lib/stories/hooks/UseDidMountEffect.stories/UseDidMountEffectDemo";

const App = () => {
  return (
    <div className="App">
      <div className="my-2">
        <code>{`<Text>`}</code>
        <Text
          className="text-sm font-bold text-fuchsia-800"
          text="Text text prop test"
        />
        <code>{`</Text>`}</code>
      </div>

      <div className="my-2">
        <code>{`<InputText>`}</code>
        <div className="text-sm font-bold text-fuchsia-800">
          <InputText
            className="border border-fuchsia-800 px-2 py-1 text-xs text-fuchsia-800"
            placeholder="InputText prop placeholder test"
            defaultValue="InputText prop default value test"
            // value="InputText prop value test"
          />
        </div>
        <code>{`</InputText>`}</code>
      </div>

      <div className="my-2">
        <UseDidMountEffectDemo className="text-white_ rounded-sm bg-fuchsia-800 px-3 py-1 text-gray-300" />
      </div>
    </div>
  );
};

export default App;
