# CSS

## 安装

```sh
# https://webpack.docschina.org/loaders/sass-loader/
# https://webpack.docschina.org/loaders/style-loader/
# https://webpack.docschina.org/loaders/postcss-loader/
# https://postcss.org/
# https://webpack.docschina.org/plugins/mini-css-extract-plugin/
# https://github.com/webpack-contrib/mini-css-extract-plugin

# 以 sass 为基础示例 css-modules
# https://github.com/camsong/blog/issues/5
# https://github.com/css-modules/css-modules
# https://github.com/JedWatson/classnames

$ yarn add -D style-loader            # 用于生成 style 标签插入样式
$ yarn add -D css-loader              # 用于处理 @import()、url() 转换
$ yarn add -D postcss-loader          # 使用 JavaScript 转换 CSS 的工具
$ yarn add -D autoprefixer            # 添加兼容前缀
$ yarn add -D sass-loader node-sass   # 用于转译 css 预编译
$ yarn add -D mini-css-extract-plugin # webpack 默认把 css 和 js 打到一个文件，该插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。
$ yarn add classnames                 # 一个简单的javascript实用工具，用于有条件地将classNames连接在一起
$ yarn add postcss-modules            # PostCSS插件可在各处使用CSS模块 弃用
```

## 配置

```js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_PROD = process.env.NODE_ENV === 'production';

{
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
            options: IS_PROD ? { publicPath: './', hmr: !IS_PROD } : { }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 启用/禁用或设置在CSS加载程序之前应用的加载程序的数量
              modules: true, // 启用/禁用CSS模块及其配置
              localIdentName: '[name]__[local]___[hash:base64:5]', // BEM 风格命名
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      fileName: IS_PROD ? '[name].[hash].css' : '[name].css',
      chunkFileName: IS_PROD ? '[id].[hash].css' : '[id].css',
    })
  ]
}
```
