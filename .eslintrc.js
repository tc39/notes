module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "arrow-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "object-curly-spacing": ["error", "always"]
  },
  overrides: [
    {
      files: ["**/*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
    }
  ]
};
