"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[2817],{8582:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var r=s(5893),a=s(1151);const c={title:"Linux Namespace",authors:"Duke Lu",date:new Date("2024-05-20T00:00:00.000Z"),tags:["\u4e91\u539f\u751f","Docker"],sidebar_position:98},i=void 0,t={id:"cloudnative/docker/linux-namespace",title:"Linux Namespace",description:"\u4ec0\u4e48\u662f Linux Namespace \uff1f",source:"@site/docs/cloudnative/docker/linux-namespace.md",sourceDirName:"cloudnative/docker",slug:"/cloudnative/docker/linux-namespace",permalink:"/docs/cloudnative/docker/linux-namespace",draft:!1,unlisted:!1,tags:[{label:"\u4e91\u539f\u751f",permalink:"/docs/tags/\u4e91\u539f\u751f"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:98,frontMatter:{title:"Linux Namespace",authors:"Duke Lu",date:"2024-05-20T00:00:00.000Z",tags:["\u4e91\u539f\u751f","Docker"],sidebar_position:98},sidebar:"CloudNativeSidebar",previous:{title:"\u5e38\u7528\u8f6f\u4ef6\u5b89\u88c5",permalink:"/docs/cloudnative/docker/software-install"},next:{title:"Linux Cgroups",permalink:"/docs/cloudnative/docker/linux-cgroups"}},l={},d=[{value:"\u4ec0\u4e48\u662f Linux Namespace \uff1f",id:"\u4ec0\u4e48\u662f-linux-namespace-",level:2},{value:"Linux Namespace \u5206\u7c7b",id:"linux-namespace-\u5206\u7c7b",level:2},{value:"Linux Namespace API",id:"linux-namespace-api",level:2},{value:"Linux Namespace \u7684\u751f\u547d\u5468\u671f",id:"linux-namespace-\u7684\u751f\u547d\u5468\u671f",level:2},{value:"Linux Namespace \u5728 Docker \u4e2d\u7684\u4f7f\u7528",id:"linux-namespace-\u5728-docker-\u4e2d\u7684\u4f7f\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-linux-namespace-",children:"\u4ec0\u4e48\u662f Linux Namespace \uff1f"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"A namespace wraps a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the global resource. Changes to the global resource are visible to other processes that are members of the namespace, but are invisible to other processes. One use of namespaces is to implement containers."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Linux Namespace \u662f Linux \u5185\u6838\u63d0\u4f9b\u7684\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u865a\u62df\u5316\u6280\u672f\uff0c\u7528\u4e8e\u9694\u79bb\u548c\u865a\u62df\u5316\u7cfb\u7edf\u8d44\u6e90\uff0c\u5b83\u4eec\u53ef\u4ee5\u5c06\u5168\u5c40\u7cfb\u7edf\u8d44\u6e90\u9694\u79bb\u5230\u4e0d\u540c\u7684\u72ec\u7acb\u7a7a\u95f4\uff0c\u4f7f\u4e0d\u540c\u7684\u8fdb\u7a0b\u7ec4\u62e5\u6709\u5404\u81ea\u72ec\u7acb\u7684\u8d44\u6e90\u89c6\u56fe\u3002\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u76ee\u7684\u662f\u5c06\u7279\u5b9a\u7684\u5168\u5c40\u7cfb\u7edf\u8d44\u6e90\u5305\u88c5\u5728\u62bd\u8c61\u4e2d\uff0c\u4f7f\u547d\u540d\u7a7a\u95f4\u5185\u7684\u8fdb\u7a0b\u770b\u8d77\u6765\u62e5\u6709\u81ea\u5df1\u7684\u5168\u5c40\u8d44\u6e90\u7684\u9694\u79bb\u5b9e\u4f8b\u3002 \u547d\u540d\u7a7a\u95f4\u7684\u603b\u4f53\u76ee\u6807\u4e4b\u4e00\u662f\u652f\u6301\u5bb9\u5668\u7684\u5b9e\u73b0\uff0c\u5bb9\u5668\u662f\u4e00\u79cd\u7528\u4e8e\u8f7b\u91cf\u7ea7\u865a\u62df\u5316\uff08\u4ee5\u53ca\u5176\u4ed6\u76ee\u7684\uff09\u7684\u5de5\u5177\uff0c\u5b83\u4e3a\u4e00\u7ec4\u8fdb\u7a0b\u63d0\u4f9b\u4e86\u5b83\u4eec\u662f\u7cfb\u7edf\u4e0a\u552f\u4e00\u8fdb\u7a0b\u7684\u9519\u89c9\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"linux-namespace-\u5206\u7c7b",children:"Linux Namespace \u5206\u7c7b"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u67e5\u770b\u6709\u54ea\u4e9b Linux Namespace\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ ls -l /proc/$$/ns | awk '{print $1, $9, $10, $11}'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"total 0\nlrwxrwxrwx. cgroup -> cgroup:[4026531835]\nlrwxrwxrwx. ipc -> ipc:[4026531839]\nlrwxrwxrwx. mnt -> mnt:[4026531840]\nlrwxrwxrwx. net -> net:[4026531969]\nlrwxrwxrwx. pid -> pid:[4026531836]\nlrwxrwxrwx. pid_for_children -> pid:[4026531834]\nlrwxrwxrwx. time -> time:[4026531834]\nlrwxrwxrwx. time_for_children -> time:[4026531834]\nlrwxrwxrwx. user -> user:[4026531837]\nlrwxrwxrwx. uts -> uts:[4026531838]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\uff0cLinux \u5df2\u7ecf\u652f\u6301 8 \u79cd\u5168\u5c40\u8d44\u6e90\u7684\u865a\u62df\u5316 (\u6bcf\u79cd\u8d44\u6e90\u90fd\u662f\u968f\u7740 Linux \u5185\u6838\u7248\u672c\u7684\u8fed\u4ee3\u800c\u9010\u6e10\u52a0\u5165\u7684\uff0c\u56e0\u6b64\u6709\u4e9b\u5185\u6838\u7248\u672c\u53ef\u80fd\u4e0d\u5177\u5907\u67d0\u79cd Namespace)\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Namespace"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u9694\u79bb\u8d44\u6e90 (Isolates)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u8003"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5185\u6838\u7248\u672c"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Mount Namespace"})}),(0,r.jsx)(n.td,{children:"Mount points"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/mount_namespaces.7.en",children:"mount_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"2.4.19"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"UTS Namespace"})}),(0,r.jsx)(n.td,{children:"Hostname and NIS domain name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/uts_namespaces.7.en",children:"uts_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"2.6.19"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"IPC Namespace"})}),(0,r.jsx)(n.td,{children:"System V IPC, POSIX message queues"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/ipc_namespaces.7.en",children:"ipc_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"2.6.19"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"PID Namespace"})}),(0,r.jsx)(n.td,{children:"Process IDs"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/pid_namespaces.7.en",children:"pid_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"2.6.24"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Network Namespace"})}),(0,r.jsx)(n.td,{children:"Network devices, stacks, ports, etc."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/network_namespaces.7.en",children:"network_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"2.6.24"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"User Namespace"})}),(0,r.jsx)(n.td,{children:"User and group IDs"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/user_namespaces.7.en",children:"user_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"3.8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Cgroup Namespace"})}),(0,r.jsx)(n.td,{children:"Cgroup root directory"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/cgroup_namespaces.7.en",children:"cgroup_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"4.6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Time Namespace"})}),(0,r.jsx)(n.td,{children:"Boot and monotonic clocks"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/time_namespaces.7.en",children:"time_namespaces(7)"})}),(0,r.jsx)(n.td,{children:"5.6"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"linux-namespace-api",children:"Linux Namespace API"}),"\n",(0,r.jsx)(n.p,{children:"Linux Namespaces \u63d0\u4f9b\u4e86\u4e00\u7ec4 API\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u521b\u5efa\u3001\u64cd\u4f5c\u548c\u7ba1\u7406\u4e0d\u540c\u7684 namespaces\u3002\u8fd9\u4e9b API \u4e3b\u8981\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"clone"}),": \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\uff0c\u5e76\u5c06\u8fd9\u4e2a\u8fdb\u7a0b\u52a0\u5165\u6307\u5b9a\u7684 namespaces\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"unshare"}),": \u5c06\u8c03\u7528\u8fdb\u7a0b\u79fb\u52a8\u5230\u65b0\u7684 namespace\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setns"}),": \u5141\u8bb8\u8c03\u7528\u8fdb\u7a0b\u52a0\u5165\u73b0\u6709\u7684 namespace\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4ed6 API\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"readlink"}),": \u7528\u4e8e\u8bfb\u53d6\u7b26\u53f7\u94fe\u63a5\u3002\u53ef\u4ee5\u8bfb\u53d6 /proc/[pid]/ns/ \u76ee\u5f55\u4e0b\u7684 namespace \u7b26\u53f7\u94fe\u63a5\uff0c\u83b7\u53d6 namespace \u7c7b\u578b\u548c\u6807\u8bc6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"linux-namespace-\u7684\u751f\u547d\u5468\u671f",children:"Linux Namespace \u7684\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5f53\u4e00\u4e2a namespace \u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u8fdb\u7a0b\u7ec8\u6b62\u6216\u79bb\u5f00\u8be5 namespace \u65f6\uff0cnamespace \u4f1a\u88ab\u81ea\u52a8\u9500\u6bc1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u6709\u4e00\u4e9b\u56e0\u7d20\u53ef\u80fd\u4f1a\u4f7f\u5f97\u5373\u4f7f\u6ca1\u6709\u6210\u5458\u8fdb\u7a0b\uff0cnamespace \u4f9d\u7136\u5b58\u5728\u3002\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6216\u7ed1\u5b9a\u6302\u8f7d\u70b9\uff1a\u5982\u679c\u5b58\u5728\u4e00\u4e2a\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6307\u5411 /proc/pid/ns/* \u6587\u4ef6\uff0c\u6216\u5bf9\u8be5\u6587\u4ef6\u7684\u7ed1\u5b9a\u6302\u8f7d\u70b9\uff0c\u8fd9\u4e9b\u5f15\u7528\u4f1a\u4f7f namespace \u4fdd\u6301\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5c42\u6b21\u5316\u7684 namespace\uff1a\u67d0\u4e9b namespace\uff08\u5982 PID namespace \u6216 User namespace\uff09\u662f\u5c42\u6b21\u5316\u7684\u3002\u5982\u679c\u4e00\u4e2a namespace \u6709\u5b50 namespace \u5b58\u5728\uff0c\u90a3\u4e48\u8be5 namespace \u4f1a\u7ee7\u7eed\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"User namespace \u62e5\u6709\u975e\u7528\u6237 namespace\uff1a\u5982\u679c\u4e00\u4e2a User namespace \u62e5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u975e\u7528\u6237 namespace\uff08\u5982\u7f51\u7edc namespace\u3001IPC namespace \u7b49\uff09\uff0c\u90a3\u4e48\u8fd9\u4e2a User namespace \u4f1a\u4fdd\u6301\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7\u7b26\u53f7\u94fe\u63a5\u5f15\u7528\u7684 PID namespace\uff1a\u5982\u679c\u6709\u8fdb\u7a0b\u901a\u8fc7 /proc/pid/ns/pid_for_children \u7b26\u53f7\u94fe\u63a5\u5f15\u7528\u8be5 PID namespace\uff0c\u90a3\u4e48\u8be5 PID namespace \u4f1a\u4fdd\u6301\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7\u7b26\u53f7\u94fe\u63a5\u5f15\u7528\u7684 Time namespace\uff1a\u5982\u679c\u6709\u8fdb\u7a0b\u901a\u8fc7 /proc/pid/ns/time_for_children \u7b26\u53f7\u94fe\u63a5\u5f15\u7528\u8be5 Time namespace\uff0c\u90a3\u4e48\u8be5 Time namespace \u4f1a\u4fdd\u6301\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5f15\u7528 IPC namespace \u7684 mqueue \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\uff1a\u5982\u679c\u4e00\u4e2a mqueue \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5bf9\u5e94\u4e8e\u67d0\u4e2a IPC namespace\uff0c\u90a3\u4e48\u8be5 IPC namespace \u4f1a\u4fdd\u6301\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5f15\u7528 PID namespace \u7684 proc \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\uff1a\u5982\u679c\u4e00\u4e2a proc \u6587\u4ef6\u7cfb\u7edf\u6302\u8f7d\u5bf9\u5e94\u4e8e\u67d0\u4e2a PID namespace\uff0c\u90a3\u4e48\u8be5 PID namespace \u4f1a\u4fdd\u6301\u5b58\u5728\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"linux-namespace-\u5728-docker-\u4e2d\u7684\u4f7f\u7528",children:"Linux Namespace \u5728 Docker \u4e2d\u7684\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\uff0c\u770b\u770b Docker \u662f\u5982\u4f55\u901a\u8fc7 Namespace \u9694\u79bb\u76f8\u5173\u8d44\u6e90\u7684\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:"{2}",children:"~ docker run -d nginx\nc4ac920a44697897447ee0325f13926298193be2eddb0aa56f397352fe437fec\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u5bb9\u5668\u627e\u5230\u8fdb\u7a0b\u5728\u5bbf\u4e3b\u673a\u7684 PID"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"\uff5e docker inspect --format '{{.State.Pid}}' c4ac920a4469\n551330\n\n## \u627e\u4e00\u4e0b 551330 \u7684\u7236 PID\n\uff5e ps -o ppid= -p 551330\n551307\n\n## \u770b\u4e00\u4e0b\u7236 PID 551307 \u7684\u8fdb\u7a0b\u6811\n\uff5e pstree -p 551307\ncontainerd-shim(551307)\u2500\u2500\u2500nginx(551330)\u2500\u252c\u2500nginx(551374)\n                                        \u2514\u2500nginx(551375)\n\n## \u770b\u4e00\u4e0b 551307\u3001551330\u3001551374\u3001551375 \u5177\u4f53\u7684\u8fdb\u7a0b\n~ ps -p 551307 551330 551374 551375\n    PID TTY      STAT   TIME COMMAND\n 551307 ?        Sl     0:03 /usr/bin/containerd-shim-runc-v2 -namespace moby -id c4ac920a44697897447ee0325f13926298193be2eddb0aa56f397352fe437fec -address /run/containe\n 551330 ?        Ss     0:00 nginx: master process nginx -g daemon off;\n 551374 ?        S      0:00 nginx: worker process\n 551375 ?        S      0:00 nginx: worker process\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u51fa\uff0cPID 551330 \u786e\u5b9e\u662f\u7531 Docker \u542f\u52a8\u7684 nginx \u8fdb\u7a0b"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u4e3b\u673a\u7684 namespace \u60c5\u51b5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:"{11-15}",children:"## \u67e5\u770b namespace \u5217\u8868\n~ lsns\n        NS TYPE  NPROCS    PID USER   COMMAND\n4026531836 pid       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n4026531837 user      89      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n4026531838 uts       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n4026531839 ipc       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n4026531840 mnt       84      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n4026531856 mnt        1     18 root   kdevtmpfs\n4026531956 net       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22\n4026532160 mnt        1    559 chrony /usr/sbin/chronyd\n4026532308 mnt        3 551330 root   nginx: master process nginx -g daemon off\n4026532309 uts        3 551330 root   nginx: master process nginx -g daemon off\n4026532310 ipc        3 551330 root   nginx: master process nginx -g daemon off\n4026532311 pid        3 551330 root   nginx: master process nginx -g daemon off\n4026532313 net        3 551330 root   nginx: master process nginx -g daemon off\n\n## \u786e\u8ba4 PID 551330 \u4e0b\u662f\u5426\u6709\u8fd9\u4e9b namespace\n~ ll /proc/551330/ns\nlrwxrwxrwx 1 root root 0 6\u6708  23 13:21 ipc -> ipc:[4026532310]\nlrwxrwxrwx 1 root root 0 6\u6708  23 13:21 mnt -> mnt:[4026532308]\nlrwxrwxrwx 1 root root 0 6\u6708  23 01:22 net -> net:[4026532313]\nlrwxrwxrwx 1 root root 0 6\u6708  23 01:23 pid -> pid:[4026532311]\nlrwxrwxrwx 1 root root 0 6\u6708  23 13:21 user -> user:[4026531837]\nlrwxrwxrwx 1 root root 0 6\u6708  23 13:21 uts -> uts:[4026532309]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u51fa\uff0cDocker \u4e3a nginx \u5bb9\u5668\u521b\u5efa\u4e86\u65b0\u7684 namespace (mnt\u3001uts\u3001ipc\u3001pid\u3001net)\uff0c\u5e76\u5c06 PID \u4e3a 551330 \u7684\u8fdb\u7a0b\u52a0\u5165\u4e86\u8fd9\u4e9b namespace\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsxs)(n.p,{children:["Linux Namespace\uff1aLinux \u5185\u6838\u63d0\u4f9b\u7684\u4e00\u79cd\u673a\u5236\uff0c\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u865a\u62df\u5316\u6280\u672f\uff0c\u7528\u4e8e",(0,r.jsx)(n.strong,{children:"\u9694\u79bb\u548c\u865a\u62df\u5316\u7cfb\u7edf\u8d44\u6e90"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"8 \u79cd\u5168\u5c40\u8d44\u6e90\u7684\u865a\u62df\u5316\uff08\u5185\u6838\u7248\u672c\u4e0d\u540c\uff0c\u652f\u6301\u7684 Namespace \u53ef\u80fd\u4e0d\u540c\uff09\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mount: \u9694\u79bb\u6587\u4ef6\u6302\u8f7d\u70b9"}),"\n",(0,r.jsx)(n.li,{children:"UTS: \u9694\u79bb\u4e3b\u673a\u540d\u3001\u57df\u540d"}),"\n",(0,r.jsx)(n.li,{children:"IPC: \u9694\u79bb\u8fdb\u7a0b\u901a\u4fe1\u8d44\u6e90 (System V IPC, POSIX message queues)"}),"\n",(0,r.jsx)(n.li,{children:"PID: \u9694\u79bb\u8fdb\u7a0b ID"}),"\n",(0,r.jsx)(n.li,{children:"Network: \u9694\u79bb\u7f51\u7edc\u8bbe\u5907\u3001\u7f51\u7edc\u534f\u8bae\u6808\u3001\u8def\u7531\u8868\u3001IP \u5730\u5740\u3001\u7aef\u53e3"}),"\n",(0,r.jsx)(n.li,{children:"User: \u9694\u79bb\u7528\u6237\u3001\u7528\u6237\u7ec4"}),"\n",(0,r.jsx)(n.li,{children:"Cgroup: \u9694\u79bb Cgroup \u6839\u76ee\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"Time: \u9694\u79bb\u7cfb\u7edf\u65f6\u95f4\u3001\u5355\u8c03\u65f6\u95f4"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u547d\u5468\u671f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u60c5\u51b5\uff0cnamespace \u6700\u540e\u4e00\u4e2a\u8fdb\u7a0b\u7ec8\u6b62\u6216\u79bb\u5f00\u65f6\uff0cnamespace \u4f1a\u88ab\u81ea\u52a8\u9500\u6bc1\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u6709\u4e00\u4e9b\u56e0\u7d20\u53ef\u80fd\u4f1a\u4f7f\u5f97\u5373\u4f7f\u6ca1\u6709\u6210\u5458\u8fdb\u7a0b\uff0cnamespace \u4f9d\u7136\u5b58\u5728\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Linux Namespace \u5728 Docker \u4e2d\u7684\u5e94\u7528\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Docker \u4f1a\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u4e2d\u7684\u8fdb\u7a0b\u521b\u5efa\u65b0\u7684 namespace\uff0c\u5e76\u542f\u52a8\u7684\u8fdb\u7a0b\u52a0\u5165\u8fd9\u4e9b\u65b0\u7684 namespace\uff0c\u6700\u540e\u901a\u8fc7\u8fd9\u4e9b namespace \u5b9e\u73b0\u8d44\u6e90\u7684\u9694\u79bb\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://lwn.net/Articles/531114/",children:"Namespaces in operation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://man.archlinux.org/man/namespaces.7.en",children:"man 7 namespaces"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Linux_namespaces",children:"Linux Namespaces - \u7ef4\u57fa\u767e\u79d1"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>i});var r=s(7294);const a={},c=r.createContext(a);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);