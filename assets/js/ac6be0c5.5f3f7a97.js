"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[6482],{2023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const l={title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",authors:"Duke Lu",date:new Date("2024-05-17T00:00:00.000Z"),tags:["\u7b97\u6cd5","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],sidebar_position:5},r=void 0,o={id:"algorithm/leetcode/\u6700\u957f\u56de\u6587\u5b50\u4e32",title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",description:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32 \u4e2d\u7b49",source:"@site/docs/algorithm/leetcode/5.\u6700\u957f\u56de\u6587\u5b50\u4e32.md",sourceDirName:"algorithm/leetcode",slug:"/algorithm/leetcode/\u6700\u957f\u56de\u6587\u5b50\u4e32",permalink:"/docs/algorithm/leetcode/\u6700\u957f\u56de\u6587\u5b50\u4e32",draft:!1,unlisted:!1,tags:[{label:"\u7b97\u6cd5",permalink:"/docs/tags/\u7b97\u6cd5"},{label:"\u53cc\u6307\u9488",permalink:"/docs/tags/\u53cc\u6307\u9488"},{label:"\u5b57\u7b26\u4e32",permalink:"/docs/tags/\u5b57\u7b26\u4e32"},{label:"\u52a8\u6001\u89c4\u5212",permalink:"/docs/tags/\u52a8\u6001\u89c4\u5212"}],version:"current",sidebarPosition:5,frontMatter:{title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",authors:"Duke Lu",date:"2024-05-17T00:00:00.000Z",tags:["\u7b97\u6cd5","\u53cc\u6307\u9488","\u5b57\u7b26\u4e32","\u52a8\u6001\u89c4\u5212"],sidebar_position:5},sidebar:"AlgorithmsSidebar",previous:{title:"4. \u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",permalink:"/docs/algorithm/leetcode/\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"},next:{title:"6. Z \u5b57\u5f62\u53d8\u6362",permalink:"/docs/algorithm/leetcode/Z \u5b57\u5f62\u53d8\u6362"}},a={},d=[{value:"\u89e3\u9898",id:"\u89e3\u9898",level:2},{value:"\u52a8\u6001\u89c4\u5212\u6c42\u89e3",id:"\u52a8\u6001\u89c4\u5212\u6c42\u89e3",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/longest-palindromic-substring/",children:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32"})," ",(0,s.jsx)("a",{class:"tag_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module tagRegular_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module",href:"/docs/tags/\u4e2d\u7b49/",style:{color:"orange"},children:"\u4e2d\u7b49"})]}),"\n",(0,s.jsx)(t.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u627e\u5230 s \u4e2d\u6700\u957f\u7684\u56de\u6587\u5b50\u4e32\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u89e3\u9898",children:"\u89e3\u9898"}),"\n",(0,s.jsx)(t.h3,{id:"\u52a8\u6001\u89c4\u5212\u6c42\u89e3",children:"\u52a8\u6001\u89c4\u5212\u6c42\u89e3"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\u786e\u5b9a dp[] \u542b\u4e49\uff1adp[i][j] \u8868\u793a\u533a\u95f4\u8303\u56f4[i,j] \uff08\u6ce8\u610f\u662f\u5de6\u95ed\u53f3\u95ed\uff09\u7684\u5b50\u4e32\u662f\u5426\u662f\u56de\u6587\u5b50\u4e32\uff0c\u5982\u679c\u662fdp[i][j]\u4e3atrue\uff0c\u5426\u5219\u4e3afalse\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u786e\u5b9a\u9012\u63a8\u516c\u5f0f\uff1a\n\u6574\u4f53\u4e0a\u662f\u4e24\u79cd\uff0c\u5c31\u662fs[i]\u4e0es[j]\u76f8\u7b49\uff0cs[i]\u4e0es[j]\u4e0d\u76f8\u7b49\u8fd9\u4e24\u79cd\u3002\n\u5f53s[i]\u4e0es[j]\u4e0d\u76f8\u7b49\uff0c\u90a3\u6ca1\u5565\u597d\u8bf4\u7684\u4e86\uff0cdp[i][j]\u4e00\u5b9a\u662ffalse\u3002\n\u5f53s[i]\u4e0es[j]\u76f8\u7b49\u65f6\uff0c\u8fd9\u5c31\u590d\u6742\u4e00\u4e9b\u4e86\uff0c\u6709\u5982\u4e0b\u4e09\u79cd\u60c5\u51b5\n\u60c5\u51b5\u4e00\uff1a\u4e0b\u6807i \u4e0e j\u76f8\u540c\uff0c\u540c\u4e00\u4e2a\u5b57\u7b26\u4f8b\u5982a\uff0c\u5f53\u7136\u662f\u56de\u6587\u5b50\u4e32\n\u60c5\u51b5\u4e8c\uff1a\u4e0b\u6807i \u4e0e j\u76f8\u5dee\u4e3a1\uff0c\u4f8b\u5982aa\uff0c\u4e5f\u662f\u56de\u6587\u5b50\u4e32\n\u60c5\u51b5\u4e09\uff1a\u4e0b\u6807\uff1ai \u4e0e j\u76f8\u5dee\u5927\u4e8e1\u7684\u65f6\u5019\uff0c\u4f8b\u5982cabac\uff0c\u6b64\u65f6s[i]\u4e0es[j]\u5df2\u7ecf\u76f8\u540c\u4e86\uff0c\n\u6211\u4eec\u770bi\u5230j\u533a\u95f4\u662f\u4e0d\u662f\u56de\u6587\u5b50\u4e32\u5c31\u770baba\u662f\u4e0d\u662f\u56de\u6587\u5c31\u53ef\u4ee5\u4e86\uff0c\n\u90a3\u4e48aba\u7684\u533a\u95f4\u5c31\u662f i+1 \u4e0e j-1 \u533a\u95f4\uff0c\u8fd9\u4e2a\u533a\u95f4\u662f\u4e0d\u662f\u56de\u6587\u5c31\u770bdp[i + 1][j - 1]\u662f\u5426\u4e3atrue\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u786e\u5b9a dp[] \u5982\u4f55\u521d\u59cb\u5316\uff1adp[i][j]\u521d\u59cb\u5316\u4e3afalse"}),"\n",(0,s.jsx)(t.li,{children:"\u786e\u5b9a\u904d\u5386\u987a\u5e8f\uff1a\u7531 dp[i+1][j-1] \u63a8\u5bfc\u51fa dp[i][j]\uff0c\u6545 i \u9006\u5e8f\u904d\u5386\uff0cj \u987a\u5e8f\u904d\u5386"}),"\n",(0,s.jsxs)(t.li,{children:["\u4e3e\u4f8b\u63a8\u5bfc\naba",(0,s.jsx)("br",{}),"\n0,1,2",(0,s.jsx)("br",{}),"\n[f,f,f]",(0,s.jsx)("br",{}),"\n[f,f,f]",(0,s.jsx)("br",{}),"\n[f,f,f]",(0,s.jsx)("br",{}),"\ndp22 dp11 dp12 dp00 dp01 dp02 -> dp11"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func longestPalindrome(s string) string {\n\n\tdp := make([][]bool, len(s))\n\tfor i := range dp {\n\t\tdp[i] = make([]bool, len(s))\n\t}\n\n\tvar result string\n\tfor i := len(s) - 1; i >= 0; i-- {\n\t\tfor j := i; j < len(s); j++ {\n\t\t\tif s[i] == s[j] {\n\t\t\t\tif j-i <= 1 || dp[i+1][j-1] {\n\t\t\t\t\tdp[i][j] = true\n\t\t\t\t\tif j+1-i >= len(result) {\n\t\t\t\t\t\tresult = s[i : j+1]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn result\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);