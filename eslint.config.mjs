import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs", globals: {
    ...globals.node, // Fix require(), module, __dirname issues
  },}},
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // Fix Jest errors (test, expect, describe)
      },
    },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];