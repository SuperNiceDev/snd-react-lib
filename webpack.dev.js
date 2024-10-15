const path = require("path");
// const ReactRefreshBabel = require("react-refresh/babel");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env) => {
  // console.log("env: ", env);

  // const isProduction = env.NODE_ENV === "production";
  // const dotenvFilename = isProduction ? ".env.production" : ".env.development";

  return {
    entry: "./src/index.tsx",
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        // '@assets': path.resolve(__dirname, 'src/assets/'),
      },
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        // ------ [0]
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              // plugins: [ReactRefreshBabel],
            },
          },
        },
        // ------ [1]
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        // ------ [2]
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
            // {
            //   loader: "postcss-loader",
            //   options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
            // },
            // Can be `less-loader`
            // ------ [3]
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          // https://webpack.js.org/guides/asset-modules/
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          type: "asset",
        },
      ],
    },
    // devtool: 'source-map',
    devtool: "eval-cheap-module-source-map",
    devServer: {
      hot: true,
      port: "auto",
      // static: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
      client: {
        overlay: false,
        // overlay: {
        //   warnings: false,
        //   errors: false,
        // },
      },
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
    },
    plugins: [
      new ReactRefreshWebpackPlugin({ overlay: false }),
      new Dotenv({
        // path: dotenvFilename,
        path: ".env",
      }),
      new ESLintPlugin({
        extensions: ["ts", "tsx", "js", "mjs"],
        failOnError: false,
        // overrideConfigFile: path.resolve(__dirname, "eslint.config.mjs"), // Use the new ESLint config
        emitWarning: true,
      }),
      // https://dev.to/knitesh/using-specific-env-file-in-react-webpack-4pkj
      // new webpack.DefinePlugin({
      //   "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      // }),
    ],
  };
};
