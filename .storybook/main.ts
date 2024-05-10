import type { StorybookConfig } from "@storybook/react-webpack5";
import path, { join, dirname } from "path";

const custom = require("../webpack.dev.js");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
  ],
  webpackFinal: (config) => {
    // webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    const resolve = config.resolve;
    if (resolve?.alias) {
      resolve.alias["@src"] = path.resolve(__dirname, "../src");
      resolve.alias["js-dom-utils"] = path.resolve(__dirname, "../lib/js-dom-utils/src");
    }
    const newConfig = {
      ...config,
      resolve,
      module: {
        rules: [
          ...config.module.rules,
          custom.module.rules[2],
          custom.module.rules[3],
          custom.module.rules[4],
        ],
      },
    };

    return newConfig;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: { builder: {} },
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
