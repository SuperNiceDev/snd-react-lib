# Technologies

### Webpack [Docs](https://webpack.js.org/configuration/)

##### Typescript
[Docs](https://www.typescriptlang.org/docs)
[Howto](https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/)

##### Babel
[Docs](https://babeljs.io/docs/en/)

##### core-js
[Docs](https://github.com/zloirock/core-js)


## linting / auto format

- install:
  yarn add -D prettier eslint-config-prettier eslint-plugin-prettier @eslint/compat

- add file .prettierrc.js

- adjust eslint.config.mjs


## auto sort imports

- install:
  yarn add -D @trivago/prettier-plugin-sort-imports

- adjust file .prettierrc.js
  https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#install


## typescript css-modules

- install:
  yarn add -D typescript-plugin-css-modules
  (use Workspace version of Type Script)


## tailwind
- https://tailwindcss.com/docs/installation/using-postcss

- install:
  yarn add -D postcss-loader

- add postcss-loader to webpack.config.ts css rule


## storybook
- https://storybook.js.org/docs/get-started/frameworks/react-webpack5