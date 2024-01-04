---
title: Deep Learning Systems
date: Sat Aug 19 2023 15:08:29 GMT+0800 (中国标准时间)
abstract: "Full stack of Deep Learning Systems"
---

# Neural Network / Backpropagation

## Three ingredients of a machine learning algorithm

Every machine learning algorithm consists of three different elements:

1. **The hypothesis class**: the "program structure", parameterized via a set of *parameters*, that describes how we map inputs to outputs
2. **The loss function**: a function that specifies how "well" a given hypothesis performs on the task of interest
3. **An optimization method**: a procedure for determining a set of parameters that (approximately) minimize the sum of losses over the training set

## Loss function #2: softmax / cross-entropy loss

Let's convert the hypothesis function to a "probability" by exponentiating and normalizing its entries (to make them all positive and sum to one)

$$
z_i=p(\mathrm{label}=i)=\frac{\exp(h_i(x))}{\sum_{j=1}^k\exp(h_j(x))}\Leftrightarrow z\equiv\mathrm{normalize}(\exp(h(x)))
$$

Then let's define a loss to be the (negative) log probability of the true class: this is called *softmax* or *cross-entropy* loss

$$
\ell_{ce}(h(x),y)=-\log p(\mathrm{label}=y)=-h_y(x)+\log\sum_{j=1}^k\exp(h_j(x))
$$

So, in vector form: $\nabla_h\ell_{ce}(h(x),y)=z-\mathbf{e}_y$, where $z=\mathrm{normalize}(\exp(h(x)))$ and $\mathbf{e}_y$ is the one-hot vector with a one in the $y$th entry and zeros elsewhere

In batch form: $\nabla_h\ell_{ce}(h(X),Y)=Z-\mathbf{I}_y$, where $Z=\mathrm{normalize}(\exp(h(X)))$

## Fully-connected deep networks

A more generic form of a $L$-layer neural network - a.k.a. "Multi-layer perceptron" (MLP), feedforward network, fully-connected network - (in batch form)

$$
Z_{i+1}=\sigma_i(Z_iW_i),i=1,\dots,L\\
Z_1=X\\
h_\theta(X)=Z_{L+1}\\
[Z_i\in\R^{m\times n_i},W_i\in\R^{n_i\times n_{i+1}}]
$$

with nonlinearities $\sigma_i:\R\rightarrow\R$ applied elementwise, and parameters

$$
\theta=\{W_1,\dots,W_L\}
$$

## Backpropagation "in general"

$$
\frac{\partial\ell(Z_{L+1},y)}{\partial W_i}=\frac{\partial\ell(Z_{L+1},y)}{\partial Z_{L+1}}\cdot\frac{\partial Z_{L+1}}{\partial W_i}\cdot\dots\cdot\frac{\partial Z_{i+2}}{\partial Z_{i+1}}\cdot\frac{\partial Z_{i+1}}{\partial W_i}
$$

Let $G_{i+1}=\dfrac{\partial\ell(Z_{L+1},y)}{\partial Z_{i+1}}$, then we have a simple "backward" iteration to compute the $G_i$'s

$$
G_i=G_{i+1}\cdot\frac{\partial Z_{i+1}}{\partial Z_i}=G_{i+1}\cdot\sigma_i'(Z_iW_i)\cdot W_i
$$

## Backpropagation: Forward and backward passes

Putting it all together, we can efficiently comopute *all* the gradients we need for a neural network by following the procedure below

1. Initialize: $Z_1=X$
2. Iterate: $Z_{i+1}=\sigma_i(Z_iW_i),i=1,\dots,L$
3. Initialize: $G_{L+1}=S-\mathbf{I}_y$
4. Iterate: $G_i=(G_{i+1}\circ\sigma_i'(Z_iW_i))W_i,i=L,\dots,1$

And we can compute all the needed gradients along the way

$$
\nabla_{W_i}\ell(Z_{k+1},y)=Z_i^T(G_{i+1}\circ\sigma_i'(Z_iW_i))
$$

"Backpropagation" is just chain rule + intelligent caching of intermediate results