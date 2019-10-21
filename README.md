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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

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

**[⬆ back to top](#)**

### 8. [引入 Babel](https://babel.docschina.org/)

> Babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码。

- **babel 安装**

  ```sh
  $ yarn add -D @babel/core                      # Babel 编译器核心模块
  $ yarn add -D @babel/preset-env                # 是一个智能预设，它使您可以使用最新的JavaScript，而无需微观管理目标环境所需的语法转换
  $ yarn add -D @babel/preset-react              # react 智能预设, 包含了解析 jsx 等插件
  $ yarn add -D babel-loader                     # Babel loader for webpack 该软件包允许使用 Babel 和 webpack 来转译 JavaScript 文件。

  $ touch .babelrc                               # 新建 babel 配置文件
  ```

- **babel 配置**

  ```js
  // .babelrc
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
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
  +     "build": "webpack --color --progress"
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

- **工程目录**

  ```diff
  └── starter
  + ├── dist
  + │   └── bundle.js
    ├── node_modules
  + ├── public
  + │   ├── favicon.ico
  + │   └── index.html
    ├── src
    │   └── index.js
    ├── webpack.config.js
    ├── package.json
    ├── README.md
  + └── yarn.lock
  ```

**[⬆ back to top](#)**

### 9. [搭建开发环境 - 借助 webpack-dev-server](https://webpack.docschina.org/configuration/dev-server/)

> webpack-dev-server 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能。

- **安装**

  ```sh
  $ yarn add -D webpack-dev-server # 用于快速开发应用程序
  ```

- **添加相应配置**

  ```diff
  // starter/webpack.config.js

  const path = require('path');

  module.exports = function() {
    const baseConfig = {

      devtool: 'inline-source-map', // 控制是否生成，以及如何生成 source map

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
      },

  +   devServer: {
  +     contentBase: path.resolve(__dirname, 'public'), // 告诉服务器从哪个目录中提供内容
  +     historyApiFallback: true,                       // 启用当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。
  +     compress: true,                                 // 一切服务都启用 gzip 压缩
  +     open: true,                                     // 告诉 dev-server 在 server 启动后打开浏览器
  +     port: 3000,                                     // 指定要监听请求的端口号
  +     stats: 'errors-only',                           // 精确控制要显示的 bundle 信息 (在 bundle 中只显示错误)
  +   }
    };

    return baseConfig;
  };
  ```

- **修改 package.json 添加 webpack 命令, 快捷运行**

  ```diff
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --color --progress",
  +     "server": "webpack-dev-server --color --progress"
      }
    }
  ```

  > `--color`: 启用/禁用控制台的彩色输出; `--progress`: 将运行进度输出到控制台。

- **修改 index.html 主文件 bundle.js 路径**

  ```diff
    ...
    <div id="root"></div>
  - <script src="../dist/bundle.js"></script>
  + <script src="bundle.js"></script>
    ...
  ```

- **运行项目**

  ```sh
  $ yarn server

  # 结果：

  $ webpack-dev-server --color --progress

  10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:3000/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /Users/mr.lemon/cl/CODE_CL/REACT/starter/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  ℹ ｢wdm｣: Compiled successfully.
  ```

  > 打开 `http://localhost:3000/` 将显示 `Hello, world!`; 修改 `src/index.js` 将会刷新浏览器实时更新修改。Try it!

- **存在问题或待改进提升点**

  1. **每次更改都需刷新整个浏览器，这显然是不符合现代工程开发体验！**
  2. **未区分环境（ `webpack.config.js` 有些配置我们只希望在开发环境有，而在生产环境应有其特定配置）**

  <br />

  > 带着这些问题，继续吧！👍

**[⬆ back to top](#)**

### 10. [搭建开发环境 - 环境变量](https://webpack.docschina.org/guides/environment-variables/)

- **安装**

  ```sh
  $ yarn add -D cross-env # Cross platform setting of environment scripts
  ```

- **修改 package.json webpack 命令**

    ```diff
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
  -     "build": "webpack --color --progress",
  +     "build": "cross-env NODE_ENV=production webpack --color --progress",
  -     "server": "webpack-dev-server --color --progress"
  +     "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress"
      }
    }
  ```

- **为 webpack.config.js 添加相应配置**

  ```diff
    // starter/webpack.config.js

    const path = require('path');
  + const IS_PROD = process.env.NODE_ENV === 'production';

    module.exports = function() {
      const baseConfig = {
  +     mode: IS_PROD ? 'production' : 'development',
  -     devtool: 'inline-source-map', // 控制是否生成，以及如何生成 source map
  +     devtool: IS_PROD ? false : 'inline-source-map',

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
        },

  -     devServer: {
  -       contentBase: path.resolve(__dirname, 'public'), // 告诉服务器从哪个目录中提供内容
  -       historyApiFallback: true,                       // 启用当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。
  -       compress: true,                                 // 一切服务都启用 gzip 压缩
  -       open: true,                                     // 告诉 dev-server 在 server 启动后打开浏览器
  -       port: 3000,                                     // 指定要监听请求的端口号
  -       stats: 'errors-only',                           // 精确控制要显示的 bundle 信息 (在 bundle 中只显示错误)
  -     }
      };

  +   if (!IS_PROD) {
  +     baseConfig.devServer = {
  +       contentBase: path.resolve(__dirname, 'public'), // 告诉服务器从哪个目录中提供内容
  +       historyApiFallback: true,                       // 启用当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。
  +       compress: true,                                 // 一切服务都启用 gzip 压缩
  +       open: true,                                     // 告诉 dev-server 在 server 启动后打开浏览器
  +       port: 3000,                                     // 指定要监听请求的端口号
  +       stats: 'errors-only',                           // 精确控制要显示的 bundle 信息 (在 bundle 中只显示错误)
  +     };
  +   }

      return baseConfig;
    };
  ```

**[⬆ back to top](#)**

### 11. [搭建开发环境 - 热替换模块(Hot Module Replacement)](https://webpack.docschina.org/plugins/hot-module-replacement-plugin/)

> 模块热替换(hot module replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新。

- **为 webpack.config.js 添加相应配置**

  ```diff
    // starter/webpack.config.js

    const path = require('path');
  + const webpack = require('webpack');
    const IS_PROD = process.env.NODE_ENV === 'production';

    module.exports = function() {
      const baseConfig = {
        mode: IS_PROD ? 'production' : 'development',

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
        },

  +     plugins: []
      };

      if (!IS_PROD) {
        baseConfig.devServer = {
          contentBase: path.resolve(__dirname, 'public'), // 告诉服务器从哪个目录中提供内容
          historyApiFallback: true,                       // 启用当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。
          compress: true,                                 // 一切服务都启用 gzip 压缩
          open: true,                                     // 告诉 dev-server 在 server 启动后打开浏览器
          port: 3000,                                     // 指定要监听请求的端口号
          stats: 'errors-only',                           // 精确控制要显示的 bundle 信息 (在 bundle 中只显示错误)
  +       hot: true                                       // 启用 webpack 的 模块热替换 功能
        };
  +     baseConfig.plugins.concat([
  +       new webpack.HotModuleReplacementPlugin()        // 热替换模块插件
  +     ]);
      }

      return baseConfig;
    };
  ```

- **修改 src/index.js 文件**

  ```diff
  - import React from 'react';
  + import React, { useState } from 'react';
    import ReactDom from 'react-dom';


  - const App = () => <h1>Hello, world!</h1>;

  + const App = () => {
  +   const [title, setTitle] = useState('hello, world!');
  +   const reversedTitle = () =>
  +     setTitle(
  +       title
  +         .split('')
  +         .reverse()
  +         .join('')
  +     );
  +   return (
  +     <div>
  +       <h1>{ title }</h1>
  +       <button type='button' onClick={reversedTitle}>
  +         reversed title
  +       </button>
  +     </div>
  +   );
  + };

  + if (module.hot) {
  +   module.hot.accept();
  + }

    ReactDom.render(<App />, document.getElementById('root'));
  ```

- **运行项目**

  ```sh
  $ yarn server

  # 结果：

  $ cross-env NODE_ENV=development webpack-dev-server --color --progress
  10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:3000/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /Users/mr.lemon/cl/CODE_CL/REACT/starter/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  ℹ ｢wdm｣: Compiled successfully.

  # 浏览器 console
  [HMR] Waiting for update signal from WDS...      log.js:24
  [WDS] Hot Module Replacement enabled.            client:48
  [WDS] Live Reloading enabled.                    client:52
  ```

  > 打开 `http://localhost:3000/` 修改 `src/index.js` 实现了未刷新浏览器更新修改。Try it!

  ![x](https://user-gold-cdn.xitu.io/2019/10/19/16de3442b9d5bd28?w=1596&h=618&f=png&s=44023)

- **存在问题或待改进提升点**

  1. **每次修改内容时，做到了无刷新更新，但同时也清空了组件内部状态值；这显然也是不能接受的。**

  <br />

  > 带着这个问题，继续吧！✈️

**[⬆ back to top](#)**

### 12. [搭建开发环境 - 热替换模块 - 引入 react-hot-loader](https://github.com/gaearon/react-hot-loader)

> 实时调整React组件。

- **说明**

  1. 由于该项目选择的是 react 框架，故引入 react-hot-loader。
  2. 如果换成别的框架也有对应的插件集成，比如：vue 在 vue-loader 集成的 vue-hot-reload-api。
  3. 当然，这些你也可以自己去实现。

- **安装**

  ```sh
  $ yarn add react-hot-loader
  $ yarn add @hot-loader/react-dom # 替换了相同版本的 react-dom 软件包，但附加了一些补丁以支持热重装。
  ```

- **将 `"react-hot-loader/babel"` 添加到您的 `.babelrc` 中**

  ```diff
    {
      "presets": ["@babel/preset-env", "@babel/preset-react"],
  +   "plugins": ["react-hot-loader/babel"]
    }
  ```

- **重置 `react-dom` 兼容 `hooks`**

  ```diff
    ...

    moduele.exports = function () {

      ...

  +   resolve: {
  +     alias: {
  +       'react-dom': '@hot-loader/react-dom' // react-hot-loader 兼容 hook 写法
  +     }
  +   },

      ...

    }

    ...
  ```

- **修改 src/index.js 主文件，将根组件标记为 `hot-exported`**

  ```diff
  + import { hot } from 'react-hot-loader';
    import React, { useState } from 'react';
    import ReactDom from 'react-dom';

  - const App = () => {
  + const App = hot(module)(() => {
      const [title, setTitle] = useState('hello, world!');

      const reversedTitle = () =>
        setTitle(
          title
            .split('')
            .reverse()
            .join('')
        );
      return (
        <div>
          <h1>{title}</h1>
          <button type='button' onClick={reversedTitle}>
            reversed title!
          </button>
        </div>
      );
  - };
  + });

  - if (module.hot) {
  -   module.hot.accept();
  - }

    ReactDom.render(<App />, document.getElementById('root'));
  ```

- **运行项目**

  ```sh
  $ yarn server

  # 结果：

  $ cross-env NODE_ENV=development webpack-dev-server --color --progress
  10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:3000/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /Users/mr.lemon/cl/CODE_CL/REACT/starter/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  ℹ ｢wdm｣: Compiled successfully.
  ℹ ｢wdm｣: Compiling...
  ℹ ｢wdm｣: Compiled successfully.

  # 浏览器 console
  [HMR] Waiting for update signal from WDS...      log.js:24
  [WDS] App hot update...                          reloadApp.js:19
  [HMR] Checking for updates on the server...      log.js:24
  [HMR] Updated modules:                           log.js:24
  [HMR]  - ./src/index.js                          log.js:24
  [HMR] App is up to date.                         log.js:24
  ```

  > 打开 `http://localhost:3000/`, 点击 `reversed title` 然后修改 `src/index.js` 实现了未刷新浏览器保留组件状态的更新修改。Try it!

  ![x](https://user-gold-cdn.xitu.io/2019/10/19/16de36c40161464e?w=1792&h=646&f=png&s=47460)

- **阶段结语**

  1. 至此一个简易的开发环境，就这样被搭建出来了。🐃
  2. 后面的工作还很多，继续吧！🍺

**[⬆ back to top](#)**


### 13. 引入 CSS 与 [Sass](http://sass.bootcss.com/docs/sass-reference/) 样式文件处理

> 样式是前端组件重要组成部分，而 Sass 让 CSS 语言更强大、优雅；有助于保持大型样式表结构良好。

> 注意：本项目引入 sass ，当然你也可以不引入或者引入其它，如：less、stylus。

- **安装**

  ```sh
  $ yarn add -D node-sass      # Node-sass是一个库，提供了 Node.js 与 LibSass（流行的样式表预处理器Sass的C版本）的绑定。 它使您能够以惊人的速度通过连接中间件自动将 .scss 文件本地编译为 css
  $ yarn add -D sass-loader    # Compiles Sass to CSS
  $ yarn add -D css-loader     # The css-loader interprets @import and url() like import/require() and will resolve them.
  $ yarn add -D style-loader   # Inject CSS into the DOM.
  ```

  > 注：sass基于Ruby语言开发而成，因此安装sass前需要安装Ruby。（注:mac下自带Ruby无需在安装Ruby!）

  > 为什么需要 node-sass : 因为 sass-loader 的 [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies) 声明了其依赖 node-sass，所以需要预装，否则警告。

- **配置：修改 webpack.config.js 增加css/sass解析能力**

  ```diff
    ...

    moduele.exports = function () {

      ...

      module: {
        rules: [
          ...

  +       {
  +         test: /\.(sa|sc|c)ss$/,
  +         exclude: /node_modules/,
  +         use: [
  +           {
  +             loader: 'style-loader'
  +           },
  +           {
  +             loader: 'css-loader',
  +             options: {
  +               sourceMap: !IS_PROD
  +             }
  +           },
  +           {
  +             loader: 'sass-loader',
  +             options: {
  +               sourceMap: !IS_PROD
  +             }
  +           }
  +         ]
  +       }
        ]
      }

      ...

    }

    ...
  ```

- **新增 src/index.scss 和 style/global.css 样式文件**

  ```sh
  $ cd src && touch index.scss
  $ mkdir style && cd style
  $ touch global.css && touch reset.css
  ```

  ```scss
  // src/style/reset.css
  # reset 重置浏览器初始样式，具体样式参见项目 src/style/reset.css

  // src/style/global.css
  @import url('./reset.css');

  // src/index.scss
  .app {
    background-color: red;
  }
  ```

- **修改 src/index.js 导入样式表**

  ```diff
    import { hot } from 'react-hot-loader';
    import React, { useState } from 'react';
    import ReactDom from 'react-dom';
  + import './style/global.css';
  + import './index.scss';

    const App = hot(module)(() => {
      const [title, setTitle] = useState('hello, world!');

      const reversedTitle = () =>
        setTitle(
          title
            .split('')
            .reverse()
            .join('')
        );
      return (
  -     <div>
  +     <div className='app'>
          <h1>{title}</h1>
          <button type='button' onClick={reversedTitle}>
            reversed title!
          </button>
        </div>
      );
    });

    ReactDom.render(<App />, document.getElementById('root'));
  ```

- **运行项目**

  ```sh
  $ yarn server

  # 结果：

  $ cross-env NODE_ENV=development webpack-dev-server --color --progress
  10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:3000/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /Users/mr.lemon/cl/CODE_CL/REACT/starter/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  ℹ ｢wdm｣: Compiled successfully.
  ```

  > 打开 `http://localhost:3000/`, 如你所写，出现一个红色背景。Try it!

  ![x](https://user-gold-cdn.xitu.io/2019/10/20/16de838e6d901c5e?w=2368&h=1288&f=png&s=118940)

- **问题与改进点🤔**

  1. **缺少自动管理浏览器前缀的插件，解析 `CSS` 文件并且添加浏览器前缀到 `CSS` 内容里；`postcss/autoprefixer`**
  2. **当组件样式文件很多时，为了避免样式冲突，可以采用 `css-modules` 去解决这个问题。当然你也可以采用严格命名规范绕开这个问题，如：BEM。**

  <br />

  > 那继续吧！💪

**[⬆ back to top](#)**

### 14. [CSS-Modules](https://github.com/css-modules/css-modules) 与 [autoprefixer](https://github.com/postcss/autoprefixer)

- **安装**

  ```sh
  $ yarn add - D postcss-loader # 用于webpack的Loader以使用PostCSS处理CSS

  $ yarn add -D autoprefixer # Parse CSS and add vendor prefixes to rules by Can I Use
  ```

- **新建 postcss 配置文件**

  ```sh
  $ touch postcss.config.js # 新建 postcss 配置文件

  # starter/postcss.config.js 添加 autoprefixer 插件
  module.exports = {
    plugins: {
      autoprefixer: {},
    }
  };
  ```

- **添加 webpack postcss 配置**

  ```diff
    ...

    moduele.exports = function () {

      ...

      module: {
        rules: [
          ...

          {
  -         test: /\.(sa|sc|c)ss$/,
  +         test: /\.(sa|sc)ss$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
  +             options: {
  +               sourceMap: !IS_PROD,
  +               importLoaders: 2,  // 启用/禁用或设置在CSS加载程序之前应用的加载程序的数量
  +               modules: {
  +                 context: path.resolve(__dirname, 'src'), // 允许为本地标识符名称重新定义基本的加载程序上下文。
  +                 localIdentName: '[name]__[local]-[hash:base64:5]' // 使用 localIdentName 查询参数配置生成类名
  +               }
  +             }
              },
  +           {
  +             loader: 'postcss-loader'
  +           }
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: !IS_PROD
                }
              }
            ]
          },
  +       {
  +          test: /\.css$/,
  +          exclude: /node_modules/,
  +          use: [
  +            'style-loader',
  +            {
  +              loader: 'css-loader',
  +              options: {
  +                sourceMap: !IS_PROD
  +              }
  +            },
  +            'post-loader'
  +          ]
  +       }
        ]
      }

      ...

    }

    ...
  ```

  > [`postcss`](https://postcss.org/) : 一个用 `JavaScript` 转换 `CSS` 的工具 <br />
  > [`css-loader`](https://github.com/webpack-contrib/css-loader) 提供 `CSS` 模块及其配置

- **修改 src/index.js 类名写法**

  ```diff
    import { hot } from 'react-hot-loader';
    import React, { useState } from 'react';
    import ReactDom from 'react-dom';
    import './style/global.css';
  - import './index.scss';
  + import styles from './index.scss';

    const App = hot(module)(() => {
      const [title, setTitle] = useState('hello, world!');

      const reversedTitle = () =>
        setTitle(
          title
            .split('')
            .reverse()
            .join('')
        );
      return (
  -     <div className='app'>
  +     <div className={styles.app}>
          <h1>{title}</h1>
          <button type='button' onClick={reversedTitle}>
            reversed title!
          </button>
        </div>
      );
    });

    ReactDom.render(<App />, document.getElementById('root'));
  ```

- **运行项目**

  ```sh
  $ yarn server

  # 结果

  $ cross-env NODE_ENV=development webpack-dev-server --color --progress
  10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:3000/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /Users/gt/LEMON/starter/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  ℹ ｢wdm｣: Compiled successfully.
  ```

  > 打开 `http://localhost:3000/` 查看，是否如你所写!

  ![x](https://user-gold-cdn.xitu.io/2019/10/21/16dec36f23e2e8d6?w=1020&h=623&f=jpeg&s=72261)

**[⬆ back to top](#)**

### 15. 更进一步，构建我们的应用 `yarn build`

- **打包**

  ```sh
  $ yarn build

  # 结果
  $ cross-env NODE_ENV=production webpack --color --progress
  Hash: 4f40eeb2a231c73dacd9
  Version: webpack 4.41.2
  Time: 4142ms
  Built at: 2019-10-21 10:54:37

      Asset     Size        Chunks             Chunk Names
    bundle.js  136 KiB       0  [emitted]         main

  Entrypoint main = bundle.js
  [5] ./src/index.scss 498 bytes {0} [built]
  [7] ./src/index.js 1.57 KiB {0} [built]
  [8] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
  [13] ./src/style/global.css 457 bytes {0} [built]
  [14] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/style/global.css 237 bytes {0} [built]
  [15] ./node_modules/css-loader/dist/cjs.js!./src/style/reset.css 1.28 KiB {0} [built]
  [16] ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/index.scss 238 bytes {0} [built]
      + 11 hidden modules
  ✨  Done in 5.90s.
  ```

  > 我们看到这只打出一个 `bundle.js` 这显然做的还不够。接下来，我们做几点改变！

  **[⬆ back to top](#)**

- **管理输出**

  > 到目前为止，我们都是在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始 在文件名中使用 hash] 并输出 多个 bundle，如果继续手动管理 index.html 文件，就会变得困难起来。

  - **修改 webpack - output**

    ```diff
      const path = require('path');
      const webpack = require('webpack');
      const IS_PROD = process.env.NODE_ENV === 'production';

      ...

        output: {
          path: path.resolve(__dirname, 'dist'),
    -     publicPath: '/',
    +     publicPath: IS_PROD ? '/starter/' : '/', // 公共路径
    -     filename: 'bundle.js'
    +     filename:  IS_PROD ? '[name].[contenthash:8].js' : '[name].js', // 输出文件的文件名
    +     chunkFilename: IS_PROD ? 'chunks/[name].[contenthash:8].js' : '[name].js', // 非入口(non-entry) chunk 文件的名称
        },

      ...
    ```

  - **HtmlWebpackPlugin**

    ```sh
    $ yarn add -D html-webpack-plugin # 安装插件
    ```

    ```diff
    <!-- starter/webpack.config.js -->

      const path = require('path');
      const webpack = require('webpack');
      const IS_PROD = process.env.NODE_ENV === 'production';
    +  const HtmlWebpackPlugin = require('html-webpack-plugin')

      ...

    -    plugins: []
    +    plugins: [
    +      new HtmlWebpackPlugin({
    +        title: 'Starter',
    +        filename: 'index.html',
    +        template: path.resolve(__dirname, 'public/index.html'),
    +        minify: IS_PROD
    +          ? {
    +            removeComments: true,
    +            collapseWhitespace: true,
    +            removeAttributeQuotes: true,
    +            collapseBooleanAttributes: true,
    +            removeScriptTypeAttributes: true
    +          }
    +          : {}
    +      }),
    +    ]

      ...
    ```

  - **修改 public/index.html**

    ```diff
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="./favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="This is a react application built from scratch with JavaScript, away from the cli tool."
          />
    -     <title>Starter</title>
    +     <title><%= htmlWebpackPlugin.options.title %></title>
        </head>

        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
    -     <script src="bundle.js"></script>
        </body>
      </html>
    ```

  - **通过上述配置，让我们来看看效果吧**

    ```sh
    $ yarn build

    # 结果
    $ cross-env NODE_ENV=production webpack --color --progress
    Hash: 6bb93a13b6a8a7926f58
    Version: webpack 4.41.2
    Time: 4418ms
    Built at: 2019-10-21 11:47:05

              Asset         Size             Chunks                   Chunk Names
          index.html      553 bytes          [emitted]
       main.2f781ad1.js   136 KiB         0  [emitted] [immutable]      main

    Entrypoint main = main.2f781ad1.js
    [5] ./src/index.scss 498 bytes {0} [built]
    [7] ./src/index.js 1.57 KiB {0} [built]
    [8] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
    [13] ./src/style/global.css 457 bytes {0} [built]
    [14] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/style/global.css 237 bytes {0} [built]
    [15] ./node_modules/css-loader/dist/cjs.js!./src/style/reset.css 1.28 KiB {0} [built]
    [16] ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/index.scss 238 bytes {0} [built]
        + 11 hidden modules
    Child html-webpack-plugin for "index.html":
        1 asset
        Entrypoint undefined = index.html
        [0] ./node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 858 bytes {0} [built]
        [2] (webpack)/buildin/global.js 472 bytes {0} [built]
        [3] (webpack)/buildin/module.js 497 bytes {0} [built]
            + 1 hidden module
    ✨  Done in 6.04s.
    ```

    ```html
    <!-- starter/dist/index.html -->
    <!DOCTYPE html><html lang=en><head><meta charset=utf-8><link rel=icon href=./favicon.ico><meta name=viewport content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"><meta name=theme-color content=#000000><meta name=description content="This is a react application built from scratch with JavaScript, away from the cli tool."><title>React App TS</title></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id=root></div><script src=/starter/main.2f781ad1.js></script></body></html>
    ```

    > 注：如果你仔细看了我们的输出，你会发现 `main.2f781ad1.js size=136KiB`, 而我们的代码却量却很少，如果你打开该文件你会发现它包含了 `react.production.min.js` `babel` 所需的帮助函数等。

  **[⬆ back to top](#)**

- **代码分离**

  - **[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/) - 分离 css 代码**

    > webpack 默认把 css 和 js 打到一个文件，该插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。

    > 为什么分离？[webpack-contrib/mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)

    ```sh
    $ yarn add -D mini-css-extract-plugin # 安装
    ```

    ```diff
    <!-- starter/webpack.config.js -->
      ...
    + const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    -           loader: 'style-loader'
    +           loader: IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
    +           options: IS_PROD ? { publicPath: '../' } : {}
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
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
                loader: 'sass-loader'
              }
            ]
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
    -       use: ['style-loader', 'css-loader', 'postcss-loader']
    +       use: [
    +         {
    +           loader: IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
    +           options: IS_PROD ? { publicPath: '../' } : {}
    +         },
    +         'css-loader',
    +         'postcss-loader'
    +       ]
          }
        ]
      },
    + plugins: [
        ...,
    +   new MiniCssExtractPlugin({
    +     filename: IS_PROD ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
    +     chunkFilename: IS_PROD ? 'css/[id].[contenthash:8].css' : 'css/[id].css'
    +   })
      ]
    ```

    ```diff
      $ yarn build

      $ cross-env NODE_ENV=production webpack --color --progress
      Hash: 95fccf0e0844c2df588f
      Version: webpack 4.41.2
      Time: 4416ms
      Built at: 2019-10-21 13:56:23
                      Asset       Size           Chunks                 Chunk Names
    ! css/main.f9cee851.css     1.08 KiB       0  [emitted] [immutable]    main
                index.html      605 bytes         [emitted]
    !     main.ced0f821.js      131 KiB        0  [emitted] [immutable]    main
      Entrypoint main = css/main.f9cee851.css main.ced0f821.js

    ```

    > 多次打包之后我们发现多处很多上次结果文件，这显然不能忍受 w(ﾟДﾟ)w; 我们希望在每次构建之前删除之前构建生成的文件夹。

  - **[clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) 保持目录清洁**

    > 用于在构建之前删除您的构建文件夹

    ```sh
    $ yarn add -D clean-webpack-plugin # 安装
    ```

    ```diff
    <!-- starter/webpack.config.js -->

      ...

    + const { CleanWebpackPlugin } = require('clean-webpack-plugin');

      ...

      plugins: [
        ...,

    +   new CleanWebpackPlugin()
      ]

      ...
    ```

    > 试试看👀，清理干净了 (｡･∀･)ﾉﾞ **Try it!**

  **[⬆ back to top](#)**

- **防止重复**

  - **[optimization.splitChunks](https://webpack.docschina.org/plugins/split-chunks-plugin/#optimization-splitchunks) 将公共的依赖模块提取到已有的 entry chunk 中**

    ```diff
    <!-- starter/webpack.config.js -->

      ...

      module.exports = function () {
        const baseConfig = {
          ...
        }

    +   if (IS_PROD) {
    +     baseConfig.optimization = {
    +       minimizer: [
    +         // Automatically split vendor and commons
    +         splitChunks: {
    +           chunks: 'all'
    +         }
    +       ]
    +     }
    +   }

        return baseConfig;
      }
    ```

    ```diff
      $ yarn build # 打包查看效果

      # 结果

      $ cross-env NODE_ENV=production webpack --color --progress
      Hash: ebe27d1c4dc54ff22c4b
      Version: webpack 4.41.2
      Time: 4470ms
      Built at: 2019-10-21 14:28:59

                                Asset     Size                  Chunks             Chunk Names
    ! chunks/vendors~main.f501917c.js    129 KiB       1  [emitted] [immutable]   vendors~main
               css/main.f9cee851.css     1.08 KiB      0  [emitted] [immutable]      main
    !                     index.html     667 bytes        [emitted]
    !               main.76c9ecec.js     2.54 KiB      0  [emitted] [immutable]      main

      Entrypoint main = chunks/vendors~main.f501917c.js css/main.f9cee851.css main.76c9ecec.js

      # 注意：如果你仔细看 chunks/vendors~main.f501917c.js 你会发现 与 react 相关的库
      #（react.production.min.js、react-dom.production.min.js、scheduler.production.min.js）和你代
      # 码所引用的公共库都将被提取出来，防止重复引用。
    ```

    > [webpack 4: Code Splitting, chunk graph and the splitChunks optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)

    **[⬆ back to top](#)**

  - **[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) 一个插件，可重新使用Babel注入的帮助程序代码以节省代码大小。**

    ```sh
    $ yarn add -D @babel/plugin-transform-runtime
    ```

    ```diff
    <!-- starter/postcss.config.js -->

      {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        "plugins": [
    +     "@babel/plugin-transform-runtime",
          "react-hot-loader/babel"
        ]
      }
    ```

    ```diff
      $ yarn build

      # 结果

      $ cross-env NODE_ENV=production webpack --color --progress
      Hash: 6425898f896ed7244e2b
      Version: webpack 4.41.2
      Time: 4510ms
      Built at: 2019-10-21 15:18:47

                                Asset       Size                Chunks                Chunk Names
    ! chunks/vendors~main.e9e35553.js      130 KiB       1  [emitted] [immutable]     vendors~main
                css/main.f9cee851.css      1.08 KiB      0  [emitted] [immutable]        main
                           index.html      667 bytes        [emitted]
    !                main.5fb316df.js      2.07 KiB      0  [emitted] [immutable]        main
      Entrypoint main = chunks/vendors~main.e9e35553.js css/main.f9cee851.css main.5fb316df.js

      # 可以比对上次构建结果，主文件减少了一些。
    ```

    **[⬆ back to top](#)**

  - **[webpack.DefinePlugin](https://webpack.docschina.org/plugins/define-plugin/#%E7%94%A8%E6%B3%95) 允许创建一个在编译时可以配置的全局常量**

    > 插件可配置一些全局变量，在构建时将会对代码内引用的这些变量进行替换。比如：NODE_ENV(常用于处理生产环境与开发环境)。如果在开发构建中，而不在发布构建中执行日志记录，则可以使用全局常量来决定是否记录日志。这就是 DefinePlugin 的用处，设置它，就可以忘记开发环境和生产环境构建的规则。

    ```diff
    <!-- starter/webpack.config.js -->

      ...

      plugins: [

        ...,

    +   new webpack.DefinePlugin({
    +     'process.env': {
    +       NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    +     }
    +   })
      ]

      ...
    ```

    > 这里如果你的代码没有对区分环境，做特定处理（去除开发环境下的代码）则，包尺寸不变。

    **[⬆ back to top](#)**

- **minify JavaScript / css**

  - **[uglifyjs-webpack-plugin](https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)**

    ```sh
    $ yarn add -D uglifyjs-webpack-plugin
    ```

    ```diff
    <!-- starter/webpack.config.js -->

      ...

    +  const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

      ...

       if (IS_PROD) {
        baseConfig.optimization = {
    +     minimizer: [
    +       new UglifyjsWebpackPlugin({
    +         exclude: /node_modules/,
    +         sourceMap: false,  // 使用源映射将错误消息位置映射到模块（这会减慢编译速度）。如果您使用自己的缩小功能，请阅读缩小部分以正确处理源地图。
    +         cache: true, // 启用文件缓存
    +         parallel: true // 使用多进程并行运行可提高构建速度。并发运行的默认数量：os.cpus().length - 1.
    +       })
    +     ],
          splitChunks: {
            chunks: 'all',
          }
        };
      }
    ```

    ```diff
      $ yarn build # 打包验证 ✅

      # 结果

      $ cross-env NODE_ENV=production webpack --color --progress
      Hash: 3f450244bccc719560c5
      Version: webpack 4.41.2
      Time: 2209ms
      Built at: 2019-10-21 16:25:18

                                Asset       Size                  Chunks             Chunk Names
    ! chunks/vendors~main.1a122e64.js      129 KiB       1  [emitted] [immutable]    vendors~main
                css/main.f9cee851.css      1.08 KiB      0  [emitted] [immutable]       main
                           index.html      667 bytes        [emitted]
                     main.e82008bc.js      2.07 KiB      0  [emitted] [immutable]       main

      Entrypoint main = chunks/vendors~main.1a122e64.js css/main.f9cee851.css main.e82008bc.js
    ```

    > **注意： `uglifyjs-webpack-plugin v2.x` 版本基于 `uglify-js`，无法支持 `ES6` 的压缩**

    > 参考：[为什么 webpack4 默认支持 ES6 语法的压缩？](https://juejin.im/post/5d706172f265da03ca118d28)

    **[⬆ back to top](#)**

  - **[terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)**

    > 我们用 `terser-webpack-plugin` 替换 `uglifyjs-webpack-plugin`

    ```sh
    $ yarn add -D terser-webpack-plugin
    ```

    ```diff
    <!-- starter/webpack.config.js -->

    - const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
    + const TerserPlugin = require('terser-webpack-plugin');

      if (IS_PROD) {
        baseConfig.optimization = {
          minimizer: [
    -       new UglifyjsWebpackPlugin({
    -         exclude: /node_modules/,
    -         sourceMap: false,
    -         cache: true,
    -         parallel: true
    -       }),
    +       new TerserPlugin({
    +         // Terser minify options.
    +         terserOptions: {
    +           parse: {
    +             // We want terser to parse ecma 8 code. However, we don't want it
    +             // to apply any minification steps that turns valid ecma 5 code
    +             // into invalid ecma 5 code. This is why the 'compress' and 'output'
    +             // sections only apply transformations that are ecma 5 safe
    +             ecma: 8,
    +           },
    +           compress: {
    +             ecma: 5,
    +             // display warnings when dropping unreachable code or unused declarations etc.
    +             warnings: false,
    +             // apply certain optimizations to binary nodes
    +             // Disabled because of an issue with Uglify breaking seemingly valid code:
    +             // Pending further investigation: https://github.com/mishoo/UglifyJS2/issues/2011
    +             comparisons: false,
    +             // inline calls to function with simple/return statement:
    +             // Disabled because of an issue with Terser breaking valid code:
    +             // Pending further investigation: https://github.com/terser-js/terser/issues/120
    +             inline: 2, // inline functions with arguments
    +           },
    +           mangle: {
    +             // Pass true to work around the Safari 10 loop iterator bug "Cannot declare a let variable twice".
    +             // See also: the safari10 output option.
    +             safari10: true,
    +           },
    +           // Added for profiling in devtools
    +           keep_classnames: true,
    +           keep_fnames: true,
    +           output: {
    +             ecma: 5,
    +             // pass true or "all" to preserve all comments, "some" to preserve some comments,
    +             // a regular expression string (e.g. /^!/) or a function.
    +             comments: false,
    +             // escape Unicode characters in strings and regexps (affects directives with non-ascii characters becoming invalid)
    +             // Turned on because emoji and regex is not minified properly using default
    +             ascii_only: true,
    +           },
    +         },
    +         // Use multi-process parallel running to improve the build speed.
    +         //Default number of concurrent runs: os.cpus().length - 1.
    +         parallel: true,
    +         cache: true, // Enable file caching
    +       }),
          ],
          splitChunks: {
            chunks: 'all',
          }
        };
      }
    ```

    ```diff
      $ yarn build

      $ cross-env NODE_ENV=production webpack --color --progress
      Hash: dbf5243d5591e4ac0268
      Version: webpack 4.41.2
      Time: 2461ms
      Built at: 2019-10-21 17:52:26

                                        Asset     Size             Chunks                  Chunk Names
    !         chunks/vendors~main.ae62441b.js    130 KiB       1  [emitted] [immutable]    vendors~main
    ! chunks/vendors~main.ae62441b.js.LICENSE    790 bytes        [emitted]
                        css/main.f9cee851.css    1.08 KiB      0  [emitted] [immutable]       main
                                   index.html    667 bytes        [emitted]
    !                        main.2130b172.js    2.52 KiB      0  [emitted] [immutable]       main

      Entrypoint main = chunks/vendors~main.ae62441b.js css/main.f9cee851.css main.2130b172.js
    ```

    **[⬆ back to top](#)**

  - **[optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - 优化/减少CSS资产**

    ```sh
    $ yarn add -D optimize-css-assets-webpack-plugin # 压缩 CSS
    $ yarn add -D postcss-safe-parser                # 查找并修复 CSS 语法错误
    ```

    ```diff
    <!-- starter/webpack.config.js -->
      ...

    + const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
    + const SafePostCssParser = require('postcss-safe-parser');

        if (IS_PROD) {
          baseConfig.optimization = {
            minimizer: [
              ...

    +         new OptimizeCSSAssetsPlugin({
    +           // The options passed to the cssProcessor, defaults to {}
    +           // cssProcessor: The CSS processor used to optimize \ minimize the CSS, defaults to cssnano.
    +           //               This should be a function that follows cssnano.process interface
    +           //               (receives a CSS and options parameters and returns a Promise).
    +           cssProcessorOptions: {
    +             parser: SafePostCssParser,
    +             map: false,
    +           },
    +         })
            ],

            ...
          };
        }

      ...
    ```

    ```diff
      $ yarn build # 打包实验 ✅


      # 结果

      $ cross-env NODE_ENV=production webpack --color --progress
      Hash: dbf5243d5591e4ac0268
      Version: webpack 4.41.2
      Time: 3543ms
      Built at: 2019-10-21 20:17:23

                                        Asset     Size                  Chunks            Chunk Names
              chunks/vendors~main.ae62441b.js    130 KiB       1  [emitted] [immutable]   vendors~main
      chunks/vendors~main.ae62441b.js.LICENSE    790 bytes        [emitted]
    !                   css/main.f9cee851.css    869 bytes     0  [emitted] [immutable]       main
                                   index.html    667 bytes        [emitted]
                             main.2130b172.js    2.52 KiB      0  [emitted] [immutable]       main

      Entrypoint main = chunks/vendors~main.ae62441b.js css/main.f9cee851.css main.2130b172.js
    ```

    **[⬆ back to top](#)**

- **外部扩展([externals](https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx))**

  > 从输出的 bundle 中排除依赖; 防止将某些 import 的包打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

  - **CDN - 此步可忽略**

    ```diff
    <!-- starter/webpack.config.js -->

      ...

      module.exports = function() {
        const baseConfig = {

          ...

          resolve: {
            alias: {
              'react-dom': '@hot-loader/react-dom' // react-hot-loader 兼容 hook 写法
            }
          },

    +     externals: {
    +       react: 'React',
    +       'react-dom': 'ReactDOM'
    +     },

          ...

        }

        ...


    <!--  starter/public/index.html -->
      ...

        <div id="root"></div>
    +   <script crossorigin src="https://unpkg.com/react@16.10.2/umd/react.production.min.js"></script>
    +   <script crossorigin src="https://unpkg.com/@hot-loader/react-dom@16.10.2/umd/react-dom.production.min.js"></script>

      ...
    ```

    ```diff
      $ yarn build

      $ cross-env NODE_ENV=production webpack --color --progress
        Hash: 6bb2de2632bdaf2dc081
        Version: webpack 4.41.2
        Time: 2557ms
        Built at: 2019-10-21 21:35:38
                        Asset       Size                Chunks             Chunk Names
        css/main.34dd0d40.css     869 bytes     0  [emitted] [immutable]      main
                   index.html     811 bytes        [emitted]
             main.da7fbe78.js     3.85 KiB      0  [emitted] [immutable]      main
        Entrypoint main = css/main.34dd0d40.css main.da7fbe78.js
    ```

    > **1. [CDN是什么？使用CDN有什么优势？](https://www.zhihu.com/question/36514327?rf=37353035)**<br>
    > **2. 几个 CDN 公共库：[cdnjs](https://github.com/cdnjs/cdnjs)、[jsdelivr](https://www.jsdelivr.com/)、[unpkg](https://unpkg.com/)**<br>
    > **3. 为提高访问速度，最好把前端不常更新的类库，如，react、react-dom、axios、moment等从输出的 bundle 中排除依赖**<br>
    > **4. 提示，最好自己弄个，用自己的总是来得保险一些 🤡**

    **[⬆ back to top](#)**

- **工程目录**

  ```diff
    └── starter
  + ├── dist
  + │   └── chunks
  + │   │   ├── vendors~main.ae62441b.js
  + │   │   └── vendors~main.ae62441b.js.LICENSE
  +     ├── css
  + │   │   └── main.f9cee851.css
  + │   ├── index.html
  + │   └── main.2130b172.js
    ├── node_modules
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    ├── src
    │   ├── index.js
  + │   ├── index.scss
  + │   └── style
  + │       ├── global.css
  + │       └── reset.css
  + ├── postcss.config.js
    ├── webpack.config.js
    ├── package.json
    ├── README.md
    ├── LICENSE
    └── yarn.lock
  ```

- **阶段结语**

  1. 至此整个构建过程和构建过程中所做的优化点都已经大致论述完毕，当然不足之处还有一些。📚
  2. 离完整的工程还有很多工作要做，继续吧！🔥👇🔥

### 16. 完善我们的应用

待续...

### 17. 引入路由

> 前端单页应用，路由必不可少，目前主流框架都有配套路由插件，这里配合所选框架引入 [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

- **安装**

  ```sh
  $ yarn add react-router-dom
  ```

- **新建路由配置文件夹**

  ```sh
  $ cd src && mkdir router # 新建 router 文件夹
  $ cd router
  $ touch index.js         # 新建路由配置文件
  $ touch list.js          # 新建路由表文件
  ```

- **编写路由配置及路由表**

  <br />

  ***路由配置 - src/router/index.js***

  ```jsx
  import React from 'react';
  import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
  import routes from './list';

  function RouterView(route) {
    return (
      <Route
        path={route.path}
        render={(props) => {
          if (route.redirect) {
            return <Redirect to={route.redirect} />;
          }
          return (
            <route.component
              {...props}
              render={() => (
                <Switch>
                  {route.routes.map((children) => (
                    <RouterView key={children.path} {...children} />
                  ))}
                </Switch>
              )}
            />
          );
        }}
      />
    );
  }

  export default function Router() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <RouterView key={route.path} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
  ```

  ***路由表 - src/router/list.js***

  ```js
  import BottomTabNavigator from '../components/BottomTabNavigator/BottomTabNavigator';
  import Github from '../views/Github/Github';
  import Setting from '../views/Setting/Setting';
  import NotFound from '../views/NotFound/NotFound';

  const routes = [
    {
      path: '/',
      exact: true,
      redirect: '/dashboard/github'
    },
    {
      path: '/dashboard',
      component: BottomTabNavigator,
      routes: [
        {
          path: '/dashboard/github',
          component: Github
        },
        {
          path: '/dashboard/setting',
          component: Setting
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ];

  export default routes;
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
- [cross-env](https://github.com/kentcdodds/cross-env)
- [webpack mode](https://webpack.docschina.org/guides/production/#%E6%8C%87%E5%AE%9A-mode)
- [HotModuleReplacementPlugin](https://webpack.docschina.org/plugins/hot-module-replacement-plugin/)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [@hot-loader/react-dom](https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom)
- [Sass](http://sass.bootcss.com/docs/sass-reference/)
- [node-sass](https://github.com/sass/node-sass)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [css-modules](https://github.com/css-modules/css-modules)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [postcss](https://postcss.org/)
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [html-webpack-plugin](https://webpack.docschina.org/plugins/html-webpack-plugin/)
- [mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
- [optimization.splitChunks](https://webpack.docschina.org/plugins/split-chunks-plugin/#optimization-splitchunks)
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
- [webpack.DefinePlugin](https://webpack.docschina.org/plugins/define-plugin/#%E7%94%A8%E6%B3%95)
- [uglifyjs-webpack-plugin](https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)
- [UglifyJS2/issues/659](https://github.com/mishoo/UglifyJS2/issues/659)
- [为什么 webpack4 默认支持 ES6 语法的压缩？](https://juejin.im/post/5d706172f265da03ca118d28)
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)
- [terser](https://terser.org/)
- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
- [postcss-safe-parser](https://github.com/postcss/postcss-safe-parser)
- [cssnano](https://github.com/cssnano/cssnano)
- [externals](https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx)
- [cdnjs](https://cdnjs.com/)
- [jsdelivr](https://www.jsdelivr.com/)
- [CDN是什么？使用CDN有什么优势？](https://www.zhihu.com/question/36514327?rf=37353035)
- [内容分发网络(Content Delivery Network)](https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF)
- [UNPKG](https://unpkg.com/)
