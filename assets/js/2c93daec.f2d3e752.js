"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[4521],{8629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(5893),c=n(1151);const i={title:"Docker",sidebar_label:"Docker",authors:"Duke Lu",date:new Date("2024-05-14T00:00:00.000Z"),tags:["\u4e91\u539f\u751f","Docker"],sidebar_position:1},o=void 0,s={id:"cloudnative/docker/docker",title:"Docker",description:"\u4ec0\u4e48\u662f Docker",source:"@site/docs/cloudnative/docker/docker.md",sourceDirName:"cloudnative/docker",slug:"/cloudnative/docker/",permalink:"/docs/cloudnative/docker/",draft:!1,unlisted:!1,tags:[{label:"\u4e91\u539f\u751f",permalink:"/docs/tags/\u4e91\u539f\u751f"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:1,frontMatter:{title:"Docker",sidebar_label:"Docker",authors:"Duke Lu",date:"2024-05-14T00:00:00.000Z",tags:["\u4e91\u539f\u751f","Docker"],sidebar_position:1},sidebar:"CloudNativeSidebar",next:{title:"Docker \u7684\u5b89\u88c5\u4e0e\u5378\u8f7d",permalink:"/docs/cloudnative/docker/docker-install"}},d={},l=[{value:"\u4ec0\u4e48\u662f Docker",id:"\u4ec0\u4e48\u662f-docker",level:2},{value:"Docker \u67b6\u6784",id:"docker-\u67b6\u6784",level:2},{value:"Docker VS \u865a\u62df\u673a",id:"docker-vs-\u865a\u62df\u673a",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u4ec0\u4e48\u662f-docker",children:"\u4ec0\u4e48\u662f Docker"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code, you can significantly reduce the delay between writing code and running it in production."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Docker \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u8f7b\u91cf\u7ea7\u7684\u865a\u62df\u5316\u5bb9\u5668\u7ba1\u7406\u5f15\u64ce\uff0c\u65e8\u5728\u7b80\u5316\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u3002\u5b83\u901a\u8fc7\u4f7f\u7528\u5bb9\u5668\uff08Containers\uff09\u6765\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u3002\u5bb9\u5668\u662f\u8f7b\u91cf\u7ea7\u3001\u53ef\u79fb\u690d\u7684\u865a\u62df\u5316\u5355\u5143\uff0c\u5305\u542b\u4e86\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u6240\u6709\u4f9d\u8d56\u9879\uff0c\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5728\u4efb\u4f55\u73af\u5883\u4e2d\u4e00\u81f4\u5730\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"docker-\u67b6\u6784",children:"Docker \u67b6\u6784"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers."}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Docker \u4f7f\u7528 CS \u67b6\u6784"}),"\n",(0,t.jsx)(r.li,{children:"Docker \u5ba2\u6237\u7aef\uff1a\u8d1f\u8d23\u4e0e Docker \u5b88\u62a4\u8fdb\u7a0b\u901a\u4fe1"}),"\n",(0,t.jsx)(r.li,{children:"Docker \u5b88\u62a4\u8fdb\u7a0b\uff1a\u8d1f\u8d23\u6784\u5efa\u3001\u8fd0\u884c\u548c\u5206\u53d1 Docker \u5bb9\u5668"}),"\n",(0,t.jsx)(r.li,{children:"Docker \u5ba2\u6237\u7aef\u53ef\u4ee5\u8fde\u63a5\u672c\u5730 Docker \u5b88\u62a4\u8fdb\u7a0b\u548c\u8fdc\u7a0b Docker \u5b88\u62a4\u8fdb\u7a0b"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/img/docker/docker-architecture.jpg?raw=true",alt:"Docker \u67b6\u6784"})}),"\n",(0,t.jsx)(r.h2,{id:"docker-vs-\u865a\u62df\u673a",children:"Docker VS \u865a\u62df\u673a"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/docker_vs_vm.excalidraw.png?raw=true",alt:""})})}),"\n",(0,t.jsx)(r.p,{children:"\u865a\u62df\u673a\uff08VM\uff09\u548c\u5bb9\u5668\uff08Container\uff09\u90fd\u662f\u7528\u4e8e\u521b\u5efa\u9694\u79bb\u7684\u8ba1\u7b97\u73af\u5883\u7684\u6280\u672f\uff0c\u4f46\u5b83\u4eec\u5728\u67b6\u6784\u3001\u6027\u80fd\u3001\u8d44\u6e90\u5229\u7528\u7387\u548c\u5e94\u7528\u573a\u666f\u7b49\u65b9\u9762\u6709\u663e\u8457\u7684\u533a\u522b\u3002\u4ee5\u4e0b\u662f\u865a\u62df\u673a\u548c\u5bb9\u5668\u4e4b\u95f4\u7684\u4e00\u4e9b\u5173\u952e\u533a\u522b\uff1a"}),"\n",(0,t.jsx)("center",{children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u7279\u6027"}),(0,t.jsx)(r.th,{children:"\u865a\u62df\u673a\uff08VM\uff09"}),(0,t.jsx)(r.th,{children:"\u5bb9\u5668\uff08Container\uff09"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u67b6\u6784"})}),(0,t.jsx)(r.td,{children:"\u5305\u542b\u5b8c\u6574\u64cd\u4f5c\u7cfb\u7edf\u548c\u865a\u62df\u786c\u4ef6"}),(0,t.jsx)(r.td,{children:"\u5171\u4eab\u5bbf\u4e3b\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u7ba1\u7406\u5de5\u5177"})}),(0,t.jsx)(r.td,{children:"Hypervisor"}),(0,t.jsx)(r.td,{children:"\u5bb9\u5668\u5f15\u64ce\uff08\u5982 Docker\u3001Kubernetes\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u8d44\u6e90\u5f00\u9500"})}),(0,t.jsx)(r.td,{children:"\u8f83\u5927\uff08\u5305\u542b\u5b8c\u6574\u64cd\u4f5c\u7cfb\u7edf\uff09"}),(0,t.jsx)(r.td,{children:"\u8f83\u5c0f\uff08\u5171\u4eab\u5185\u6838\uff0c\u8f7b\u91cf\u7ea7\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u542f\u52a8\u65f6\u95f4"})}),(0,t.jsx)(r.td,{children:"\u51e0\u5206\u949f"}),(0,t.jsx)(r.td,{children:"\u51e0\u79d2\u949f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u9694\u79bb\u6027"})}),(0,t.jsx)(r.td,{children:"\u9ad8\uff08\u72ec\u7acb\u7684\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u548c\u786c\u4ef6\uff09"}),(0,t.jsx)(r.td,{children:"\u4e2d\u7b49\uff08\u5171\u4eab\u5185\u6838\uff0c\u4f7f\u7528 cgroups \u548c namespaces\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u5b89\u5168\u6027"})}),(0,t.jsx)(r.td,{children:"\u8f83\u9ad8\uff08\u5f3a\u9694\u79bb\u6027\uff09"}),(0,t.jsx)(r.td,{children:"\u4e2d\u7b49\uff08\u4f9d\u8d56\u5bbf\u4e3b\u5185\u6838\u7684\u5b89\u5168\u6027\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u9002\u7528\u573a\u666f"})}),(0,t.jsx)(r.td,{children:"\u9700\u8981\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u3001\u9ad8\u5b89\u5168\u6027\u9700\u6c42"}),(0,t.jsx)(r.td,{children:"\u5fae\u670d\u52a1\u67b6\u6784\u3001\u5feb\u901f\u90e8\u7f72\u548c\u6269\u5c55"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"\u5178\u578b\u7528\u9014"})}),(0,t.jsx)(r.td,{children:"\u8fd0\u884c\u65e7\u7248\u5e94\u7528\u7a0b\u5e8f\u3001\u591a\u79df\u6237\u73af\u5883"}),(0,t.jsx)(r.td,{children:"\u5fae\u670d\u52a1\u3001CI/CD\u3001\u8f7b\u91cf\u7ea7\u5f00\u53d1\u73af\u5883"})]})]})]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"\u53c2\u8003\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.docker.com/get-started/overview/#the-underlying-technology",children:"Docker overview"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.alibabacloud.com/zh/knowledge/difference-between-container-and-virtual-machine?_p_lc=1",children:"\u5bb9\u5668\u548c\u865a\u62df\u673a\u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b\uff1f"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>o});var t=n(7294);const c={},i=t.createContext(c);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);