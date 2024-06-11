import React from "react";

import { createRoot } from "react-dom/client";

// import "core-js/es/number";
import App from "./App";

const domNode = document.querySelector("#appRoot") as HTMLElement;
const root = createRoot(domNode);

root.render(<App />);
