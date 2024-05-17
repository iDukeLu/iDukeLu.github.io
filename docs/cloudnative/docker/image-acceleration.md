---
title: Docker 镜像加速
authors: Duke Lu
date: 2024-05-17
tags: [云原生, Docker]
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

使用 Docker 镜像加速器可以显著提高镜像拉取速度，特别是在国内使用 Docker 时。以下是一些常见的 Docker 镜像加速器：

- 科大：https://docker.mirrors.ustc.edu.cn/
- 网易：https://hub-mirror.c.163.com/
- 阿里云：https://`<your-accelerator-id>`.mirror.aliyuncs.com
- 腾讯云：https://mirror.ccs.tencentyun.com
- 华为云：https://repo.huaweicloud.com
- 七牛云：https://reg-mirror.qiniu.com

镜像加速可通过**修改配置文件**或**使用命令的方式**配置：

<Tabs>
<TabItem value="file" label="配置文件方式">
编辑或创建 */etc/docker/daemon.json* 文件，添加以下内容：
```sh
{
"registry-mirrors": ["https://mirror.ccs.tencentyun.com"]
}
```
修改配置文件后，需要重启 Docker 服务使配置生效
```sh
sudo systemctl daemon-reload
sudo systemctl restart docker
```

</TabItem>
<TabItem value="cmd" label="命令行方式">

```sh
docker --registry-mirror=https://mirror.ccs.tencentyun.com daemon
```
</TabItem>
</Tabs>