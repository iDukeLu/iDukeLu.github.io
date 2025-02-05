---
title: Homebrew 入门及常用命令
authors: Duke Lu
date: 2018-04-14
tags: [homebrew]
---

# Homebrew 入门及常用命令

## 简介
`Hombrew` 是 macOS系统下的一款缺失软件包的管理器。
- 完全基于 Git 和 Ruby
- 将软件包安装到独立目录，并将其文件软链接至 /usr/local/bin
- 安装到独立目录，使得软件包易于卸载
- 通过软链接的方式，意味着不用再去配置环境变量
- 易于管理软件包，省去安装配置繁琐的过程

> 在Homebrew中，软件包分为 CLI 软件包和 GUI 软件包：
> - CLI 的软件包称为 `formula`，被安装至 `/usr/local/Cellar`，如 git、maven 等
> - GUI 的软件包称为 `cask`，被安装至 `/usr/local/Caskroom`，如 QQ、WeChat 等

## 安装和卸载
Mac 默认集成了 Ruby，直接运行以下 Ruby 脚步即可
- 安装
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
安装之后，`Homebrew` 会为你自动设置环境变量，以使用提供的命令

- 卸载
```
/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```
卸载之后，`Homebrew` 在安装时创建的目录、下载的软件包及软件包的软链接均会被删除

## 基本使用
Homebrew 最常用的几个操作便是软件包的搜索、下载、卸载、更新以及查看

**通用操作**
```
// 搜索查询
brew search [text | /regex/] // 无参：查找所有可安装的软件包；有参：根据字符串搜索软件包，/regex/表示正则

// 清理
brew cleanup [formula | cask] // 无参：删除所有 formula 和 cask 过时版本；有参：删除指定 formula 或 cask 过时版本；

// 更新
brew update // 更新 Homebrew
```

**对 `formula` 的操作**
```
// 安装、卸载、重装、更新
brew install (formula) // 安装指定 formula
brew reinstall (formula) // 重装指定 formula
brew uninstall (formula) // 卸载指定 formula
brew upgrade [formula] // 无参：更新所有已安装 formula；有参：更新指定 formula

// 查看
brew list [formula] // 无参：列出所有已安装 formula；有参：列出指定 formula 的相关列表
brew info [formula] // 无参：列出已安装 formula 综合信息；有参：列出指定 formula 的信息
brew home [formula] // 无参: 打开 Homebrew 官网；有参：列出指定 formula 的官网
brew outdated // 列出已过时的 formula
brew deps (formula) // 列出指定 formula 的依赖项

brew doctor 检查配置问题
```

**对 `cask` 的操作**
```
// 安装、卸载、重装、更新
brew cask install (formula) // 安装指定 cask
brew cask reinstall (formula) // 重装指定 cask
brew cask uninstall (formula) // 卸载指定 cask
brew cask upgrade [formula] // 无参：更新所有已安装 cask；有参：更新指定 cask

// 查看
brew cask list [formula] // 无参：列出所有已安装 cask；有参：列出指定 cask 的相关列表
brew cask info [formula] // 无参：列出已安装 cask 综合信息；有参：列出指定 cask 的信息
brew cask home [formula] // 无参: 打开 Homebrew 官网；有参：列出指定 cask 的官网
brew cask outdated // 列出已过时的 cask

brew cask doctor 检查配置问题
```

## 关于 Homebrew 的目录
- `/usr/local/Homebrew`：`Homebrew` 程序本身的安装目录
- `/usr/local/Cellar`：存放`formula` 的目录
- `/usr/local/Caskroom`：存放`cask` 的目录
- `/usr/local/opt`：所有包忽略版本的存放目录
- `/usr/local/bin`：所有包二进制目录
- `/usr/local/etc`：所有包配置文件目录
- `/usr/local/lib`：所有包依赖库目录
- `/usr/local/share`：所有包文档文件目录

- - -

更多参考：
https://brew.sh
https://docs.brew.sh/Manpage