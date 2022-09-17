module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src/'],
          alias: {
            alias: {
              '~': './src',
              assets: './src/assets',
              images: './src/assets/images',
              visual: './src/assets/visual',
              components: './src/components',
              interface: './src/interfaces',
              pages: './src/pages',
              routes: '/src/routes',
              styles: './src/styles',
              services: './src/services',
              types: './src/types',
              utils: './src/utils',
            },
          },
        },
      ],
    ],
  }
}
