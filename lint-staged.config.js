/** @type {import('lint-staged').Config} */
const config = {
  '*.{js,ts,tsx}': [
    'prettier --write',
    'editorconfig-checker',
    'eslint --max-warnings=0',
  ],
  '*.{json,css,md,html}': ['prettier --write', 'editorconfig-checker'],
};

export default config;
