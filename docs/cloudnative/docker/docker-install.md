---
title: Docker 的安装与卸载
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
<Tabs>
<TabItem value="Offical" label="官方源">
```sh
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```
</TabItem>
<TabItem value="AliYun" label="阿里云源">
```sh
yum install -y yum-utils
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```
</TabItem>
</Tabs>

### 使用 yum 安装 Docker

<Tabs>
<TabItem value="Latest" label="最新版本">

```sh
yum install -y docker-ce
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

:::tip[说明]
通常官方会推荐使用 `yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin` 命令来进行安装，下面是这些这组件的说明：

- *docker-ce*：提供了 Docker Engine，用于构建、运行和管理容器化应用程序。
- *docker-ce-cli*：命令行界面工具，用于与 Docker Engine 进行交互。
- *containerd.io*：底层容器运行时，负责管理容器的生命周期。
- *docker-buildx-plugin*：：Docker Build 扩展插件，用于多平台和多架构的容器镜像构建。
- *docker-compose-plugin*：Docker Compose 插件，用于定义和运行多容器的应用程序。

但其实仅需安装 *docker-ce* 即可，因为其他组件将作为 docker-ce 的依赖被自动安装：
```
已安装:
  docker-ce.x86_64 3:26.1.4-1.el7

作为依赖被安装:
  containerd.io.x86_64 0:1.6.33-3.1.el7
  docker-buildx-plugin.x86_64 0:0.14.1-1.el7
  docker-ce-cli.x86_64 1:26.1.4-1.el7
  docker-ce-rootless-extras.x86_64 0:26.1.4-1.el7
  docker-compose-plugin.x86_64 0:2.27.1-1.el7
```
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

## 卸载 Docker

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

在上述的命令执行后，仅是删除了 Docker 及其镜像、容器、卷，还需手动删除 Docker 创建的网卡
```sh
## 找到状态为 DOWN 的网卡
~ ip address show | grep DOWN
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
21: br-f39d5850fc97: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default

## 删除 Docker 创建的网卡
~ ip link delete docker0
~ ip link delete br-f39d5850fc97
```

---

参考：
- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)
- [Install Docker Engine on Debian](https://docs.docker.com/engine/install/debian/)