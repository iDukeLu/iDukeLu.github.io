---
title: Map 接口
authors: Duke Lu
date: 2018-04-28
tags: [java, collection]
sidebar_position: 6
---

## Map 接口简介
对于 Map 接口，Java的官方文档是这样介绍的：
> A [`Map`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html) is an object that maps keys to values. A map cannot contain duplicate keys: Each key can map to at most one value. It models the mathematical *function* abstraction. The `Map` interface includes methods for basic operations (such as `put`, `get`, `remove`, `containsKey`, `containsValue`, `size`, and `empty`), bulk operations (such as `putAll` and `clear`), and collection views (such as `keySet`, `entrySet`, and `values`).

简单来说，讲了以下几点：
- `Map` 是一个键值对映射的对象，是模拟数学函数的实现
- 一个 `map` 不能包含重复键，每个键可以映射多个值
- `Map` 接口包含了以下操作：
    - 基础操作：`put`、`get`、`remove`、`containsKey`、`containsValue`、`size`、`isEmpty `
    - 批量操作：`putAll `、`clear`
    - 集合视图：`keySet `、`values `、`entrySet `

然后讲了下关于 `Map` 的实现：
> The Java platform contains three general-purpose `Map` implementations: [`HashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html), [`TreeMap`](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html), and [`LinkedHashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html). Their behavior and performance are precisely analogous to `HashSet`, `TreeSet`, and `LinkedHashSet`, as described in [The Set Interface](https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html) section.

这里讲的很简单，概括下就几句话：
- `Map` 接口包含了3个通用实现(general-purpose implements)：`HashMap`、`TreeMap`、`LinkedHashMap`
- 这3个通用实现的行为和表现完全类似于 `HashSet`、`TreeSet`、`LinkedHashSet`

---

## Map 接口相关操作
- 基础操作(Basic Operations)
```
V put(K key, V value);
V get(Object key);
V remove(Object key);
boolean containsKey(Object key);
boolean containsValue(Object value);
int size();
boolean isEmpty();
```

- 批量操作(Bulk Operations)
```
void putAll(Map<? extends K, ? extends V> m);
void clear();
```

- 集合视图(Collection Views )
```
Set<K> keySet();
Collection<V> values();
Set<Map.Entry<K, V>> entrySet();
```

---

更多参考：[The Map Interface (The Java™ Tutorials > Collections > Interfaces)](https://docs.oracle.com/javase/tutorial/collections/interfaces/map.html)
