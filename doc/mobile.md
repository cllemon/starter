# 移动端适配

## 安装

```sh
# https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md

$ yarn add -D postcss-px-to-viewport
```

## 配置

```js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,                           // 设计稿的视口宽度
      viewportHeight: 812,                          // 设计稿的视口高度
      unitPrecision: 5,                             // 单位转换后保留的精度
      viewportUnit: 'vw',                           // 希望使用的视口单位
      fontViewportUnit: 'vw',                       // 字体使用的视口单位
      selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1,                             // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false,                            // 媒体查询里的单位是否需要转换单位
      exclude: [/node_modules/]                     // 需要排除的
    }
  }
}
```
