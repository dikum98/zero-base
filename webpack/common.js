import { resolve } from 'node:path';
<<<<<<< HEAD
import {
  babelLoader,
  typeScriptLoader,
  styleLoaders,
  styleModulesLoader,
  assetsLoader,
  svgAssetsLoader,
} from './loaders/index.js';

import { createHtmlTemplate } from './plugins/index.js';

const commonConfig = {
  target: ['browserslist'],
=======
import { createDotEnvPlugin, createHtmlPlugin } from './plugins/index.js';
import {
  assetsLoader,
  svgrLoader,
  // babelLoader,
  // tsLoader,
  esbuildLoader,
  tsEsbuildLoader,
  styleLoader,
  styleModuleLoader,
} from './loaders/index.js';

const commonConfig = {
  target: 'browserslist',
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'],
    alias: {
      '@': resolve('src'),
    },
  },
  entry: {
    main: {
<<<<<<< HEAD
      import: resolve('src/main.jsx'),
      dependOn: 'vendors',
    },
    vendors: ['react', 'react-dom'],
    // react: 'react',
    // 'react-dom': 'react-dom',
  },
  output: {
    path: resolve('public'),
    filename: '[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      babelLoader,
      typeScriptLoader,
      styleLoaders,
      styleModulesLoader,
      assetsLoader,
      svgAssetsLoader,
    ],
  },
  plugins: [createHtmlTemplate()].filter(Boolean),
=======
      import: resolve('src/index.jsx'),
      dependOn: ['vendor'],
    },
    // sub: {
    //   import: resolve('src/sub.tsx'),
    //   dependOn: ['vendor.react', 'vendor.react-dom'],
    // },
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    assetModuleFilename: 'static/[name].[contenthash][ext][query]',
  },
  module: {
    rules: [
      // babelLoader,
      // tsLoader,
      esbuildLoader,
      tsEsbuildLoader,
      styleLoader,
      styleModuleLoader,
      assetsLoader,
      svgrLoader,
    ],
  },
  plugins: [createDotEnvPlugin(), createHtmlPlugin()].filter(Boolean),
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
};

export default commonConfig;
