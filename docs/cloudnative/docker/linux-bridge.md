---
title: Linux Bridge
authors: Duke Lu
date: 2024-05-20
tags: [云原生, Docker, Linux]
sidebar_position: 100
---

## 什么是 Linux Bridge ？

> A network bridge is a virtual network device that forwards packets between two or more network segments. A bridge behaves like a virtual network switch and works transparently. Other machines in the network do not need to know about its existence. Physical network devices (e.g. eth1) and virtual network devices (e.g. tap0) can be connected to it.

网桥是一种虚拟网络设备，用于在两个或多个网段之间转发数据包。网桥的行为类似于虚拟网络交换机，工作方式透明。网络中的其他机器不需要知道它的存在。物理网络设备（例如 eth1）和虚拟网络设备（例如 tap0）可以连接到它。

:::info[总结]
Linux Bridge 是 Linux 内核中的一种虚拟网络设备，用于将多个网络接口桥接在一起。<br/>

可以理解 Linux Bridge 是工作在二层的网络交换机，通过记录和学习每个网络接口的 MAC 地址生成一张 *MAC 地址表*，最后根据 *MAC 地址表* 决定如何转发流量。
:::

## 通过一个示例演示

我创建三个网络空间、三个虚拟网卡对以及一个网桥，将虚拟网卡对的一端放入网络空间，另一端桥接在网桥上，最后通过任意一个网络空间 ping 其他网络空间。最终的网络拓扑图如下：

<center>

![网络拓扑图](https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/linux_bridge.excalidraw.png?raw=true)

</center>

```sh
## 创建 3 个网络空间：ntns1、ntns2、ntns3
ip netns add ntns1
ip netns add ntns2
ip netns add ntns3

## 创建 3 个虚拟网卡对：br-veth0/veth0、br-veth1/veth1、br-veth2/veth2
ip link add veth0 type veth peer name br-veth0
ip link add veth1 type veth peer name br-veth1
ip link add veth2 type veth peer name br-veth2

## 创建并启动网桥：br0
ip link add name br0 type bridge
ip link set br0 up

## 将虚拟网卡对的一端桥接到网桥，并启动网卡
## br-veth0、br-veth1、br-veth2 桥接到 br0
ip link set dev br-veth0 master br0
ip link set dev br-veth1 master br0
ip link set dev br-veth2 master br0

ip link set br-veth0 up
ip link set br-veth1 up
ip link set br-veth2 up

## 将虚拟网卡对的一端放入网络空间，设置 IP，并启动网卡
ip link set veth0 netns ntns1
ip netns exec ntns1 ip link set lo up
ip netns exec ntns1 ifconfig veth0 10.10.10.10/24 up
ip netns exec ntns1 route add default dev veth0

ip link set veth1 netns ntns2
ip netns exec ntns2 ip link set lo up
ip netns exec ntns2 ifconfig veth1 11.11.11.11/24 up
ip netns exec ntns2 route add default dev veth1

ip link set veth2 netns ntns3
ip netns exec ntns3 ip link set lo up
ip netns exec ntns3 ifconfig veth2 12.12.12.12/24 up
ip netns exec ntns3 route add default dev veth2
```
<br/>

经过一系列操作后，网络环境已就绪，下面进行验证即可：
:::warning[注意]
可能会出现 ping 不通的现象，这时需要检查下宿主机的 iptables 规则是否有问题。
```sh
iptables -S | less
```

通常安装了 Docker 的话，FORWARD 链的默认策略会被 Docker 设置成 Drop，通过下面的命令修改放行即可：
```sh
## 修改 FORWARD 的默认策略为 ACCEPT 放行
iptables -P FORWARD ACCEPT
```

:::
```sh
## 在 ntns1 中 ping ntns2 的网卡 11.11.11.11
~ ip netns exec ntns1 ping 11.11.11.11 -c 3
PING 11.11.11.11 (11.11.11.11) 56(84) bytes of data.
64 bytes from 11.11.11.11: icmp_seq=1 ttl=64 time=0.077 ms
64 bytes from 11.11.11.11: icmp_seq=2 ttl=64 time=0.054 ms
64 bytes from 11.11.11.11: icmp_seq=3 ttl=64 time=0.064 ms

--- 11.11.11.11 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1999ms
rtt min/avg/max/mdev = 0.054/0.065/0.077/0.009 ms

## 在 ntns2 中 ping ntns3 的网卡 12.12.12.12
~ ip netns exec ntns2 ping 12.12.12.12 -c 3
PING 12.12.12.12 (12.12.12.12) 56(84) bytes of data.
64 bytes from 12.12.12.12: icmp_seq=1 ttl=64 time=0.095 ms
64 bytes from 12.12.12.12: icmp_seq=2 ttl=64 time=0.065 ms
64 bytes from 12.12.12.12: icmp_seq=3 ttl=64 time=0.073 ms

--- 12.12.12.12 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1999ms
rtt min/avg/max/mdev = 0.065/0.077/0.095/0.016 ms

## 在 ntns3 中 ping ntns3 的网卡 10.10.10.10
~ ip netns exec ntns3 ping 10.10.10.10 -c 3
PING 10.10.10.10 (10.10.10.10) 56(84) bytes of data.
64 bytes from 10.10.10.10: icmp_seq=1 ttl=64 time=0.069 ms
64 bytes from 10.10.10.10: icmp_seq=2 ttl=64 time=0.051 ms
64 bytes from 10.10.10.10: icmp_seq=3 ttl=64 time=0.057 ms

--- 10.10.10.10 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1999ms
rtt min/avg/max/mdev = 0.051/0.059/0.069/0.007 ms
```
可以看到，不同网络空间及网段的设备通过网桥桥接后，网络是互通的。

## Linux Bridge 在 Docker 中的使用

首先，Docker 在启动或重启时，会检查宿主机器是否存在 `docker0` 网桥，若不存在，Docker 会创建一个名为 `docker0` 的网桥。
```sh
## 查看 docker0 网络设备
~ ip addr show docker0
82: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:48:e1:a0:7a brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:48ff:fee1:a07a/64 scope link
       valid_lft forever preferred_lft forever

## 查看 docker0 网桥信息
~ brctl show docker0
bridge name	    bridge id           STP     enabled	    interfaces
docker0		    8000.02425dd16d24   no
```
由于没有创建容器，可以看到此时的 docker0 网桥中没有任何网络接口 (interfaces)。
<br/>

然后，我们启动一个容器看看，Docker 是如何使用 docker0 网桥的
```
~ docker run -d nginx
9e732209a2592250e644ea3fa2cad71f1f886530b2664697402e0372059b777e
```
<br/>

查看一下 nginx 创建的虚拟网卡对信息：
```sh {9-12,17-20}
## 查看容器内的网卡信息
～ docker exec 9e732209a259 ip addr show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
148: eth0@if149: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever

## 容器内的虚拟网卡为 148: eth0@if149，故另一端为 if149 网卡 (即 ID 为 149 的网卡)
## 查看宿主机 ID 为 149 的网卡信息
~ ip addr show dev $(ip link | awk -v id=149 '$1 == id":" {print $2}' | cut -d'@' -f1)
149: veth5e8b956@if148: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default
    link/ether 76:f8:1e:e8:23:89 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet6 fe80::74f8:1eff:fee8:2389/64 scope link
       valid_lft forever preferred_lft forever
```
还是熟悉的配方，veth5e8b956/eth0 组成了一个虚拟网卡对，一端在容器内，一端在宿主机。
<br/>

再来看看 docker0 网桥的信息：
```sh
~ brctl show docker0
bridge name	    bridge id           STP     enabled	    interfaces
docker0		    8000.02425dd16d24   no                  veth5e8b956
```
可以看到虚拟网卡 veth5e8b956 已经桥接到了 docker0 网桥。
<br/>

如果再启动一个容器，然后你会发现，会有新的虚拟网卡桥接到 docker0 网桥：
```sh
~ docker run -d redis
464cc3fb4bcb884521845a1ab77f21866f1566efdec57ca2ad548716d1e97776

~ brctl show docker0
bridge  name    bridge id           STP     enabled     interfaces
docker0         8000.02425dd16d2    no                  veth5e8b956
                                                        veth8a49632
```
没错，这种模式就是 Docker 默认的网络模式：*桥接模式*。此时的网络拓扑图如下：

<center>

![](https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/linux_bridge_in_docker.excalidraw.png?raw=true)

</center>

## 总结

Linux Bridge: 
- 一种虚拟网络设备，用于将多个网络接口桥接在一起。
- 可以理解为工作在二层的网络交换机，根据生成的 *MAC 地址表* 决定如何转发流量。

Linux Bridge 在 Docker 中的应用:
- Docker 在启动或重启时，会检查并创建一个名为 `docker0` 的网桥。
- Docker 会为每个容器创建新一个虚拟网卡对，虚拟网卡对的一端在容器内，一端在主机上，并将主机上的虚拟网卡桥接到 `docker0` 网桥上，从而实现容器和主机、以及容器之间的网络通信。
