---
title: Set 接口
authors: Duke Lu
date: 2018-04-28
tags: [java, collection]
sidebar_position: 2
---

## Set 接口简介
对于 Set 接口，Java的官方文档这样提到：
> A `Set` that cannot contain duplicate elements. It models the mathematical set abstraction. The `Set` interface contains *only* methods inherited from `Collection` and adds the restriction that duplicate elements are prohibited. `Set` also adds a stronger contract on the behavior of the `equals` and `hashCode` operations, allowing `Set` instances to be compared meaningfully even if their implementation types differ. Two `Set` instances are equal if they contain the same elements.

可以简单理解为：
- `Set` 表示不能包含重复元素的集合；是数学集合的抽象建模
- `Set` 只包含了从 `Collection` 接口继承的方法(即，`Set` 没有提供其他特殊的方法)
- `Set` 增强了 `equals` 和 `hashCode` 方法，允许更有意义的比较 `Set` 实例(即，如果两个 `Set` 实例包含相同的元素，那么它们是相等的)

然后讲了下关于 `Set` 的实现：
> The Java platform contains three general-purpose `Set` implementations: `HashSet`, `TreeSet`, and `LinkedHashSet`. `HashSet`, which stores its elements in a hash table, is the best-performing implementation; however it makes no guarantees concerning the order of iteration. `TreeSet`, which stores its elements in a red-black tree, orders its elements based on their values; it is substantially slower than `HashSet`. `LinkedHashSet`, which is implemented as a hash table with a linked list running through it, orders its elements based on the order in which they were inserted into the set (insertion-order). `LinkedHashSet` spares its clients from the unspecified, generally chaotic ordering provided by `HashSet` at a cost that is only slightly higher.

简单的来说一下：
- `Set` 接口包含了3个通用实现(general-purpose implements)：
`HashSet`、`TreeSet`、`LinkedHashSet`
- `HashSet`：哈希表实现，性能最好，不能保证迭代的顺序
- `TreeSet`：红黑树实现，性能最差，根据元素进行自然排序
- `LinkedHashSet`：哈希表 + 链表实现，性能介于两者之间，保证元素插入顺序

性能比较：`HashSet` > `LinkedHashSet` > `TreeSet` 
(虽然文档中提到，`LinkedHashSet` 的性能是接近于 `HashSet ` 的)

---

## Set 接口相关操作
前面也已经提到，`Set` 接口的方法都是继承自 `Collection` 接口的，故其操作和 `Collection` 接口一致。这些操作包括：
&nbsp;&nbsp;&nbsp;&nbsp;**基础操作**、**批量操作**、**数组操作**、以及 JDK1.8 后提供的**聚合操作**

继承自 `Collection` 接口的操作:
- 基础操作(Basic Operations)
```
int size() // 返回集合中元素的个数
boolean isEmpty() // 判断集合是否存在元素
boolean contains(Object element) // 判断集合是否包含
boolean add(E element) // 添加元素
boolean remove(Object element) // 删除元素
Iterator<E> iterator() // 获取该集合的迭代器
```

- 批量操作(Bulk Operations)
```
boolean containsAll(Collection<?> c) // 包含
boolean addAll(Collection<? extends E> c) //并集
boolean removeAll(Collection<?> c) // 差集
boolean retainAll(Collection<?> c) // 交集
void clear() // 清空
```

- 数组操作(Array Operations)
```
Object[] toArray() // 集合转换为数组
<T> T[] toArray(T[] a)  // 集合转换为指定类型的数组
```

---

更多参考：[The Set Interface (The Java™ Tutorials > Collections > Interfaces)](https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html)