import { defineConfig } from 'vitepress';
import { DefaultTheme } from 'vitepress';
import autoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { figure } from '@mdit/plugin-figure';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Duke's Blog",
  description: "不积跬步，无以至千里",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  sitemap: {
    hostname: 'https://idukelu.com'
  },

  // markdown 配置
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    config: (md) => { 
      // 图片描述
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }) 
    },
  },

  

  vite: {
    plugins: [
      // 自动生成侧边栏插件
      autoSidebar({
        titleFromFile: true,
        collapsed: false,
        ignoreIndexItem: true,
        sideBarItemsResolved: (data: DefaultTheme.SidebarItem[]) => {
          // 按照数字进行排序
          return data.sort((a, b) => {
            // 提取数字
            const aMatch = a.text?.match(/^(\d+)\./);
            const bMatch = b.text?.match(/^(\d+)\./);
            // 按数字排序
            const aNumber = aMatch ? parseInt(aMatch[1], 10) : 0;
            const bNumber = bMatch ? parseInt(bMatch[1], 10) : 0;
            return aNumber - bNumber;
          });
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
  },

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/idukelu.png',
    outline: {
      level: [2, 3], // 右侧边栏标题级别
      label: '页面导航', // 右侧边栏的标题
    }, 
    externalLinkIcon: true, // 链接旁显示外部链接图标
    
    // 头部
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iDukeLu' }
    ],
    nav: [
      { text: 'Golang', link: '/golang/' },
      { text: '云原生', link: '/cloudnative/' },
      { text: '算法', link: '/algorithm/' },
    ],
    search: {
      provider: 'local'
    },
    
    // 尾部
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'medium',
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Duke Lu'
    },
  }
})
