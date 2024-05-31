"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[5016],{2724:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(5893),e=r(1151);const s={title:"\u5192\u6ce1\u6392\u5e8f",authors:"Duke Lu",date:new Date("2024-05-14T00:00:00.000Z"),tags:["\u7b97\u6cd5","\u6392\u5e8f"],sidebar_position:1},l=void 0,a={id:"algorithm/sort/bubble-sort",title:"\u5192\u6ce1\u6392\u5e8f",description:"\u6982\u5ff5",source:"@site/docs/algorithm/sort/bubble-sort.md",sourceDirName:"algorithm/sort",slug:"/algorithm/sort/bubble-sort",permalink:"/docs/algorithm/sort/bubble-sort",draft:!1,unlisted:!1,tags:[{label:"\u7b97\u6cd5",permalink:"/docs/tags/\u7b97\u6cd5"},{label:"\u6392\u5e8f",permalink:"/docs/tags/\u6392\u5e8f"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u5192\u6ce1\u6392\u5e8f",authors:"Duke Lu",date:"2024-05-14T00:00:00.000Z",tags:["\u7b97\u6cd5","\u6392\u5e8f"],sidebar_position:1},sidebar:"AlgorithmsSidebar",previous:{title:"\u6392\u5e8f",permalink:"/docs/algorithm/sort/"},next:{title:"\u9009\u62e9\u6392\u5e8f",permalink:"/docs/algorithm/sort/selection-sort"}},o={},c=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(n){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,i.jsx)(t.p,{children:"\u5192\u6ce1\u6392\u5e8f\u662f\u4e00\u79cd\u7b80\u5355\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5b83\u91cd\u590d\u5730\u904d\u5386\u5f85\u6392\u5e8f\u7684\u5143\u7d20\uff0c\u6bcf\u6b21\u904d\u5386\u65f6\u4f9d\u6b21\u6bd4\u8f83\u76f8\u90bb\u7684\u4e24\u4e2a\u5143\u7d20\uff0c\u5982\u679c\u5b83\u4eec\u7684\u987a\u5e8f\u9519\u8bef\uff08\u4f8b\u5982\uff0c\u5bf9\u4e8e\u5347\u5e8f\u6392\u5e8f\uff0c\u524d\u4e00\u4e2a\u5143\u7d20\u5927\u4e8e\u540e\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u5219\u4ea4\u6362\u5b83\u4eec\u7684\u4f4d\u7f6e\u3002\u901a\u8fc7\u4e00\u8f6e\u5b8c\u6574\u7684\u904d\u5386\uff0c\u53ef\u4ee5\u786e\u4fdd\u6700\u5927\uff08\u6216\u6700\u5c0f\uff09\u7684\u5143\u7d20\u88ab\u79fb\u52a8\u5230\u4e86\u6b63\u786e\u7684\u4f4d\u7f6e\u3002\u91cd\u590d\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u6bcf\u6b21\u6bd4\u8f83\u7684\u5143\u7d20\u8303\u56f4\u90fd\u4f1a\u7f29\u5c0f\uff0c\u76f4\u5230\u6240\u6709\u5143\u7d20\u90fd\u6392\u597d\u5e8f\u4e3a\u6b62\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u5192\u6ce1\u6392\u5e8f\u7684\u7b97\u6cd5\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u4ece\u7b2c\u4e00\u4e2a\u5143\u7d20\u5f00\u59cb\uff0c\u4f9d\u6b21\u6bd4\u8f83\u76f8\u90bb\u7684\u4e24\u4e2a\u5143\u7d20\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5982\u679c\u524d\u4e00\u4e2a\u5143\u7d20\u5927\u4e8e\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u5219\u4ea4\u6362\u5b83\u4eec\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u7ee7\u7eed\u904d\u5386\u4e0b\u4e00\u5bf9\u76f8\u90bb\u5143\u7d20\uff0c\u91cd\u590d\u6b65\u9aa42\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u76f4\u5230\u6ca1\u6709\u4efb\u4f55\u4e00\u5bf9\u5143\u7d20\u9700\u8981\u4ea4\u6362\u4e3a\u6b62\u3002"}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/sort/bubble_sort.excalidraw.png?raw=true",alt:""})})}),"\n",(0,i.jsxs)(t.p,{children:["\u5192\u6ce1\u6392\u5e8f\u7684\u7279\u70b9\u662f\u7b80\u5355\u6613\u61c2\uff0c\u4f46\u6548\u7387\u8f83\u4f4e\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u5927\u578b\u6570\u636e\u96c6\u3002\u5176\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n",(0,i.jsx)("sup",{children:"2"}),")\uff0c\u5176\u4e2dn\u662f\u5f85\u6392\u5e8f\u5143\u7d20\u7684\u6570\u91cf\uff0c\u56e0\u6b64\u5728\u5b9e\u8df5\u4e2d\u901a\u5e38\u4e0d\u9002\u7528\u4e8e\u5927\u89c4\u6a21\u6570\u636e\u7684\u6392\u5e8f\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,i.jsx)(t.p,{children:"\u5192\u6ce1\u6392\u5e8f\u662f\u4e00\u79cd\u7b80\u5355\u4f46\u6548\u7387\u8f83\u4f4e\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(t.p,{children:"\u4f18\u70b9\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u5b9e\u73b0\u7b80\u5355"}),"\uff1a\u5192\u6ce1\u6392\u5e8f\u7684\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0c\u6613\u4e8e\u7406\u89e3\u548c\u5b9e\u73b0\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u539f\u5730\u6392\u5e8f"}),"\uff1a\u5192\u6ce1\u6392\u5e8f\u53ea\u9700\u8981\u4e00\u4e2a\u989d\u5916\u7684\u7a7a\u95f4\u7528\u4e8e\u4ea4\u6362\u5143\u7d20\uff0c\u56e0\u6b64\u662f\u4e00\u79cd\u539f\u5730\u6392\u5e8f\u7b97\u6cd5\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u7a33\u5b9a\u6027"}),"\uff1a\u5192\u6ce1\u6392\u5e8f\u662f\u4e00\u79cd\u7a33\u5b9a\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u76f8\u540c\u5143\u7d20\u7684\u76f8\u5bf9\u4f4d\u7f6e\u4e0d\u4f1a\u6539\u53d8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u4f4e\u6548\u7387"}),"\uff1a\u5192\u6ce1\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n",(0,i.jsx)("sup",{children:"2"}),")\uff0c\u5176\u4e2dn\u662f\u5f85\u6392\u5e8f\u6570\u7ec4\u7684\u957f\u5ea6\u3002\u5728\u5927\u89c4\u6a21\u6570\u636e\u96c6\u4e0a\uff0c\u6548\u7387\u8f83\u4f4e\uff0c\u7279\u522b\u662f\u76f8\u6bd4\u4e8e\u5176\u4ed6\u9ad8\u6548\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5982\u5feb\u901f\u6392\u5e8f\u3001\u5f52\u5e76\u6392\u5e8f\u7b49\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u4e0d\u9002\u5408\u5927\u89c4\u6a21\u6570\u636e"}),"\uff1a\u7531\u4e8e\u5176\u65f6\u95f4\u590d\u6742\u5ea6\u8f83\u9ad8\uff0c\u5192\u6ce1\u6392\u5e8f\u4e0d\u9002\u7528\u4e8e\u5927\u89c4\u6a21\u6570\u636e\u7684\u6392\u5e8f\uff0c\u5176\u6027\u80fd\u8868\u73b0\u5f80\u5f80\u4e0d\u5982\u5176\u4ed6\u66f4\u9ad8\u6548\u7684\u6392\u5e8f\u7b97\u6cd5\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\u7a33\u5b9a\u6027\u4ee3\u4ef7"}),"\uff1a\u867d\u7136\u5192\u6ce1\u6392\u5e8f\u662f\u7a33\u5b9a\u7684\uff0c\u4f46\u5728\u8fdb\u884c\u5143\u7d20\u4ea4\u6362\u65f6\u53ef\u80fd\u4f1a\u7834\u574f\u76f8\u540c\u5143\u7d20\u4e4b\u95f4\u7684\u539f\u59cb\u987a\u5e8f\uff0c\u56e0\u6b64\u9700\u8981\u989d\u5916\u7684\u64cd\u4f5c\u6765\u4fdd\u6301\u7a33\u5b9a\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u4ee3\u7801\u5b9e\u73b0",children:"\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type Number interface {\n\tint | int8 | int16 | int32 | int64 |\n\t\tuint | uint8 | uint16 | uint32 | uint64 |\n\t\tfloat32 | float64\n}\n\nfunc BubbleSort[T Number](arr []T) []T {\n\tn := len(arr)\n\tfor i := 0; i < n-1; i++ {\n\t\tfor j := 0; j < n-i-1; j++ {\n\t\t\tif arr[j] > arr[j+1] {\n\t\t\t\tarr[j], arr[j+1] = arr[j+1], arr[j] // \u4ea4\u6362\u5143\u7d20\n\t\t\t}\n\t\t}\n\t}\n\treturn arr\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5927\u81f4\u63a8\u5bfc\u4e00\u4e0b\u5192\u6ce1\u7684\u8fc7\u7a0b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type Number interface {\n\tint | int8 | int16 | int32 | int64 |\n\t\tuint | uint8 | uint16 | uint32 | uint64 |\n\t\tfloat32 | float64\n}\n\n// \u5047\u8bbe\u6570\u7ec4\u4e3a [2,4,3,1]\nfunc BubbleSortStep[T Number](arr []T) {\n\tn := len(arr) // n = 4\n\n\t// \u5f53\u524d\u6570\u7ec4\uff1a[2,4,3,1]\n\t// \u7b2c 1 \u8f6e\uff0c\u9700\u8981\u6bd4\u8f83 n-1 \u6b21\uff0c\u5373\u9700\u8981\u6bd4\u8f83 3 \u6b21\uff0c\u5e76\u5728\u6bd4\u8f83\u4e2d\u548c\u8f83\u5c0f\u7684\u6570\u4ea4\u6362\u4f4d\u7f6e\n\t// \u7b2c\u4e00\u6b21\u6bd4\u8f83\uff1a2 \u548c 4 \u6bd4\u8f83\uff0c\u4e0d\u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\uff0c\u7ed3\u679c\u4e3a [2,4,3,1]\n\t// \u7b2c\u4e8c\u6b21\u6bd4\u8f83\uff1a4 \u548c 3 \u6bd4\u8f83\uff0c4 > 3 \u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\uff0c\u7ed3\u679c\u4e3a [2,3,4,1]\n\t// \u7b2c\u4e09\u6b21\u6bd4\u8f83\uff1a4 \u548c 1 \u6bd4\u8f83\uff0c4 > 1 \u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\uff0c\u7ed3\u679c\u4e3a [2,3,1,4]\n\t// \u81f3\u6b64\uff0c\u7b2c\u4e00\u8f6e\u6bd4\u8f83\u5b8c\u6210\uff0c\u6700\u5927\u6570\u5b57 4 \u79fb\u52a8\u5230\u6700\u540e\n\tfor i := 0; i < n-1; i++ {\n\t\tif arr[i] > arr[i+1] {\n\t\t\tarr[i], arr[i+1] = arr[i+1], arr[i]\n\t\t}\n\t}\n\n\t// \u5f53\u524d\u6570\u7ec4\uff1a[2,3,1,4]\n\t// \u7b2c 2 \u8f6e\uff0c\u9700\u8981\u6bd4\u8f83 n-2 \u6b21\uff0c\u5373\u9700\u8981\u6bd4\u8f83 2 \u6b21\uff0c\u56e0\u4e3a\u6700\u5927\u6570\u5b57\u5df2\u7ecf\u79fb\u52a8\u5230\u6700\u540e\uff0c\u4e0d\u518d\u9700\u8981\u53c2\u52a0\u6bd4\u8f83\n\t// \u7b2c\u4e00\u6b21\u6bd4\u8f83\uff1a2 \u548c 3 \u6bd4\u8f83\uff0c\u4e0d\u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\uff0c\u7ed3\u679c\u4e3a [2,3,1,4]\n\t// \u7b2c\u4e8c\u6b21\u6bd4\u8f83\uff1a3 \u548c 1 \u6bd4\u8f83\uff0c3 > 1 \u9700\u8981\u4ea4\u6362\u4f4d\u7f6e\uff0c\u7ed3\u679c\u4e3a [2,1,3,4]\n\t// \u81f3\u6b64\uff0c\u7b2c\u4e00\u8f6e\u6bd4\u8f83\u5b8c\u6210\uff0c\u5012\u6570\u7b2c\u4e8c\u5927\u6570\u5b57 3 \u79fb\u52a8\u5230\u6700\u540e\n\tfor i := 0; i < n-2; i++ {\n\t\tif arr[i] > arr[i+1] {\n\t\t\tarr[i], arr[i+1] = arr[i+1], arr[i]\n\t\t}\n\t}\n\n\t// \u7b2c 3 \u8f6e\uff0c\u9700\u8981\u6bd4\u8f83 n-3 \u6b21\uff0c\u8fc7\u7a0b\u540c\u4e0a\n\tfor i := 0; i < n-3; i++ {\n\t\tif arr[i] > arr[i+1] {\n\t\t\tarr[i], arr[i+1] = arr[i+1], arr[i]\n\t\t}\n\t}\n\n\t// \u7b2c n-1 \u8f6e\uff0c\u9700\u8981\u6bd4\u8f83 n-(n-1)=1 \u6b21\n\tfor i := 0; i < n-3; i++ {\n\t\tif arr[i] > arr[i+1] {\n\t\t\tarr[i], arr[i+1] = arr[i+1], arr[i]\n\t\t}\n\t}\n\n\t// \u53d1\u73b0\u89c4\u5f8b\uff1a\u7b2c m \u8f6e\uff0c\u9700\u8981\u6bd4\u8f83 n-m \u6b21\n\tvar m int\n\tfor i := 0; i < n-m; i++ {\n\t\tif arr[i] > arr[i+1] {\n\t\t\tarr[i], arr[i+1] = arr[i+1], arr[i]\n\t\t}\n\t}\n\n\t// \u56e0\u4e3a\u662f\u76f8\u90bb\u7684\u6570\u5b57\u4e24\u4e24\u6bd4\u8f83\uff0c\u6240\u4ee5\u603b\u5171\u9700\u8981\u6bd4\u8f83 n-1 \u8f6e\uff0c\n\t// \u4e14\u6bcf\u8f6e\u6bd4\u8f83\u7684\u6b21\u6570\u51cf 1\uff0c\u56e0\u4e3a\u6bcf\u8f6e\u6bd4\u8f83\u540e\u4f1a\u5192\u6ce1\u6700\u5927\u7684\u6570\u5b57\u5230\u6700\u53f3\u4fa7\u4e0d\u518d\u53c2\u4e0e\u6bd4\u8f83\n\tfor j := 0; j < n-1; j++ { // \u6bcf\u6b21\u6bd4\u8f83\u76f8\u90bb\u4e24\u4e2a\u6570\uff0c\u9700\u8981\u6bd4\u8f83 n-1 \u8f6e\n\t\tfor i := 0; i < n-(j+1); i++ { // \u6bcf\u8f6e\u6bd4\u8f83\u540e\uff0c\u6700\u5927\u7684\u6570\u4f1a\u5192\u6ce1\u5230\u6700\u53f3\u4fa7\uff0c\u6545\u4e0b\u4e00\u8f6e\u6bd4\u8f83\u5c31\u4f1a\u5c11 1 \u6b21\n\t\t\tif arr[i] > arr[i+1] { // \u76f8\u90bb\u5143\u7d20\u6bd4\u8f83\n\t\t\t\tarr[i], arr[i+1] = arr[i+1], arr[i] // \u4ea4\u6362\u5143\u7d20\n\t\t\t}\n\t\t}\n\t}\n\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(t.p,{children:"\u5192\u6ce1\u6392\u5e8f\uff1a\u4f9d\u6b21\u6bd4\u8f83\u548c\u4ea4\u6362\u76f8\u90bb\u7684\u4e24\u4e2a\u5143\u7d20\uff0c\u5c06\u8f83\u5927\u7684\u5143\u7d20\u9010\u4e2a\u5192\u6ce1\u5230\u5c3e\u90e8\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u590d\u6742\u5ea6\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n",(0,i.jsx)("sup",{children:"2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["\u6700\u574f\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n",(0,i.jsx)("sup",{children:"2"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"\u6700\u4f18\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"}),"\n",(0,i.jsx)(t.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)"}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["\u53c2\u8003\uff1a",(0,i.jsx)(t.a,{href:"https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F",children:"\u5192\u6ce1\u6392\u5e8f-\u7ef4\u57fa\u767e\u79d1"})]})]})}function h(n={}){const{wrapper:t}={...(0,e.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,t,r)=>{r.d(t,{Z:()=>a,a:()=>l});var i=r(7294);const e={},s=i.createContext(e);function l(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:l(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);