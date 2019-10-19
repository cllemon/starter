# starter

  web应用程序的工程构建清单

## 说明

1. 项目主要探讨并记录 web 工程体系搭建主的要过程。（ 脱离框架提供的 cli 从基础开始构建一个工程上还算完整的 web 应用 ）
2. 现代 Web 工程主要是三大框架 React、Vue、Angular。项目以 React 为基础。
3. 为什么选择 React ？原因是工作中应用场景是 Vue ；选择什么，对本项目来说不是很重要，重要的是**论述好工程搭建过程**。
4. 论述角度：
   - **版本管理(git)**
   - **npm包管理**
   - **webpack(构建开发环境、及打包线上资源)**
   - **代码规范质量(eslint、stylint)**
   - **单元测试（UI组件、私有工具函数「jest」）**
   - **工程目录组织**
   - **前后端分离（MOCK、json-server）**
   - **客服端与服务端交互（axios）**
   - **组件样式书写规范**
   - **组件分离**

## 开始吧

### 1. 版本管理（[git](https://git-scm.com/doc)）

```sh
$ 如何安装 ?

# https://git-scm.com/downloads

$ 如何使用 ？

# https://git-scm.com/doc || git --help
```

### 2. [Create a local](https://help.github.com/en/articles/ignoring-files) `.gitignore`

> 有时，有些文件不希望 `Git` 签入 `GitHub`。`.gitignore` 配置文件可以告诉 `Git` 忽略哪些文件。
```sh
$ touch .gitignore # starter/.gitignore

# dependencies
/node_modules

# testing
/coverage

# production
/build
dist

# misc
.DS_Store

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.vscode
```

### 3. [node](http://nodejs.cn/)、[npm]([node.js](http://nodejs.cn/)) 和 [yarn](https://yarn.bootcss.com/)

```sh
$ node 是什么 ？

# http://nodejs.cn/

$ 如何安装 ？

# http://nodejs.cn/download/

$ npm 是什么 ？

# https://docs.npmjs.com/about-npm/

$ npm 如何使用 ？

# 安装 Node.js 时附带安装了 npm || npm -v

$ 创建包管理配置文件 package.json

# https://docs.npmjs.com/creating-a-package-json-file

$ package.json 文件中的要求 ?

# https://docs.npmjs.com/files/package.json.html

$ package-lock.json 是什么 ？

# https://docs.npmjs.com/files/package-lock.json.html

$ yarn 是什么？

# https://yarn.bootcss.com/

$ yarn 如何安装 ？

# https://yarn.bootcss.com/docs/install/#mac-stable

$ yarn 如何使用 ？

# https://yarn.bootcss.com/docs/

$ 初始化项目

# mkdir starter && npm init
```

#### `初始工程目录` 与 `package.json` 的信息 ✅

> 工程目录

```diff
└── starter
    ├── README.md
    └── package.json
```

> package.json

```json
{
  "name": "starter",
  "version": "1.0.0",
  "description": "List of engineering builds for web applications",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cllemon/starter.git"
  },
  "keywords": [
    "javascript",
    "typescript",
    "react"
  ],
  "author": "cllemon",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/cllemon/starter/issues"
  },
  "homepage": "https://github.com/cllemon/starter#readme"
}
```

> 注意：以下描述中所有的包安装都采用 `yarn` 命令

### 4. [editorconfig]( http://editorconfig.org)

> `EditorConfig` 可以帮助开发者在不同的编辑器和 `IDE` 之间定义和维护一致的代码风格。

> EditorConfig is awesome: http://editorconfig.org

```sh
$ touch .editoorconfig

# starter/.editoorconfig

root = true                       # 表明是最顶层的配置文件，发现设为 true 时，才会停止查找.editorconfig 文件。

[*]
charset = utf-8
indent_style = space              # tab 为 hard-tabs，space 为 soft-tabs。
indent_size = 2                   # 规定每级缩进的列数和 soft-tabs 的宽度（空格数）。如果设定为 tab，则会使用 tab_width 的值。
end_of_line = lf                  # 定义换行符，支持 lf(UNIX/Linux采用换行符 LF 表示下一行)、cr(MAC OS系统)则采用回车符 CR 表示下一行) 和 crlf。
insert_final_newline = true       # 设为 true 表明使文件以一个空白行结尾，false 反之
trim_trailing_whitespace = true   # 设为 true 表示会除去换行行首的任意空白字符，false 反之。

[*.md]                            # 校验 markdown 文档
insert_final_newline = false
trim_trailing_whitespace = false
```

### 5. [browserslist](https://github.com/browserslist/browserslist)

- **`browserslist`是什么？**

  > 用于在不同前端工具之间共享目标浏览器和`Node.js`版本的配置。例如 `Autoprefixer`，`Stylelint` 和 `babel-preset-env`。

- **`browserslist` 配置方式**

  > 当您将以下内容添加到 `package.json` 或 .browserslistrc配置文件中时，所有工具都会自动找到目标浏览器：

  ```sh
  # package.json

  {
    "browserslist": {
      "production": [             // 生产环境配置
        ">0.2%",                  // 支持市场份额大于 1% 的浏览器。
        "not dead",               // not(逻辑非)对 dead 取反，而浏览器被认为是 dead 条件是：最新的两个版本中发现其市场份额已经低于 0.5% 并且 24 个月内没有官方支持和更新。
        "not op_mini all"         // OperaMini or op_mini for Opera Mini.
      ],
      "development": [            // 开发环境配置
        "last 1 chrome version",  // 浏览器版本查询范围, chrome 最近的一个版本
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }

  或🔥

  # .browserslistrc

  $ touch .browserslist

    [production]

    > .2%
    not dead
    not op_mini all

    [development]

    last 1 chrome version
    last 1 firefox version
    last 1 safari version
  ```

### 6. [引入 webpack](https://webpack.docschina.org/guides/)

> 本质上，`webpack` 是一个现代 `JavaScript` 应用程序的静态模块打包工具。当 `webpack` 处理应用程序时，它会在内部构建一个 依赖图(`dependency graph`)，此依赖图会映射项目所需的每个模块，并生成一个或多个 `bundle`。

- **安装与创建基本文件**

  ```sh
  $ mkdir src                                # 创建存放核心代码文件夹
  $ cd src && touch index.js                  # 创建入口文件

  $ yarn add -D webpack                      # 安装最新版本 webpack^4.41.2
  $ yarn add -D webpack-cli                  # 安装 webpack v4+ 版本，所需的 webpack-cli^3.3.9

  $ cd .. && touch webpack.config.js          # 根目录，创建 webpack 基本配置文件
  ```

  - **工程目录**

    ```diff
    └── starter
    + ├── node_modules
    + ├── src
    + │   └── index.js
    + ├── webpack.config.js
      ├── package.json
      └── README.md
    ```

### 7. [引入 React](https://github.com/facebook/react/)

> A declarative, efficient, and flexible JavaScript library for building user interfaces.

- **安装与创建基本文件**

  ```sh
  $ yarn add react                 # 安装 react^16.10.2
  $ yarn add react-dom             # 安装 react-dom^16.10.2

  $ mkdir public                   # 新建公共资源文件夹
  $ cd public && touch index.html  # 新建 html 文件
  $ copy favicon.ico               # 添加 网页图标 文件
  $ cd ..                          # 回到根目录
  ```

- **编写 index.html 文件**

  ```html
  <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="./favicon.ico" />
      <meta name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <meta name="theme-color" content="#000000" />
      <meta name="description"
        content="This is a react application built from scratch with JavaScript, away from the cli tool." />
      <title>Starter</title>
    </head>

    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>

    </html>
  ```

- **编写 index.js 文件**

  ```js
  import React from 'react';
  import ReactDom from 'react-dom';

  const App = () => <h1>Hello, world!</h1>

  ReactDom.render(<App />, document.getElementById('root'));
  ```


> 注意：由于浏览器不支持最新的 JavaScript 语法和 react jsx 的语法解析，所以我们需要一个编译器帮助我们。

### 8. [引入 Babel](https://babel.docschina.org/)

> Babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码。

- **babel 安装**

  ```sh
  $ yarn add -D @babel/core                      # Babel 编译器核心模块
  $ yarn add -D @babel/preset-env                # 是一个智能预设，它使您可以使用最新的JavaScript，而无需微观管理目标环境所需的语法转换
  $ yarn add -D @babel/preset-react              # react 智能预设, 包含了解析 jsx 等插件
  $ yarn add -D @babel/plugin-transform-runtime  # babel 在转译高版本代码时，会需要许多辅助函数，这个包就是剔除重复辅助函数，单独引入。
  $ yarn add -D babel-loader                     # Babel loader for webpack 该软件包允许使用 Babel 和 webpack 来转译 JavaScript 文件。

  $ touch .babelrc                               # 新建 babel 配置文件
  ```

- **babel 配置**

  ```js
  // .babelrc
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-transform-runtime"]
  }
  ```

- **编写 webpack 配置**

  ```js
  // starter/webpack.config.js
  const path = require('path');

  module.exports = function() {
    const baseConfig = {
      entry: './src/index.js',

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },

      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
        ]
      }
    };

    return baseConfig;
  };
  ```

- **修改 package.json 添加 webpack 命令, 快捷运行**

  ```diff
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
  +     "build": "webpack"
      }
    }

  ```

- **修改 index.html 引入打包之后的 bundle.js 文件**

  ```diff
    ...
    <div id="root"></div>
  + <script src="../dist/bundle.js"></script>
    ...
  ```

- **运行项目**

  ```sh
  $ yarn build # 打包文件

    Hash: 6e4adf36d533e9d646c0
    Version: webpack 4.41.2
    Time: 693ms

    Built at: 2019-10-19 11:41:22
        Asset      Size      Chunks             Chunk Names
       bundle.js  1.09 MiB    main   [emitted]     main

    Entrypoint main = bundle.js

    [./src/index.js] 233 bytes {main} [built]

  # 浏览器 打开 index.html 查看效果
  ```

  ![x](https://user-gold-cdn.xitu.io/2019/10/19/16de2286c4507cc9?w=1186&h=410&f=png&s=17778)

### 9. [搭建开发环境 - 借助 webpack-dev-server](https://webpack.docschina.org/configuration/dev-server/)

- **安装与配置**

  ```sh
  $ yarn add -D webpack-dev-server # 用于快速开发应用程序

  ```

## 参阅

- [git](https://git-scm.com/downloads)
- [gitignore](https://help.github.com/en/articles/ignoring-files#create-a-local-gitignore)
- [node.js](http://nodejs.cn/)
- [npm](https://docs.npmjs.com/about-npm/)
- [yarn](https://yarn.bootcss.com/)
- [editorconfig]( http://editorconfig.org)
- [browserslist](https://github.com/browserslist/browserslist)
- [webpack](https://webpack.docschina.org/guides/)
- [React](https://github.com/facebook/react/)
- [Babel](https://babel.docschina.org/)
- [@babel/core](https://babeljs.io/docs/en/next/babel-core.html)
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#docsNav)
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react#docsNav)
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav)
- [babel-loader](https://github.com/babel/babel-loader)
- [webpack-dev-server](https://webpack.docschina.org/configuration/dev-server/)
