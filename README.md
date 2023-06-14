# plane-euthymia
基于 Docusaurus 搭建的静态文档站。

## 添加插件
### 搜索插件
使用支持中文搜索的插件：https://github.com/easyops-cn/docusaurus-search-local

1. 安装插件
```
npm install --save @easyops-cn/docusaurus-search-local
# or
yarn add @easyops-cn/docusaurus-search-local
```

2. 配置插件
```
// In your `docusaurus.config.js`:
module.exports = {
  // ... Your other configurations.
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};
```

## 部署 GitHub Pages

### 部署配置
修改 *docusaurus.config.js* 配置
```
module.exports = {
  // ...
  url: 'https://idukelu.github.io',  // Your website URL
  baseUrl: '/plane-euthymia',        // For GitHub pages deployment, it is often '/<projectName>/'
  organizationName: 'iDukeLu',       // Usually your GitHub org/user name.
  projectName: 'plane-euthymia',     // Usually your repo name.
  trailingSlash: false,
  // ...
};
```
更多可参考：https://docusaurus.io/zh-CN/docs/deployment#docusaurusconfigjs-settings

使用自定义域名
1. 在 static 目录下添加 CNAME 文件
```
cat > ./static/CNAME << EOF
idukelu.com
EOF
```

2. 根据官方文档说明修改 *docusaurus.config.js* 配置
> When using a custom domain, you should be able to move back from baseUrl: '/projectName/' to baseUrl: '/', and also set your url to your custom domain.
```
module.exports = {
  // ...
  url: 'https://idukelu.com',  // Your website URL
  baseUrl: '/',        // For GitHub pages deployment, it is often '/<projectName>/'
  organizationName: 'iDukeLu',       // Usually your GitHub org/user name.
  projectName: 'plane-euthymia',     // Usually your repo name.
  trailingSlash: false,
  // ...
};
```
更多可参考：https://docusaurus.io/zh-CN/docs/deployment#github-pages-overview

### 部署命令
使用 SSH 进行部署，避免每次都输密码
```
GIT_USER=idukelu USE_SSH=true yarn deploy
```
其他环境参数可参考：https://docusaurus.io/zh-CN/docs/deployment#environment-settings

为了方便使用，可以在 *package.json* 中添加对应的脚本命令
```
 "scripts": {
    ...
    "deploy": "docusaurus deploy",
    "gh-deploy": "GIT_USER=idukelu USE_SSH=true docusaurus deploy",
    ...
  },
```