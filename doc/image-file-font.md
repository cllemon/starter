# image and file and fonts and media

## 安装

```sh
# https://www.npmjs.com/package/url-loader
# https://github.com/webpack-contrib/file-loader

$lemon yarn add -D url-loader  # A loader for webpack which transforms files into base64 URIs
$lemon yarn add -D file-loader # The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

```

## 配置

```js
{
  module: {
    rules: [
      // 图片
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096, // 小于等于 4K 的图片会被转成 base64 编码，直接插入HTML中，减少 HTTP 请求
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            },
          },
        ],
      },
      // svg
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ],
  },
}

```
