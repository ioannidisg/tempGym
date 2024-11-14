// eslint.config.js
import jsdoc from "eslint-plugin-jsdoc";
export default [
    {
      files: ["**/*.js"],
      rules: {
        "jsdoc/require-description": "error",
        "jsdoc/check-values": "error"
      },
    },
  ];
  