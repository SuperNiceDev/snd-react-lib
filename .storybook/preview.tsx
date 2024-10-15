// import React from "react";
// import {
//   CssBaseline,
//   StyledEngineProvider,
//   ThemeProvider,
// } from "@mui/material";
import "@src/css/base.css";
import "@src/css/reset.css";
import "@src/css/tailwind.css";
// import { makeDecorator } from "@storybook/preview-api";
import { Preview } from "@storybook/react";

// import theme from "../src/context/MuiProvider/theme.ts";

// https://storybook.js.org/docs/react/essentials/toolbars-and-globals#gatsby-focus-wrapper

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "de",
    toolbar: {
      icon: "globe",
      items: [
        { value: "de", right: "🇩🇪", title: "Deutsch" },
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
      ],
    },
  },
};

// export const muiDecorator = makeDecorator({
//   name: "MuiDecorator",
//   parameterName: "MuiDecoratorParameter",
//   // skipIfNoParametersOrOptions: true,
//   wrapper: (getStory: any, context, { parameters }) => {
//     return (
//       // <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {getStory(context)}
//       </ThemeProvider>
//       // </StyledEngineProvider>
//     );
//   },
// });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators: [muiDecorator],
  // tags: ["autodocs"],
};

export default preview;
