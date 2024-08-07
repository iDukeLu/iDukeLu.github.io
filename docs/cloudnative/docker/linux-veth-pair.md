---
title: Linux Veth Pair
authors: Duke Lu
date: 2024-05-20
tags: [云原生, Docker, Linux]
sidebar_position: 99
---

## 什么是 Linux Veth Pair
> The veth devices are virtual Ethernet devices.  They can act as tunnels between network namespaces to create a bridge to a physical network device in another namespace, but can also be used as standalone network devices.
>
> Packets transmitted on one device in the pair are immediately received on the other device.  When either device is down, the link state of the pair is down.

veth 设备是虚拟以太网设备。它们可以充当网络命名空间之间的隧道，以创建与另一个命名空间中的物理网络设备的桥梁，但也可以用作独立网络设备。

在对中的一个设备上传输的数据包会立即在另一个设备上接收。当任一设备关闭时，该对的链路状态为关闭。

:::info[总结]
可以简单理解为 Linux Veth Pair 是一根虚拟的网线，从一端发出的数据包，可以在另一端接收到。<br/>
通常，可以将这根网线的两端发在不同的网络空间 (Network Namespace)，从而实现网络命名空间之间的通信。
:::

## 通过一个示例演示

我创建两个网络空间和一个虚拟网卡对，并虚拟网卡对的两端将分别移动到两个网络空间中，最后我们通过一个网络空间 ping 另一个网络空间。最终的网络拓扑图如下：

<center>

![网络拓扑图](https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/linux_veth_pair.excalidraw.png?raw=true)

</center>

```sh
## 创建 2 个网络空间：ntns1、ntns2
~ ip netns add ntns1
~ ip netns add ntns2

## 创建一个虚拟网卡对：veth0/veth1
~ ip link add veth0 type veth peer name veth1

## 将虚拟网卡 veth0 移动到 ntns1 网络空间
## 并设置 veth0 的 IP 为 10.10.10.10
## 将 veth0 设置为默认的路由设备
~ ip link set veth0 netns ntns1
~ ip netns exec ntns1 ifconfig veth0 10.10.10.10/24 up
~ ip netns exec ntns1 route add default dev veth0

## 将虚拟网卡 veth1 移动到 ntns2 网络空间
## 并设置 veth1 的 IP 为 10.10.10.11
## 将 veth1 设置为默认的路由设备
~ ip link set veth1 netns ntns2
~ ip netns exec ntns2 ifconfig veth1 10.10.10.11/24 up
~ ip netns exec ntns2 route add default dev veth1
```
<br/>

通过上面的一系列操作后，让我们看看 ntns1、ntns2 下的网卡：
```sh
## 查看 ntns1 的网卡
~ ip netns exec ntns1 ip addr show
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
81: veth0@if80: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 76:70:b4:e4:19:8e brd ff:ff:ff:ff:ff:ff link-netnsid 1
    inet 10.10.10.10/24 brd 10.10.10.255 scope global veth0
    valid_lft forever preferred_lft forever
    inet6 fe80::7470:b4ff:fee4:198e/64 scope link
    valid_lft forever preferred_lft forever

## 查看 ntns2 的网卡
~ ip netns exec ntns2 ip addr show
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
80: veth1@if81: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 1a:48:b7:bd:f9:24 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 10.10.10.11/24 brd 10.10.10.255 scope global veth1
    valid_lft forever preferred_lft forever
    inet6 fe80::1848:b7ff:febd:f924/64 scope link
    valid_lft forever preferred_lft forever
```
<br/>

最后，我们在 ntns1 中通过 veth0 ping veth1 的 IP
```sh
~ ip netns exec ntns1 ping 10.10.10.11 -c 3
PING 10.10.10.11 (10.10.10.11) 56(84) bytes of data.
64 bytes from 10.10.10.11: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 10.10.10.11: icmp_seq=2 ttl=64 time=0.057 ms
64 bytes from 10.10.10.11: icmp_seq=3 ttl=64 time=0.064 ms

--- 10.10.10.11 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1999ms
rtt min/avg/max/mdev = 0.054/0.058/0.064/0.007 ms
```
<br/>

在新的终端中，我们也看到 ntns2 的 veth1 确实有接收到从 veth0 发出的数据包
```sh
~ ip netns exec ntns2 tcpdump -nnt -i veth1
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on veth1, link-type EN10MB (Ethernet), capture size 262144 bytes
IP 10.10.10.10 > 10.10.10.11: ICMP echo request, id 18148, seq 1, length 64
IP 10.10.10.11 > 10.10.10.10: ICMP echo reply, id 18148, seq 1, length 64
IP 10.10.10.10 > 10.10.10.11: ICMP echo request, id 18148, seq 2, length 64
IP 10.10.10.11 > 10.10.10.10: ICMP echo reply, id 18148, seq 2, length 64
IP 10.10.10.10 > 10.10.10.11: ICMP echo request, id 18148, seq 3, length 64
IP 10.10.10.11 > 10.10.10.10: ICMP echo reply, id 18148, seq 3, length 64
```

## Linux Veth Pair 在 Docker 中的使用
我们启动一个容器，看看 Docker 是如何使用 Linux Veth Pair 的：
```sh {2}
~ docker run -d nginx
c4ac920a44697897447ee0325f13926298193be2eddb0aa56f397352fe437fec
```
<br/>

查看下容器内的网卡信息：
:::warning[注意]
由于原本的 nginx 中没有 `ip` 命令，使用以下命令进行安装即可：
```sh
apt-get update && apt-get install -y iproute2
```
:::
```sh {8-11}
~ docker exec c4ac920a4469 ip addr show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
83: eth0@if84: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
```
可以看到网卡 *83: eth0@if84* 是一个虚拟网卡，它的另一端为 *if84* 网卡（即 ID 为 84 的网卡）
<br/>


再查看一下主机的网卡信息，查看是否存在 ID 为 84 的网卡：
```sh {2-5}
~ ip addr show dev $(ip link | awk -v id=84 '$1 == id":" {print $2}' | cut -d'@' -f1)
84: veth5ca198e@if83: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether e6:d5:5a:c5:0d:06 brd ff:ff:ff:ff:ff:ff link-netnsid 2
    inet6 fe80::e4d5:5aff:fec5:d06/64 scope link
       valid_lft forever preferred_lft forever
```
可以看到，主机上确实存在 ID 为 84 的网卡，和容器内 ID 为 83 的网卡组成一对。此时的网络拓扑图如下：

<center>

![网络拓扑图](https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/linux_veth_pair_in_docker.excalidraw.png?raw=true)

</center>

由此可以看出，Docker 会为每个容器创建新一个虚拟网卡对，虚拟网卡对的一端在主机上，一端在容器内，从而实现容器和主机的网络通信。

## 总结

Linux Veth Pair: 
- 一种虚拟网络网卡对，常用于实现网络命名空间之间的通信
- 可以理解为一根虚拟的网线，从一端发出的数据包，可以在另一端接收到

Linux Veth Pair 在 Docker 中的应用:
- Docker 会为每个容器创建新一个虚拟网卡对，虚拟网卡对的一端在容器内，一端在主机上，从而实现容器和主机的网络通信。

---

参考：
- [[man 7 veth]](https://man7.org/linux/man-pages/man4/veth.4.html)