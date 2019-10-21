const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const safePostCssParser = require('postcss-safe-parser');
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = function () {
  const baseConfig = {
    mode: IS_PROD ? 'production' : 'development',

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: IS_PROD ? '/starter/' : '/',
      filename: IS_PROD ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: IS_PROD ? 'chunks/[name].[contenthash:8].js' : '[name].js',
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
          test: /\.(sa|sc)ss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: IS_PROD ? miniCssExtractPlugin.loader : 'style-loader',
              options: IS_PROD ? { publicPath: '../' } : {}
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !IS_PROD,
                importLoaders: 2,
                modules: {
                  context: path.resolve(__dirname, 'src'),
                  localIdentName: '[name]__[local]-[hash:base64:5]'
                }
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !IS_PROD
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: IS_PROD ? miniCssExtractPlugin.loader : 'style-loader',
              options: IS_PROD ? { publicPath: '../' } : {}
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !IS_PROD
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Starter',
        filename: 'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        minify: IS_PROD
          ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            removeScriptTypeAttributes: true
          }
          : {}
      }),
      new miniCssExtractPlugin({
        filename: IS_PROD ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
        chunkFilename: IS_PROD ? 'css/[id].[contenthash:8].css' : 'css/[id].css'
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          BASE_URL: IS_PROD ? `"/"` : '"/"'
        }
      }),
    ]
  };

  if (IS_PROD) {
    baseConfig.optimization = {
      minimizer: [
        // new UglifyjsWebpackPlugin({
        //   exclude: /node_modules/,
        //   sourceMap: false,
        //   cache: true,
        //   parallel: true
        // })
        new TerserPlugin({
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending further investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            // Added for profiling in devtools
            keep_classnames: true,
            keep_fnames: true,
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
          // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
          // parallel: !isWsl,
          parallel: true,
          // Enable file caching
          cache: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin({
          // cssProcessorOptions: {
          //   parser: safePostCssParser,
          //   map: false,
          // },
        }),
      ],
      splitChunks: {
        chunks: 'all',
      }
    };
  }

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
