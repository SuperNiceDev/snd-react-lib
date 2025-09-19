// import React from "react";
// import { makeDecorator } from "storybook/preview-api";
// import { StyledEngineProvider } from "@mui/material";
// import MuiProvider from "snd-react-lib/context/MuiProvider";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Preview } from "@storybook/react-webpack5";
// import "snd-react-lib/css/base.css";
import "snd-react-lib/css/tailwind.css";

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
//       <StyledEngineProvider injectFirst>
//         <MuiProvider>{getStory(context)}</MuiProvider>
//       </StyledEngineProvider>
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
    backgrounds: {
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#FFF" },
      ],
      default: "Light",
    },
  },
  // tags: ["autodocs"],
  // decorators: [muiDecorator],
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    (Story) => {
      const className = "____XXX___ bg-[var(--background)]";
      const classNameArr = className.split(" ");
      document.body.classList.add(...classNameArr);
      return Story();
    },
    // (Story) => (
    //   <div className="____XXX___ bg-[var(--background)]">
    //     <Story />
    //   </div>
    // ),
  ],
};

export default preview;
