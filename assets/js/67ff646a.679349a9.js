"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[7857],{5076:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>h});var i=r(5893),l=r(1151);const d={title:"Hexo \u63d2\u4ef6\u8be6\u89e3\uff1ahexo-renderer-markdown-it",authors:"Duke Lu",date:new Date("2018-04-21T00:00:00.000Z"),tags:["hexo","hexo-plugin"]},o=void 0,s={permalink:"/blog/2018/hexo-renderer-markdown-it",source:"@site/blog/2018/hexo-renderer-markdown-it.md",title:"Hexo \u63d2\u4ef6\u8be6\u89e3\uff1ahexo-renderer-markdown-it",description:"\u7b80\u4ecb",date:"2018-04-21T00:00:00.000Z",formattedDate:"2018\u5e744\u670821\u65e5",tags:[{label:"hexo",permalink:"/blog/tags/hexo"},{label:"hexo-plugin",permalink:"/blog/tags/hexo-plugin"}],readingTime:4.88,hasTruncateMarker:!0,authors:[{name:"Duke Lu",title:"Golang Development Engineer",url:"https://github.com/idukelu",imageURL:"https://github.com/idukelu.png",key:"Duke Lu"}],frontMatter:{title:"Hexo \u63d2\u4ef6\u8be6\u89e3\uff1ahexo-renderer-markdown-it",authors:"Duke Lu",date:"2018-04-21T00:00:00.000Z",tags:["hexo","hexo-plugin"]},unlisted:!1,prevItem:{title:"Markdown \u5907\u5fd8\u5f55",permalink:"/blog/2018/markdown-memo"},nextItem:{title:"Hexo \u8868\u683c\u6837\u5f0f\u8c03\u6574",permalink:"/blog/2018/hexo-table-css"}},t={authorsImageUrls:[void 0]},h=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7b80\u5355\u914d\u7f6e",id:"\u7b80\u5355\u914d\u7f6e",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e\u8be6\u89e3",id:"\u9ad8\u7ea7\u914d\u7f6e\u8be6\u89e3",level:3},{value:"\u6e32\u67d3\u5668\uff08render\uff09",id:"\u6e32\u67d3\u5668render",level:4},{value:"\u63d2\u4ef6\uff08plugins\uff09",id:"\u63d2\u4ef6plugins",level:4},{value:"\u951a\uff08anchors\uff09",id:"\u951aanchors",level:4}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hexo-renderer-markdown-it"})," \u662f\u4e00\u6b3e\u7528\u4e8e Markdown \u89e3\u6790\u548c\u6e32\u67d3\u7684\u63d2\u4ef6\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7528\u4e8e\u66ff\u6362 Hexo \u9ed8\u8ba4\u81ea\u5e26\u7684 Markdown \u6e32\u67d3\u5668\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684 Markdown \u89e3\u6790\u548c\u6e32\u67d3\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u8bf7\u786e\u4fdd\u4f60\u5728 Hexo \u4e3b\u76ee\u5f55\u4e0b\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5378\u8f7d Hexo \u9ed8\u8ba4\u81ea\u5e26\u7684 Markdown \u6e32\u67d3\u5668"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"npm un hexo-renderer-marked --save\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["\u5b89\u88c5 ",(0,i.jsx)(e.code,{children:"hexo-renderer-markdown-it"})," \u63d2\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"npm i hexo-renderer-markdown-it --save\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hexo-renderer-markdown-it"})," \u7684\u6240\u6709\u914d\u7f6e\uff0c\u5747\u5728 Hexo \u7684\u4e3b\u8981\u914d\u7f6e\u6587\u4ef6 ",(0,i.jsx)(e.code,{children:"_config.yml"})," \u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\n\u914d\u7f6e\u7684\u65b9\u5f0f\uff0c\u4e3b\u8981\u5206\u4e3a\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b80\u5355\u914d\u7f6e\uff08\u652f\u6301\u4e09\u79cd\u914d\u7f6e\u7ea7\u522b\uff0c\u5f00\u7bb1\u5373\u7528\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u9ad8\u7ea7\u914d\u7f6e\uff08\u66f4\u8be6\u7ec6\u7684\u5b9a\u5236\uff0c\u6e32\u67d3\u5668\u3001\u63d2\u4ef6\u3001\u951a\uff09"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7b80\u5355\u914d\u7f6e",children:"\u7b80\u5355\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hexo-renderer-markdown-it"})," \u63d0\u4f9b\u4e09\u79cd\u7b80\u5355\u914d\u7f6e\u65b9\u5f0f\uff08\u914d\u7f6e\u7ea7\u522b\uff09",(0,i.jsx)(e.code,{children:"zero"}),"\u3001",(0,i.jsx)(e.code,{children:"default"}),"\u3001",(0,i.jsx)(e.code,{children:"commonmark"}),"\u3002\n\u5728 Hexo \u7684 ",(0,i.jsx)(e.code,{children:"_config.yml"})," \u6587\u4ef6\u4e2d\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"# Markdown-it config\n#markdown: 'zero'\n#markdown: 'default'\nmarkdown: 'commonmark'\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u79cd\u7b80\u5355\u914d\u7f6e\u6709\u5176\u9ed8\u8ba4\u7684\u4e00\u4e9b\u8bbe\u7f6e\u3002\u66f4\u591a\u4e2a\u6027\u5316\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a\u9ad8\u7ea7\u914d\u7f6e\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"zero\uff1a\u7981\u7528\u5927\u591a\u6570\u89e3\u6790\u5668\u529f\u80fd\u3002\u4ec5\u652f\u6301\u659c\u4f53\u548c\u7c97\u4f53\uff0c\u751a\u81f3\u4e0d\u652f\u6301\u6240\u6709\u539f\u59cbMarkdown\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(e.li,{children:"default\uff08GFM\uff09\uff1a\u89e3\u6790\u5668\u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8egithub\u89c4\u8303\u3002"}),"\n",(0,i.jsx)(e.li,{children:"commonmark\uff1a\u63d0\u4f9b\u6bd4Zero\u9884\u8bbe\u66f4\u591a\u7684\u529f\u80fd\u3002 \u6b64\u8bbe\u7f6e\u5c06\u5f3a\u5236\u63d2\u4ef6\u4f7f\u7528\u6700\u65b0\u7684CommonMark\u89c4\u8303\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8b66\u544a\uff1a\u9009\u62e9\u4e00\u79cd\u7b80\u5355\u914d\u7f6e\uff0c\u5c06\u963b\u6b62\u60a8\u4f7f\u7528\u4efb\u4f55\u9644\u5e26\u7684\u63d2\u4ef6\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u9ad8\u7ea7\u914d\u7f6e",children:"\u9ad8\u7ea7\u914d\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hexo-renderer-markdown-it"})," \u63d0\u4f9b\u7684\u9ad8\u7ea7\u914d\u7f6e\uff0c\u662f\u5bf9\u7b80\u5355\u914d\u7f6e\u7684\u8be6\u7ec6\u5b9a\u5236\u3002\n\u5728 Hexo \u7684 ",(0,i.jsx)(e.code,{children:"_config.yml"})," \u6587\u4ef6\u4e2d\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\uff08\u5b98\u65b9\u63d0\u4f9b\u7684\u5b8c\u6574\u914d\u7f6e\uff0c\u6ca1\u6709\u7279\u6b8a\u9700\u8981\u4e0d\u7528\u518d\u6b21\u4fee\u6539\uff09\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"# Markdown-it config\nmarkdown:\n  render:\n    html: true\n    xhtmlOut: false\n    breaks: true\n    linkify: true\n    typographer: true\n    quotes: '\u201c\u201d\u2018\u2019'\n  plugins:\n    - markdown-it-abbr\n    - markdown-it-footnote\n    - markdown-it-ins\n    - markdown-it-sub\n    - markdown-it-sup\n  anchors:\n    level: 2\n    collisionSuffix: 'v'\n    permalink: true\n    permalinkClass: header-anchor\n    permalinkSymbol: \xb6\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u9ad8\u7ea7\u914d\u7f6e\u8be6\u89e3",children:"\u9ad8\u7ea7\u914d\u7f6e\u8be6\u89e3"}),"\n",(0,i.jsx)(e.h4,{id:"\u6e32\u67d3\u5668render",children:"\u6e32\u67d3\u5668\uff08render\uff09"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"# Markdown-it config\nmarkdown:\n  render:\n    html: true\n    xhtmlOut: false\n    breaks: true\n    linkify: true\n    typographer: true\n    quotes: '\u201c\u201d\u2018\u2019'\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"html\uff1a\u5b9a\u4e49\u6587\u6863\u4e2d\u7684HTML\u5185\u5bb9\u662f\u5426\u5e94\u8f6c\u4e49\u6216\u4f20\u9012\u7ed9\u6700\u7ec8\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"html: true # \u4e0d\u8f6c\u4e49 HTML \u5185\u5bb9\nhtml: false # \u8f6c\u4e49 HTML \u5185\u5bb9\uff0c\u4f7f\u6807\u7b7e\u4f5c\u4e3a\u6587\u672c\u8f93\u51fa\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"xhtmlOut\uff1a\u5b9a\u4e49\u89e3\u6790\u5668\u662f\u5426\u5c06\u5bfc\u51fa\u5b8c\u5168\u517c\u5bb9XHTML\u7684\u6807\u8bb0\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"xhtmlOut: true # \u5fc5\u987b\u4f7f\u7528\u5b8c\u5168\u7684 XHTML \u4ee3\u7801\uff0c\u6362\u884c\u5fc5\u987b\u4e3a <br/>\nxhtmlOut: false # \u4e0d\u5fc5\u5fc5\u4f7f\u7528\u5b8c\u5168\u7684 XHTML \u4ee3\u7801\uff0c\u6362\u884c\u53ef\u4ee5\u4e3a <br>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"breaks\uff1a\u4f7f\u6e90\u6587\u4ef6\u4e2d\u7684\u6362\u884c\u7b26\u88ab\u89e3\u6790\u4e3a<br>\u6807\u8bb0\u3002\u6bcf\u6b21\u6309Enter\u952e\u90fd\u4f1a\u521b\u5efa\u6362\u884c\u7b26\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"breaks: true # \u6bcf\u6b21\u4f1a\u8f66\u6362\u884c\u76f8\u5f53\u4e8e\u4e00\u4e2a <br/> \u6807\u7b7e\nbreaks: false # Pa\u6bcf\u6b21\u4f1a\u8f66\u6362\u884c\u4f1a\u88ab\u5ffd\u7565\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"linkify\uff1a\u89e3\u6790\u5668\u80fd\u591f\u5c06\u76f4\u63a5\u7c98\u8d34\u5230\u6587\u672c\u4e2d\u7684\u94fe\u63a5\u5185\u8054\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"linkify: true # \u7c7b\u4f3c\u94fe\u63a5\u7684\u6587\u672c\uff0c\u4f5c\u4e3a\u94fe\u63a5\u8f93\u51fa\nlinkify: false # \u7c7b\u4f3c\u94fe\u63a5\u7684\u6587\u672c\uff0c\u4f9d\u7136\u4f5c\u4e3a\u6587\u672c\u8f93\u51fa\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"typographer\uff1a\u53ef\u4ee5\u66ff\u6362\u5e38\u89c1\u7684\u6392\u7248\u5143\u7d20\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"typographer: true # \u66ff\u6362\u5e38\u89c1\u7684\u6392\u7248\u5143\u7d20\ntypographer: false # \u4e0d\u66ff\u6362\u5e38\u89c1\u7684\u6392\u7248\u5143\u7d20\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"quotes\uff1a\u5355\u5f15\u53f7\u3001\u53cc\u5f15\u53f7\u5982\u4f55\u88ab\u66ff\u6362"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"quotes: '\u201c\u201d\u2018\u2019' # 'single'\u3001\"double\" \u53d8\u6210 \u2018single\u2019\u3001\u201cdouble\u201d\nquotes: '\xab\xbb\u201c\u201d' # 'single'\u3001\"double\" \u53d8\u6210 \u201csingle\u201d\u3001\xabsingle\xbb\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u63d2\u4ef6plugins",children:"\u63d2\u4ef6\uff08plugins\uff09"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hexo-renderer-markdown-it"})," \u9ed8\u8ba4\u96c6\u62105\u4e2a ",(0,i.jsx)(e.code,{children:"markdown-it"})," \u63d2\u4ef6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"# Markdown-it config\nmarkdown:\n  plugins:\n    - markdown-it-abbr\n    - markdown-it-footnote\n    - markdown-it-ins\n    - markdown-it-sub\n    - markdown-it-sup\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"markdown-it-abbr\uff1a\u7f29\u5199\u63d2\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"*[HTML]: Hyper Text Markup Language\n*[W3C]:  World Wide Web Consortium\n\nThe HTML specification\nis maintained by the W3C.\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"markdown-it-footnote\uff1a\u811a\u6ce8\u63d2\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"basic footnote[^1]\nhere is an inline footnote[^2](inline footnote)\nand another one[^3]\nand another one[^4]\n\n[^1]: basic footnote content\n[^3]: paragraph\nfootnote\ncontent\n[^4]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"markdown-it-ins\uff1a\u63d2\u5165\u63d2\u4ef6\uff08\u4e0b\u5212\u7ebf\u63d2\u4ef6\uff09"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"++inserted++ => <ins>inserted</ins>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"markdown-it-sub\uff1a\u4e0b\u6807\u63d2\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"H~2~0 => H<sub>2</sub>O\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"markdown-it-sup\uff1a\u4e0a\u6807\u63d2\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"29^th^ => 29<sup>th</sup>\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u951aanchors",children:"\u951a\uff08anchors\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u80fd\u81ea\u5df1\u4e0d\u4f1a\u7528\uff0c\u56e0\u6b64\uff0c\u6ca1\u592a\u5173\u6ce8\u8fd9\u4e2a\u529f\u80fd"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"# Markdown-it config\nmarkdown:\n  anchors:\n    level: 2\n    collisionSuffix: 'v'\n    permalink: true\n    permalinkClass: header-anchor\n    permalinkSymbol: \xb6\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"level\uff1a\u751f\u6210 Heading ID \u7684\u6807\u9898\u7b49\u7ea7"}),"\n",(0,i.jsx)(e.li,{children:"collisionSuffix\uff1aHeading ID \u91cd\u590d\u65f6\uff0c\u6570\u5b57\u7684\u540e\u7f00"}),"\n",(0,i.jsx)(e.li,{children:"permalink\uff1a'true'\uff0c\u5219\u521b\u5efa\u4e00\u4e2a\u951a\u6807\u8bb0\uff0c\u9664\u6807\u9898\u5916\u8fd8\u6709\u4e00\u4e2a\u56fa\u5b9a\u94fe\u63a5"}),"\n",(0,i.jsx)(e.li,{children:"permalinkClass\uff1a\u7528\u4e8e\u56fa\u5b9a\u94fe\u63a5\u951a\u6807\u8bb0\u7684\u6837\u5f0f"}),"\n",(0,i.jsx)(e.li,{children:"permalinkSymbol\uff1a\u7528\u4e8e\u56fa\u5b9a\u94fe\u63a5\u6807\u8bb0\u7684\u7b26\u53f7"}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["\u53c2\u8003\uff1a\n",(0,i.jsx)(e.a,{href:"https://github.com/markdown-it",children:"markdown-it of GitHub"}),"\n",(0,i.jsx)(e.a,{href:"https://github.com/hexojs/hexo-renderer-markdown-it/wiki",children:"hexo-renderer-markdown-it GitHub Wiki"})]})]})}function a(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>s,a:()=>o});var i=r(7294);const l={},d=i.createContext(l);function o(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);