# Postcss

## 安装

```sh
# https://github.com/postcss/postcss-loader
# https://webpack.docschina.org/loaders/postcss-loader/#src/components/Sidebar/Sidebar.jsx
# https://github.com/css-modules/postcss-modules

$ yarn add -D postcss-loader
$ yarn add -D autoprefixer
$ yarn add -D postcss-modules
```

## 配置

```js
// webpack
{
  module: {
    rules: [
      test: /\.(sa|sc|c)ss$/,
      use:[
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    ]
  }
}

// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    // 不采用此插件做作用域
    // reuqire('postcss-modules')({
    //   scopeBehaviour: 'global',
    //   generateScopedName: '[name]__[local]___[hash:base64:5]'
    // })
  ]
}
```
