---
title: 访问 Redis，提示进入保护模式
authors: Duke Lu
date: 2018-05-12
tags: [redis]
---

## 问题
Redis protected-mode 是3.2 之后加入的新特性，通过参考配置文件上的说明：
```
# When protected mode is on and if:
# 1) The server is not binding explicitly to a set of addresses using the "bind" directive.
# 2) No password is configured.
```
可以知道，以下两种情况会开启保护模式：
1. 服务器没有使用“bind”指令显式绑定到一组地址
2. 没有配置密码

从而不能进行远程连接，否则就会有以下提示：
```
-DENIED Redis is running in protected mode because protected mode is enabled, no bind address was specified, no authentication password is requested to clients. In this mode connections are only accepted from the loopback interface. If you want to connect from external computers to Redis you may adopt one of the following solutions: 1) Just disable protected mode sending the command 'CONFIG SET protected-mode no' from the loopback interface by connecting to Redis from the same host the server is running, however MAKE SURE Redis is not publicly accessible from internet if you do so. Use CONFIG REWRITE to make this change permanent. 2) Alternatively you can just disable the protected mode by editing the Redis configuration file, and setting the protected mode option to 'no', and then restarting the server. 3) If you started the server manually just for testing, restart it with the '--protected-mode no' option. 4) Setup a bind address or an authentication password. NOTE: You only need to do one of the above things in order for the server to start accepting connections from the outside.
Connection closed by foreign host.
```

## 解决
在问题描述中，已经给出了相应的解决方案
```
1) Just disable protected mode sending the command 'CONFIG SET protected-mode no' from the loopback interface by connecting to Redis from the same host the server is running, however MAKE SURE Redis is not publicly accessible from internet if you do so. Use CONFIG REWRITE to make this change permanent. 
2) Alternatively you can just disable the protected mode by editing the Redis configuration file, and setting the protected mode option to 'no', and then restarting the server. 
3) If you started the server manually just for testing, restart it with the '--protected-mode no' option. 
4) Setup a bind address or an authentication password. 
NOTE: You only need to do one of the above things in order for the server to start accepting connections from the outside
```

> 1. 发送命令 `CONFIG SET protected-mode no` ，这种设置不是永久的，但可以修改配置文件使之永久生效
> 2. 修改配置文件 `/etc/redis.conf` ，将 `protected-mode yes` 设置为 `no`
> 3. 启动时添加选项 `--protected-mode no`
> 4. 绑定地址或者设置认证密码
> 注意：您只需要执行上述操作之一，服务器就可以开始接受来自外部的连接

其实有用的就 2 和 4 两种方式：
1. 修改配置文件 `/etc/redis.conf` ，将 `protected-mode yes` 设置为 `no`
    ```
    protected-mode no
    ```
    注意：关闭保护模式后，同时又设置了绑定地址或者认证密码，仍需满足绑定地址和认证密码的条件，才能访问 redis 服务

2. 绑定地址或者设置认证密码
- 绑定地址：不设置，默认均可访问
    ```
    # bind 可绑定多个主机地址，类似过滤器的作用
    # 当配置为 0.0.0.0 时，允许任何主机访问
    bind 127.0.0.1 # 允许本机访问
    bind 45.123.77.99 # 允许 45.123.77.99 的主机访问
    ```

- 设置认证密码
    ```
    # 官方提示：密码应该足够强壮，不然很容易被破解
    # 原因是：since Redis is pretty fast -- Redis 非常快，可以以 150k次/s 的速度进行破解
    requirepass idukelu
    ```

注意：即绑定了地址，又设置了认证密码，需要满足两者才能访问 redis 服务