# 时间格式化

## 安装

```sh
# https://github.com/you-dont-need/You-Dont-Need-Momentjs

$ yarn add dayjs # moment 包太大
```

## 使用

```js
import dayjs from 'dayjs';

// 当前时间
dayjs();

// 格式化
dayjs().format('YYYY-MM-DD HH:mm:ss');
```
