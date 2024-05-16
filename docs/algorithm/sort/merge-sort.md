---
title: 归并排序
authors: Duke Lu
date: 2024-05-15
tags: [算法, 排序]
sidebar_position: 5
---

## 概念
归并排序是一种基于分治法的经典排序算法，它将待排序的数组分为两个子数组，然后分别对这两个子数组进行排序，最后将已排序的子数组合并成一个整体排序的数组。

归并排序的算法步骤如下：
1. **分解**：将待排序的数组分解为两个子数组，直到每个子数组只有一个元素为止。
2. **排序**：对每个子数组进行排序。可以使用递归来实现这一步骤，直到所有子数组都已排序。
3. **合并**：将两个已排序的子数组合并为一个新的已排序数组。

在合并的过程中，通过比较两个子数组的第一个元素，将较小（或较大）的元素放入新的数组中，然后依次比较两个子数组的下一个元素，直到其中一个子数组的元素全部合并到新数组中。最终得到的新数组就是已排序的数组。

归并排序的时间复杂度为 O(nlogn)，其中 n 是待排序数组的长度。归并排序具有稳定性，适用于各种数据规模的排序，并且相比于冒泡排序和插入排序，归并排序的效率更高。

## 优缺点
归并排序是一种高效的排序算法，具有以下优点和缺点：

优点：
1. **稳定性**：归并排序是一种稳定的排序算法，相同元素的相对位置不会改变。
2. **高效性**：归并排序的时间复杂度为O(nlogn)，其中n是待排序数组的长度。它的性能在各种情况下都比较稳定，不会受到数据的影响而产生较大的波动。由于采用了分治法的思想，归并排序在处理大规模数据时效率较高。
3. **适用性**：归并排序适用于各种数据类型和数据规模，表现良好。

缺点：
1. **额外空间消耗**：归并排序需要额外的空间来存储临时数组，在归并过程中需要将待排序数组拆分为多个子数组，并在合并过程中使用额外的空间进行排序操作。因此，归并排序的空间复杂度较高，不适用于内存受限或者要求原地排序的场景。
2. **递归调用开销**：在递归实现的归并排序中，递归调用会产生一定的开销，可能会影响算法的性能，特别是对于较大规模的数据。虽然可以通过迭代方式实现归并排序来减少递归开销，但实现复杂度会增加。
3. **不稳定**：在实现归并排序时，如果不注意合并过程中相同元素的顺序，可能会导致排序结果不稳定，需要额外的操作来保持稳定性。

## 代码实现
递归法实现如下：
```go
type Number interface {
	int | int8 | int16 | int32 | int64 |
		uint | uint8 | uint16 | uint32 | uint64 |
		float32 | float64
}

func MergeSort[T Number](arr []T) []T {
	var length = len(arr)
	if length < 2 {
		return arr
	}
	return merge(MergeSort(arr[:length/2]), MergeSort(arr[length/2:]))
}

// 归并操作，将归并结果存储到新数组中
func merge[T Number](arr1 []T, arr2 []T) []T {
	merged := make([]T, 0, len(arr1)+len(arr2))
	i, j := 0, 0

	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			merged = append(merged, arr1[i])
			i++
		} else {
			merged = append(merged, arr2[j])
			j++
		}
	}

	// 如果 arr1 还有剩余元素，直接追加
	merged = append(merged, arr1[i:]...)
	// 如果 arr2 还有剩余元素，直接追加
	merged = append(merged, arr2[j:]...)

	return merged
}
```

迭代法实现如下：
```go
type Number interface {
	int | int8 | int16 | int32 | int64 |
		uint | uint8 | uint16 | uint32 | uint64 |
		float32 | float64
}

func MergeSortI[T Number](arr []T) []T {
	length := len(arr)
	if length < 2 {
		return arr
	}

	// 从底部开始，依次归并子数组
	for size := 1; size < length; size *= 2 {
		for left := 0; left < length-1; left += 2 * size {
			// 计算中间和右边界
			mid := min(left+size-1, length-1)
			right := min(left+2*size-1, length-1)
			// 归并左右子数组
			merge(arr, left, mid, right)
		}
	}
	return arr
}

// 归并操作，将归并结果存储到原始数组中
func merge[T Number](arr []T, left, mid, right int) {
	temp := make([]T, right-left+1)
	i, j, k := left, mid+1, 0

	// 将两个有序子数组归并到 temp 中
	for i <= mid && j <= right {
		if arr[i] <= arr[j] {
			temp[k] = arr[i]
			i++
		} else {
			temp[k] = arr[j]
			j++
		}
		k++
	}

	// 处理剩余元素
	for i <= mid {
		temp[k] = arr[i]
		i++
		k++
	}
	for j <= right {
		temp[k] = arr[j]
		j++
		k++
	}

	// 将归并结果复制回原数组
	for p := 0; p < len(temp); p++ {
		arr[left+p] = temp[p]
	}
}

func min[T Number](a, b T) T {
	if a < b {
		return a
	}
	return b
}
```

## 总结
归并排序：不断使用归并操作进行排序的算法。<br/>
归并操作：将两个已排序序列合并成一个排序序列，如何合并：不断比较两个序列的首元素，并将较小的元素依次放入合并的新集合中。

复杂度：
- 平均时间复杂度：O(nlogn)
- 最坏时间复杂度：O(nlogn)
- 最优时间复杂度：O(nlogn)
- 空间复杂度：O(n)

实现方式：
- 递归法（Top-down）
- 迭代法（Bottom-up）
---

参考：[归并排序-维基百科](https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F)