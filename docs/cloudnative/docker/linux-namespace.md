---
title: Linux Namespace
authors: Duke Lu
date: 2024-05-20
tags: [云原生, Docker]
sidebar_position: 98
---

## 什么是 Linux Namespace ？

> A namespace wraps a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the global resource. Changes to the global resource are visible to other processes that are members of the namespace, but are invisible to other processes. One use of namespaces is to implement containers.

Linux Namespace 是 Linux 内核提供的一种轻量级的虚拟化技术，用于隔离和虚拟化系统资源，它们可以将全局系统资源隔离到不同的独立空间，使不同的进程组拥有各自独立的资源视图。每个命名空间的目的是将特定的全局系统资源包装在抽象中，使命名空间内的进程看起来拥有自己的全局资源的隔离实例。 命名空间的总体目标之一是支持容器的实现，容器是一种用于轻量级虚拟化（以及其他目的）的工具，它为一组进程提供了它们是系统上唯一进程的错觉。

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
93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858
```

通过容器找到进程在宿主机的 PID
```sh
～ docker inspect --format '{{.State.Pid}}' 93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858
379225

## 找一下 379225 的父 PID
～ ps -o ppid= -p 379225
379205

## 看一下 379205 的进程树
～ pstree -p 379205
containerd-shim(379205)───nginx(379225)─┬─nginx(379267)
                                        └─nginx(379268)

## 看一下 379205、379225、379267、379268 具体的进程
~ ps -p 379205 379225 379267 379268
    PID TTY      STAT   TIME COMMAND
 379205 ?        Sl     0:00 /usr/bin/containerd-shim-runc-v2 -namespace moby -id 93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858 -address /run/containerd/containerd.sock
 379225 ?        Ss     0:00 nginx: master process nginx -g daemon off;
 379267 ?        S      0:00 nginx: worker process
 379268 ?        S      0:00 nginx: worker process

## PID 379205 确实是由 Docker 启动的 nginx 进程
```

查看容器进程 (宿主机的PID为 379205) 的 Linux Namespace
```sh
~ ll /proc/379225/ns
ipc -> ipc:[4026532245]
mnt -> mnt:[4026532243]
net -> net:[4026532249]
pid -> pid:[4026532247]
user -> user:[4026531837]
uts -> uts:[4026532244]

## 查看 PID 1 的 Linux Namespace
~ ll /proc/1/ns
ipc -> ipc:[4026531839]
mnt -> mnt:[4026531840]
net -> net:[4026531956]
pid -> pid:[4026531836]
user -> user:[4026531837]
uts -> uts:[4026531838]

## 查看 PID 2 的 Linux Namespace
~ ll /proc/2/ns
ipc -> ipc:[4026531839]
mnt -> mnt:[4026531840]
net -> net:[4026531956]
pid -> pid:[4026531836]
user -> user:[4026531837]
uts -> uts:[4026531838]
```
可以看出，Docker 会为每个容器中的进程创建新的 namespace，并通过这个新的 namespace 实现资源的隔离。
- PID 1、2 的 Linux Namespace 相同，即 PID 1、2 都处于宿主机的 Namespace
- PID 379225 与 PID 1、2 的 Linux Namespace 不同，即 Docker 为 PID 379225 创建了新的 Namespace

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
- Docker 会为每个容器中的进程创建新的 namespace，并通过这个新的 namespace 实现资源的隔离。

---

参考：
- [Namespaces in operation](https://lwn.net/Articles/531114/)
- [man 7 namespaces](https://man.archlinux.org/man/namespaces.7.en)
- [Linux Namespaces - 维基百科](https://en.wikipedia.org/wiki/Linux_namespaces)