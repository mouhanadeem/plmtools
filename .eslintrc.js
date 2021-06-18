const path = require('path');

module.exports = {
  extends: [
    '@lego/eslint-config-typescript',
    '@lego/eslint-config-react',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    project: [
      'tsconfig.json',
    ],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  root: true,
};
