module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended", "eslint:recommended",
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 10
      },      
      "multiline": {
        "max": 1
      }
    }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],

    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "none"
      }
    ],
  },
};
