# optimization

  将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk。

- webpack会根据以下条件自动分割数据块:
  - 可以共享新的块，或者模块来自node_modules文件夹
  - 新块将大于30kb(在min+gz之前)
  - 当按需加载块时，并行请求的最大数量将小于或等于5
  - 初始页面加载时并行请求的最大数量将低于或等于3
  - 当试图满足后两个条件时，更大的块是首选。

## 安装

```sh
# https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
# https://github.com/mishoo/UglifyJS2#compress-options

$ yarn add -D uglifyjs-webpack-plugin
$ yarn add -D optimize-css-assets-webpack-plugin # 优化 css
```

## 配置

```js
// https://webpack.docschina.org/guides/code-splitting/#防止重复-prevent-duplication-
// https://webpack.docschina.org/plugins/split-chunks-plugin/

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

{
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        exclude: /node_modules/, // 要排除的文件。
        sourceMap: false, // 使用源映射将错误消息位置映射到模块（这会减慢编译速度）。如果您使用自己的缩小功能，请阅读缩小部分以正确处理源地图。
        cache: true, // 启用文件缓存。缓存目录的默认路径：node_modules / .cache / uglifyjs-webpack-plugin。
        parallel: true, // 使用多进程并行运行可提高构建速度。并发运行的默认数量：os.cpus().length - 1.
        uglifyOptions: {
          compress: {
            // 关闭增益较小的标志以加快缩小速度
            collapse_vars: false, // 折叠一次使用的 非常数-变量，允许副作用。
            comparisons: false, // 对二进制节点进行某些优化, 例如！（a <= b）→a> b尝试取反二进制节点，例如a =！b &&！c &&！d &&！e→a =！（b || c || d || e）等。
          }
        }, // UglifyJS minify 选项。
      })
    ],
    splitChunks: {
      chunks: 'all', // 这表明将选择哪些块进行优化。提供字符串时，有效值为all，async和initial。提供 'all' 功能特别强大，因为这意味着即使在异步和非异步块之间也可以共享块。
      automaticNameDelimiter: '~', // 默认情况下，webpack会使用块的来源和名称生成名称（例如vendor〜main.js）此选项可以指定用于生成名称的定界符。
      maxAsyncRequests: 5, // 按需加载时最大并行请求数。
      maxInitialRequests: 3, // 入口点的最大并行请求数。
      minChunks: 1, // 拆分前必须共享模块的最小块数。
      minSize: 30000, // 生成块的最小尺寸（以字节为单位）。
      maxSize: 0, // maxSize选项旨在与HTTP / 2和长期缓存一起使用。它增加了请求数量以实现更好的缓存。它还可以用于减小文件大小，以加快重建速度。
      name: true, // 拆分块的名称。提供true将自动基于块和缓存组密钥生成一个名称。提供字符串或函数将允许您使用自定义名称。如果名称与入口点名称匹配，则入口点将被删除。
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 控制此缓存组选择的模块。省略它会选择所有模块。它可以匹配绝对模块资源路径或块名称。匹配块名称时，将选择该块中的所有模块。
          priority: -10,
          // enforce: true, // 终为此缓存组创建块。
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 如果当前块包含已从主捆绑包中拆分出的模块，则将重用该模块，而不是生成新的模块。这可能会影响块的结果文件名。
        }
      }, // 缓存组可以继承和或覆盖 splitChunks 中的任何选项。但是只能在缓存组级别上配置测试，优先级和 reuseExistingChunk。要禁用任何默认缓存组，请将它们设置为false。
    }
  }
}

```

```

                   Asset       Size  Chunks                         Chunk Names
      css/0.2d71a695.css  882 bytes       0  [emitted] [immutable]  hello
      css/1.193611eb.css  612 bytes       1  [emitted] [immutable]  home
   css/main.352d279b.css  311 bytes       2  [emitted] [immutable]  main
       hello.f0bd4075.js   2.49 KiB       0  [emitted] [immutable]  hello
        home.7bd5c76a.js   1.35 KiB       1  [emitted] [immutable]  home
   img/logo.581fa1d8.png   8.38 KiB          [emitted]
              index.html  678 bytes          [emitted]
        main.f47b22f9.js   4.45 KiB       2  [emitted] [immutable]  main
   svg/logo.5d5d9eef.svg   2.61 KiB          [emitted]
vendors~main.c265a11e.js    158 KiB       3  [emitted] [immutable]  vendors~main

================================================================================
================================================================================

                   Asset       Size  Chunks                         Chunk Names
      css/0.2d71a695.css  882 bytes       0  [emitted] [immutable]  hello
      css/1.193611eb.css  612 bytes       1  [emitted] [immutable]  home
   css/main.352d279b.css  311 bytes       2  [emitted] [immutable]  main
       hello.071382ce.js   2.48 KiB       0  [emitted] [immutable]  hello
        home.2e73514e.js   1.35 KiB       1  [emitted] [immutable]  home
   img/logo.581fa1d8.png   8.38 KiB          [emitted]
              index.html  678 bytes          [emitted]
        main.e1a1bced.js   4.43 KiB       2  [emitted] [immutable]  main
   svg/logo.5d5d9eef.svg   2.61 KiB          [emitted]
vendors~main.e6be2fdb.js    158 KiB       3  [emitted] [immutable]  vendors~main

```
