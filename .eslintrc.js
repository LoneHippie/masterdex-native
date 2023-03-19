module.exports = {
  extends: ["plugin:react-hooks/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
