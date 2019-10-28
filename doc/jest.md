# jest + enzyme

## 安装

```sh
# https://github.com/facebook/jest
# https://jestjs.io/docs/zh-Hans/tutorial-react
# https://github.com/babel/babel-jest
# https://zhuanlan.zhihu.com/p/55960017?utm_source=wechat_session&utm_medium=social&utm_oi=805028452691488768
# https://www.npmjs.com/package/enzyme


$ yarn add -D jest
$ yarn add -D babel-jest # jest 预处理器
$ yarn add -D react-test-renderer # 测试完全渲染的React组件的轻量级解决方案
$ yarn add -D enzyme # Enzyme是一种用于React的JavaScript测试实用程序，可以更轻松地测试React组件的输出。您还可以操纵，遍历并以某种方式模拟给定输出的运行时。
$ yarn add -D enzyme-adapter-react-16 # 1
$ yarn add -D identity-obj-proxy # 模拟一个代理以启用className查找
```

## 配置

```json

{
  "jest": {
    "modulePaths": ["src"],
    "moduleDirectories": ["node_modules"],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
    }
  }
}


```

## React组件单元测试规范

1. 测试文件统一在src/__tests__目录中维护

主要是Follow Facebook的目录命名规范

2. 测试文件命名与React组件命名保持一致，后面以.spec.js结尾

主要是Follow Facebook的测试文件命名规范，比如：Form.spec.js

3. 测试用例使用test("功能描述",()=>{})函数描述用例单元

针对最小功能单元的测试用例主要集中在该函数内

4. 一组功能集合测试使用describe("功能集合描述",()=>{})函数描述功能集合

一个测试文件只能描述一个功能集合，这个功能集合可以是一个React组件，也可以是一个cjs模块

5. UI测试套件统一使用enzyme

使用enzyme可以借助jquery like的选择器方便的对DOM渲染结果做校验

6. React组件测试用例必须包含

API属性覆盖性测试用例
DOM快照比对，幂等校验
私有Utils函数测试用例，千万不能忽略Utils函数的测试用例，很多时候，bug就出在这上面

7. 对DOM结构做用例校验

一个标准的React组件测试用例的输入往往是组件配置或交互事件，输出则是具体的DOM结构，我们的用例校验也都是对DOM结构做用例校验

8. bugfix/feature addtion必须要有对应的单元测试用例才能发布

9. 团队协作，MR/PR必须要有对应的单元测试用例才能发布
