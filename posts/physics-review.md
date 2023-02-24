---
title: 大学物理（下）期末复习
date: Sat Feb 18 2023 00:00:17 GMT+0800 (中国标准时间)
abstract: 气体动理论，热力学基础，量子力学
category: review
tags: [tag1, tag2]
---

# 大学物理（下）期末复习

## 11. 波动光学

### 光的干涉

光程的概念及光程差和相位差的关系

> 折射率 $n$ 和几何路程 $L$ 的乘积被称为光程 $\Delta$。
>
> 从同一点光源发出的两相干光，它们的光程差 $\Delta$ 和相位差 $\Delta\varphi$ 的关系为
>
> $$
> \Delta\varphi=2\pi\frac{\Delta}{\lambda}
> $$

反射光的相位跃变（半波损失）

> 经膜上下介面两反射光比较，若 $n_1<n_2,n_2>n_3$ 或 $n_1>n_2,n_2<n_3$，有半波损失；若 $n_1<n_2,n_2<n_3$ 或 $n_1>n_2,n_2>n_3$，无半波损失。

薄膜干涉

> 明纹条件 $\Delta=2nd+\dfrac{\lambda}{2}=k\lambda$；暗纹条件 $\Delta=2nd+\dfrac{\lambda}{2}=(2k+1)\dfrac\lambda2$。
>
> 注意是否有半波损失。

双缝干涉

> 明纹条件 $\Delta=d\sin\theta=\pm k\lambda,k=0,1,2,\cdots$；暗纹条件 $\Delta=d\sin\theta=\pm(2k+1)\dfrac\lambda2,k=0,1,2,\cdots$。

### 光的衍射

单缝衍射

> 明纹条件 $b\sin\theta=\pm(2k+1)\dfrac\lambda2,k=1,2,3,\cdots$；暗纹条件 $b\sin\theta=\pm k\lambda,k=1,2,3,\cdots$。

瑞利判据

> 最小分辨角 $\theta_0=1.22\dfrac\lambda D$。

光栅衍射

> 明纹条件 $(b+b')\sin\theta=\pm k\lambda,k=0,1,2,\cdots$，暗纹条件 $(b+b')\sin\theta=\dfrac{k'}{N}\lambda$，$k'$ 不为 $N$ 的整数倍；缺级条件光栅常量 $(b+b')$ 与缝宽 $b$ 构成整数比。

### 光的偏振

马吕斯定律

> 若入射检偏器的光强为 $I_0$，则检偏器出射的光强为 $I=I_0\cos^2\alpha$。

布儒斯特定律

> 当入射角 $i$ 满足 $\tan i=\dfrac{n_2}{n_1}$ 时，反射光中只有垂直于入射面的光振动，而没有平行于入射面的光振动。

## 12. 气体动理论

理想气体物态方程

> $pV=\nu RT,p=nkT$。

理想气体压强公式

> 气体作用于器壁的压强正比于分子数密度 $n$ 和分子的平均平动动能 $\overline{\varepsilon_k}$，$p=\dfrac23n\overline{\varepsilon_k}$。

理想气体温度公式

> 气体分子的平均平动动能与气体的温度成正比，$\overline{\varepsilon_k}=\dfrac{3}{2}kT$。

能量均分定理

> 分子在各个方向运动的概率是相等的，即 $\overline{v_x^2}=\overline{v_y^2}=\overline{v_z^2}=\dfrac12kT$。

分子的平均能量

> 分子的平均能量 $\overline\varepsilon=\dfrac{i}{2}kT$，其中单原子分子自由度 $i=3$，刚性双原子分子自由度 $i=5$；理想气体的内能 $E=\dfrac{i}{2}\nu RT$。

麦克斯韦速率分布率

> 最概然速率 $v_p=\sqrt{\dfrac{2kT}{m}}=\sqrt{\dfrac{2RT}{M}}$；平均速率 $\overline v=\sqrt{\dfrac{8kT}{\pi m}}=\sqrt{\dfrac{8RT}{\pi M}}$；方均根速率 $v_{\text{rms}}=\sqrt{\overline{v^2}}=\sqrt{\dfrac{3kT}{m}}=\sqrt{\dfrac{3RT}{M}}$。

玻尔兹曼分布率

> 重力场中的等温气压公式 $p=p_0e^{-\frac{mgz}{kT}}$，式中 $p_0$ 和 $p$ 分别表示 $z=0$ 和 $z=z$ 处大气的压强。

分子的平均碰撞频率和平均自由程

> 平均碰撞频率 $\overline Z$ 与分子数密度 $n$、分子平均速率 $\overline v$ 成正比，也与分子直径 $d$ 的平方成正比，即 $\overline Z=\sqrt 2\pi d^2\overline v n$；平均自由程 $\overline \lambda=\dfrac{\overline v}{\overline Z}=\dfrac{1}{\sqrt2\pi d^2n}$。

## 14. 热力学基础

热力学第一定律

> 系统从外界吸收的能量，一部分用于系统对外做功，另一部分用来增加系统的内能，即 $Q=\Delta E+W$。

等体过程

> 设 $1 \text{mol}$ 理想气体在等体过程中所吸收的热量为 $\mathrm d Q_{V,m}$，气体的温度由 $T$ 升高到 $T+\mathrm d T$，则气体的摩尔定容热容为 $C_{V,m}=\dfrac{\mathrm dQ_{V,m}}{\mathrm dT}=\dfrac{i}{2}R$。

等压过程

> 设 $1 \text{mol}$ 理想气体在等压过程中所吸收的热量为 $\mathrm d Q_{p,m}$，气体的温度由 $T$ 升高到 $T+\mathrm d T$，则气体的摩尔定压热容为 $C_{p,m}=\dfrac{\mathrm dQ_{p,m}}{\mathrm dT}=\dfrac{i+2}{2}R+\dfrac{R}{M}$。比热容比 $\gamma=\dfrac{C_{p,m}}{C_{V,m}}=\dfrac{i+2}{i}$。

等温过程

> 当气体膨胀时， $W_T$ 和 $Q_T$ 均取正值，气体从恒温热源吸收的热量全部用于对外做功；当气体被压缩时， $W_T$ 和 $Q_T$ 均取负值，此时外界对气体所做的功，全部以热量形式由气体传递给恒温热源。有 $Q_T=W_T=\nu RT\ln\dfrac{V_2}{V_1}=\nu RT\ln\dfrac{p_1}{p_2}$。

绝热过程

> 理想气体绝热过程的 $p-V$ 函数关系满足 $pV^\gamma=C$，称为绝热方程。绝热线比等温线要陡。内能变化量 $\Delta E=\nu C_{V,m}(T_2-T_1)$。

循环过程效率的计算

> 热机经过一个正循环后，由于它的内能不变化，因此，它从高温热源吸收的热量 $Q_1$，一部分用于对外做功 $W$，另一部分则向低温热源放热，$Q_2$ 为向低温热源放出的热量。这就是说，在热机经历一个正循环后，吸收的热量 $Q_1$ 不能全部转化为功，转化为功的只是 $Q_1-|Q_2|=W$。通常把 $\eta=\dfrac{W}{Q_1}=\dfrac{Q_1-|Q_2|}{Q_1}=1-\dfrac{|Q_2|}{Q_1}$ 叫做热机效率或循环效率。
>
> 制冷机从低温热源吸收热量而膨胀，并在压缩过程中，把热量放出给高温热源。为实现这一点，外界必须对制冷剂做功。$Q_2$ 表示制冷剂从低温热源吸收的热量，$Q_1$ 表示放出给高温热源的热量。于是当制冷剂完成一个逆循环后有 $|W|=|Q_1|-Q_2$。这就是说，制冷剂经历一个逆循环后，由于外界对它做功，可把热量从低温热源传递到高温热源。外界不断做功，就能不断地从低温热源吸取热量，然后传递到高温热源。通常把 $e=\dfrac{Q_2}{W}=\dfrac{Q_2}{|Q_1|-Q_2}$ 叫做制冷剂的制冷系数。

卡诺循环

> 卡诺循环是由四个准静态过程所组成的，其中两个是等温过程，两个是绝热过程。有 $\dfrac{|Q_1|}{T_1}=\dfrac{|Q_2|}{T_2}$。

熵增加原理

> 在一热力学过程中，系统从初态 $A$ 变化到末态 $B$ 时，系统熵的增量等于初态 $A$ 和末态 $B$ 之间任意一个可逆过程热温比 $\dfrac{\mathrm dQ}{T}$ 的积分，即 $S_B-S_A=\int_A^B\dfrac{\mathrm dQ}{T}$。

## 15. 量子力学

斯特藩-玻尔兹曼定律

> 黑体的辐出度 $M(T)$ 与黑体的热力学温度 $T$ 的四次方成正比，即 $M(T)=\sigma T^4$。

维恩位移定律

> 当黑体的热力学温度升高时，在 $M_\lambda(T)-\lambda$ 的曲线上，与单色辐出度 $M_\lambda(T)$ 的峰值相对应的波长 $\lambda_m$ 向短波方向移动，且满足 $\lambda_mT=b$。

光电效应

> 爱因斯坦方程 $h\nu=\dfrac12mv^2+W$。

康普顿效应

> 光子和受原子束缚较弱的电子发生完全弹性碰撞，满足能量守恒定律和动量守恒定律，光子波长的改变量 $\Delta\lambda=\lambda-\lambda_0=\dfrac{h}{m_0c}(1-\cos\theta)$。

玻尔氢原子理论

> 波尔氢原子理论结果 $E_n=\dfrac{E_1}{n^2}, r_n=n^2r_1,v_n=\dfrac{v_1}{n}$。
>
> 当原子从高能量的定态跃迁到低能量的定态，要发射频率为 $\nu$ 的光子，且 $h\nu=E_i-E_f$

德布罗意波

> 实物粒子的波的波长为 $\lambda=\dfrac{h}{p}$，频率为 $\nu=\dfrac{E}{h}$。

不确定关系

> 对于微观粒子，不能同时用确定的位置和确定的动量来描述，$\Delta x\Delta p_x\ge h$。

一维无限深方势阱

> 定态波函数 $\Psi(x)=\sqrt{\dfrac{2}{a}}\sin\dfrac{n\pi}{a}x$；
>
> 概率密度 $|\Psi(x)|^2=\dfrac{2}{a}\sin^2\dfrac{n\pi}{a}x$；
>
> 能级 $E=n^2\dfrac{h^2}{8ma^2}$。

量子数

> 主量子数 $n=1,2,3,\cdots$；
>
> 角量子数 $l=0,1,2,\cdots,n-1$；
>
> 磁量子数 $m_l=-l,-l+1,\cdots,l-1,l$；
>
> 自旋磁量子数 $m_s=\pm\dfrac12$。

# 公式 Cheat Sheet

## 默写纸

1. 薄膜干涉明暗纹条件？
2. 双缝干涉明暗纹条件？
3. 单缝衍射明暗纹条件？
4. 光栅衍射明暗纹、缺级条件？
5. 最小分辨角？
6. 马吕斯定律？
7. 布儒斯特定律？
8. 理想气体物态方程？
9. 理想气体压强公式？
10. 理想气体温度公式？
11. 分子的平均能量、理想气体的内能？
12. 最概然速率？
13. 平均速率？
14. 方均根速率？
15. 玻尔兹曼分布率？
16. 分子的平均碰撞频率、平均自由程？
17. 热力学第一定律？
18. 摩尔定容热容？
19. 摩尔定压热容？
20. 绝热方程？
21. 热机效率、制冷系数？
22. 卡诺循环？
23. 熵增加原理？
24. 黑体辐出度？
25. 维恩位移定律？
26. 爱因斯坦方程？
27. 波尔氢原子理论（$E_n,r_n,v_n$）？
28. 德布罗意波（波长、频率）？
29. 不确定关系？
30. 一维无限深方势阱波函数？
31. 主量子数、角量子数、磁量子数、自旋磁量子数？

## 气体动理论

### 理想气体物态方程

$pV=\nu RT=\frac{N}{N_A}RT=\frac{m'}{M}RT$

- $N_A=6.02\times 10^{23} mol^{-1},R=8.31J/(mol\cdot K)$

$p=nkT$

- $n=\frac{N}{V},k=\frac{R}{N_A}=1.38\times 10^{-23}J/K$

### 理想气体压强公式

$p=\frac{2}{3}n\overline{\varepsilon_{kt}}$

$\overline{\varepsilon_{kt}}=\frac{1}{2}m\overline{v^2}=\frac{3}{2}kT$

### 气体分子能量公式

$\overline\varepsilon=\frac{i}{2}kT$

- $\overline\varepsilon$ 为分子平均能量，$i$ 为分子自由度

- 单原子分子（如 $He$）的自由度为 $3$，双原子分子（如 $O_2$、$N_2$）的自由度为 $5$

$E_m=\frac{i}{2}RT$

- $E_m$ 为 $1$ 摩尔理想气体内能

### 气体分子速率分布

$v_{rms}=\sqrt{\frac{3kT}{m}}=\sqrt{\frac{3RT}{M}}$

- $v_{rms}$ 为方均根速率，$v_{rms}=\overline{v^2}$

$\overline v=\sqrt{\frac{8kT}{\pi m}}=\sqrt{\frac{8RT}{\pi M}}$

- $\overline v$ 为平均速率

$v_p=\sqrt{\frac{2kT}{m}}=\sqrt{\frac{2RT}{M}}$

- $v_p$ 为最概然速率

### 重力场中的等温气压公式

$p=p_0e^{-\frac{mgz}{kT}}$

- $p_0,p$ 分别为 $z=0,z=z$ 处大气压强

### 气体分子的平均碰撞次数和平均自由程

$\overline z=\sqrt 2\pi d^2 n\overline v$

- $\overline z$ 为平均碰撞次数，$d$ 为分子直径

$\overline \lambda=\frac{\overline v}{\overline z}=\frac{1}{\sqrt 2\pi d^2 n}=\frac{kT}{\sqrt 2\pi d^2 p}$

- $\overline \lambda$ 为平均自由程

## 热力学基础

### 热力学第一定律

$Q=\Delta E+W$

- $Q$ 为系统吸收的热量，$\Delta E$ 为系统内能增加量，$W$ 为系统对外做功

### 等体过程

$C_{V,m}=\frac{\mathrm dQ_V}{\mathrm dT}=\frac{\mathrm dE}{\mathrm dT}=\frac{i}{2}R$

- $C_{V,m}$ 为摩尔定体热容，表示 $1$ 摩尔理想气体在体积不变的状态下，温度升高 $1$ 度所需要吸收的热量

$Q_V=\nu C_{V,m}(T_2-T_1)$

$\Delta E=Q_V$

$W_V=0$

### 等压过程

$C_{p,m}=\frac{\mathrm dQ_p}{\mathrm dT}=\frac{\mathrm dE}{\mathrm dT}+p\frac{\mathrm dV}{\mathrm dT}=C_{V,m}+R=\frac{i+2}{2}R$

- $C_{p,m}$ 为摩尔定压热容，表示 $1$ 摩尔理想气体在压强不变的状态下，温度升高 $1$ 度所需要吸收的热量

- 迈耶公式：$C_{p,m}-C_{V,m}=R$

- 比热容比：$\gamma=\frac{C_{p,m}}{C_{V,m}}=\frac{i+2}{i}$

$Q_p=\nu C_{p,m}(T_2-T_1)$

$W_p=p(V_2-V_1)=\nu R(T_2-T_1)$

$\Delta E=Q_p-W_p=\nu(C_{p,m}-R)(T_2-T_1)=\nu C_{V,m}(T_2-T_1)$

### 等温过程

$W_T=\int_{V_1}^{V_2}p\mathrm dV=\nu RT\ln\frac{V_2}{V_1}=\nu RT\ln\frac{p_1}{p_2}$

$\Delta E=0$

$Q_T=W_T$

### 绝热过程

$pV^{\gamma}=C_1$

- 消去 $p$：$TV^{\gamma-1}=C_2$

- 消去 $V$：$p^{\gamma-1}T^{-\gamma}=C_3$

$\Delta E=\nu C_{V,m}(T_2-T_1)$

$W_Q=-\Delta E=\frac{C_{V,m}}{R}(p_1V_1-p_2V_2)=\frac{p_1V_1-p_2V_2}{\gamma-1}$

### 热机和制冷机

$\eta=\frac{W}{Q_1}=\frac{Q_1-|Q_2|}{Q_1}=1-\frac{|Q_2|}{Q_1}$

- $\eta$ 为热机效率，$Q_1$ 为热机从高温热源吸收热量，$-Q_2$ 为热机向低温热源放出热量，$W$ 为热机向外做功

$e=\frac{Q_2}{|W|}=\frac{Q_2}{|Q_1|-Q_2}$

- $e$ 为制冷系数，$Q_2$ 为制冷机从低温热源吸收热量，$-Q_1$ 为制冷机向高温热源放出热量，$-W$ 为外界对制冷机做功

### 卡诺循环

$\eta=1-\frac{T_2}{T_1}$

- 卡诺正循环：等温膨胀、绝热膨胀、等温压缩、绝热压缩

- $\eta$ 为卡诺热机效率

$e=\frac{T_2}{T_1-T_2}$

- $e$ 为卡诺制冷系数

### 熵增加原理

$\Delta S=\int\frac{\mathrm dQ}{T}$

## 量子力学

### 黑体辐射

$M(T)=\sigma_0T^4$

- $M(T)$ 为黑体辐出度，斯忒藩常数 $\sigma_0=5.6703\times 10^{-8}W/(m^2K^4)$

$\lambda_m\cdot T=b$

- $\lambda_m$ 为黑体 $M-\lambda$ 曲线峰值对应的波长，$b=2.898\times 10^{-3}m\cdot K$

### 光电效应

$h\nu=\frac{1}{2}mv^2+W$

- $h=6.63\times 10^{-34}J\cdot s$

### 康普顿效应

$\Delta\lambda=\frac{h}{m_0c}(1-\cos\theta)=\lambda_C(1-\cos\theta)$

- 康普顿波长 $\lambda_C=\frac{h}{m_0c}=2.43\times 10^{-12}m$

### 德布罗意波

$E=mc^2=h\nu$

$p=mv=\frac{h}{\lambda}$

### 氢原子的玻尔理论

$E_1=-13.6eV$

$E_n=\frac{E_1}{n^2}$

- $1eV=1.6\times 10^{-19}J$

$\frac{1}{\lambda}=R_H\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)$

- $R_H=1.097\times 10^{7}m^{-1}$

### 不确定关系

$\Delta x\Delta p\geq h$

### 波函数和概率密度

$\int |\Psi|^2\mathrm d V=1$

- $|\Psi|^2$ 为概率密度

### 一维无限深势阱

$E=n^2\frac{h^2}{8ma^2}$

$\Psi(x)=\sqrt{\frac{2}{a}}\sin\frac{n\pi}{a}x,x\in(0,a)$

### 量子数

$E_n=-\frac{1}{n^2}\left(\frac{me^4}{8\varepsilon_0^2h^2}\right)$

- 主量子数 $n=1,2,3,\cdots$

$L=\sqrt{l(l+1)}\frac{h}{2\pi}$

- 角量子数 $l=0,1,2,\cdots,n-1$

$L_z=m_l\frac{h}{2\pi}$

- 磁量子数 $m_l=0,\pm1,\pm2,\cdots,\pm l$

- 自旋磁量子数 $m_s=\pm\frac{1}{2}$
