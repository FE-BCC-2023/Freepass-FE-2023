/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  plugins: ['svelte3', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
};
