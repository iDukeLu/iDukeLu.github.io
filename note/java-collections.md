---
title: Java 集合框架概述
authors: Duke Lu
date: 2018-04-28
tags: [java, collection]
---

## 集合框架简介
Java 平台包含一个集合框架(Collections Framework)。一个集合(Collection)表示一组对象，集合框架是一个统一的结构体系，用于表示和操作集合，使集合能够独立于实现细节进行操作。

## 集合框架的优点
- 降低编程难度
- 提高程序性能
- 提高API间的互操作性
- 降低学习难度
- 降低设计和实现相关API的难度
- 增加程序的重用性

## 集合框架的组成
集合框架大致由三部分组成：**接口**(interfaces)、**实现**(implementations)、**为框架服务的其他内容**(Algorithms、Infrastructure、Array Utilities)。
- **接口** (interfaces)
  - **集合接口** (Collection interfaces)。表示不同类型的集合，例如列表(lists)，集合(sets)和地图(maps)。这些接口构成了框架的基础。
- **实现(类)** (implementations)
  - **通用实现** (General-purpose implementations)。集合接口的主要实现。
  - **特殊实现** (Special-purpose implementations)。专为在特殊情况下使用而设计的实现。 这些实现显示非标准性能特征，使用限制或行为。
  - **遗留实现** (Legacy implementations)。早期版本的集合实现类 Vector 和 Hashtable。
  - **并发实现** (Concurrent implementations)。为高度并发使用而设计的实现。
  - **包裹实现** (Wrapper implementations)。为其他实现添加功能的实现，诸如同步之类的。
  - **方便实现** (Convenience implementations)：集合接口的高性能“迷你实现”。
  - **抽象实现** (Abstract implementations)。集合接口的部分实现有助于自定义实现。
- **为框架服务的其他内容** (Algorithms、Infrastructure、Array Utilities)
  - **算法** (Algorithms)。在集合上执行有用功能的静态方法，例如对列表进行排序。
  - **基础设施** (Infrastructure)。为集合接口提供必要支持的接口。
  - **数组实用程序** (Array Utilities)。用于基本类型和引用对象数组的实用程序函数。严格来说，不是集合框架的一部分，此功能与集合框架同时添加到Java平台，并依赖于某些相同的基础结构。

## 集合接口 (Collections interfaces)
集合接口分为两组：基于 java.util.Collection、java.util.Map。
![Collection Interfaces](https://upload-images.jianshu.io/upload_images/12158715-29a77f5c5e6c5b9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
说明：基于java.util.Map 的接口，不是真正的集合。 但是，这些接口包含集合视图操作，这使它们可以作为集合进行操作。

集合接口中的许多修改方法都标记为可选(optional)。允许实现(类)不执行这些可选修改方法，当尝试调用时将抛出 UnsupportedOperationException 异常[^1]。文档要求每个实现(类)必须指明，哪些可选修改操作是被支持的。
在文档中引入以下术语帮助说明：
- ***unmodifiable*** (不可修改)：集合(Collections)不支持修改操作。(add、remove、clean等修改方法)
- ***modifiable*** (可以修改)：集合(Collections)支持修改操作。
- ***immutable*** (不可改变)：集合(Collections)对象不能被改变。(底层通过 final 修饰，相当于变成一个常量)
- ***mutable*** (可以改变)：集合(Collections)对象不能被改变。
- ***fixed-size*** (固定尺寸)：列表(Lists)的元素个数不可变，元素信息可变。
- ***variable-size*** (可变尺寸)：列表(Lists)的元素个数可变，元素信息可变。
- ***random access*** (随机访问)：列表(Lists)支持快速索引访问[^2]。(通常访问时间是恒定的)
- **sequential access** (顺序访问)：列表(Lists)不支持快速索引访问。

[^1]: 集合接口中，标记了可选(optional)的修改型方法，在实现类中可以允许不被执行。即用户调用这些有可选标志的方法，将抛出 UnsupportedOperationException 异常，说明该方法在此实现类中是不被支持的操作行为。
[^2]: RandomAccess 标记接口，使得列表(Lists)支持随机访问。

## 集合实现(类) (Collections Implementations)

## 并发集合 (Concurrents Collections)

## 设计目的(Design Goals)