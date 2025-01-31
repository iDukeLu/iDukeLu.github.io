# blog

## 快速建站
参考：https://vitepress.dev/zh/guide/getting-started
```shell
## 创建站点目录
blog_site=iDukeLu.github.io
mkdir $blog_site && cd $blog_site

## 初始化并配置站点
yarn add -D vitepress
yarn vitepress init
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  Sunset Manor
│
◇  Site description:
│  Plane of Euthymia
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run yarn run docs:dev and start writing.

## 本地调试
yarn docs:dev
```

## 部署 Github Pages
参考：https://vitepress.dev/zh/guide/deploy#github-pages
```shell
mkdir -p .github/workflows
touch deploy.yml ## 文件内容请参考链接
```