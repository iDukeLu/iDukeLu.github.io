---
title: Hexo 表格样式调整
authors: Duke Lu
date: 2018-04-20
tags: [hexo, hexo-plugin]
---

# Hexo 表格样式调整

Markdown 语法中，默认的表格样式为：每列等分，这样不仅影响美观，还会因为某列过长而把表格挤变形
**解决办法**很简单：在 md 文件中添加 css 样式来即可
```
<style>
table th:nth-of-type(1){
width: 20%;
}
table th:nth-of-type(2){
width: 20%
;
}
table th:nth-of-type(3){
width: 60%;
}
</style>

*Java Reference Documentation*
| RELEASE | CODENAME | DOCUMENTATION |
| :-: | :-: | :-: |
| 10 | - | [JDK Documentation](https://docs.oracle.com/javase/10/) &emsp;&#124;&emsp; [Java SE API](https://docs.oracle.com/javase/10/docs/api/) &emsp;&#124;&emsp; Java EE API |
```