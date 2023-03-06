---
title: SEUOSC 课程小结
date: Mon Mar 06 2023 18:54:24 GMT+0800 (中国标准时间)
abstract: Attachment, Take-away Messages, Ideas and Thoughts
---

## Course 3#, 2023-03-06

### Attachment

- [Slides - CH01](https://www.overleaf.com/project/5f88e06c42853600014b1979)
- [Slides - CH02](https://www.overleaf.com/project/5f88e0ba42853600014b19e2)

### Take-away Messages

OS Operations are **Interrupt Driven**. 操作系统启动后不工作，只有在发生中断时重新获得控制权。

### Ideas and Thoughts

**System Calls** 是一种特殊的中断（trap），硬件检测到中断后调用中断处理程序，通过查询 System Call Interface 中的表找到对应的系统调用函数并执行。

- [ ] System Call 的软/硬件实现细节？
