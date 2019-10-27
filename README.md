# starter

  web应用程序的工程构建清单

## 说明

1. 项目主要探讨并记录 web 工程体系搭建主的要过程。（ 脱离框架提供的 cli 从基础开始构建一个工程上还算完整的 web 应用 ）
2. 现代 Web 工程主要是三大框架 React、Vue、Angular。项目选择 React。
3. 为什么选择 React ？原因是工作中应用的是 Vue ；选择什么，对本项目来说不是很重要，重要的是**论述好工程搭建过程**。
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
    +     chunkFilename: IS_PROD ? 'css/[name].[contenthash:8].css' : 'css/[name].css'
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
  + │   └── style
  + │   |   ├── global.css
  + │   |   └── reset.css
    |   ├── index.js
  + │   ├── index.scss
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

**[⬆ back to top](#)**

### 16. 引入路由

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

  - **路由配置 - src/router/index.js**

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

    > 这里根据路由配置文档编写的，仅做 DEMO 使用；详情参阅 [react-router: Route Config](https://reacttraining.com/react-router/web/example/route-config)

  - **路由表 - src/router/list.js**

    ```js
    import Github from '../views/Github/Github';
    import Setting from '../views/Setting/Setting';

    const routes = [
      {
        path: '/',
        exact: true,
        redirect: '/github'
      },
      {
        path: '/github',
        component: Github,
      },
      {
        path: '/setting',
        component: Setting,
      }
    ];

    export default routes;
    ```

    > 这里的命名你可以随意创建🙄

  **[⬆ back to top](#)**

- **新建 Setting、GitHub 页面，并编写**

  ```sh
  # 新建 Setting、GitHub 页面
  $ cd src/views
  $ mkdir Github && cd Github
  $ touch Github.js && touch Github.scss
  $ cd ..

  $ mkdir Setting && cd Setting
  $ touch Setting.js && touch Setting.scss
  $ cd ..
  ```

  ```jsx
  // starter/Github/Github.js
  import React from 'react';
  import { useHistory } from 'react-router-dom';
  import styles from './Github.scss';

  function Github() {
    const history = useHistory();

    function handleClick() {
      history.push('/setting');
    }

    return (
      <div className={`${styles.root}`}>
        <h1>Github</h1>
        <div className={`${styles.bg} ${styles.wh}`}>
          {`当前环境： ${process.env.NODE_ENV}`}
        </div>
        <button type='button' onClick={handleClick}>
          Go setting
        </button>
      </div>
    );
  }

  export default Github;

  // starter/Setting/Setting.js
  import React from 'react';
  import { useHistory } from 'react-router-dom';
  import styles from './Setting.scss';

  function Setting() {
    const history = useHistory();

    function handleClick() {
      history.push('/github');
    }

    return (
      <div className={`${styles.root}`}>
        <h1>Setting</h1>
        <div className={`${styles.bg} ${styles.wh}`}>
          {`当前环境： ${process.env.NODE_ENV}`}
        </div>
        <button type='button' onClick={handleClick}>
          Go github
        </button>
      </div>
    );
  }

  export default Setting;
  ```

  ```scss
  // starter/Setting/Setting.scss
  .root {
    .wh {
      width: 200px;
      height: 180px;
    }
    .bg {
      text-align: center;
      line-height: 180px;
      background: no-repeat url('~assets/images/logo.png');
    }
  }
  // starter/Github/Github.scss
  .root {
    .wh {
      width: 200px;
      height: 200px;
    }
    .bg {
      text-align: center;
      line-height: 200px;
      background: no-repeat url('~assets/images/logo.png');
    }
  }
  ```

  **由于样式引入图片，所以我们新建资源存放文件夹，用来存放这些资源**

  ```sh
  $ cd src && mkdir assets
  $ cd assets && mkdir images
  $ cd images
  $ copy logo.png # 这里的图标是官网搂过来的，🤣
  ```

- **修改我们的主文件 src/index.js**

  ```diff
    import { hot } from 'react-hot-loader';
  - import React, { useState } from 'react';
  + import React from 'react';
    import ReactDom from 'react-dom';
    import './style/global.css';
  - import styles from './index.scss';
  + import Router from './router/index';

  - const App = hot(module)(() => {
  -   const reversedTitle = () =>
  -     setTitle(
  -       title
  -         .split('')
  -         .reverse()
  -         .join('')
  -     );
  -   return (
  -     <div className={styles.app}>
  -       <h1>{title}</h1>
  -       <button type='button' onClick={reversedTitle}>
  -         reversed title!
  -       </button>
  -     </div>
  -   );
  - });

  + const App = hot(module)(() => (
  +   <div className='app'>
  +     <Router />
  +   </div>
  + ));

    ReactDom.render(<App />, document.getElementById('root'));
  ```

- **现在一切准备就绪，但在启动项目之前，首先说明几点**

  1. **( 我们在页面内引入了图片，随着项目的增长后续可能会引入字体图标、音频等文件 ) 这里我们利用 webpack 帮我们统一管理这些资源**
  2. **随着项目深入，目录结构也必将越来越复杂，我们利用 `webpack` - `resolve.alias`, 创建 import 或 require 的别名，来确保模块引入变得更简单。**

  <br>

  > 做点改进吧️ ⚓️

  **[⬆ back to top](#)**

### 17. [管理资源](https://webpack.docschina.org/guides/asset-management/#%E5%8A%A0%E8%BD%BD-images-%E5%9B%BE%E5%83%8F)、优化[模块解析](https://webpack.docschina.org/configuration/resolve/#resolve-alias)

- **模块解析**

  ```diff
  <!-- starter/webpack.config.js -->
    ...

      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom', // react-hot-loader 兼容 hook 写法
  +       '@': path.resolve(__dirname, 'src'),
  +       assets: path.resolve(__dirname, 'src/assets'),
  +       style: path.resolve(__dirname, 'src/style')
        }
      },

    ...
  ```

- **管理资源**

  ```sh
  # 安装

  $ yarn add -D url-loader  # 将文件转换为 base64 URI。
  $ yarn add -D file-loader # 将文件上的 import/require() 解析为 url，并将该文件发射到输出目录中。
  ```

  ```diff
  <!-- starter/webpack.config.js -->

    module: {
      rules: [
        ...

  +     {
  +       test: /\.(png|jpe?g|gif|webp)(\?.*)?$/, // 匹配这些格式的图片
  +       use: [
  +         {
  +           loader: 'url-loader',
  +           options: {
  +             limit: 4096, // 文件大小等于或大于限制，则将使用 file-loader。
  +             fallback: {
  +               loader: 'file-loader',
  +               options: {
  +                 name: 'images/[name].[hash:8].[ext]'
  +               }
  +             }
  +           }
  +         }
  +       ]
  +     },
  +     {
  +       test: /\.(svg)(\?.*)?$/,
  +       use: [
  +         {
  +           loader: 'file-loader',
  +           options: {
  +             name: 'svg/[name].[hash:8].[ext]'
  +           }
  +         }
  +       ]
  +     },
  +     {
  +       test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
  +       use: [
  +         {
  +           loader: 'url-loader',
  +           options: {
  +             limit: 4096,
  +             fallback: {
  +               loader: 'file-loader',
  +               options: {
  +                 name: 'fonts/[name].[hash:8].[ext]'
  +               }
  +             }
  +           }
  +         }
  +       ]
  +     },
  +     {
  +       test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  +       use: [
  +         {
  +           loader: 'url-loader',
  +           options: {
  +             limit: 4096,
  +             fallback: {
  +               loader: 'file-loader',
  +               options: {
  +                 name: 'media/[name].[hash:8].[ext]'
  +               }
  +             }
  +           }
  +         }
  +       ]
  +     }
  +   ]
    }
  ```

  > 这里我们虽然没有引入 `svg`、字体图标文件、音频文件，但是这里为了方便后续深入，我们索性把其配置添加。

- **好了，启动我们的项目。Try it!**

  ```sh
  $ yarn server
  ```

  ![x](https://user-gold-cdn.xitu.io/2019/10/23/16df6a85a8a00ef9?w=924&h=358&f=png&s=28652)

- **打包**

  ```diff
    $ yarn build

    # 结果

    $ cross-env NODE_ENV=production webpack --color --progress
    Hash: fb9c0cc487e7845fd915
    Version: webpack 4.41.2
    Time: 3533ms
    Built at: 2019-10-23 11:42:44

                                      Asset       Size              Chunks               Chunk Names
            chunks/vendors~main.64d1203b.js    160 KiB       1  [emitted] [immutable]    vendors~main
    chunks/vendors~main.64d1203b.js.LICENSE    1.01 KiB         [emitted]
  !                   css/main.b7d00a9e.css    1.19 KiB      0  [emitted] [immutable]        main
                  images/logo.581fa1d8.png     8.38 KiB         [emitted]
                                index.html     667 bytes        [emitted]
  !                       main.cfa18e59.js     3.95 KiB      0  [emitted] [immutable]        main

    Entrypoint main = chunks/vendors~main.64d1203b.js css/main.b7d00a9e.css main.cfa18e59.js
  ```

- **问题与待优化点**

  1. **随着项目复杂度递增，当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。**

**[⬆ back to top](#)**

### 18. 路由懒加载 [@loadable/component](https://github.com/smooth-code/loadable-components)

> 注：使用该插件对应用进行代码分割能够帮助你“懒加载”当前用户所需要的内容，能够显著地提高你的应用性能。尽管并没有减少应用整体的代码体积，但你可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量。

- **安装**

  ```sh
  # 当然你也可以选择，React.lazy 和 Suspense，但他们还不支持服务端渲染。这里直接选择功能更加强大的 @loadable/component

  $ yarn add @loadable/component
  ```

- **修改路由表**

  ```diff
  ! <!-- src/router/list -->

  - import Github from '@/views/Github/Github';
  - import Setting from '@/views/Setting/Setting';
  + import React from 'react';
  + import loadable from '@loadable/component';

  + const Github = import(/* webpackChunkName: "github" */ '@/views/Github/Github.js');
  + const Setting = import/* webpackChunkName: "setting" */ ('@/views/Setting/Setting.js');

  + const AsyncComponent = (loader) => loadable(loader, { fallback: <h3>Loading...</h3> });

    const routes = [
      {
        path: '/',
        exact: true,
        redirect: '/github'
      },
      {
        path: '/github',
  -     component: Github
  +     component: AsyncComponent(() => Github)
      },
      {
        path: '/setting',
  -     component: Setting
  +     component: AsyncComponent(() => Setting)
      }
    ];

    export default routes;
  ```

- **打包我们的应用，看一看代码分割结果**

  ```diff
    $ yarn build

    # 结果

    $ cross-env NODE_ENV=production webpack --color --progress
    Hash: b93be70da668f4dff43b
    Version: webpack 4.41.2
    Time: 6077ms
    Built at: 2019-10-23 16:21:08

                                      Asset        Size                  Chunks            Chunk Names
  !               chunks/github.45dc6c0d.js    634 bytes       0  [emitted] [immutable]      github
  !             chunks/setting.316d765f.js     637 bytes       2  [emitted] [immutable]      setting
            chunks/vendors~main.a51021eb.js    164 KiB         3  [emitted] [immutable]     vendors~main
    chunks/vendors~main.a51021eb.js.LICENSE    1.01 KiB           [emitted]
  !                css/github.8de607a6.css     191 bytes       0  [emitted] [immutable]       github
  !               css/setting.1a0bfbdd.css     195 bytes       2  [emitted] [immutable]       setting
                      css/main.c1fb052e.css    830 bytes       1  [emitted] [immutable]        main
                  images/logo.581fa1d8.png     8.38 KiB           [emitted]
                                index.html     667 bytes          [emitted]
                          main.02bdd0e7.js     4.96 KiB        1  [emitted] [immutable]        main

    Entrypoint main = chunks/vendors~main.a51021eb.js css/main.c1fb052e.css main.02bdd0e7.js
  ```

- **工程目录**

  ```diff
  └── starter
  + ├── dist
  + │   └── chunks
  + │   │   ├── github.45dc6c0d.js
  + │   │   ├── setting.316d765f.js
  + │   │   ├── vendors~main.a51021eb.js
  + │   │   └── vendors~main.a51021eb.js.LICENSE
  +     ├── css
  + │   │   ├── 0.8de607a6.css
  + │   │   ├── 2.1a0bfbdd.css
  + │   │   └── main.c1fb052e.css
  + │   ├── images
  + │   │   └── logo.581fa1d8.png
    │   ├── index.html
  + │   └── main.02bdd0e7.js
    ├── node_modules
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    ├── src
  + │   ├── assets
  + │   │   └── images
  + │   │       └── logo.png
  + │   ├── router
  + │   │   ├── index.js
  + │   │   └── list.js
    │   ├── style
    │   |   ├── global.css
    │   |   └── reset.css
  + |   ├── views
  + │   |   ├── Github
  + │   |   │   ├── Github.js
  + │   |   │   └── Github.scss
  + │   |   └── Setting
  + │   |       ├── Setting.js
  + │   |       └── Setting.scss
  - │   ├── index.scss
    |   └──  index.js
    ├── postcss.config.js
    ├── webpack.config.js
    ├── package.json
    ├── README.md
    ├── LICENSE
    └── yarn.lock

  ```

  **到此，我们已经把路由功能添加，继续后续工作吧！🚘**

**[⬆ back to top](#)**

### 19. **编码规范**

> **到目前为止，我们项目的代码量越来越多了，写的代码可能还会存在一些潜在问题（这很难避免）；再一个，一个大型项目往往是一个团队在维护，团队成员代码风格却不尽相同。基于此，我们需要一个工具去解决这些痛点。**

- **工具**

  - [**eslint:**](https://github.com/eslint/eslint) 常用于检查常见的 JavaScript 代码错误，也可以进行代码风格检查。

  - [**stylelint:**](https://github.com/stylelint/stylelint) 强大的现代化 linter，可帮助您避免错误并在样式中强制执行约定。

  - [**prettier:**](https://github.com/prettier/prettier) 代码格式化工具，它通过解析代码并使用自己的规则重新打印代码，从而实现一致的样式，并在必要时包装代码。

  <br>

  > 论述完编码规范的重要性，及工具链之后，我们看看如何在项目中应用。

#### 配置 [eslint](https://github.com/eslint/eslint)

- **安装**

  ```sh
  $ yarn add -D eslint                          # eslint
  $ yarn add -D babel-eslint                    # 一个对 Babel 解析器的包装，使其能够与 ESLint 兼容
  $ yarn add -D eslint-plugin-react             # 检测 react 代码
  $ yarn add -D eslint-plugin-react-hooks       # 用于检测 hook 规则
  $ yarn add -D eslint-plugin-jsx-a11y          # 用于检测 jsx 规范
  $ yarn add -D eslint-plugin-import            # ESLint 插件，带有有助于验证正确导入的规则。
  $ yarn add -D eslint-import-resolver-webpack  # 用于 eslint-plugin-import的 Webpack-literate 模块解析插件。
  ```

- **新建 eslint 配置文件**

  ```sh
  $ touch .eslintrc     # eslint 配置文件
  $ touch .eslintignore # eslint 忽略检测配置文件
  ```

  ```json
  <!-- starter/.eslintrc -->

    {
      "root": true,
      "env": {
        "es6": true,
        "browser": true,
      },
      "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
      "parser": "babel-eslint",
      "plugins": ["react", "jsx-a11y", "react-hooks", "import"],
      "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "camelcase": [0, { "properties": "never" }],
        "no-console": [2, { "allow": ["warn", "error"] }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/no-unused-prop-types": "off"
      },
      "settings": {
        "react": {
          "version": "16.10.2"
        },
        "import/resolver": "webpack"
      },
      "globals": {
        "process": true,
        "module": true
      }
    }

  <!-- starter/.eslintignore -->

    node_modules
    dist
  ```

- **配置说明**

    1. [`"eslint:recommended"`](https://cn.eslint.org/docs/rules/) 启用推荐的规则
    2. [`"plugin:react/recommended"`](https://github.com/yannickcr/eslint-plugin-react/) 该插件会导出建议的配置，以强制实施 React 的良好做法。
    3. [`"babel-eslint"`](https://github.com/babel/babel-eslint) 一个对 Babel 解析器的包装，使其能够与 ESLint 兼容
    4. rules: 自定义规则，可覆盖扩展配置。
    5. [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) 该插件旨在支持ES2015 +（ES6 +）导入/导出语法的检查，并防止文件路径和导入名称拼写错误的问题。
    6. `"import/resolver": "webpack"` ：解决 webpack 别名配置导致的 `eslint-plugin-import` 报错。
    7. 此配置是一份简单的配置 详细配置说明请参考 [Configuring ESLint](https://cn.eslint.org/docs/user-guide/configuring)

  <br>

  > **注：eslint 配置需要根据团队内部去协定出一套行之有效的规范。**

- **修改 package.json 新建快捷命令**

  ```diff
  <!-- starter/package.json -->

       "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress",
         "build": "cross-env NODE_ENV=production webpack --color --progress",
  +      "lint:script": "eslint --ext '.js,.jsx' src",
  +      "lint-fix:script": "npm run lint:script -- --fix"
       },
  ```

- **执行命令，查看是否存在不符合规则之处**

  ```sh
  $ yarn lint:script     # 执行 lint
  $ yarn lint-fix:script # 执行 lint 并自动修复

  # 结果, 如果存在错误，则根据文档自行修复。

  $ npm run lint:script -- --fix

  > starter@1.0.0 lint:script /Users/gt/LEMON/starter
  > eslint --ext '.js,.jsx' src "--fix"

  ✨  Done in 2.59s.
  ```

- **另外，我们希望在每次转译js、jsx文件之前，执行 lint 格式化代码**

  ```sh
  # 安装

  $ yarn add -D eslint-loader  # eslint loader (for webpack)
  ```

  ```diff
  // 修改 webpack.config.js 配置

    ...

      module: {
        rules: [
  +       {
  +         test: /\.(js|jsx)$/,
  +         exclude: /node_modules/,
  +         include: path.resolve(__dirname, 'src'),
  +         enforce: 'pre',
  +         use: [
  +           {
  +             loader: 'eslint-loader',
  +             options: {
  +               cache: false,
  +               fix: true
  +             }
  +           }
  +         ]
  +       },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          ...
        ]
      }

    ...
  ```

  > **测试一下吧. Try it 🚨**

  <br>

  **[⬆ back to top](#)**

  <br>

#### 配置 [stylelint](https://github.com/stylelint/stylelint)

- **安装**

  ```sh
  $ yarn add -D stylelint                    # 强大的现代化 linter，可帮助您避免错误并在样式中强制执行约定。
  $ yarn add -D stylelint-config-recommended # Stylelint 的推荐可共享配置
  $ yarn add -D postcss-reporter             # 在控制台中记录 PostCSS 消息

  # $ yarn add -D stylelint-config-standard  # Stylelint 的标准可共享配置
  # stylelint 插件通过 PostCSS 注册警告 。因此，您需要用于打印警告的 PostCSS 运行器或插件，其目的是格式化和打印警告（例如 postcss-reporter）
  ```

- **新建 stylelint 配置文件**

  ```sh
  $ touch .stylelintrc     # stylelint 配置文件
  ```

  ```json
  <!-- starter/.eslintrc -->
  # 你也可以使用 stylint 推荐开启的规则, 只需引入扩展推荐包即可。
  # 你也可以 使用 rules 扩充规则或者覆盖推荐规则，这取决于你！

  {
    "extends": "stylelint-config-recommended",
    "rules": {
      "indentation": 2,                              // 缩进
      "declaration-colon-space-after": "always",     // 在冒号声明后需要一个空格或禁止使用空格。 a { color:pink } => a { color: pink }
      "declaration-colon-space-before": "never",     // 在冒号之前需要一个空格或禁止空格。 a { color : pink } => a { color: pink }
      "function-comma-space-after": "always",        // 在功能的逗号后面需要一个空格或不允许空格。 a { transform: translate(1,1) } => a { transform: translate(1, 1) }
      "function-url-quotes": "always",               // 要求或禁止使用网址引号 a { background: url(x.jpg) } => a { background: url("x.jpg") }
      "media-feature-colon-space-before": "never",   // 媒体功能中的冒号之前需要单个空格或不允许使用空格。@media (max-width :600px) {} => @media (max-width:600px) {}
      "media-feature-name-no-vendor-prefix": true,   // 禁止使用媒体功能名称的供应商前缀。@media (-webkit-min-device-pixel-ratio: 1) {} => @media (min-resolution: 96dpi) {}
      "max-empty-lines": 5,                          // 限制相邻的空行数。
      "number-leading-zero": "never",                // 小数部分小于或等于1的前导零。a { line-height: 0.5; } => a { line-height: .5; }
      "number-no-trailing-zeros": true,              // 禁止数字尾随零。a { top: 1.0px } => a { top: 1px }
      "at-rule-semicolon-newline-after": "always",   // 规则后的分号换行符 @import url("x.css"); a {} => @import url("x.css");\n a {}
      "selector-list-comma-space-before": "never",   // 选择器列表的逗号前需要一个空格或不允许空格 a ,b { color: pink; } => a, b { color: pink; }
      "selector-list-comma-newline-after": "always", // 选择器列表的逗号后需要换行符或不允许使用空格。a, b { color: pink; } => a,\n b { color: pink; }
      "string-quotes": "single",                     // 在字符串周围指定单引号或双引号。 a { content: “x”; } => a { content: 'x'; }
    }
  }
  ```

- **扩展共享配置及规则表**

  - [**stylelint-config-recommended**](https://github.com/stylelint/stylelint-config-recommended)
  - [**stylelint-config-standard**](https://github.com/stylelint/stylelint-config-standard)
  - [**stylelint rules**](https://stylelint.io/user-guide/rules/at-rule-blacklist)

- **添加快捷命令**

  ```diff
  <!-- starter/package.json -->

       "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress",
         "build": "cross-env NODE_ENV=production webpack --color --progress",
         "lint:script": "eslint --ext '.js,.jsx' src",
         "lint-fix:script": "npm run lint:script -- --fix",
  +      "lint:style": "stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss",
  +      "lint-fix:style": " npm run lint:style -- --fix",
       },
  ```

- **配置 postcss-reporter**

  > 在控制台中记录 PostCSS 消息

  ```diff


  <!-- starter/postcss.config.js -->

    module.exports = {
      plugins: {
        autoprefixer: {},
  +     'postcss-reporter': {
  +       clearReportedMessages: true, # 插件将在记录结果消息后清除它们。这样可以防止其他插件或您使用的任何运行程序再次记录相同的信息并引起混乱。
  +       throwError: true             # 在插件记录您的消息后，如果发现任何警告，它将引发错误。
  +     },
      }
    };
  ```

- **执行命令，查看是否存在不符合规则之处**

  ```sh
  $ yarn lint:style     # 格式化 style
  $ yarn lint-fix:style # 格式化 style 并自动修复

  # 结果

  $  npm run lint:style -- --fix

  > starter@1.0.0 lint:style /Users/gt/LEMON/starter
  > stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss "--fix"

  src/style/reset.css
  54:1  ✖  Expected selector "h1" to come before selector "h1:first-child"   no-descending-specificity
  54:1  ✖  Expected selector "h1" to come before selector "h1:last-child"    no-descending-specificity
  58:1  ✖  Expected selector "h2" to come before selector "h2:first-child"   no-descending-specificity
  58:1  ✖  Expected selector "h2" to come before selector "h2:last-child"    no-descending-specificity
  62:1  ✖  Expected selector "h3" to come before selector "h3:first-child"   no-descending-specificity
  62:1  ✖  Expected selector "h3" to come before selector "h3:last-child"    no-descending-specificity
  66:1  ✖  Expected selector "h4" to come before selector "h4:first-child"   no-descending-specificity
  66:1  ✖  Expected selector "h4" to come before selector "h4:last-child"    no-descending-specificity
  67:1  ✖  Expected selector "h5" to come before selector "h5:first-child"   no-descending-specificity
  67:1  ✖  Expected selector "h5" to come before selector "h5:last-child"    no-descending-specificity
  68:1  ✖  Expected selector "h6" to come before selector "h6:first-child"   no-descending-specificity
  68:1  ✖  Expected selector "h6" to come before selector "h6:last-child"    no-descending-specificity

  # no-descending-specificity 禁止较低特异性的选择器在覆盖较高特异性的选择器之后出现。
  # 根据规则表修复 reset.css 文件

  # 再次运行，结果：

  $  npm run lint:style -- --fix

  > starter@1.0.0 lint:style /Users/gt/LEMON/starter
  > stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss "--fix"

  ✨  Done in 1.96s.
  ```

  > **测试一下吧. Try it 💄**

  <br>

  **[⬆ back to top](#)**

  <br>

#### 配置 [prettier](https://github.com/prettier/prettier)

- **安装**

  ```sh
  $ yarn add -D prettier
  $ yarn add -D eslint-plugin-prettier # 将 Prettier 作为 ESLint 规则运行，并将差异报告为单个ESLint问题

  $ yarn add -D eslint-config-prettier # 关闭所有不必要的或可能与 Prettier 冲突的规则。
  $ yarn add -D stylelint-config-prettier # 禁用与 Prettier 冲突的规则的配置
  ```

  > 关于这些禁用规则，请参考 [eslint-config-prettier#special-rules](https://github.com/prettier/eslint-config-prettier#special-rules),   [stylelint-config-prettier special-rules](https://github.com/prettier/stylelint-config-prettier/blob/master/src/index.js)

- **在 eslint 配置中扩展 prettier**

  ```diff
  <!-- starter/.eslintrc -->

    {
      ...

  -   "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  +   "extends": [
  +     "eslint:recommended",
  +     "plugin:react/recommended",
  +     "plugin:jsx-a11y/recommended",
  +     "plugin:prettier/recommended",
  +     "prettier/react"
  +   ],

      ...

    }


  <!-- 说明 -->

  "plugin:prettier/recommended" does three things:

    1. Enables eslint-plugin-prettier.
    2. Sets the prettier/prettier rule to "error".
    3. Extends the eslint-config-prettier configuration.

  "prettier/react"

    为了支持特殊的 ESLint 插件（eslint-plugin-react）所添加额外的排除项
  ```

  > 当然，你可以在 `.prettierrc` 文件中设置 `Prettier` 自己的选项。

- **新建 prettier 配置文件**

  ```sh
  $ touch .prettierrc     # prettier 配置文件
  ```

  ```json
  <!-- starter/.prettierrc -->

    {
      "semi": true,
      "singleQuote": true,
      "trailingComma": 'all',
    }

  ```

- **在 stylelint 配置中扩展 prettier**

  ```diff
  <!-- starter/.stylelintrc -->

    {
      ...

  -   "extends": "stylelint-config-recommended",
  +   "extends": [
  +     "stylelint-config-recommended",
  +     "stylelint-config-prettier"
  +   ],

      ...

    }
  ```

- **说明**

  - **上述我们在扩展 eslint、stylelint 配置都是为了整合工具并把它们集成在一起。所以你看到的处理是，禁用了其它 linter 中可能与 Prettier 希望格式化代码的方式冲突的所有现有格式化规则**

  <br>

- **添加快捷命令行**

  ```diff
  <!-- starter/package.json -->

    ...

    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress",
      "build": "cross-env NODE_ENV=production webpack --color --progress",
      "lint:script": "eslint --ext '.js,.jsx' src",
      "lint-fix:script": "npm run lint:script -- --fix",
      "lint:style": "stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss",
      "lint-fix:style": " npm run lint:style -- --fix",
  +   "prettier": "prettier --check --write 'src/**/*.{js,jsx,scss,css}' --config ./.prettierrc"
    },

    ...
  ```

  > 更多参数请参考 [Prettier CLI](https://prettier.io/docs/en/cli.html)

- **运行命令，格式化代码**

  ```sh
  $ yarn prettier

  # 结果, 它帮你格式化的代码如下

  $ prettier --check --write './src/**/*.js' './src/**/*.jsx'

  Checking formatting...

  src/index.js
  src/router/index.js
  src/router/list.js
  src/views/Github/Github.js
  src/views/Setting/Setting.js

  Code style issues fixed in the above file(s).
  ✨  Done in 0.79s.
  ```

  <br>

  **[⬆ back to top](#)**

  <br>

#### 配置 [Husky](https://github.com/typicode/husky)

  > Git钩子脚本对于在提交代码审查之前识别简单问题很有用。我们在每次提交时都运行钩子，以自动指出代码中的问题，例如缺少分号，尾随空白和调试语句。通过在代码审阅之前指出这些问题，一来，可以确保没有错误进入存储库；二来，代码审阅者可以专注于更改的体系结构，而不会因为琐碎的风格问题而浪费时间。

- **安装**

  ```sh
  $ yarn add -D husky # 🐶 Git hooks made easy
  $ yarn add -D lint-staged # 对暂存的 git 文件运行 linters，不要让💩进入您的代码库！
  ```

- **配置**

  ```diff
  <!-- starter/package.json -->

    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress",
        "build": "cross-env NODE_ENV=production webpack --color --progress",
  +     "lint": "npm run lint:style && npm run lint:script",
  +     "lint-fix": "npm run lint-fix:style && npm run lint-fix:script",
        "lint:script": "eslint --ext '.js,.jsx' src",
        "lint-fix:script": "npm run lint:script -- --fix",
        "lint:style": "stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss",
        "lint-fix:style": " npm run lint:style -- --fix",
        "prettier": "prettier --check --write 'src/**/*.{js,jsx,scss,css}' --config ./.prettierrc"
      },
  +   "husky": {
  +     "hooks": {
  +       "pre-commit": "lint-staged"
  +     }
  +   },
  +   "lint-staged": {
  +     "src/**/*.{js, jsx, css, scss}": [
  +       "npm run prettier",
  +       "npm run lint-fix",
  +       "git add"
  +     ]
  +   }
    }
  ```

  >  **推个代码测试一下吧！ Try it!**  🎊🎊

  <br>

  **[⬆ back to top](#)**

  <br>

- **题外话：commit changelog 规范**

  ```sh
  # feat：     添加新功能（feature）
  # fix ：     修复 bug
  # docs：     文档（documentation）
  # style：    样式及代码格式化等不涉及逻辑的改动点
  # refactor： 重构
  # test：     添加测试用例
  # chore：    构建过程或辅助工具的变动

  # 这里推荐一个 lint 插件 commitlint。可根据需要添加
  # 详细参考：https://github.com/conventional-changelog/commitlint

  # 关于 commit 信息编写的更多规范指南
  # 请参考：http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
  ```

  <br>

  **[⬆ back to top](#)**

  <br>

  **到此编码规范的内容基本陈述完毕，说的东西有限、具体如何配置取决于你或你的团队要求！** **Go 🚠**

### 20. 完善应用

> **为了接下来更好的论述，我们来完成一个小需求。**

![x](https://user-gold-cdn.xitu.io/2019/10/22/16df13960eb84498?w=930&h=660&f=png&s=35990)

- **由草图需求改造我们的项目**

  - **改造路由表**

    ```jsx
    import React from 'react';
    import loadable from '@loadable/component';
    import Loading from '@/components/Loading/Loading';

    const BottomTabNavigator = import(
      /* webpackChunkName: "bottom-tab-navigator" */ '@/components/BottomTabNavigator/BottomTabNavigator'
    );
    const Empty = import(
      /* webpackChunkName: 'not-found' */ '@/components/Empty/Empty'
    );
    const Github = import(/* webpackChunkName: "github" */ '@/views/Github/Github');
    const Setting = import(
      /* webpackChunkName: "setting" */ '@/views/Setting/Setting'
    );

    const AsyncComponent = loader => loadable(loader, { fallback: <Loading /> });

    const routes = [
      {
        path: '/',
        exact: true,
        redirect: '/dashboard/github',
      },
      {
        path: '/dashboard',
        component: AsyncComponent(() => BottomTabNavigator),
        routes: [
          {
            path: '/dashboard/github',
            component: AsyncComponent(() => Github),
          },
          {
            path: '/dashboard/setting',
            component: AsyncComponent(() => Setting),
          },
        ],
      },
      {
        path: '*',
        component: AsyncComponent(() => Empty),
      },
    ];

    export default routes;
    ```

  - **改造 Github 页面**

    ```jsx
    /*
     * 路径: starter/src/views/Github
     * 说明:
     *      RepositoriesCard   根据草图编写的仓库信息卡片
     *      Loading            加载态组件
     *      Empty              空数据态组件
     *      useRequest         自定义 hook，用于包装请求
     *      searchRepositories 统一 API 请求封装
     *
     * 提示: 说明涉及到的组件，可以参考项目；你也可以自己实现，这不重要。
     */

    import React from 'react';
    import styles from './Github.scss';
    import RepositoriesCard from '@/components/RepositoriesCard/RepositoriesCard';
    import Loading from '@components/Loading/Loading';
    import Empty from '@components/Empty/Empty';
    import useRequest from '@/containers/useRequest';
    import { searchRepositories } from '@/services/api/github';

    function Github() {
      const [loading, data] = useRequest(searchRepositories, { q: 'javascript' });

      if (loading === true) {
        return <Loading />
      }

      return (
        <div className={styles.root}>
          {(data && data.items.map(
            ({
              description,
              id,
              name,
              forks_count,
              stargazers_count,
              language,
              owner
            }) => (
              <RepositoriesCard
                key={id}
                name={name}
                avatarUrl={owner.avatar_url}
                description={description}
                stargazersCount={stargazers_count}
                forksCount={forks_count}
                language={language}
              />
            )
          ))
            || <Empty />}
        </div>
      );
    }

    export default Github;
    ```

    > ****

  - **改造 Setting 页面（不改造 😜）**

  <br>

  > **我们在改造 Github 页面, 在组件内部调用了请求方法，并对请求做了统一封装，在继续改造工作之前，我们先来看看 *前后端交互***

**[⬆ back to top](#)**

### 21. 前后端交互 [Axios](https://github.com/axios/axios)

  ![x](https://user-gold-cdn.xitu.io/2019/10/25/16e0239f9de23880?w=740&h=206&f=png&s=12553)

- **安装**

  ```sh
  $ yarn add axios # Promise based HTTP client for the browser and node.js
  ```

- **新建相关文件**

  ```sh
  # 新建 services 文件夹

  $ cd src && mkdir services
  $ cd services && touch index.js   # 基于 axios 简单封装
  $ mkdir interface && cd interface # 用于存在项目所有接口
  $ touch github.js                 # 用于存放 GitHub 相关请求
  ```

- **基于 axios 简单封装 src/services/index.js**

  ```js
  /**
   * 说明: AXIOS_DEFAULT_OPTIONS 默认配置，详细参考 utils
   *
   * 注: 以下封装仅仅简单包装一层，你也可以自己实现。
   */
  import axios from 'axios';
  import constants from '@/utils/constants';

  // 使用自定义配置新建一个 axios 实例
  const instance = axios.create(constants.AXIOS_DEFAULT_OPTIONS);

  // 请求拦截器
  instance.interceptors.request.use(
    (AxiosRequsetConfig) => AxiosRequsetConfig, // 在发送请求之前做些什么
    (error) => Promise.reject(error) // 对请求错误做些什么
  );

  // 响应拦截器
  instance.interceptors.response.use(
    (AxiosResponse) => AxiosResponse, // 对响应数据做点什么
    (error) => Promise.reject(error) // 对响应错误做点什么, 如，处理一些鉴权类问题
  );

  export default function (options = {}, customConfig = {}) {
    return new Promise((resolve, reject) => {
      const finalConfig = Object.assign(options, customConfig);
      instance(finalConfig)
        .then(({ data }) => {
          if (data) {
            return resolve(data);
          }
          return reject(new Error('Request return result exception!'));
        })
        .catch((reason) => reject(reason));
    });
  }
  ```

- **业务接口层 src/services/interface/github.js**

  ```js
  import network from '../index';

  /**
  * @desc 搜索仓库
  *
  * @param {Object} data 请求参数
  * @returns {Promise}
  */
  export const searchRepositories = (data = {}) => network({
    url: '/search/repositories',
    params: data
  });
  ```

  > **上述简单封装核心请求方法，分离接口等，主要目的是辅助论述，当然，这还很简单，你可以自己根据实际需要做更全面的封装！**

**[⬆ back to top](#)**

### 22. 项目改造 - 组件

#### UI Component

- **准则**
  1. 最基础的组件形式，如：按钮、标签。
  2. 无状态
  3. 纯静态展示作用
  4. 组成的基本结构（props + render）
  5. 不需要依赖生命周期
  6. 单一职责，多处复用。

- **样例**

  ```jsx
  import React from 'react';
  import PropTypes from 'prop-types';

  const UI = ({ title }) => {
    return (
      <div className="UI">
        { title }
      </div>
    );
  };

  UI.propTypes = {
    title: PropTypes.string,
  };

  UI.defaultProps = {
    title: 'UI Component !',
  };

  export default UI;
  ```

#### Container Component

- **准则**
  1. 单一职责原则，降低组件的耦合度
  2. 提供数据（ 如：包含 Ajax 返回数据处理逻辑 ）
  3. 与状态管理工具交互（ 如：包含 Redux 注入逻辑 ）
  4. 有状态
  5. 样式及 DOM 较少

- **样例**

  ```jsx
  import { connect } from 'react-redux';
  import Demo from 'components/Demo/Demo';
  import {
    incrementEnthusiasm,
    decrementEnthusiasm
  } from 'actions/index';

  export function mapStateToProps({ enthusiasm }) {
    return {
      enthusiasm,
    };
  }

  export function mapDispatchToProps(dispatch) {
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Demo);
  ```

> Tip: **由于对 react 不是很熟，故谈的比较简单，这里推荐参考：[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)、[编写有弹性的组件](https://overreacted.io/zh-hans/writing-resilient-components/)**

**[⬆ back to top](#)**

### 23. 项目改造 - 移动端适配

  > 这里我们直接引入 [`postcss-px-to-viewport`](https://github.com/evrone/postcss-px-to-viewport) 插件。

- **安装**

  ```sh
  $ yarn add -D postcss-px-to-viewport`
  ```

- **配置**

  ```diff
  <!-- starter/postcss-config.js -->

    module.exports = {
      plugins: {
        autoprefixer: {}
      },
      'postcss-reporter': {
        clearReportedMessages: true,
        throwError: true
      },
  +   'postcss-px-to-viewport': {
  +     viewportWidth: 375,                           // 设计稿的视口宽度
  +     viewportHeight: 812,                          // 设计稿的视口高度
  +     unitPrecision: 5,                             // 单位转换后保留的精度
  +     viewportUnit: 'vw',                           // 希望使用的视口单位
  +     fontViewportUnit: 'vw',                       // 字体使用的视口单位
  +     selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  +     minPixelValue: 1,                             // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  +     mediaQuery: false,                            // 媒体查询里的单位是否需要转换单位
  +     exclude: [/node_modules/]                     // 需要排除的
  +   }
    };
  ```

- **运行项目，看看效果！**

  ```sh
    $ yarn server # 运行项目

    # 结果

    $ cross-env NODE_ENV=development webpack-dev-server --color --progress
    10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:3000/
    ℹ ｢wds｣: webpack output is served from /
    ℹ ｢wds｣: Content not from webpack is served from /Users/mr.lemon/cl/CODE_CL/REACT/starter/public
    ℹ ｢wds｣: 404s will fallback to /index.html
    ℹ ｢wdm｣: Compiled successfully.
  ```

  ![x](https://user-gold-cdn.xitu.io/2019/10/26/16e071a4589397f1?w=375&h=797&f=gif&s=2075019)

  <br>

  > **🔥 Good job！🎉 🔥**

  <br>

  <details>
    <summary>查看现阶段完整工程目录</summary>

    ```diff
    └── starter
      ├── dist
      │   ├── chunks
      │   │   ├── bottom-tab-navigator.77d17027.js
      │   │   ├── github.4e7f6c35.js
      │   │   ├── not-found.638dbdfc.js
      │   │   ├── setting.bc3fbe14.js
      │   │   ├── vendors~github.7acdaa67.js
      │   │   ├── vendors~github.7acdaa67.js.LICENSE
      │   │   ├── vendors~main.b1a4bdbf.js
      │   │   └── vendors~main.b1a4bdbf.js.LICENSE
      │   ├── css
      │   │   ├── bottom-tab-navigator.25c0dead.css
      │   │   ├── github.866c72ba.css
      │   │   ├── main.45091b7c.css
      │   │   ├── not-found.d566b1be.css
      │   │   └── setting.2b60ef7c.css
      │   ├── fonts
      │   │   ├── iconfont.63765329.woff
      │   │   ├── iconfont.c2eabadd.ttf
      │   │   └── iconfont.cad7bb52.eot
      │   ├── images
      │   │   ├── empty-data.788c1924.png
      │   │   ├── logo.581fa1d8.png
      │   │   └── webpage-lost.a02f7942.png
      │   ├── svg
      │   │   └── iconfont.1247822e.svg
      │   ├── main.a010b425.js
      │   └── index.html
      ├── node_modules
      |   ├──  ...
      |   └──  ...
      ├── public
      │   ├── favicon.ico
      │   └── index.html
      ├── src
      │   ├── assets
      │   │   ├── font
      │   │   │   ├── iconfont.css
      │   │   │   ├── iconfont.eot
      │   │   │   ├── iconfont.svg
      │   │   │   ├── iconfont.ttf
      │   │   │   └── iconfont.woff
      │   │   └── images
      │   │       ├── empty-data.png
      │   │       ├── logo.png
      │   │       └── webpage-lost.png
      │   ├── components
      │   │   ├── BottomTabNavigator
      │   │   │   ├── BottomTabNavigator.js
      │   │   │   ├── BottomTabNavigator.scss
      │   │   │   └── index.zh-CN.md
      │   │   ├── Circle
      │   │   │   ├── Circle.js
      │   │   │   ├── Circle.scss
      │   │   │   └── index.zh-CN.md
      │   │   ├── Empty
      │   │   │   ├── Empty.js
      │   │   │   ├── Empty.scss
      │   │   │   └── index.zh-CN.md
      │   │   ├── Loading
      │   │   │   ├── Loading.js
      │   │   │   ├── Loading.scss
      │   │   │   └── index.zh-CN.md
      │   │   ├── README.md
      │   │   └── RepositoriesCard
      │   │       ├── RepositoriesCard.js
      │   │       ├── RepositoriesCard.scss
      │   │       └── index.zh-CN.md
      │   ├── containers
      │   │   ├── README.md
      │   │   └── useRequest.js
      │   ├── index.js
      │   ├── router
      │   │   ├── index.js
      │   │   └── list.js
      │   ├── services
      │   │   ├── index.js
      │   │   └── interface
      │   │       └── github.js
      │   ├── style
      │   │   ├── global.css
      │   │   ├── reset.css
      │   │   └── variable.scss
      │   ├── utils
      │   │   ├── constants.js
      │   │   ├── enume.js
      │   │   └── tools.js
      │   └── views
      │       ├── Github
      │       │   ├── Github.js
      │       │   └── Github.scss
      │       └── Setting
      │           ├── Setting.js
      │           └── Setting.scss
      ├── webpack.config.js
      ├── postcss.config.js
      ├── package.json
      ├── LICENSE
      ├── README.md
      └── yarn.lock
    ```

  </details>

  <br>

> **项目改造到此已基本完成，但后续仍然还有工作要做 💊😯。继续吧！**

**[⬆ back to top](#)**

### 24. 前后端分离 mock

  > 前后端分离，让前端脱离后台独立开发，mock 起了很大的作用。在实际业务开发中，我们需要一种能不侵入现有代码，即可拦截请求，返回模拟数据。 我们利用 [json-server](https://github.com/typicode/json-server) 帮助我们完成这个需求。

- **安装**

  ```sh
  $ yarn add -D json-server
  ```

- **新建 mock 文件夹**

  ```sh
  $ mkdir mock
  $ cd mock && touch index.js
  $ mkdir interface && cd interface
  $ touch index.js && touch github.js
  ```

  ```js
  // starter/mock/index.js
  const data = require('./interface/index');
  module.exports = function Mock() {
    return data;
  };

  // starter/mock/interface/index.js
  const github = require('./github');
  module.exports = {
    ...github,
  };

  // starter/mock/interface/github.js
  const repositories = {
    "items": [
      {
        "id": 6498492,
        "name": "javascript",
        "full_name": "airbnb/javascript",
        "owner": {
          "login": "airbnb",
          "id": 698437,
          "avatar_url": "https://avatars3.githubusercontent.com/u/698437?v=4",
        },
        "description": "JavaScript Style Guide",
        "size": 3002,
        "stargazers_count": 89966,
        "watchers_count": 89966,
        "language": "JavaScript",
        "forks_count": 17404,
        "open_issues_count": 110,
        "license": {
          "key": "mit",
          "name": "MIT License",
        },
        "forks": 17404,
        "open_issues": 110,
        "watchers": 89966,
        "default_branch": "master",
        "score": 151.055
      },
      {
        "id": 18286232,
        "name": "javascript",
        "full_name": "GitbookIO/javascript",
        "private": false,
        "owner": {
          "login": "GitbookIO",
          "id": 7111340,
          "avatar_url": "https://avatars0.githubusercontent.com/u/7111340?v=4",
        },
        "description": "GitBook teaching programming basics with Javascript",
        "size": 1267,
        "stargazers_count": 1923,
        "watchers_count": 1923,
        "language": "javascript",
        "forks_count": 730,
        "open_issues_count": 43,
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
        },
        "forks": 730,
        "open_issues": 43,
        "watchers": 1923,
        "default_branch": "master",
        "score": 104.4313
      },
    ]
  }

  module.exports = {
    repositories
  };
  ```

  > 数据来源于 GitHub ，这里只做演示，故直接贴出数据。如果你需要动态生成数据，可以引入 [mockjs](http://mockjs.com/) 帮助你生成数据。这里就不做赘述了！

- **配置快捷命令 starter/package.json**

  ```diff
    ...
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress",
  +     "server:mock": "npm run mock & cross-env NODE_ENV=development MOCK=true webpack-dev-server --color --progress",
  +     "mock": "json-server mock/index.js --watch --port 3001",
        "build": "cross-env NODE_ENV=production webpack --color --progress",
        "lint": "npm run lint:style && npm run lint:script",
        "lint-fix": "npm run lint-fix:style && npm run lint-fix:script",
        "lint:script": "eslint --ext '.js,.jsx' src",
        "lint-fix:script": "npm run lint:script -- --fix",
        "lint:style": "stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss",
        "lint-fix:style": " npm run lint:style -- --fix",
        "prettier": "prettier --check --write 'src/**/*.{js,jsx,scss,css}' --config ./.prettierrc"
      },
    }
    ...
  ```

- **配置 dev-server 代理**

  ```sh
  # 新建代理文件

  $ cd ../.. && mkdir config
  $ cd config && touch proxy.js
  ```

  ```js
  // starter/config/proxy.js

  /**
   * @desc mock 服务代理配置
   */
  const MOCK_SERVER_PROXY = {
    '/search/*': {
      target: 'http://localhost:3001/$1',
    }
  }

  /**
   * @desc 默认服务代理
   */
  const DEFAULT_PROXY = {};

  /**
   * @desc dev-server 代理配置
   * @param {Boolean} IS_MOCK mock 标识
   * @param {Object} Proxy
   */
  module.exports = function({ IS_MOCK }) {
    if (IS_MOCK) return MOCK_SERVER_PROXY;
    return DEFAULT_PROXY;
  }
  ```

  > 具体如何配置代理，根据接口自定！更多请参考 [`devServer - proxy`](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)

  ```diff
    # starter/webpack.config.js

    ...
  + const IS_MOCK = process.env.MOCK === 'true';
  + const filterProxy = require('./config/proxy');

      ...

        baseConfig.devServer = {
          ...
  +       proxy: filterProxy({ IS_MOCK })
        }

    ...
  ```

- **运行项目**

  ```sh
  $ yarn server:mock

  # 结果

  $ npm run mock & cross-env NODE_ENV=development MOCK=true webpack-dev-server --color --progress

  > starter@1.0.0 mock /Users/mr.lemon/cl/CODE_CL/REACT/starter
  > json-server mock/index.js --watch --port 3001

    \{^_^}/ hi!

    Loading mock/index.js
    Done

    Resources
    http://localhost:3001/repositories

    Home
    http://localhost:3001

    Type s + enter at any time to create a snapshot of the database
    Watching...

  10% building 1/1 modules 0 activeℹ ｢wds｣: Project is running at http://192.168.0.102:3000/
  ℹ ｢wds｣: webpack output is served from /
  ℹ ｢wds｣: Content not from webpack is served from /Users/mr.lemon/cl/CODE_CL/REACT/starter/public
  ℹ ｢wds｣: 404s will fallback to /index.html
  ℹ ｢wdm｣: Compiled successfully.
  ```

  ![x](https://user-gold-cdn.xitu.io/2019/10/27/16e0b714da2fedd5?w=1994&h=1238&f=png&s=68149)
  ![x](https://user-gold-cdn.xitu.io/2019/10/27/16e0b718e6eec7a5?w=2098&h=1386&f=png&s=120439)

> **以上仅仅阐述了 mock 这一环, 关于前后端分离这里推荐一个知乎问答 [Web 前后端分离的意义大吗？](https://www.zhihu.com/question/28207685)**

**[⬆ back to top](#)**

### 25. 单元测试 [jest](https://jestjs.io/)

> 单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。业内优秀的测试框架很多，这里直接选择 [jest](https://jestjs.io/)。

- **安装**

  ```sh
  $ yarn add -D jest                    # Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
  $ yarn add -D babel-jest              # Jest plugin to use babel for transformation
  $ yarn add -D enzyme                  # 一种用于 React 的 JavaScript 测试实用程序，可以更轻松地测试 React 组件的输出。您还可以操纵，遍历并以某种方式模拟给定输出的运行时。
  $ yarn add -D enzyme-adapter-react-16 # react 16 适配器
  $ yarn add -D identity-obj-proxy      # 模拟一个代理以启用 className 查找
  ```

- **新建用于存放测试用例的文件夹及 jest 配置文件**

  ```sh
  $ touch jest.config.js
  $ cd src && mkdir __tests__
  $ cd __tests__
  $ mkdir __mocks__ && mkdir ui && touch setup.js
  $ cd __mocks__ && touch fileMock.js
  $ cd ../ui && touch Loading.spec.js
  ```

- **配置 jest**

  ```js
  <!-- starter/jest.config.js -->

  module.exports = {
    testRegex: '(\\.)(test|spec)(\\.)jsx?$',
    // 处理静态文件
    // 样式表和图像等，这些文件在测试中无足轻重，因为我们可以安全地 mock 他们。
    // 模拟 CSS 模块，用类名查找模拟一个代理
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/src/__tests__/__mocks__/fileMock.js',
      '\\.(css|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    // 为转换源文件提供同步功能的模块
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    // 在每次测试之前配置或设置测试环境
    setupFiles: ['<rootDir>/src/__tests__/setupTests.js']
  };

  <!-- starter/src/__tests__/__mocks__/fileMock.js -->

  module.exports = 'test-file-stub';
  ```

- **注册 enzyme 适配器配置**

  ```js
  // starter/src/__tests__/setup.js

  import enzyme from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  enzyme.configure({ adapter: new Adapter() });
  ```

- **配置快捷运行命令**

  ```diff
  <!-- starter/package.json -->

    {
      ...

      "scripts": {
  -     "test": "echo \"Error: no test specified\" && exit 1",
  +     "test": "jest --config jest.config.js --no-cache",
        "server": "cross-env NODE_ENV=development webpack-dev-server --color --progress",
        "server:mock": "npm run mock & cross-env NODE_ENV=development MOCK=true webpack-dev-server --color --progress",
        "mock": "json-server mock/index.js --watch --port 3001",
        "build": "cross-env NODE_ENV=production webpack --color --progress",
        "lint": "npm run lint:style && npm run lint:script",
        "lint-fix": "npm run lint-fix:style && npm run lint-fix:script",
        "lint:script": "eslint --ext '.js,.jsx' src",
        "lint-fix:script": "npm run lint:script -- --fix",
        "lint:style": "stylelint 'src/**/*.css' 'src/**/*.scss' --syntax scss",
        "lint-fix:style": " npm run lint:style -- --fix",
        "prettier": "prettier --check --write 'src/**/*.{js,jsx,scss,css}' --config ./.prettierrc"
      },

      ...

    }
  ```

- **编写测试用例**

  ```js
  import React from 'react';
  import { shallow } from 'enzyme';
  import Loading from '../../components/Loading/Loading';

  describe('Loading 组件基础测试组合！', () => {
    it('<Loading /> 组件默认标题应该是 "loading..."', () => {
      const loading = shallow(<Loading />);
      expect(loading.find('span').text()).toBe('loading...');
    });
    it('<Loading /> 组件标题应该是 "加载中..."', () => {
      const loading = shallow(<Loading title='加载中...' />);
      expect(loading.find('span').text()).toBe('加载中...');
    });
  });
  ```

  > 这里的用例只做演示，在实际开发中要严格根据 UI 组件的功能编写用例。

- **运行测试**

  ```sh
  $ yarn test

  # 结果

  $ jest --config jest.config.js --no-cache
   PASS  src/__tests__/ui/Loading.spec.js
    Loading 组件基础测试组合！
      ✓ <Loading /> 组件默认标题应该是 "loading..." (7ms)
      ✓ <Loading /> 组件标题应该是 "加载中..." (1ms)

  Test Suites: 1 passed, 1 total
  Tests:       2 passed, 2 total
  Snapshots:   0 total
  Time:        1.66s
  Ran all test suites.
  ✨  Done in 2.44s.
  ```

- **说明**

  1. 编写测试用例很重要！以上仅仅论述了如何接入 jest 具体根据实际需求去写。
  2. 建议集中在私有工具函数及 UI 组件；至于业务，变动性太大就不建议写了！
  3. 关于测试用例，可参考行业内一些UI组件库，如：[element-UI](https://github.com/ElemeFE/element/blob/dev/test/unit/specs/alert.spec.js)、[antd](https://github.com/ant-design/ant-design/blob/master/tests/index.test.js)
  4. 推荐一篇文章 [前端单元测试实践](https://zhuanlan.zhihu.com/p/55960017?utm_source=wechat_session&utm_medium=social&utm_oi=805028452691488768)

  <br>

  > **try it!** 🍁

**[⬆ back to top](#)**

### 26. 部署上线

**[⬆ back to top](#)**

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
- [react-router](https://github.com/ReactTraining/react-router)
- [管理资源](https://webpack.docschina.org/guides/asset-management/#%E5%8A%A0%E8%BD%BD-images-%E5%9B%BE%E5%83%8F)
- [模块解析](https://webpack.docschina.org/configuration/resolve/#resolve-alias)
- [url-loader](https://github.com/webpack-contrib/url-loader)
- [@loadable/component](https://github.com/smooth-code/loadable-components)
- [eslint](https://github.com/eslint/eslint)
- [stylelint](https://github.com/stylelint/stylelint)
- [prettier](https://github.com/prettier/prettier)
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader)
- [babel-eslint](https://github.com/babel/babel-eslint)
- [airbnb/javascript](https://github.com/airbnb/javascript)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)
- [stylelint](https://stylelint.io)
- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [postcss-reporter](https://github.com/postcss/postcss-reporter)
- [prettier](https://github.com/prettier/prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [Prettier CLI](https://prettier.io/docs/en/cli.html)
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
- [pre-commit](https://github.com/pre-commit/pre-commit)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [Husky](https://github.com/typicode/husky)
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [Axios](https://github.com/axios/axios)
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [编写有弹性的组件](https://overreacted.io/zh-hans/writing-resilient-components/)
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)
- [json-server](https://github.com/typicode/json-server)
- [mockjs](http://mockjs.com/)
- [jest](https://jestjs.io/)
- [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
- [enzyme](https://github.com/airbnb/enzyme)
- [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16)
