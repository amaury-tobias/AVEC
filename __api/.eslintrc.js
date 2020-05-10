module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    rules: {
      "@typescript-eslint/explicit-function-return-type": ["off", {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true
      }]
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module"
    }
  }
