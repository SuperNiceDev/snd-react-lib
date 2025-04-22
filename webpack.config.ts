import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      // '@assets': path.resolve(__dirname, 'src/assets/'),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(__dirname, "babel.config.ts"),
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // ------ rules[2]
      {
        // https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss
        // For pure CSS - /\.css$/i,
        // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
        // For Less - /\.((c|le)ss)$/i,
        // test: /\.((c|sa|sc)ss)$/i,
        test: /\.((sa|sc)ss)$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // Run `postcss-loader` on each CSS `@import` and CSS modules/ICSS imports, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
              // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
              importLoaders: 1,
              sourceMap: true,
              // https://github.com/webpack-contrib/css-loader#modules
              modules: {
                auto: /\.module\.\w+$/i,
                namedExport: false,
                // localIdentName: "[name]_[local]_[hash:base64:5]",
                getLocalIdent: (
                  context: any,
                  localIdentName: any,
                  localName: any,
                  options: any,
                ) => {
                  const fileName = context.resourcePath
                    .split("/")
                    .pop()
                    .split(".module.scss")[0]
                    .replace(".", "_");
                  const newLocalname =
                    localName === "root" ? "_" : `_${localName}`;

                  // console.log("fileName: ", fileName);
                  return `${fileName}${newLocalname}`;
                },
              },
            },
          },
          // {
          //   loader: "postcss-loader",
          //   options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
          // },
          // Can be `less-loader`
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    hot: true,
  },
};

export default config;
