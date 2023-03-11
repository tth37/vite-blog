---
title: MLC 课程小结
date: Mon Mar 06 2023 23:51:37 GMT+0800 (中国标准时间)
abstract: Attachment, Take-away Messages, Ideas and Thoughts
category: Course Sum-up
tags:
    - Machine Learning
    - MLC
---

# Machine Learning Complication

- [Homepage](https://mlc.ai/summer22-zh/)
- [Schedule](https://mlc.ai/summer22-zh/schedule)

## Course 1#, 2023-03-06

### Attachment

- [Slides - Lect 1#](https://mlc.ai/summer22-zh/slides/1-Introduction.pdf)
- [Video - Lect 1#](https://www.bilibili.com/video/bv15v4y1g7EU)
- [Notes - Lect 1#](https://mlc.ai/zh/chapter_introduction)

### Take-away Messages

机器学习编译的目标：**集成与最小化依赖**，**利用硬件加速**，**通用优化**。

MLC 的关键要素：**Tensor**，**Tensor Functions**。

## Course 2#, 2023-03-06

### Attachment

- [Slides - Lect 2#](https://mlc.ai/summer22-zh/slides/2-TensorProgram.pdf)
- [Video - Lect 2#](https://www.bilibili.com/video/BV1kY411N7JA)
- [Notes - Lect 2#](https://mlc.ai/zh/chapter_tensor_program)

### Take-away Messages

典型的元张量函数抽象：**存储数据的多维数组**，**驱动张量计算的循环嵌套**以及**计算部分本身的语句**。

## Course 3#, 2023-03-07

### Attachment

- [Video - Lect 3#](https://www.bilibili.com/video/BV1c94y1d7rW)
- [Notes - Lect 3#](https://mlc.ai/zh/chapter_tensor_program/case_study.html)

### Take-away Messages

一类张量程序抽象 - **TensorIR**。TensorIR 中包含 Buffer、循环和计算块以及若干附加信息（块轴范围及其属性）。借助这些附加信息，TVM 框架可以自动地实现**张量程序变换**。

### Ideas and Thoughts

- [ ] Spatial Axis vs. Reduction Axis?

“虽然我们总是可以在空间轴上做并行化，在规约轴上进行并行化将需要特定的策略。” - [为什么块需要额外附加的信息 - TensorIR: 张量程序抽象案例研究](https://mlc.ai/zh/chapter_tensor_program/case_study.html#id7)

## Course 4#, 2023-03-08

### Attachment

- [Video - Lect 4#](https://www.bilibili.com/video/BV1Lf4y1o7xM)
- [Notes - Lect 4#](https://mlc.ai/zh/chapter_end_to_end/index.html)

### Take-away Messages

介绍了使用 **TensorIR** 构建**端到端模型部署**可执行程序的抽象流程。

![mlc_process](https://mlc.ai/zh/_images/mlc_process.png)

### Ideas and Thoughts

- **计算图**抽象与“类计算图”抽象的“失败尝试”。

![e2e_computational_graph](https://mlc.ai/zh/_images/e2e_computational_graph_call_tir.png)

![e2e_computational_graph_failed](https://mlc.ai/zh/_images/e2e_computational_graph_numpy.png)

计算图中的算子对应 TensorIR Module 中的 `R.call_tir` 操作，借助此方法抽象出一个 **pure** 且 **side-effect free** 的张量函数。

- [ ] 元张量函数（包含其他 DL 框架的实现）采用 **destination passing** 调用约定的用意？

输入和输出张量在元张量函数外部**显式分配**并传递给底层元函数。

“算子具体的impl对计算图层面来讲是opaque的，甚至是不care的，图级别的优化也就很难介入算子内部来控制内存的访问，而把内存管理权上交给更高level的表示（比如graph level）能够让tvm更好地探索inter-op optimization的潜力。” - [端到端模型整合 - Bilibili](https://www.bilibili.com/video/BV1Lf4y1o7xM/)

## Course 5#, 2023-03-11

### Attachment

- [Video - Lect 5#](https://www.bilibili.com/video/BV1ST411J7mR)
- [Notes - Lect 5#](https://mlc.ai/zh/chapter_auto_program_optimization/index.html)

### Take-away Messages

**Meta-Schedule** 在搜索空间中搜索可能的元张量程序变换，并找到优化后的程序。将出事的元张量函数替换为优化后的函数，可以更新端到端执行流程。