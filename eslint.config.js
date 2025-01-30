import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs';

const ignoresConfig = tseslint.config({
  name: 'ignores',
  ignores: ['dist'],
});

const filesConfig = tseslint.config({
  name: 'files',
  files: ['**/*.{ts,tsx}'],
});

const tseslintConfig = tseslint.config({
  name: 'tseslint',
  files: ['**/*.{ts,tsx}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
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
  name: 'sonarjs',
  extends: [sonarjs.configs.recommended],
  rules: {
    'sonarjs/prefer-read-only-props': 'off',
    'sonarjs/no-intrusive-permissions': 'off',
  },
});

const config = tseslint.config(
  ...ignoresConfig,
  ...filesConfig,
  ...tseslintConfig,
  ...reactConfig,
  ...sonarjsConfig,
);

export default config;
