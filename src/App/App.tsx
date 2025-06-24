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
          className="font-bold text-sm text-fuchsia-800"
          text="Text text prop test"
        />
        <code>{`</Text>`}</code>
      </div>

      <div className="my-2">
        <code>{`<InputText>`}</code>
        <div className="font-bold text-sm text-fuchsia-800">
          <InputText
            className="py-1 px-2 text-xs text-fuchsia-800 border border-fuchsia-800"
            placeholder="InputText prop placeholder test"
            defaultValue="InputText prop default value test"
            // value="InputText prop value test"
          />
        </div>
        <code>{`</InputText>`}</code>
      </div>

      <div className="my-2">
        <UseDidMountEffectDemo className="py-1 px-3 text-white_ text-gray-300 bg-fuchsia-800 rounded-sm" />
      </div>
    </div>
  );
};

export default App;
