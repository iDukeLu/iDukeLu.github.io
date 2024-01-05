---
title: Queue 接口
authors: Duke Lu
date: 2018-04-28
tags: [java, collection]
sidebar_position: 4
---

## Queue 接口简介
对于 Queue 接口，Java的官方文只有这样一句话：
> A `Queue` is a collection for holding elements prior to processing. Besides basic `Collection` operations, queues provide additional insertion, removal, and inspection operations.

大概讲了两点：
- `Queue` 是用于在处理之前保存元素的集合
- `Queue` 提供额外的插入，删除和检查操作（相比于 `Collection` 的基本操作）

接着讲述了 `Queue` 接口的一些规则：(这里和原文档的顺序稍有不同)
> Queues typically, but not necessarily, order elements in a FIFO (first-in-first-out) manner. Among the exceptions are priority queues, which order elements according to their values. Whatever ordering is used, the head of the queue is the element that would be removed by a call to remove or poll. In a FIFO queue, all new elements are inserted at the tail of the queue. Other kinds of queues may use different placement rules. Every Queue implementation must specify its ordering properties.
It is possible for a Queue implementation to restrict the number of elements that it holds; such queues are known as bounded. Some Queue implementations in java.util.concurrent are bounded, but the implementations in java.util are not.

这里简单理解一下就好了：
- 排序规则：
队列通常（但不一定）以 FIFO 方式对元素进行排序。优先级队列(priority queues)除外，它们根据元素的值对元素进行排序 。
- 删除及添加：
无论使用什么排序，都是通过 `remove ()` 或 `poll()` 方法删除头部元素。
在FIFO队列中，所有新元素都插入队列的尾部。其他类型的队列可能使用不同的放置规则。(每个Queue实现都必须指定其排序属性。)
- 界限：
Queue实现可以限制它所拥有的元素数量；这样的队列被称为**有界**。
`java.util.concurrent` 中的一些实现是有界的；`java.util` 中的所有实现均是无界的

## Queue 接口相关操作
Queue 接口相关操作，文档中有这样一段描述：
> Each Queue method exists in two forms: (1) one throws an exception if the operation fails, and (2) the other returns a special value if the operation fails (either null or false, depending on the operation). 

简单概述下：
`Queue` 接口的每个方法有两种形式：
- 如果操作失败，抛出异常
- 如果操作失败，返回一个特殊的值(`null` 或 `false`)

| **Type of Operation** | **Throws exception** | **Returns special value** |
| :-: | :-: | :-: |
| **Insert** | `add(e)` | `offer(e)` |
| **Remove** | `remove()` | `poll()` |
| **Examine** | `element()` | `peek()` |

下面是对每个方法的简单说明：
- Insert：在队列尾部插入元素
`add(e)` ：超出队列界限，抛出异常 `IllegalStateException`
`offer(e)` ：超出队列界限，返回 `false`

- Remove：删除并返回头部元素
`remove()` ：空队列时，抛出异常 `NoSuchElementException`
`poll()` ：空队列时，返回 `null`

- Examine：返回头部元素
`element()` ：空队列时，抛出异常 `NoSuchElementException`
`peek()` ：空队列时，返回 `null`

---

更多参考：[The Queue Interface (The Java™ Tutorials > Collections > Interfaces)](https://docs.oracle.com/javase/tutorial/collections/interfaces/queue.html)