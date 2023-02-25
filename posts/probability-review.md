---
title: 概率论与数理统计期末复习
date: Fri Feb 24 2023 18:25:47 GMT+0800 (中国标准时间)
abstract: 期末复习
category: review
---

# 概率论与数理统计期末复习

## 1. 随机事件及其概率

条件概率的定义

> 设 $A,B$ 是两个随机事件，$P(B)>0$，称
>
> $$
> \color{red}P(A|B)=\dfrac{P(AB)}{P(B)}
> $$
>
> 为在事件 $B$ 发生的条件下，事件 $A$ 发生的条件概率。

全概率公式

> 设随机事件组 $A_1,A_2,\cdots,A_n,\cdots$ 是 $\Omega$ 的一组可列无穷划分，$P(A_i)>0,i=1,2,\cdots$，则对任一随机事件 $B$，有
>
> $$
> \color{red}P(B)=\sum_{i=1}^\infty P(A_i)P(B|A_i)
> $$

贝叶斯公式

> 设 $A_1,A_2,\cdots,A_n,\cdots$ 是 $\Omega$ 的一组可列无穷划分，$P(A_i)>0,i=1,2,\cdots,B\subset \Omega$，则
>
> $$
> \color{red}P(A_i|B)=\frac{P(A_i)P(B|A_i)}{\sum_{i=1}^\infty P(A_i)P(B|A_i)}
> $$

随机事件的独立性

> 设 $A,B$ 是两个随机事件，满足
>
> $$
> \color{red}P(AB)=P(A)P(B)
> $$
>
> 则称 $A,B$ 是两个相互独立的随机事件。

## 2. 随机变量及其分布

0-1 分布

> $P(X=1)=p,P(X=0)=q$
>
> $EX=p$
>
> $DX=p(1-p)$

二项分布

> $P(X=k)=C_n^kp^kq^{n-k},k=0,1,\cdots,n, X\sim B(n,p)$
>
> 当 $(n+1)p$ 是整数时，$\max P(X=k)=P(X=(n+1)p-1)=P(X=(n+1)p)$；当 $(n+1)p$ 不是整数时，$\max P(X=k)=P(X=\lfloor (n+1)p\rfloor)$。
>
> $\color{red}EX=np$
>
> $\color{red}DX=np(1-p)$

泊松分布

> $\color{red}P(X=k)=\dfrac{\lambda^k}{k!}e^{-\lambda},\lambda>0,k=0,1,2,\cdots,X\sim P(\lambda)$
>
> $\color{red}EX=\lambda$
>
> $\color{red}DX=\lambda$

超几何分布

> $P(X=k)=\dfrac{C_M^kC_{N-M}^{n-k}}{C_N^n},k=0,1,2,\cdots,l=\min\{n,M\},X\sim H(N,M,n)$

几何分布

> $\color{red}P(X=k)=q^{k-1}p,k=1,2,3,\cdots,X\sim G(p)$
>
> $\color{red}EX=\dfrac{1}{p}$
>
> $\color{red}DX=\dfrac{1-p}{p^2}$

均匀分布

> $f(x)=\begin{cases} \dfrac{1}{b-a}, & a\leq x\leq b \\ 0, & \text{otherwise} \end{cases},X\sim U(a,b)$
>
> $EX=\dfrac{a+b}{2}$
>
> $\color{red}DX=\dfrac{(b-a)^2}{12}$

指数分布

> $\color{red}f(x)=\begin{cases} \lambda e^{-\lambda x}, & x> 0 \\ 0, & x\leq 0 \end{cases},X\sim e(\lambda)$
>
> $\color{red}F(x)=\begin{cases} 1-e^{-\lambda x}, & x> 0 \\ 0, & x\leq 0 \end{cases}$
>
> $\color{red}EX=\dfrac{1}{\lambda}$
>
> $\color{red}DX=\dfrac{1}{\lambda^2}$

正态分布

> $\color{red}f(x)=\dfrac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}},X\sim N(\mu,\sigma^2)$
>
> $EX=\mu$
>
> $DX=\sigma^2$

## 4. 随机变量的数字特征

随机变量的期望

> $EX=\displaystyle\sum_{k=1}^n x_kP(X=x_k)$
>
> $EX=\displaystyle\int_{-\infty}^\infty xf(x)\mathrm dx$
>
> $\color{red}Y=g(X),EY=\displaystyle\sum_{k=1}^n g(x_k)P(X=x_k)$
>
> $\color{red}Y=g(X),EY=\displaystyle\int_{-\infty}^\infty g(x)f(x)\mathrm dx$
>
> $E(aX)=aEX$
>
> $\color{red}E(X+Y)=EX+EY$

随机变量的方差

> $DX=\displaystyle\sum_{k=1}^n (x_k-EX)^2P(X=x_k)$
>
> $DX=\displaystyle\int_{-\infty}^\infty (x-EX)^2f(x)\mathrm dx$
>
> $\color{red}DX=EX^2-(EX)^2$
>
> $D(aX)=a^2DX$
>
> $\color{red}D(X\pm Y)=DX+ DY\pm 2\text{cov}(X,Y)$

协方差

> $\text{cov}(X,Y)=E(X-EX)(Y-EY)$
>
> $\color{red}\text{cov}(X,Y)=EXY-EXEY$
>
> $\color{red}\text{cov}(aX,bY)=ab\text{cov}(X,Y)$
>
> $\color{red}\text{cov}(X_1+X_2,Y)=\text{cov}(X_1,Y)+\text{cov}(X_2,Y)$
>
> $\text{cov}(X,X)=DX$
>
> $\text{cov}(X,C)=0$

相关系数

> $\color{red}\rho(XY)=\dfrac{\text{cov}(X,Y)}{\sqrt{DXDY}}$

切比雪夫不等式

> $P\left(\left|X-\mu\right|\geq\varepsilon\right)\leq\dfrac{D(X)}{\varepsilon^2}$

## 5. 大数定律和中心极限定理

切比雪夫大数定律

> 设随机变量 $X_1,X_2,\cdots,X_n$ 相互独立，均具有有限方差，且被同一常数 $C$ 所界：$D(X_i)\leq C,i=1,2,\cdots,n$，则对任意的正数 $\varepsilon$，有
>
> $$
> \lim_{n\to\infty}P\left(\left|\frac{1}{n}\sum_{i=1}^n X_i -\frac{1}{n}\sum_{i=1}^n E(X_i)\right|<\varepsilon\right)=1
> $$
>
> 若 $X_1,X_2,\cdots,X_n$ 具有相同的数学期望 $E(X_i)=\mu$，则上式成为
>
> $$
> \lim_{n\to\infty}P\left(\left|\frac{1}{n}\sum_{i=1}^n X_i -\mu\right|<\varepsilon\right)=1
> $$
>
> 即
>
> $$
> \frac{1}{n}\sum_{i=1}^n X_i \overset{P}{\to} E X_i
> $$

伯努利大数定律

> 设 $\mu$ 是 $n$ 次独立试验中事件 $A$ 发生的次数，$p$ 是事件 $A$ 在每次试验中发生的概率，则对于任意的正数 $\varepsilon$，有
>
> $$
> \lim_{n\to\infty}P\left(\left|\frac{\mu}{n}-p\right|<\varepsilon\right)=1
> $$

辛钦大数定律

> 设 $X_1,X_2,\cdots,X_n,\cdots$ 是相互独立同分布的随机变量序列，且 $E(X_i)=\mu$，则对于任意的正数 $\varepsilon$，有
>
> $$
> \color{red}\lim_{n\to\infty}P\left(\left|\frac{1}{n}\sum_{i=1}^n X_i -\mu\right|<\varepsilon\right)=1
> $$
>
> 即
>
> $$
> \color{red}\frac{1}{n}\sum_{i=1}^n X_i \overset{P}{\to} \mu
> $$

林德伯格定理

> 设随机变量 $X_1,X_2,\cdots,X_n,\cdots$ 相互独立同分布，且具有相同的数学期望和方差：$E(X_i)=\mu,D(X_i)=\sigma^2$，则
>
> $$
> \color{red}\lim_{n\to\infty}P\left(\frac{\sum_{i=1}^n X_i -n\mu}{\sqrt{n}\sigma}\leq x\right)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^xe^{-\frac{t^2}{2}}\mathrm dt=\Phi(x)
> $$

## 6. 样本及抽样分布

常见统计量及其性质

> 样本均值 $\overline X=\dfrac{1}{n}\sum_{i=1}^n X_i$，样本方差 $S^2=\dfrac{1}{n-1}\sum_{i=1}^n (X_i-\overline X)^2$，样本标准差 $S=\sqrt{S^2}$，样本 $k$ 阶原点矩 $M_k=\dfrac{1}{n}\displaystyle\sum_{i=1}^n X_i^k,k=1,2,\cdots$，样本 $k$ 阶中心矩 $M_k'=\dfrac{1}{n}\displaystyle\sum_{i=1}^n(X_i-\overline X)^k,k=2,3,\cdots$。
>
> $\color{red}E \overline X=\mu$
>
> $\color{red}D \overline X=\dfrac{\sigma^2}{n}$
>
> $\color{red}E S^2=\sigma^2$

$\chi^2$ 分布

> 设 $X_1,\cdots,X_n$ 是相互独立同服从标准正态分布 $N(0,1)$ 的随机变量，称
>
> $$
> \color{red}\chi^2=\sum_{i=1}^n X_i^2
> $$
>
> 所服从的分布为自由度 $n$ 的 $\chi^2$ 分布，记为 $\chi^2\sim\chi^2(n)$。

$t$ 分布

> 设随机变量 $X$ 服从标准正态分布 $N(0,1)$，$Y$ 服从自由度为 $n$ 的 $\chi^2$ 分布 $\chi^2(n)$，且相互独立，称随机变量
>
> $$
> \color{red}T=\dfrac{X}{\sqrt{Y/n}}
> $$
>
> 所服从的分布为自由度 $n$ 的 $t$ 分布，记为 $T\sim t(n)$。

$F$ 分布

> 设随机变量 $X$ 服从自由度为 $m$ 的 $\chi^2$ 分布 $\chi^2(m)$，$Y$ 服从自由度为 $n$ 的 $\chi^2$ 分布 $\chi^2(n)$，且 $X$ 与 $Y$ 相互独立，称
>
> $$
> \color{red}F=\dfrac{X/m}{Y/n}
> $$
>
> 所服从的分布为自由度为 $m,n$ 的 $F$ 分布，记为 $F\sim F(m,n)$。

正态总体中统计量的分布

> $\overline X$ 与 $S^2$ 相互独立。
>
> 正态分布：
>
> $$
> \color{red}U=\frac{\overline X-\mu}{\sigma /\sqrt n}\sim N(0,1)
> $$
>
> $t$ 分布：
>
> $$
> \color{red}T=\frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1)
> $$
>
> $\chi^2$ 分布：
>
> $$
> \color{red}\chi^2=\frac{\sum_{i=1}^n(X_i-\mu)^2}{\sigma^2}\sim\chi^2(n)\\
> \chi^2=\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)
> $$

双正态总体中统计量的分布

> 正态分布：
>
> $$
> U=\frac{\overline X-\overline Y-(\mu_1-\mu_2)}{\sqrt{\dfrac{\sigma_1^2}{m}+\dfrac{\sigma_2^2}{n}}}\sim N(0,1)
> $$
>
> $t$ 分布：
>
> $$
> T=\frac{\overline X-\overline Y-(\mu_1-\mu_2)}{S_w\sqrt{\dfrac{1}{m}+\dfrac{1}{n}}}\sim t(m+n-2)
> $$
>
> 其中 $S_w=\dfrac{(m-1)S_{1m}^2+(n-1)S_{2n}^2}{m+n-2}$。
>
> $\chi^2$ 分布：
>
> $$
> \chi^2=\frac{(m-1)S_{1m}^2}{\sigma_1^2}+\frac{(n-1)S_{2n}^2}{\sigma_2^2}\sim\chi^2(m+n-2)
> $$
>
> $F$ 分布：
>
> $$
> f=\frac{S_{1m}^2/\sigma_1^2}{S_{2n}^2/\sigma_2^2}\sim F(m-1,n-1)
> $$

## 7. 参数估计

矩估计

> 总体 $X$ 的数学期望 $\mu$ 的矩估计量为样本均值 $\overline X$，总体 $X$ 的方差 $\sigma^2$ 的矩估计量为样本的二阶中心矩 $B_2$。

最大似然估计

> 当总体 $X$ 为连续型随机变量时，设其分布密度为 $f(x;\theta_1,\theta_2,\cdots,\theta_m)$，其中 $\theta_1,\theta_2,\cdots,\theta_m$ 为未知参数。又设 $X_1,X_2,\cdots,X_n$ 为总体的一个样本，称
>
> $$
> L(\theta_1,\theta_2,\cdots,\theta_m)=\prod_{i=1}^nf(X_i;\theta_1,\theta_2,\cdots,\theta_m)
> $$
>
> 为样本的似然函数，简记为 $L(\theta)$。
>
> 若似然函数 $L_1(\theta)$ 在 $\hat \theta_1,\hat \theta_2,\cdots,\hat \theta_m$ 处取得最大值，则称 $\hat \theta_1,\hat \theta_2,\cdots,\hat \theta_m$ 为总体参数 $\theta_1,\theta_2,\cdots,\theta_m$ 的最大似然估计量。

估计量的评选标准

> 无偏性：设 $\hat \theta$ 为未知参数 $\theta$ 的估计量，若 $\color{red}E\hat \theta=\theta$，则称 $\hat \theta$ 为 $\theta$ 的无偏估计量。
>
> 有效性：设 $\hat \theta_1$ 和 $\hat \theta_2$ 为未知参数 $\theta$ 的两个无偏估计量。若 $D\hat \theta_1\le D\hat \theta_2$，则称 $\hat \theta_1$ 比 $\hat \theta_2$ 有效。
>
> 相合性：设 $\hat\theta_n$ 是 $\theta$ 的一串估计量，如果对于任意的正数 $\varepsilon$，都有
>
> $$
> \lim_{n\to\infty}P\left(\left|\hat\theta_n-\theta\right|>\varepsilon\right)=0
> $$

单正态总体期望和方差的期望估计

> 估计 $\mu$，已知 $\sigma$：
>
> $$
> \color{red}P\left(-u_{\frac{\alpha}{2}}<\frac{\overline X-\mu}{\sigma /\sqrt n}<u_{\frac{\alpha}{2}}\right)=1-\alpha
> $$
>
> 导出 $\mu$ 的置信度为 $1-\alpha$ 的置信区间
>
> $$
> \color{red}\left(\overline X-\frac{\sigma}{\sqrt n}u_{\frac\alpha2},\overline X+\frac{\sigma}{\sqrt n}u_{\frac\alpha2}\right)
> $$
>
> 估计 $\mu$，未知 $\sigma$：
>
> $$
> \color{red}P\left(-t_{\frac\alpha2}(n-1)<\frac{\overline X-\mu}{S/\sqrt n}<t_{\frac\alpha2}(n-1)\right)=1-\alpha
> $$
>
> 导出 $\mu$ 的置信度为 $1-\alpha$ 的置信区间
>
> $$
> \color{red}\left(\overline X-\frac{S}{\sqrt n}t_{\frac\alpha2}(n-1),\overline X+\frac{S}{\sqrt n}t_{\frac\alpha2}(n-1)\right)
> $$
>
> 估计 $\sigma$，已知 $\mu$：
>
> $$
> \color{red}P\left(\chi^2_{1-\frac\alpha2}(n)<\frac{\sum_{i=1}^n(X_i-\mu)^2}{\sigma^2}<\chi^2_{\frac\alpha2}(n)\right)=1-\alpha
> $$
>
> 导出 $\sigma$ 的置信度为 $1-\alpha$ 的置信区间
>
> $$
> \color{red}\left(\frac{1}{\chi^2_{\frac\alpha2}(n)}\sum_{i=1}^n(X_i-\mu)^2,\frac{1}{\chi^2_{1-\frac\alpha2}(n)}\sum_{i=1}^n(X_i-\mu)^2\right)
> $$
>
> 估计 $\sigma$，未知 $\mu$：
>
> $$
> \color{red}P\left(\chi^2_{1-\frac\alpha2}(n-1)<\frac{(n-1)S^2}{\sigma^2}<\chi^2_{\frac\alpha2}(n-1)\right)=1-\alpha
> $$
>
> 导出 $\sigma$ 的置信度为 $1-\alpha$ 的置信区间
>
> $$
> \color{red}\left(\frac{(n-1)S^2}{\chi^2_{\frac\alpha2}(n-1)},\frac{(n-1)S^2}{\chi^2_{1-\frac\alpha2}(n-1)}\right)
> $$

## 8. 假设检验

单个正态总体均值 $\mu$ 检验

> 已知 $\sigma$：
>
> 统计量 $\color{red}U=\dfrac{\overline X-\mu_0}{\sigma_0/\sqrt n}\sim N(0,1)$
>
> | $H_0$ | $H_1$ | 拒绝 $H_0$ 的区域 |
> | :---: | :---: | :--------------- |
> | $\mu=\mu_0$ | $\mu\ne\mu_0$ | $\color{red}\|u\|\ge u_{\frac\alpha2}$ |
> $\mu\le\mu_0$ | $\mu>\mu_0$ | $\color{red}u\ge u_{\alpha}$ |
> $\mu\ge\mu_0$ | $\mu<\mu_0$ | $\color{red}u\le -u_{\alpha}$ |
>
> 未知 $\sigma$：
>
> 统计量 $\color{red}T=\dfrac{\overline X-\mu_0}{S/\sqrt n}\sim t(n-1)$
>
> | $H_0$ | $H_1$ | 拒绝 $H_0$ 的区域 |
> | :---: | :---: | :--------------- |
> | $\mu=\mu_0$ | $\mu\ne\mu_0$ | $\color{red}\|t\|\ge t_{\frac\alpha2}(n-1)$ |
> | $\mu\le\mu_0$ | $\mu>\mu_0$ | $\color{red}t\ge t_{\alpha}(n-1)$ |
> | $\mu\ge\mu_0$ | $\mu<\mu_0$ | $\color{red}t\le -t_{\alpha}(n-1)$ |


单个正态总体方差 $\sigma^2$ 检验

> 已知 $\mu$：
>
> 统计量 $\color{red}\chi^2=\dfrac{\sum_{i=1}^n(X_i-\mu)^2}{\sigma_0^2}\sim\chi^2(n)$
>
> | $H_0$ | $H_1$ | 拒绝 $H_0$ 的区域 |
> | :---: | :---: | :--------------- |
> | $\sigma^2=\sigma_0^2$ | $\sigma^2\ne\sigma_0^2$ | $\color{red}\chi^2\le \chi^2_{1-\frac\alpha2}(n)$ 或 $\color{red}\chi^2\ge \chi^2_{\frac\alpha2}(n)$ |
> | $\sigma^2\le\sigma_0^2$ | $\sigma^2>\sigma_0^2$ | $\color{red}\chi^2\ge \chi^2_{\alpha}(n)$ |
> | $\sigma^2\ge\sigma_0^2$ | $\sigma^2<\sigma_0^2$ | $\color{red}\chi^2\le \chi^2_{1-\alpha}(n)$ |
>
> 未知 $\mu$：
>
> 统计量 $\color{red}\chi^2=\dfrac{(n-1)S^2}{\sigma_0^2}\sim\chi^2(n-1)$
>
> | $H_0$ | $H_1$ | 拒绝 $H_0$ 的区域 |
> | :---: | :---: | :--------------- |
> | $\sigma^2=\sigma_0^2$ | $\sigma^2\ne\sigma_0^2$ | $\color{red}\chi^2\le \chi^2_{1-\frac\alpha2}(n-1)$ 或 $\color{red}\chi^2\ge \chi^2_{\frac\alpha2}(n-1)$ |
> | $\sigma^2\le\sigma_0^2$ | $\sigma^2>\sigma_0^2$ | $\color{red}\chi^2\ge \chi^2_{\alpha}(n-1)$ |
> | $\sigma^2\ge\sigma_0^2$ | $\sigma^2<\sigma_0^2$ | $\color{red}\chi^2\le \chi^2_{1-\alpha}(n-1)$ |