---
title: 数分笔记 · 9.2 级数的收敛性和基本性质
date: 2026-11-01 21:26:52
updated: 2026-11-01 21:26:52
description: 第九章第 2 节：无穷级数的定义与部分和、四条基本性质，以及柯西收敛原理和五个例题。
tags:
  - Analysis-Notes
categories:
  - Mathematics
---

> 对应《数学分析》（复旦大学数学系编，第四版·下册）第九章「数项级数」第 2 节。
> 本节顺序完全按书中原序：定义 → 例 1 → 例 2 → 性质 1~4 → 柯西收敛原理 → 例 3~5。

## §2 级数的收敛性和基本性质

将一系列无穷多个数 $u_1,u_2,u_3,\cdots,u_n,\cdots$ 写成和式，即

$$
u_1+u_2+u_3+\cdots+u_n+\cdots
$$

这个和式就称为**无穷级数**，并记为 $\sum\limits_{n=1}^{\infty} u_n$。这仅仅是一种形式上的相加，这种加法是不是具有「和数」呢？这个「和数」的确切意义又是什么呢？为了回答这个问题，我们先令

$$
S_1=u_1,\quad S_2=u_1+u_2,\quad S_3=u_1+u_2+u_3,\quad \cdots
$$

$$
S_n=u_1+u_2+u_3+\cdots+u_n=\sum_{k=1}^{n} u_k,\quad \cdots
$$

这样，对任何一个无穷级数 $\sum\limits_{n=1}^{\infty} u_n$，总可以作出一个数列 $S_n=\sum\limits_{k=1}^{n} u_k\ (n=1,2,3,\cdots)$，并称 $S_n$ 为级数 $\sum\limits_{n=1}^{\infty} u_n$ 的 **$n$ 次部分和**（简称部分和），称数列 $\{S_n\}$ 为级数的**部分和数列**。反之，从一个数列 $\{S_n\}$，也可以作出一个级数，使这个级数的部分和数列恰恰就是 $\{S_n\}$，实际上这只要取

$$
u_1=S_1,\quad u_2=S_2-S_1,\quad u_3=S_3-S_2,\quad \cdots
$$

$$
u_n=S_n-S_{n-1},\quad \cdots,
$$

而级数 $\sum\limits_{n=1}^{\infty} u_n$ 就是所要求的级数。

**定义**　若级数 $\sum\limits_{n=1}^{\infty} u_n$ 的部分和数列 $\{S_n\}$ 收敛于有限值 $S$，即

$$
\lim_{n\to\infty} S_n=\lim_{n\to\infty}\sum_{k=1}^{n} u_k=S,
$$

则称级数 $\sum\limits_{n=1}^{\infty} u_n$ **收敛**，记为

$$
\sum_{n=1}^{\infty} u_n=S,
$$

并称此值 $S$ 为级数的**和数**。若部分和数列 $\{S_n\}$ 发散，则称级数 $\sum\limits_{n=1}^{\infty} u_n$ **发散**。当级数收敛时，又称

$$
r_n=S-S_n=\sum_{k=n+1}^{\infty} u_k=u_{n+1}+u_{n+2}+u_{n+3}+\cdots
$$

为级数的**余和**。

---

**例 1**　级数 $\sum\limits_{n=1}^{\infty}\left(\dfrac{1}{2}\right)^{n-1}$ 的部分和

$$
S_n=\sum_{k=1}^{n}\left(\frac{1}{2}\right)^{k-1}=1+\frac{1}{2}+\cdots+\left(\frac{1}{2}\right)^{n-1}
$$

$$
=\frac{1-\left(\dfrac{1}{2}\right)^{n}}{1-\dfrac{1}{2}}=2\left[1-\left(\frac{1}{2}\right)^{n}\right].
$$

由于

$$
\lim_{n\to\infty} S_n=\lim_{n\to\infty} 2\left[1-\left(\frac{1}{2}\right)^{n}\right]=2,
$$

所以级数 $\sum\limits_{n=1}^{\infty}\left(\dfrac{1}{2}\right)^{n-1}$ 收敛，其和为 $2$，亦即

$$
\sum_{n=1}^{\infty}\left(\frac{1}{2}\right)^{n-1}=2.
$$

---

**例 2**　级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}=1-1+1-1+\cdots$ 的部分和数列为

$$
S_1=1,\quad S_2=0,\quad \cdots,\quad S_{2n-1}=1,\quad S_{2n}=0,\quad \cdots,
$$

部分和数列发散，故级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}$ 发散。

由此可见，研究无穷级数的收敛问题，实质上就是研究部分和数列的收敛问题，这就能够应用已经知道的有关数列极限的知识来研究无穷级数。

首先，给出收敛级数的一些基本性质。

---

**性质 1**　若级数 $\sum\limits_{n=1}^{\infty} u_n$ 收敛，$a$ 为任一常数，则 $\sum\limits_{n=1}^{\infty} a u_n$ 亦收敛，并且有

$$
\sum_{n=1}^{\infty} a u_n=a\sum_{n=1}^{\infty} u_n.
$$

**证明**　设级数 $\sum\limits_{n=1}^{\infty} u_n$ 的部分和为 $S_n$，由假设

$$
\lim_{n\to\infty} S_n=S,
$$

$S$ 为一有限数。又设级数 $\sum\limits_{n=1}^{\infty} a u_n$ 的部分和为 $S_n'$，显然有 $S_n'=a S_n$，再按数列极限性质知道

$$
\lim_{n\to\infty} S_n'=\lim_{n\to\infty} a S_n=a S,
$$

这就是

$$
\sum_{n=1}^{\infty} a u_n=a S=a\sum_{n=1}^{\infty} u_n.
$$

---

**性质 2**　若两个级数 $\sum\limits_{n=1}^{\infty} u_n$ 和 $\sum\limits_{n=1}^{\infty} v_n$ 都收敛，则 $\sum\limits_{n=1}^{\infty}(u_n \pm v_n)$ 也收敛，并且有

$$
\sum_{n=1}^{\infty}(u_n \pm v_n)=\sum_{n=1}^{\infty} u_n \pm \sum_{n=1}^{\infty} v_n.
$$

利用数列极限的运算法则即可获得证明。

---

**性质 3**　一个收敛级数 $\sum\limits_{n=1}^{\infty} u_n$，对其项任意加括号后所成级数

$$
(u_1+u_2+\cdots+u_{i_1})+(u_{i_1+1}+\cdots+u_{i_2})+\cdots
$$

仍为收敛，且其和不变。

**证明**　设 $\sum\limits_{n=1}^{\infty} u_n$ 的部分和数列为 $\{S_n\}$，加括号后的级数的部分和数列为 $\{A_n\}$，明显有

$$
A_1=u_1+u_2+\cdots+u_{i_1}=S_{i_1},
$$

$$
A_2=(u_1+u_2+\cdots+u_{i_1})+(u_{i_1+1}+u_{i_1+2}+\cdots+u_{i_2})=S_{i_2},
$$

$$
\cdots
$$

$$
A_n=(u_1+u_2+\cdots+u_{i_1})+(u_{i_1+1}+u_{i_1+2}+\cdots+u_{i_2})+\cdots+(u_{i_{n-1}+1}+u_{i_{n-1}+2}+\cdots+u_{i_n})=S_{i_n},
$$

$$
\cdots,
$$

可见 $\{A_n\}$ 实际上是 $\{S_n\}$ 的一个子数列，故由 $\{S_n\}$ 的收敛性立即推得 $\{A_n\}$ 也收敛，且其极限值相同。

要注意的是：**加括号后的级数为收敛时，不能断言原来未加括号的级数也收敛**，例如级数

$$
1-1+1-1+\cdots
$$

加括号后成为

$$
(1-1)+(1-1)+(1-1)+\cdots,
$$

它收敛于零，但原来未加括号的级数是发散的。

---

**性质 4（收敛的必要条件）**　若级数 $\sum\limits_{n=1}^{\infty} u_n$ 收敛，则 $u_n \to 0\ (n\to\infty)$。亦即收敛级数的一般项必趋于 $0$。

**证明**　设级数 $\sum\limits_{n=1}^{\infty} u_n$ 的部分和数列为 $\{S_n\}$，且 $\lim\limits_{n\to\infty} S_n=S$，由于

$$
u_n=S_n-S_{n-1},
$$

得

$$
\lim_{n\to\infty} u_n=\lim_{n\to\infty}(S_n-S_{n-1})=S-S=0.
$$

这一性质告诉我们，当考察一个级数是否收敛时，首先应该考察当 $n\to\infty$ 时，这个级数的一般项 $u_n$ 是否趋于零，如果 $u_n$ 不趋于零，那么立即可以断言这个级数是发散的。但要注意的是：**一般项 $u_n$ 趋于零只是级数收敛的必要条件，不是充分条件**。例如级数

$$
1+\underbrace{\frac{1}{2}+\frac{1}{2}}_{共2项}+\underbrace{\frac{1}{3}+\frac{1}{3}+\frac{1}{3}}_{共3项}+\cdots+\underbrace{\frac{1}{n}+\frac{1}{n}+\cdots+\frac{1}{n}}_{共n项}+\cdots
$$

它的一般项 $u_n\to 0\ (n\to\infty)$，但此级数是发散的。这是因为，如果这个级数是收敛的，那么加括号后的级数

$$
1+\left(\frac{1}{2}+\frac{1}{2}\right)+\left(\frac{1}{3}+\frac{1}{3}+\frac{1}{3}\right)+\cdots+\left(\frac{1}{n}+\frac{1}{n}+\cdots+\frac{1}{n}\right)+\left(\frac{1}{n+1}+\cdots\right)+\cdots
$$

也应该是收敛的，但此级数中，每个括号内的数相加后等于 $1$，因而它是发散的。

---

**定理（柯西收敛原理）**　级数 $\sum\limits_{n=1}^{\infty} u_n$ 收敛的充要条件是：对任意给定的正数 $\varepsilon$，总存在 $N$，使得当 $n>N$ 时，对于任意的正整数 $p=1,2,3,\cdots$，都成立着

$$
|u_{n+1}+u_{n+2}+\cdots+u_{n+p}|<\varepsilon.
$$

这个充要条件也可以换一种方式来叙述：对任意给定的正数 $\varepsilon$，总存在 $N$，使得对于任何两个大于 $N$ 的正整数 $m$ 及 $n$（不妨假设 $n<m$），都成立

$$
|S_m-S_n|=|u_{n+1}+u_{n+2}+\cdots+u_m|<\varepsilon,
$$

这里 $S_n$ 为级数 $\sum\limits_{n=1}^{\infty} u_n$ 的部分和。

定理的证明是很明显的，因为这就是数列 $\{S_n\}$ 收敛的充要条件（亦即数列的柯西收敛原理）。

由柯西收敛原理立即知道，在一个无穷级数内，去掉或者添上有限多个项，不会影响此级数的敛散性。

---

**例 3**　利用柯西收敛原理来判断级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n^{2}}$ 的收敛性。

**解**　对任何正整数 $p$，

$$
|S_{n+p}-S_n|=\frac{1}{(n+1)^{2}}+\frac{1}{(n+2)^{2}}+\cdots+\frac{1}{(n+p)^{2}}
$$

$$
<\frac{1}{n(n+1)}+\frac{1}{(n+1)(n+2)}+\cdots+\frac{1}{(n+p-1)(n+p)}
$$

$$
=\left(\frac{1}{n}-\frac{1}{n+1}\right)+\left(\frac{1}{n+1}-\frac{1}{n+2}\right)+\cdots+\left(\frac{1}{n+p-1}-\frac{1}{n+p}\right)=\frac{1}{n}-\frac{1}{n+p}
$$

$$
<\frac{1}{n},
$$

于是对任意 $\varepsilon>0$，存在 $N=\left[\dfrac{1}{\varepsilon}\right]$，当 $n>N$ 时，对任何 $p=1,2,3,\cdots$，总成立

$$
|S_{n+p}-S_n|<\frac{1}{n}<\varepsilon,
$$

按柯西收敛原理，级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n^{2}}$ 收敛。

---

**例 4**　判别级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n}$ 发散。

**解**　考虑

$$
|S_{n+p}-S_n|=\frac{1}{n+1}+\frac{1}{n+2}+\cdots+\frac{1}{n+p}
$$

$$
>\frac{1}{n+p}+\frac{1}{n+p}+\cdots+\frac{1}{n+p}\qquad(\text{共 } p \text{ 项})
$$

$$
=\frac{p}{n+p}.
$$

今特别取 $p=n$，得

$$
|S_{2n}-S_n|>\frac{1}{2},
$$

故级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n}$ 必为发散。这是因为如果取 $\varepsilon=\dfrac{1}{2}$，不论 $n$ 怎样大，总不能使

$$
|S_{2n}-S_n|<\frac{1}{2}.
$$

---

**例 5**　证明级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n+1}}{n}$ 收敛。

**证明**　对任何正整数 $p$，有

$$
|S_{n+p}-S_n|=\frac{1}{n+1}-\frac{1}{n+2}+\frac{1}{n+3}-\cdots+(-1)^{p-1}\frac{1}{n+p},
$$

当 $p$ 是奇数时，

$$
|S_{n+p}-S_n|=\frac{1}{n+1}-\left(\frac{1}{n+2}-\frac{1}{n+3}\right)-\cdots-\left(\frac{1}{n+p-1}-\frac{1}{n+p}\right)
$$

$$
<\frac{1}{n+1},
$$

当 $p$ 是偶数时，

$$
|S_{n+p}-S_n|=\frac{1}{n+1}-\left(\frac{1}{n+2}-\frac{1}{n+3}\right)-\cdots-\left(\frac{1}{n+p-2}-\frac{1}{n+p-1}\right)-\frac{1}{n+p}
$$

$$
<\frac{1}{n+1},
$$

于是对任何正数 $\varepsilon$，取 $N=\left[\dfrac{1}{\varepsilon}\right]+1$，那么当 $n>N$ 时总成立

$$
|S_{n+p}-S_n|<\varepsilon.
$$

故级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n+1}}{n}$ 收敛。

最后还要指出，在具体问题中直接利用柯西收敛原理来判断级数的收敛性，往往是相当困难的。所以，在级数的理论中还需要建立一系列的判别法，利用它们就可以比较简便地来判别相当广泛的一类级数的收敛性。建立这些判别法，是以下各节的主要任务之一。
