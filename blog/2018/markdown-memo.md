---
title: Markdown 备忘录
authors: Duke Lu
date: 2018-04-08
tags: [markdown]
---

## 基础语法
基础语法是 John Gruber 的原始设计文档中概述的元素。 
所有 Markdown 应用程序都支持这些元素。

<!--truncate--> 

| 元素     | Markdown 语法                                      |
| :------- | :------------------------------------------------- |
| 标题     | # H1<br/>## H2<br/>### H3                          |
| 粗体     | \*\*bold text\*\*                                  |
| 斜体     | \*italicized text\*                                |
| 引用     | > blockquote                                       |
| 代码     | &#96;code&#96;                                     |
| 水平线   | \-\-\-                                             |
| 有序列表 | 1. First item<br/>2. Second item<br/>3. Third item |
| 无序列表 | - First item<br/>- Second item<br/>- Third item    |
| 链接     | `[title](https://www.example.com)`               |
| 图片     | \!\[alt text\]\(image.jpg\)                        |


## 扩展语法
扩展语法通过添加其他功能扩展了基本语法。 
并非所有 Markdown 应用程序都支持这些元素。

| 元素     | Markdown 语法                                                                                                       |
| :------- | :------------------------------------------------------------------------------------------------------------------ |
| 表格     | &#124; Syntax &#124; Description &#124;<br/>&#124; \- &#124; \- &#124;<br/>&#124; Header &#124; Title &#124;        |
| 代码块   | \`\`\` <br/>\{<br/>&emsp;"firstName": "John",<br/>&emsp;"lastName": "Smith",<br/>&emsp;"age": 25<br/>\}<br/> \`\`\` |
| 脚注     | Here's a sentence with a footnote. \[^1\] <br/> \[^1\]: This is the footnote.                                       |
| 标题 ID  | \#\#\# My Great Heading \{\#custom-id\}                                                                             |
| 删除线   | &#126;&#126;The world is flat.&#126;&#126;                                                                          |
| 任务列表 | \- \[x\] Write the press release<br/>\- \[ \] Update the website<br/>\- \[ \] Contact the media                     |


## 转义字符
可以用反斜线 `\` 进行转义的字符

| 名称   | 字符 | 名称 | 字符 |
| :----- | :--: | :--- | :--: |
| 感叹号 |  \!  | 刻度 |  \`  |
| 大括号 | \{\} | 井号 |  \#  |
| 中括号 | \[\] | 星号 |  \*  |
| 小括号 | \(\) | 加号 |  \+  |
| 反斜线 |  \\  | 减号 |  \-  |
| 下划线 |  \_  | 点   |  \.  |


不可以用反斜线 `\` 进行转义的字符

| 名称   |  字符  | HTML 转义字符 | HTML 实体编号 |
| :----- | :----: | :-----------: | :-----------: |
| 空格   |        |   `&nbsp;`    |   `&#160;`    |
| 小于   |  `<`   |    `&lt;`     |    `&#60;`    |
| 大于   |  `>`   |    `&gt;`     |    `&#62;`    |
| 双引号 |  `"`   |   `&quot;`    |    `&#34;`    |
| 单引号 |  `'`   |   `&apos;`    |    `&#39;`    |
| 和号   |  `&`   |    `&amp;`    |    `&#38;`    |
| 竖线   | &#124; |               |   `&#124;`    |
| 波浪线 | &#126; |               |   `&#126;`    |

---

更多参考：
[Markdown Guide/Cheat Sheet](https://www.markdownguide.org/cheat-sheet)