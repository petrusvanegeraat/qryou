module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo']],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@': '.',
            '@/app': './app',
            '@/components': './components',
            '@/constants': './constants',
            '@/hooks': './hooks',
            '@/utils': './utils',
            '@/services': './services',
            '@/assets': './assets',
            '@/types': './types',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
        },
      ],
    ],
  }
}
