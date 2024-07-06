"use strict";(self.webpackChunki_duke_lu_github_io=self.webpackChunki_duke_lu_github_io||[]).push([[7173],{622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(5893),r=t(1151);const s={title:"Linux Bridge",authors:"Duke Lu",date:new Date("2024-05-20T00:00:00.000Z"),tags:["\u4e91\u539f\u751f","Docker","Linux"],sidebar_position:100},d=void 0,c={id:"cloudnative/docker/linux-bridge",title:"Linux Bridge",description:"\u4ec0\u4e48\u662f Linux Bridge \uff1f",source:"@site/docs/cloudnative/docker/linux-bridge.md",sourceDirName:"cloudnative/docker",slug:"/cloudnative/docker/linux-bridge",permalink:"/docs/cloudnative/docker/linux-bridge",draft:!1,unlisted:!1,tags:[{label:"\u4e91\u539f\u751f",permalink:"/docs/tags/\u4e91\u539f\u751f"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:100,frontMatter:{title:"Linux Bridge",authors:"Duke Lu",date:"2024-05-20T00:00:00.000Z",tags:["\u4e91\u539f\u751f","Docker","Linux"],sidebar_position:100},sidebar:"CloudNativeSidebar",previous:{title:"Linux Veth Pair",permalink:"/docs/cloudnative/docker/linux-veth-pair"},next:{title:"Kubernetes",permalink:"/docs/cloudnative/kubernetes/"}},l={},o=[{value:"\u4ec0\u4e48\u662f Linux Bridge \uff1f",id:"\u4ec0\u4e48\u662f-linux-bridge-",level:2},{value:"\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a",id:"\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a",level:2},{value:"Linux Bridge \u5728 Docker \u4e2d\u7684\u4f7f\u7528",id:"linux-bridge-\u5728-docker-\u4e2d\u7684\u4f7f\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-linux-bridge-",children:"\u4ec0\u4e48\u662f Linux Bridge \uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A network bridge is a virtual network device that forwards packets between two or more network segments. A bridge behaves like a virtual network switch and works transparently. Other machines in the network do not need to know about its existence. Physical network devices (e.g. eth1) and virtual network devices (e.g. tap0) can be connected to it."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7f51\u6865\u662f\u4e00\u79cd\u865a\u62df\u7f51\u7edc\u8bbe\u5907\uff0c\u7528\u4e8e\u5728\u4e24\u4e2a\u6216\u591a\u4e2a\u7f51\u6bb5\u4e4b\u95f4\u8f6c\u53d1\u6570\u636e\u5305\u3002\u7f51\u6865\u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u865a\u62df\u7f51\u7edc\u4ea4\u6362\u673a\uff0c\u5de5\u4f5c\u65b9\u5f0f\u900f\u660e\u3002\u7f51\u7edc\u4e2d\u7684\u5176\u4ed6\u673a\u5668\u4e0d\u9700\u8981\u77e5\u9053\u5b83\u7684\u5b58\u5728\u3002\u7269\u7406\u7f51\u7edc\u8bbe\u5907\uff08\u4f8b\u5982 eth1\uff09\u548c\u865a\u62df\u7f51\u7edc\u8bbe\u5907\uff08\u4f8b\u5982 tap0\uff09\u53ef\u4ee5\u8fde\u63a5\u5230\u5b83\u3002"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u603b\u7ed3",type:"info",children:[(0,i.jsxs)(n.p,{children:["Linux Bridge \u662f Linux \u5185\u6838\u4e2d\u7684\u4e00\u79cd\u865a\u62df\u7f51\u7edc\u8bbe\u5907\uff0c\u7528\u4e8e\u5c06\u591a\u4e2a\u7f51\u7edc\u63a5\u53e3\u6865\u63a5\u5728\u4e00\u8d77\u3002",(0,i.jsx)("br",{})]}),(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7406\u89e3 Linux Bridge \u662f\u5de5\u4f5c\u5728\u4e8c\u5c42\u7684\u7f51\u7edc\u4ea4\u6362\u673a\uff0c\u901a\u8fc7\u8bb0\u5f55\u548c\u5b66\u4e60\u6bcf\u4e2a\u7f51\u7edc\u63a5\u53e3\u7684 MAC \u5730\u5740\u751f\u6210\u4e00\u5f20 ",(0,i.jsx)(n.em,{children:"MAC \u5730\u5740\u8868"}),"\uff0c\u6700\u540e\u6839\u636e ",(0,i.jsx)(n.em,{children:"MAC \u5730\u5740\u8868"})," \u51b3\u5b9a\u5982\u4f55\u8f6c\u53d1\u6d41\u91cf\u3002"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a",children:"\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u521b\u5efa\u4e09\u4e2a\u7f51\u7edc\u7a7a\u95f4\u3001\u4e09\u4e2a\u865a\u62df\u7f51\u5361\u5bf9\u4ee5\u53ca\u4e00\u4e2a\u7f51\u6865\uff0c\u5c06\u865a\u62df\u7f51\u5361\u5bf9\u7684\u4e00\u7aef\u653e\u5165\u7f51\u7edc\u7a7a\u95f4\uff0c\u53e6\u4e00\u7aef\u6865\u63a5\u5728\u7f51\u6865\u4e0a\uff0c\u6700\u540e\u901a\u8fc7\u4efb\u610f\u4e00\u4e2a\u7f51\u7edc\u7a7a\u95f4 ping \u5176\u4ed6\u7f51\u7edc\u7a7a\u95f4\u3002\u6700\u7ec8\u7684\u7f51\u7edc\u62d3\u6251\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/linux_bridge.excalidraw.png?raw=true",alt:"\u7f51\u7edc\u62d3\u6251\u56fe"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"## \u521b\u5efa 3 \u4e2a\u7f51\u7edc\u7a7a\u95f4\uff1antns1\u3001ntns2\u3001ntns3\nip netns add ntns1\nip netns add ntns2\nip netns add ntns3\n\n## \u521b\u5efa 3 \u4e2a\u865a\u62df\u7f51\u5361\u5bf9\uff1abr-veth0/veth0\u3001br-veth1/veth1\u3001br-veth2/veth2\nip link add veth0 type veth peer name br-veth0\nip link add veth1 type veth peer name br-veth1\nip link add veth2 type veth peer name br-veth2\n\n## \u521b\u5efa\u5e76\u542f\u52a8\u7f51\u6865\uff1abr0\nip link add name br0 type bridge\nip link set br0 up\n\n## \u5c06\u865a\u62df\u7f51\u5361\u5bf9\u7684\u4e00\u7aef\u6865\u63a5\u5230\u7f51\u6865\uff0c\u5e76\u542f\u52a8\u7f51\u5361\n## br-veth0\u3001br-veth1\u3001br-veth2 \u6865\u63a5\u5230 br0\nip link set dev br-veth0 master br0\nip link set dev br-veth1 master br0\nip link set dev br-veth2 master br0\n\nip link set br-veth0 up\nip link set br-veth1 up\nip link set br-veth2 up\n\n## \u5c06\u865a\u62df\u7f51\u5361\u5bf9\u7684\u4e00\u7aef\u653e\u5165\u7f51\u7edc\u7a7a\u95f4\uff0c\u8bbe\u7f6e IP\uff0c\u5e76\u542f\u52a8\u7f51\u5361\nip link set veth0 netns ntns1\nip netns exec ntns1 ip link set lo up\nip netns exec ntns1 ifconfig veth0 10.10.10.10/24 up\nip netns exec ntns1 route add default dev veth0\n\nip link set veth1 netns ntns2\nip netns exec ntns2 ip link set lo up\nip netns exec ntns2 ifconfig veth1 11.11.11.11/24 up\nip netns exec ntns2 route add default dev veth1\n\nip link set veth2 netns ntns3\nip netns exec ntns3 ip link set lo up\nip netns exec ntns3 ifconfig veth2 12.12.12.12/24 up\nip netns exec ntns3 route add default dev veth2\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"\u7ecf\u8fc7\u4e00\u7cfb\u5217\u64cd\u4f5c\u540e\uff0c\u7f51\u7edc\u73af\u5883\u5df2\u5c31\u7eea\uff0c\u4e0b\u9762\u8fdb\u884c\u9a8c\u8bc1\u5373\u53ef\uff1a"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:[(0,i.jsx)(n.p,{children:"\u53ef\u80fd\u4f1a\u51fa\u73b0 ping \u4e0d\u901a\u7684\u73b0\u8c61\uff0c\u8fd9\u65f6\u9700\u8981\u68c0\u67e5\u4e0b\u5bbf\u4e3b\u673a\u7684 iptables \u89c4\u5219\u662f\u5426\u6709\u95ee\u9898\u3002"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"iptables -S | less\n"})}),(0,i.jsx)(n.p,{children:"\u901a\u5e38\u5b89\u88c5\u4e86 Docker \u7684\u8bdd\uff0cFORWARD \u94fe\u7684\u9ed8\u8ba4\u7b56\u7565\u4f1a\u88ab Docker \u8bbe\u7f6e\u6210 Drop\uff0c\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u4fee\u6539\u653e\u884c\u5373\u53ef\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"## \u4fee\u6539 FORWARD \u7684\u9ed8\u8ba4\u7b56\u7565\u4e3a ACCEPT \u653e\u884c\niptables -P FORWARD ACCEPT\n"})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"## \u5728 ntns1 \u4e2d ping ntns2 \u7684\u7f51\u5361 11.11.11.11\n~ ip netns exec ntns1 ping 11.11.11.11 -c 3\nPING 11.11.11.11 (11.11.11.11) 56(84) bytes of data.\n64 bytes from 11.11.11.11: icmp_seq=1 ttl=64 time=0.077 ms\n64 bytes from 11.11.11.11: icmp_seq=2 ttl=64 time=0.054 ms\n64 bytes from 11.11.11.11: icmp_seq=3 ttl=64 time=0.064 ms\n\n--- 11.11.11.11 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 1999ms\nrtt min/avg/max/mdev = 0.054/0.065/0.077/0.009 ms\n\n## \u5728 ntns2 \u4e2d ping ntns3 \u7684\u7f51\u5361 12.12.12.12\n~ ip netns exec ntns2 ping 12.12.12.12 -c 3\nPING 12.12.12.12 (12.12.12.12) 56(84) bytes of data.\n64 bytes from 12.12.12.12: icmp_seq=1 ttl=64 time=0.095 ms\n64 bytes from 12.12.12.12: icmp_seq=2 ttl=64 time=0.065 ms\n64 bytes from 12.12.12.12: icmp_seq=3 ttl=64 time=0.073 ms\n\n--- 12.12.12.12 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 1999ms\nrtt min/avg/max/mdev = 0.065/0.077/0.095/0.016 ms\n\n## \u5728 ntns3 \u4e2d ping ntns3 \u7684\u7f51\u5361 10.10.10.10\n~ ip netns exec ntns3 ping 10.10.10.10 -c 3\nPING 10.10.10.10 (10.10.10.10) 56(84) bytes of data.\n64 bytes from 10.10.10.10: icmp_seq=1 ttl=64 time=0.069 ms\n64 bytes from 10.10.10.10: icmp_seq=2 ttl=64 time=0.051 ms\n64 bytes from 10.10.10.10: icmp_seq=3 ttl=64 time=0.057 ms\n\n--- 10.10.10.10 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 1999ms\nrtt min/avg/max/mdev = 0.051/0.059/0.069/0.007 ms\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u4e0d\u540c\u7f51\u7edc\u7a7a\u95f4\u53ca\u7f51\u6bb5\u7684\u8bbe\u5907\u901a\u8fc7\u7f51\u6865\u6865\u63a5\u540e\uff0c\u7f51\u7edc\u662f\u4e92\u901a\u7684\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"linux-bridge-\u5728-docker-\u4e2d\u7684\u4f7f\u7528",children:"Linux Bridge \u5728 Docker \u4e2d\u7684\u4f7f\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0cDocker \u5728\u542f\u52a8\u6216\u91cd\u542f\u65f6\uff0c\u4f1a\u68c0\u67e5\u5bbf\u4e3b\u673a\u5668\u662f\u5426\u5b58\u5728 ",(0,i.jsx)(n.code,{children:"docker0"})," \u7f51\u6865\uff0c\u82e5\u4e0d\u5b58\u5728\uff0cDocker \u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"docker0"})," \u7684\u7f51\u6865\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"## \u67e5\u770b docker0 \u7f51\u7edc\u8bbe\u5907\n~ ip addr show docker0\n82: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default\n    link/ether 02:42:48:e1:a0:7a brd ff:ff:ff:ff:ff:ff\n    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::42:48ff:fee1:a07a/64 scope link\n       valid_lft forever preferred_lft forever\n\n## \u67e5\u770b docker0 \u7f51\u6865\u4fe1\u606f\n~ brctl show docker0\nbridge name\t    bridge id           STP     enabled\t    interfaces\ndocker0\t\t    8000.02425dd16d24   no\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u6ca1\u6709\u521b\u5efa\u5bb9\u5668\uff0c\u53ef\u4ee5\u770b\u5230\u6b64\u65f6\u7684 docker0 \u7f51\u6865\u4e2d\u6ca1\u6709\u4efb\u4f55\u7f51\u7edc\u63a5\u53e3 (interfaces)\u3002"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\uff0c\u6211\u4eec\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u770b\u770b\uff0cDocker \u662f\u5982\u4f55\u4f7f\u7528 docker0 \u7f51\u6865\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"~ docker run -d nginx\n9e732209a2592250e644ea3fa2cad71f1f886530b2664697402e0372059b777e\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u4e00\u4e0b nginx \u521b\u5efa\u7684\u865a\u62df\u7f51\u5361\u5bf9\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",metastring:"{9-12,17-20}",children:"## \u67e5\u770b\u5bb9\u5668\u5185\u7684\u7f51\u5361\u4fe1\u606f\n\uff5e docker exec 9e732209a259 ip addr show\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host\n       valid_lft forever preferred_lft forever\n148: eth0@if149: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default\n    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n\n## \u5bb9\u5668\u5185\u7684\u865a\u62df\u7f51\u5361\u4e3a 148: eth0@if149\uff0c\u6545\u53e6\u4e00\u7aef\u4e3a if149 \u7f51\u5361 (\u5373 ID \u4e3a 149 \u7684\u7f51\u5361)\n## \u67e5\u770b\u5bbf\u4e3b\u673a ID \u4e3a 149 \u7684\u7f51\u5361\u4fe1\u606f\n~ ip addr show dev $(ip link | awk -v id=149 '$1 == id\":\" {print $2}' | cut -d'@' -f1)\n149: veth5e8b956@if148: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default\n    link/ether 76:f8:1e:e8:23:89 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet6 fe80::74f8:1eff:fee8:2389/64 scope link\n       valid_lft forever preferred_lft forever\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd8\u662f\u719f\u6089\u7684\u914d\u65b9\uff0cveth5e8b956/eth0 \u7ec4\u6210\u4e86\u4e00\u4e2a\u865a\u62df\u7f51\u5361\u5bf9\uff0c\u4e00\u7aef\u5728\u5bb9\u5668\u5185\uff0c\u4e00\u7aef\u5728\u5bbf\u4e3b\u673a\u3002"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"\u518d\u6765\u770b\u770b docker0 \u7f51\u6865\u7684\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"~ brctl show docker0\nbridge name\t    bridge id           STP     enabled\t    interfaces\ndocker0\t\t    8000.02425dd16d24   no                  veth5e8b956\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u865a\u62df\u7f51\u5361 veth5e8b956 \u5df2\u7ecf\u6865\u63a5\u5230\u4e86 docker0 \u7f51\u6865\u3002"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u518d\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\uff0c\u7136\u540e\u4f60\u4f1a\u53d1\u73b0\uff0c\u4f1a\u6709\u65b0\u7684\u865a\u62df\u7f51\u5361\u6865\u63a5\u5230 docker0 \u7f51\u6865\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"~ docker run -d redis\n464cc3fb4bcb884521845a1ab77f21866f1566efdec57ca2ad548716d1e97776\n\n~ brctl show docker0\nbridge  name    bridge id           STP     enabled     interfaces\ndocker0         8000.02425dd16d2    no                  veth5e8b956\n                                                        veth8a49632\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6ca1\u9519\uff0c\u8fd9\u79cd\u6a21\u5f0f\u5c31\u662f Docker \u9ed8\u8ba4\u7684\u7f51\u7edc\u6a21\u5f0f\uff1a",(0,i.jsx)(n.em,{children:"\u6865\u63a5\u6a21\u5f0f"}),"\u3002\u6b64\u65f6\u7684\u7f51\u7edc\u62d3\u6251\u56fe\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/linux_bridge_in_docker.excalidraw.png?raw=true",alt:""})})}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>d});var i=t(7294);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);