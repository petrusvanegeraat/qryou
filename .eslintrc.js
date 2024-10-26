// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        pathGroups: [
          // 1. React imports
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          // 2. React Native imports
          {
            pattern: 'react-native',
            group: 'external',
            position: 'after',
          },
          // 3. Expo imports
          {
            pattern: '{expo,expo-*,expo-router}',
            group: 'external',
            position: 'after',
          },
          // Internal paths
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['/dist/*', 'expo-env.d.ts'],
}
