---
title: 排序
sidebar_label: 排序
authors: Duke Lu
date: 2024-05-14
tags: [算法, 排序]
sidebar_position: 1
---

常用排序算法：
1. 冒泡排序 (Bubble Sort): 重复比较和交换相邻的元素，使较大的元素逐渐移至数组的末端。
2. 选择排序 (Selection Sort): 每次从未排序的部分找出最小 (或最大)的元素，放到已排序序列的末尾。
3. 插入排序 (Insertion Sort): 从左端构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
4. 堆排序 (Heap Sort): 利用堆这种数据结构所设计的一种排序算法，先将待排序的序列构建成大顶堆，然后移走堆顶，剩余部分重新调整为大顶堆。
5. 归并排序 (Merge Sort): 采用分而治之的方法，将数组分成两半，对每部分独立排序后合并。
6. 快速排序 (Quick Sort): 选择一个基准值，将数组分为大于和小于此基准值的两部分，然后递归地在这两部分进行快速排序。

| 排序算法                  | 平均时间复杂度   | 最坏时间复杂度   | 最优时间复杂度   | 空间复杂度 |
| ------------------------- | ---------------- | ---------------- | ---------------- | ---------- |
| 冒泡排序 (Bubble Sort)    | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n)             | O(1)       |
| 选择排序 (Selection Sort) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1)       |
| 插入排序 (Insertion Sort) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n)             | O(1)       |
| 堆排序 (Heap Sort)        | O(nlogn)         | O(nlogn)         | O(nlogn)         | O(1)       |
| 归并排序 (Merge Sort)     | O(nlogn)         | O(nlogn)         | O(nlogn)         | O(n)       |
| 快速排序 (Quick Sort)     | O(nlogn)         | O(n<sup>2</sup>) | O(nlogn)         | O(logn)    | 

---

参考：[排序算法-维基百科](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)