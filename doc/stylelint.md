# stylelint

  A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

## 安装

```sh
# https://stylelint.io/user-guide/configuration
# https://github.com/stylelint/stylelint
# https://github.com/stylelint/stylelint-config-standard
# https://github.com/postcss/postcss-reporter
# https://github.com/shinnn/vscode-stylelint

$ stylelint # vscode-plugin

$ yarn add -D stylelint # 强大的现代化 linter，可帮助您避免错误并在样式中强制执行约定。

$ yarn add -D stylelint-config-standard # Stylelint的标准可共享配置

$ yarn add -D postcss-reporter # 在控制台中记录PostCSS消息
```

## 配置

```js
// postcss.config.js

module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: true
    })
  ]
}

// .stylelintrc
{
  "rules": {
    "block-no-empty": true,                        // 禁止空块。  a { } => a { /* foo */ }
    "color-no-invalid-hex": true,                  // 禁止使用无效的十六进制颜色。 a { color: #00; } => a { color: #000; }
    "declaration-colon-space-after": "always",     // 在冒号声明后需要一个空格或禁止使用空格。 a { color:pink } => a { color: pink }
    "declaration-colon-space-before": "never",     // 在冒号之前需要一个空格或禁止空格。 a { color : pink } => a { color: pink }
    "function-comma-space-after": "always",        // 在功能的逗号后面需要一个空格或不允许空格。 a { transform: translate(1,1) } => a { transform: translate(1, 1) }
    "function-url-quotes": "always",               // 要求或禁止使用网址引号 a { background: url(x.jpg) } => a { background: url("x.jpg") }
    "media-feature-colon-space-after": "always",   // 媒体功能中的冒号后需要单个空格或不允许空格。@media (max-width:600px) {} => @media (max-width: 600px) {}
    "media-feature-colon-space-before": "never",   // 媒体功能中的冒号之前需要单个空格或不允许使用空格。@media (max-width :600px) {} => @media (max-width:600px) {}
    "media-feature-name-no-vendor-prefix": true,   // 禁止使用媒体功能名称的供应商前缀。@media (-webkit-min-device-pixel-ratio: 1) {} => @media (min-resolution: 96dpi) {}
    "max-empty-lines": 5,                          // 限制相邻的空行数。
    "number-leading-zero": "never",                // 小数部分小于或等于1的前导零。a { line-height: 0.5; } => a { line-height: .5; }
    "number-no-trailing-zeros": true,              // 禁止数字尾随零。a { top: 1.0px } => a { top: 1px }
    "property-no-vendor-prefix": true,             // 禁止使用属性的供应商前缀。a { -webkit-transform: scale(1); } => a { -webkit-transform: scale(1); }
    "at-rule-semicolon-newline-after": "always",   // 规则后的分号换行符 @import url("x.css"); a {} => @import url("x.css");\n a {}
    "selector-list-comma-space-before": "never",   // 选择器列表的逗号前需要一个空格或不允许空格 a ,b { color: pink; } => a, b { color: pink; }
    "selector-list-comma-newline-after": "always", // 选择器列表的逗号后需要换行符或不允许使用空格。a, b { color: pink; } => a,\n b { color: pink; }
    "string-quotes": "double",                     // 在字符串周围指定单引号或双引号。 a { content: 'x'; } => a { content: "x"; }
    "value-no-vendor-prefix": true                 // 禁止使用值的供应商前缀。a { display: -webkit-flex; } => a { display: flex; }
  }
}
```
