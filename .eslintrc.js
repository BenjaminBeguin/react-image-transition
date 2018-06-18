module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        // "prettier"
    ],
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "react/prop-types": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "comma-dangle": [2, "only-multiline"],
      "semi": [2, "never"],
      "no-param-reassign": [2, {"props": false}],
    }
};
