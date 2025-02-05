---
title: 连接 MySQL 报错：2059 - authentication plugin 'caching_sha2_password' cannot be loaded...
authors: Duke Lu
date: 2018-05-20
tags: [mysql]
---

# 连接 MySQL 报错：2059 - authentication plugin 'caching_sha2_password' cannot be loaded...

## 问题
使用 Navicat 连接 MySQL 数据库时，出现以下报错提示：
```
2059 - authentication plugin 'caching_sha2_password' cannot be loaded...
```
这个报错，中文意思就是：权限插件 `caching_sha2_password` 不能被加载

通过查阅 [MySQL 的官方参考文档](https://dev.mysql.com/doc/refman/8.0/en/pluggable-authentication.html#pluggable-authentication-compatibility)，我们看到这样的一段描述：
> - In MySQL 5.7, libmysqlclient uses as its default choice either mysql_native_password or the plugin specified through the MYSQL_DEFAULT_AUTH option for mysql_options().
> - When a 5.7 client tries to connect to an 8.0 server, the server specifies caching_sha2_password as its default authentication plugin, but the client still sends credential details per either mysql_native_password or whatever is specified through MYSQL_DEFAULT_AUTH.

从这里，我们就明白了：
- 8.0 以前的默认身份验证插件是 `mysql_native_password`
- 8.0 以后的默认身份验证插件是 `caching_sha2_password`

这里会报错的原因在上面也提到了：5.7 的客户端去连接 8.0 的服务端，因为默认的身份验证插件不同，故会造成插件不能加载的错误

说明一下：目前大多数的 MySQL 客户端都还没有升级为 8.0 的认证方式，故像 Navicat、Sequel Pro、SQLyog 等这些常用的连接工具，都有可能出现这个问题

## 解决
将 MySQL 8.0 的身份认证插件改回为 `mysql_native_password`
- 修改 身份认证插件为 `mysql_native_password`
    ```
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
    ```

- 刷新权限
    ```
    FLUSH PRIVILEGES;
    ```
OK，现在再用 Navicat 去连接 MySQL 便可以成功了
