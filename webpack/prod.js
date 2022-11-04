import { resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import {
<<<<<<< HEAD
  createDotEnv,
  createCopyAssets,
  createCssFiles,
  createCssMinify,
  createJsMinify,
  createImageMinify,
  createCleanup,
  createBundleAnalyzer,
=======
  createCopyPlugin,
  createCssExtractPlugin,
  createCssMinimizerPlugin,
  createTerserPlugin,
  createCleanPlugin,
  createImageMinPlugin,
  createBundleAnalyzerPlugin,
  createESBuildMinifyPlugin,
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
} from './plugins/index.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
<<<<<<< HEAD
  output: {
    ...commonConfig.output,
    path: resolve('build'),
    filename: '[contenthash].min.js',
  },
  plugins: [
    ...commonConfig.plugins,
    createDotEnv({ path: '.env/.prod' }),
    createCopyAssets(),
    createCssFiles(),
    createBundleAnalyzer(),
=======
  devtool: false,
  output: {
    ...commonConfig.output,
    path: resolve('build'),
    filename: '[name].[contenthash].min.js',
    chunkFilename: '[name].[contenthash].chunk.min.js',
  },
  plugins: [
    ...commonConfig.plugins,
    createCopyPlugin(),
    createCssExtractPlugin(),
    createBundleAnalyzerPlugin(),
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
<<<<<<< HEAD
      createCssMinify(),
      createJsMinify(),
      createImageMinify(),
      createCleanup(),
    ].filter(Boolean),
=======
      createTerserPlugin(),
      createCssMinimizerPlugin(),
      createCleanPlugin(),
      createImageMinPlugin(),
      createESBuildMinifyPlugin(),
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       name: 'vendor',
    //       chunks: 'initial',
    //       minChunks: 2,
    //     },
    //   },
    // },
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
  },
});

export default prodConfig;
