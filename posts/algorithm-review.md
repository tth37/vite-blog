---
title: 算法设计与分析期末复习
date: Mon Jun 12 2023 19:21:49 GMT+0800 (中国标准时间)
abstract: 期末复习
category: Course Review
---

# 算法设计与分析期末复习

## 一、算法分析基础理论

算法复杂度分析方法

> 渐近上界记号 $O$：若存在两个正的常数 $c$ 和 $n_0$，使得对所有 $n\ge n_0$，都有 $f(n)\le c\times g(n)$，则称 $f(n)=O(g(n))$
>
> 渐近下界记号 $\Omega$：若存在两个正的常数 $c$ 和 $n_0$，使得对所有 $n\ge n_0$，都有 $f(n)\ge c\times g(n)$，则称 $f(n)=\Omega(g(n))$
>
> 紧渐近界记号 $\Theta$：若存在三个正的常数 $c_1$、$c_2$ 和 $n_0$，使得对所有 $n\ge n_0$，都有 $c_1\times g(n)\ge f(n)\ge c_2g(n)$，则称 $f(n)=\Theta(g(n))$

Master 定理

>求解 $T(n)=a\cdot T(\dfrac nb)+f(n)$ 型递归方程，其中 $a,b\ge 1$ 是常数，$f(n)$ 是正函数
>
>用 $f(n)$ 与 $n^{\log_b a}$ 的阶作比较，
>
>- 若 $n^{\log_ba}$ 更大，则 $T(n)=\Theta(n^{\log_ba})$
>- 若 $f(n)=\Theta(n^{\log_ba})$，即 $f(n)$ 与 $n^{\log_ba}$ 同阶，则有 $T(n)=\Theta(n^{\log_ba}\log n)=\Theta(f(n)\log n)$
>- 若 $f(n)$ 更大，则 $T(n)=\Theta(f(n))$

## 二、分治算法

分治算法基本概念

> 分治法的设计思想是：将一个难以直接解决的大问题，分割成一些规模较小的相同问题，以便各个击破，分而治之。
>
> 如果问题可分割成 $k$ 个子问题，且这些子问题都可解，利用这些子问题可解出原问题的解，此分治法是可行的。
>
> 由分治法产生的子问题往往是原问题的较少模式，为递归提供了方便。

归并排序（Merge Sort）

快速排序（Quick Sort）

斐波那契数（Fibonacci Numbers）

矩阵乘法（Matrix Multiplication）

平面最近点对（Closest Pair）

<iframe src="/assets/算法设计与分析_03_分治.pdf" width="100%" height="500px"></iframe>

## 四、动态规划

动态规划基本概念

> 动态规划的条件
>
> - 最优子结构
> - 重叠子问题

矩阵链乘（Matrix Chain Multiplication）

钢条切割（Rod Cutting）

最长公共子序列（Longest Common Subsequence）

子集和问题（Subset Sum Problem）

背包问题（Knapsack Problem）

<iframe src="/assets/算法设计与分析_04_动态规划.pdf" width="100%" height="500px"></iframe>

## 五、贪心算法

贪心算法基本概念

> 贪心算法的条件
>
> - 最优子结构
> - 贪心选择性

活动选择（Activity-Selection Problem）

加油调度（Refueling Scheduling Problem）

哈夫曼编码（Huffman Codes）

最小生成树（Minimum Spanning Trees）

单源最短路径（Single Source Shortest Path）

<iframe src="/assets/算法设计与分析_05_贪心.pdf" width="100%" height="500px"></iframe>

## 六、NP 完全问题

[什么是P问题、NP问题和NPC问题 - Matrix67](http://www.matrix67.com/blog/archives/105)

NP 问题

> P 问题（Polynomial）：多项式时间可解的问题
>
> NP 问题（Non-Deterministic Polynomial）：多项式时间可验证一个解的问题

NP 完全问题

> NP 完全问题（NP Complete）：同时满足以下条件（1）它是 NP 问题（2）所有 NP 问题都可以多项式归约到它

NP 完全问题的证明

> （1）证明它是 NP 问题（2）证明其中一个已知的 NPC 问题能归约到它

<iframe src="/assets/算法设计与分析_08_np完全.pdf" width="100%" height="500px"></iframe>

## 七、近似算法

近似算法的基本概念

> 近似算法：能够给出一个优化问题的近似优化解的算法，主要用于解决优化问题（最大化、最小化）
>
> 近似比：衡量近似解与优化解的差距
>
> 优化问题 $A$，若 $OPT$ 是其最优解，$ALG$ 是某近似解且近似比为 $B(n)$，则有 $\max\left\{\dfrac{ALG}{OPT},\dfrac{OPT}{ALG}\right\}\le B(n)$
