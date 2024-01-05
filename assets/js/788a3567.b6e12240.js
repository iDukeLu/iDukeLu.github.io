"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[501],{7747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var l=n(5893),s=n(1151);const i={sidebar_position:1,sidebar_label:"\u7c7b\u578b\u7cfb\u7edf"},r="\u7c7b\u578b\u7cfb\u7edf",d={id:"golang/types/types",title:"\u7c7b\u578b\u7cfb\u7edf",description:"\u5b9a\u4e49",source:"@site/docs/golang/types/types.md",sourceDirName:"golang/types",slug:"/golang/types/",permalink:"/docs/golang/types/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u7c7b\u578b\u7cfb\u7edf"},sidebar:"golangSidebar"},c={},x=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u7c7b\u578b\u5206\u7c7b",id:"\u7c7b\u578b\u5206\u7c7b",level:2},{value:"\u57fa\u7840\u7c7b\u578b\uff08Basic Types\uff09",id:"\u57fa\u7840\u7c7b\u578bbasic-types",level:2},{value:"\u590d\u5408\u7c7b\u578b\uff08Composite Types\uff09",id:"\u590d\u5408\u7c7b\u578bcomposite-types",level:2},{value:"\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"\u7c7b\u578b\u7cfb\u7edf",children:"\u7c7b\u578b\u7cfb\u7edf"}),"\n",(0,l.jsx)(t.h2,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,l.jsx)(t.p,{children:"\u5728 Go \u8bed\u8a00\u89c4\u8303\u4e2d\uff0c\u662f\u8fd9\u6837\u5b9a\u4e49\u7c7b\u578b\u7684\uff1a"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"A type determines a set of values together with operations and methods specific to those values."}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["\u7ffb\u8bd1\u8fc7\u6765\u5c31\u662f\uff0c\u7c7b\u578b\u5b9a\u4e49\u4e86\u4e00\u7ec4\u503c\uff0c\u4ee5\u53ca\u53ef\u4ee5\u5728\u8fd9\u4e9b\u503c\u4e0a\u6267\u884c\u7684\u7279\u5b9a\u64cd\u4f5c\u548c\u65b9\u6cd5\u3002",(0,l.jsx)("br",{}),"\n\u53ef\u4ee5\u53d1\u73b0\u548c\u6570\u636e\u7ed3\u6784\u4e2d\u7c7b\u578b\u7684\u6982\u7387\u4e00\u6a21\u4e00\u6837\u3002",(0,l.jsx)("br",{}),"\n\u5373\uff1a\u7c7b\u578b\u5bf9\u6570\u636e\u8fdb\u884c\u4e86\u5206\u7c7b\uff0c\u5e76\u4e14\u8d4b\u4e88\u4e86",(0,l.jsx)("u",{children:"\u8fd9\u4e9b\u6570\u636e"}),"\u7279\u5b9a\u7684\u64cd\u4f5c\u548c\u65b9\u6cd5\u3002\uff08\u8fd9\u4e9b\u6570\u636e: \u5373\u524d\u9762\u6240\u8bf4\u7684\u4e00\u7ec4\u503c\uff09"]}),"\n",(0,l.jsxs)(t.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u5b98\u65b9\u4e5f\u7528 ",(0,l.jsx)(t.a,{href:"https://zh.wikipedia.org/wiki/%E6%89%A9%E5%B1%95%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F",children:"EBNF\uff08Extended Backus-Naur Form\uff0c\u6269\u5c55\u5df4\u79d1\u65af-\u8bfa\u5c14\u8303\u5f0f\uff09\u8bed\u6cd5\u89c4\u5219"}),"\uff0c\u63cf\u8ff0\u4e86\u7c7b\u578b\uff1a"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ebnf",metastring:"showLineNumbers",children:'Type      = TypeName [ TypeArgs ] | TypeLit | "(" Type ")" .\nTypeName  = identifier | QualifiedIdent .\nTypeArgs  = "[" TypeList [ "," ] "]" .\nTypeList  = Type { "," Type } .\nTypeLit   = ArrayType | StructType | PointerType | FunctionType | InterfaceType |\n            SliceType | MapType | ChannelType .\n'})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:'Type = TypeName [ TypeArgs ] | TypeLit | "(" Type ")"'})," ",(0,l.jsx)("br",{}),"\n\u4e00\u4e2a\u7c7b\u578b\uff08Type\uff09\u53ef\u4ee5\u662f TypeName\uff08\u53ef\u80fd\u5e26\u6709\u7c7b\u578b\u53c2\u6570 TypeArgs\uff09\uff0c\u6216\u8005\u662f\u4e00\u4e2a TypeLit\uff08\u7c7b\u578b\u5b57\u9762\u91cf\uff09\uff0c\u6216\u8005\u662f\u53e6\u4e00\u4e2a\u7c7b\u578b\u52a0\u4e0a\u62ec\u53f7\u3002\nxxx"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"TypeName = identifier | QualifiedIdent"})," ",(0,l.jsx)("br",{}),"\n\u4e00\u4e2a\u7c7b\u578b\u540d\uff08TypeName\uff09\u53ef\u4ee5\u662f\u4e00\u4e2a\u6807\u8bc6\u7b26\uff08identifier\uff0c\u5373\u4f60\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u540d\uff09\uff0c\u6216\u8005\u662f\u4e00\u4e2a\u6709\u9650\u5b9a\u7684\u6807\u8bc6\u7b26\uff08QualifiedIdent\uff0c\u5373\u542b\u6709\u5305\u540d\u7684\u7c7b\u578b\u540d\uff0c\u6bd4\u5982 fmt.Stringer\uff09\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:'TypeArgs = "[" TypeList [ "," ] "]"'}),"  ",(0,l.jsx)("br",{}),"\n\u7c7b\u578b\u53c2\u6570\uff08TypeArgs\uff09\u662f\u7528\u65b9\u62ec\u53f7\u5305\u56f4\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u7c7b\u578b\u7684\u5217\u8868\uff0c\u7c7b\u578b\u4e4b\u95f4\u7528\u9017\u53f7\u5206\u9694\u3002\u5728 Go 1.18 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\uff0cGo \u652f\u6301\u4e86\u6cdb\u578b\uff0c\u8fd9\u91cc\u7684\u7c7b\u578b\u53c2\u6570\u5c31\u662f\u7528\u6765\u652f\u6301\u6cdb\u578b\u7684\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:'TypeList = Type { "," Type }'})," ",(0,l.jsx)("br",{}),"\n\u7c7b\u578b\u5217\u8868\uff08TypeList\uff09\u662f\u4e00\u4e2a\u6216\u591a\u4e2a\u7c7b\u578b\uff0c\u7528\u9017\u53f7\u5206\u9694\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"TypeLit = ArrayType | StructType | PointerType | FunctionType | InterfaceType | SliceType | MapType | ChannelType"})," ",(0,l.jsx)("br",{}),"\n\u7c7b\u578b\u5b57\u9762\u91cf\uff08TypeLit\uff09\u662f\u4e00\u79cd\u590d\u5408\u7c7b\u578b\uff0c\u5b83\u53ef\u4ee5\u662f\u6570\u7ec4\u3001\u7ed3\u6784\u4f53\u3001\u6307\u9488\u3001\u51fd\u6570\u3001\u63a5\u53e3\u3001\u5207\u7247\u3001\u6620\u5c04\u6216\u901a\u9053\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Comments serve as program documentation. There are two forms:"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Line comments start with the character sequence // and stop at the end of the line.\nGeneral comments start with the character sequence /* and stop with the first subsequent character sequence */.\nA comment cannot start inside a rune or string literal, or inside a comment. A general comment containing no newlines acts like a space. Any other comment acts like a newline."}),"\n",(0,l.jsx)(t.h2,{id:"\u7c7b\u578b\u5206\u7c7b",children:"\u7c7b\u578b\u5206\u7c7b"}),"\n",(0,l.jsx)(t.p,{children:"\u6309\u7c7b\u578b\u7684\u590d\u6742\u6027\u548c\u6784\u9020\u65b9\u6cd5\u5212\u5206\uff1a\u57fa\u7840\u7c7b\u578b\u3001\u590d\u5408\u7c7b\u578b\n\u9884\u5b9a\u4e49\u7c7b\u578b\u3001\u81ea\u5b9a\u4e49\u7c7b\u578b\n\u547d\u540d\u7c7b\u578b\u3001\u672a\u547d\u540d\u7c7b\u578b"}),"\n",(0,l.jsx)(t.p,{children:"\u7c7b\u578b\u8f6c\u6362\n\u96f6\u503c\n\u7c7b\u578b\u63a8\u65ad"}),"\n",(0,l.jsx)(t.p,{children:"\u9664\u4e86\u9884\u5b9a\u4e49\u7c7b\u578b\u5916\uff0c\u5176\u4f59\u7c7b\u578b\u5747\u901a\u8fc7\u7c7b\u578b\u58f0\u660e\u548c\u7c7b\u578b\u53c2\u6570\u5217\u8868\u5f15\u5165\uff1f\n\u9884\u5b9a\u4e49\u7c7b\u578b\u5916\uff0c\u90fd\u662f\u975e\u547d\u540d\u7c7b\u578b\uff1f"}),"\n",(0,l.jsx)(t.h2,{id:"\u57fa\u7840\u7c7b\u578bbasic-types",children:"\u57fa\u7840\u7c7b\u578b\uff08Basic Types\uff09"}),"\n",(0,l.jsxs)(t.p,{children:["\u5728 Go \u8bed\u8a00\u7684\u89c4\u8303\u4e2d\uff0c\u57fa\u672c\u7c7b\u578b\u5305\u62ec\uff1a\u5e03\u5c14\u7c7b\u578b\u3001\u6570\u5b57\u7c7b\u578b\u3001\u5b57\u7b26\u4e32\u7c7b\u578b\u3002",(0,l.jsx)("br",{}),"\n\u5176\u4e2d\uff0c\u6570\u5b57\u7c7b\u578b\u7531\u6574\u578b\u3001\u6d6e\u70b9\u3001\u590d\u6570\u7ec4\u6210\u3002"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u5e03\u5c14\u7c7b\u578b\uff08Boolean Types\uff09"}),"\uff1abool"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u5b57\u7b26\u4e32\u7c7b\u578b\uff08String  Types\uff09"}),"\uff1astring"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u6570\u5b57\u7c7b\u578b\uff08Numeric Types\uff09"}),"\uff1a","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u65e0\u7b26\u53f7\u6574\u578b\uff1auint\u3001uint8\u3001uint16\u3001uint32\u3001uint64\u3001byte\uff08alias for uint8\uff09\u3001uintptr"}),"\n",(0,l.jsx)(t.li,{children:"\u6709\u7b26\u53f7\u6574\u578b\uff1aint\u3001int8\u3001int16\u3001int32\u3001int64\u3001rune\uff08alias for int32\uff09"}),"\n",(0,l.jsx)(t.li,{children:"\u6d6e\u70b9\u578b\uff1afloat32\u3001float64"}),"\n",(0,l.jsx)(t.li,{children:"\u590d\u6570\u7c7b\u578b\uff1acomplex64\u3001complex128"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u957f\u5ea6"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"bool"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"false"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5e03\u5c14\u7c7b\u578b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"uint8\u3001uint16\u3001uint32\u3001uint64"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1\u30012\u30014\u30018"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u65e0\u7b26\u53f7\u6574\u578b\uff0c\u8303\u56f4\uff1a0 ~ 2^n - 1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"int8\u3001int16\u3001int32\u3001int64"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1\u30012\u30014\u30018"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6709\u7b26\u53f7\u6574\u578b\uff0c\u8303\u56f4\uff1a-2^(n-1) ~2^(n-1) - 1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"float32\u3001float64"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4\u30018"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0.0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"IEEE-754 \u6807\u51c6\u7684\u6d6e\u70b9\u6570"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"complex64\u3001complex128"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0.0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"byte"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u8282\u7c7b\u578b\uff0cuint8 \u7684\u522b\u540d"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"rune"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7b26\u6587\u7c7b\u578b\uff0cint32 \u7684\u522b\u540d"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"uint"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4\u30018"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u65e0\u7b26\u53f7\u6574\u578b\u3002\u4f9d\u636e\u5e73\u53f0 32 \u6216 64 \u4f4d"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"int"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4\u30018"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6709\u7b26\u53f7\u6574\u578b\u3002\u4f9d\u636e\u5e73\u53f0 32 \u6216 64 \u4f4d"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"uintptr"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4\u30018"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8db3\u4ee5\u5b58\u50a8\u6307\u9488\u7684\u65e0\u7b26\u53f7\u6574\u6570"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'""'}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u7b26\u4e32\u7c7b\u578b"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"\u8fd9\u4e9b\u7c7b\u578b\u90fd\u662f Go \u8bed\u8a00\u7684\u57fa\u7840\u6784\u5efa\u5757\uff0c\u5e76\u4e14\u76f4\u63a5\u88ab\u8bed\u8a00\u6240\u652f\u6301\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u590d\u5408\u7c7b\u578bcomposite-types",children:"\u590d\u5408\u7c7b\u578b\uff08Composite Types\uff09"}),"\n",(0,l.jsx)(t.p,{children:"Composite types\u2014array, struct, pointer, function, interface, slice, map, and channel types\u2014may be constructed using type literals.\n\u4e00\u4e9b\u5730\u65b9\uff0c\u4f1a\u5c06\u590d\u5408\u7c7b\u578b\u8bf4\u6210\u5f15\u7528\u7c7b\u578b\uff0c\u56e0\u4e3a\u590d\u5408\u7c7b\u578b\u5b58\u5728\u5f15\u7528\u7c7b\u578b\u7684\u4e00\u4e9b\u884c\u4e3a\uff0c\u4f46\u6211\u8ba4\u4e3a\u8fd8\u662f\u6709\u6240\u533a\u522b\u7684\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u5728 Go \u8bed\u8a00\u4e2d\uff0c\u590d\u5408\u7c7b\u578b\uff08Composite Types\uff09\u662f\u6307\u7531\u5176\u4ed6\u7c7b\u578b\u6784\u6210\u7684\u7c7b\u578b\u3002\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\uff1a"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u6570\u7ec4\uff08Array\uff09"}),"\uff1a\u662f\u5177\u6709\u56fa\u5b9a\u957f\u5ea6\u4e14\u5143\u7d20\u7c7b\u578b\u76f8\u540c\u7684\u7c7b\u578b\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"[5]int"}),"\u4ee3\u8868\u4e00\u4e2a\u75315\u4e2a",(0,l.jsx)(t.code,{children:"int"}),"\u7c7b\u578b\u5143\u7d20\u6784\u6210\u7684\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u7ed3\u6784\u4f53\uff08Struct\uff09"}),"\uff1a\u662f\u4e00\u79cd\u805a\u5408\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5c060\u4e2a\u6216\u591a\u4e2a\u4efb\u610f\u7c7b\u578b\u7684\u503c\u805a\u5408\u6210\u4e00\u4e2a\u5b9e\u4f53\u3002\u6bcf\u4e2a\u503c\u88ab\u79f0\u4e3a\u7ed3\u6784\u4f53\u7684\u6210\u5458\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"struct {name string; age int}"}),"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5305\u542b",(0,l.jsx)(t.code,{children:"string"}),"\u7c7b\u578b\u7684",(0,l.jsx)(t.code,{children:"name"}),"\u5b57\u6bb5\u548c",(0,l.jsx)(t.code,{children:"int"}),"\u7c7b\u578b\u7684",(0,l.jsx)(t.code,{children:"age"}),"\u5b57\u6bb5\u7684\u7ed3\u6784\u4f53\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u5207\u7247\uff08Slice\uff09"}),"\uff1a\u662f\u4e00\u79cd\u957f\u5ea6\u53ef\u53d8\u7684\u6570\u7ec4\u7c7b\u578b\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"[]int"}),"\u8868\u793a\u4e00\u4e2a\u5143\u7d20\u7c7b\u578b\u4e3a",(0,l.jsx)(t.code,{children:"int"}),"\u7684\u5207\u7247\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u6620\u5c04\uff08Map\uff09"}),"\uff1a\u662f\u4e00\u79cd\u65e0\u5e8f\u7684\u952e\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u6240\u6709\u7684\u952e\u90fd\u662f\u552f\u4e00\u7684\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"map[string]int"}),"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u952e\u7c7b\u578b\u4e3a",(0,l.jsx)(t.code,{children:"string"}),"\uff0c\u503c\u7c7b\u578b\u4e3a",(0,l.jsx)(t.code,{children:"int"}),"\u7684\u6620\u5c04\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u6307\u9488\uff08Pointer\uff09"}),"\uff1a\u5b58\u50a8\u4e86\u53e6\u4e00\u79cd\u7c7b\u578b\u503c\u7684\u5185\u5b58\u5730\u5740\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"*int"}),"\u8868\u793a\u4e00\u4e2a\u6307\u5411",(0,l.jsx)(t.code,{children:"int"}),"\u7684\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u51fd\u6570\uff08Function\uff09"}),"\uff1a\u8868\u793a\u5177\u6709\u7279\u5b9a\u7b7e\u540d\uff08\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b\uff09\u7684\u51fd\u6570\u7c7b\u578b\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"func(int, int) string"}),"\u8868\u793a\u4e00\u4e2a\u63a5\u53d7\u4e24\u4e2a",(0,l.jsx)(t.code,{children:"int"}),"\u7c7b\u578b\u53c2\u6570\u5e76\u8fd4\u56de\u4e00\u4e2a",(0,l.jsx)(t.code,{children:"string"}),"\u7c7b\u578b\u503c\u7684\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"\u901a\u9053\uff08Channel\uff09"}),"\uff1a\u662f\u4e00\u79cd\u8fdb\u884c\u7c7b\u578b\u5316\u6570\u636e\u4f20\u8f93\u7684\u673a\u5236\uff0c\u53ef\u7528\u4e8e\u5728 Go \u7a0b\u5e8f\u4e2d\u8fdb\u884c\u534f\u7a0b\u95f4\u7684\u901a\u4fe1\u3002\u4f8b\u5982\uff0c",(0,l.jsx)(t.code,{children:"chan int"}),"\u8868\u793a\u4e00\u4e2a\u53ef\u4ee5\u4f20\u8f93",(0,l.jsx)(t.code,{children:"int"}),"\u7c7b\u578b\u503c\u7684\u901a\u9053\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"\u8fd9\u4e9b\u7c7b\u578b\u53ef\u4ee5\u7528\u6765\u6784\u9020\u66f4\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u3002\u5728 Go \u7684\u7c7b\u578b\u7cfb\u7edf\u4e2d\uff0c\u590d\u5408\u7c7b\u578b\u548c\u57fa\u672c\u7c7b\u578b\u4e00\u6837\u91cd\u8981\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u7528\u4f5c\u53d8\u91cf\u58f0\u660e\uff0c\u7ed3\u6784\u4f53\u5b57\u6bb5\uff0c\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7b49\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",children:"\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\n",(0,l.jsx)(t.h2,{id:"\u7c7b\u578b\u8f6c\u6362",children:"\u7c7b\u578b\u8f6c\u6362"})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var l=n(7294);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);