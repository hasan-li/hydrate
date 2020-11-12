module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:react-native/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    DEV: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-raw-text': 'off',
    'react/prop-types': 0,
    'linebreak-style': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': { rootPathSuffix: 'src' },
    },
  },
};
