---
title: List 接口
authors: Duke Lu
date: 2018-04-28
tags: [java, collection]
sidebar_position: 3
---

## List 接口简介
对于 List 接口，Java的官方文档这样提到：
> A List is an ordered Collection (sometimes called a sequence). Lists may contain duplicate elements. In addition to the operations inherited from Collection, the List interface includes operations for the following:
> - Positional access — manipulates elements based on their numerical position in the list. This includes methods such as get, set, add, addAll, and remove.
> - Search — searches for a specified object in the list and returns its numerical position. Search methods include indexOf and lastIndexOf.
> - Iteration — extends Iterator semantics to take advantage of the list's sequential nature. The listIterator methods provide this behavior.
> - Range-view — The sublist method performs arbitrary range operations on the list.

大概讲的就是：
- `List` 表示可以包含重复元素的有序集合
- `List` 额外提供了以下操作：
    - 位置访问(Positional access)：根据索引访问元素
    - 搜索(Search)：搜索元素，返回其索引
    - 迭代(Iteration)：提供额外操作的迭代器 `listIterator`
    - 范围视图(Range-view)：提供 `sublist` 方法对任意范围操作

然后讲 `List` 的实现：
> The Java platform contains two general-purpose `List` implementations. `ArrayList`, which is usually the better-performing implementation, and `LinkedList` which offers better performance under certain circumstances.

这里讲的很简单，概括下就几句话：
- `List` 接口包含了2个通用实现(general-purpose implements)：`ArrayList`、`LinkedList`
- `ArrayList`：性能最好的实现
- `LinkedList`：在某些情况下性能更好

---

## List 接口相关操作
`List` 接口的方法除了继承自 `Collection` 接口的操作：
&nbsp;&nbsp;&nbsp;&nbsp;**基础操作**、**批量操作**、**数组操作**、以及 JDK1.8 后提供的**聚合操作**
还包括前面提到的额外操作：
&nbsp;&nbsp;&nbsp;&nbsp;**位置访问**、**搜索**、**迭代**、**范围视图**

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

`List` 接口提供的额外操作：
- 位置访问(Array Operations)
```
Object[] toArray() // 集合转换为数组
<T> T[] toArray(T[] a)  // 集合转换为指定类型的数组
```

- 位置访问(Positional access)
```
E get(int index)
E set(int index, E element)
void add(int index, E element)
E remove(int index)
```

- 搜索(Search)
```
int indexOf(Object o)
int lastIndexOf(Object o)
```

- 迭代(Iteration)
```
ListIterator<E> listIterator();
ListIterator<E> listIterator(int index);
```

- 范围视图(Range-view)
```
List<E> subList(int fromIndex, int toIndex)
```

最后简单说两点，关于迭代和范围视图：
- 关于迭代(Iteration)
`List` 接口提供了专门的迭代器 `ListIterator `，用于迭代 `List` 集合。
`ListIterator` 接口如下：
```
public interface ListIterator<E> extends Iterator<E> {
    boolean hasNext();
    E next();
    boolean hasPrevious();
    E previous();
    int nextIndex();
    int previousIndex();
    void remove();
    void set(E e);
    void add(E e);
}
```
可以看到，这个专门的迭代器 `ListIterator ` 提供了很多额外的方法：
- 支持向前向后进行**迭代**和**获取索引**操作
- 以及**增**、**删**、**改**操作

这些方法大大增强了迭代器，使得我们能更好的操作 `List` 集合。关于这些操作，这里就不做演示了，有兴趣的朋友可以试着自己写点小 Demo。

- 范围视图(Range-view)
范围视图，顾名思义，指的就是 `subList()` 这个方法返回的子集合。
需要注意一点的是：`subList()` 返回的子集合是依赖于原集合的，故，在操作子集合的时候不能改变原集合的结构(即，原集合的大小)。
```
ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7));
List<Integer> subListt = list.subList(1, 4);
list.add(8); // 改变了原集合的结构
subListt.add(9); // 抛出异常 ConcurrentModificationException
```
---

更多参考：[The List Interface (The Java™ Tutorials > Collections > Interfaces)](https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html)