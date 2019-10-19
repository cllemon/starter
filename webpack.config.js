const path = require('path');

module.exports = function() {
  const baseConfig = {
    mode: 'development',

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  };

  return baseConfig;
};
