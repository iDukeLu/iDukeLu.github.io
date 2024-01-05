---
title: Linux/Mac 配置 Java 环境
authors: Duke Lu
date: 2018-04-28
tags: [linux, mac, java]
---


## 一、下载并解压 JDK
### 1. 下载 JDK
这个没有什么好说的，一般我们使用 Oracle JDK，在 Oracle 官网[下载对应系统的 JDK 版本](https://www.oracle.com/java/technologies/javase-downloads.html)即可

### 2. 解压 JDK

通常，大多数情况下，都是将资源库等文件放在 `/usr/local/` 目录下。这里出于个人习惯，我一般将非系统的软件和资源等放在 `/opt/` 目录下，所以将刚刚下载的 JDK 移动到 /opt/ 目录下并解压
```
mkdir /opt/jdk
mv ./jdk-8u241-linux-x64.tar.gz /opt/jdk
cd /opt/jdk
tar -zxvf jdk-8u241-linux-x64.tar.gz
```

---

## 二、配置 Java 环境变量
### 1. Java 环境变量说明
配置 Java 环境变量，会配置 `JAVA_HOME`、`CLASSPATH`、`PATH` 3 个环境变量，下面是它们的简单说明：
1. `JAVA_HOME` 环境变量：指定 JDK 的安装目录。Eclipse/IDEA/Tomcat 等软件就是通过搜索 JAVA_HOME 变量来找到并使用安装好的 JDK。
2. `CLASSPATH` 环境变量：指定类搜索路径。JVM 就是通过CLASSPTH 来寻找类的。我们 需要把 JDK 安装目录下的 lib 子目录中的 dt.jar 和 tools.jar 设置到 CLASSPATH 中。当然，当前目录 “.” 也必须加入到该变量中。
3. `PATH` 环境变量：指定命令搜索路径。在 Shell 下面执行命令时，它会到 PATH 变量所指定的路径中查找看是否能找到相应的命令程序。我们需要把 JDK 安装目录下的 bin 目录增加到现有的 PATH 变量中，bin 目录中包含经常要用到的可执行文件。

### 2. 写入 Java 环境变量
环境变量通常有 3 个级别：系统级、用户级、临时（关于环境变量可以参考：[Linux/Mac 配置环境变量](https://www.cnblogs.com/dukelu/p/12351362.html)）。我们可以根据自己的场景灵活配置
- 系统级：对所有用户生效，在 `/etc/profile` 文件追加 Java 环境变量
  ```
  # Java
  export JAVA_HOME=/opt/jdk/jdk1.8.0_241
  export PATH=$JAVA_HOME/bin:$PATH
  export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar  
  ```
  ps: 保存文件后，记得 `source /etc/profile`，使写入的配置生效

- 用户级：仅对当前用户生效，在 `～/.bash_profile` 或 `～/.bashrc` 文件追加 Java 环境变量
  ```
  # Java
  export JAVA_HOME=/opt/jdk/jdk1.8.0_241
  export PATH=$JAVA_HOME/bin:$PATH
  export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar  
  ```
  ps: 保存文件后，记得 `source ～/.bash_profile` 或 `source ～/.bashrc`，使写入的配置生效

- 临时：仅对当前用户临时生效，退出后被系统清理，在命令行执行以下命令即可
  ```
  export JAVA_HOME=/opt/jdk/jdk1.8.0_241
  export PATH=$JAVA_HOME/bin:$PATH
  export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar  
  ```
  ps: 配置临时环境变量，一般用于调试使用，不建议用这种方式配置

---

## 三、验证是否配置成功
验证 Java 环境是否配置成功，只需运行命令 `java -versiong`，返回并显示有 JDK 版本号就说明 Java 环境已经配置成功了
