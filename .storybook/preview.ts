import { Preview } from "@storybook/react";

import '@src/css/reset.css';
import '@src/css/base.css';
// import "@src/css/tailwind.scss";

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

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;