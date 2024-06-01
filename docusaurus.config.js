// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '黄昏别馆',
  tagline: "Sunset Manor",
  favicon: 'https://github.com/idukelu.png',

  // Set the production url of your site here
  url: 'https://idukelu.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iDukeLu', // Usually your GitHub org/user name.
  projectName: 'iDukeLu.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // For GitHub pages organization deployments, please provide the branch name.
  trailingSlash: true,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          breadcrumbs: true, 
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: '随笔',
          blogDescription: '随笔',
          postsPerPage: 3,
          blogSidebarTitle: '全部随笔',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  themes: [
    [
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en", "zh"],
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '黄昏别馆',
        logo: {
          alt: 'Sunset Manor',
          src: 'https://github.com/idukelu.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'GolangSidebar',
            label: 'Golang',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'CloudNativeSidebar',
            label: '云原生',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'DatabaseSidebar',
            label: '数据库',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'AlgorithmsSidebar',
            label: '算法',
          },
          {to: '/blog', label: '随笔', position: 'left'},
          {
            type: 'dropdown',
            label: '其他',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'JavaSidebar',
                label: 'Java',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} iDukeLu, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['go', 'bash', 'ebnf'],
        magicComments: [
          {
            className: "code-block-highlighting-line",
            line: 'This will highlighting',
          }
        ]
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    }),
};

export default config;
