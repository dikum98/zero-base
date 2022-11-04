<<<<<<< HEAD
const serverConfig = {
  host: 'localhost',
  port: 3000,
  open: false,
  hot: true,
  liveReload: true,
  compress: true,
  historyApiFallback: true,
  static: ['public'],
  client: {
    overlay: true,
  },
};

export default serverConfig;
=======
const devServer = {
  host: 'localhost',
  port: 3000,
  hot: true,
  open: false,
  compress: true,
  liveReload: true,
  static: ['public'],
  historyApiFallback: true,
  client: {
    logging: 'info',
    overlay: true,
    reconnect: 3,
  },
  watchFiles: {
    paths: ['src/**/*.*', 'public/**/*.*'],
  },
};

export default devServer;
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
