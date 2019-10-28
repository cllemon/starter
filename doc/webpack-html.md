# html-webpack-plugin

## 安装

```sh

# https://webpack.docschina.org/plugins/html-webpack-plugin/
# https://github.com/jantimon/html-webpack-plugin

$ yarn add -D html-webpack-plugin # Plugin that simplifies creation of HTML files to serve your bundles

$ yarn add -D clean-webpack-plugin
```

## 配置

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

{
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: 'React App TS',
      meta: {
        viewport: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover',
      },
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}

```
