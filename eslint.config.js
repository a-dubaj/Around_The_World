const jquery = require('eslint-plugin-jquery');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    files: ['js/**/*.js'],
    ignores: ['js/lib/**'],
    plugins: { jquery },
    languageOptions: {
      globals: {
        $: 'readonly',
        jQuery: 'readonly',
        Highcharts: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      eqeqeq: 'warn',
    },
  },
  prettierConfig,
];