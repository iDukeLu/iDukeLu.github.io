---
title: Collection 接口
authors: Duke Lu
date: 2018-04-28
tags: [java, collection]
sidebar_position: 1
---

## Collection 接口简介
对于 `Collection` 接口，Java的官方文档这样提到：
> A `Collection` represents a group of objects known as its elements. The `Collection` interface is used to pass around collections of objects where maximum generality is desired. For example, by convention all general-purpose collection implementations have a constructor that takes a `Collection` argument. This constructor, known as a *conversion constructor*, initializes the new collection to contain all of the elements in the specified collection, whatever the given collection's subinterface or implementation type. In other words, it allows you to *convert* the collection's type.


可以简单理解为：
- `Collection` 表示一组对象，这些对象则被称为元素
- `Collection` 接口用于传递需要最大通用性的对象集合(即指`Collection`接口是根接口，多态通用性最强)
- 按照约定，所有通用集合实现都提供一个转换构造函数，用于不同类型集合的转换(简单来讲，`Set set = new HashSet(new ArrayList())`，将 List 转换为了 Set)

---

## Collection 接口相关操作
`Collection` 接口作为集合层次结构的根接口，自然抽象了很多公共操作的方法。
根据 Java 官方文档，这些操作被分为：
&nbsp;&nbsp;&nbsp;&nbsp;**基础操作**、**批量操作**、**数组操作**、以及 JDK1.8 后提供的**聚合操作**

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

## 关于遍历
Java 官方文档中提到了三种遍历集合的方式：
&nbsp;&nbsp;&nbsp;&nbsp;(1)使用聚合操作、(2)使用for-each构造、(3)使用迭代器。
- 聚合操作(Aggregate Operations)
关于这块的内容较多，在这里不做过多的讲解。

- for-each 构造(for-each Construct)
即我们通常所说的 for 增强：
```
for (Object o : collection) {
    System.out.println(o);
} 
```

- 迭代器(Iterators)
在 Java 官方文档中，迭代器的使用方法如下：
```
static void filter(Collection<?> c) {
    for (Iterator<?> it = c.iterator(); it.hasNext(); )
        if (!cond(it.next()))
            it.remove();
}
```

最后简单说一下，关于迭代器，
以下是迭代器的接口：
```
public interface Iterator<E> {
    boolean hasNext();
    E next();
    void remove(); //optional
}
```
迭代器设计的也非常简单粗暴：
`hasNext` - 判断集合中是否还有下一个元素
`next` - 获取集合中的下一个元素
`remove` - 删除当前迭代的元素(这是一个可选操作，即实现类可以选择不实现这个方法)

这里还需要说一点的是：
- 集合在用迭代器迭代的过程中，不能改变集合的结构(集合的大小)
即，迭代过程中，不能使用集合的 `add()`、`remove()` 方法
否则，将会抛出异常 `ConcurrentModificationException`
但，可以使用迭代器提供的 `remove()` 方法
```
ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7));
        
for (Iterator<Integer> it = list.iterator(); it.hasNext(); ) {

    Integer next = it.next();
    if (next == 7) {
        it.remove(); // 不会抛出异常
    }

    list.set(4, 7); // 不会抛出异常
    list.add(8); // 抛出异常 ConcurrentModificationException
    list.remove(6); // 抛出异常 ConcurrentModificationException
}
```
原因嘛，有很多细讲这方面的文章，这里简单提一下：
迭代器的模型，有点像指针一样，调用`next()` 方法则移动到下一个元素，若，`list.add(0, 7)` 在集合头部插入一个元素，迭代器则很有可能永远迭代不到这个元素

简单理解为：
迭代过程中，**迭代行为由迭代器控制，故任何改变集合结构的行为也应由迭代器控制**，即：
-  通过集合自身改变结构，迭代器认为不可控
- 通过迭代器来改变结构，迭代器认为是可控的

---

更多参考：[The Collection Interface (The Java™ Tutorials > Collections > Interfaces)](https://docs.oracle.com/javase/tutorial/collections/interfaces/collection.html)
