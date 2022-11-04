module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        stage: 2,
<<<<<<< HEAD
        autoprefixer: { grid: true },
=======
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
        features: {
          'nesting-rules': true,
          'custom-selectors': true,
        },
      },
    ],
  ],
};
