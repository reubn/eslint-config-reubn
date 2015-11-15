module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "semi": 0,
    "quotes": [2, "double", "avoid-escape"],
    "space-before-blocks": [2, {
      "functions": "never",
      "keywords": "always"
    }],
    "func-names": 0,
    "comma-dangle": [2, "never"],
    "space-after-keywords": 0,
    "no-console": 0,
    "no-use-before-define": [2, "nofunc"],
    "guard-for-in": 0,
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict"
    }]
  }
}
