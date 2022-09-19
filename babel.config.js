module.exports = function(api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin', [
                'module-resolver',
                {
                    root: ['./src/'],
                    alias: {
                        '~': './src',
                        assets: './src/assets',
                        images: './src/assets/images',
                        visual: './src/assets/visual',
                        components: './src/components',
                        interface: './src/interfaces',
                        models: './src/models',
                        pages: './src/pages',
                        routes: '/src/routes',
                        styles: './src/styles',
                        services: './src/services',
                        types: './src/types',
                        utils: './src/utils',
                    },
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                    ],
                },
            ],
        ],
    }
}