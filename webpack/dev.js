import { merge } from 'webpack-merge';
<<<<<<< HEAD
import commonConfig from './common.js';
import serverConfig from './server.js';
import { createDotEnv } from './plugins/index.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: serverConfig,
  plugins: [
    ...commonConfig.plugins,
    createDotEnv({ path: '.env/.dev' }),
  ].filter(Boolean),
=======
import devServer from './server.js';
import commonConfig from './common.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer,
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
});

export default devConfig;
