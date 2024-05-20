---
title: 安装 Docker 
authors: Duke Lu
date: 2024-05-17
tags: [云原生, Docker]
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## CentOS 安装 Docker

> CentOS 安装 Docker 主要步骤如下：
> 1. 卸载老版本
> 2. 添加 Docker 软件源
> 3. 使用 yum 安装 Docker
> 4. 启动 Docker，验证是否安装成功
> 5. 卸载 Docker

:::tip
系统要求：
- CentOS 7 (EOL: June 30, 2024)
- CentOS 8 (stream) (EOL: May 31, 2024)
- CentOS 9 (stream)
:::

### 卸载老版本

```sh
yum remove docker \
        docker-client \
        docker-client-latest \
        docker-common \
        docker-latest \
        docker-latest-logrotate \
        docker-logrotate \
        docker-engine
```

### 添加 Docker 软件源

```sh
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### 使用 yum 安装 Docker

<Tabs>
<TabItem value="Latest" label="最新版本">

```sh
yum install docker-ce
```
</TabItem>
<TabItem value="Specific Version" label="指定版本">

```sh
## 查询可使用的版本
yum list docker-ce --showduplicates | sort -r

docker-ce.x86_64            18.06.2.ce-3.el7                   docker-ce-stable
docker-ce.x86_64            18.06.1.ce-3.el7                   docker-ce-stable
docker-ce.x86_64            18.06.0.ce-3.el7                   docker-ce-stable
<...>

## 安装指定版本
yum install -y docker-ce-18.06.2.ce-3.el7
```
</TabItem>
</Tabs>

:::info
通常官方的命令会安装 *docker-ce*、*docker-ce-cli*、*containerd.io*、*docker-buildx-plugin* 、*docker-compose-plugin* 等多个组件。

- *docker-ce*：提供了 Docker Engine，用于构建、运行和管理容器化应用程序。
- *docker-ce-cli*：命令行界面工具，用于与 Docker Engine 进行交互。
- *containerd.io*：底层容器运行时，负责管理容器的生命周期。
- *docker-buildx-plugin*：：Docker Build 扩展插件，用于多平台和多架构的容器镜像构建。
- *docker-compose-plugin*：Docker Compose 插件，用于定义和运行多容器的应用程序。

通常仅需安装 *docker-ce* 即可，因为在安装 *docker-ce* 时会自动安装 *docker-ce-cli*、*containerd.io*。<br/>
*docker-buildx-plugin*：考虑需要跨平台构建镜像时安装。<br/>
*docker-compose-plugin*：考虑后续会使用 Docker Compose 时安装。
:::

### 启动 Docker，验证是否安装成功
启动 Docker
```sh
systemctl start docker && systemctl enable docker
```

验证是否安装成功
```
docker -v
```

### 卸载 Docker

```sh
## 删除 Docker
yum remove docker-ce \
        docker-ce-cli \
        containerd.io \
        docker-buildx-plugin \
        docker-compose-plugin \
        docker-ce-rootless-extras

## 删除 镜像、容器、卷
rm -rf /var/lib/docker
rm -rf /var/lib/containerd
```

---

参考：
- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)
- [Install Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)