import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const ignoresConfig = tseslint.config({
  ignores: ['dist'],
  name: 'ignores',
});

const filesConfig = tseslint.config({
  files: ['**/*.{ts,tsx}'],
  name: 'files',
});

const tseslintConfig = tseslint.config({
  extends: [
    js.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  name: 'tseslint',
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
});

const reactConfig = tseslint.config({
  name: 'react',
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
});

const sonarjsConfig = tseslint.config({
  extends: [sonarjs.configs.recommended],
  name: 'sonarjs',
  rules: {
    'sonarjs/no-intrusive-permissions': 'off',
    'sonarjs/prefer-read-only-props': 'off',
  },
});

const unicornConfig = tseslint.config({
  extends: [eslintPluginUnicorn.configs['flat/recommended']],
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
  name: 'perfectionist',
  rules: {
    'perfectionist/sort-imports': 'off',
  },
});

const config = tseslint.config(
  ...ignoresConfig,
  ...filesConfig,
  ...tseslintConfig,
  ...reactConfig,
  ...sonarjsConfig,
  ...unicornConfig,
  ...perfectionistConfig,
);

export default config;
