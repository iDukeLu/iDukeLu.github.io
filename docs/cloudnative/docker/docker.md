---
title: Docker
sidebar_label: Docker
authors: Duke Lu
date: 2024-05-14
tags: [云原生, Docker]
sidebar_position: 1
---

## 什么是 Docker
 > Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code, you can significantly reduce the delay between writing code and running it in production.
 
Docker 是一个开源的轻量级的虚拟化容器管理引擎，旨在简化应用程序的开发、部署和运行。它通过使用容器（Containers）来实现这一目标。容器是轻量级、可移植的虚拟化单元，包含了应用程序及其所有依赖项，使得应用程序可以在任何环境中一致地运行。


## Docker 架构
> Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

- Docker 使用 CS 架构
- Docker 客户端：负责与 Docker 守护进程通信
- Docker 守护进程：负责构建、运行和分发 Docker 容器
- Docker 客户端可以连接本地 Docker 守护进程和远程 Docker 守护进程

![Docker 架构](https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/img/docker/docker-architecture.jpg?raw=true)

## Docker VS 虚拟机

<center>

![](https://github.com/iDukeLu/iDukeLu.github.io/blob/main/static/excalidraw/docker/docker_vs_vm.excalidraw.png?raw=true)

</center>

虚拟机（VM）和容器（Container）都是用于创建隔离的计算环境的技术，但它们在架构、性能、资源利用率和应用场景等方面有显著的区别。以下是虚拟机和容器之间的一些关键区别：

<center>

| 特性         | 虚拟机（VM）                   | 容器（Container）                            |
| ------------ | ------------------------------ | -------------------------------------------- |
| **架构**     | 包含完整操作系统和虚拟硬件     | 共享宿主操作系统内核                         |
| **管理工具** | Hypervisor                     | 容器引擎（如 Docker、Kubernetes）            |
| **资源开销** | 较大（包含完整操作系统）       | 较小（共享内核，轻量级）                     |
| **启动时间** | 几分钟                         | 几秒钟                                       |
| **隔离性**   | 高（独立的操作系统内核和硬件） | 中等（共享内核，使用 cgroups 和 namespaces） |
| **安全性**   | 较高（强隔离性）               | 中等（依赖宿主内核的安全性）                 |
| **适用场景** | 需要不同操作系统、高安全性需求 | 微服务架构、快速部署和扩展                   |
| **典型用途** | 运行旧版应用程序、多租户环境   | 微服务、CI/CD、轻量级开发环境                |

</center>

---

参考：
- [Docker overview](https://docs.docker.com/get-started/overview/#the-underlying-technology)
- [容器和虚拟机之间有什么区别？](https://www.alibabacloud.com/zh/knowledge/difference-between-container-and-virtual-machine?_p_lc=1)