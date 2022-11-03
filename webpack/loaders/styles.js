export const styleLoaders = {
  test: /\.s?[ac]ss$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
  exclude: /\.module\.s?[ac]ss$/i,
};