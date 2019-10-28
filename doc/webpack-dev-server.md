# webpack-dev-server

  搭建开发环境，用于快速开发应用程序。

## 安装

```sh
# https://www.webpackjs.com/guides/development/
# https://www.webpackjs.com/configuration/dev-server/
# https://github.com/gaearon/react-hot-loader

$ yarn add -D webpack-dev-server

$ yarn add -D react-hot-loader # react 保留 state HMR
$ yarn add @hot-loader/react-dom # 兼容 react-hook HMR
```

## 配置

```jsx
// webpack.config.js
{

devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // URL的根目录。默认指向项目根目录
    compress: true, // 启用 gzip 压缩
    open: false, // When open is enabled, the dev server will open the browser.
    port: 3000, // port, default 8080
    hot: true // hot module replacement. Depends on HotModuleReplacementPlugin --hot 服务启动将自动添加 webpack.HotModuleReplacementPlugin
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin
  ]

}

// .babelrc
{
  "plugins": [
    "react-hot-loader/babel"
  ]
}

// react
import { hot } from 'react-hot-loader';
export default hot(module)(App);
```
