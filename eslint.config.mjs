import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "src/packages/snd-react-lib/public/",
      "src/packages/snd-react-lib/build/",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ),
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": 0,
    },
  },
];
