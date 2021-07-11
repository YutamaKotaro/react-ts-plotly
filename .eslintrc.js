module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:dependency-relation/preset"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "dependency-relation"
    ]
};
