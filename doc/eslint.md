# eslint

  A fully pluggable tool for identifying and reporting on patterns in JavaScript.

## 安装

```sh
# https://github.com/eslint/eslint
# https://github.com/babel/babel-eslint
# https://github.com/yannickcr/eslint-plugin-react
# https://github.com/airbnb/javascript
# https://github.com/standard/eslint-config-standard
# https://github.com/benmosher/eslint-plugin-import
# https://github.com/evcohen/eslint-plugin-jsx-a11y
# https://github.com/webpack-contrib/eslint-loader
# https://cn.eslint.org/docs/user-guide/configuring
# https://cn.eslint.org/docs/rules/

$ yarn add -D eslint

$ yarn add -D eslint-loader # eslint loader (for webpack)

$ yarn add -D babel-eslint # 检测 ES6 代码

$ yarn add -D eslint-plugin-react # 检测 react 代码

$ yarn add -D eslint-config-standard | eslint-config-airbnb

$ yarn add -D eslint-plugin-jsx-a11y  # jsx 规范

$ yarn add -D eslint-plugin-import # ESLint插件，带有有助于验证正确导入的规则。

$ yarn add -D eslint-import-resolver-webpack # 解决 eslint-import 的模块解析异常

$ yarn add -D eslint-plugin-react-hooks # hook 规则
```

## 配置

```js
// .eslintrc
{
  "root": true,
  "env": { "es6": true, "browser": true },
  "extends": ["airbnb", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "plugins": ["react", "react-hooks"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  },
  "settings": {
    "import/resolver": "webpack"
  }
}


// webpack
{
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
              cache: true, // 将整理结果缓存到文件中
              fix: true, // 启用ESLint自动修复功能。
              emitError: true, // 设置为true，将始终返回错误。
              emitWarning: true, // 将始终返回警告。如果您正在使用热模块更换，则可能希望在开发中启用此功能，否则在出现eslint错误时将跳过更新。
              failOnError: true, // 设置为true，将导致模块构建失败
              failOnWarning: true, // 设置为true，则在出现任何警告时将导致模块构建失败。
              quiet: true, // 设置为true，则仅处理和报告错误并忽略警告。
            }
          }
        ]
      },
    ]
  }
}
```
