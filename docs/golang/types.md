# 类型


基础类型、复合类型
预定义类型、自定义类型
命名类型、未命名类型

类型转换
零值
类型推断

除了预定义类型外，其余类型均通过类型声明和类型参数列表引入？
预定义类型外，都是非命名类型？

## 定义
在 Go 语言规范中，是这样定义类型的：
> A type determines a set of values together with operations and methods specific to those values.

类型确定一组值以及特定于这些值的操作和方法。该如何理解这句话呢，其实

## 基础类型（Basic Types）
在 Go 语言的规范中，基本类型（Basic types）包括以下几种：
1. 布尔类型：`bool`
2. 数字类型：
   - 整型：`int`, `int8`, `int16`, `int32`, `int64`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `uintptr`
   - 浮点型：`float32`, `float64`
   - 复数类型：`complex64`, `complex128`
   - 字节类型：`byte`（`uint8`的别名）
   - 符文类型：`rune`（`int32`的别名）
3. 字符串类型：`string`

|类型|长度|默认值|说明|
|:-|:-|:-|:-|
|bool|1|false|布尔类型|
|string||""|字符串类型|
|uint8、uint16、uint32、uint64|1、2、4、8|0|无符号整型，范围：0 ~ 2^n - 1|
|int8、int16、int32、int64|1、2、4、8|0|有符号整型，范围：-2^(n-1) ~2^(n-1) - 1 |
|float32、float64|4、8|0.0|IEEE-754 标准的浮点数|
|complex64、complex128|0.0|||
|byte|1|0|字节类型，uint8 的别名|
|rune|4|0|符文类型，int32 的别名|

|类型|长度|默认值|说明|
|:-|:-|:-|:-|
|uint|1|||
|int|1|||
|uintptr|1|||



这些类型都是 Go 语言的基础构建块，并且直接被语言所支持。



## 复合类型（Composite Types）
Composite types—array, struct, pointer, function, interface, slice, map, and channel types—may be constructed using type literals.
一些地方，会将复合类型说成引用类型，因为复合类型存在引用类型的一些行为，但我认为还是有所区别的。

在 Go 语言中，复合类型（Composite Types）是指由其他类型构成的类型。主要包括以下几种：

1. **数组（Array）**：是具有固定长度且元素类型相同的类型。例如，`[5]int`代表一个由5个`int`类型元素构成的数组。

2. **结构体（Struct）**：是一种聚合的数据类型，将0个或多个任意类型的值聚合成一个实体。每个值被称为结构体的成员。例如，`struct {name string; age int}`定义了一个包含`string`类型的`name`字段和`int`类型的`age`字段的结构体。

3. **切片（Slice）**：是一种长度可变的数组类型。例如，`[]int`表示一个元素类型为`int`的切片。

4. **映射（Map）**：是一种无序的键值对的集合，其中所有的键都是唯一的。例如，`map[string]int`定义了一个键类型为`string`，值类型为`int`的映射。

5. **指针（Pointer）**：存储了另一种类型值的内存地址。例如，`*int`表示一个指向`int`的指针。

6. **函数（Function）**：表示具有特定签名（参数和返回值类型）的函数类型。例如，`func(int, int) string`表示一个接受两个`int`类型参数并返回一个`string`类型值的函数。

7. **通道（Channel）**：是一种进行类型化数据传输的机制，可用于在 Go 程序中进行协程间的通信。例如，`chan int`表示一个可以传输`int`类型值的通道。

这些类型可以用来构造更复杂的数据结构。在 Go 的类型系统中，复合类型和基本类型一样重要，它们都可以用作变量声明，结构体字段，函数参数和返回值等。

## 自定义类型

## 类型转换

