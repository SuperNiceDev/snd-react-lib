const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshBabel = require("react-refresh/babel");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "js-dom-utils": path.resolve(__dirname, "lib/js-dom-utils/src"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [ReactRefreshBabel],
          },
        },
      },

      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              // https://github.com/webpack-contrib/css-loader#modules
              modules: {
                auto: /\.module\.\w+$/i,
                // localIdentName: "[name]_[local]_[hash:base64:5]",
                getLocalIdent: (
                  context,
                  localIdentName,
                  localName,
                  options,
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
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true,
    port: "auto",
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  plugins: [new ReactRefreshWebpackPlugin({ overlay: false })],
};
