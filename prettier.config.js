/**
 * @type {import('prettier').Config}
 */

const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: [
    '^@mui(.*)$',
    '^@(api|assets|components|enums|features|helpers|hooks|pages|router|store|theme|types)(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  quoteProps: 'preserve',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

export default config;
