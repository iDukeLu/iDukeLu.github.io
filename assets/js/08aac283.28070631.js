"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[2407],{9185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(5893),r=t(1151);const o={title:"6. Z \u5b57\u5f62\u53d8\u6362",authors:"Duke Lu",date:new Date("2024-05-17T00:00:00.000Z"),tags:["\u7b97\u6cd5","\u5b57\u7b26\u4e32"],sidebar_position:6},i=void 0,l={id:"algorithm/leetcode/Z \u5b57\u5f62\u53d8\u6362",title:"6. Z \u5b57\u5f62\u53d8\u6362",description:"6. Z \u5b57\u5f62\u53d8\u6362 \u4e2d\u7b49",source:"@site/docs/algorithm/leetcode/6. Z \u5b57\u5f62\u53d8\u6362.md",sourceDirName:"algorithm/leetcode",slug:"/algorithm/leetcode/Z \u5b57\u5f62\u53d8\u6362",permalink:"/docs/algorithm/leetcode/Z \u5b57\u5f62\u53d8\u6362",draft:!1,unlisted:!1,tags:[{label:"\u7b97\u6cd5",permalink:"/docs/tags/\u7b97\u6cd5"},{label:"\u5b57\u7b26\u4e32",permalink:"/docs/tags/\u5b57\u7b26\u4e32"}],version:"current",sidebarPosition:6,frontMatter:{title:"6. Z \u5b57\u5f62\u53d8\u6362",authors:"Duke Lu",date:"2024-05-17T00:00:00.000Z",tags:["\u7b97\u6cd5","\u5b57\u7b26\u4e32"],sidebar_position:6},sidebar:"AlgorithmsSidebar",previous:{title:"5. \u6700\u957f\u56de\u6587\u5b50\u4e32",permalink:"/docs/algorithm/leetcode/\u6700\u957f\u56de\u6587\u5b50\u4e32"},next:{title:"7. \u6574\u6570\u53cd\u8f6c",permalink:"/docs/algorithm/leetcode/\u6574\u6570\u53cd\u8f6c"}},c={},a=[{value:"\u89e3\u9898",id:"\u89e3\u9898",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/zigzag-conversion/",children:"6. Z \u5b57\u5f62\u53d8\u6362"})," ",(0,s.jsx)("a",{class:"tag_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module tagRegular_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module",href:"/docs/tags/\u4e2d\u7b49/",style:{color:"orange"},children:"\u4e2d\u7b49"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u4e00\u4e2a\u7ed9\u5b9a\u5b57\u7b26\u4e32 s \u6839\u636e\u7ed9\u5b9a\u7684\u884c\u6570 numRows \uff0c\u4ee5\u4ece\u4e0a\u5f80\u4e0b\u3001\u4ece\u5de6\u5230\u53f3\u8fdb\u884c Z \u5b57\u5f62\u6392\u5217\u3002"}),"\n",(0,s.jsx)(n.p,{children:'\u6bd4\u5982\u8f93\u5165\u5b57\u7b26\u4e32\u4e3a "PAYPALISHIRING" \u884c\u6570\u4e3a 3 \u65f6\uff0c\u6392\u5217\u5982\u4e0b\uff1a'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"P   A   H   N\nA P L S I I G\nY   I   R\n"})}),"\n",(0,s.jsx)(n.p,{children:'\u4e4b\u540e\uff0c\u4f60\u7684\u8f93\u51fa\u9700\u8981\u4ece\u5de6\u5f80\u53f3\u9010\u884c\u8bfb\u53d6\uff0c\u4ea7\u751f\u51fa\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u6bd4\u5982\uff1a"PAHNAPLSIIGYIR"\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u4f60\u5b9e\u73b0\u8fd9\u4e2a\u5c06\u5b57\u7b26\u4e32\u8fdb\u884c\u6307\u5b9a\u884c\u6570\u53d8\u6362\u7684\u51fd\u6570\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"string convert(string s, int numRows);"}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u9898",children:"\u89e3\u9898"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3b\u8981\u5728\u4e8e\u627e\u89c4\u5f8b\uff0c\u5047\u8bbe\uff0c\u7ed9\u5b9a\u884c\u6570 numRows = 3\uff0c\u5b57\u7b26\u4e32 s = PAYPALISHIRING"}),"\n",(0,s.jsx)(n.p,{children:"\u6392\u5217\u6210 Z \u5b57\uff0c\u5c06\u6bcf\u4e2a\u5b57\u7b26\u5b89\u4e00\u5b9a\u987a\u5e8f\u653e\u5165 3 \u4e2a\u6570\u7ec4\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u6570\u7ec4 1: P   A   H   N\n\u6570\u7ec4 2: A P L S I I G\n\u6570\u7ec4 3: Y   I   R\n\nPAYPALISHIRING\n12321232123212\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u9898\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u521d\u59cb\u5316 \u7ed9\u5b9a\u884c\u6570 numRows \u4e2a\u6570\u7684\u6570\u7ec4\uff0c\u8868\u793a\u5bf9\u5e94\u7684\u884c\uff0c\u7528\u4e8e Z \u5b57\u6392\u5217\u7684\u5b57\u7b26"}),"\n",(0,s.jsx)(n.li,{children:"\u521d\u59cb\u5316 row\u3001step\u3002row \u8868\u793a\u653e\u5165\u7b2c\u51e0\u4e2a\u884c\uff0cstep \u8868\u793a\u6b65\u6570 +1 \u6216\u8005 -1"}),"\n",(0,s.jsx)(n.li,{children:"\u5faa\u73af\u5b57\u7b26\u4e32\u653e\u5165\u5bf9\u5e94\u7684\u884c\u4e2d\uff0c\u5230\u5e95\u6700\u540e\u4e00\u884c\u6216\u7b2c\u4e00\u884c\u65f6\uff0cstep \u53cd\u8f6c"}),"\n",(0,s.jsx)(n.li,{children:"\u5c06\u6bcf\u884c\u62fc\u63a5\u4e3a\u4e00\u884c\uff0c\u8fd4\u56de\u7ed3\u679c"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func convert(s string, numRows int) string {\n\n\tif numRows == 1 {\n\t\treturn s\n\t}\n\n\trows := make([][]rune, numRows)\n\trow, step := 0, 1\n\n\tfor _, c := range s {\n\t\trows[row] = append(rows[row], c)\n\t\trow += step\n\t\tif row == 0 || row == numRows-1 {\n\t\t\tstep *= -1\n\t\t}\n\t}\n\n\tresult := ""\n\tfor _, r := range rows {\n\t\tresult += string(r)\n\t}\n\n\treturn result\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);