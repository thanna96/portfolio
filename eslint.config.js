import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));
const compat = new FlatCompat({ baseDirectory: tsconfigRootDir });

const sourceFiles = ['src/**/*.{ts,tsx,js,jsx}'];
const tsFiles = ['src/**/*.{ts,tsx}'];
const testFiles = [
  'src/**/*.{test,spec}.{ts,tsx,js,jsx}',
  'src/**/__tests__/**/*.{ts,tsx,js,jsx}',
];

const sourcePluginConfigs = compat
  .extends(
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  )
  .map((config) => ({
    ...config,
    files: sourceFiles,
  }));

const jestPluginConfigs = compat.extends('plugin:jest/recommended').map((config) => ({
  ...config,
  files: testFiles,
}));

export default [
  {
    ignores: ['build/**', 'coverage/**', 'node_modules/**', '*.config.js', '.eslintrc.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...sourcePluginConfigs,
  {
    files: tsFiles,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir,
      },
    },
  },
  {
    files: sourceFiles,
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'off',
      'prettier/prettier': 'warn',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^React$',
          argsIgnorePattern: '^_',
        },
      ],
      'react-hooks/purity': 'off',
    },
  },
  {
    files: testFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  ...jestPluginConfigs,
];