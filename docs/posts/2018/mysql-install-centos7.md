---
title: MySQL 8.0 安装（CentOS 7）
authors: Duke Lu
date: 2018-05-19
tags: [markdown]
---

# MySQL 8.0 安装（CentOS 7）

## 下载 MySQL 压缩包并上传服务器
下载地址：[MySQL :: Download MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

## 安装 MySQL
1. 为系统创建 MySQL 用户组
```
groupadd mysql
useradd -r -g mysql -s /bin/false mysql
```

2. 创建 MySQL 安装目录、数据目录
```
mkdir -p /usr/local/mysql
mkdir -p /usr/local/mysql/data
```

3. 解压 MySQL 压缩包至安装目录
```
tar -xvf mysql-8.0.15-linux-glibc2.12-x86_64.tar.xz -C /usr/local/mysql --strip-components 1
```

4. 进入 MySQL 安装目录，初始化 MySQL （设置 user、basedir、datadir）
```
cd /usr/local/mysql 
./bin/mysqld --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --initialize
```
注意：初始化后，记得记录 MySQL 的初始密码

5. 创建 MySQL 命令软链接
```
ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql
```

6. 修改相关配置文件
- 修改 `/etc/my.conf` 配置文件，内容如下：
```
[mysqld]
basedir=/usr/local/mysql
datadir=/usr/local/mysql/data
socket=/var/lib/mysql/mysql.sock
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
# Settings user and group are ignored when systemd is used.
# If you need to run mysqld under a different user or group,
# customize your systemd unit file for mariadb according to the
# instructions in http://fedoraproject.org/wiki/Systemd


[mysqld_safe]
log-error=/var/log/mysql/mysql.log
pid-file=/var/run/mysql/mysql.pid


#
# include all files from the config directory
#
!includedir /etc/my.cnf.d
```

- 拷贝并修改 `/etc/init.d/mysqld` 文件
```
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
```

修改以下内容：
```
basedir=/usr/local/mysql
datadir=/usr/local/mysql/data
```

7. 创建 MySQL 日志文件、进程文件，并进行相关赋权
创建 /var/log/mysql/mysql.log 、 /var/run/mysql/mysql.pid
```
mkdir -p /var/log/mysql
mkdir -p /var/run/mysql
touch /var/log/mysql/mysql.log
touch /var/run/mysql/mysql.pid

chown -R mysql:mysql /var/log/mysql
chown -R mysql:mysql /var/run/mysql
chmod 750 /var/log/mysql/mysql.log
chmod 750 /var/run/mysql/mysql.pid
```

8. 为 mysql.sock 文件创建软链接，并为相应文件夹赋权
```
chown -R mysql:mysql /var/lib/mysql
ln -s /var/lib/mysql/mysql.sock /tmp/mysql.sock
```

到这里，MySQL 的安装就完成了，可以启动 MySQL 了，相关命令如下：
```
service mysqld start --启动mysql
service mysqld stop --关闭mysql
service mysqld restart --重启mysql
```

## 对 MySQL 进行初始配置
1. 登陆 mysql，用到初始化时记录的密码
```
mysql -uroot -p
```

2. 修改 root 用户密码为： root
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```

3. 开启远程访问
```
GRANT ALL ON *.* TO 'root'@'%';
```

报错：创建一个 root 用户，并开启远程访问
```
CREATE USER 'root'@'%' IDENTIFIED BY 'root'; --创建root用户，host为%
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
```

将刚刚创建的 root 用户，密码修改为：root
```
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
```

4. 刷新权限
```
FLUSH PRIVILEGES;
```

## 防火墙设置
- 内网环境，可以直接考虑关闭防火墙
```
systemctl stop firewalld.service --关闭防火墙
```

- 外网环境，建议开启 3306 端口即可
```
firewall-cmd —zone=public —add-port=3306/tcp —permanent -—添加3306端口
firewall-cmd —reload --重启防火墙规则
```

---

参考：[Centos7安装Mysql8.0.11 - baidu_27055141的博客 - CSDN博客](https://blog.csdn.net/baidu_27055141/article/details/80974701)