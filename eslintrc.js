module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "react-app",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
}
