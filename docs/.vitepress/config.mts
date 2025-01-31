import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sunset Manor",
  description: "Plane of Euthymia",

  // markdown 配置
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
  },

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/idukelu.png',
    outline: 'deep',
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Golang', link: '/golang/basics/go-install' }
    ],

    // 侧边栏
    sidebar: {
      '/golang/': [
        {
          items: [
            { text: '下载安装', link: '/golang/basics/go-install' },
            { text: '环境变量', link: '/golang/basics/go-env' },
            {
              text: '每日一库',
              collapsed: true,
              items: [
                { text: 'gin', link: '/golang/dailyiku/gin' }
              ]
            },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
