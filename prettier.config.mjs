/**
 * @type {import('prettier').Config}
 */

const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 80,
  quoteProps: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  endOfLine: 'lf',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^@mui(.*)$',
    '^@(api|assets|components|dataTypes|enums|helpers|hooks|pages|router|store)(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
