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

### 1. 版本管理（git）

```sh
$ 如何安装 ?

# https://git-scm.com/downloads

$ 如何使用 ？

# https://git-scm.com/doc || git --help
```

### 2. node、npm 和 yarn

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

# mkdir starter & npm init
```

#### `初始工程目录` 与 `package.json` 的信息 ✅

> 工程目录

```
└── starter
    ├── LICENSE
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

### 3. editorconfig
