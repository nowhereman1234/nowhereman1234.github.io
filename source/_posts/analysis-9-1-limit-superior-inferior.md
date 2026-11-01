---
title: 数分笔记 · 9.1 上极限和下极限
date: 2026-11-01 21:15:24
updated: 2026-11-01 21:15:24
description: 第九章数项级数的预备知识：上极限与下极限的定义，以及三条基本性质和两道例题。
tags:
  - Analysis-Notes
categories:
  - Mathematics
---

> 对应《数学分析》（复旦大学数学系编，第四版·下册）第九章「数项级数」第 1 节。
> 这一节是本章的预备知识 —— 后面讨论级数收敛性时，很多判别法都建立在它上面。

## §1 预备知识：上极限和下极限

**定义（上极限与下极限）** 设为有界数列 $\{a_n\}$。去掉它最初 $k$ 项以后，剩下的仍是有界数列，记这个数列的上确界为 $\beta_k$，下确界为 $\alpha_k$，即

$$
\beta_k = \sup_{n>k}\{a_n\} = \sup\{a_{k+1}, a_{k+2}, a_{k+3}, \cdots\},
$$

$$
\alpha_k = \inf_{n>k}\{a_n\} = \inf\{a_{k+1}, a_{k+2}, a_{k+3}, \cdots\}.
$$

可见 $\alpha_k \le \beta_k$。令 $k=1,2,3,\cdots$，得到数列 $\{\beta_k\}$ 和 $\{\alpha_k\}$。$\{\beta_k\}$ 单调减少，$\{\alpha_k\}$ 单调增加，故两数列的极限都存在。称 $\{\beta_k\}$ 的极限为 $\{a_n\}$ 的**上极限**，记作 $H$；$\{\alpha_k\}$ 的极限为**下极限**，记作 $h$：

$$
H = \varlimsup_{n\to\infty} a_n = \lim_{k\to\infty}\sup_{n>k}\{a_n\} = \lim_{k\to\infty}\beta_k,
$$

$$
h = \varliminf_{n\to\infty} a_n = \lim_{k\to\infty}\inf_{n>k}\{a_n\} = \lim_{k\to\infty}\alpha_k.
$$

由于 $\alpha_k \le \beta_k$，得 $h \le H$。

如果数列 $\{a_n\}$ 无上界，约定 $H=\varlimsup_{n\to\infty} a_n = +\infty$；如果无下界，约定 $h = \varliminf_{n\to\infty} a_n = -\infty$。

---

**定理 1**　设 $H=\varlimsup\limits_{n\to\infty} a_n$，则

（i）当 $H$ 为有限时，对于 $H$ 的任何 $\varepsilon$ 邻域 $(H-\varepsilon, H+\varepsilon)$，在数列 $\{a_n\}$ 中有无穷多个项属于这个邻域，而在 $(H+\varepsilon, +\infty)$ 中最多只有有限多个项（包括一项也没有）；

（ii）当 $H=+\infty$ 时，对任何数 $N>0$，在 $\{a_n\}$ 中必有无穷多个项大于 $N$；

（iii）当 $H=-\infty$ 时，数列 $\{a_n\}$ 以 $-\infty$ 为极限。

**证明**　（i）当 $-\infty<H<+\infty$ 时，假设存在某一正数 $\varepsilon_0$，使得在 $\{a_n\}$ 中只有有限多个项大于 $H-\varepsilon_0$。那么必存在 $n_0$，当 $n>n_0$ 时，一切 $a_n$ 皆有 $a_n \le H-\varepsilon_0$。于是上确界

$$
\beta_n = \sup\{a_{n+1}, a_{n+2}, \cdots\} \le H-\varepsilon_0 \qquad (n>n_0),
$$

因此

$$
H = \varlimsup_{n\to\infty} a_n = \lim_{n\to\infty}\beta_n \le H-\varepsilon_0,
$$

这与定理的假设矛盾，这就证明了对任何 $\varepsilon>0$，在 $\{a_n\}$ 中必有无穷多个项大于 $H-\varepsilon$。

再来证明，在 $\{a_n\}$ 中最多只有有限多个项大于 $H+\varepsilon$。由于 $\lim\limits_{n\to\infty}\beta_n = H$，故存在 $N$，当 $n>N$ 时有 $\beta_n < H+\varepsilon$；而 $\beta_n$ 又是 $\{a_{n+1}, a_{n+2}, a_{n+3}, \cdots\}$ 的上确界，所以当 $n>N$ 时，对一切正整数 $k$ 成立 $a_{n+k} \le \beta_n < H+\varepsilon$。这样就证明了大于 $H+\varepsilon$ 的 $a_n$ 只可能有有限多个。

（ii）当 $H=+\infty$ 时，数列 $\{a_n\}$ 无上界，由此便获得所要的结论。

（iii）当 $H=-\infty$ 时，对任何 $G>0$，存在 $n_0$，当 $n>n_0$ 时

$$
a_{n+1} \le \beta_n < -G,
$$

这表明 $\{a_n\}$ 的极限为 $-\infty$。到此定理全部证毕。

---

**定理 2**　设 $h=\varliminf\limits_{n\to\infty} a_n$，则

（i）当 $h$ 为有限时，对于 $h$ 的任何 $\varepsilon$ 邻域 $(h-\varepsilon, h+\varepsilon)$，在数列 $\{a_n\}$ 中有无穷多个项属于这个邻域，而最多只有有限多个小于 $h-\varepsilon$（包括一项也没有）；

（ii）当 $h=-\infty$ 时，对任何数 $N>0$，在 $\{a_n\}$ 中有无穷多个项小于 $-N$；

（iii）当 $h=+\infty$ 时，数列 $\{a_n\}$ 的极限为 $+\infty$。

**证明**　与定理 1 完全相仿。

---

**定理 3**　设 $H$ 为 $\{a_n\}$ 的上极限，那么，在 $\{a_n\}$ 中必存在一个子列，其极限为 $H$，并且 $H$ 是 $\{a_n\}$ 中所有收敛子列的极限中的最大值。

设 $h$ 为 $\{a_n\}$ 的下极限，那么，在 $\{a_n\}$ 中必存在一个子列，其极限为 $h$，并且 $h$ 是 $\{a_n\}$ 中所有收敛子列的极限中的最小值。

**证明**　仅以上极限 $H$ 来证明如下。分三种情形来考察：

（i）$-\infty<H<+\infty$，由定理 1 知道，必有一个子列 $\{a_{n_k}\}$ 收敛于 $H$。此外，对任意 $\varepsilon>0$，在 $\{a_n\}$ 中只可能有有限多个项大于 $H+\varepsilon$，这就表明所有收敛子列的极限绝不会大于 $H+\varepsilon$，再由 $\varepsilon$ 的任意性，便得到所有收敛子列的极限必不大于 $H$。

（ii）当 $H=+\infty$ 时，按定理 1，存在子列 $a_{n_k}\to+\infty$，而其他一切收敛子列的极限当然不会大于 $+\infty$。

（iii）当 $H=-\infty$ 时，此时 $\lim\limits_{n\to\infty} a_n = -\infty$，故数列 $\{a_n\}$ 的一切子列都以 $-\infty$ 为极限。

这一开理表明，在一个有界数列 $\{a_n\}$ 中，它的所有收敛子列的极限所组成的数集必有最大值和最小值，并且这个最大（小）值正是 $\{a_n\}$ 的上（下）极限。

---

**推论**　$\lim\limits_{n\to\infty} a_n = A$（有限或无穷大）的充要条件为

$$
\varlimsup_{n\to\infty} a_n = \varliminf_{n\to\infty} a_n = A.
$$

这个推论容易从定理 3 得到。

---

**例 1**　$a_n = n+(-1)^n \quad (n=1,2,3,\cdots)$。

它只有两个具有极限的子数列（包括极限为 $\infty$ 的情形）：$a_{2k}$ 和 $a_{2k+1}\ (k=1,2,3,\cdots)$。前者极限为 $+\infty$，后者极限为 $0$，于是

$$
\varlimsup_{n\to\infty} a_n = +\infty, \quad \varliminf_{n\to\infty} a_n = 0.
$$

---

**例 2**　$a_n = \cos\dfrac{n}{4}\pi \quad (n=0,1,2,\cdots)$。

由于 $-1 \le \cos\dfrac{n}{4}\pi \le 1$，当 $n=8k\ (k=1,2,\cdots)$ 时，$a_{8k}\to 1\ (k\to\infty)$；当 $n=4(2k+1)\ (k=1,2,3,\cdots)$ 时，$a_{4(2k+1)}\to -1\ (k\to\infty)$。于是有

$$
\varlimsup_{n\to\infty} a_n = 1, \quad \varliminf_{n\to\infty} a_n = -1.
$$