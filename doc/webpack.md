# webpack

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

- 四个核心概念
  - 入口(entry)
  - 输出(output)
  - loader
  - 插件(plugins)

## 安装

```sh
# https://www.webpackjs.com/guides/installation/
# https://www.npmjs.com/package/cross-env

$ npm install --save-dev webpack@<version>
$ npm install --save-dev webpack-cli
$ npm install --save-dev cross-env

```

## 配置

- **package.json**

```json
"scripts": {
  "start": "cross-env NODE_ENV=production webpack --config webpack.config.js"
}
```

- **通用配置：webpack.config.js**

```js
const path = require('path');
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  mode: IS_PROD ? 'production' : 'development',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: []
  },

  plugins: []
};
```

- **开发配置：webpack.dev.config.js**

- **线上配置：webpack.pro.config.js**
