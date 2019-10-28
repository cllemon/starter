# Mock

## 安装

```sh
# https://github.com/typicode/json-server
# https://github.com/nuysoft/Mock/wiki/Getting-Started

$ yarn add -D mockjs
$ yarn add -d json-server
```

## 配置

```json
// package.json
{
  "scripts": {
    "mock": "json-server mock/index.js --watch --port 3001",
    "server:mock": "npm run mock && npm run server"
  }
}

// webpack.config.js
{
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://localhost:3001'
      }
    }
  }
}
```

## 使用

```js
import Mock from 'mockjs';

const data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})
```
