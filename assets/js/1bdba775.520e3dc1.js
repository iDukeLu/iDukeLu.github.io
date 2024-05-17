"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[5500],{2574:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>u,contentTitle:()=>h,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=o(5893),n=o(1151);const t={title:"oh-my-zsh \u62a5\u9519\uff1a\u63d0\u793a\u68c0\u6d4b\u5230\u4e0d\u5b89\u5168\u7684\u5b8c\u6210\u76f8\u5173\u76ee\u5f55",authors:"Duke Lu",date:new Date("2018-05-05T00:00:00.000Z"),tags:["oh-my-zsh"]},h=void 0,i={permalink:"/blog/2018/oh-my-zsh-unsafe",source:"@site/blog/2018/oh-my-zsh-unsafe.md",title:"oh-my-zsh \u62a5\u9519\uff1a\u63d0\u793a\u68c0\u6d4b\u5230\u4e0d\u5b89\u5168\u7684\u5b8c\u6210\u76f8\u5173\u76ee\u5f55",description:"\u95ee\u9898",date:"2018-05-05T00:00:00.000Z",formattedDate:"2018\u5e745\u67085\u65e5",tags:[{label:"oh-my-zsh",permalink:"/blog/tags/oh-my-zsh"}],readingTime:2.645,hasTruncateMarker:!0,authors:[{name:"Duke Lu",title:"Golang Development Engineer",url:"https://github.com/idukelu",imageURL:"https://github.com/idukelu.png",key:"Duke Lu"}],frontMatter:{title:"oh-my-zsh \u62a5\u9519\uff1a\u63d0\u793a\u68c0\u6d4b\u5230\u4e0d\u5b89\u5168\u7684\u5b8c\u6210\u76f8\u5173\u76ee\u5f55",authors:"Duke Lu",date:"2018-05-05T00:00:00.000Z",tags:["oh-my-zsh"]},unlisted:!1,prevItem:{title:"\u8bbf\u95ee Redis\uff0c\u63d0\u793a\u8fdb\u5165\u4fdd\u62a4\u6a21\u5f0f",permalink:"/blog/2018/redis-protected-mode"},nextItem:{title:"Markdown \u5907\u5fd8\u5f55",permalink:"/blog/2018/markdown-memo"}},u={authorsImageUrls:[void 0]},c=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:2},{value:"\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\uff1a\u4fee\u6539\u76f8\u5173\u6587\u4ef6\u5939\u6743\u9650",id:"\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u4fee\u6539\u76f8\u5173\u6587\u4ef6\u5939\u6743\u9650",level:3},{value:"\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6cd5\uff1a\u8bbe\u7f6e\u53d8\u91cf ZSH_DISABLE_COMPFIX=true",id:"\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6cd5\u8bbe\u7f6e\u53d8\u91cf-zsh_disable_compfixtrue",level:3}];function l(e){const s={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,r.jsxs)(s.p,{children:["\u8fd0\u884c\u547d\u4ee4\u65f6\uff0c",(0,r.jsx)(s.code,{children:"oh-my-zsh"})," \u5192\u51fa\u4e0b\u9762\u4e00\u5927\u5806\u63d0\u793a\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'[oh-my-zsh] Insecure completion-dependent directories detected:\ndrwxr-xr-x   16 duke  staff   512 Jul 14 10:14 /Users/duke/.oh-my-zsh\ndrwxr-xr-x  250 duke  staff  8000 Jul 14 10:14 /Users/duke/.oh-my-zsh/plugins\ndrwxr-xr-x    4 duke  staff   128 Jul 14 10:14 /Users/duke/.oh-my-zsh/plugins/git\ndrwxr-xr-x    3 duke  staff    96 Jun 17 11:33 /usr/local/share/zsh\ndrwxr-xr-x    6 duke  staff   192 Oct  3 10:04 /usr/local/share/zsh/site-functions\nlrwxr-xr-x    1 duke  staff    39 Jun 17 11:37 /usr/local/share/zsh/site-functions/_brew -> ../../../Homebrew/completions/zsh/_brew\nlrwxr-xr-x    1 duke  staff    44 Jun 17 11:37 /usr/local/share/zsh/site-functions/_brew_cask -> ../../../Homebrew/completions/zsh/_brew_cask\nlrwxr-xr-x    1 duke  staff    58 Oct  3 10:04 /usr/local/share/zsh/site-functions/_git -> ../../../Cellar/git/2.19.0_2/share/zsh/site-functions/_git\n\n[oh-my-zsh] For safety, we will not load completions from these directories until\n[oh-my-zsh] you fix their permissions and ownership and restart zsh.\n[oh-my-zsh] See the above list for directories with group or other writability.\n\n[oh-my-zsh] To fix your permissions you can do so by disabling\n[oh-my-zsh] the write permission of "group" and "others" and making sure that the\n[oh-my-zsh] owner of these directories is either root or your current user.\n[oh-my-zsh] The following command may help:\n[oh-my-zsh]     compaudit | xargs chmod g-w,o-w\n\n[oh-my-zsh] If the above didn\'t help or you want to skip the verification of\n[oh-my-zsh] insecure directories you can set the variable ZSH_DISABLE_COMPFIX to\n[oh-my-zsh] "true" before oh-my-zsh is sourced in your zshrc file.\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u89e3\u51b3",children:"\u89e3\u51b3"}),"\n",(0,r.jsx)(s.p,{children:"\u95ee\u9898\u7684\u63cf\u8ff0\u4e2d\uff0c\u5176\u5b9e\u5df2\u7ecf\u7ed9\u4e86\u6211\u4eec\u89e3\u51b3\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'[oh-my-zsh] To fix your permissions you can do so by disabling\n[oh-my-zsh] the write permission of "group" and "others" and making sure that the\n[oh-my-zsh] owner of these directories is either root or your current user.\n[oh-my-zsh] The following command may help:\n[oh-my-zsh]     compaudit | xargs chmod g-w,o-w\n\n[oh-my-zsh] If the above didn\'t help or you want to skip the verification of\n[oh-my-zsh] insecure directories you can set the variable ZSH_DISABLE_COMPFIX to\n[oh-my-zsh] "true" before oh-my-zsh is sourced in your zshrc file.\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u8981\u4fee\u590d\u6743\u9650\uff0c\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u201cgroup\u201d\u548c\u201cothers\u201d\u7684\u5199\u5165\u6743\u9650\u5e76\u786e\u4fdd\u8fd9\u4e9b\u76ee\u5f55\u7684\u6240\u6709\u8005\u662froot\u7528\u6237\u6216\u5f53\u524d\u7528\u6237\u6765\u4fee\u590d\u6743\u9650\u3002\n\u4ee5\u4e0b\u547d\u4ee4\u53ef\u80fd\u6709\u6240\u5e2e\u52a9\uff1a\ncompaudit | xargs chmod g-w\uff0co-w\n\u5982\u679c\u4e0a\u9762\u6ca1\u6709\u5e2e\u52a9\uff0c\u6216\u8005\u4f60\u60f3\u8df3\u8fc7\u4e0d\u5b89\u5168\u76ee\u5f55\u7684\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684zshrc\u6587\u4ef6\u4e2d\u627e\u5230oh-my-zsh\u4e4b\u524d\u5c06\u53d8\u91cfZSH_DISABLE_COMPFIX\u8bbe\u7f6e\u4e3a\u201ctrue\u201d\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u4fee\u6539\u76f8\u5173\u6587\u4ef6\u5939\u6743\u9650",children:"\u7b2c\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\uff1a\u4fee\u6539\u76f8\u5173\u6587\u4ef6\u5939\u6743\u9650"}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u4ee5\u4e0a\u63d0\u793a\u7684\u6587\u4ef6\u5939\u4fee\u6539\u6743\u9650\uff08\u6839\u636e\u5177\u4f53\u63d0\u793a\u4fee\u6539\uff09"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"chmod 755 /Users/duke/.oh-my-zsh\nchmod 755 /Users/duke/.oh-my-zsh/plugins\nchmod 755 /Users/duke/.oh-my-zsh/plugins/git\nchmod 755 /usr/local/share/zsh/site-functions\nchmod 755 /usr/local/share/zsh/site-functions/_brew\nchmod 755 /usr/local/share/zsh/site-functions/_brew_cask\nchmod 755 /usr/local/share/zsh/site-functions/_git\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6cd5\u8bbe\u7f6e\u53d8\u91cf-zsh_disable_compfixtrue",children:"\u7b2c\u4e8c\u79cd\u89e3\u51b3\u65b9\u6cd5\uff1a\u8bbe\u7f6e\u53d8\u91cf ZSH_DISABLE_COMPFIX=true"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5728.zshrc\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u6dfb\u52a0 ",(0,r.jsx)(s.code,{children:"ZSH_DISABLE_COMPFIX=true"})]}),"\n",(0,r.jsx)(s.li,{children:"\u8fd0\u884csource\u547d\u4ee4\uff0c\u91cd\u65b0\u52a0\u8f7d.zshrc\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"source ~/.zshrc\n"})})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>h});var r=o(7294);const n={},t=r.createContext(n);function h(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);