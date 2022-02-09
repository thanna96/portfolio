module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    jest: true,
  },
  'extends': [
      'eslint:recommended',
    'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    }
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  'settings': {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      }
    }
  },
  'rules': {
    'no-undef': 1,
    'no-var': 1,
    'prettier/prettier': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-var-requires': 1,

  },
};
