import path from "path";

import webpackDevConf from "../webpack.config.ts";

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-links", {
    name: "@storybook/addon-styling-webpack",
    options: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { importLoaders: 1 },
            },
            {
              loader: "postcss-loader",
              options: { implementation: require.resolve("postcss") },
            },
          ],
        },
      ],
    },
  }, "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (config) => {
    // webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    const resolve = config.resolve;
    if (resolve?.alias) {
      resolve.alias["snd-react-lib"] = path.resolve(__dirname, "../src");
    }
    const newConfig = {
      ...config,
      resolve,
      module: {
        rules: [
          ...config.module.rules,
          webpackDevConf?.module?.rules?.[2],
          webpackDevConf?.module?.rules?.[3],
        ],
      },
    };

    return newConfig;
  },
};
export default config;
