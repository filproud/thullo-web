module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'off',
    'import/no-default-export': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          FC: {
            message:
              "Add children to your types if needed and move the Props type to the function's parameter",
          },
          'React.FC': {},
        },
      },
    ],
  },
  overrides: [
    {
      // Storybook requires a default export
      files: ['**/*.stories.*', '.storybook/theme.js'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      // Components or containers should have a return statement
      files: ['src/components/**/index.tsx', 'src/containers/**/index.tsx'],
      rules: {
        'arrow-body-style': ['error', 'always'],
      },
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
