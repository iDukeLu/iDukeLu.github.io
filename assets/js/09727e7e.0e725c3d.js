"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[3201],{8467:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var i=r(5893),s=r(1151);const l={title:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\uff08\u7b80\u5355\u7406\u89e3\uff09",authors:"Duke Lu",date:new Date("2018-04-28T00:00:00.000Z"),tags:["java","jvm"]},a=void 0,t={permalink:"/blog/2018/jvm-data-area",source:"@site/blog/2018/jvm-data-area.md",title:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\uff08\u7b80\u5355\u7406\u89e3\uff09",description:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\u56fe\u793a",date:"2018-04-28T00:00:00.000Z",formattedDate:"2018\u5e744\u670828\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"jvm",permalink:"/blog/tags/jvm"}],readingTime:8.59,hasTruncateMarker:!0,authors:[{name:"Duke Lu",title:"Golang Development Engineer",url:"https://github.com/idukelu",imageURL:"https://github.com/idukelu.png",key:"Duke Lu"}],frontMatter:{title:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\uff08\u7b80\u5355\u7406\u89e3\uff09",authors:"Duke Lu",date:"2018-04-28T00:00:00.000Z",tags:["java","jvm"]},unlisted:!1,nextItem:{title:"Kubernetes v1.15.0 \u96c6\u7fa4\u7684\u5b89\u88c5\u90e8\u7f72\uff08\u8be6\u7ec6\u7248\uff09",permalink:"/blog/2018/k8s-install-detail"}},d={authorsImageUrls:[void 0]},c=[{value:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\u56fe\u793a",id:"java-\u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\u56fe\u793a",level:2},{value:"\u7a0b\u5e8f\u8ba1\u6570\u5668\uff08Program Counter Register\uff09",id:"\u7a0b\u5e8f\u8ba1\u6570\u5668program-counter-register",level:2},{value:"Java \u865a\u62df\u673a\u6808\uff08Java Virtual Machine Stacks\uff09",id:"java-\u865a\u62df\u673a\u6808java-virtual-machine-stacks",level:2},{value:"\u672c\u5730\u65b9\u6cd5\u6808\uff08Native Method Stack\uff09",id:"\u672c\u5730\u65b9\u6cd5\u6808native-method-stack",level:2},{value:"Java \u5806\uff08Java Heap\uff09",id:"java-\u5806java-heap",level:2},{value:"\u65b9\u6cd5\u533a\uff08Method Area\uff09",id:"\u65b9\u6cd5\u533amethod-area",level:2},{value:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\uff08Runtime Constant Pool Table\uff09",id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60runtime-constant-pool-table",level:4},{value:"\u76f4\u63a5\u5185\u5b58\uff08Direct Memory\uff09",id:"\u76f4\u63a5\u5185\u5b58direct-memory",level:2},{value:"\u603b\u7ed3\u4e00\u4e0b",id:"\u603b\u7ed3\u4e00\u4e0b",level:2},{value:"\u6982\u5ff5\u53ca\u8981\u70b9",id:"\u6982\u5ff5\u53ca\u8981\u70b9",level:4},{value:"\u540c\u6b65\u7b56\u7565",id:"\u540c\u6b65\u7b56\u7565",level:4},{value:"\u5f02\u5e38",id:"\u5f02\u5e38",level:4}];function o(n){const e={code:"code",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"java-\u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\u56fe\u793a",children:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\u56fe\u793a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://upload-images.jianshu.io/upload_images/12158715-2d7103aacd2e8185.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Java \u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7a0b\u5e8f\u8ba1\u6570\u5668program-counter-register",children:"\u7a0b\u5e8f\u8ba1\u6570\u5668\uff08Program Counter Register\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u7406\u89e3\uff1a\u7ebf\u7a0b\u79c1\u6709\u3001\u884c\u53f7\u6307\u793a\u5668"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7a0b\u5e8f\u8ba1\u6570\u5668"}),"\uff1a\u662f\u4e00\u5c0f\u5757\u5185\u5b58\u533a\u57df\uff0c\u5b83\u53ef\u4ee5\u770b\u4f5c\u662f\u5f53\u524d\u7ebf\u7a0b\u6240\u6267\u884c\u5b57\u8282\u7801\u7684\u884c\u53f7\u6307\u793a\u5668\u3002\n\u5b57\u8282\u7801\u89e3\u91ca\u5668\u5de5\u4f5c\u65f6\uff0c\u5c31\u662f\u901a\u8fc7\u6539\u53d8\u7a0b\u5e8f\u8ba1\u6570\u5668\u7684\u503c\u6765\u9009\u53d6\u4e0b\u4e00\u6761\u9700\u8981\u6267\u884c\u7684\u5b57\u8282\u7801\u6307\u4ee4\uff0c\u5206\u652f\u3001\u5faa\u73af\u3001\u8df3\u8f6c\u3001\u5f02\u5e38\u5904\u7406\u3001\u7ebf\u7a0b\u6062\u590d\u7b49\u57fa\u7840\u529f\u80fd\u90fd\u8981\u4f9d\u8d56\u7a0b\u5e8f\u8ba1\u6570\u5668\u6765\u5b8c\u6210\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8bb0\u5f55\u7684\u5185\u5bb9\n\u6267\u884c\u4e00\u4e2a Java \u65b9\u6cd5\uff1a\u8bb0\u5f55\u7684\u662f\uff0c\u6b63\u5728\u6267\u884c\u7684\u865a\u62df\u673a\u5b57\u8282\u7801\u6307\u4ee4\u7684\u5730\u5740\n\u6267\u884c\u4e00\u4e2a Native \u65b9\u6cd5\uff1a\u8ba1\u6570\u5668\u7684\u503c\u4e3a\u7a7a"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5f02\u5e38\n\u552f\u4e00\u4e00\u4e2a\u5728 Java \u865a\u62df\u673a\u89c4\u8303\u4e2d\u6ca1\u6709\u89c4\u5b9a\u4efb\u4f55 ",(0,i.jsx)(e.code,{children:"OutOfMemoryError"})," \u60c5\u51b5\u7684\u533a\u57df"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"java-\u865a\u62df\u673a\u6808java-virtual-machine-stacks",children:"Java \u865a\u62df\u673a\u6808\uff08Java Virtual Machine Stacks\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u7406\u89e3\uff1a\u7ebf\u7a0b\u79c1\u6709\u3001\u63cf\u8ff0 Java \u65b9\u6cd5\u6267\u884c\u8fc7\u7a0b"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u865a\u62df\u673a\u6808"}),"\uff1a\u63cf\u8ff0 Java \u65b9\u6cd5\u6267\u884c\u7684\u5185\u5b58\u6a21\u578b\u3002\u5b83\u7684\u751f\u547d\u5468\u671f\u540c\u7ebf\u7a0b\u3002\n\u6bcf\u4e2a\u65b9\u6cd5\u6267\u884c\u7684\u65f6\u5019\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u6808\u6862\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u7684\u8c03\u7528\u76f4\u81f3\u6267\u884c\u5b8c\u6210\uff0c\u5c31\u5bf9\u5e94\u4e00\u4e2a\u6808\u6862\u5728\u865a\u62df\u673a\u6808\u4e2d\u5165\u6808\u5230\u51fa\u6808\u9053\u8fc7\u7a0b"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6808\u6862\uff08Stack Frame\uff09\uff1a\u5b58\u50a8\u5c40\u90e8\u53d8\u91cf\u8868\u3001\u64cd\u4f5c\u6570\u6808\u3001\u52a8\u6001\u94fe\u8868\u3001\u65b9\u6cd5\u51fa\u53e3\u7b49\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c40\u90e8\u53d8\u91cf\u8868\uff1a\u5b58\u653e\u7f16\u8bd1\u671f\u53ef\u77e5\u7684\u5404\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3001\u5bf9\u8c61\u5f15\u7528\u3001returnAddress\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5f02\u5e38\n",(0,i.jsx)(e.code,{children:"StackOverflowError"}),"\uff1a\u7ebf\u7a0b\u8bf7\u6c42\u7684\u6808\u6df1\u5ea6\u5927\u4e8e\u865a\u62df\u673a\u5141\u8bb8\u7684\u6df1\u5ea6\u65f6\uff0c\u629b\u51fa\n",(0,i.jsx)(e.code,{children:"OutOfMemoryError"}),"\uff1a\u865a\u62df\u673a\u6808\u52a8\u6001\u6269\u5c55\u65f6\u65e0\u6cd5\u7533\u8bf7\u5230\u8db3\u591f\u5185\u5b58\u65f6\uff0c\u629b\u51fa"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u672c\u5730\u65b9\u6cd5\u6808native-method-stack",children:"\u672c\u5730\u65b9\u6cd5\u6808\uff08Native Method Stack\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u7406\u89e3\uff1a\u7ebf\u7a0b\u79c1\u6709\u3001\u63cf\u8ff0 Native \u65b9\u6cd5\u6267\u884c\u8fc7\u7a0b"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u672c\u5730\u65b9\u6cd5\u6808"}),"\uff1a\u4e0e Java \u865a\u62df\u673a\u6808\u53d1\u6325\u5230\u4f5c\u7528\u975e\u5e38\u76f8\u4f3c\u3002\n\u865a\u62df\u673a\u6808\uff1a\u4e3a\u865a\u62df\u673a\u6267\u884c Java \u65b9\u6cd5\u670d\u52a1\uff1b\u672c\u5730\u65b9\u6cd5\u6808\uff1a\u4e3a\u865a\u62df\u673a\u6267\u884c Native \u65b9\u6cd5\u670d\u52a1"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5f02\u5e38\n",(0,i.jsx)(e.code,{children:"StackOverflowError"}),"\uff1a\u7ebf\u7a0b\u8bf7\u6c42\u7684\u6808\u6df1\u5ea6\u5927\u4e8e\u865a\u62df\u673a\u5141\u8bb8\u7684\u6df1\u5ea6\u65f6\uff0c\u629b\u51fa\n",(0,i.jsx)(e.code,{children:"OutOfMemoryError"}),"\uff1a\u865a\u62df\u673a\u6808\u52a8\u6001\u6269\u5c55\u65f6\u65e0\u6cd5\u7533\u8bf7\u5230\u8db3\u591f\u5185\u5b58\u65f6\uff0c\u629b\u51fa"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"java-\u5806java-heap",children:"Java \u5806\uff08Java Heap\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u7406\u89e3\uff1a\u7ebf\u7a0b\u5171\u4eab\u3001\u5b58\u653e\u5bf9\u8c61\u5b9e\u4f8b"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Java \u5806"}),"\uff1a\u88ab\u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u7684\u4e00\u5757\u5185\u5b58\u533a\u57df\uff0c\u5728\u865a\u62df\u673a\u542f\u52a8\u65f6\u521b\u5efa\u3002\nJava \u5806\u5185\u5b58\u533a\u57df\u7684\u552f\u4e00\u76ee\u7684\u5c31\u662f\uff1a\u5b58\u653e\u5bf9\u8c61\u5b9e\u4f8b\uff08\u4f46\uff0c\u5bf9\u8c61\u5b9e\u4f8b\u90fd\u5206\u914d\u5728\u5806\u4e0a\uff0c\u4e0d\u662f\u7edd\u5bf9\u7684\uff09\nJava \u5806\u662f\u5783\u573e\u6536\u96c6\u5668\u7ba1\u7406\u7684\u4e3b\u8981\u533a\u57df\uff0c\u5f88\u591a\u65f6\u5019\u4e5f\u88ab\u79f0\u4e3a\u201cGC\u5806\uff08Garbage Collected Heap\uff09\u201d\n\u6839\u636e Java \u865a\u62df\u673a\u89c4\u8303\u89c4\u5b9a\uff1aJava \u5806\u53ef\u4ee5\u5904\u4e8e\u7269\u7406\u4e0a\u4e0d\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\u4e2d\uff0c\u53ea\u8981\u903b\u8f91\u4e0a\u8fde\u7eed\u5373\u53ef"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5806\u5185\u5b58\u5212\u5206\n\u5206\u4ee3\u6536\u96c6\u6cd5\u7684\u89d2\u5ea6\uff1a\n\u65b0\u751f\u4ee3\u3001\u8001\u5e74\u4ee3\uff08\u7ec6\u81f4\u4e00\u70b9\uff1aEden \u7a7a\u95f4\u3001From Survivor\u7a7a\u95f4\u3001To Survivor\u7a7a\u95f4\u7b49\uff09"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5185\u5b58\u5206\u914d\u7684\u89d2\u5ea6\uff1a\n\u7ebf\u7a0b\u5171\u4eab\u7684 Java \u5806\u53ef\u80fd\u5212\u5206\u51fa\u591a\u4e2a\u7ebf\u7a0b\u79c1\u6709\u7684\u5206\u914d\u7f13\u51b2\u533a\uff08Thread Local Allocation Buffer\uff0cTLAB\uff09"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5f02\u5e38\n",(0,i.jsx)(e.code,{children:"OutOfMemoryError"}),"\uff1a\u5806\u4e2d\u6ca1\u6709\u5185\u5b58\u5b8c\u6210\u5b9e\u4f8b\u5206\u914d\uff0c\u5e76\u4e14\u5806\u4e5f\u65e0\u6cd5\u518d\u6269\u5c55\u65f6\uff0c\u629b\u51fa"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u65b9\u6cd5\u533amethod-area",children:"\u65b9\u6cd5\u533a\uff08Method Area\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u7406\u89e3\uff1a\u7ebf\u7a0b\u5171\u4eab\u3001\u5b58\u653e\u5bf9\u8c61\u5b9e\u4f8b\u4ee5\u5916\u7684\u6570\u636e"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u65b9\u6cd5\u533a"}),"\uff1a\u4e0e Java \u5806\u4e00\u6837\uff0c\u88ab\u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u7684\u4e00\u5757\u5185\u5b58\u533a\u57df\u3002\n\u65b9\u6cd5\u533a\u7528\u4e8e\u5b58\u50a8\uff1a\u5df2\u88ab\u865a\u62df\u673a\u52a0\u8f7d\u7684\u7c7b\u4fe1\u606f\u3001\u5e38\u91cf\u3001\u9759\u6001\u53d8\u91cf\u3001\u5373\u65f6\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u7b49\u6570\u636e\n\u7c7b\u4fe1\u606f\uff1a\u5b58\u50a8\u7c7b\u540d\u3001\u8bbf\u95ee\u4fee\u9970\u7b26\u3001\u5e38\u91cf\u6c60\u3001\u5b57\u6bb5\u63cf\u8ff0\u3001\u65b9\u6cd5\u63cf\u8ff0\u7b49\n\u4e60\u60ef\u5728 HotSpot \u865a\u62df\u673a\u4e0a\u5f00\u53d1\u3001\u90e8\u7f72\u7684\u5f00\u53d1\u8005\uff0c\u66f4\u613f\u610f\u5c06\u65b9\u6cd5\u533a\u79f0\u4e3a\u201c\u6c38\u4e45\u4ee3\uff08Permanent Generation\uff09\u201d"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5783\u573e\u56de\u6536\u7684\u76ee\u6807\n\u5bf9\u5e38\u91cf\u6c60\u7684\u56de\u6536\u3001\u5bf9\u7c7b\u578b\u7684\u5378\u8f7d"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5f02\u5e38\n",(0,i.jsx)(e.code,{children:"OutOfMemoryError"}),"\uff1a\u65b9\u6cd5\u533a\u65e0\u6cd5\u6ee1\u8db3\u5185\u5b58\u5206\u914d\u65f6\uff0c\u629b\u51fa"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60runtime-constant-pool-table",children:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\uff08Runtime Constant Pool Table\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u7406\u89e3\uff1a\u7ebf\u7a0b\u5171\u4eab\u3001\u5b58\u653e\u5b57\u9762\u91cf\u3001\u7b26\u53f7\u5f15\u7528\u3001\u76f4\u63a5\u5f15\u7528"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"}),"\uff1a\u65b9\u6cd5\u533a\u7684\u4e00\u90e8\u5206\u3002\nClass \u6587\u4ef6\u9664\u4e86\u6709\u7c7b\u7684\u7248\u672c\u3001\u5b57\u6bb5\u3001\u65b9\u6cd5\u3001\u63a5\u53e3\u7b49\u63cf\u8ff0\u4fe1\u606f\uff1b\u8fd8\u6709\u4e00\u9879\u4fe1\u606f\uff0c\u4fbf\u662f\u5e38\u91cf\u6c60\uff0c\u7528\u4e8e\u5b58\u653e\u7f16\u8bd1\u671f\u751f\u6210\u7684\u5404\u79cd\u5b57\u9762\u91cf\u548c\u5b57\u7b26\u5f15\u7528\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\uff08\u5e38\u91cf\u6c60\uff09\u5c06\u5728\u7c7b\u52a0\u8f7d\u540e\u8fdb\u5165\u65b9\u6cd5\u533a\u7684\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u4e2d\u5b58\u653e\u3002\n\u4e0d\u8fc7\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u9664\u4e86\u4fdd\u5b58 Class \u6587\u4ef6\u4e2d\u63cf\u8ff0\u7684\u7b26\u53f7\u5f15\u7528\u5916\uff0c\u8fd8\u4f1a\u628a\u7ffb\u8bd1\u51fa\u6765\u7684\u76f4\u63a5\u5f15\u7528\u4e5f\u5b58\u50a8\u5728\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u4e2d\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u52a8\u6001\u6027\nJava \u8bed\u8a00\u5e76\u4e0d\u8981\u6c42\u5e38\u91cf\u4e00\u5b9a\u53ea\u5728\u7f16\u8bd1\u671f\u4ea7\u751f\uff0c\u8fd0\u884c\u671f\u95f4\u4e5f\u53ef\u80fd\u5c06\u65b0\u7684\u5e38\u91cf\u653e\u5165\u6c60\u4e2d\u3002\uff08\u6bd4\u5982\uff1aString \u7684 intern() \u65b9\u6cd5\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5f02\u5e38\n",(0,i.jsx)(e.code,{children:"OutOfMemoryError"}),"\uff1a\u5e38\u91cf\u6c60\u65e0\u6cd5\u518d\u7533\u8bf7\u5230\u5185\u5b58\u65f6\uff0c\u629b\u51fa"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u76f4\u63a5\u5185\u5b58direct-memory",children:"\u76f4\u63a5\u5185\u5b58\uff08Direct Memory\uff09"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u76f4\u63a5\u5185\u5b58"}),"\uff1a\u8fd9\u5757\u5185\u5b58\u533a\u57df\uff0c\u4e0d\u662f\u865a\u62df\u673a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u533a\u57df\u7684\u4e00\u90e8\u5206\uff0c\u4e5f\u4e0d\u662f Java \u865a\u62df\u673a\u89c4\u8303\u4e2d\u5b9a\u4e49\u7684\u5185\u5b58\u533a\u57df\u3002\nNio \u64cd\u4f5c\u65f6\uff0c\u4e3a\u63d0\u9ad8\u6548\u7387\uff0c\u907f\u514d\u5728 Java \u5806\u548c Native \u5806\u4e2d\u6765\u56de\u590d\u5236\u6570\u636e\uff0c\u8fd0\u884c\u76f4\u63a5\u64cd\u4f5c\u5806\u5916\u5185\uff0c\u5373\u76f4\u63a5\u5185\u5b58\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5f02\u5e38\n",(0,i.jsx)(e.code,{children:"OutOfMemoryError"}),"\uff1a\u865a\u62df\u673a\u8bbe\u7f6e\u7684\u5185\u5b58\u5927\u4e8e\u7269\u7406\u5185\u5b58\u9650\u5236\uff0c\u865a\u62df\u673a\u5185\u5b58\u52a8\u6001\u6269\u5c55\u65f6\u65e0\u6cd5\u8fbe\u5230\u8bbe\u7f6e\u503c\u65f6\uff0c\u629b\u51fa"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u603b\u7ed3\u4e00\u4e0b",children:"\u603b\u7ed3\u4e00\u4e0b"}),"\n",(0,i.jsx)(e.h4,{id:"\u6982\u5ff5\u53ca\u8981\u70b9",children:"\u6982\u5ff5\u53ca\u8981\u70b9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7a0b\u5e8f\u8ba1\u6570\u5668\uff1a\u5b57\u8282\u7801\u7684\u884c\u53f7\u6307\u793a\u5668\nJava \u65b9\u6cd5\uff1a\u8bb0\u5f55\u5b57\u8282\u7801\u6307\u4ee4\u7684\u5730\u5740\nNative \u65b9\u6cd5\uff1a\u8bb0\u5f55\u503c\u4e3a\u7a7a"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u865a\u62df\u673a\u6808\uff1aJava \u65b9\u6cd5\u8c03\u7528\u7684\u5185\u5b58\u6a21\u578b\n\u5b58\u653e",(0,i.jsx)(e.strong,{children:"\u6808\u6862"}),"\uff1b\u6808\u6862\u76f8\u5f53\u4e8e\u662f\u5bf9\u65b9\u6cd5\u7684\u63cf\u8ff0\n\u6808\u6862\uff1a\u5b58\u50a8\u5c40\u90e8\u53d8\u91cf\u8868\u3001\u64cd\u4f5c\u6570\u6808\u3001\u52a8\u6001\u94fe\u8868\u3001\u65b9\u6cd5\u51fa\u53e3\u7b49\u4fe1\u606f\n\u5c40\u90e8\u53d8\u91cf\u8868\uff1a\u5b58\u653e\u7f16\u8bd1\u671f\u53ef\u77e5\u7684\u5404\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3001\u5bf9\u8c61\u5f15\u7528\u3001returnAddress\u7c7b\u578b"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u672c\u5730\u65b9\u6cd5\u6808\uff1aNative \u65b9\u6cd5\u8c03\u7528\u7684\u5185\u5b58\u6a21\u578b"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5806\uff1a\u5b58\u50a8\u5bf9\u8c61\u5b9e\u4f8b\u7684\u5185\u5b58\u7a7a\u95f4\n\u5b58\u653e",(0,i.jsx)(e.strong,{children:"\u5b9e\u4f8b\u5bf9\u8c61"}),"\uff1b\u7269\u7406\u5730\u5740\u53ef\u4ee5\u4e0d\u8fde\u7eed\n\u5806\u5185\u5b58\u5212\u5206\uff1a\u65b0\u751f\u4ee3\u3001\u8001\u5e74\u4ee3\uff08Eden \u7a7a\u95f4\u3001From Survivor\u7a7a\u95f4\u3001To Survivor\u7a7a\u95f4\uff09\uff1b\u672c\u5730\u7ebf\u7a0b\u5206\u914d\u7f13\u51b2"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u65b9\u6cd5\u533a\uff1a\u5b58\u50a8\u5bf9\u8c61\u5b9e\u4f8b\u4ee5\u5916\u6570\u636e\u7684\u5185\u5b58\u7a7a\u95f4\n\u5b58\u50a8\u5df2\u88ab\u865a\u62df\u673a\u52a0\u8f7d\u7684",(0,i.jsx)(e.strong,{children:"\u7c7b\u4fe1\u606f"}),"\u3001",(0,i.jsx)(e.strong,{children:"\u5e38\u91cf"}),"\u3001",(0,i.jsx)(e.strong,{children:"\u9759\u6001\u53d8\u91cf"}),"\u3001",(0,i.jsx)(e.strong,{children:"\u5373\u65f6\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u7684\u4ee3\u7801"}),"\u7b49\u6570\u636e\n\u7c7b\u4fe1\u606f\uff1a\u5b58\u50a8\u7c7b\u540d\u3001\u8bbf\u95ee\u4fee\u9970\u7b26\u3001\u5e38\u91cf\u6c60\u3001\u5b57\u6bb5\u63cf\u8ff0\u3001\u65b9\u6cd5\u63cf\u8ff0\u7b49\n\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\uff1a\u5b58\u653e Class \u6587\u4ef6\u4e2d\u7684\u5e38\u91cf\u6c60\uff08\u5305\u542b\uff1a\u5b57\u9762\u91cf\u3001\u7b26\u53f7\u5f15\u7528\uff09\u3001\u76f4\u63a5\u5f15\u7528\uff1b\u5177\u6709\u52a8\u6001\u6027"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u540c\u6b65\u7b56\u7565",children:"\u540c\u6b65\u7b56\u7565"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7ebf\u7a0b\u79c1\u6709\uff1a\u7a0b\u5e8f\u8ba1\u6570\u5668\u3001\u865a\u62df\u673a\u6808\u3001\u672c\u5730\u65b9\u6cd5\u6808"}),"\n",(0,i.jsx)(e.li,{children:"\u7ebf\u7a0b\u5171\u4eab\uff1a\u5806\u3001\u65b9\u6cd5\u533a"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u5f02\u5e38",children:"\u5f02\u5e38"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7a0b\u5e8f\u8ba1\u6570\u5668\uff1a\u65e0\u5f02\u5e38"}),"\n",(0,i.jsxs)(e.li,{children:["\u865a\u62df\u673a\u6808\uff1a",(0,i.jsx)(e.code,{children:"StackOverflowError"}),"\u3001",(0,i.jsx)(e.code,{children:"OutOfMemoryError"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u672c\u5730\u65b9\u6cd5\u6808\uff1a",(0,i.jsx)(e.code,{children:"StackOverflowError"}),"\u3001",(0,i.jsx)(e.code,{children:"OutOfMemoryError"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5806\uff1a",(0,i.jsx)(e.code,{children:"OutOfMemoryError"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u65b9\u6cd5\u533a\uff1a",(0,i.jsx)(e.code,{children:"OutOfMemoryError"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u76f4\u63a5\u5185\u5b58\uff1a",(0,i.jsx)(e.code,{children:"OutOfMemoryError"})]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u53c2\u8003\uff1a\u300a\u6df1\u5165\u7406\u89e3Java\u865a\u62df\u673a\u300b"})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>t,a:()=>a});var i=r(7294);const s={},l=i.createContext(s);function a(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);