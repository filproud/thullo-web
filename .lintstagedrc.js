module.exports = {
  '*.{js,ts,tsx}': ["eslint --ignore-pattern '!*' --fix --max-warnings=0"],
  '*.{js,ts,tsx,html,md,json,yml}': ['prettier --write'],
  '*.svg': ['prettier --write --parser html'],
  'styles.ts': 'stylelint',
};
