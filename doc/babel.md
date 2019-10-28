# babel

  Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

  **插件:** 代码转换功能以插件的形式出现，插件是小型的 JavaScript 程序，用于指导 Babel 如何对代码进行转换。如 @babel/plugin-transform-arrow-functions ”顺执“
  **预设:** "preset" （即一组预先设定的插件） ”逆执“

## 安装

```sh
# https://www.babeljs.cn/docs/usage
# https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/
# https://babel.docschina.org/docs/en/babel-plugin-transform-runtime

$ yarn add -D @babel/cli

$ yarn add -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

$ yarn add @babel/polyfill

$ yarn add -D babel-plugin-transform-runtime # babel 在转译高版本代码时，会需要许多辅助函数，这个包就是剔除重复辅助函数，单独引入。

```

## 配置

**.babelrc**

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}


// 更多参阅 https://www.babeljs.cn/docs/configuration
// 在 webpack 使用 https://www.babeljs.cn/setup#installation
```
