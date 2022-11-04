module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
<<<<<<< HEAD
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
=======
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
<<<<<<< HEAD
    react: require.resolve('react/package.json').version,
    jest: require.resolve('jest/package.json').version,
=======
    react: { version: require('react/package.json').version },
    jest: { version: require('jest/package.json').version },
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'jest'],
  rules: {
<<<<<<< HEAD
=======
    '@typescript-eslint/no-var-requires': 'off',
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
    'react/prop-types': 'off',
  },
};
