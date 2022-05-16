module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
    'no-debugger': 'error',
    'object-shorthand': 'error',
    'no-undef': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
