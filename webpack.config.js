const path = require('path');
const webpack = require('webpack');
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = function() {
  const baseConfig = {
    mode: IS_PROD ? 'production' : 'development',

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },

    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom' // react-hot-loader 兼容 hook 写法
      }
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(c|sa|sc)ss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 2,
                modules: {
                  context: path.resolve(__dirname, 'src'),
                  localIdentName: '[name]__[local]-[hash:base64:5]'
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },

    plugins: []
  };

  if (!IS_PROD) {
    baseConfig.devServer = {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      compress: true,
      open: false,
      port: 3000,
      stats: 'errors-only',
      hot: true
      // host: '0.0.0.0',
      // useLocalIp: true,
    };
    baseConfig.plugins.concat([new webpack.HotModuleReplacementPlugin()]);
  }

  return baseConfig;
};
