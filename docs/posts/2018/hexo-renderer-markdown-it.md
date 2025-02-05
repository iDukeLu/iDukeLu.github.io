---
title: Hexo 插件详解：hexo-renderer-markdown-it
authors: Duke Lu
date: 2018-04-21
tags: [hexo, hexo-plugin]
---

# Hexo 插件详解：hexo-renderer-markdown-it

## 简介
`hexo-renderer-markdown-it` 是一款用于 Markdown 解析和渲染的插件。
- 用于替换 Hexo 默认自带的 Markdown 渲染器。
- 提供了更丰富的 Markdown 解析和渲染。

## 安装
注意：请确保你在 Hexo 主目录下进行以下操作。
1. 卸载 Hexo 默认自带的 Markdown 渲染器
```
npm un hexo-renderer-marked --save
```
2. 安装 `hexo-renderer-markdown-it` 插件
```
npm i hexo-renderer-markdown-it --save
```

## 配置
`hexo-renderer-markdown-it` 的所有配置，均在 Hexo 的主要配置文件 `_config.yml` 中进行配置。
配置的方式，主要分为：
- 简单配置（支持三种配置级别，开箱即用）
- 高级配置（更详细的定制，渲染器、插件、锚）

### 简单配置
`hexo-renderer-markdown-it` 提供三种简单配置方式（配置级别）`zero`、`default`、`commonmark`。
在 Hexo 的 `_config.yml` 文件中配置以下内容：
```
# Markdown-it config
#markdown: 'zero'
#markdown: 'default'
markdown: 'commonmark'
```
每种简单配置有其默认的一些设置。更多个性化配置，请参考：高级配置。
- zero：禁用大多数解析器功能。仅支持斜体和粗体，甚至不支持所有原始Markdown功能。
- default（GFM）：解析器的行为类似于github规范。
- commonmark：提供比Zero预设更多的功能。 此设置将强制插件使用最新的CommonMark规范。

警告：选择一种简单配置，将阻止您使用任何附带的插件。

### 高级配置
`hexo-renderer-markdown-it` 提供的高级配置，是对简单配置的详细定制。
在 Hexo 的 `_config.yml` 文件中配置以下内容（官方提供的完整配置，没有特殊需要不用再次修改）：
```
# Markdown-it config
markdown:
  render:
    html: true
    xhtmlOut: false
    breaks: true
    linkify: true
    typographer: true
    quotes: '“”‘’'
  plugins:
    - markdown-it-abbr
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-sub
    - markdown-it-sup
  anchors:
    level: 2
    collisionSuffix: 'v'
    permalink: true
    permalinkClass: header-anchor
    permalinkSymbol: ¶
```

### 高级配置详解
#### 渲染器（render）
```
# Markdown-it config
markdown:
  render:
    html: true
    xhtmlOut: false
    breaks: true
    linkify: true
    typographer: true
    quotes: '“”‘’'
```
- html：定义文档中的HTML内容是否应转义或传递给最终结果。
```
html: true # 不转义 HTML 内容
html: false # 转义 HTML 内容，使标签作为文本输出
```

- xhtmlOut：定义解析器是否将导出完全兼容XHTML的标记。
```
xhtmlOut: true # 必须使用完全的 XHTML 代码，换行必须为 <br/>
xhtmlOut: false # 不必必使用完全的 XHTML 代码，换行可以为 <br>
```
- breaks：使源文件中的换行符被解析为&lt;br&gt;标记。每次按Enter键都会创建换行符。
```
breaks: true # 每次会车换行相当于一个 <br/> 标签
breaks: false # Pa每次会车换行会被忽略
```
- linkify：解析器能够将直接粘贴到文本中的链接内联。
```
linkify: true # 类似链接的文本，作为链接输出
linkify: false # 类似链接的文本，依然作为文本输出
```
- typographer：可以替换常见的排版元素。
```
typographer: true # 替换常见的排版元素
typographer: false # 不替换常见的排版元素
```
- quotes：单引号、双引号如何被替换
```
quotes: '“”‘’' # 'single'、"double" 变成 ‘single’、“double”
quotes: '«»“”' # 'single'、"double" 变成 “single”、«single»
```

#### 插件（plugins）
`hexo-renderer-markdown-it` 默认集成5个 `markdown-it` 插件
```
# Markdown-it config
markdown:
  plugins:
    - markdown-it-abbr
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-sub
    - markdown-it-sup
```
- markdown-it-abbr：缩写插件
```
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

The HTML specification
is maintained by the W3C.
```
- markdown-it-footnote：脚注插件
```
basic footnote[^1]
here is an inline footnote[^2](inline footnote)
and another one[^3]
and another one[^4]

[^1]: basic footnote content
[^3]: paragraph
footnote
content
[^4]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)
```
- markdown-it-ins：插入插件（下划线插件）
```
++inserted++ => <ins>inserted</ins>
```
- markdown-it-sub：下标插件
```
H~2~0 => H<sub>2</sub>O
```
- markdown-it-sup：上标插件
```
29^th^ => 29<sup>th</sup>
```

#### 锚（anchors）
可能自己不会用，因此，没太关注这个功能
```
# Markdown-it config
markdown:
  anchors:
    level: 2
    collisionSuffix: 'v'
    permalink: true
    permalinkClass: header-anchor
    permalinkSymbol: ¶
```
- level：生成 Heading ID 的标题等级
- collisionSuffix：Heading ID 重复时，数字的后缀
- permalink：'true'，则创建一个锚标记，除标题外还有一个固定链接
- permalinkClass：用于固定链接锚标记的样式
- permalinkSymbol：用于固定链接标记的符号

- - -

参考：
[markdown-it of GitHub](https://github.com/markdown-it)
[hexo-renderer-markdown-it GitHub Wiki](https://github.com/hexojs/hexo-renderer-markdown-it/wiki)