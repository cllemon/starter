# browserslist

  browserslist 在不同的前端工具之间共享目标浏览器和 node 版本的配置工具。
  使一些工具你的项目所支持的版本，例如这些工具 Autoprefixer，Stylelint 和 babel-preset-env

  Browserslist 的出现就是为了解决工具之间各自为战的情况，可以提供统一的配置。即共享项目中的目标浏览器环境信息。

## 配置

```js
// https://github.com/browserslist/browserslist
// https://aaronflower.github.io/essay/Browserslist.html

// package.json
"browserslist": {
  "production": [
    ">0.2%",                   // 支持市场份额大于 1% 的浏览器。
    "not dead",                // not(逻辑非)对 dead 取反，而浏览器被认为是 dead 条件是：最新的两个版本中发现其市场份额已经低于 0.5% 并且 24 个月内没有任务官方支持和更新了。
    "not op_mini all"          // OperaMini or op_mini for Opera Mini.
  ],
  "development": [
    "last 1 chrome version",   // 浏览器版本查询范围, chrome最近的一个版本
    "last 1 firefox version",
    "last 1 safari version"
  ]
}

// .browserslistrc
[production]

> .2%
not dead
not op_mini all

[development]

last 1 chrome version
last 1 firefox version
last 1 safari version
```
