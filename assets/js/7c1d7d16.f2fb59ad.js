"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[7600],{5015:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=i(5893),t=i(1151);const s={title:"\u63a5\u53e3",sidebar_label:"\u63a5\u53e3",sidebar_position:1},c=void 0,r={id:"java/java-collections/interface/interface",title:"\u63a5\u53e3",description:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u6982\u8ff0",source:"@site/docs/java/java-collections/interface/interface.md",sourceDirName:"java/java-collections/interface",slug:"/java/java-collections/interface/",permalink:"/docs/java/java-collections/interface/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u63a5\u53e3",sidebar_label:"\u63a5\u53e3",sidebar_position:1},sidebar:"javaSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/java/java-collections/Introduction"},next:{title:"Collection \u63a5\u53e3",permalink:"/docs/java/java-collections/interface/collection"}},l={},a=[{value:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u6982\u8ff0",id:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u6982\u8ff0",level:2},{value:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u63cf\u8ff0",id:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u63cf\u8ff0",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u6982\u8ff0",children:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u6982\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"Java \u96c6\u5408\u6846\u67b6\u7684\u6838\u5fc3\u63a5\u53e3\uff0c\u4e3b\u8981\u7531\u4e24\u9897\u6811\u7ec4\u6210\uff1ajava.util.Collection\u3001java.util.Map\n\u5b83\u4eec\u5c42\u6b21\u7ed3\u6784\u5173\u7cfb\uff0c\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://docs.oracle.com/javase/tutorial/figures/collections/colls-coreInterfaces.gif",alt:"Java \u96c6\u5408\u6846\u67b6\u6838\u5fc3\u63a5\u53e3"})}),"\n",(0,o.jsx)(n.p,{children:"Java \u5b98\u65b9\u6587\u6863\u4e2d\u63d0\u5230\uff1a"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The core collection interfaces encapsulate different types of collections. These interfaces allow collections to be manipulated independently of the details of their representation. Core collection interfaces are the foundation of the Java Collections Framework. As you can see in the following figure, the core collection interfaces form a hierarchy."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5927\u81f4\u662f\u5728\u8bf4\uff0c\u8fd9\u4e9b\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5c01\u88c5\u4e86\u4e0d\u540c\u7c7b\u578b\u7684\u96c6\u5408"}),"\n",(0,o.jsx)(n.li,{children:"\u5141\u8bb8\u72ec\u7acb\u4e8e\u5176\u8868\u793a\u7684\u7ec6\u8282\u6765\u64cd\u7eb5\u96c6\u5408(\u591a\u6001)"}),"\n",(0,o.jsx)(n.li,{children:"\u662fJava\u96c6\u5408\u6846\u67b6\u7684\u57fa\u7840"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u7136\u8fd8\u63d0\u5230\u4e86\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff1a"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["To keep the number of core collection interfaces manageable, the Java platform doesn't provide separate interfaces for each variant of each collection type. (Such variants might include immutable, fixed-size, and append-only.) Instead, the modification operations in each interface are designated ",(0,o.jsx)(n.em,{children:"optional"})," \u2014 a given implementation may elect not to support all operations. If an unsupported operation is invoked, a collection throws an ",(0,o.jsx)(n.code,{children:"UnsupportedOperationException"}),". Implementations are responsible for documenting which of the optional operations they support. All of the Java platform's general-purpose implementations support all of the optional operations."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u91cc\u4e3b\u8981\u8bb2\u7684\u662f\uff1a\nJava \u5e73\u53f0\u4e3a\u63a7\u5236\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u7684\u6570\u91cf\uff0c\u4e0d\u4f1a\u4e3a\u7279\u6b8a\u5b9e\u73b0(\u5373\uff1a\u53d8\u4f53)\u63d0\u4f9b\u5355\u72ec\u7684\u63a5\u53e3\uff0c\u800c\u662f\u91c7\u53d6\u53e6\u4e00\u79cd\u65b9\u5f0f\uff1a\u6bcf\u4e2a\u63a5\u53e3\u7684\u4fee\u6539\u65b9\u6cd5\u90fd\u662f\u53ef\u9009\u7684(optional)\u3002\n\u600e\u4e48\u7406\u89e3\u5462\uff0c\u8bf4\u767d\u4e86\uff0c\u5c31\u662f\u5b9e\u73b0\u7c7b\u5728\u5b9e\u73b0\u63a5\u53e3\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u5b9e\u73b0\u8fd9\u4e9b\u65b9\u6cd5\u3002\u82e5\u8c03\u7528\u4e86\u6ca1\u6709\u5b9e\u73b0\u7684\u65b9\u6cd5\uff0c\u5c31\u4f1a\u629b\u51fa\u5f02\u5e38\uff1a",(0,o.jsx)(n.code,{children:"UnsupportedOperationException"}),"\u3002\n(\u5728\u63d0\u4e00\u70b9\uff1a\u5728\u9605\u8bfb\u6e90\u7801\u7684\u65f6\u5019\uff0c\u5982\u679c\u4f60\u770b\u5230 ",(0,o.jsx)(n.code,{children:"optional"}),"\u3001",(0,o.jsx)(n.code,{children:"operation"})," \u8fd9\u6837\u7684\u6587\u5b57\uff0c\u5c31\u662f\u5728\u8bf4\u660e\uff0c\u8be5\u65b9\u6cd5\u662f\u4e00\u4e2a\u53ef\u9009\u65b9\u6cd5)"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u63cf\u8ff0",children:"\u6838\u5fc3\u96c6\u5408\u63a5\u53e3\u63cf\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"Java \u5b98\u65b9\u6587\u6863\u4e2d\u7684\u63cf\u8ff0\uff1a"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The following list describes the core collection interfaces:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Collection"})," \u2014 the root of the collection hierarchy. A collection represents a group of objects known as its ",(0,o.jsx)(n.em,{children:"elements"}),". The ",(0,o.jsx)(n.code,{children:"Collection"})," interface is the least common denominator that all collections implement and is used to pass collections around and to manipulate them when maximum generality is desired. Some types of collections allow duplicate elements, and others do not. Some are ordered and others are unordered. The Java platform doesn't provide any direct implementations of this interface but provides implementations of more specific subinterfaces, such as ",(0,o.jsx)(n.code,{children:"Set"})," and ",(0,o.jsx)(n.code,{children:"List"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Set"})," \u2014 a collection that cannot contain duplicate elements. This interface models the mathematical set abstraction and is used to represent sets, such as the cards comprising a poker hand, the courses making up a student's schedule, or the processes running on a machine."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"List"})," \u2014 an ordered collection (sometimes called a ",(0,o.jsx)(n.em,{children:"sequence"}),"). ",(0,o.jsx)(n.code,{children:"List"}),"s can contain duplicate elements. The user of a ",(0,o.jsx)(n.code,{children:"List"})," generally has precise control over where in the list each element is inserted and can access elements by their integer index (position). If you've used ",(0,o.jsx)(n.code,{children:"Vector"}),", you're familiar with the general flavor of ",(0,o.jsx)(n.code,{children:"List"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Queue"})," \u2014 a collection used to hold multiple elements prior to processing. Besides basic ",(0,o.jsx)(n.code,{children:"Collection"})," operations, a ",(0,o.jsx)(n.code,{children:"Queue"})," provides additional insertion, extraction, and inspection operations.\nQueues typically, but do not necessarily, order elements in a FIFO (first-in, first-out) manner. Among the exceptions are priority queues, which order elements according to a supplied comparator or the elements' natural ordering. Whatever the ordering used, the head of the queue is the element that would be removed by a call to ",(0,o.jsx)(n.code,{children:"remove"})," or ",(0,o.jsx)(n.code,{children:"poll"}),". In a FIFO queue, all new elements are inserted at the tail of the queue. Other kinds of queues may use different placement rules. Every ",(0,o.jsx)(n.code,{children:"Queue"})," implementation must specify its ordering properties."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Deque"})," \u2014 a collection used to hold multiple elements prior to processing. Besides basic ",(0,o.jsx)(n.code,{children:"Collection"})," operations, a ",(0,o.jsx)(n.code,{children:"Deque"})," provides additional insertion, extraction, and inspection operations.\nDeques can be used both as FIFO (first-in, first-out) and LIFO (last-in, first-out). In a deque all new elements can be inserted, retrieved and removed at both ends."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Map"})," \u2014 an object that maps keys to values. A ",(0,o.jsx)(n.code,{children:"Map"})," cannot contain duplicate keys; each key can map to at most one value. If you've used ",(0,o.jsx)(n.code,{children:"Hashtable"}),", you're already familiar with the basics of ",(0,o.jsx)(n.code,{children:"Map"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u7cbe\u7b80\u4e00\u4e0b\uff0c\u5dee\u4e0d\u591a\u5c31\u8fd9\u4e2a\u610f\u601d\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Collection"}),"\uff1a\u96c6\u5408\u5c42\u6b21\u7ed3\u6784\u7684\u6839\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Set"}),"\uff1a\u4e0d\u80fd\u5305\u542b\u91cd\u590d\u5143\u7d20\u7684\u96c6\u5408\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"List"}),"\uff1a\u6709\u5e8f\u96c6\u5408(\u6709\u65f6\u79f0\u4e3a\u5e8f\u5217)\u3002\u53ef\u4ee5\u5305\u542b\u91cd\u590d\u7684\u5143\u7d20\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Queues "}),"\uff1a\u7528\u4e8e\u5728\u5904\u7406\u4e4b\u524d\u4fdd\u5b58\u591a\u4e2a\u5143\u7d20\u7684\u96c6\u5408\u3002\u9664\u4e86\u57fa\u672c\u7684\u96c6\u5408\u64cd\u4f5c\u4e4b\u5916\uff0c\u961f\u5217\u8fd8\u63d0\u4f9b\u989d\u5916\u7684\u63d2\u5165\u3001\u63d0\u53d6\u548c\u68c0\u67e5\u64cd\u4f5c\u3002",(0,o.jsx)(n.code,{children:"Queues "}),"\u901a\u5e38(\u4f46\u4e0d\u4e00\u5b9a)\u4ee5FIFO(\u5148\u5165\u5148\u51fa)\u7684\u65b9\u5f0f\u5bf9\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Deque "}),"\uff1a\u7528\u4e8e\u5728\u5904\u7406\u4e4b\u524d\u4fdd\u5b58\u591a\u4e2a\u5143\u7d20\u7684\u96c6\u5408\u3002\u9664\u4e86\u57fa\u672c\u7684\u96c6\u5408\u64cd\u4f5c\u4e4b\u5916\uff0c\u961f\u5217\u8fd8\u63d0\u4f9b\u989d\u5916\u7684\u63d2\u5165\u3001\u63d0\u53d6\u548c\u68c0\u67e5\u64cd\u4f5c\u3002",(0,o.jsx)(n.code,{children:"Deques"})," \u53ef\u4ee5\u540c\u65f6\u7528\u4f5cFIFO(\u5148\u5165\u5148\u51fa)\u548cLIFO(\u540e\u5165\u5148\u51fa)\u3002\u5728Deques\u4e2d\uff0c\u6240\u6709\u65b0\u5143\u7d20\u90fd\u53ef\u4ee5\u5728\u4e24\u7aef\u63d2\u5165\u3001\u68c0\u7d22\u548c\u5220\u9664\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Map "}),"\uff1a\u5c06\u952e\u6620\u5c04\u5230\u503c\u7684\u5bf9\u8c61\u3002",(0,o.jsx)(n.code,{children:"Map"})," \u4e0d\u80fd\u5305\u542b\u91cd\u590d\u7684\u952e\uff1b\u6bcf\u4e2a\u952e\u6700\u591a\u53ef\u4ee5\u6620\u5c04\u5230\u4e00\u4e2a\u503c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Set"})," \u548c ",(0,o.jsx)(n.code,{children:"Map"})," \u8fd8\u6709\u4e24\u4e2a\u6392\u5e8f\u7684\u7248\u672c\uff1a"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The last two core collection interfaces are merely sorted versions of ",(0,o.jsx)(n.code,{children:"Set"})," and ",(0,o.jsx)(n.code,{children:"Map"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortedSet"})," \u2014 a ",(0,o.jsx)(n.code,{children:"Set"})," that maintains its elements in ascending order. Several additional operations are provided to take advantage of the ordering. Sorted sets are used for naturally ordered sets, such as word lists and membership rolls."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortedMap"})," \u2014 a ",(0,o.jsx)(n.code,{children:"Map"})," that maintains its mappings in ascending key order. This is the ",(0,o.jsx)(n.code,{children:"Map"})," analog of ",(0,o.jsx)(n.code,{children:"SortedSet"}),". Sorted maps are used for naturally ordered collections of key/value pairs, such as dictionaries and telephone directories."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8bb2\u7684\u662f ",(0,o.jsx)(n.code,{children:"Set"})," \u548c ",(0,o.jsx)(n.code,{children:"Map"})," \u7684\u6392\u5e8f\u7248\u672c:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortedSet"}),"\uff1a\u4ee5\u5347\u5e8f\u7ef4\u62a4\u5176\u5143\u7d20\u7684\u96c6\u5408\u3002\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u6765\u5229\u7528\u6392\u5e8f\u3002\u6392\u5e8f\u96c6\u7528\u4e8e\u81ea\u7136\u6392\u5e8f\u96c6\uff0c\u4f8b\u5982\u5355\u8bcd\u5217\u8868\u548c\u6210\u5458\u5217\u8868\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortedMap"}),"\uff1a\u4ee5\u5347\u5e8f\u952e\u987a\u5e8f\u7ef4\u62a4\u6620\u5c04\u7684\u6620\u5c04\u3002\u8fd9\u662fSortedSet\u7684\u6620\u5c04\u6a21\u62df\u3002\u6392\u5e8f\u6620\u5c04\u7528\u4e8e\u81ea\u7136\u6392\u5e8f\u7684\u952e/\u503c\u5bf9\u96c6\u5408\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["\u66f4\u591a\u53c2\u8003\uff1a\n",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html",children:"Interfaces (The Java\u2122 Tutorials > Collections)"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var o=i(7294);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);