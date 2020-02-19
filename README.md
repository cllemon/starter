# TypeScript

**🚧 改造中...**

## 与框架和构建工具进行集成 webpack、react

```sh
# 安装

# react

$ yarn add @types/react @types/react-dom # 使用@types/前缀表示我们额外要获取React和React-DOM的声明文件



# webpack

# awesome-typescript-loader可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码
# source-map-loader使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。
# 这就允许你在调试最终生成的文件时就好像在调试TypeScript源码一样。
$ yarn add -D typescript awesome-typescript-loader source-map-loader
```

```js

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },


  module: {
    rules: [
      {
        { test: /\.tsx?$/, loader: "ts-loader" },
        { test: /\.js$/, loader: "source-map-loader" }
      }
    ]
  }
}

```

## 书写配置文件 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}

```

## 转换到TypeScript文件

```js
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
```
