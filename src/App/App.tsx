import React, { ReactElement } from "react";

import "@src/css/reset.css";
import "@src/css/base.css";
import "@src/css/base.scss";

import Text from "@src/components/atoms/Text";

const App = (): ReactElement => {
  return <Text text="my text" />;
};

export default App;
