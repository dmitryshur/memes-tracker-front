module.exports = {
  "extends": ["airbnb", "prettier", "plugin:jest/recommended"],
  "env": {
    "jest": true,
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], 
  }
};
