---
title: Linux Namespace
authors: Duke Lu
date: 2024-05-20
tags: [云原生, Docker, Linux]
sidebar_position: 97
---

## 什么是 Linux Namespace ？

> A namespace wraps a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the global resource. Changes to the global resource are visible to other processes that are members of the namespace, but are invisible to other processes. One use of namespaces is to implement containers.

Linux Namespace 是 Linux 内核提供的一种轻量级的虚拟化技术，用于隔离和虚拟化系统资源，它们可以将全局系统资源隔离到不同的独立空间，使不同的进程组拥有各自独立的资源视图。每个命名空间的目的是将特定的全局系统资源包装在抽象中，使命名空间内的进程看起来拥有自己的全局资源的隔离实例。 命名空间的总体目标之一是支持容器的实现，容器是一种用于轻量级虚拟化（以及其他目的）的工具，它为一组进程提供了它们是系统上唯一进程的错觉。

:::info[总结]
Linux Namespace 是 Linux 内核提供的一种机制，一种轻量级的虚拟化技术，用于**隔离和虚拟化系统资源**。
:::

## Linux Namespace 分类

通过以下命令即可查看有哪些 Linux Namespace：

```sh
$ ls -l /proc/$$/ns | awk '{print $1, $9, $10, $11}'
```

```sh
total 0
lrwxrwxrwx. cgroup -> cgroup:[4026531835]
lrwxrwxrwx. ipc -> ipc:[4026531839]
lrwxrwxrwx. mnt -> mnt:[4026531840]
lrwxrwxrwx. net -> net:[4026531969]
lrwxrwxrwx. pid -> pid:[4026531836]
lrwxrwxrwx. pid_for_children -> pid:[4026531834]
lrwxrwxrwx. time -> time:[4026531834]
lrwxrwxrwx. time_for_children -> time:[4026531834]
lrwxrwxrwx. user -> user:[4026531837]
lrwxrwxrwx. uts -> uts:[4026531838]
```
目前，Linux 已经支持 8 种全局资源的虚拟化 (每种资源都是随着 Linux 内核版本的迭代而逐渐加入的，因此有些内核版本可能不具备某种 Namespace)：

| **Namespace**         | **隔离资源 (Isolates)**              | **参考**                                                                       | **内核版本** |
| --------------------- | ------------------------------------ | ------------------------------------------------------------------------------ | ------------ |
| **Mount Namespace**   | Mount points                         | [mount_namespaces(7)](https://man.archlinux.org/man/mount_namespaces.7.en)     | 2.4.19       |
| **UTS Namespace**     | Hostname and NIS domain name         | [uts_namespaces(7)](https://man.archlinux.org/man/uts_namespaces.7.en)         | 2.6.19       |
| **IPC Namespace**     | System V IPC, POSIX message queues   | [ipc_namespaces(7)](https://man.archlinux.org/man/ipc_namespaces.7.en)         | 2.6.19       |
| **PID Namespace**     | Process IDs                          | [pid_namespaces(7)](https://man.archlinux.org/man/pid_namespaces.7.en)         | 2.6.24       |
| **Network Namespace** | Network devices, stacks, ports, etc. | [network_namespaces(7)](https://man.archlinux.org/man/network_namespaces.7.en) | 2.6.24       |
| **User Namespace**    | User and group IDs                   | [user_namespaces(7)](https://man.archlinux.org/man/user_namespaces.7.en)       | 3.8          |
| **Cgroup Namespace**  | Cgroup root directory                | [cgroup_namespaces(7)](https://man.archlinux.org/man/cgroup_namespaces.7.en)   | 4.6          |
| **Time Namespace**    | Boot and monotonic clocks            | [time_namespaces(7)](https://man.archlinux.org/man/time_namespaces.7.en)       | 5.6          |

## Linux Namespace API

Linux Namespaces 提供了一组 API，使得开发者能够创建、操作和管理不同的 namespaces。这些 API 主要包括：
- `clone`: 创建一个新的进程，并将这个进程加入指定的 namespaces。
- `unshare`: 将调用进程移动到新的 namespace。
- `setns`: 允许调用进程加入现有的 namespace。

其他 API：
- `readlink`: 用于读取符号链接。可以读取 /proc/[pid]/ns/ 目录下的 namespace 符号链接，获取 namespace 类型和标识。

## Linux Namespace 的生命周期
通常情况下，当一个 namespace 中的最后一个进程终止或离开该 namespace 时，namespace 会被自动销毁。

一些特殊情况下，有一些因素可能会使得即使没有成员进程，namespace 依然存在。包括：

- 打开的文件描述符或绑定挂载点：如果存在一个打开的文件描述符指向 /proc/pid/ns/* 文件，或对该文件的绑定挂载点，这些引用会使 namespace 保持存在。
- 层次化的 namespace：某些 namespace（如 PID namespace 或 User namespace）是层次化的。如果一个 namespace 有子 namespace 存在，那么该 namespace 会继续存在。
- User namespace 拥有非用户 namespace：如果一个 User namespace 拥有一个或多个非用户 namespace（如网络 namespace、IPC namespace 等），那么这个 User namespace 会保持存在。
- 通过符号链接引用的 PID namespace：如果有进程通过 /proc/pid/ns/pid_for_children 符号链接引用该 PID namespace，那么该 PID namespace 会保持存在。
- 通过符号链接引用的 Time namespace：如果有进程通过 /proc/pid/ns/time_for_children 符号链接引用该 Time namespace，那么该 Time namespace 会保持存在。
- 引用 IPC namespace 的 mqueue 文件系统挂载：如果一个 mqueue 文件系统挂载对应于某个 IPC namespace，那么该 IPC namespace 会保持存在。
- 引用 PID namespace 的 proc 文件系统挂载：如果一个 proc 文件系统挂载对应于某个 PID namespace，那么该 PID namespace 会保持存在。

## Linux Namespace 在 Docker 中的使用
我们启动一个容器，看看 Docker 是如何通过 Namespace 隔离相关资源的：
```sh {2}
~ docker run -d nginx
c4ac920a44697897447ee0325f13926298193be2eddb0aa56f397352fe437fec
```

通过容器找到进程在宿主机的 PID
```sh
～ docker inspect --format '{{.State.Pid}}' c4ac920a4469
551330

## 找一下 551330 的父 PID
～ ps -o ppid= -p 551330
551307

## 看一下父 PID 551307 的进程树
～ pstree -p 551307
containerd-shim(551307)───nginx(551330)─┬─nginx(551374)
                                        └─nginx(551375)

## 看一下 551307、551330、551374、551375 具体的进程
~ ps -p 551307 551330 551374 551375
    PID TTY      STAT   TIME COMMAND
 551307 ?        Sl     0:03 /usr/bin/containerd-shim-runc-v2 -namespace moby -id c4ac920a44697897447ee0325f13926298193be2eddb0aa56f397352fe437fec -address /run/containe
 551330 ?        Ss     0:00 nginx: master process nginx -g daemon off;
 551374 ?        S      0:00 nginx: worker process
 551375 ?        S      0:00 nginx: worker process
```
可以看出，PID 551330 确实是由 Docker 启动的 nginx 进程
<br/>

查看当前主机的 namespace 情况：
```sh {11-15}
## 查看 namespace 列表
~ lsns
        NS TYPE  NPROCS    PID USER   COMMAND
4026531836 pid       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22
4026531837 user      89      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22
4026531838 uts       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22
4026531839 ipc       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22
4026531840 mnt       84      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22
4026531856 mnt        1     18 root   kdevtmpfs
4026531956 net       86      1 root   /usr/lib/systemd/systemd --switched-root --system --deserialize 22
4026532160 mnt        1    559 chrony /usr/sbin/chronyd
4026532308 mnt        3 551330 root   nginx: master process nginx -g daemon off
4026532309 uts        3 551330 root   nginx: master process nginx -g daemon off
4026532310 ipc        3 551330 root   nginx: master process nginx -g daemon off
4026532311 pid        3 551330 root   nginx: master process nginx -g daemon off
4026532313 net        3 551330 root   nginx: master process nginx -g daemon off

## 确认 PID 551330 下是否有这些 namespace
~ ll /proc/551330/ns
lrwxrwxrwx 1 root root 0 6月  23 13:21 ipc -> ipc:[4026532310]
lrwxrwxrwx 1 root root 0 6月  23 13:21 mnt -> mnt:[4026532308]
lrwxrwxrwx 1 root root 0 6月  23 01:22 net -> net:[4026532313]
lrwxrwxrwx 1 root root 0 6月  23 01:23 pid -> pid:[4026532311]
lrwxrwxrwx 1 root root 0 6月  23 13:21 user -> user:[4026531837]
lrwxrwxrwx 1 root root 0 6月  23 13:21 uts -> uts:[4026532309]
```
可以看出，Docker 为 nginx 容器创建了新的 namespace (mnt、uts、ipc、pid、net)，并将 PID 为 551330 的进程加入了这些 namespace。


## 总结

Linux Namespace：Linux 内核提供的一种机制，一种轻量级的虚拟化技术，用于**隔离和虚拟化系统资源**。


8 种全局资源的虚拟化（内核版本不同，支持的 Namespace 可能不同）：
- Mount: 隔离文件挂载点
- UTS: 隔离主机名、域名
- IPC: 隔离进程通信资源 (System V IPC, POSIX message queues)
- PID: 隔离进程 ID
- Network: 隔离网络设备、网络协议栈、路由表、IP 地址、端口
- User: 隔离用户、用户组
- Cgroup: 隔离 Cgroup 根目录
- Time: 隔离系统时间、单调时间

生命周期：
- 通常情况，namespace 最后一个进程终止或离开时，namespace 会被自动销毁。
- 特殊情况下，有一些因素可能会使得即使没有成员进程，namespace 依然存在。

Linux Namespace 在 Docker 中的应用：
- Docker 会为每个容器中的进程创建新的 namespace，并将启动的进程加入这些新的 namespace，最后通过这些 namespace 实现资源的隔离。

---

参考：
- [Namespaces in operation](https://lwn.net/Articles/531114/)
- [man 7 namespaces](https://man.archlinux.org/man/namespaces.7.en)
- [Linux Namespaces - 维基百科](https://en.wikipedia.org/wiki/Linux_namespaces)