# Technologies

##### Webpack [Docs](https://webpack.js.org/configuration/)

##### Typescript [Docs](https://www.typescriptlang.org/docs)

##### Babel [Docs](https://babeljs.io/docs/en/)

##### core-js [Docs](https://github.com/zloirock/core-js)


# Project Setup

#### eslint / prettier

```shell
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier @eslint/compat
```
add file .prettierrc.js
adjust eslint.config.mjs


#### Auto sort imports
https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#install

```shell
yarn add -D @trivago/prettier-plugin-sort-imports
```
adjust .prettierrc.js


#### Typescript CSS-modules
https://www.npmjs.com/package/typescript-plugin-css-modules

```shell
yarn add -D typescript-plugin-css-modules
```
(use Workspace version of Type Script)


#### Tailwind
https://tailwindcss.com/docs/installation/using-postcss

```shell
yarn add -D postcss-loader
```
add postcss-loader to webpack.config.ts css rule


#### Storybook
https://storybook.js.org/docs/get-started/frameworks/react-webpack5

```shell
yarn add -D @storybook/addon-styling-webpack
```


#### Jest / testing-library

https://dev.to/debajit13/unit-testing-react-components-with-jest-and-react-testing-library-3he

```shell
yarn add -D jest @testing-library/react @testing-library/jest-dom @types/jest ts-jest
yarn add -D jest-environment-jsdom identity-obj-proxy
```
