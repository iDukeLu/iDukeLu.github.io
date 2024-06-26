---
title: 常用软件安装
authors: Duke Lu
date: 2024-05-17
tags: [云原生, Docker]
sidebar_position: 3
---

:::tip
本文的使用 Docker 安装的软件为最简化安装，主要为了快速启动应用进行本地开发和测试。
:::

## MySQL 安装
```shell
docker run -d \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=123456 \
--restart=always \
--privileged=true \
--name=mysql \
mysql:8.0
```
更多参考：[MySQL Official Images | Docker Hub](https://hub.docker.com/_/mysql)

## Redis 安装
```sh
docker run -d \
-p 6379:6379 \
--restart=always \
--privileged=true \
--name=redis \
redis
```
更多参考：[Redis Official Images | Docker Hub](https://hub.docker.com/_/redis)

## Mongo 安装
```sh
docker run -d \
-p 27017:27017 \
--restart=always \
--privileged=true \
--name=mongo \
mongo
```
更多参考：[Redis Official Images | Docker Hub](https://hub.docker.com/_/mongo)

## ETCD 安装
```shell
docker run -d \
-p 2379:2379 \
-e ETCDCTL_API=2 \
-e ETCD_ROOT_PASSWORD=123456 \
--restart=always \
--name etcd \
bitnami/etcd:3.4
```
更多参考：[Bitnami package for ETCD | Docker Hub](https://hub.docker.com/r/bitnami/etcd)