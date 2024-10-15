import type { StorybookConfig } from "@storybook/react-webpack5";
import path, { dirname, join } from "path";

// const webpackDevConfFunc = require("../webpack.dev.js");
import webpackDevConfFunc from "../webpack.dev.js";

const webpackDevConf = webpackDevConfFunc();

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  ],
  webpackFinal: (config) => {
    // webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    const resolve = config.resolve;
    if (resolve?.alias) {
      resolve.alias["@src"] = path.resolve(__dirname, "../src");
    }
    const newConfig = {
      ...config,
      resolve,
      module: {
        rules: [
          ...config.module.rules,
          webpackDevConf.module.rules[2],
          webpackDevConf.module.rules[3],
        ],
      },
    };

    return newConfig;
  },

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: { builder: {} },
  },
  docs: {},
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
