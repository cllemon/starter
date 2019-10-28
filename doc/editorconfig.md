# editorconfig

`EditorConfig` 可以帮助开发者在不同的编辑器和 `IDE` 之间定义和维护一致的代码风格。

```s
# http://editorconfig.org

root = true                       # 表明是最顶层的配置文件，发现设为 true 时，才会停止查找.editorconfig 文件。

[*]
charset = utf-8
indent_style = space              # tab 为 hard-tabs，space 为 soft-tabs。
indent_size = 2                   # 规定每级缩进的列数和 soft-tabs 的宽度（空格数）。如果设定为 tab，则会使用 tab_width 的值。
end_of_line = lf                  # 定义换行符，支持 lf(UNIX/Linux采用换行符 LF 表示下一行)、cr(MAC OS系统)则采用回车符 CR 表示下一行) 和 crlf。
insert_final_newline = true       # 设为 true 表明使文件以一个空白行结尾，false 反之
trim_trailing_whitespace = true   # 设为 true 表示会除去换行行首的任意空白字符，false 反之。

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
