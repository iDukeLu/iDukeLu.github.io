---
title: Linux Cgroups
authors: Duke Lu
date: 2024-05-22
tags: [云原生, Docker, Linux]
sidebar_position: 98
---

## 什么是 Linux Cgroups ？

> Control groups, usually referred to as cgroups, are a Linux kernel feature which allow processes to be organized into hierarchical groups whose usage of various types of resources can then be limited and monitored. The kernel's cgroup interface is provided through a pseudo-filesystem called cgroupfs. Grouping is implemented in the core cgroup kernel code, while resource tracking and limits are implemented in a set of per-resource-type subsystems (memory, CPU, and so on).

Cgroups（Control Groups）是 linux 内核提供的一种机制，用来对一组进程及未来子进程的资源进行限制和管理。这些资源包括CPU、内存、存储、网络等。通过Cgroups，可以方便地限制某个进程的资源占用，并且可以实时地监控进程的监控和统计信息。

:::info[总结]
Cgroups（Control Groups）是 Linux 内核提供的一种机制，用于限制和记录进程组的资源使用情况（如 CPU、内存、磁盘 I/O 等。
:::

## Linux Cgroups 的主要功能

- 资源限制：Cgroups 可以限制某个组中进程所使用的资源量，比如 CPU 时间、内存、磁盘 I/O 带宽等。这样可以防止某些进程过度消耗资源，影响系统的整体性能。
- 优先级控制：Cgroups 允许设置不同组的资源使用优先级。例如，可以为重要的进程分配更多的 CPU 时间，而为次要进程分配较少的资源。
- 审计和监控：可以通过 Cgroups 对资源使用情况进行监控和统计，了解每个组的资源消耗情况，从而帮助系统管理员进行资源优化和故障排查。
- 隔离：Cgroups 提供进程间的资源隔离，确保一个组中的进程不会干扰到另一个组的进程。例如，在容器技术中，Cgroups 被广泛用于实现容器之间的资源隔离。

## Linux Cgroups 组成

> Cgroups are similar to processes in that: they are hierarchical, andchild cgroups inherit certain attributes from their parent cgroup.<br/>
> Multiple separate hierarchies of cgroups are necessary because each hierarchy is attached to one or more subsystems. A subsystem represents a single resource, such as CPU time or memory. 

Cgroup 与进程的相似之处在于：它们是分层的，并且子 cgroup 从其父 cgroup 继承某些属性。
多个单独的 cgroup 层次结构是必要的，因为每个层次结构都附加到一个或多个子系统。 子系统代表单个资源，例如 CPU 时间或内存等。

:::info[总结]
可以简单理解为：
- cgroups 使用多个树形的 *层次结构(hierarchy)* 来组织和管理资源
- 一个 *层次结构(hierarchy)* 是由多个 *子 cgroup* 节点组成的树形结构
- *子 cgroup* 可以从其 *父 cgroup* 继承某些属性
- 每个 *层次结构(hierarchy)* 都可以附加到一个或多个 *子系统(subsystem)*
- 子系统(subsystem) 代表单个资源，例如 CPU 时间或内存等

即 cgroups = cgroup 树(hierarchy) + 子系统(subsystem)
:::

### 层次结构(hierarchy)
> The cgroups for a controller are arranged in a hierarchy. This hierarchy is defined by creating, removing, and renaming subdirectories within the cgroup filesystem. At each level of the hierarchy, attributes (e.g., limits) can be defined. The limits, control, and accounting provided by cgroups generally have effect throughout the subhierarchy underneath the cgroup where the attributes are defined. Thus, for example, the limits placed on a cgroup at a higher level in the hierarchy cannot be exceeded by descendant cgroups.

cgroups 控制器的层级结构 (hierarchy) 是通过在 cgroup 文件系统中创建、删除和重命名子目录来定义的。在层级的每一级，可以定义属性（如限制）。这些限制和控制会影响到该 cgroup 及其子层级。因此，设置在上层 cgroup 的限制会影响到所有下级 cgroup，下级 cgroup 无法超越上层的限制。

:::info[总结]
层次结构(hierarchy): 由多个 *子 cgroup* 节点组成的树形结构。
:::

通过创建一个 cgroup 树便可很清晰的理解：
- 创建并挂载 cgroup 根节点
    ```sh

    ~ mkdir cgroup-root
    ~ mount -t cgroup -o none,name=cgroup-root cgroup-root ./cgroup-root
    ```

    ```sh
    ~ tree
    cgroup-root/
    ├── cgroup.clone_children
    ├── cgroup.event_control
    ├── cgroup.procs
    ├── cgroup.sane_behavior
    ├── notify_on_release
    ├── release_agent
    └── tasks
    ```

- 创建两个字节点
    ```sh
    ~ mkdir cgroup-node1
    ~ mkdir cgroup-node2
    ```

    ```sh {2,10,16}
    ~ tree
    cgroup-root/ ## cgroup 根节点
    ├── cgroup.clone_children
    ├── cgroup.event_control
    ├── cgroup.procs
    ├── cgroup.sane_behavior
    ├── notify_on_release
    ├── release_agent
    ├── tasks
    ├── cgroup-node1 ## cgroup 子节点1
    │   ├── cgroup.clone_children
    │   ├── cgroup.event_control
    │   ├── cgroup.procs
    │   ├── notify_on_release
    │   └── tasks
    └── cgroup-node2 ## cgroup 子节点2
        ├── cgroup.clone_children
        ├── cgroup.event_control
        ├── cgroup.procs
        ├── notify_on_release
        └── tasks
    ```

下面是对每个文件作用的说明：
1. **cgroup.clone_children**：控制新创建的子 cgroup 是否继承当前 cgroup 的属性。如果设置为 1，则子 cgroup 会继承当前 cgroup 的资源限制和控制。
2. **cgroup.event_control**：事件控制文件，用于 cgroup 事件通知机制。可以用来监控 cgroup 的事件，比如当某个 cgroup 的进程数量发生变化时，系统会通过这个机制进行通知。
3. **cgroup.procs**：包含当前 cgroup 中所有进程的 PID。向这个文件写入一个 PID，可以将该进程加入到当前 cgroup 中。
4. **cgroup.sane_behavior**：用于控制 cgroup 的行为模式。设置为 1 时，cgroup 将采用一种合理的默认行为，这通常涉及一些优化和改进，使得 cgroup 的行为更符合预期。
5. **notify_on_release**：用于控制是否在 cgroup 被释放时触发一个用户定义的操作。如果设置为 1，当 cgroup 中的最后一个任务结束时，将会调用 `release_agent` 文件中指定的脚本或命令。
6. **release_agent**：指定了一个脚本或命令，当一个 cgroup 被释放（即 cgroup 中的最后一个任务结束并且 `notify_on_release` 被设置为 1）时，会执行这个脚本或命令。
7. **tasks**：类似于 `cgroup.procs`，也包含当前 cgroup 中所有进程的 PID。不同之处在于 `tasks` 文件包含的是任务（包括线程）的 PID，而 `cgroup.procs` 仅包含进程的 PID。

### 子系统(subsystem)
> A subsystem is a kernel component that modifies the behavior of the processes in a cgroup. Various subsystems have been implemented, making it possible to do things such as limiting the amount of CPU time and memory available to a cgroup, accounting for the CPU time used by a cgroup, and freezing and resuming execution of the processes in a cgroup. Subsystems are sometimes also known as resource controllers (or simply, controllers).

子系统 (subsystem) 是内核组件，用于修改 cgroup 中进程的行为。不同的子系统实现了多种功能，例如限制 cgroup 可用的 CPU 时间和内存量、记录 cgroup 使用的 CPU 时间，以及冻结和恢复 cgroup 中进程的执行。子系统有时也称为资源控制器（或简称控制器）。

:::info[总结]
子系统(subsystem): 用于限制和监控某种特定资源的模块。
:::

可以通过下面的命令，查看内核支持哪些子系统 (subsystem) ：
```sh
cat /proc/cgroups
```

```sh
#subsys_name    hierarchy	num_cgroups     enabled
cpuset          5               3               1
cpu             10	        61              1
cpuacct	        10	        61              1
memory	        7	        58              1
devices	        9	        57              1
freezer	        4	        3               1
net_cls	        11	        3               1
blkio	        3	        57              1
perf_event      2	        3               1
hugetlb	        6	        3               1
pids	        8	        57              1
net_prio        11	        3               1
```

- **cpuset**：管理和分配 CPU 和内存节点（NUMA节点）。通过 cpuset 控制器，用户可以将任务绑定到特定的 CPU 和内存节点，以优化性能和资源使用。
- **cpu**：通过设置 CPU 共享、权重和调度参数来控制和限制 cgroup 使用的 CPU 时间。它可以用于保证不同 cgroup 之间的公平资源分配。
- **cpuacct**：提供 CPU 资源使用的统计信息。它记录每个 cgroup 使用的 CPU 时间，方便系统管理员监控和审计资源使用情况。
- **memory**：限制和监控 cgroup 使用的内存，包括物理内存和交换空间。它可以防止某个 cgroup 过度使用内存资源，从而影响系统稳定性。
- **devices**：控制 cgroup 中的任务可以访问哪些设备。它可以允许或禁止对特定设备的访问，从而提高系统安全性和资源隔离。
- **freezer**：允许冻结和恢复 cgroup 中的任务。冻结操作暂停 cgroup 中的所有任务，恢复操作重新启动它们。这对于调试和系统维护非常有用。
-  **net_cls**：通过为网络数据包打上标签，允许对来自不同 cgroup 的流量进行分类和控制。它可以用于网络流量控制和流量监控。
-  **blkio**：限制和监控 cgroup 使用的块设备 I/O（如磁盘 I/O）。它可以设置 I/O 权重和限制，以防止某个 cgroup 过度使用磁盘资源。
-  **perf_event**：允许对 cgroup 中的任务进行性能监控。它可以收集各种性能事件的数据，如 CPU 周期、指令数等，用于性能分析和调优。
-  **hugetlb**：管理和分配大页面内存（hugepages）。大页面可以提高内存密集型应用的性能，通过减少 TLB（Translation Lookaside Buffer）失效次数。
-  **pids**：限制和监控 cgroup 中的任务数量（进程和线程）。它可以防止某个 cgroup 生成过多进程，从而影响系统的稳定性。
-  **net_prio**：设置 cgroup 中任务的网络流量优先级。它可以用于对不同 cgroup 的网络流量进行优先级排序，保证关键任务的网络带宽。

实际上，系统默认已经为每个 subsystem 创建了一个默认的 hierarchy (cgroup 树)，方便用户后续使用：
```sh
～ ll /sys/fs/cgroup/
blkio
cpu -> cpu,cpuacct
cpuacct -> cpu,cpuacct
cpu,cpuacct
cpuset
devices
freezer
hugetlb
memory
net_cls -> net_cls,net_prio
net_cls,net_prio
net_prio -> net_cls,net_prio
perf_event
pids
systemd
```

## Linux Cgroups 在 Docker 中的使用

使用 `docker run` 时，指定下面的 flag 即可对相关资源进行控制：
```sh
## cpu 限制
-c, --cpu-shares int                   CPU shares (relative weight)
    --cpus decimal                     Number of CPUs
    --cpuset-cpus string               CPUs in which to allow execution (0-3, 0,1)
    --cpuset-mems string               MEMs in which to allow execution (0-3, 0,1)

## 内存限制
-m, --memory bytes                     Memory limit
    --memory-reservation bytes         Memory soft limit
    --memory-swap bytes                Swap limit equal to memory plus swap: '-1' to enable unlimited swap
    --memory-swappiness int            Tune container memory swappiness (0 to 100) (default -1)

## IO 限制
    --blkio-weight uint16              Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)
    --blkio-weight-device list         Block IO weight (relative device weight) (default [])
    --device-read-bps list             Limit read rate (bytes per second) from a device (default [])
    --device-read-iops list            Limit read rate (IO per second) from a device (default [])
    --device-write-bps list            Limit write rate (bytes per second) to a device (default [])
    --device-write-iops list           Limit write rate (IO per second) to a device (default [])

## 进程数限制
    --pids-limit int                   Tune container pids limit (set -1 for unlimited)

## 用户限制
    --ulimit ulimit                    Ulimit options (default [])
```

我们启动一个容器，看看 Docker 是如何通过 Cgroups 限制相关资源的：
```sh {2}
~ docker run -d -m 128m nginx
93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858
```

查看对应容器的 cgroup 节点
```sh {1,6,7}
~ ll /sys/fs/cgroup/memory/docker/93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858/
cgroup.clone_children
cgroup.event_control
cgroup.procs
...
memory.limit_in_bytes
memory.max_usage_in_bytes
...
notify_on_release
tasks
```

查看容器内存情况
```sh
## 容器内存限制
~ cat /sys/fs/cgroup/memory/docker/93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858/memory.limit_in_bytes
134217728

## 容器中进程使用的内存大小
~ cat /sys/fs/cgroup/memory/docker/93aa71954a4693dbbf6c406b8f8562f9463875eae2e2b713921ae3268d521858/memory.max_usage_in_bytes
4296704
```

可以看出，Docker 会为 nginx 容器创建 cgroup 节点，并通过 cgroup 配置实现资源的限制和监控。

## 总结

Linux Cgroups: Linux 内核提供的一种机制，用于**限制和记录进程组的资源使用情况**。

Linux Cgroups 组成：层次结构(hierarchy) + 子系统(subsystem)
- 层次结构(hierarchy): 由多个 *子 cgroup* 节点组成的树形结构。
- 子系统(subsystem): 用于限制和监控某种特定资源的模块。

Linux Cgroups 在 Docker 中的应用：
- 使用 `docker run` 命令时，指定对应的 flag 限制相关资源
- Docker 会为每个容器创建 cgroup 节点，并通过 cgroup 配置实现资源的限制和监控
- 相关容器的 cgroup 节点在 `/sys/fs/cgroup/{资源类型}/docker/{容器ID}`

---

参考：
- [Control groups series by Neil Brown](https://lwn.net/Articles/604609/)
- [man 7 cgroups](https://man.archlinux.org/man/cgroups.7.en)
- [cgroups - archlinux wiki](https://wiki.archlinux.org/title/cgroups)
- [Resource Management Guide - redhat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/resource_management_guide/ch01#doc-wrapper)
- [Linux Cgroups - 维基百科](https://zh.wikipedia.org/zh-hans/Cgroups)