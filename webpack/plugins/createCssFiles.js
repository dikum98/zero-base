import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const createCssFiles = (options = {}) => {
  const config = Object.assign(
    {
      filename: 'static/style.min.css',
    },
    options
  );
  return new MiniCssExtractPlugin(config);
};

export const cssExtractLoader = MiniCssExtractPlugin.loader;
