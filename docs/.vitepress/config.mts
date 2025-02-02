import { defineConfig } from 'vitepress'
import { DefaultTheme } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Duke's Blog",
  description: "不积跬步，无以至千里",
  lang: 'zh-CN',
  cleanUrls: true,

  // markdown 配置
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
  },

  vite: {
    plugins: [
      // 自动生成侧边栏插件
      AutoSidebar({
        titleFromFileByYaml: true,
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
    ]
  },

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/idukelu.png',
    outline: [2, 3], // 大纲显示标题级别
    externalLinkIcon: true, // 链接旁显示外部链接图标
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 导航栏
    nav: [
      { text: 'Golang', link: '/golang/' },
      { text: '云原生', link: '/cloudnative/' },
      { text: '算法', link: '/algorithm/' },
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iDukeLu' }
    ]
  }
})
