---
title: NJUOS 课程小结
date: Mon Mar 06 2023 19:14:04 GMT+0800 (中国标准时间)
abstract: Attachment, Take-away Messages, Ideas and Thoughts
category: Course Sum-up
tags:
    - Operating System
---

## Course 2#, 2023-03-06

### Attachment

- [Video - Lect 2#](https://www.bilibili.com/video/BV1Ks4y1Y7Rw)
- [IPynb - Lect 2#](https://jyywiki.cn/OS/2023/build/lect2.ipynb)

### Take-away Messages

汇编代码和高级程序可以表示成 **状态机**，编译器实现了两种状态机之间的翻译。

应用程序与操作系统沟通的唯一桥梁是 **System Call**。

### Ideas and Thoughts

- [ ] 实现非递归函数 $f$ 和 $g$ 的互相调用？

## Course 3#, 2023-03-12

### Attachment

- [Video - Lect 3#](https://www.bilibili.com/video/BV11s4y1j7dV)
- [IPynb - Lect 3#](https://jyywiki.cn/OS/2023/build/lect3.ipynb)

### Take-away Messages

操作系统的启动过程：

1. 厂商配置处理器 Reset 后的行为；
2. 运行 Firmware，加载操作系统。

### Ideas and Thoughts

- [ ] Gdb 如何显示源代码/汇编代码？

## Course 4#, 2023-03-13

### Attachment

- [Video - Lect 4#](https://www.bilibili.com/video/BV1Zb411D7jE)
- [IPynb - Lect 4#](https://jyywiki.cn/OS/2023/build/lect4.ipynb)

### Take-away Messages

我们可以用 “简化” 的方式把操作系统的概念用可执行模型的方式呈现出来：

- 程序被建模为高级语言 (Python) 的执行和系统调用
- 系统调用的实现未必一定需要基于真实或模拟的计算机硬件
- 操作系统的 “行为模型” 更容易理解

## Course 5#, 2023-03-19

### Attachment

- [Video - Lect 4#](https://www.bilibili.com/video/BV1is4y1V7Gz)
- [IPynb - Lect 4#](https://jyywiki.cn/OS/2023/build/lect5.ipynb)

### Take-away Messages

在一个简化的模型中，多线程/多进程程序就是 “状态机的集合”，每一步选一个状态机执行一步。然而，真实的系统可能带来一些复杂性：

- 指令/代码执行原子性假设不再成立
- 程序的顺序执行假设不再成立
- 多处理器间内存访问无法即时可见