---
title: 接口
sidebar_label: 接口
sidebar_position: 1
---

## 核心集合接口概述
Java 集合框架的核心接口，主要由两颗树组成：java.util.Collection、java.util.Map
它们层次结构关系，如下图：

![Java 集合框架核心接口](https://docs.oracle.com/javase/tutorial/figures/collections/colls-coreInterfaces.gif)

Java 官方文档中提到：
> The core collection interfaces encapsulate different types of collections. These interfaces allow collections to be manipulated independently of the details of their representation. Core collection interfaces are the foundation of the Java Collections Framework. As you can see in the following figure, the core collection interfaces form a hierarchy.

大致是在说，这些核心集合接口：
- 封装了不同类型的集合
- 允许独立于其表示的细节来操纵集合(多态)
- 是Java集合框架的基础

当然还提到了最重要的一点：
> To keep the number of core collection interfaces manageable, the Java platform doesn't provide separate interfaces for each variant of each collection type. (Such variants might include immutable, fixed-size, and append-only.) Instead, the modification operations in each interface are designated *optional* — a given implementation may elect not to support all operations. If an unsupported operation is invoked, a collection throws an `UnsupportedOperationException`. Implementations are responsible for documenting which of the optional operations they support. All of the Java platform's general-purpose implementations support all of the optional operations.

这里主要讲的是：
Java 平台为控制核心集合接口的数量，不会为特殊实现(即：变体)提供单独的接口，而是采取另一种方式：每个接口的修改方法都是可选的(optional)。
怎么理解呢，说白了，就是实现类在实现接口的时候，可以选择性的实现这些方法。若调用了没有实现的方法，就会抛出异常：`UnsupportedOperationException`。
(在提一点：在阅读源码的时候，如果你看到 `optional`、`operation` 这样的文字，就是在说明，该方法是一个可选方法)

---

## 核心集合接口描述
Java 官方文档中的描述：
> The following list describes the core collection interfaces:
> - `Collection` — the root of the collection hierarchy. A collection represents a group of objects known as its *elements*. The `Collection` interface is the least common denominator that all collections implement and is used to pass collections around and to manipulate them when maximum generality is desired. Some types of collections allow duplicate elements, and others do not. Some are ordered and others are unordered. The Java platform doesn't provide any direct implementations of this interface but provides implementations of more specific subinterfaces, such as `Set` and `List`. 
> - `Set` — a collection that cannot contain duplicate elements. This interface models the mathematical set abstraction and is used to represent sets, such as the cards comprising a poker hand, the courses making up a student's schedule, or the processes running on a machine. 
> - `List` — an ordered collection (sometimes called a *sequence*). `List`s can contain duplicate elements. The user of a `List` generally has precise control over where in the list each element is inserted and can access elements by their integer index (position). If you've used `Vector`, you're familiar with the general flavor of `List`. 
> - `Queue` — a collection used to hold multiple elements prior to processing. Besides basic `Collection` operations, a `Queue` provides additional insertion, extraction, and inspection operations.
Queues typically, but do not necessarily, order elements in a FIFO (first-in, first-out) manner. Among the exceptions are priority queues, which order elements according to a supplied comparator or the elements' natural ordering. Whatever the ordering used, the head of the queue is the element that would be removed by a call to `remove` or `poll`. In a FIFO queue, all new elements are inserted at the tail of the queue. Other kinds of queues may use different placement rules. Every `Queue` implementation must specify its ordering properties. 
> - `Deque` — a collection used to hold multiple elements prior to processing. Besides basic `Collection` operations, a `Deque` provides additional insertion, extraction, and inspection operations.
Deques can be used both as FIFO (first-in, first-out) and LIFO (last-in, first-out). In a deque all new elements can be inserted, retrieved and removed at both ends. 
> - `Map` — an object that maps keys to values. A `Map` cannot contain duplicate keys; each key can map to at most one value. If you've used `Hashtable`, you're already familiar with the basics of `Map`. 

精简一下，差不多就这个意思：
- `Collection`：集合层次结构的根。
- `Set`：不能包含重复元素的集合。
- `List`：有序集合(有时称为序列)。可以包含重复的元素。
- `Queues `：用于在处理之前保存多个元素的集合。除了基本的集合操作之外，队列还提供额外的插入、提取和检查操作。`Queues `通常(但不一定)以FIFO(先入先出)的方式对元素进行排序。
- `Deque `：用于在处理之前保存多个元素的集合。除了基本的集合操作之外，队列还提供额外的插入、提取和检查操作。`Deques` 可以同时用作FIFO(先入先出)和LIFO(后入先出)。在Deques中，所有新元素都可以在两端插入、检索和删除。
- `Map `：将键映射到值的对象。`Map` 不能包含重复的键；每个键最多可以映射到一个值。

 `Set` 和 `Map` 还有两个排序的版本：
> The last two core collection interfaces are merely sorted versions of `Set` and `Map`:
> - `SortedSet` — a `Set` that maintains its elements in ascending order. Several additional operations are provided to take advantage of the ordering. Sorted sets are used for naturally ordered sets, such as word lists and membership rolls. 
> - `SortedMap` — a `Map` that maintains its mappings in ascending key order. This is the `Map` analog of `SortedSet`. Sorted maps are used for naturally ordered collections of key/value pairs, such as dictionaries and telephone directories. 

讲的是 `Set` 和 `Map` 的排序版本:
- `SortedSet`：以升序维护其元素的集合。还提供了一些额外的操作来利用排序。排序集用于自然排序集，例如单词列表和成员列表。
- `SortedMap`：以升序键顺序维护映射的映射。这是SortedSet的映射模拟。排序映射用于自然排序的键/值对集合。

---

更多参考：
[Interfaces (The Java™ Tutorials > Collections)](https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html)