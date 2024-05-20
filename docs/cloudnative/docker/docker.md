---
title: Docker
sidebar_label: Docker
authors: Duke Lu
date: 2024-05-14
tags: [算法, 动态规范]
sidebar_position: 1
---

## 什么是 Docker
Docker 是一个开源的平台，旨在简化应用程序的开发、部署和运行。它通过使用容器（Containers）来实现这一目标。容器是轻量级、可移植的虚拟化单元，包含了应用程序及其所有依赖项，使得应用程序可以在任何环境中一致地运行。


## Docker 架构
> Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

- Docker 使用 CS 架构
- Docker 客户端：负责与 Docker 守护进程通信
- Docker 守护进程：负责构建、运行和分发 Docker 容器
- Docker 客户端可以连接本地 Docker 守护进程和远程 Docker 守护进程



## Docker VS 虚拟机


---

参考：[Docker overview](https://docs.docker.com/get-started/overview/#the-underlying-technology)