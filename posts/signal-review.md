---
title: 信号与系统期末复习
date: Wed Jun 07 2023 19:49:23 GMT+0800 (中国标准时间)
abstract: 期末复习
category: Course Review
---

# 信号与线性系统期末复习

## 1. 信号与系统

正弦信号

> 连续时间正弦信号：$x(t)=A\cos(\Omega_0t+\phi)$
>
> 基波周期：$T_0=\dfrac{2\pi}{\Omega_0}$
>
> 离散时间正弦序列：$x(n)=A\cos(\omega_0n+\phi)$
>
> 满足周期性的条件：$\dfrac{\omega_0}{2\pi}=\dfrac{m}{N}$ 为有理数。

指数信号

> 连续时间指数信号：$x(t)=Ae^{at}$
>
> （1）$A,a$ 为实常数：实指数信号
>
> （2）$A=1,a=j\Omega_0$：周期性复指数信号，$T=\dfrac{2k\pi}{\Omega_0}$
>
> $x(t)=e^{j\Omega_0t}=\cos(\Omega_0t)+j\sin(\Omega_0t)$
>
> 离散时间指数序列：$x(n)=K\alpha^n$
>
> （1）$k,\alpha$ 为实常数：实指数序列
>
> （2）$k=1,\alpha=e^{j\omega_0}$：周期性复指数序列，$N=\dfrac{2\pi m}{\omega_0}$（$\dfrac{\omega_0}{2\pi}$ 为有理数）
>
> $x(n)=e^{j\omega_0n}=\cos(\omega_0n)+j\sin(\omega_0n)$

单位阶跃信号

> 连续单位阶跃信号：
>
> $u(t)=\begin{cases}0,&t<0\\1,&t\geq0\end{cases}$
>
> 离散单位阶跃序列：
>
> $u(n)=\begin{cases}0,&n<0\\1,&n\geq0\end{cases}$

单位脉冲信号

> $\delta(n)=\begin{cases}0,&n\neq0\\1,&n=0\end{cases}$
>
> $x(n)\delta(n)=x(0)\delta(n)$
>
> $x(n)\delta(n-m)=x(m)\delta(n-m)$

单位冲激信号

> 单位冲激函数 $\delta(t)$ 的定义：
>
> $\begin{cases}\delta(t)=0,&t\neq0\\\int_{-\infty}^{+\infty}\delta(t)dt=1\end{cases}$
>
> $x(t)\delta(t)=x(0)\delta(t)$
>
> $x(t)\delta(t-t_0)=x(t_0)\delta(t-t_0)$

系统的性质

> 因果性：如果一个系统在任何时刻的输出都只取决于当时的输入以及以前的输入，而不取决于将来的输入，则该系统就称为**因果系统**。例如，$y(n)=x(n)+x(n-1)$ 是因果系统，而 $y(n)=x(n)-x(n+1)$ 是非因果系统。
>
> 时不变性：如果系统的输入信号在时间上发生一个时移，相应的输出信号也仅仅在时间上产生一个同样的时移，除此之外没有任何其他改变，则称该系统为**时不变系统**。
>
> 线性性：如果一个系统既满足叠加性同时又满足齐次性，则称该系统为**线性系统**。
>
> 所谓叠加性是指，几个激励同时作用于系统时，系统的响应等于每个激励单独作用时所产生的相应之和，即
>
> 若 $x_1(t)\rightarrow y_1(t),x_2(t)\rightarrow y_2(t)$，则 $x_1(t)+x_2(t)\rightarrow y_1(t)+y_2(t)$。
>
> 所谓齐次性是指，若系统的输入乘以任意常数，则系统的输出也乘以相同的常数，即
>
> 若 $x(t)\rightarrow y(t)$，则 $kx(t)\rightarrow ky(t)$。

## 2. 信号与系统的时域分析

离散信号的时域分解

> $\displaystyle x(n)=\sum_{k=-\infty}^{+\infty}x(k)\delta(n-k)$

离散时间系统的时域分析方法

> $\displaystyle x(n)=\sum_{k=-\infty}^{+\infty}x(k)\delta(n-k)\rightarrow y(n)=\sum_{k=-\infty}^{+\infty}x(k)h(n-k)=x(n)*h(n)$

卷积和的定义

> $\displaystyle x(n)*h(n)=\sum_{k=-\infty}^{+\infty}x(k)h(n-k)$

卷积和的性质

> 交换律：$x(n)*h(n)=h(n)*x(n)$
>
> 结合律：$[x(n)*h_1(n)]*h_2(n)=x(n)*[h_1(n)*h_2(n)]$
>
> 分配律：$x(n)*[h_1(n)+h_2(n)]=x(n)*h_1(n)+x(n)*h_2(n)$
>
> 时移性质：$x(n-n_0)*h(n)=x(n)*h(n-n_0)=y(n-n_0)$
>
> $x(n)*\delta(n)=x(n)$
>
> $x(n-n_1)*\delta(n-n_2)=x(n-n_1-n_2)$
>
> $x(n)*u(n)\displaystyle=\sum_{k=-\infty}^{n}x(k)$

离散 LTI 系统的模拟框图

> $y(n)+ay(n-1)=b_0x(n)+b_1x(n-1)$
>
> $y(n)=-ay(n-1)+b_0x(n)+b_1x(n-1)$
>
> $\begin{cases}w(n)=b_0x(n)+b_1x(n-1)\\y(n)=-ay(n-1)+w(n)\end{cases}$

![](https://tth37.top/assets/fig1.png)

卷积的定义

> $f_1(t)*f_2(t)=\int_{-\infty}^{+\infty}f_1(\tau)f_2(t-\tau)d\tau$

卷积的性质

> 交换律：$f(t)*v(t)=v(t)*f(t)$
>
> 分配律：$f(t)*[v(t)+w(t)]=f(t)*v(t)+f(t)*w(t)$
>
> 结合律：$[f(t)*v(t)]*w(t)=f(t)*[v(t)*w(t)]$
>
> 时移性质：$f(t-t_1)*v(t-t_2)=y(t-t_1-t_2)$
>
> $x(t)*\delta(t)=x(t)$
>
> $x(t-t_0)*\delta(t-t_1)=x(t-t_0-t_1)$

卷积的微分与积分

> 微分：$\displaystyle\frac{\mathrm d}{\mathrm dt}\left[f(t)*v(t)\right]=\frac{\mathrm df(t)}{\mathrm dt}*v(t)=f(t)*\frac{\mathrm dv(t)}{\mathrm dt}$
>
> 积分：$\int_{-\infty}^t\left[f(\tau)*v(\tau)\right]d\tau=f(t)*\left[\int_{-\infty}^tv(\tau)d\tau\right]=\left[\int_{-\infty}^tf(\tau)d\tau\right]*v(t)$

常用函数的卷积

> $f(t)*\delta(t)=f(t)$
>
> $f(t)*\delta(t-t_0)=f(t-t_0)$
>
> $f(t)*\delta'(t)=f'(t)*\delta(t)=f'(t)$
>
> $f(t)*u(t)=\int_{-\infty}^tf(\tau)d\tau$
>
> $u(t)*u(t)=tu(t)$
>
> $e^{-t}u(t)*u(t)=(1-e^{-t})u(t)$
>
> > 【例题】计算 $y(n)=(\delta(n)-a\delta(n-1))*(a^nu(n))$
> >
> > 【答案】
> > 
> > $\begin{aligned}y(n)&=a^nu(n)*\delta(n)-a\cdot a^nu(n)*\delta(n-1)\\&=a^nu(n)-a\cdot a^{n-1}u(n-1)\\&=a^n(u(n)-u(n-1))\\&=a^n\delta(n)\\&=\delta(n)\end{aligned}$

## 3. 连续时间信号与系统的频域分析

连续时间周期信号的傅里叶级数

> 如果连续时间信号 $x(t)$ 是周期的，则对任何 $t$ 都应满足 $x(t)=x(t+T)$。其中，$T$ 是一个非零的正实数。满足上式的最小非零正值 $T_0$ 称为该信号的**基波周期**，$\Omega_0=\dfrac{2\pi}{T_0}$ 称为**基波频率**。
>
> 如果把成谐波关系的复指数信号线性组合起来，构成一个连续时间信号 $x(t)$，即 $x(t)\displaystyle=\sum_{k}a_ke^{jk\Omega_0t}$，那么 $x(t)$ 也一定是以 $T_0$ 为周期的。在上式中，由于 $k=0$ 的项是一个常数，因而称为 $x(t)$ 的**直流分量**；$k=\pm1$ 的两项都具有基波周期 $T_0$，因而被合称为 $x(t)$ 的**基波分量**或**一次谐波分量**。

指数形式的傅里叶级数

> $\displaystyle x(t)=\sum_{k=-\infty}^{+\infty}\dot A_ke^{jk\Omega_0t}$
>
> $\dot A_k=\dot A_{-k}^*$

傅里叶级数的系数

> $\dot A_k=\dfrac{1}{T_0}\displaystyle\int_{T_0}x(t)e^{-jk\Omega_0t}dt$

三角函数形式的傅里叶级数

> $x(t)=\dot A_0+2\displaystyle\sum_{k=1}^{\infty}\text{Re}\left\{\dot A_ke^{jk\Omega_0t}\right\}$
>
> $x(t)=A_0+2\displaystyle\sum_{k=1}^{\infty}A_k\cos(k\Omega_0t+\varphi_k)$
>
> $x(t)=A_0+2\displaystyle\sum_{k=1}^\infty \text{Re}\left\{A_ke^{j(k\Omega_0t+\varphi_k)}\right\}$
>
> $x(t)=A_0+2\displaystyle\sum_{k=1}^\infty \left[ a_k\cos k\Omega_0t-b_k\sin k\Omega_0t\right]$

三角函数系数和指数函数系数关系

> 直流分量：$A_0=\dot A_0$
>
> 余弦分量（偶分量）：$a_k=\dfrac{1}{2}\left(\dot A_k+\dot A_{-k}\right)$
>
> 正弦分量（奇分量）：$b_k=\dfrac{1}{2j}\left(\dot A_k-\dot A_{-k}\right)$

周期函数奇偶性与谐波分量的关系

> 周期偶函数：只有直流和 $a_n$ 项，$b_n=0$
>
> 周期奇函数：只有 $b_n$ 项，直流和 $a_n=0$
>
> 奇谐函数（满足 $f(t)=-f(t+\dfrac T2)$）：奇谐函数的偶次谐波的系数为 $0$，只含奇次谐波
>
> 偶谐函数（满足 $f(t)=f(t+\dfrac T2)$）：偶谐函数的奇次谐波的系数为 $0$，只含偶次谐波

非周期信号的傅里叶变换

> $X(j\Omega)=\int_{-\infty}^{+\infty}x(t)e^{-j\Omega t}\mathrm dt$
>
> $x(t)=\dfrac{1}{2\pi}\int_{-\infty}^{+\infty}X(j\Omega)e^{j\Omega t}\mathrm d\Omega$

周期信号的傅里叶变换

> $e^{j\Omega_0t}\leftrightarrow 2\pi\delta(\Omega-\Omega_0)$
>
> $x(t)\leftrightarrow 2\pi\displaystyle\sum_{k=-\infty}^{+\infty}\dot A_k\delta(\Omega-k\Omega_0)$

常用信号的傅里叶变换对

| 信号 $x(t)$ | 傅里叶变换 $X(j\Omega)$ |
| :---------: | :---------------------: |
| $e^{-at}u(t),a>0$ | $\dfrac{1}{a+j\Omega}$ |
| $e^{-a\|t\|},a>0$ | $\dfrac{2a}{a^2+\Omega^2}$ |
| $1$ | $2\pi\delta(\Omega)$ |
| $\delta(t)$ | $1$ |
| $u(t)$ | $\dfrac{1}{j\Omega}+\pi\delta(\Omega)$ |
| $\begin{cases}1,&\|t\|\leq \tau/2\\0,&\|t\|>\tau/2\end{cases}$ | $\dfrac{2\sin\left(\Omega\tau/2\right)}{\Omega}$ |
| $\text{sgn}(t)=u(t)-u(-t)$ | $\dfrac{2}{j\Omega}$ |
| $e^{j\Omega_0t}$ | $2\pi\delta(\Omega-\Omega_0)$ |
| $\begin{cases}1,&0\leq \|t\|\leq \tau/2\\0,&\tau/2<\|t\|\leq T_0/2 \end{cases}$ | $\displaystyle\sum_{k=-\infty}^{+\infty}\dfrac{2\sin(k\Omega_0\tau/2)}{k}\delta(\Omega-k\Omega_0)$ |
| $te^{-at}u(t),\text{Re}(a)>0$ | $\dfrac{1}{(a+j\Omega)^2}$ |

傅里叶变换的基本性质

| 性质 | 傅里叶变换 |
| :--: | :--------: |
| 线性特性 | $ax(t)+by(t)\leftrightarrow aX(j\Omega)+bY(j\Omega)$ |
| 延时特性 | $x(t-t_0)\leftrightarrow X(j\Omega)e^{-j\Omega t_0}$ |
| 移频特性 | $x(t)e^{j\Omega_0t}\leftrightarrow X(j(\Omega-\Omega_0))$ |
| 尺度变换特性 | $x(at)\leftrightarrow \dfrac{1}{\|a\|}X\left(\dfrac{j\Omega}{a}\right)$ |
| 共轭对称特性 | $X^*(j\Omega)=X(-j\Omega)$ |
| 对偶特性 | $X(jt)\leftrightarrow 2\pi x(-\Omega)$ |
| 时域微分特性 | $\dfrac{\mathrm dx(t)}{\mathrm dt}\leftrightarrow j\Omega X(j\Omega),\dfrac{\mathrm d^nx(t)}{\mathrm dt^n}\leftrightarrow (j\Omega)^nX(j\Omega)$ |
| 时域积分特性 | $\int_{-\infty}^tx(\tau)\mathrm d\tau\leftrightarrow \dfrac{1}{j\Omega}X(j\Omega)+\pi X(0)\delta(\Omega)$ |
| 频域微分特性 | $-jtx(t)\leftrightarrow \dfrac{\mathrm dX(j\Omega)}{\mathrm d\Omega},(-jt)^nx(t)\leftrightarrow \dfrac{\mathrm d^nX(j\Omega)}{\mathrm d\Omega^n}$ |
| 频域积分特性 | $-\dfrac{x(t)}{jt}+\pi x(0)\delta(t)\leftrightarrow\int_{-\infty}^\Omega X(j\tau)\mathrm d\tau$ |
| 卷积特性 | $x(t)*y(t)\leftrightarrow X(j\Omega)Y(j\Omega), x(t)y(t)\leftrightarrow \dfrac{1}{2\pi}X(j\Omega)*Y(j\Omega)$ |
| 帕斯瓦尔定理 | $\int_{-\infty}^{\infty}\|x(t)\|^2\mathrm dt=\dfrac{1}{2\pi}\int_{-\infty}^{\infty}\|X(j\Omega)\|^2\mathrm d\Omega$ |
| 实信号的奇、偶分解 | $x_e(t)=\dfrac12(x(t)+x(-t))\leftrightarrow \Re[X(j\Omega)]$<br>$x_o(t)=\dfrac12(x(t)-x(-t))\leftrightarrow j\Im[X(j\Omega)]$ |

线性常系数微分方程与频率响应

> $n$ 阶 LTI 连续系统：$\displaystyle\sum_{k=0}^N\frac{\mathrm d^ky(t)}{\mathrm dt^k}=\displaystyle\sum_{k=0}^M\frac{\mathrm d^kx(t)}{\mathrm dt^k}$
>
> 根据傅里叶变换的时域微分特性：$\displaystyle\sum_{k=0}^Na_k(j\Omega)^kY(j\Omega)=\displaystyle\sum_{k=0}^Mb_k(j\Omega)^kX(j\Omega)$
>
> $H(j\Omega)=\dfrac{Y(j\Omega)}{X(j\Omega)}=\dfrac{\displaystyle\sum_{k=0}^Mb_k(j\Omega)^k}{\displaystyle\sum_{k=0}^Na_k(j\Omega)^k}$

无失真传输系统的频响特性

> 不失真的系统必然满足：$y(t)=Kx(t-t_0)$，$Y(j\Omega)=KX(j\Omega)e^{-j\Omega t_0}$，$H(j\Omega)=Ke^{-j\Omega t_0}$
>
> 信号通过系统不产生失真的理想条件：
>
> 1. 系统的幅频特性在整个频率范围内为一常数
> 2. 系统的相频特性应是**过原点**的一条直线

理想低通滤波器的频率特性

> $H(j\Omega)=\begin{cases}Ke^{-j\Omega t_0},&|\Omega|\leq \Omega_c\\0,&|\Omega|>\Omega_c\end{cases}$
>
> $H(j\Omega)=Ke^{-j\Omega t_0}[u(\Omega+\Omega_c)-u(\Omega-\Omega_c)]$
> 
> 其中 $\Omega_c$ 为截止频率，$t_0$ 为系统的延时时间。

理想低通滤波器的单位冲激响应

> $h(t)=\dfrac{K\sin\left(\Omega_c(t-t_0)\right)}{\pi(t-t_0)}$

双边带正弦幅度调制与同步解调

> 调制：$x_c(t)=x(t)\cos\Omega_0t$（幅度减半，带宽加倍）
>
> 解调：$r(t)=x_c(t)\cos\Omega_0t$，并让 $r(t)$ 通过一个增益为 $2$ 的理想低通滤波器

理想抽样模型

> $x_s(t)=x(t)\delta_T(t)$，其中 $T$ 为抽样间隔，$\Omega_s=2\pi/T$ 为抽样频率
>
> $\delta_T(t)\leftrightarrow \Omega_s\delta_{\Omega_s}(\Omega)$
>
> 利用卷积特性，$x_s(t)=x(t)\delta_T(t)\leftrightarrow \dfrac{1}{2\pi}X(j\Omega)*\Omega_s\delta_{\Omega_s}(\Omega)$
>
> 特点：理想抽样后的频谱，是将连续信号的频谱进行**周期延拓**，延拓的周期是**抽样频率**，频谱幅度乘以 **$\dfrac1T$**

信号的时域内插恢复

> 内插函数：$h(t)=T\dfrac{\Omega_c}{\pi}\text{Sa}(\Omega_ct)$
>
> 要从连续时间信号的离散样本恢复连续信号必须满足三个条件：
>
> 1. 连续信号要带限与 $\Omega_m$
> 2. 采样频率 $\Omega_s\ge 2\Omega_m$
> 3. $\Omega_m\le\Omega_c\le(\Omega_s-\Omega_m)$
>
> 不满足条件 1 和 2 时产生**频谱混叠**现象（欠采样）

奈奎斯特抽样定理（香农抽样定理）

> 设 $x(t)$ 带限与 $\Omega_m$。如果抽样频率 $\Omega_s\ge2\Omega_m$，其中 $\Omega_s=\dfrac{2\pi}T$，那么 $x(t)$ 就唯一地由其样本 $x_s(t)$ 所确定。

## 4. 离散时间信号与系统的频域分析

离散时间周期信号的傅里叶级数

> 如果离散时间信号 $x(n)$ 是周期的，则对任何 $n$ 都满足 $x(n)=x(n+N)$，其中 $N$ 是正整数，称为信号的周期。复指数信号 $e^{j\frac{2\pi}{N}n}$ 就是一个以 $N$ 为周期的信号。
>
> 如果把以 $N$ 为周期的所有离散时间周期性复指数信号组合起来，可以构成一个信号集 $\phi_k(n)=\{e^{j\frac{2\pi}{N}kn}\},k=0,1,2,\cdots,N-1$，$N$ 是这个信号集的基波周期。由于该信号集中的每一个信号的频率都是基波频率 $2\pi/N$ 的整数倍，因此称它们是呈谐波关系的。然而与连续时间成谐波关系的复指数信号集不同的是，信号集 $\phi_k(n)$ 中只有 $N$ 个信号是独立的。这是因为任何在频率上相差 $2\pi$ 整数倍的复指数信号都是相同的。

离散时间傅里叶级数（DFS）

> $x(n)=\displaystyle\sum_{k=<N>}\dot A_ke^{j\frac{2\pi}{N}kn}$
>
> $\dot A_k^*=\dot A_{-k}$

傅里叶级数的系数

> $\dot A_k=\dfrac{1}{N}\displaystyle\sum_{k=<N>}x(n)e^{-j\frac{2\pi}{N}kn}$

非周期信号的离散时间傅里叶变换（DTFT）

> $X(e^{j\omega})=\displaystyle\sum_{n=-\infty}^{+\infty}x(n)e^{-j\omega n}$
>
> $x(n)=\dfrac{1}{2\pi}\int_{2\pi} X(e^{j\omega})e^{j\omega n}\mathrm d\omega$

周期信号的离散时间傅里叶变换

> $X(e^{j\omega})=2\pi\displaystyle\sum_{k=-\infty}^{\infty}\dot A_k\delta(\omega-\frac{2\pi}{N}k)$

常用序列的离散时间傅里叶变换

| 序列 $x(n)$ | 傅里叶变换 $X(e^{j\omega})$ |
| :---------: | :------------------------: |
| 单边指数序列 $a^nu(n),\|a\|<1$ | $\dfrac{1}{1-ae^{-j\omega}}$ |
| 双边指数序列 $a^{\|n\|},\|a\|<1$ | $\dfrac{1}{1-ae^{-j\omega}}+\dfrac{ae^{j\omega}}{1-ae^{j\omega}}=\dfrac{1-a^2}{1-2a\cos\omega+a^2}$ |
| $\delta(n)$ | $1$ |
| $\text{sgn}(n)=\begin{cases}1,&n>0\\0,&n=0\\-1,&n<0\end{cases}$ | $\dfrac{-j\sin\omega}{1-\cos\omega}$ |
| $u(n)$ | $\dfrac12[1+\text{sgn}(n)+\delta(n)]$

离散时间傅里叶变换的性质

| 性质 | 傅里叶变换 |
| :--: | :--------: |
| 周期性 | $X(e^{j\omega})=X(e^{j(\omega+2\pi)})$ |
| 线性特性 | $ax(n)+by(n)\leftrightarrow aX(e^{j\omega})+bY(e^{j\omega})$ |
| 共轭对称特性 | $x^*(n)\leftrightarrow X^*(e^{-j\omega})$ |
| 时移特性 | $x(n-n_0)\leftrightarrow X(e^{j\omega})e^{-j\omega n_0}$ |
| 频移特性 | $x(n)e^{j\omega_0n}\leftrightarrow X(e^{j(\omega-\omega_0)})$ |
| 时域和频域的尺度变换 | $x_{(k)}(n)\leftrightarrow X(e^{jk\omega}),x(-n)\leftrightarrow X(e^{-j\omega})$ |
| 时域差分 | $x(n)-x(n-1)\leftrightarrow (1-e^{-j\omega})X(e^{j\omega})$ |
| 时域求和 | $\displaystyle\sum_{k=-\infty}^nx(k)\leftrightarrow \dfrac{X(e^{j\omega})}{1-e^{-j\omega}}+\pi X(e^{j0})\sum_{k=-\infty}^{\infty}\delta(\omega-2\pi k)$ |
| 频域微分特性 | $nx(n)\leftrightarrow j\dfrac{\mathrm dX(e^{j\omega})}{\mathrm d\omega},(n+1)a^nu(n)\leftrightarrow\dfrac{1}{(1-ae^{-j\omega})^2}$ |
| 时域卷积特性 | $x(n)*h(n)\leftrightarrow X(e^{j\omega})H(e^{j\omega})$ |
| 帕斯瓦尔定理 | $\displaystyle\sum_{n=-\infty}^{\infty}\|x(n)\|^2=\dfrac{1}{2\pi}\int_{2\pi}\|X(e^{j\omega})\|^2\mathrm d\omega$ |
| 对偶性 | $X(e^{jt})\leftrightarrow x(-n)$ |
| 实信号的奇、偶分解 | $x_e(n)=\dfrac12[x(n)+x(-n)]\leftrightarrow \Re[X(e^{j\omega})]$<br>$x_o(n)=\dfrac12[x(n)-x(-n)]\leftrightarrow j\Im[X(e^{j\omega})]$ |

线性常系数差分方程与频率响应

> $n$ 阶离散 LTI 系统：$\displaystyle\sum_{k=0}^Na_ky(n-k)=\displaystyle\sum_{k=0}^Mb_kx(n-k)$
>
> $\displaystyle\sum_{k=0}^N a_k e^{-j\omega k}Y(e^{j\omega})=\displaystyle\sum_{k=0}^M b_k e^{-j\omega k}X(e^{j\omega})$
>
> $H(e^{j\omega})=\dfrac{Y(e^{j\omega})}{X(e^{j\omega})}=\dfrac{\displaystyle\sum_{k=0}^M b_k e^{-j\omega k}}{\displaystyle\sum_{k=0}^N a_k e^{-j\omega k}}$

## 5. 离散傅里叶变换（DFT）

离散傅里叶变换（DFT）

> $W_N=e^{-j\frac{2\pi}{N}}$
>
> $X(k)=\displaystyle\sum_{k=0}^{N-1}x(n)W_N^{kn}=\text{DFT}[x(n)]$
>
> $x(n)=\dfrac{1}{N}\displaystyle\sum_{k=0}^{N-1}X(k)W_N^{-kn}=\text{IDFT}[X(k)]$
>
> 对有限长序列计算 DFT 时，既可以利用定义式直接计算，也可以通过先计算信号的 DTFT，然后再对 DTFT 在 $0\sim2\pi$ 周期内等间隔采 $N$ 个样本。

周期卷积与圆周卷积

> 如果 $\tilde x(n)$ 与 $\tilde y(n)$ 都是以 $N$ 为周期的序列，则 $\tilde x(n)$ 与 $\tilde y(n)$ 之间的卷积为周期卷积。
>
> 对于两个长度均为 $N$ 的有限长序列，圆周卷积定义为：
>
> $f(n)=x(n)\otimes y(n)=\displaystyle\sum_{k=0}^{N-1}x(k)y((n-k))_N\cdot R_N(n)=\displaystyle\sum_{k=0}^{N-1}x((n-k))_Ny(k)\cdot R_N(n)$
>
> 圆周卷积的实质就是：先将两个有限长序列延拓成周期序列，并作周期卷积，然后对周期卷积的结果取主值周期。

离散傅里叶变换的性质

| 性质 | 傅里叶变换 |
| :--: | :--------: |
| 圆周移位 | $x((n-n_0))_NR_N(n)\leftrightarrow W_N^{kn_0}X(k),W_N^{-k_0n}x(n)\leftrightarrow X((k-k_0))_NR_N(k)$ |
| 时域圆周卷积 | $x(n)\otimes y(n)\leftrightarrow X(k)Y(k)$ |
| 频域圆周卷积 | $x(n)y(n)\leftrightarrow \dfrac{1}{N}X(k)\otimes Y(k)$ |

按时间抽取的 FFT 算法（Cooley-Tukey 算法）

> 首先将 $x(n)$ 按奇数位和偶数位分为两组，即
>
> $\begin{cases}x_1(r)=x(2r)\\x_2(r)=x(2r+1)\end{cases},r=0,1,\cdots,N/2-1$
>
> $\begin{aligned}X(k)&=\displaystyle\sum_{n=0}^{N-1}x(n)W_N^{kn}=\sum_{r=0}^{(N/2)-1}x(2r)W_N^{2rk}+\sum_{r=0}^{(N/2)-1}x(2r+1)W_N^{(2r+1)k}\\&=\sum_{r=0}^{(N/2)-1}x(2r)W_{N/2}^{rk}+\sum_{r=0}^{(N/2)-1}W_{N/2}^{rk}\cdot W_N^k\\&=X_1(k)+W_N^kX_2(k),0\le k\le \dfrac{N}{2}-1\end{aligned}$
>
> 于是我们可以将 $X(k)$ 分解成两个 $N/2$ 点 DFT 的组合。但由于 $X_1(k)$ 和 $X_2(k)$ 都只有 $N/2$ 点，因此按上式组合成的 $X(k)$ 也只是整个 $X(k)$ 的前一半。注意到
>
> $\begin{aligned}X(k+\dfrac N2)&=\displaystyle \sum_{n=0}^{(N/2)-1}x_1(n)W_{\frac N2}^{n(k+\frac N2)}+\sum_{n=0}^{(N/2)-1}x_2(n)W_{\frac N2}^{n(k+\frac N2)}\cdot W_N^{(k+\frac N2)}\\&=X_1(k)-W_N^kX_2(k)\end{aligned}$

按频率抽取的 FFT 算法（Sand-Tukey 算法）

> 如果在将序列分为两组时，按序列的前一半和后一半划分，则会得到另一种快速算法。
>
> $\begin{aligned}X(k)&=\displaystyle \sum_{n=0}^{N-1}x(n)W_N^{kn}=\sum_{n=0}^{(N/2)-1}x(n)W_N^{kn}+\sum_{n=(N/2)}^{N-1}x(n)W_N^{kn}\\&=\sum_{n=0}^{(N/2)-1}x(n)W_{N/2}^{kn}+\sum_{n=0}^{(N/2)-1}x(n+\frac N2)W_{N/2}^{kn}\cdot W_N^{k\frac N2}\\&=\sum_{n=0}^{(N/2)-1}\left[x(n)+(-1)^kx(n+\frac N2)\right]W_N^{kn},0\le k\le N-1\end{aligned}$
>
> 当 $k$ 为偶数时有
>
> $X(2r)=\displaystyle \sum_{n=0}^{(N/2)-1}\left[x(n)+x(n+\frac N2)\right]W_{N/2}^{rn},0\le r\le\frac N2-1$
>
> 当 $k$ 为奇数时有
>
> $X(2r+1)=\displaystyle \sum_{n=0}^{(N/2)-1}\left[x(n)-x(n+\frac N2)\right]W_{N}^{n}W_{N/2}^{rn},0\le r\le\frac N2-1$
>
> 如果令 $x_1(n)=x(n)+x(n+\dfrac N2),x_2(n)=\left[x(n)-x(n+\dfrac N2)\right]\cdot W_N^n$，则有
>
> $X(2r)=\text{DFT}[x_1(n)]$
>
> $X(2r+1)=\text{DFT}[x_2(n)]$

IDFT 的快速算法（IFFT）

> $x(n)=\dfrac1N\{\text{DFT}[X^*(k)]\}^*$

## 6. $z$ 变换

$z$ 变换的定义

> 单位脉冲响应为 $h(n)$ 的离散时间 LTI 系统，对复指数信号 $z^n$ 的输出响应 $y(n)$ 为 $y(n)=H(z)z^n$，其中 $H(z)=\displaystyle\sum_{n=-\infty}^{\infty}h(n)z^{-n}$。

$z$ 变换与离散时间傅里叶变换（DTFT）的关系

> $X(e^{j\omega})=X(z)\Large|_{z=e^{j\omega}}$
>
> 离散时间傅里叶变换是**单位圆上的 $z$ 变换**

$z$ 变换与离散傅里叶变换（DFT）的关系

> $X(k)=X(z)\Large|_{z=e^{j\frac{2\pi}{N}k}}$
>
> 有限长序列的离散傅里叶变换是其 $z$ 变换在单位圆上的均匀抽样，或对其离散时间傅里叶变换在 $0\sim 2\pi$ 区间内的均匀抽样

$z$ 变换的收敛域

> 使 $X(z)$ 存在且有限的 $z$ 的取值范围，称为 $X(z)$ 的收敛域。级数的和存在且有限，$X(z)$ 就收敛。
>
> $z$ 变换收敛域的特征：
>
> 1. 收敛域是 $z$ 平面内以原点为中心的圆环，收敛域内不含极点
> 2. 有限长序列的收敛域为除 $z=0$ 和 $|z|=\infty$ 外的整个 $z$ 平面
> 3. 右边序列（因果序列）的收敛域位于最外部极点的外部
> 4. 左边序列（反因果序列）的收敛域位于最内部极点的内部
> 5. 双边序列的收敛域为一环形区域

常用序列的 $z$ 变换

| 序列 | $z$ 变换 | 收敛域 |
| :--: | :------: | :----: |
| $\delta(n)$ | $1$ | 整个 $z$ 平面 |
| $u(n)$ | $\dfrac{z}{z-1}$ | $\|z\|>1$ |
| $-u(-n-1)$ | $\dfrac{z}{z-1}$ | $\|z\|<1$ |
| $\delta(n-m)$ | $\dfrac1{z^m}$ | 除去 $z=0(m>0)$ 或 $z=\infty(m<0)$ 的全部 $z$ |
| $a^nu(n)$ | $\dfrac{z}{z-a}$ | $\|z\|>\|a\|$ |
| $-a^nu(-n-1)$ | $\dfrac{z}{z-a}$ | $\|z\|<\|a\|$ |

双边 $z$ 变换的性质

| 性质 | $z$ 变换 | 收敛域 |
| :--: | :------: | :----: |
| 时移特性 | $x(n-n_0)\leftrightarrow z^{-n_0}X(z)$ | 收敛域在原点或无穷远处可能发生变化 |
| 线性特性 | $ax(n)+by(n)\leftrightarrow aX(z)+bY(z)$ | 一般情况下是各个信号收敛域的公共部分，若在相加过程中出现零极点相抵消的现象，收敛域可能有所扩大 |
| 时域反转特性 | $x(-n)\leftrightarrow X(z^{-1})$ | $\dfrac1b<\|z\|<\dfrac1a$ |
| 卷积定理 | $x(n)*y(n)\leftrightarrow X(z)Y(z)$ | 两个信号收敛域的公共部分 |
| $z$ 域微分特性 | $nx(n)\leftrightarrow -z\dfrac{\mathrm dX(z)}{\mathrm dz}$ | 收敛域不变 |
| 时域求和性质 | $\displaystyle\sum_{k=-\infty}^nx(k)\leftrightarrow \dfrac{z}{z-1}X(z)$ | $R\cap \|z\|>1$ |
| 初值定理 | $x(0)=\displaystyle\lim_{z\to\infty}X(z),x(n)=\displaystyle\lim_{z\to\infty}z^n\left[X(z)-\displaystyle\sum_{k=0}^{n-1}x(k)z^{-k}\right]$ | / |
| 终值定理 | $x(\infty)=\displaystyle\lim_{z\to1}(z-1)X(z)$ | / |

$z$ 反变换

> $z$ 反变换的计算方法：
>
> 1. 幂级数展开法
> 2. 部分分式展开法：将 $\dfrac{X(z)}z$ 展开

系统函数的极点分布与系统的特性

> 因果系统：收敛域为最外边极点的外边
> 稳定系统：收敛域一定包含单位圆
> 因果且稳定系统：全部极点一定在 $z$ 平面单位圆内

单边 $z$ 变换

> $X(z)=\displaystyle\sum_{n=0}^{\infty}x(n)z^{-n}$
>
> 右边（因果）序列，单边 $z$ 变换与双边 $z$ 变换相同
>
> 双边 $z$ 变换的移位性质：$x(n-n_0)\leftrightarrow z^{-n_0}X(z)$
>
> 单边 $z$ 变换的移位性质
>
> 1. 右移：$x(n-n_0)\leftrightarrow z^{-n_0}X(z)+z^{-n_0}\displaystyle\sum_{n=-n_0}^{-1}x(n)z^{-n},n_0>0$
> 2. 左移：$x(n-n_0)\leftrightarrow z^{n_0}X(z)-z^{n_0}\displaystyle\sum_{n=0}^{n_0-1}x(n)z^{-n},n_0>0$

