module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "arrow-spacing": "error",
  },
};
