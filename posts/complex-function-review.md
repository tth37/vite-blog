---
title: 复变函数复习
date: Sat Feb 18 2023 11:17:09 GMT+0800 (中国标准时间)
abstract: Cheat sheet
---

# 复变函数期末复习

> **曲线积分的计算方法**
>
> 1. 参数方程法
>
> 2. 柯西积分定理
>
>    - 若曲线 $C$ 围成的单连通区域解析，则 $\oint_C=0$
>
> 3. 牛顿-莱布尼茨公式
>
> 4. 复合闭路定理或闭路变形原理
>
>    - 闭合曲线 $C$ 内有奇点
>
> 5. 柯西积分公式
>
>    - 是高阶导数公式 $n=0$ 特例
>
> 6. 高阶导数公式
>
> 7. 留数定理
>
>    - 展开成洛朗级数，找 $c_{-1}$
>
>    - 留数计算公式

## 解析函数

### C-R 方程

$u_x=v_y,u_y=-v_x$

### 判断函数是否可导

$f(z)=u+iv$ 在任意一点 $z=x+yi$ 可导的充要条件：

- $u(x,y)$ 与 $v(x,y)$ 在点 $(x,y)$ 处可微
- $u(x,y)$ 与 $v(x,y)$ 在点 $(x,y)$ 满足 C-R 方程

### 判断函数是否解析

若函数 $f(z)$ 在点 $z_0$ 及其邻域内处处可导，则称 $f(z)$ 在点 $z_0$ 解析

若函数 $f(z)$ 在区域 $D$ 内处处解析，则称 $f(z)$ 在 $D$ 内解析，也称 $f(z)$ 是 $D$ 内的一个解析函数

### 复变初等函数

$e^{iy}=\cos y+i\sin y$

$\text{Ln } z=\ln |z|+i\text{Arg } z$

$\cos z=\dfrac{e^{iz}+e^{-iz}}{2},\sin z=\dfrac{e^{iz}-e^{-iz}}{2i}$

- $\tan z=\dfrac{\sin z}{\cos z},\cot z=\dfrac{\cos z}{\sin z},\sec z=\dfrac{1}{\cos z},\csc z=\dfrac{1}{\sin z}$

$\ch z=\dfrac{e^{z}+e^{-z}}{2},\sh z=\dfrac{e^{z}-e^{-z}}{2}$

- $\th z=\dfrac{\sh z}{\ch z}$

## 复变函数的积分

### 柯西积分定理

如果函数 $f(z)$ 在简单闭曲线 $C$ 上以及由它围成的区域 $D$ 内处处解析，那么 $f(z)$ 沿 $C$ 的积分为零，即 $\oint_C f(z)\mathrm dz=0$

### 柯西积分公式（高阶导数公式）

如果 $f(z)$ 在区域 $D$ 内处处解析，$C$ 为 $D$ 内的任何一条正向简单闭曲线，它的内部完全含于 $D$，$z_0$ 为 $C$ 内部的任一点，那么 $\oint_C\frac{f(z)}{z-z_0}\mathrm dz=2\pi i f(z_0)$

- $\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\mathrm dz=\frac{2\pi i}{n!}f^{(n)}(z_0)$

### 调和函数

$u_{xx}+u_{yy}=0$

设 $u$ 为区域 $D$ 内给定的调和函数，如果区域 $D$ 内的另一个函数 $v$ 使 $u+vi$ 在 $D$ 构成解析函数，则称 $v$ 为 $u$ 的共轭调和函数，$u$ 和 $v$ 满足 C-R 方程

解析函数 $f(z)=u+iv$ 的导数 $f'(z)$ 仍为解析函数，且有 $f'(z)=u_x+iv_x$

解析函数用 $x,y$ 表示变为用 $z$ 表示的方法：令 $y=0$，将 $x$ 替换为 $z$

## 复变函数项级数

### 复数项级数

复数项级数 $\sum_{n=1}^{\infty}\alpha_n(\alpha_n=a_n+ib_n)$ 收敛的充要条件为实数项级数 $\sum_{n=1}^{\infty}a_n$ 与 $\sum_{n=1}^{\infty}b_n$ 均收敛

### 幂级数收敛半径

如果幂级数满足 $\lim_{n\to\infty}\left|\dfrac{c_{n+1}}{c_n}\right|=\lambda \neq 0$ 或 $\lim_{n\to\infty}\left|\sqrt[n]{c_{n}}\right|=\lambda \neq 0$，那么收敛半径 $R=\dfrac{1}{\lambda}$

### 解析函数的泰勒展开定理

设函数 $f(z)$ 在圆域 $K=\{z|\left|z-z_0\right|<R\}$ 内解析，则在 $K$ 内 $f(z)$ 能唯一地展开成幂级数 $f(z)=\sum_{n=0}^{\infty}c_n(z-z_0)^n$

### 复变初等函数的泰勒级数

$e^z=1+z+\dfrac{z^2}{2!}+\dfrac{z^3}{3!}+\cdots+\dfrac{z^n}{n!}+\cdots,R=\infty$

$\sin z=z-\dfrac{z^3}{3!}+\dfrac{z^5}{5!}-\cdots+\dfrac{(-1)^n}{(2n+1)!}z^{2n+1}+\cdots,R=\infty$

$\cos z=1-\dfrac{z^2}{2!}+\dfrac{z^4}{4!}-\cdots+\dfrac{(-1)^n}{(2n)!}z^{2n}+\cdots,R=\infty$

$\ln(1+z)=z-\dfrac{z^2}{2}+\dfrac{z^3}{3}-\cdots+\dfrac{(-1)^n}{n+1}z^{n+1}+\cdots,R=\infty$

### 解析函数的洛朗展开定理

设函数 $f(z)$ 在圆环域 $R_1<|z-z_0|<R_2$ 内解析，则在此圆环域内 $f(z)$ 能唯一地展开成双边幂级数 $f(z)=\sum_{n=-\infty}^{\infty}c_n(z-z_0)^n$

## 留数及其应用

### 孤立奇点及其分类

如果函数 $f(z)$ 在点 $z_0$ 处不解析，但在 $z_0$ 的某一去心邻域 $0<|z-z_0|<\delta$ 内解析，则称 $z_0$ 为 $f(z)$ 的孤立奇点

可去奇点：洛朗级数中无负幂项

$m$ 级极点：洛朗级数中负幂项只有有限项（$m$ 项）

本性奇点：洛朗级数中有无穷多负幂项

- $\Leftrightarrow\lim_{z\to z_0}f(z)$ 不存在也不为 $\infty$

### 无穷远点的奇点类型

若点 $t=0$ 是 $f(\dfrac{1}{t})$ 的可去奇点、$m$ 级极点或本性奇点，则称点 $z=\infty$ 是 $f(z)$ 的可去奇点、$m$ 级极点或本性奇点

### 留数定理

$\text{Res}[f(z),z_0]=\dfrac{1}{2\pi i}\oint_C\dfrac{f(z)}{z-z_0}\mathrm dz=c_{-1}$

$\oint_C f(z)\mathrm dz=2\pi i\sum_{k=1}^n\text{Res}[f(z),z_k]$

### 计算留数的方法

$\text{Res}[f(z),z_0]=\dfrac{1}{(m-1)!}\lim_{z\to z_0}\{(z-z_0)^mf(z)\}^{(m-1)}$

$\text{Res}[f(z),\infty]=-\text{Res}\left[f\left(\dfrac{1}{z}\right)\dfrac{1}{z^2},0\right]$

$\text{Res}[f(z),\infty]+\sum_{k=1}^n\text{Res}[f(z),z_k]=0$

### 留数定理在计算实积分中的应用

形如 $\int_0^{2\pi}R(\cos\theta,\sin\theta)\mathrm d\theta$ 的积分

- 变量代换：$\cos\theta=\dfrac{z^2+1}{2z},\sin\theta=\dfrac{z^2-1}{2iz}$

- 孤立奇点：单位圆周 $|z|=1$ 以内

形如 $\int_{-\infty}^{+\infty}R(x)\mathrm dx$ 的积分

- 孤立奇点：上半平面以内

形如 $\int_{-\infty}^{+\infty}R(x)e^{aix}\mathrm dx$ 的积分

- 孤立奇点：上半平面以内

- 应用：取该积分的实部或虚部，可以得到 $\int_{-\infty}^{+\infty}R(x)\cos ax\mathrm dx$ 或 $\int_{-\infty}^{+\infty}R(x)\sin ax\mathrm dx$ 的值

## 解析函数导数的几何意义

### 旋转角

$\theta=\text{arg }f'(z)$

### 伸缩率

$\rho=\left|f'(z)\right|$