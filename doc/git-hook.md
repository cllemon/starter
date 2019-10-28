# git hooks - `pre-commit`

## 安装

```sh
# https://github.com/typicode/husky

$ yarn add -D pre-commit #  自动在您的git储存库中安装git pre-commit脚本，该脚本在pre-commit上运行您的`npm test`

```

## 配置

```json

{
  "pre-commit": [
    "lint-fix",
  ]
}

```
