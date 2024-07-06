"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[4124],{5660:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var s=r(5893),i=r(1151);const c={title:"Linux Cgroups",authors:"Duke Lu",date:new Date("2024-05-22T00:00:00.000Z"),tags:["\u4e91\u539f\u751f","Docker","Linux"],sidebar_position:98},o=void 0,l={id:"cloudnative/docker/linux-cgroups",title:"Linux Cgroups",description:"\u4ec0\u4e48\u662f Linux Cgroups \uff1f",source:"@site/docs/cloudnative/docker/linux-cgroups.md",sourceDirName:"cloudnative/docker",slug:"/cloudnative/docker/linux-cgroups",permalink:"/docs/cloudnative/docker/linux-cgroups",draft:!1,unlisted:!1,tags:[{label:"\u4e91\u539f\u751f",permalink:"/docs/tags/\u4e91\u539f\u751f"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:98,frontMatter:{title:"Linux Cgroups",authors:"Duke Lu",date:"2024-05-22T00:00:00.000Z",tags:["\u4e91\u539f\u751f","Docker","Linux"],sidebar_position:98},sidebar:"CloudNativeSidebar",previous:{title:"Linux Namespace",permalink:"/docs/cloudnative/docker/linux-namespace"},next:{title:"Linux Veth Pair",permalink:"/docs/cloudnative/docker/linux-veth-pair"}},t={},u=[{value:"\u4ec0\u4e48\u662f Linux Cgroups \uff1f",id:"\u4ec0\u4e48\u662f-linux-cgroups-",level:2},{value:"Linux Cgroups \u7684\u4e3b\u8981\u529f\u80fd",id:"linux-cgroups-\u7684\u4e3b\u8981\u529f\u80fd",level:2},{value:"Linux Cgroups \u7ec4\u6210",id:"linux-cgroups-\u7ec4\u6210",level:2},{value:"\u5c42\u6b21\u7ed3\u6784(hierarchy)",id:"\u5c42\u6b21\u7ed3\u6784hierarchy",level:3},{value:"\u5b50\u7cfb\u7edf(subsystem)",id:"\u5b50\u7cfb\u7edfsubsystem",level:3},{value:"Linux Cgroups \u5728 Docker \u4e2d\u7684\u4f7f\u7528",id:"linux-cgroups-\u5728-docker-\u4e2d\u7684\u4f7f\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-linux-cgroups-",children:"\u4ec0\u4e48\u662f Linux Cgroups \uff1f"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Control groups, usually referred to as cgroups, are a Linux kernel feature which allow processes to be organized into hierarchical groups whose usage of various types of resources can then be limited and monitored. The kernel's cgroup interface is provided through a pseudo-filesystem called cgroupfs. Grouping is implemented in the core cgroup kernel code, while resource tracking and limits are implemented in a set of per-resource-type subsystems (memory, CPU, and so on)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cgroups\uff08Control Groups\uff09\u662f linux \u5185\u6838\u63d0\u4f9b\u7684\u4e00\u79cd\u673a\u5236\uff0c\u7528\u6765\u5bf9\u4e00\u7ec4\u8fdb\u7a0b\u53ca\u672a\u6765\u5b50\u8fdb\u7a0b\u7684\u8d44\u6e90\u8fdb\u884c\u9650\u5236\u548c\u7ba1\u7406\u3002\u8fd9\u4e9b\u8d44\u6e90\u5305\u62ecCPU\u3001\u5185\u5b58\u3001\u5b58\u50a8\u3001\u7f51\u7edc\u7b49\u3002\u901a\u8fc7Cgroups\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u9650\u5236\u67d0\u4e2a\u8fdb\u7a0b\u7684\u8d44\u6e90\u5360\u7528\uff0c\u5e76\u4e14\u53ef\u4ee5\u5b9e\u65f6\u5730\u76d1\u63a7\u8fdb\u7a0b\u7684\u76d1\u63a7\u548c\u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u603b\u7ed3",type:"info",children:(0,s.jsx)(n.p,{children:"Cgroups\uff08Control Groups\uff09\u662f Linux \u5185\u6838\u63d0\u4f9b\u7684\u4e00\u79cd\u673a\u5236\uff0c\u7528\u4e8e\u9650\u5236\u548c\u8bb0\u5f55\u8fdb\u7a0b\u7ec4\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff08\u5982 CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8 I/O \u7b49\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"linux-cgroups-\u7684\u4e3b\u8981\u529f\u80fd",children:"Linux Cgroups \u7684\u4e3b\u8981\u529f\u80fd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8d44\u6e90\u9650\u5236\uff1aCgroups \u53ef\u4ee5\u9650\u5236\u67d0\u4e2a\u7ec4\u4e2d\u8fdb\u7a0b\u6240\u4f7f\u7528\u7684\u8d44\u6e90\u91cf\uff0c\u6bd4\u5982 CPU \u65f6\u95f4\u3001\u5185\u5b58\u3001\u78c1\u76d8 I/O \u5e26\u5bbd\u7b49\u3002\u8fd9\u6837\u53ef\u4ee5\u9632\u6b62\u67d0\u4e9b\u8fdb\u7a0b\u8fc7\u5ea6\u6d88\u8017\u8d44\u6e90\uff0c\u5f71\u54cd\u7cfb\u7edf\u7684\u6574\u4f53\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f18\u5148\u7ea7\u63a7\u5236\uff1aCgroups \u5141\u8bb8\u8bbe\u7f6e\u4e0d\u540c\u7ec4\u7684\u8d44\u6e90\u4f7f\u7528\u4f18\u5148\u7ea7\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4e3a\u91cd\u8981\u7684\u8fdb\u7a0b\u5206\u914d\u66f4\u591a\u7684 CPU \u65f6\u95f4\uff0c\u800c\u4e3a\u6b21\u8981\u8fdb\u7a0b\u5206\u914d\u8f83\u5c11\u7684\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5ba1\u8ba1\u548c\u76d1\u63a7\uff1a\u53ef\u4ee5\u901a\u8fc7 Cgroups \u5bf9\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u76d1\u63a7\u548c\u7edf\u8ba1\uff0c\u4e86\u89e3\u6bcf\u4e2a\u7ec4\u7684\u8d44\u6e90\u6d88\u8017\u60c5\u51b5\uff0c\u4ece\u800c\u5e2e\u52a9\u7cfb\u7edf\u7ba1\u7406\u5458\u8fdb\u884c\u8d44\u6e90\u4f18\u5316\u548c\u6545\u969c\u6392\u67e5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9694\u79bb\uff1aCgroups \u63d0\u4f9b\u8fdb\u7a0b\u95f4\u7684\u8d44\u6e90\u9694\u79bb\uff0c\u786e\u4fdd\u4e00\u4e2a\u7ec4\u4e2d\u7684\u8fdb\u7a0b\u4e0d\u4f1a\u5e72\u6270\u5230\u53e6\u4e00\u4e2a\u7ec4\u7684\u8fdb\u7a0b\u3002\u4f8b\u5982\uff0c\u5728\u5bb9\u5668\u6280\u672f\u4e2d\uff0cCgroups \u88ab\u5e7f\u6cdb\u7528\u4e8e\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u8d44\u6e90\u9694\u79bb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"linux-cgroups-\u7ec4\u6210",children:"Linux Cgroups \u7ec4\u6210"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Cgroups are similar to processes in that: they are hierarchical, andchild cgroups inherit certain attributes from their parent cgroup.",(0,s.jsx)("br",{}),"\nMultiple separate hierarchies of cgroups are necessary because each hierarchy is attached to one or more subsystems. A subsystem represents a single resource, such as CPU time or memory."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cgroup \u4e0e\u8fdb\u7a0b\u7684\u76f8\u4f3c\u4e4b\u5904\u5728\u4e8e\uff1a\u5b83\u4eec\u662f\u5206\u5c42\u7684\uff0c\u5e76\u4e14\u5b50 cgroup \u4ece\u5176\u7236 cgroup \u7ee7\u627f\u67d0\u4e9b\u5c5e\u6027\u3002\n\u591a\u4e2a\u5355\u72ec\u7684 cgroup \u5c42\u6b21\u7ed3\u6784\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u5c42\u6b21\u7ed3\u6784\u90fd\u9644\u52a0\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u5b50\u7cfb\u7edf\u3002 \u5b50\u7cfb\u7edf\u4ee3\u8868\u5355\u4e2a\u8d44\u6e90\uff0c\u4f8b\u5982 CPU \u65f6\u95f4\u6216\u5185\u5b58\u7b49\u3002"}),"\n",(0,s.jsxs)(n.admonition,{title:"\u603b\u7ed3",type:"info",children:[(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\uff1a"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["cgroups \u4f7f\u7528\u591a\u4e2a\u6811\u5f62\u7684 ",(0,s.jsx)(n.em,{children:"\u5c42\u6b21\u7ed3\u6784(hierarchy)"})," \u6765\u7ec4\u7ec7\u548c\u7ba1\u7406\u8d44\u6e90"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e00\u4e2a ",(0,s.jsx)(n.em,{children:"\u5c42\u6b21\u7ed3\u6784(hierarchy)"})," \u662f\u7531\u591a\u4e2a ",(0,s.jsx)(n.em,{children:"\u5b50 cgroup"})," \u8282\u70b9\u7ec4\u6210\u7684\u6811\u5f62\u7ed3\u6784"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"\u5b50 cgroup"})," \u53ef\u4ee5\u4ece\u5176 ",(0,s.jsx)(n.em,{children:"\u7236 cgroup"})," \u7ee7\u627f\u67d0\u4e9b\u5c5e\u6027"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6bcf\u4e2a ",(0,s.jsx)(n.em,{children:"\u5c42\u6b21\u7ed3\u6784(hierarchy)"})," \u90fd\u53ef\u4ee5\u9644\u52a0\u5230\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,s.jsx)(n.em,{children:"\u5b50\u7cfb\u7edf(subsystem)"})]}),"\n",(0,s.jsx)(n.li,{children:"\u5b50\u7cfb\u7edf(subsystem) \u4ee3\u8868\u5355\u4e2a\u8d44\u6e90\uff0c\u4f8b\u5982 CPU \u65f6\u95f4\u6216\u5185\u5b58\u7b49"}),"\n"]}),(0,s.jsx)(n.p,{children:"\u5373 cgroups = cgroup \u6811(hierarchy) + \u5b50\u7cfb\u7edf(subsystem)"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5c42\u6b21\u7ed3\u6784hierarchy",children:"\u5c42\u6b21\u7ed3\u6784(hierarchy)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The cgroups for a controller are arranged in a hierarchy. This hierarchy is defined by creating, removing, and renaming subdirectories within the cgroup filesystem. At each level of the hierarchy, attributes (e.g., limits) can be defined. The limits, control, and accounting provided by cgroups generally have effect throughout the subhierarchy underneath the cgroup where the attributes are defined. Thus, for example, the limits placed on a cgroup at a higher level in the hierarchy cannot be exceeded by descendant cgroups."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"cgroups \u63a7\u5236\u5668\u7684\u5c42\u7ea7\u7ed3\u6784 (hierarchy) \u662f\u901a\u8fc7\u5728 cgroup \u6587\u4ef6\u7cfb\u7edf\u4e2d\u521b\u5efa\u3001\u5220\u9664\u548c\u91cd\u547d\u540d\u5b50\u76ee\u5f55\u6765\u5b9a\u4e49\u7684\u3002\u5728\u5c42\u7ea7\u7684\u6bcf\u4e00\u7ea7\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5c5e\u6027\uff08\u5982\u9650\u5236\uff09\u3002\u8fd9\u4e9b\u9650\u5236\u548c\u63a7\u5236\u4f1a\u5f71\u54cd\u5230\u8be5 cgroup \u53ca\u5176\u5b50\u5c42\u7ea7\u3002\u56e0\u6b64\uff0c\u8bbe\u7f6e\u5728\u4e0a\u5c42 cgroup \u7684\u9650\u5236\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u4e0b\u7ea7 cgroup\uff0c\u4e0b\u7ea7 cgroup \u65e0\u6cd5\u8d85\u8d8a\u4e0a\u5c42\u7684\u9650\u5236\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u603b\u7ed3",type:"info",children:(0,s.jsxs)(n.p,{children:["\u5c42\u6b21\u7ed3\u6784(hierarchy): \u7531\u591a\u4e2a ",(0,s.jsx)(n.em,{children:"\u5b50 cgroup"})," \u8282\u70b9\u7ec4\u6210\u7684\u6811\u5f62\u7ed3\u6784\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a cgroup \u6811\u4fbf\u53ef\u5f88\u6e05\u6670\u7684\u7406\u89e3\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u5e76\u6302\u8f7d cgroup \u6839\u8282\u70b9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\n~ mkdir cgroup-root\n~ mount -t cgroup -o none,name=cgroup-root cgroup-root ./cgroup-root\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"~ tree\ncgroup-root/\n\u251c\u2500\u2500 cgroup.clone_children\n\u251c\u2500\u2500 cgroup.event_control\n\u251c\u2500\u2500 cgroup.procs\n\u251c\u2500\u2500 cgroup.sane_behavior\n\u251c\u2500\u2500 notify_on_release\n\u251c\u2500\u2500 release_agent\n\u2514\u2500\u2500 tasks\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u4e24\u4e2a\u5b57\u8282\u70b9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"~ mkdir cgroup-node1\n~ mkdir cgroup-node2\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:"{2,10,16}",children:"~ tree\ncgroup-root/ ## cgroup \u6839\u8282\u70b9\n\u251c\u2500\u2500 cgroup.clone_children\n\u251c\u2500\u2500 cgroup.event_control\n\u251c\u2500\u2500 cgroup.procs\n\u251c\u2500\u2500 cgroup.sane_behavior\n\u251c\u2500\u2500 notify_on_release\n\u251c\u2500\u2500 release_agent\n\u251c\u2500\u2500 tasks\n\u251c\u2500\u2500 cgroup-node1 ## cgroup \u5b50\u8282\u70b91\n\u2502   \u251c\u2500\u2500 cgroup.clone_children\n\u2502   \u251c\u2500\u2500 cgroup.event_control\n\u2502   \u251c\u2500\u2500 cgroup.procs\n\u2502   \u251c\u2500\u2500 notify_on_release\n\u2502   \u2514\u2500\u2500 tasks\n\u2514\u2500\u2500 cgroup-node2 ## cgroup \u5b50\u8282\u70b92\n    \u251c\u2500\u2500 cgroup.clone_children\n    \u251c\u2500\u2500 cgroup.event_control\n    \u251c\u2500\u2500 cgroup.procs\n    \u251c\u2500\u2500 notify_on_release\n    \u2514\u2500\u2500 tasks\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u5bf9\u6bcf\u4e2a\u6587\u4ef6\u4f5c\u7528\u7684\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cgroup.clone_children"}),"\uff1a\u63a7\u5236\u65b0\u521b\u5efa\u7684\u5b50 cgroup \u662f\u5426\u7ee7\u627f\u5f53\u524d cgroup \u7684\u5c5e\u6027\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u5b50 cgroup \u4f1a\u7ee7\u627f\u5f53\u524d cgroup \u7684\u8d44\u6e90\u9650\u5236\u548c\u63a7\u5236\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cgroup.event_control"}),"\uff1a\u4e8b\u4ef6\u63a7\u5236\u6587\u4ef6\uff0c\u7528\u4e8e cgroup \u4e8b\u4ef6\u901a\u77e5\u673a\u5236\u3002\u53ef\u4ee5\u7528\u6765\u76d1\u63a7 cgroup \u7684\u4e8b\u4ef6\uff0c\u6bd4\u5982\u5f53\u67d0\u4e2a cgroup \u7684\u8fdb\u7a0b\u6570\u91cf\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u7cfb\u7edf\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u673a\u5236\u8fdb\u884c\u901a\u77e5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cgroup.procs"}),"\uff1a\u5305\u542b\u5f53\u524d cgroup \u4e2d\u6240\u6709\u8fdb\u7a0b\u7684 PID\u3002\u5411\u8fd9\u4e2a\u6587\u4ef6\u5199\u5165\u4e00\u4e2a PID\uff0c\u53ef\u4ee5\u5c06\u8be5\u8fdb\u7a0b\u52a0\u5165\u5230\u5f53\u524d cgroup \u4e2d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cgroup.sane_behavior"}),"\uff1a\u7528\u4e8e\u63a7\u5236 cgroup \u7684\u884c\u4e3a\u6a21\u5f0f\u3002\u8bbe\u7f6e\u4e3a 1 \u65f6\uff0ccgroup \u5c06\u91c7\u7528\u4e00\u79cd\u5408\u7406\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u8fd9\u901a\u5e38\u6d89\u53ca\u4e00\u4e9b\u4f18\u5316\u548c\u6539\u8fdb\uff0c\u4f7f\u5f97 cgroup \u7684\u884c\u4e3a\u66f4\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"notify_on_release"}),"\uff1a\u7528\u4e8e\u63a7\u5236\u662f\u5426\u5728 cgroup \u88ab\u91ca\u653e\u65f6\u89e6\u53d1\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u7684\u64cd\u4f5c\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a 1\uff0c\u5f53 cgroup \u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u4efb\u52a1\u7ed3\u675f\u65f6\uff0c\u5c06\u4f1a\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"release_agent"})," \u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u811a\u672c\u6216\u547d\u4ee4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"release_agent"}),"\uff1a\u6307\u5b9a\u4e86\u4e00\u4e2a\u811a\u672c\u6216\u547d\u4ee4\uff0c\u5f53\u4e00\u4e2a cgroup \u88ab\u91ca\u653e\uff08\u5373 cgroup \u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u4efb\u52a1\u7ed3\u675f\u5e76\u4e14 ",(0,s.jsx)(n.code,{children:"notify_on_release"})," \u88ab\u8bbe\u7f6e\u4e3a 1\uff09\u65f6\uff0c\u4f1a\u6267\u884c\u8fd9\u4e2a\u811a\u672c\u6216\u547d\u4ee4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tasks"}),"\uff1a\u7c7b\u4f3c\u4e8e ",(0,s.jsx)(n.code,{children:"cgroup.procs"}),"\uff0c\u4e5f\u5305\u542b\u5f53\u524d cgroup \u4e2d\u6240\u6709\u8fdb\u7a0b\u7684 PID\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e ",(0,s.jsx)(n.code,{children:"tasks"})," \u6587\u4ef6\u5305\u542b\u7684\u662f\u4efb\u52a1\uff08\u5305\u62ec\u7ebf\u7a0b\uff09\u7684 PID\uff0c\u800c ",(0,s.jsx)(n.code,{children:"cgroup.procs"})," \u4ec5\u5305\u542b\u8fdb\u7a0b\u7684 PID\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b50\u7cfb\u7edfsubsystem",children:"\u5b50\u7cfb\u7edf(subsystem)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A subsystem is a kernel component that modifies the behavior of the processes in a cgroup. Various subsystems have been implemented, making it possible to do things such as limiting the amount of CPU time and memory available to a cgroup, accounting for the CPU time used by a cgroup, and freezing and resuming execution of the processes in a cgroup. Subsystems are sometimes also known as resource controllers (or simply, controllers)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b50\u7cfb\u7edf (subsystem) \u662f\u5185\u6838\u7ec4\u4ef6\uff0c\u7528\u4e8e\u4fee\u6539 cgroup \u4e2d\u8fdb\u7a0b\u7684\u884c\u4e3a\u3002\u4e0d\u540c\u7684\u5b50\u7cfb\u7edf\u5b9e\u73b0\u4e86\u591a\u79cd\u529f\u80fd\uff0c\u4f8b\u5982\u9650\u5236 cgroup \u53ef\u7528\u7684 CPU \u65f6\u95f4\u548c\u5185\u5b58\u91cf\u3001\u8bb0\u5f55 cgroup \u4f7f\u7528\u7684 CPU \u65f6\u95f4\uff0c\u4ee5\u53ca\u51bb\u7ed3\u548c\u6062\u590d cgroup \u4e2d\u8fdb\u7a0b\u7684\u6267\u884c\u3002\u5b50\u7cfb\u7edf\u6709\u65f6\u4e5f\u79f0\u4e3a\u8d44\u6e90\u63a7\u5236\u5668\uff08\u6216\u7b80\u79f0\u63a7\u5236\u5668\uff09\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u603b\u7ed3",type:"info",children:(0,s.jsx)(n.p,{children:"\u5b50\u7cfb\u7edf(subsystem): \u7528\u4e8e\u9650\u5236\u548c\u76d1\u63a7\u67d0\u79cd\u7279\u5b9a\u8d44\u6e90\u7684\u6a21\u5757\u3002"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u67e5\u770b\u5185\u6838\u652f\u6301\u54ea\u4e9b\u5b50\u7cfb\u7edf (subsystem) \uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cat /proc/cgroups\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"#subsys_name    hierarchy\tnum_cgroups     enabled\ncpuset          5               3               1\ncpu             10\t        61              1\ncpuacct\t        10\t        61              1\nmemory\t        7\t        58              1\ndevices\t        9\t        57              1\nfreezer\t        4\t        3               1\nnet_cls\t        11\t        3               1\nblkio\t        3\t        57              1\nperf_event      2\t        3               1\nhugetlb\t        6\t        3               1\npids\t        8\t        57              1\nnet_prio        11\t        3               1\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cpuset"}),"\uff1a\u7ba1\u7406\u548c\u5206\u914d CPU \u548c\u5185\u5b58\u8282\u70b9\uff08NUMA\u8282\u70b9\uff09\u3002\u901a\u8fc7 cpuset \u63a7\u5236\u5668\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u4efb\u52a1\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684 CPU \u548c\u5185\u5b58\u8282\u70b9\uff0c\u4ee5\u4f18\u5316\u6027\u80fd\u548c\u8d44\u6e90\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cpu"}),"\uff1a\u901a\u8fc7\u8bbe\u7f6e CPU \u5171\u4eab\u3001\u6743\u91cd\u548c\u8c03\u5ea6\u53c2\u6570\u6765\u63a7\u5236\u548c\u9650\u5236 cgroup \u4f7f\u7528\u7684 CPU \u65f6\u95f4\u3002\u5b83\u53ef\u4ee5\u7528\u4e8e\u4fdd\u8bc1\u4e0d\u540c cgroup \u4e4b\u95f4\u7684\u516c\u5e73\u8d44\u6e90\u5206\u914d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cpuacct"}),"\uff1a\u63d0\u4f9b CPU \u8d44\u6e90\u4f7f\u7528\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u5b83\u8bb0\u5f55\u6bcf\u4e2a cgroup \u4f7f\u7528\u7684 CPU \u65f6\u95f4\uff0c\u65b9\u4fbf\u7cfb\u7edf\u7ba1\u7406\u5458\u76d1\u63a7\u548c\u5ba1\u8ba1\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"memory"}),"\uff1a\u9650\u5236\u548c\u76d1\u63a7 cgroup \u4f7f\u7528\u7684\u5185\u5b58\uff0c\u5305\u62ec\u7269\u7406\u5185\u5b58\u548c\u4ea4\u6362\u7a7a\u95f4\u3002\u5b83\u53ef\u4ee5\u9632\u6b62\u67d0\u4e2a cgroup \u8fc7\u5ea6\u4f7f\u7528\u5185\u5b58\u8d44\u6e90\uff0c\u4ece\u800c\u5f71\u54cd\u7cfb\u7edf\u7a33\u5b9a\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"devices"}),"\uff1a\u63a7\u5236 cgroup \u4e2d\u7684\u4efb\u52a1\u53ef\u4ee5\u8bbf\u95ee\u54ea\u4e9b\u8bbe\u5907\u3002\u5b83\u53ef\u4ee5\u5141\u8bb8\u6216\u7981\u6b62\u5bf9\u7279\u5b9a\u8bbe\u5907\u7684\u8bbf\u95ee\uff0c\u4ece\u800c\u63d0\u9ad8\u7cfb\u7edf\u5b89\u5168\u6027\u548c\u8d44\u6e90\u9694\u79bb\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"freezer"}),"\uff1a\u5141\u8bb8\u51bb\u7ed3\u548c\u6062\u590d cgroup \u4e2d\u7684\u4efb\u52a1\u3002\u51bb\u7ed3\u64cd\u4f5c\u6682\u505c cgroup \u4e2d\u7684\u6240\u6709\u4efb\u52a1\uff0c\u6062\u590d\u64cd\u4f5c\u91cd\u65b0\u542f\u52a8\u5b83\u4eec\u3002\u8fd9\u5bf9\u4e8e\u8c03\u8bd5\u548c\u7cfb\u7edf\u7ef4\u62a4\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"net_cls"}),"\uff1a\u901a\u8fc7\u4e3a\u7f51\u7edc\u6570\u636e\u5305\u6253\u4e0a\u6807\u7b7e\uff0c\u5141\u8bb8\u5bf9\u6765\u81ea\u4e0d\u540c cgroup \u7684\u6d41\u91cf\u8fdb\u884c\u5206\u7c7b\u548c\u63a7\u5236\u3002\u5b83\u53ef\u4ee5\u7528\u4e8e\u7f51\u7edc\u6d41\u91cf\u63a7\u5236\u548c\u6d41\u91cf\u76d1\u63a7\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"blkio"}),"\uff1a\u9650\u5236\u548c\u76d1\u63a7 cgroup \u4f7f\u7528\u7684\u5757\u8bbe\u5907 I/O\uff08\u5982\u78c1\u76d8 I/O\uff09\u3002\u5b83\u53ef\u4ee5\u8bbe\u7f6e I/O \u6743\u91cd\u548c\u9650\u5236\uff0c\u4ee5\u9632\u6b62\u67d0\u4e2a cgroup \u8fc7\u5ea6\u4f7f\u7528\u78c1\u76d8\u8d44\u6e90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"perf_event"}),"\uff1a\u5141\u8bb8\u5bf9 cgroup \u4e2d\u7684\u4efb\u52a1\u8fdb\u884c\u6027\u80fd\u76d1\u63a7\u3002\u5b83\u53ef\u4ee5\u6536\u96c6\u5404\u79cd\u6027\u80fd\u4e8b\u4ef6\u7684\u6570\u636e\uff0c\u5982 CPU \u5468\u671f\u3001\u6307\u4ee4\u6570\u7b49\uff0c\u7528\u4e8e\u6027\u80fd\u5206\u6790\u548c\u8c03\u4f18\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"hugetlb"}),"\uff1a\u7ba1\u7406\u548c\u5206\u914d\u5927\u9875\u9762\u5185\u5b58\uff08hugepages\uff09\u3002\u5927\u9875\u9762\u53ef\u4ee5\u63d0\u9ad8\u5185\u5b58\u5bc6\u96c6\u578b\u5e94\u7528\u7684\u6027\u80fd\uff0c\u901a\u8fc7\u51cf\u5c11 TLB\uff08Translation Lookaside Buffer\uff09\u5931\u6548\u6b21\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pids"}),"\uff1a\u9650\u5236\u548c\u76d1\u63a7 cgroup \u4e2d\u7684\u4efb\u52a1\u6570\u91cf\uff08\u8fdb\u7a0b\u548c\u7ebf\u7a0b\uff09\u3002\u5b83\u53ef\u4ee5\u9632\u6b62\u67d0\u4e2a cgroup \u751f\u6210\u8fc7\u591a\u8fdb\u7a0b\uff0c\u4ece\u800c\u5f71\u54cd\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"net_prio"}),"\uff1a\u8bbe\u7f6e cgroup \u4e2d\u4efb\u52a1\u7684\u7f51\u7edc\u6d41\u91cf\u4f18\u5148\u7ea7\u3002\u5b83\u53ef\u4ee5\u7528\u4e8e\u5bf9\u4e0d\u540c cgroup \u7684\u7f51\u7edc\u6d41\u91cf\u8fdb\u884c\u4f18\u5148\u7ea7\u6392\u5e8f\uff0c\u4fdd\u8bc1\u5173\u952e\u4efb\u52a1\u7684\u7f51\u7edc\u5e26\u5bbd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u5df2\u7ecf\u4e3a\u6bcf\u4e2a subsystem \u521b\u5efa\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684 hierarchy (cgroup \u6811)\uff0c\u65b9\u4fbf\u7528\u6237\u540e\u7eed\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\uff5e ll /sys/fs/cgroup/\nblkio\ncpu -> cpu,cpuacct\ncpuacct -> cpu,cpuacct\ncpu,cpuacct\ncpuset\ndevices\nfreezer\nhugetlb\nmemory\nnet_cls -> net_cls,net_prio\nnet_cls,net_prio\nnet_prio -> net_cls,net_prio\nperf_event\npids\nsystemd\n"})}),"\n",(0,s.jsx)(n.h2,{id:"linux-cgroups-\u5728-docker-\u4e2d\u7684\u4f7f\u7528",children:"Linux Cgroups \u5728 Docker \u4e2d\u7684\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"docker run"})," \u65f6\uff0c\u6307\u5b9a\u4e0b\u9762\u7684 flag \u5373\u53ef\u5bf9\u76f8\u5173\u8d44\u6e90\u8fdb\u884c\u63a7\u5236\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"## cpu \u9650\u5236\n-c, --cpu-shares int                   CPU shares (relative weight)\n    --cpus decimal                     Number of CPUs\n    --cpuset-cpus string               CPUs in which to allow execution (0-3, 0,1)\n    --cpuset-mems string               MEMs in which to allow execution (0-3, 0,1)\n\n## \u5185\u5b58\u9650\u5236\n-m, --memory bytes                     Memory limit\n    --memory-reservation bytes         Memory soft limit\n    --memory-swap bytes                Swap limit equal to memory plus swap: '-1' to enable unlimited swap\n    --memory-swappiness int            Tune container memory swappiness (0 to 100) (default -1)\n\n## IO \u9650\u5236\n    --blkio-weight uint16              Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)\n    --blkio-weight-device list         Block IO weight (relative device weight) (default [])\n    --device-read-bps list             Limit read rate (bytes per second) from a device (default [])\n    --device-read-iops list            Limit read rate (IO per second) from a device (default [])\n    --device-write-bps list            Limit write rate (bytes per second) to a device (default [])\n    --device-write-iops list           Limit write rate (IO per second) to a device (default [])\n\n## \u8fdb\u7a0b\u6570\u9650\u5236\n    --pids-limit int                   Tune container pids limit (set -1 for unlimited)\n\n## \u7528\u6237\u9650\u5236\n    --ulimit ulimit                    Ulimit options (default [])\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\uff0c\u770b\u770b Docker \u662f\u5982\u4f55\u901a\u8fc7 Cgroups \u9650\u5236\u76f8\u5173\u8d44\u6e90\u7684\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:"{2}",children:"~ docker run -d -m 128m nginx\n93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u5bf9\u5e94\u5bb9\u5668\u7684 cgroup \u8282\u70b9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:"{1,6,7}",children:"~ ll /sys/fs/cgroup/memory/docker/93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858/\ncgroup.clone_children\ncgroup.event_control\ncgroup.procs\n...\nmemory.limit_in_bytes\nmemory.max_usage_in_bytes\n...\nnotify_on_release\ntasks\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u5bb9\u5668\u5185\u5b58\u60c5\u51b5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"## \u5bb9\u5668\u5185\u5b58\u9650\u5236\n~ cat /sys/fs/cgroup/memory/docker/93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858/memory.limit_in_bytes\n134217728\n\n## \u5bb9\u5668\u4e2d\u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\u5927\u5c0f\n~ cat /sys/fs/cgroup/memory/docker/93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858/memory.max_usage_in_bytes\n4296704\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u51fa\uff0cDocker \u4f1a\u4e3a nginx \u5bb9\u5668\u521b\u5efa cgroup \u8282\u70b9\uff0c\u5e76\u901a\u8fc7 cgroup \u914d\u7f6e\u5b9e\u73b0\u8d44\u6e90\u7684\u9650\u5236\u548c\u76d1\u63a7\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.p,{children:["Linux Cgroups: Linux \u5185\u6838\u63d0\u4f9b\u7684\u4e00\u79cd\u673a\u5236\uff0c\u7528\u4e8e",(0,s.jsx)(n.strong,{children:"\u9650\u5236\u548c\u8bb0\u5f55\u8fdb\u7a0b\u7ec4\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Linux Cgroups \u7ec4\u6210\uff1a\u5c42\u6b21\u7ed3\u6784(hierarchy) + \u5b50\u7cfb\u7edf(subsystem)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5c42\u6b21\u7ed3\u6784(hierarchy): \u7531\u591a\u4e2a ",(0,s.jsx)(n.em,{children:"\u5b50 cgroup"})," \u8282\u70b9\u7ec4\u6210\u7684\u6811\u5f62\u7ed3\u6784\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5b50\u7cfb\u7edf(subsystem): \u7528\u4e8e\u9650\u5236\u548c\u76d1\u63a7\u67d0\u79cd\u7279\u5b9a\u8d44\u6e90\u7684\u6a21\u5757\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Linux Cgroups \u5728 Docker \u4e2d\u7684\u5e94\u7528\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"docker run"})," \u547d\u4ee4\u65f6\uff0c\u6307\u5b9a\u5bf9\u5e94\u7684 flag \u9650\u5236\u76f8\u5173\u8d44\u6e90"]}),"\n",(0,s.jsx)(n.li,{children:"Docker \u4f1a\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u521b\u5efa cgroup \u8282\u70b9\uff0c\u5e76\u901a\u8fc7 cgroup \u914d\u7f6e\u5b9e\u73b0\u8d44\u6e90\u7684\u9650\u5236\u548c\u76d1\u63a7"}),"\n",(0,s.jsxs)(n.li,{children:["\u76f8\u5173\u5bb9\u5668\u7684 cgroup \u8282\u70b9\u5728 ",(0,s.jsx)(n.code,{children:"/sys/fs/cgroup/{\u8d44\u6e90\u7c7b\u578b}/docker/{\u5bb9\u5668ID}"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://lwn.net/Articles/604609/",children:"Control groups series by Neil Brown"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://man.archlinux.org/man/cgroups.7.en",children:"man 7 cgroups"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/cgroups",children:"cgroups - archlinux wiki"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/resource_management_guide/ch01#doc-wrapper",children:"Resource Management Guide - redhat"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://zh.wikipedia.org/zh-hans/Cgroups",children:"Linux Cgroups - \u7ef4\u57fa\u767e\u79d1"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(7294);const i={},c=s.createContext(i);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);