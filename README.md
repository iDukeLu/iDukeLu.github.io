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

## 样式美化
参考：https://lumen.theojs.cn/guide/getting-started

### 徽标
已有徽标：
- https://github.com/Ileriayo/markdown-badges
- https://github.com/Envoy-VC/awesome-badges

徽标制作：https://shields.io/badges

### 图片描述

```
yarn add -D @mdit/plugin-figure
```

插件配置
```
import { defineConfig } from 'vitepress'

import { figure } from '@mdit/plugin-figure'

export default defineConfig({
  markdown: { 
    config: (md) => { 
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }) 
    } 
  } 
  ...
})
```

主题导入
```
// theme/index.ts
import '@theojs/lumen/pic'
```

### 图片缩放

```
yarn add -D medium-zoom
```

写入配置
```
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

export default {
    extends: DefaultTheme,
    setup() {
      const route = useRoute();
      const initZoom = () => {
        // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
        mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      };
      onMounted(() => {
        initZoom(); 
      }); 
      watch(  
        () => route.path,
        () => nextTick(() => initZoom())
      );
    },
}
```

添加样式，防止放大后，背后没有遮盖
```
/* .vitepress/theme/style/var.css */
/* 图片缩放 */
.medium-zoom-overlay {
    z-index: 30;
}
.medium-zoom-image {
    z-index: 9999 !important; /* 给的值是21，但是实测盖不住，直接999 */
}
```