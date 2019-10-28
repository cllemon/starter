const path = require('path');
const webpack = require('webpack');
const { name } = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SafePostCssParser = require('postcss-safe-parser');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const IS_PROD = process.env.NODE_ENV === 'production';
const IS_MOCK = process.env.MOCK === 'true';
const filterProxy = require('./config/proxy');

module.exports = function () {
  const baseConfig = {
    mode: IS_PROD ? 'production' : 'development',

    devtool: IS_PROD ? false : 'inline-source-map',

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: IS_PROD ? `/${name}/` : '/',
      filename: IS_PROD ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: IS_PROD ? 'chunks/[name].[contenthash:8].js' : '[name].js',
    },

    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom', // react-hot-loader 兼容 hook 写法
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
        style: path.resolve(__dirname, 'src/style'),
      },
    },

    // externals: {
    //   react: 'React',
    //   'react-dom': 'ReactDOM'
    // },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          enforce: 'pre',
          use: [
            {
              loader: 'eslint-loader',
              options: {
                cache: false,
                fix: true,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(sa|sc)ss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
              options: IS_PROD ? { publicPath: '../' } : {},
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !IS_PROD,
                importLoaders: 2,
                modules: {
                  context: path.resolve(__dirname, 'src'),
                  localIdentName: '[name]__[local]-[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !IS_PROD,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
              options: IS_PROD ? { publicPath: '../' } : {},
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !IS_PROD,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
        },
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'svg/[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4096,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'media/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
        },
      ],
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
            removeScriptTypeAttributes: true,
          }
          : {},
      }),
      new MiniCssExtractPlugin({
        filename: IS_PROD ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
        chunkFilename: IS_PROD
          ? 'css/[name].[contenthash:8].css'
          : 'css/[name].css',
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          BASE_URL: IS_MOCK ? '"/"' : '"https://api.github.com/"',
          PUBLIC_PATH: IS_PROD ? JSON.stringify(`/${name}`) : '"/"',
        },
      }),
    ],
  };

  if (IS_PROD) {
    baseConfig.optimization = {
      minimizer: [
        // new UglifyjsWebpackPlugin({
        //   exclude: /node_modules/,
        //   sourceMap: false,
        //   cache: true,
        //   parallel: true
        // }),
        new TerserPlugin({
          // Terser minify options.
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              ecma: 8,
            },
            compress: {
              ecma: 5,
              // display warnings when dropping unreachable code or unused declarations etc.
              warnings: false,
              // apply certain optimizations to binary nodes
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // Pending further investigation: https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // inline calls to function with simple/return statement:
              // Disabled because of an issue with Terser breaking valid code:
              // Pending further investigation: https://github.com/terser-js/terser/issues/120
              inline: 2, // inline functions with arguments
            },
            mangle: {
              // Pass true to work around the Safari 10 loop iterator bug "Cannot declare a let variable twice".
              // See also: the safari10 output option.
              safari10: true,
            },
            // Added for profiling in devtools
            keep_classnames: true,
            keep_fnames: true,
            output: {
              ecma: 5,
              // pass true or "all" to preserve all comments, "some" to preserve some comments,
              // a regular expression string (e.g. /^!/) or a function.
              comments: false,
              // escape Unicode characters in strings and regexps (affects directives with non-ascii characters becoming invalid)
              // Turned on because emoji and regex is not minified properly using default
              ascii_only: true,
            },
          },
          // Use multi-process parallel running to improve the build speed.
          //Default number of concurrent runs: os.cpus().length - 1.
          parallel: true,
          cache: true, // Enable file caching
        }),
        new OptimizeCSSAssetsPlugin({
          // The options passed to the cssProcessor, defaults to {}
          // cssProcessor: The CSS processor used to optimize \ minimize the CSS, defaults to cssnano.
          //               This should be a function that follows cssnano.process interface
          //               (receives a CSS and options parameters and returns a Promise).
          cssProcessorOptions: {
            parser: SafePostCssParser, // 查找并修复CSS语法错误。
            map: false,
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
      },
    };
    // baseConfig.plugins.push(
    //   new BundleAnalyzerPlugin()
    // );
  }

  if (!IS_PROD) {
    baseConfig.devServer = {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      compress: true,
      open: false,
      port: 3000,
      stats: 'errors-only',
      hot: true,
      host: '0.0.0.0',
      useLocalIp: true,
      proxy: filterProxy({ IS_MOCK }),
    };
    baseConfig.plugins.concat([new webpack.HotModuleReplacementPlugin()]);
  }

  return baseConfig;
};
