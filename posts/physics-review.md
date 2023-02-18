---
title: 大学物理（下）期末复习
date: Sat Feb 18 2023 00:00:17 GMT+0800 (中国标准时间)
abstract: 气体动理论，热力学基础，量子力学
---

# 大学物理（下）期末复习

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
