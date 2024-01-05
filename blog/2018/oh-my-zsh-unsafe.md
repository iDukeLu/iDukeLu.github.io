---
title: oh-my-zsh 报错：提示检测到不安全的完成相关目录
authors: Duke Lu
date: 2018-04-15
tags: [oh-my-zsh]
---

## 问题
运行命令时，`oh-my-zsh` 冒出下面一大堆提示：
```
[oh-my-zsh] Insecure completion-dependent directories detected:
drwxr-xr-x   16 duke  staff   512 Jul 14 10:14 /Users/duke/.oh-my-zsh
drwxr-xr-x  250 duke  staff  8000 Jul 14 10:14 /Users/duke/.oh-my-zsh/plugins
drwxr-xr-x    4 duke  staff   128 Jul 14 10:14 /Users/duke/.oh-my-zsh/plugins/git
drwxr-xr-x    3 duke  staff    96 Jun 17 11:33 /usr/local/share/zsh
drwxr-xr-x    6 duke  staff   192 Oct  3 10:04 /usr/local/share/zsh/site-functions
lrwxr-xr-x    1 duke  staff    39 Jun 17 11:37 /usr/local/share/zsh/site-functions/_brew -> ../../../Homebrew/completions/zsh/_brew
lrwxr-xr-x    1 duke  staff    44 Jun 17 11:37 /usr/local/share/zsh/site-functions/_brew_cask -> ../../../Homebrew/completions/zsh/_brew_cask
lrwxr-xr-x    1 duke  staff    58 Oct  3 10:04 /usr/local/share/zsh/site-functions/_git -> ../../../Cellar/git/2.19.0_2/share/zsh/site-functions/_git

[oh-my-zsh] For safety, we will not load completions from these directories until
[oh-my-zsh] you fix their permissions and ownership and restart zsh.
[oh-my-zsh] See the above list for directories with group or other writability.

[oh-my-zsh] To fix your permissions you can do so by disabling
[oh-my-zsh] the write permission of "group" and "others" and making sure that the
[oh-my-zsh] owner of these directories is either root or your current user.
[oh-my-zsh] The following command may help:
[oh-my-zsh]     compaudit | xargs chmod g-w,o-w

[oh-my-zsh] If the above didn't help or you want to skip the verification of
[oh-my-zsh] insecure directories you can set the variable ZSH_DISABLE_COMPFIX to
[oh-my-zsh] "true" before oh-my-zsh is sourced in your zshrc file.
```

<!--truncate--> 

## 解决
问题的描述中，其实已经给了我们解决方法：
```
[oh-my-zsh] To fix your permissions you can do so by disabling
[oh-my-zsh] the write permission of "group" and "others" and making sure that the
[oh-my-zsh] owner of these directories is either root or your current user.
[oh-my-zsh] The following command may help:
[oh-my-zsh]     compaudit | xargs chmod g-w,o-w

[oh-my-zsh] If the above didn't help or you want to skip the verification of
[oh-my-zsh] insecure directories you can set the variable ZSH_DISABLE_COMPFIX to
[oh-my-zsh] "true" before oh-my-zsh is sourced in your zshrc file.
```

> 要修复权限，可以通过禁用“group”和“others”的写入权限并确保这些目录的所有者是root用户或当前用户来修复权限。
以下命令可能有所帮助：
compaudit | xargs chmod g-w，o-w
如果上面没有帮助，或者你想跳过不安全目录的验证，你可以在你的zshrc文件中找到oh-my-zsh之前将变量ZSH_DISABLE_COMPFIX设置为“true”。

### 第一种解决方法：修改相关文件夹权限
为以上提示的文件夹修改权限（根据具体提示修改）
```
chmod 755 /Users/duke/.oh-my-zsh
chmod 755 /Users/duke/.oh-my-zsh/plugins
chmod 755 /Users/duke/.oh-my-zsh/plugins/git
chmod 755 /usr/local/share/zsh/site-functions
chmod 755 /usr/local/share/zsh/site-functions/_brew
chmod 755 /usr/local/share/zsh/site-functions/_brew_cask
chmod 755 /usr/local/share/zsh/site-functions/_git
```

### 第二种解决方法：设置变量 ZSH_DISABLE_COMPFIX=true
1. 在.zshrc文件的第一行添加 `ZSH_DISABLE_COMPFIX=true`
2. 运行source命令，重新加载.zshrc文件
```
source ~/.zshrc
```