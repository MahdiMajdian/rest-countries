module.exports = {
    env: {
      browser: true,
      amd: true,
      node: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:eslint-comments/recommended',
      'plugin:react/recommended',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:testing-library/react',
      'plugin:jest-dom/recommended',
      'plugin:jsx-a11y/strict',
    ],
  
    plugins: [
      'babel',
      'eslint-comments',
      'react',
      'react-hooks',
      '@typescript-eslint',
      'import',
      'import-quotes',
      'sort-keys-fix',
      'jest',
      'jest-dom',
      'jsx-a11y',
      'testing-library',
      'prettier',
      'no-warning-comments',
      'eslint-plugin-import',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }],
      'no-warning-comments': [1, { terms: ['todo', 'fixme'], location: 'start' }],
      '@typescript-eslint/explicit-member-accessibility': 'error'
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@assets', './src/assets'],
            ['@assets/*', './src/assets/*'],
            ['@hoc', './src/hoc'],
            ['@hoc/*', './src/hoc/*'],
            ['@provider', './src/provider'],
            ['@provider/*', './src/provider/*'],
            ['@routes', './src/routes'],
            ['@routes/*', './src/routes/*'],
            ['@serviceCallers', './src/service-callers'],
            ['@serviceCallers/*', './src/service-callers/*'],
            ['@services', './src/services'],
            ['@services/*', './src/services/*'],
            ['@theme', './src/theme'],
            ['@theme/*', './src/theme/*'],
            ['@customTypes', './src/types'],
            ['@customTypes/*', './src/types/*'],
            ['@utils', './src/utils'],
            ['@utils/*', './src/utils/*'],
            ['@components', './src/library/components'],
            ['@components/*', './src/library/components/*'],
            ['_', './src/library/utilities'],
            ['_/*', './src/library/utilities/*'],
            ['@hooks', './src/library/hooks'],
            ['@hooks/*', './src/library/hooks/*'],
            ['@api', './src/api'],
            ['@api/*', './src/api/*'],
            ['@modules', './src/modules'],
            ['@modules/*', './src/modules/*'],
          ],
          extensions: ['.ts', '.tsx', '.js'],
        },
      },
    },
    'overrides': [
      {
        'files': ['**/?(*.)+(test).ts?(x)'],
        'extends': ['plugin:testing-library/react']
      },
      {
        'files': ['**/?(*.)+(test).ts?(x)', './src/library/utilities/testing/**', './src/setupTests.ts'],
        'rules': {
          '@typescript-eslint/no-var-requires': 'off'
        }
      }
    ],
  };