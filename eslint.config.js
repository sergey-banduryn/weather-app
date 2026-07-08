import stylistic from '@stylistic/eslint-plugin';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const ignoresConfig = tseslint.config({
  ignores: ['dist'],
  name: 'ignores',
});

const tseslintConfig = tseslint.config({
  extends: [
    tseslint.configs.eslintRecommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: globals.browser,
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  name: 'tseslint',
  rules: {
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        'fixMixedExportsWithInlineTypeSpecifier': true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        'fixStyle': 'inline-type-imports',
        'prefer': 'type-imports',
      },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'always'],
    'no-console': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        'message':
          'Please use a single export at the bottom of the file instead of inline exports.',
        'selector': 'ExportNamedDeclaration[declaration!=null]',
      },
      {
        'message': 'Export/Import all (*) is forbidden.',
        'selector': 'ExportAllDeclaration,ImportAllDeclaration',
      },
    ],
    'prefer-destructuring': 'warn',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
  },
});

const reactConfig = tseslint.config({
  files: ['**/*.{ts,tsx}'],
  name: 'react',
  plugins: {
    'react': reactPlugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactPlugin.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});

const sonarjsConfig = tseslint.config({
  extends: [sonarjs.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  name: 'sonarjs',
  rules: {
    'sonarjs/no-intrusive-permissions': 'off',
    'sonarjs/prefer-read-only-props': 'off',
    'sonarjs/reduce-initial-value': 'off',
    'sonarjs/void-use': 'off',
  },
});

const unicornConfig = tseslint.config({
  extends: [unicorn.configs['flat/recommended']],
  files: ['**/*.{ts,tsx}'],
  name: 'unicorn',
  rules: {
    'unicorn/filename-case': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
});

const perfectionistConfig = tseslint.config({
  extends: [perfectionist.configs['recommended-natural']],
  files: ['**/*.{ts,tsx}', '*.config.{js,ts}'],
  name: 'perfectionist',
  rules: {
    'perfectionist/sort-imports': 'off',
  },
});

const importPluginConfig = tseslint.config({
  extends: [
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
  ],
  name: 'importPlugin',
  rules: {
    'import/exports-last': ['error'],
    'import/extensions': [
      'error',
      {
        json: 'always',
      },
    ],
    'import/newline-after-import': ['error'],
    'import/no-commonjs': 'warn',
    'import/no-default-export': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-unused-modules': 'warn',
  },
  settings: {
    'import/ignore': ['@stylistic'],
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
});

const stylisticConfig = tseslint.config({
  files: ['**/*.{ts,tsx}'],
  name: 'stylistic',
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'next': [
          'block-like',
          'class',
          'do',
          'for',
          'function',
          'if',
          'switch',
          'try',
          'while',
        ],
        'prev': '*',
      },
      {
        'blankLine': 'always',
        'next': '*',
        'prev': [
          'block-like',
          'class',
          'do',
          'for',
          'function',
          'if',
          'switch',
          'try',
          'while',
        ],
      },
      { 'blankLine': 'always', 'next': 'return', 'prev': '*' },
      { 'blankLine': 'always', 'next': '*', 'prev': 'return' },
      {
        'blankLine': 'any',
        'next': ['const', 'let', 'var'],
        'prev': ['const', 'let', 'var'],
      },
      { 'blankLine': 'always', 'next': 'export', 'prev': '*' },
      { 'blankLine': 'never', 'next': 'export', 'prev': 'export' },
    ],
  },
});

const tanstackQueryConfig = tseslint.config({
  extends: [tanstackQuery.configs['flat/recommended-strict']],
  files: ['src/**/*.{ts,tsx}'],
  name: 'tanstackQuery',
});

const config = tseslint.config(
  ...ignoresConfig,
  ...tseslintConfig,
  ...reactConfig,
  ...sonarjsConfig,
  ...unicornConfig,
  ...perfectionistConfig,
  ...importPluginConfig,
  ...stylisticConfig,
  ...tanstackQueryConfig,
  {
    files: ['*.config.{js,ts}'],
    rules: {
      'import/no-default-export': ['off'],
      'import/no-named-as-default-member': ['off'],
    },
  },
);

export default config;
