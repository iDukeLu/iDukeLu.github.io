---
title: 动态规划
sidebar_label: 动态规划
authors: Duke Lu
date: 2024-05-14
tags: [算法, 动态规划]
sidebar_position: 9
---

## 什么是动态规划
动态规划（Dynamic Programming，简称 DP）是一种用于求解复杂问题的算法设计技术，通过将问题分解为更小的子问题，逐步解决子问题，从而构建出整个问题的解。动态规划通常用于具有重叠子问题和最优子结构性质的问题。

## 基本思想
**重叠子问题（Overlapping Subproblems）**：将原问题分解成多个子问题，并且这些子问题在求解过程中会被多次用到。通过记忆化（将子问题的解存储起来）来避免重复计算。

**最优子结构（Optimal Substructure）**：原问题的最优解可以由其子问题的最优解来构建。也就是说，通过解决子问题并组合它们的解，可以得到原问题的最优解。

## 使用场景
动态规划主要用于：可将问题分解成重叠的子问题，通过逐步解决子问题从而解决最终问题的场景，如：
- 最短路径问题（如Dijkstra算法和Floyd-Warshall算法）
- 背包问题
- 最长公共子序列（LCS）问题
- 最长递增子序列（LIS）问题
- 编辑距离问题

## 解题步骤

1. **定义子问题**：将原问题分解成一系列子问题。需要明确这些子问题的状态和状态转移关系。
2. **状态转移方程**：建立子问题之间的关系，即通过子问题的解来构建原问题的解。通常会有递推公式或递归关系来表达这一关系。
3. **边界条件**：确定子问题的初始条件或边界条件，这些条件是递归或递推的起点。
4. **计算并存储结果**：从边界条件出发，利用状态转移方程计算并存储子问题的解，最终得到原问题的解。

:::tip
来自 《代码随想录》更加实用的解题步骤：
1. 确定 dp[] 以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序
5. 举例推导dp数组
:::

## 实现方式
**自顶向下的记忆化递归（Top-Down with Memoization）**：用递归的方法求解问题，并在每次计算子问题时将结果存储（记忆化）起来，避免重复计算。

**自底向上的递推（Bottom-Up Dynamic Programming）**：从最简单的子问题开始，逐步解决更复杂的子问题，直到解决原问题。通常使用一个表格来存储子问题的解，从而逐步构建最终的解。