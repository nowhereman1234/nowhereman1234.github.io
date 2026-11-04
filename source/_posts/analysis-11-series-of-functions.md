---
title: 数分笔记 · 第十一章 函数项级数与幂级数
date: 2026-11-01 22:53:33
updated: 2026-11-01 22:53:33
description: 第十一章的复习提纲：函数项级数的一致收敛、魏尔斯特拉斯与阿贝尔、狄利克雷判别法、幂级数，17 道例题。
categories:
  - [Mathematics, 数学分析]
mathnotes: true
---
## §1 函数项级数的一致收敛

### 定义与定理

**一、函数项级数的概念**

设 $u_n(x)\ (n=1,2,3,\cdots)$ 是定义在实数集 $X$ 上的函数，称

$$
\sum_{n=1}^{\infty}u_n(x)=u_1(x)+u_2(x)+\cdots+u_n(x)+\cdots
$$

是函数项级数，并称

$$
S_n(x)=\sum_{k=1}^{n}u_k(x)
$$

是这一级数的 $n$ 次部分和。

如果对 $X$ 中的一点 $x_0$，数项级数

$$
\sum_{n=1}^{\infty}u_n(x_0)=u_1(x_0)+u_2(x_0)+\cdots+u_n(x_0)+\cdots
$$

收敛，就说函数项级数在 $x_0$ 点收敛，否则就说它在 $x_0$ 点发散。如果对 $X$ 中任何一点 $x$，级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 收敛，就说函数项级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $X$ 上收敛（即在每一点都收敛）。这时，对每一点 $x\in X$，级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 有和，记此和为 $S(x)$，即

$$
\sum_{n=1}^{\infty}u_n(x)=S(x),
$$

可见，$S(x)$ 是 $X$ 上的函数。例如级数

$$
\sum_{n=0}^{\infty}x^n=1+x+x^2+\cdots
$$

在 $X=(-1,1)$ 内收敛，其和为 $\dfrac{1}{1-x}$。这就表明，函数项级数在某点 $x$ 的收敛问题实质上是数项级数的收敛问题。因此，就可以应用已经学过的数项级数的有关知识来考察函数项级数的收敛问题。

与数项级数一样，给定了函数项级数 $\sum\limits_{n=1}^{\infty}u_n(x)\ (x\in X)$，可以得到一个部分和序列 $\{S_n(x)\}$，它是一个定义在 $X$ 上的函数序列。反过来，给定一个定义在 $X$ 上的函数序列 $\{f_n(x)\}$，总可以作出一个函数项级数 $\sum\limits_{n=1}^{\infty}u_n(x)\ (x\in X)$，使得这一级数的部分和序列正好就是 $\{f_n(x)\}$。这样一来，就可以把对函数项级数的研究化为对函数序列的研究，这样做有时会方便些。

**二、一致收敛的定义**

先说明为什么要引进一致收敛的概念。我们知道，有限个连续函数的和仍为连续函数，有限个可导函数之和仍为可导函数，并且其和的导数等于每一个函数的导数之和。对于积分也有类似的性质。然而，现在遇到的不是有限个函数之和，而是函数项级数 $\sum\limits_{n=1}^{\infty}u_n(x)$。如果每一项 $u_n(x)$ 在 $X$ 上连续，并且级数在 $X$ 上收敛，其和为 $S(x)$，现在要问：$S(x)$ 是否也在 $X$ 上连续？再如果每一项 $u_n(x)$ 在 $X$ 上可导，继续要问：$S(x)$ 是否也在 $X$ 上可导？以及如果 $S(x)$ 可导，等式

$$
u_1'(x)+u_2'(x)+\cdots+u_n'(x)+\cdots=S'(x)
$$

是否成立？又如果每一项 $u_n(x)$ 在 $X$ 内的一个区间 $[a,b]$ 上可积，要问 $S(x)$ 是否也在 $[a,b]$ 上可积？是否等式

$$
\int_a^b u_1(x)\,\mathrm{d}x+\int_a^b u_2(x)\,\mathrm{d}x+\cdots+\int_a^b u_n(x)\,\mathrm{d}x+\cdots=\int_a^b S(x)\,\mathrm{d}x
$$

仍旧成立？

答案是：都不一定。

这就提出了一个问题：设级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $X$ 上收敛于 $S(x)$，又设级数的每一项 $u_n(x)$ 在 $X$ 上连续。我们要问：在什么条件下才可以保证其和 $S(x)$ 也在 $X$ 上连续？对于求导和求积，也有类似的问题。要回答这些问题，必须引进一个非常重要的概念——一致收敛。

函数列 $\{S_n(x)\}$（可以把它看作函数项级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 的部分和序列）在 $X$ 上收敛于 $S(x)$，就是在 $X$ 上每一点 $x_0$ 收敛于 $S(x_0)$。按数列极限的定义，也就是，对任给的 $\varepsilon>0$，在每一点 $x_0$ 都能找到正整数 $N$，使当 $n>N$ 时，恒有

$$
\left|S_n(x_0)-S(x_0)\right|<\varepsilon
$$

（对函数项级数，此式还可写为 $\left|r_n(x_0)\right|=\left|\sum\limits_{k=n+1}^{\infty}u_k(x_0)\right|<\varepsilon$）。

一般来说，这种 $N$ 不仅依赖于 $\varepsilon$，并且也依赖于 $x_0$，记它为 $N(\varepsilon,x_0)$。一致收敛要求能找到只依赖于 $\varepsilon$ 而不依赖于 $x_0$ 的 $N(\varepsilon)$，也就是对 $X$ 上每点都适用的公共的 $N(\varepsilon)$，于是可给出下面的定义。

**定义 1**　设有函数列 $\{S_n(x)\}$（或函数项级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 的部分和序列）。若对任给的 $\varepsilon>0$，存在只依赖于 $\varepsilon$ 的正整数 $N(\varepsilon)$，使 $n>N(\varepsilon)$ 时，不等式

$$
\left|S_n(x)-S(x)\right|<\varepsilon
$$

（对函数项级数，此式也可写为 $\left|r_n(x)\right|=\left|\sum\limits_{k=n+1}^{\infty}u_k(x)\right|<\varepsilon$）对 $X$ 上一切 $x$ 都成立，则称 $\{S_n(x)\}\ \left(\sum\limits_{n=1}^{\infty}u_n(x)\right)$ 在 $X$ 上一致收敛于 $S(x)$。

一致收敛的定义还可以用下面的方式来表述。

**定义 2**　设 $\left\|S_n-S\right\|=\sup\limits_{x\in X}\left|S_n(x)-S(x)\right|$，如果

$$
\lim_{n\to\infty}\left\|S_n-S\right\|=0,
$$

就称 $S_n(x)$ 在 $X$ 上一致收敛于 $S(x)$。

这两个定义的等价性请读者证明。

**三、一致收敛级数的性质**

有了一致收敛的概念，就可以回答上一段中所提出的问题。

**定理 5（和的连续性）**　若在 $[a,b]$ 上级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 的每项 $u_n(x)$ 都连续，并且 $\sum\limits_{n=1}^{\infty}u_n(x)$ 一致收敛于 $S(x)$，则 $S(x)$ 也在 $[a,b]$ 上连续。

**定理 6（逐项求积）**　设 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $[a,b]$ 上一致收敛于 $S(x)$，并且每一 $u_n(x)$ 都在 $[a,b]$ 上连续，则

$$
\sum_{n=1}^{\infty}\int_a^b u_n(x)\,\mathrm{d}x=\int_a^b S(x)\,\mathrm{d}x=\int_a^b \sum_{n=1}^{\infty}u_n(x)\,\mathrm{d}x,
$$

亦即和号可以与积分号交换。又在 $[a,b]$ 上，函数项级数 $\sum\limits_{n=1}^{\infty}\int_a^x u_n(t)\,\mathrm{d}t$ 也一致收敛于 $\int_a^x S(t)\,\mathrm{d}t$。

**定理 7（逐项求导）**　若在 $[a,b]$ 上，$\sum\limits_{n=1}^{\infty}u_n(x)$ 的每一项都具有连续导数 $u_n'(x)$，并且 $\sum\limits_{n=1}^{\infty}u_n'(x)$ 一致收敛于 $\sigma(x)$，又 $\sum\limits_{n=1}^{\infty}u_n(x)$ 收敛于 $S(x)$，则 $S'(x)=\sigma(x)$，亦即

$$
\frac{\mathrm{d}}{\mathrm{d}x}\sum_{n=1}^{\infty}u_n(x)=\sum_{n=1}^{\infty}\frac{\mathrm{d}}{\mathrm{d}x}u_n(x)
$$

且 $\sum\limits_{n=1}^{\infty}u_n(x)$ 一致收敛于 $S(x)$。

这定理说明了和号与求导运算可以交换，但要注意的是，仅仅在条件「$\sum\limits_{n=1}^{\infty}u_n(x)$ 一致收敛」之下，即使 $u'(x)$ 存在且连续，也不能保证和号与求导数号可以交换（参见本节习题 13）。

**四、一致收敛级数的判别法**

如何判别一个级数是不是一致收敛呢？这里引进一个最常用的重要判别法：魏尔斯特拉斯判别法。

**定理 8（魏尔斯特拉斯判别法）**　若对充分大的 $n$，存在实数 $a_n$，使得

$$
\left|u_n(x)\right|\le a_n
$$

对 $X$ 上任意的 $x$ 都成立，并且数项级数 $\sum\limits_{n=1}^{\infty}a_n$ 收敛，则 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $X$ 上一致收敛。

**证明**　由 $\sum\limits_{n=1}^{\infty}a_n$ 的收敛性，对任给的 $\varepsilon>0$，可得 $N(\varepsilon)$，使 $n>N(\varepsilon)$ 时

$$
a_{n+1}+a_{n+2}+\cdots+a_{n+p}<\varepsilon\qquad(p=1,2,\cdots),
$$

对 $X$ 上一切的 $x$ 有

$$
\left|u_{n+1}(x)+\cdots+u_{n+p}(x)\right|\le\left|u_{n+1}(x)\right|+\cdots+\left|u_{n+p}(x)\right|
$$

$$
\le a_{n+1}+\cdots+a_{n+p}<\varepsilon,
$$

由一致收敛的柯西充要条件即得定理的结论。

由定理的证明还可以看到满足定理条件的级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在 $X$ 上是绝对收敛的，亦即函数项级数 $\sum\limits_{n=1}^{\infty}\left|u_n(x)\right|$ 是收敛的。

**定理 9（阿贝尔判别法）**　若在 $X$ 上 $\sum\limits_{n=1}^{\infty}b_n(x)$ 一致收敛，又对 $X$ 中每一固定的 $x$，数列 $a_n(x)$ 单调。而对任意的 $n$ 和 $X$ 中每个 $x$，有 $\left|a_n(x)\right|\le L$（$L$ 不依赖于 $x$ 和 $n$ 的定数），那么 $\sum\limits_{n=1}^{\infty}a_n(x)b_n(x)$ 在 $X$ 上一致收敛。

这个定理与数项级数的阿贝尔定理相似，其证明也大体相同，只要利用阿贝尔引理即可。事实上，由 $\sum\limits_{n=1}^{\infty}b_n(x)$ 的一致收敛性，对任意给定的 $\varepsilon>0$，可得 $N(\varepsilon)$，使 $n>N(\varepsilon)$ 时恒有

$$
\left|b_{n+1}(x)+\cdots+b_{n+p}(x)\right|<\varepsilon\qquad(p=1,2,\cdots),
$$

固定 $x$，由上式及 $a_n(x)$ 的单调性，利用阿贝尔引理得到

$$
\left|a_{n+1}(x)b_{n+1}(x)+\cdots+a_{n+p}(x)b_{n+p}(x)\right|
$$

$$
<\varepsilon\left(\left|a_{n+1}(x)\right|+2\left|a_{n+p}(x)\right|\right)
$$

$$
\le 3L\varepsilon\qquad\left(n>N(\varepsilon);\ p=1,2,\cdots\right).
$$

再从一致收敛的柯西充要条件即得。

在定理中，条件「对任意的 $n$ 和 $X$ 中的每一个 $x$，$\left|a_n(x)\right|\le L$」称为函数列 $\{a_n(x)\}$ 在 $X$ 上一致有界，需要注意的是：由函数列的每一项 $a_n(x)$ 在 $X$ 上有界不能推出 $\{a_n(x)\}$ 在 $X$ 上一致有界，事实上，$\left|a_n(x)\right|$ 在 $X$ 上的上确界 $M_n$ 是随 $n$ 而变的，可能 $\{M_n\}$ 是一个无界的数列，例如

$$
a_n(x)=nx
$$

在任意的有限区间 $[a,b]$ 上有界，但 $\{a_n(x)\}$ 非一致有界。

**定理 10（狄利克雷判别法）**　设 $\sum\limits_{n=1}^{\infty}b_n(x)$ 的部分和

$$
B_n(x)=\sum_{i=1}^{n}b_i(x)
$$

在 $X$ 上一致有界，又对 $X$ 内每一 $x$，数列 $a_n(x)$ 单调，并且函数列 $\{a_n(x)\}$ 在 $X$ 上一致收敛于零，则 $\sum\limits_{n=1}^{\infty}a_n(x)b_n(x)$ 在 $X$ 上一致收敛。

**证明**　设 $\left|\sum\limits_{i=1}^{n}b_i(x)\right|\le L$（不依赖于 $n$ 和 $x$ 的定数），那么对 $X$ 上任意的 $x$ 和任意的正整数 $p$ 恒有

$$
\left|\sum_{i=n+1}^{n+p}b_i(x)\right|\le\left|\sum_{i=1}^{n+p}b_i(x)\right|+\left|\sum_{i=1}^{n}b_i(x)\right|\le 2L.
$$

因此，利用阿贝尔引理

$$
\left|\sum_{i=n+1}^{n+p}a_i(x)b_i(x)\right|\le 2L\left(\left|a_{n+1}(x)\right|+2\left|a_{n+p}(x)\right|\right),
$$

再由 $a_n(x)$ 一致收敛于零即得。

在历史上曾经有一段时间，人们认为连续函数可能除个别点外都是可导的，甚至一些大数学家也这样认为。可是后来，魏尔斯特拉斯首先利用函数项级数构造出一个和函数，它在 $(-\infty,+\infty)$ 连续，但在任何点都不可导。

### 例题

**例 1**　$\sum\limits_{n=1}^{\infty}u_n(x)=x+(x^2-x)+(x^3-x^2)+\cdots$，它的每一项在 $0\le x\le 1$ 上都连续，其 $n$ 次部分和为 $S_n(x)=x^n$。很明显有

$$
\lim_{n\to\infty}S_n(x)=S(x)=\begin{cases}0, & 0\le x<1,\\ 1, & x=1,\end{cases}
$$

级数的和 $S(x)$ 在 $x=1$ 不连续，因此，它不是 $[0,1]$ 上的连续函数。这个例子还进一步表明，上述级数的每一项都在 $[0,1]$ 上可导，但它的和函数 $S(x)$ 在 $x=1$ 不可导。

**例 2**　考察函数序列 $\{S_n(x)\}$，其中 $S_n(x)=2n^2x\mathrm{e}^{-n^2x^2}$。对任何 $x$

$$
\lim_{n\to\infty}S_n(x)=S(x)=0,
$$

故

$$
\int_0^1 S(x)\,\mathrm{d}x=0.
$$

但

$$
\int_0^1 S_n(x)\,\mathrm{d}x=1-\mathrm{e}^{-n^2}\to 1\qquad(n\to\infty),
$$

这表明：在本例中，虽然

$$
\lim_{n\to\infty}S_n(x)=S(x),
$$

但

$$
\lim_{n\to\infty}\int_0^1 S_n(x)\,\mathrm{d}x\ne\int_0^1 S(x)\,\mathrm{d}x.
$$

**例 3**　$S_n(x)=\dfrac{x}{1+n^2x^2}$ 在 $X=(-\infty,+\infty)$ 一致收敛。

**解**　显然 $S(x)=0$，现在来看能否找到定义 1 中的 $N(\varepsilon)$，由于

$$
\left|S_n(x)-S(x)\right|=\frac{|x|}{1+n^2x^2}=\frac{1}{2n}\cdot\frac{2n|x|}{1+n^2x^2}\le\frac{1}{2n},
$$

因此对任意 $\varepsilon>0$，只要取 $N(\varepsilon)=\left[\dfrac{1}{2\varepsilon}\right]$ 便证明了结论。

这个函数列的图形为图 11-1，由图可知，只要 $N$ 相当大时，从第 $N$ 项以后，在 $(-\infty,+\infty)$ 内每一条曲线 $y=S_n(x)$ 整个位于曲线 $y=S(x)+\varepsilon$ 和 $y=S(x)-\varepsilon$ 之间，这也是一般的一致收敛函数列或一致收敛级数的几何解释（如图 11-2）。

也可以用定义 2 来考察例 3 中函数列的一致收敛性。

$$
\left\|S_n-S\right\|=\sup_{x\in(-\infty,+\infty)}\left|S_n(x)-S(x)\right|=\sup_{x\in(-\infty,+\infty)}\left|\frac{x}{1+n^2x^2}\right|,
$$

利用求极值的方法可以求得 $\left|S_n(x)\right|$ 的最大值是 $\dfrac{1}{2n}$，于是有

$$
\left\|S_n-S\right\|=\frac{1}{2n}\to 0\qquad(n\to\infty),
$$

故

$$
S_n(x)=\frac{x}{1+n^2x^2}
$$

在 $(-\infty,+\infty)$ 内一致收敛于零。

**例 4**　讨论

$$
S_n(x)=\frac{nx}{1+n^2x^2}
$$

在 $X=[0,1]$ 的一致收敛性。

**解**　由于 $S(x)=0$，故

$$
\left\|S_n-S\right\|=\max_{0\le x\le 1}\left|S_n(x)\right|=\left|S_n\left(\frac{1}{n}\right)\right|=\frac{1}{2},
$$

不收敛于零，故在 $[0,1]$ 上非一致收敛（如图 11-3）。

**例 5**　以例 1 的函数列

$$
S_n(x)=x^n,\quad X=[0,1]
$$

为例，因为

$$
\left|S_n(x)-S(x)\right|=\begin{cases}x^n, & 0\le x<1,\\ 0, & x=1,\end{cases}
$$

故 $\sup\limits_x\left|S_n(x)-S(x)\right|=1$，亦即 $\left\|S_n-S\right\|=1$，因此 $\{x^n\}$ 在 $[0,1]$ 上不一致收敛。

还可看到 $S_n(x)=x^n$ 在 $(0,1)$ 也不是一致收敛的，但它在任意一个区间 $[0,c]$（$c$ 是小于 $1$ 的任一正数）却是一致收敛的，这是因为

$$
\sup_{0\le x\le c}\left|S_n(x)-S(x)\right|=\sup_{0\le x\le c}x^n=c^n\to 0\qquad(\text{当 } n\to\infty \text{ 时}).
$$

同理可知 $S_n(x)=\dfrac{nx}{1+n^2x^2}$ 在任一区间 $[c,1]$（$c$ 为小于 $1$ 的任一正数）一致收敛，但在 $(0,1)$ 非一致收敛。这说明了一致收敛性与所讨论的区间有关，当 $S_n(x)$ 在某一区间一致收敛时，它当然在含于这区间内的任一区间一致收敛。另一方面，这两个例子也说明了 $\{S_n(x)\}$ 虽然在 $(a,b)$ 内的任一闭区间上一致收敛，但 $S_n(x)$ 在区间 $(a,b)$ 却不一定一致收敛。当 $S_n(x)$ 在 $(a,b)$ 内任一闭区间上一致收敛时，称 $S_n(x)$ 在区间 $(a,b)$ 内闭一致收敛。因此在 $(a,b)$ 一致收敛一定内闭一致收敛，但反之不然。但从 $S_n(x)$ 在 $(a,b)$ 内闭收敛，却可得到它在区间 $(a,b)$ 也收敛，这是因为对 $(a,b)$ 上每一点，总可取 $(a,b)$ 内的一个闭区间包含这个点，于是从 $S_n(x)$ 在这闭区间上的收敛性就得到它在这个点收敛。这正是由于一致收敛是整体性质而收敛是局部性质的缘故。

**例 6**　$S_n(x)=2n^2x\mathrm{e}^{-n^2x^2}$ 在 $(0,1)$ 非一致收敛。

**解**　事实上，$S_n(x)\to S(x)=0$，若取 $x_n=\dfrac{1}{n}$，则

$$
\left\|S_n-S\right\|\ge\left|S_n(x_n)-S(x_n)\right|=2n\mathrm{e}^{-1}\to\infty,
$$

但 $S_n(x)$ 在 $(0,1)$ 内闭一致收敛于零。

**例 7**　若 $\sum\limits_{n=1}^{\infty}a_n$ 绝对收敛，则 $\sum\limits_{n=1}^{\infty}a_n\sin nx$ 和 $\sum\limits_{n=1}^{\infty}a_n\cos nx$ 在 $(-\infty,+\infty)$ 内都是绝对收敛和一致收敛的级数。

**解**　事实上，

$$
\left|a_n\sin nx\right|\le\left|a_n\right|,\qquad\left|a_n\cos nx\right|\le\left|a_n\right|,
$$

由魏尔斯特拉斯判别法即可得证。

**例 8**　若 $\sum\limits_{n=1}^{\infty}a_n$ 收敛，则 $\sum\limits_{n=1}^{\infty}a_nx^n$ 在 $[0,1]$ 上一致收敛。

**解**　事实上，$b_n(x)=x^n$ 对每一固定的 $x$，$x^n$ 单调，又对任意的 $x$ 和 $n$，$\left|b_n(x)\right|\le 1\ (0\le x\le 1)$，应用阿贝尔判别法即得。

**例 9**　若 $a_n$ 单调地趋于零，则 $\sum\limits_{n=1}^{\infty}a_n\sin nx$ 在 $[\delta,2\pi-\delta]$ 上一致收敛，这里 $\delta$ 是小于 $\pi$ 的任一正数。

**解**　事实上，当 $x\in[\delta,2\pi-\delta]$ 时

$$
\left|\sum_{k=1}^{n}\sin kx\right|=\left|\frac{\cos\dfrac{1}{2}x-\cos\left(n+\dfrac{1}{2}\right)x}{2\sin\dfrac{1}{2}x}\right|
$$

$$
\le\frac{1}{\left|\sin\dfrac{1}{2}x\right|}\le\frac{1}{\sin\dfrac{1}{2}\delta},
$$

故满足定理 10 的条件。

---

## §2 幂级数

### 定义与定理

**一、收敛半径**

形如

$$
\sum_{n=0}^{\infty}a_n(x-x_0)^n=a_0+a_1(x-x_0)+a_2(x-x_0)^2+\cdots
$$

的函数项级数称为幂级数。它的部分和是多项式，它的一般项为 $a_n(x-x_0)^n\ (n=0,1,2,\cdots)$。它是一种比较简单的函数项级数，因而具有一些特殊的性质。

根据柯西判别法，如果级数 $\sum\limits_{n=1}^{\infty}u_n(x)$ 在某个 $x$ 处有

$$
\varlimsup_{n\to\infty}\sqrt[n]{\left|u_n(x)\right|}<1,
$$

那么它在 $x$ 处绝对收敛，而当 $\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|u_n(x)\right|}>1$ 时，它发散。对一般的函数项级数来说，解这个不等式不是很容易的，但对幂级数来说，却容易多了，它取决于

$$
\varlimsup_{n\to\infty}\sqrt[n]{\left|a_n(x-x_0)^n\right|}=|x-x_0|\varlimsup_{n\to\infty}\sqrt[n]{\left|a_n\right|}
$$

小于 $1$ 或大于 $1$。也就是，当 $|x-x_0|<\dfrac{1}{\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}}$ 时幂级数绝对收敛，而当 $|x-x_0|>\dfrac{1}{\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}}$ 时发散。又当 $\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}=0$ 时，幂级数在每点都绝对收敛。当 $\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}=\infty$ 时，除点 $x_0$ 外，它在每点都发散。假若规定

$$
R=\begin{cases}\dfrac{1}{\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}}, & 0<\varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}<+\infty,\\[2mm] \infty, & \varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}=0,\\[2mm] 0, & \varlimsup\limits_{n\to\infty}\sqrt[n]{\left|a_n\right|}=\infty,\end{cases}
$$

那么可把上述结果归结为下面的定理。

**定理 1（柯西-阿达马(Hadamard)定理）**　幂级数

$$
\sum_{n=0}^{\infty}a_n(x-x_0)^n
$$

在 $|x-x_0|<R$ 内绝对收敛，在 $|x-x_0|>R$ 内发散。

由此可见，对任何一个幂级数，都存在一个以 $x_0$ 为中心，以 $R$ 为半径的区间，在这个区间内幂级数绝对收敛，而在区间外，幂级数发散。在区间的端点 $x=x_0-R$ 和 $x=x_0+R$ 处，幂级数的敛散性尚需作进一步的判别。称此 $R$ 是幂级数的收敛半径。

由定理 1 即可得到下面的结论。

**定理 2（阿贝尔第一定理）**　若 $\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n$ 在点 $x=\xi$ 收敛，那么它必在 $|x-x_0|<|\xi-x_0|$ 内绝对收敛，又若 $\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n$ 在 $x=\xi$ 发散，则它必在 $|x-x_0|>|\xi-x_0|$ 也发散。

事实上，在前一情况下，$|\xi-x_0|\le R$，而在后一情况下，$|\xi-x_0|\ge R$。这里加上等号是因为在区间 $(x_0-R,x_0+R)$ 的端点，幂级数可能收敛也可能发散。

**定理 3（阿贝尔第二定理）**　若 $\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n$ 的收敛半径为 $R$，则此级数在 $(x_0-R,x_0+R)$ 内的任一个闭区间 $[a,b]$ 上一致收敛，也就是在 $(x_0-R,x_0+R)$ 内闭一致收敛；又若级数在 $x_0+R$ 点收敛，则它必在 $[a,x_0+R]$ 一致收敛。同理，当级数在 $x_0-R$ 收敛时可得类似结论。

**证明**　不妨就 $\sum\limits_{n=0}^{\infty}a_nx^n$ 的情形来证明，这不过是把上面的 $x-x_0$ 作为这里的 $x$。

设 $\xi=\max\{|a|,|b|\}$，由于在 $[a,b]$ 上任一点 $x$，恒有

$$
\left|a_nx^n\right|\le\left|a_n\xi^n\right|,
$$

而 $\sum\limits_{n=0}^{\infty}a_n\xi^n$ 绝对收敛，按魏尔斯特拉斯判别法即得定理的第一部分。

现若 $\sum\limits_{n=0}^{\infty}a_nR^n$ 收敛，先证明级数在 $[0,R]$ 上一致收敛。由

$$
\sum_{n=0}^{\infty}a_nx^n=\sum_{n=0}^{\infty}\frac{x^n}{R^n}a_nR^n
$$

及 $\dfrac{x^n}{R^n}$ 在 $[0,R]$ 上一致有界，且对每一 $x$，$\dfrac{x^n}{R^n}$ 单调，按函数项级数的阿贝尔判别法，$\sum\limits_{n=0}^{\infty}a_nx^n$ 在 $[0,R]$ 上一致收敛，因此若 $a>0$，级数在 $[a,R]$ 上也一致收敛，再考虑 $-R<a<0$ 的情形，利用上面已证得的结果：$\sum\limits_{n=0}^{\infty}a_nx^n$ 在 $[a,0]$ 一致收敛，故级数在 $[a,R]$ 上一致收敛。

**三、函数的幂级数展开**

幂级数不仅形式简单，而且有很多特殊的性质，这就使我们想到，能否把一个函数表示为幂级数来进行研究。首先，假若函数 $f(x)$ 在某点 $x_0$ 及其某一邻域 $(x_0-\delta,x_0+\delta)$ 内能表示为幂级数，也就是在 $(x_0-\delta,x_0+\delta)$ 内恒有

$$
f(x)=a_0+a_1(x-x_0)+a_2(x-x_0)^2+\cdots,
$$

那么，它在这个邻域内必有任意阶的导数，并且

$$
f^{(n)}(x)=n!a_n+\frac{(n+1)!}{1!}a_{n+1}(x-x_0)+\cdots\qquad(n=0,1,2,\cdots).
$$

在此式两端令 $x=x_0$，即得

$$
f(x_0)=a_0,\quad f'(x_0)=1!a_1,\quad f''(x_0)=2!a_2,\cdots
$$

这说明了函数 $f(x)$ 在 $x_0$ 点的幂级数展开式的系数为

$$
a_0=f(x_0),\quad a_1=\frac{f'(x_0)}{1!},\quad a_2=\frac{f''(x_0)}{2!},\cdots
$$

这时

$$
f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\cdots.
$$

要注意的是：在假定 $f(x)$ 可以表示为幂级数的前提下，才获得上述结果的。现在要问：如果 $f(x)$ 在 $x_0$ 点的某个邻域 $(x_0-\delta,x_0+\delta)$ 内有任意阶的导数，是否成立

$$
f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\cdots?
$$

回答是否定的。例如

$$
f(x)=\begin{cases}\mathrm{e}^{-\frac{1}{x^2}}, & x\ne 0,\\ 0, & x=0,\end{cases}
$$

可以验证它在原点的任何一个邻域内有任意阶导数，并且对任何 $n$，$f^{(n)}(0)=0$。将它代入上述表示式的右端

$$
f(0)+f'(0)x+\cdots+\frac{f^{(n)}(0)}{n!}x^n+\cdots
$$

中得到系数全为零的幂级数，因而整个右端为零，但当 $x\ne 0$ 时，它显然不等于 $f(x)$。那么，在怎样的条件下，一个任意阶可导的函数能够表示为一个幂级数呢？

设

$$
R_n(x)=f(x)-\left[f(x_0)+f'(x_0)(x-x_0)+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\right],
$$

由级数收敛的概念知道，如果在某个区间 $(x_0-R,x_0+R)$ 内 $R_n(x)\to 0\ (n\to\infty)$，那么

$$
f(x)=f(x_0)+f'(x_0)(x-x_0)+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\cdots,
$$

这就是函数 $f(x)$ 的幂级数展开，上式右端的幂级数称为 $f(x)$ 的泰勒级数。因此，一个函数在某个区间内是否可以展开成幂级数，关键在于考察余项 $R_n(x)$ 在这一区间内是否趋于零。

在本书上册（第六章 §2）中曾经给出了 $R_n(x)$ 的拉格朗日形式

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},
$$

其中 $\xi$ 是介于 $x_0$ 和 $x$ 之间的一个数。

在实际应用中，为了简单起见，往往取 $x_0=0$，这时的泰勒级数

$$
f(0)+\frac{f'(0)}{1!}x+\frac{f''(0)}{2!}x^2+\cdots
$$

称为麦克劳林级数。

1）$\mathrm{e}^x$ 的展开式

由于 $\mathrm{e}^x$ 在 $x=0$ 的任意阶导数等于 $1$，因此

$$
\mathrm{e}^x=1+x+\frac{1}{2!}x^2+\cdots+\frac{1}{n!}x^n+R_n(x),
$$

$$
R_n(x)=\frac{\mathrm{e}^{\theta x}}{(n+1)!}x^{n+1}.
$$

因为对任意固定的 $x$，$\mathrm{e}^{\theta x}$ 在 $1$ 与 $\mathrm{e}^x$ 之间变动，从而 $n\to\infty$ 时，$\mathrm{e}^{\theta x}$ 保持有界。另一方面，当 $n\to\infty$ 时，$\dfrac{x^{n+1}}{(n+1)!}\to 0$，因此

$$
\lim_{n\to\infty}R_n(x)=\lim_{n\to\infty}\frac{\mathrm{e}^{\theta x}}{(n+1)!}x^{n+1}=0,
$$

这就证明了

$$
\mathrm{e}^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\qquad(-\infty<x<+\infty).
$$

2）$\sin x$ 和 $\cos x$ 的展开式

对于 $f(x)=\sin x$，显然有

$$
f^{(n)}(x)=\sin\left(\frac{n\pi}{2}+x\right),
$$

因此

$$
f(0)=0,\quad f'(0)=1,\quad f''(0)=0,\quad f'''(0)=-1,\cdots,
$$

$$
f^{(2m)}(0)=0,\quad f^{(2m+1)}(0)=(-1)^m,
$$

取 $n=2k+2$，因为

$$
f^{(2k+2)}(0)=0,\quad f^{(2k+3)}(x)=\sin\left(\frac{2k+3}{2}\pi+x\right),
$$

故

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots+(-1)^k\frac{x^{2k+1}}{(2k+1)!}+R_{2k+2}(x)
$$

$$
R_{2k+2}(x)=\sin\left(\frac{2k+3}{2}\pi+\theta x\right)\frac{x^{2k+3}}{(2k+3)!},
$$

但对任一 $x$，由于正弦函数的有界性，得到

$$
\lim_{k\to\infty}R_{2k+2}(x)=\lim_{n\to\infty}\sin\left(\frac{2k+3}{2}\pi+\theta x\right)\frac{x^{2k+3}}{(2k+3)!}=0,
$$

从而

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots\qquad(-\infty<x<+\infty),
$$

同理

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots\qquad(-\infty<x<+\infty),
$$

也可以将 $\sin x$ 的展开式逐项微分，获得 $\cos x$ 的展开式。

3）$\ln(1+x)=x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\dfrac{x^4}{4}+\cdots\quad(-1<x\le 1)$，

这在例 5 中已经给出了这一展开式。

4）$\arctan x$ 的展开式

由于

$$
\frac{1}{1+x^2}=1-x^2+x^4-x^6+\cdots\qquad(-1<x<1),
$$

两边求积分即得

$$
\arctan x=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots\qquad(-1\le x\le 1),
$$

上面加上了区间的端点，是由于右边的幂级数在 $x=\pm 1$ 时也是收敛的，再由阿贝尔第二定理和 $\arctan x$ 的连续性即得。

下面举两个例子说明幂级数在近似计算中的应用。

### 例题

**例 1**　判断 $\sum\limits_{n=1}^{\infty}\dfrac{x^n}{n}$ 的敛散性。

**解**　由于 $\lim\limits_{n\to\infty}n^{\frac{1}{n}}=1$，故

$$
R=\frac{1}{\varlimsup\limits_{n\to\infty}\sqrt[n]{\dfrac{1}{n}}}=\frac{1}{\lim\limits_{n\to\infty}\dfrac{1}{n^{\frac{1}{n}}}}=1,
$$

于是级数在 $|x|<1$ 内绝对收敛，在 $|x|>1$ 内发散。在端点处，级数在一个端点 $x=-1$ 收敛，而在另一端点 $x=1$ 发散。

**例 2**　$\sum\limits_{n=1}^{\infty}n^nx^n$ 在不等于零的点都发散。

**解**　事实上，

$$
R=\frac{1}{\varlimsup\limits_{n\to\infty}\sqrt[n]{n^n}}=\frac{1}{\lim\limits_{n\to\infty}n}=0.
$$

**例 3**　$\sum\limits_{n=0}^{\infty}\dfrac{x^n}{n!}$ 在任何点绝对收敛。

**解**　对这种情况，用达朗贝尔判别法较好，因为对任一 $x$，有

$$
\lim_{n\to\infty}\left|\frac{u_{n+1}}{u_n}\right|=\lim_{n\to\infty}\frac{|x|}{n+1}=0,
$$

所以 $\sum\limits_{n=0}^{\infty}\dfrac{x^n}{n!}$ 在任何点绝对收敛。

例 3 告诉我们这样一个事实：对幂级数 $\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n$，如果 $\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|$ 存在，则此级数的收敛半径 $R$ 是

$$
R=\frac{1}{\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|}=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|.
$$

又若 $\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|=0$，则 $R=+\infty$，若 $\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|=\infty$，则 $R=0$。其证明与利用柯西判别法导出收敛半径相仿，只不过这里是利用达朗贝尔判别法。

**例 4**　$\sum\limits_{n=0}^{\infty}\left(3+(-1)^n\right)^nx^n$ 在 $\left(-\dfrac{1}{4},\dfrac{1}{4}\right)$ 绝对收敛，在其他点发散。

**解**　事实上，

$$
\varlimsup_{n\to\infty}\sqrt[n]{\left|a_n\right|}=\varlimsup_{n\to\infty}\left[3+(-1)^n\right]=4,
$$

因此 $R=\dfrac{1}{4}$。又当 $x=\pm\dfrac{1}{4}$ 时，级数的一般项不趋于零，因此在收敛区间的两个端点上，级数发散。

**例 5**　由于在 $(-1,1)$ 内

$$
1-x+x^2-x^3+\cdots=\frac{1}{1+x},
$$

故在此区间内逐项积分得

$$
x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots=\ln(1+x).
$$

又由于左边的级数在 $x=1$ 也是收敛的，因此它的和 $S(x)$ 在这点左连续，故

$$
S(1)=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\cdots
$$

$$
=\lim_{x\to 1-0}S(x)=\lim_{x\to 1-0}\ln(1+x)=\ln 2.
$$

**例 6**　求级数 $\sum\limits_{n=1}^{\infty}\dfrac{2n-1}{2^n}$ 的和。

**解**　由于

$$
\sum_{n=1}^{\infty}\frac{2n-1}{2^n}=2\sum_{n=1}^{\infty}(n+1)\left(\frac{1}{2}\right)^n-3\sum_{n=1}^{\infty}\left(\frac{1}{2}\right)^n,
$$

考虑幂级数

$$
1+\sum_{n=1}^{\infty}x^n=\frac{1}{1-x}
$$

的收敛半径为 $1$，在 $(-1,1)$ 内逐项求导，得

$$
1+\sum_{n=1}^{\infty}(n+1)x^n=\frac{1}{(1-x)^2}.
$$

将 $x=\dfrac{1}{2}$ 代入上面两个幂级数中，得

$$
\sum_{n=1}^{\infty}\left(\frac{1}{2}\right)^n=1,\qquad\sum_{n=1}^{\infty}(n+1)\left(\frac{1}{2}\right)^n=3,
$$

所以

$$
\sum_{n=1}^{\infty}\frac{2n-1}{2^n}=3.
$$

**例 7**　求 $\mathrm{e}$ 的近似值，精确到六位小数。

**解**　首先决定究竟取多少项才能达到所要的精确度。由于

$$
\mathrm{e}=1+1+\frac{1}{2!}+\frac{1}{3!}+\cdots,
$$

故若一直取到 $\dfrac{1}{n!}$，则级数的余和

$$
r_n=\frac{1}{(n+1)!}+\frac{1}{(n+2)!}+\cdots
$$

$$
=\frac{1}{(n+1)!}\left[1+\frac{1}{(n+2)}+\frac{1}{(n+2)(n+3)}+\cdots\right]
$$

$$
<\frac{1}{(n+1)!}\left[1+\frac{1}{n+1}+\frac{1}{(n+1)^2}+\cdots\right]=\frac{1}{n\cdot n!},
$$

经过计算知道，只要取 $n=9$，并取七位小数进行计算，可得

$$
\mathrm{e}\approx 2.718281.
$$

**例 8**　计算 $I=\int_0^1\mathrm{e}^{-x^2}\,\mathrm{d}x$，精确到 $0.0001$。

**解**　在 $\mathrm{e}^t$ 的展开式

$$
\mathrm{e}^t=1+\frac{t}{1!}+\frac{t^2}{2!}+\frac{t^3}{3!}+\cdots
$$

中，令 $t=-x^2$，得 $\mathrm{e}^{-x^2}$ 的展开式

$$
\mathrm{e}^{-x^2}=1-\frac{x^2}{1!}+\frac{x^4}{2!}-\frac{x^6}{3!}+\cdots,
$$

从 $0$ 到 $1$ 积分，得到

$$
I=1-\frac{1}{3}+\frac{1}{10}-\frac{1}{42}+\frac{1}{216}-\frac{1}{1320}+\frac{1}{9360}-\frac{1}{75600}+\cdots,
$$

这是交错级数，它的余和的绝对值小于余和第一项的绝对值，现由于 $\dfrac{1}{75600}<1.5\times 10^{-5}$，故取前七项即可，经计算可得

$$
I\approx 0.7468.
$$
