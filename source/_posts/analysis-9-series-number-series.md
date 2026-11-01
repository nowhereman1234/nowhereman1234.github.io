---
title: 数分笔记 · 第九章 数项级数
date: 2026-11-01 22:29:16
updated: 2026-11-01 22:29:16
description: 第九章数项级数的复习提纲：5 节、19 个专名定理与判别法（含证明）、19 道例题。
categories:
  - [Mathematics, 数学分析]
---
<style>
/* 数分笔记的排版微调：只在本页生效（样式内嵌在正文里，其他文章不受影响） */
#article-container h2 {
  margin-top: 3.2em;
  margin-bottom: 1.2em;
  padding-top: .7em;
  border-top: 1px solid var(--hr-color, #C3E3D2);
}
#article-container h3 {
  margin-top: 2.6em;
  margin-bottom: 1.1em;
}
#article-container p {
  margin-bottom: 1.2em;
}
#article-container .katex-display {
  margin: .95em 0;
}
#article-container hr {
  margin: 2.8em 0;
}
</style>
## §1 预备知识：上极限和下极限

### 定义与定理

**定义**　设 $\{a_n\}$ 为有界数列。去掉它最初 $k$ 项后，剩下的仍是一个有界数列，记这个数列的上确界为 $\beta_k$，下确界为 $\alpha_k$，亦即

$$
\beta_k=\sup_{n>k}\{a_n\}=\sup\{a_{k+1},a_{k+2},a_{k+3},\cdots\},
$$

$$
\alpha_k=\inf_{n>k}\{a_n\}=\inf\{a_{k+1},a_{k+2},a_{k+3},\cdots\}.
$$

可见 $\alpha_k\le\beta_k$。令 $k=1,2,3,\cdots$，于是得到一列 $\{\beta_k\}$ 和一列 $\{\alpha_k\}$。显然数列 $\{\beta_k\}$ 是单调减少的，$\{\alpha_k\}$ 是单调增加的，所以这两个数列的极限都存在。我们称 $\{\beta_k\}$ 的极限是 $\{a_n\}$ 的上极限，记它是 $H$；$\{\alpha_k\}$ 的极限是 $\{a_n\}$ 的下极限，记它是 $h$，并分别将上极限和下极限记为 $\varlimsup\limits_{n\to\infty}a_n$ 和 $\varliminf\limits_{n\to\infty}a_n$，也就是

$$
H=\varlimsup_{n\to\infty}a_n=\lim_{k\to\infty}\sup_{n>k}\{a_n\}=\lim_{k\to\infty}\beta_k,
$$

$$
h=\varliminf_{n\to\infty}a_n=\lim_{k\to\infty}\inf_{n>k}\{a_n\}=\lim_{k\to\infty}\alpha_k.
$$

由于 $\alpha_k\le\beta_k$，得 $h\le H$。

如果数列 $\{a_n\}$ 无上界，我们就说 $H=\varlimsup\limits_{n\to\infty}a_n=+\infty$；如果数列 $\{a_n\}$ 无下界，就说 $h=\varliminf\limits_{n\to\infty}a_n=-\infty$。

### 例题

**例 1**　$a_n=n+(-1)^{n}\quad(n=1,2,3,\cdots)$。

**解**　它只有两个具有极限的子数列（包括极限为 $\infty$ 的情形）：$a_{2k}$ 和 $a_{2k+1}\ (k=1,2,3,\cdots)$。前者极限为 $+\infty$，后者极限为 $0$，于是

$$
\varlimsup_{n\to\infty}a_n=+\infty,\qquad \varliminf_{n\to\infty}a_n=0.
$$

**例 2**　$a_n=\cos\dfrac{n}{4}\pi\quad(n=0,1,2,\cdots)$。

**解**　由于 $-1\le\cos\dfrac{n}{4}\pi\le 1$，当 $n=8k\ (k=1,2,\cdots)$ 时，$a_{8k}\to 1\ (k\to\infty)$；当 $n=4(2k+1)\ (k=1,2,3,\cdots)$ 时，$a_{4(2k+1)}\to-1\ (k\to\infty)$。于是有

$$
\varlimsup_{n\to\infty}a_n=1,\qquad \varliminf_{n\to\infty}a_n=-1.
$$

---

## §2 级数的收敛性和基本性质

### 定义与定理

**定义**　若级数 $\sum\limits_{n=1}^{\infty}u_n$ 的部分和数列 $\{S_n\}$ 收敛于有限值 $S$，即

$$
\lim_{n\to\infty}S_n=\lim_{n\to\infty}\sum_{k=1}^{n}u_k=S,
$$

则称级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛，记为

$$
\sum_{n=1}^{\infty}u_n=S,
$$

并称此值 $S$ 为级数的和数。若部分和数列 $\{S_n\}$ 发散，则称级数 $\sum\limits_{n=1}^{\infty}u_n$ 发散。当级数收敛时，又称

$$
r_n=S-S_n=\sum_{k=n+1}^{\infty}u_k=u_{n+1}+u_{n+2}+u_{n+3}+\cdots
$$

为级数的余和。

**性质 4（收敛的必要条件）**　若级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛，则 $u_n\to 0\ (n\to\infty)$。亦即收敛级数的一般项必趋于 $0$。

**证明**　设级数 $\sum\limits_{n=1}^{\infty}u_n$ 的部分和数列为 $\{S_n\}$，且 $\lim\limits_{n\to\infty}S_n=S$，由于

$$
u_n=S_n-S_{n-1},
$$

得

$$
\lim_{n\to\infty}u_n=\lim_{n\to\infty}(S_n-S_{n-1})=S-S=0.
$$

**定理（柯西收敛原理）**　级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛的充要条件是：对任意给定的正数 $\varepsilon$，总存在 $N$，使得当 $n>N$ 时，对于任意的正整数 $p=1,2,3,\cdots$，都成立着

$$
|u_{n+1}+u_{n+2}+\cdots+u_{n+p}|<\varepsilon.
$$

这个充要条件也可以换一种方式来叙述：对任意给定的正数 $\varepsilon$，总存在 $N$，使得对于任何两个大于 $N$ 的正整数 $m$ 及 $n$（不妨假设 $n<m$），都成立

$$
|S_m-S_n|=|u_{n+1}+u_{n+2}+\cdots+u_m|<\varepsilon,
$$

这里 $S_n$ 为级数 $\sum\limits_{n=1}^{\infty}u_n$ 的部分和。

**证明**　定理的证明是很明显的，因为这就是数列 $\{S_n\}$ 收敛的充要条件（亦即数列的柯西收敛原理）。

由柯西收敛原理立即知道，在一个无穷级数内，去掉或者添上有限多个项，不会影响此级数的敛散性。

### 例题

**例 1**　级数 $\sum\limits_{n=1}^{\infty}\left(\dfrac{1}{2}\right)^{n-1}$ 的部分和

$$
S_n=\sum_{k=1}^{n}\left(\frac{1}{2}\right)^{k-1}=1+\frac{1}{2}+\cdots+\left(\frac{1}{2}\right)^{n-1}
$$

$$
=\frac{1-\left(\dfrac{1}{2}\right)^{n}}{1-\dfrac{1}{2}}=2\left[1-\left(\frac{1}{2}\right)^{n}\right].
$$

由于

$$
\lim_{n\to\infty}S_n=\lim_{n\to\infty}2\left[1-\left(\frac{1}{2}\right)^{n}\right]=2,
$$

所以级数 $\sum\limits_{n=1}^{\infty}\left(\dfrac{1}{2}\right)^{n-1}$ 收敛，其和为 $2$，亦即

$$
\sum_{n=1}^{\infty}\left(\frac{1}{2}\right)^{n-1}=2.
$$

**例 2**　级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}=1-1+1-1+\cdots$ 的部分和数列为

$$
S_1=1,\quad S_2=0,\quad \cdots,\quad S_{2n-1}=1,\quad S_{2n}=0,\quad \cdots,
$$

部分和数列发散，故级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}$ 发散。

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

---

## §3 正项级数

### 定义与定理

**基本定理**　如果正项级数的部分和数列具有上界，则此级数收敛。如果正项级数的部分和数列无上界，则此级数发散到 $+\infty$。

**正项级数的比较判别法**　若两个正项级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 之间成立着关系：存在常数 $c>0$，使

$$
u_n\le c v_n\qquad(n=1,2,3,\cdots),
$$

或者自某项以后（即存在 $N$，当 $n>N$ 时）成立以上关系式，那么

（i）当级数 $\sum\limits_{n=1}^{\infty}v_n$ 收敛时，级数 $\sum\limits_{n=1}^{\infty}u_n$ 亦收敛。

（ii）当级数 $\sum\limits_{n=1}^{\infty}u_n$ 发散时，级数 $\sum\limits_{n=1}^{\infty}v_n$ 亦发散。

**证明**　设 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 的部分和分别为 $U_n$ 和 $V_n$，于是成立着 $U_n\le c V_n$，当 $\sum\limits_{n=1}^{\infty}v_n$ 收敛时，$V_n$ 为有界，故 $U_n$ 亦必有界，得知 $\sum\limits_{n=1}^{\infty}u_n$ 收敛。当 $\sum\limits_{n=1}^{\infty}u_n$ 发散时，$U_n$ 无上界，于是 $V_n$ 亦无上界，故 $\sum\limits_{n=1}^{\infty}v_n$ 发散。

**比较判别法（极限形式）**　给定两正项级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$，若有

$$
\lim_{n\to\infty}\frac{u_n}{v_n}=l\qquad(0<l<+\infty),
$$

那么这两个级数同时收敛或同时发散。

**证明**　利用极限存在的定义，立即可知，存在 $N$，当 $n>N$ 时成立着

$$
\frac{l}{2}v_n<u_n<\frac{3}{2}lv_n,
$$

再利用比较判别法，便证明了结论。

**柯西判别法**　设 $\sum\limits_{n=1}^{\infty}u_n$ 为正项级数。若从某一项起（即存在 $N$，当 $n>N$ 时）成立着 $\sqrt[n]{u_n}\le q<1$（$q$ 为某确定的常数），则级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛。若从某一项起成立着 $\sqrt[n]{u_n}\ge 1$，则级数 $\sum\limits_{n=1}^{\infty}u_n$ 发散。

**证明**　若当 $n>N$ 时成立 $\sqrt[n]{u_n}\le q<1$，那么有

$$
u_n\le q^{n},
$$

而级数 $\sum\limits_{n=1}^{\infty}q^{n}\ (q<1)$ 是收敛的，再根据比较判别法得知 $\sum\limits_{n=1}^{\infty}u_n$ 收敛。

若当 $n>N$ 时成立 $\sqrt[n]{u_n}\ge 1$，那么有

$$
u_n\ge 1,
$$

因此级数的一般项 $u_n$ 不趋于零，故级数 $\sum\limits_{n=1}^{\infty}u_n$ 发散。

**柯西判别法（极限形式）**　对于正项级数 $\sum\limits_{n=1}^{\infty}u_n$，设

$$
r=\varlimsup_{n\to\infty}\sqrt[n]{u_n},
$$

那么，当 $r<1$ 时此级数必为收敛，当 $r>1$ 时此级数发散，而当 $r=1$ 时此级数的收敛性需进一步判定。

**证明**　（i）先证明当 $r<1$ 时的情形。

由于 $r<1$，总可选取适当小的一个正数 $\varepsilon_0$ 使 $r+\varepsilon_0<1$。再按照本章 §1 上（下）极限的定理 1，在数列 $\{\sqrt[n]{u_n}\}$ 中最多只有有限多个项，其 $n$ 次根大于或等于 $r+\varepsilon_0$，换句话说，存在正整数 $N$，当 $n>N$ 时有

$$
\sqrt[n]{u_n}<r+\varepsilon_0<1.
$$

应用刚才已经证明的柯西判别法，这里 $q=r+\varepsilon_0$，立即得知，级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛。

（ii）再证明 $r>1$ 时的情形。

由于 $r>1$，总可选取适当小的一个正数 $\varepsilon_0$ 使 $r-\varepsilon_0>1$。再按照本章 §1 上（下）极限定理 1，在数列中将有无穷多个项，它的 $n$ 次根大于或等于 $r-\varepsilon_0$，换句话说，将有无穷多个如此的 $u_n$，记它们为 $u_{n_k}\ (k=1,2,3,\cdots)$，使得

$$
u_{n_k}>(r-\varepsilon_0)^{n_k}>1,
$$

于是，级数 $\sum\limits_{n=1}^{\infty}u_n$ 的一般项 $u_n$ 必不趋于零，因而此级数发散。

（iii）最后考虑 $r=1$ 时的情形。

为了表明级数 $\sum\limits_{n=1}^{\infty}u_n$ 的敛散性尚需进一步判定，我们举两个例子说明之。例如级数

$$
\sum_{n=1}^{\infty}\frac{1}{n}\quad\text{和}\quad\sum_{n=1}^{\infty}\frac{1}{n^{2}},
$$

这两个级数的 $r$ 都等于 $1$，但前者发散，后者收敛。

**达朗贝尔判别法**　设 $\sum\limits_{n=1}^{\infty}u_n$ 为正项级数，若从某一项起成立着 $\dfrac{u_n}{u_{n-1}}\le q<1$（$q$ 为确定的数，$n>N$），则级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛。若从某一项起 $\dfrac{u_n}{u_{n-1}}\ge 1\ (n>N)$，则级数 $\sum\limits_{n=1}^{\infty}u_n$ 发散。

它的证明留给读者去完成。

**达朗贝尔判别法（极限形式）**　对于正项级数 $\sum\limits_{n=1}^{\infty}u_n$，当

$$
\varlimsup_{n\to\infty}\frac{u_n}{u_{n-1}}=\overline{r}<1
$$

时，级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛。当

$$
\varliminf_{n\to\infty}\frac{u_n}{u_{n-1}}=\underline{r}>1
$$

时，级数 $\sum\limits_{n=1}^{\infty}u_n$ 发散。而当 $\overline{r}=1$ 或者 $\underline{r}=1$ 时，级数 $\sum\limits_{n=1}^{\infty}u_n$ 的敛散性需进一步判定。

它的证明和柯西判别法的极限形式的证明完全相仿。这里不重复了。

**柯西积分判别法**　对于正项级数 $\sum\limits_{n=1}^{\infty}u_n$，设 $\{u_n\}$ 为单调减少的数列，作一个连续的单调减少的正值函数 $f(x)\ (x>0)$，使得当 $x$ 等于正整数 $n$ 时，其函数值恰为 $u_n$，亦即 $f(n)=u_n$。那么，级数 $\sum\limits_{n=1}^{\infty}u_n$ 与数列 $\{A_n\}$，这里 $A_n=\int_{1}^{n}f(x)\,\mathrm{d}x$，同为收敛或同为发散。

**证明**　由于

$$
u_{k-1}=\int_{k-1}^{k}u_{k-1}\,\mathrm{d}x\ge\int_{k-1}^{k}f(x)\,\mathrm{d}x\ge\int_{k-1}^{k}u_k\,\mathrm{d}x=u_k,
$$

所以

$$
\sum_{k=2}^{n}u_{k-1}\ge\sum_{k=2}^{n}\int_{k-1}^{k}f(x)\,\mathrm{d}x=\int_{1}^{n}f(x)\,\mathrm{d}x\ge\sum_{k=2}^{n}u_k,
$$

由此即得证明。

### 例题

**例 1**　判定级数 $\sum\limits_{n=1}^{\infty}\sin\dfrac{1}{n}$ 的敛散性。

**解**　因为

$$
\lim_{n\to\infty}\frac{\sin\dfrac{1}{n}}{\dfrac{1}{n}}=1,
$$

而级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n}$ 是发散的。由比较判别法知道，级数 $\sum\limits_{n=1}^{\infty}\sin\dfrac{1}{n}$ 亦发散。

**例 2**　判定级数 $\sum\limits_{n=1}^{\infty}\left(\dfrac{\alpha}{n}\right)^{n}\ (\alpha>0)$ 的敛散性。

**解**　因为

$$
\lim_{n\to\infty}\sqrt[n]{\left(\frac{\alpha}{n}\right)^{n}}=\lim_{n\to\infty}\frac{\alpha}{n}=0,
$$

根据柯西判别法的极限形式，此时 $r=0<1$，故级数收敛。

**例 3**　考察级数 $\sum\limits_{n=1}^{\infty}\dfrac{\alpha^{n}}{n^{s}}\ (s>0,\ \alpha>0)$ 的敛散性。

**解**　应用达朗贝尔判别法

$$
\lim_{n\to\infty}\frac{u_{n+1}}{u_n}=\lim_{n\to\infty}\frac{\alpha^{n+1}}{(n+1)^{s}}\cdot\frac{n^{s}}{\alpha^{n}}=\alpha\cdot\lim_{n\to\infty}\left(\frac{n}{n+1}\right)^{s}=\alpha,
$$

因此，当 $\alpha<1$ 时级数收敛。当 $\alpha>1$ 时级数发散。而当 $\alpha=1$ 时，级数为 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n^{s}}$，它的敛散性需要进一步判断（参见本节例 5）。

**例 4**　考察级数 $\sum\limits_{n=1}^{\infty}x^{n}\ (x\ge 0)$ 的敛散性。

**解**　此级数是一个几何级数，这里利用柯西判别法来判别它的敛散性。因为

$$
\lim_{n\to\infty}\sqrt[n]{x^{n}}=x,
$$

按照柯西判别法，当 $x<1$ 时级数收敛，当 $x>1$ 时级数发散。而当 $x=1$ 时，级数为 $1+1+1+\cdots$，显然是发散的。

**例 5**　考察级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n^{p}}\ (p>0)$ 的敛散性，这个级数通常称为 $p$ 级数。

**解**　作 $f(x)=\dfrac{1}{x^{p}}$，考虑积分（$p\ne 1$）。

$$
\lim_{n\to\infty}\int_{1}^{n}\frac{1}{x^{p}}\,\mathrm{d}x=\frac{1}{1-p}\lim_{n\to\infty}\left(n^{1-p}-1\right)
$$

$$
=\begin{cases}\dfrac{1}{p-1}, & \text{当 } p>1\ \text{（收敛）},\\[2mm] \infty, & \text{当 } p<1\ \text{（发散）},\end{cases}
$$

而当 $p=1$ 时，级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{n}$ 已知是发散的。因此对于 $p$ 级数来说，当 $0<p\le 1$ 时发散，当 $p>1$ 时收敛。

**例 6**　证明级数 $\sum\limits_{n=2}^{\infty}\dfrac{1}{n\ln n}$ 发散，级数 $\sum\limits_{n=2}^{\infty}\dfrac{1}{n(\ln n)^{2}}$ 收敛。

**证明**　因为

$$
\lim_{n\to\infty}\int_{2}^{n}\frac{\mathrm{d}x}{x\ln x}=\lim_{n\to\infty}\left[\ln\ln n-\ln\ln 2\right]=\infty,
$$

所以级数 $\sum\limits_{n=2}^{\infty}\dfrac{1}{n\ln n}$ 为发散。又因为

$$
\lim_{n\to\infty}\int_{2}^{n}\frac{\mathrm{d}x}{x(\ln x)^{2}}=\lim_{n\to\infty}\left(\frac{1}{\ln 2}-\frac{1}{\ln n}\right)=\frac{1}{\ln 2},
$$

所以级数 $\sum\limits_{n=2}^{\infty}\dfrac{1}{n(\ln n)^{2}}$ 为收敛。

---

## §4 任意项级数

### 定义与定理

**定义**　对于级数 $\sum\limits_{n=1}^{\infty}u_n$，如果其每一项加上绝对值以后所组成的正项级数 $\sum\limits_{n=1}^{\infty}|u_n|$ 收敛，则称级数 $\sum\limits_{n=1}^{\infty}u_n$ 为**绝对收敛**。如果 $\sum\limits_{n=1}^{\infty}|u_n|$ 发散但 $\sum\limits_{n=1}^{\infty}u_n$ 却是收敛的，则称级数 $\sum\limits_{n=1}^{\infty}u_n$ 为**条件收敛**。条件收敛的级数是存在的，例如级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n+1}}{n}$ 就是一个条件收敛级数。

**定义**　凡正负项相间的级数，也就是形如

$$
u_1-u_2+u_3-u_4+\cdots+(-1)^{n+1}u_n+\cdots
$$

的级数，其中 $u_n>0\ (n=1,2,\cdots)$，称为**交错级数**。

**莱布尼茨定理**　如果一个交错级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}u_n$ 的项满足以下两个条件：

（i）单调减少 $u_n\ge u_{n+1}\quad(n=1,2,3,\cdots)$；

（ii）$\lim\limits_{n\to\infty}u_n=0$，

则

$1^{\circ}$ 级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}u_n$ 收敛；

$2^{\circ}$ 它的余和 $r_n$ 的符号与余和第一项的符号相同，并且余和的绝对值不超过余和的第一项的绝对值：$|r_n|\le u_{n+1}$。

注：凡满足定理条件（i）、（ii）的交错级数称为莱布尼茨型级数。于是定理又可以这样叙述：莱布尼茨型的级数必收敛，且其余和的符号相同于余和第一项的符号，余和的绝对值不超过余和第一项的绝对值。

**证明**　设级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}u_n$ 的部分和为 $S_n$，现在考察由偶数个项所组成的部分和数列 $\{S_{2m}\}$ 及由奇数个项所组成的部分和数列 $\{S_{2m+1}\}$。

对于偶数个项的部分和数列 $\{S_{2m}\}$ 有

$$
S_{2m}=(u_1-u_2)+(u_3-u_4)+\cdots+(u_{2m-1}-u_{2m}),
$$

$$
S_{2m+2}=(u_1-u_2)+(u_3-u_4)+\cdots+(u_{2m-1}-u_{2m})+(u_{2m+1}-u_{2m+2}),
$$

由定理的条件（i），即对一切 $n$ 成立 $u_{n-1}-u_n\ge 0$，所以数列 $\{S_{2m}\}$ 为单调增加的数列。另一方面

$$
S_{2m}=u_1-(u_2-u_3)-\cdots-(u_{2m-2}-u_{2m-1})-u_{2m}\le u_1,
$$

可见数列 $\{S_{2m}\}$ 是有界的。按照单调有界数列必有极限的定理，数列 $\{S_{2m}\}$ 极限存在

$$
\lim_{m\to\infty}S_{2m}=S.
$$

对于奇数个项的部分和数列 $\{S_{2m+1}\}$ 有

$$
S_{2m+1}=S_{2m}+u_{2m+1}.
$$

再由定理的条件（ii），得到

$$
\lim_{m\to\infty}S_{2m+1}=\lim_{m\to\infty}S_{2m}+\lim_{m\to\infty}u_{2m+1}=S.
$$

这样一来，证明了对数列 $\{S_n\}$ 而言，它的两个子列 $\{S_{2m}\}$ 及 $\{S_{2m+1}\}$ 都收敛于 $S$，不难证明数列 $\{S_n\}$ 本身亦应收敛于 $S$，到此便证明了定理的第一个论断，莱布尼茨型级数必收敛。

由刚才的证明容易知道，对于莱布尼茨型级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}u_n$ 必有

$$
0\le\sum_{n=1}^{\infty}(-1)^{n+1}u_n\le u_1,
$$

同样地，对于形如 $\sum\limits_{n=1}^{\infty}(-1)^{n}u_n$ 的莱布尼茨型级数，只要在上式乘上一个 $-1$ 的因子，就得到

$$
-u_1\le\sum_{n=1}^{\infty}(-1)^{n}u_n\le 0.
$$

这样便获得了一个重要事实：莱布尼茨型级数，其和的符号与这个级数的第一项的符号相同，其和的绝对值将不超过第一项的绝对值。

利用上面的这一事实，立即可以证明定理的第二个论断：因为莱布尼茨型级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}u_n$ 的余和 $r_n=\sum\limits_{k=n+1}^{\infty}(-1)^{k+1}u_k$ 也是一个莱布尼茨型级数，所以余和 $r_n$ 的符号与余和第一项的符号相同，并且 $|r_n|\le u_{n+1}$。到此，定理全部证明完毕。

**阿贝尔变换**　对下面的和数

$$
S=\sum_{i=1}^{m}a_i b_i=a_1b_1+a_2b_2+\cdots+a_m b_m,
$$

阿贝尔给出了一个初等的变换。设：

$$
B_1=b_1,\quad B_2=b_1+b_2,\quad B_3=b_1+b_2+b_3,\quad \cdots,\quad B_m=b_1+b_2+\cdots+b_m,
$$

于是 $b_1=B_1,\ b_2=B_2-B_1,\ b_3=B_3-B_2,\ \cdots,\ b_m=B_m-B_{m-1}$，这样，就可以把和数 $S$ 写为

$$
S=\sum_{i=1}^{m}a_i b_i
$$

$$
=a_1B_1+a_2(B_2-B_1)+a_3(B_3-B_2)+\cdots+a_m(B_m-B_{m-1})
$$

$$
=(a_1-a_2)B_1+(a_2-a_3)B_2+\cdots+(a_{m-1}-a_m)B_{m-1}+a_m B_m
$$

$$
=\sum_{i=1}^{m-1}(a_i-a_{i+1})B_i+a_m B_m,
$$

这个变换式

$$
\sum_{i=1}^{m}a_i b_i=\sum_{i=1}^{m-1}(a_i-a_{i+1})B_i+a_m B_m,
$$

就是所要的**阿贝尔变换**。

**阿贝尔引理**　如果

（i）$\{a_i\}\ (i=1,2,\cdots,m)$ 为单调（增加或减少）的；

（ii）$B_i=b_1+b_2+\cdots+b_i$，$|B_i|\ (i=1,2,\cdots,m)$ 有界，$|B_i|\le M$，

则

$$
|S|=\left|\sum_{i=1}^{m}a_i b_i\right|\le M\left(|a_1|+2|a_m|\right).
$$

**证明**　利用阿贝尔变换

$$
|S|=\left|\sum_{i=1}^{m}a_i b_i\right|\le\sum_{i=1}^{m-1}|a_i-a_{i+1}|\cdot|B_i|+|a_m B_m|,
$$

由于每一个 $a_i-a_{i+1}\ (i=1,2,\cdots,m-1)$ 都是同号的，$|B_i|\le M\ (i=1,2,\cdots,m)$，于是有

$$
|S|\le M\cdot\left|\sum_{i=1}^{m-1}(a_i-a_{i+1})\right|+M\cdot|a_m|\le M\left(|a_1|+2|a_m|\right).
$$

**阿贝尔判别法**　如果

（i）级数 $\sum\limits_{n=1}^{\infty}b_n$ 收敛；

（ii）数列 $\{a_n\}$ 单调有界，$|a_n|\le K\quad(n=1,2,3,\cdots)$，

则级数 $\sum\limits_{n=1}^{\infty}a_n b_n$ 收敛。

**证明**　利用阿贝尔引理来估计和数

$$
\sum_{k=n+1}^{n+m}a_k b_k=\sum_{i=1}^{m}a_{n+i}b_{n+i}.
$$

由条件（i），级数 $\sum\limits_{n=1}^{\infty}b_n$ 是收敛的，按照柯西收敛原理，对任何 $\varepsilon>0$，存在 $N$，使当 $n>N$ 时，对不论怎样的正整数 $p$，成立

$$
|b_{n+1}+b_{n+2}+\cdots+b_{n+p}|<\varepsilon,
$$

因而，可以取这个 $\varepsilon$ 为引理中提到的数 $M$，于是当 $n>N$ 时，对任何正整数 $m$，应用引理，有

$$
\left|\sum_{k=n+1}^{n+m}a_k b_k\right|\le\varepsilon\left(|a_{n+1}|+2|a_{n+m}|\right)\le 3K\varepsilon,
$$

这样便证明了级数 $\sum\limits_{n=1}^{\infty}a_n b_n$ 收敛。

**狄利克雷判别法**　如果

（i）级数 $\sum\limits_{n=1}^{\infty}b_n$ 的部分和 $B_n$ 有界，$|B_n|\le M\quad(n=1,2,\cdots)$；

（ii）数列 $\{a_n\}$ 单调趋于零，

则级数 $\sum\limits_{n=1}^{\infty}a_n b_n$ 收敛。

**证明**　仍旧应用阿贝尔引理来估计和数 $\sum\limits_{k=n+1}^{n+m}a_k b_k$。由条件（ii）$a_n\to 0\ (n\to\infty)$，则对任意给定正数 $\varepsilon$，存在 $N$，当 $n>N$ 时，有

$$
|a_n|<\varepsilon.
$$

此外，由于条件（i），显然有

$$
|b_{n+1}+b_{n+2}+\cdots+b_{n+p}|=|B_{n+p}-B_n|\le 2M,
$$

于是引理中的数 $M$ 就是这里的 $2M$，所以当 $n>N$ 时，对任何正整数 $m$ 成立

$$
\left|\sum_{k=n+1}^{n+m}a_k b_k\right|\le 2M\left(|a_{n+1}|+2|a_{n+m}|\right)<6M\cdot\varepsilon,
$$

这就证明了级数 $\sum\limits_{n=1}^{\infty}a_n b_n$ 的收敛性。

这两个判别法还有着下面的关系：从狄利克雷判别法可以推导出阿贝尔判别法，事实上，由阿贝尔判别法的假设可以知道数列 $\{a_n\}$ 极限存在，设此极限为 $a$。如令考虑两个级数的和

$$
\sum_{n=1}^{\infty}(a_n-a)b_n+a\sum_{n=1}^{\infty}b_n.
$$

由所给条件和狄利克雷判别法，这两个级数都是收敛的。而它们的和正是级数 $\sum\limits_{n=1}^{\infty}a_n b_n$，因此它是收敛的。

另外，交错级数的莱布尼茨定理也可以作为狄利克雷判别法的一个特别情况。这是因为，对于莱布尼茨型的级数 $\sum\limits_{n=1}^{\infty}(-1)^{n+1}u_n$，也可以看成为 $\sum\limits_{n=1}^{\infty}a_n b_n$ 的级数，其中 $a_n=u_n$，$b_n=(-1)^{n+1}\ (n=1,2,\cdots)$，再利用狄利克雷判别法，即得莱布尼茨定理。

上面的事实说明，狄利克雷判别法包含了阿贝尔判别法，狄利克雷判别法还包含了交错级数的莱布尼茨定理，因而从理论上说，只要有狄利克雷判别法，就用不着阿贝尔判别法和交错级数的莱布尼茨定理。然而在许多具体的级数的判别中，运用后两个判别法会更直截了当，会更方便。

### 例题

**例 1**　判别级数 $\sum\limits_{n=1}^{\infty}(-1)^{n}\dfrac{x^{n}}{n}\ (x>0)$ 的敛散性。

**解**　考察级数

$$
\sum_{n=1}^{\infty}\left|(-1)^{n}\frac{x^{n}}{n}\right|=\sum_{n=1}^{\infty}\frac{x^{n}}{n}.
$$

由达朗贝尔判别法判出：当 $x<1$ 时级数 $\sum\limits_{n=1}^{\infty}\dfrac{x^{n}}{n}$ 收敛，而当 $x>1$ 时级数为发散。因此可以断言：

当 $x<1$ 时，级数 $\sum\limits_{n=1}^{\infty}(-1)^{n}\dfrac{x^{n}}{n}$ 绝对收敛；

当 $x>1$ 时，级数 $\sum\limits_{n=1}^{\infty}(-1)^{n}\dfrac{x^{n}}{n}$ 发散；

当 $x=1$ 时，级数 $\sum\limits_{n=1}^{\infty}\left|\dfrac{(-1)^{n}}{n}\right|$ 发散而 $\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n}}{n}$ 收敛，故为条件收敛。

**例 2**　级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n+1}}{n^{s}}\ (s>0)$ 是一个莱布尼茨型级数，因此它是收敛的。再利用柯西积分判别法知道，当 $s>1$ 时，级数绝对收敛，而当 $0<s\le 1$ 时级数条件收敛。

**例 3**　考虑级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-\alpha)^{n}}{n^{s}}\ (s>0,\ \alpha>0)$。

应用达朗贝尔判别法，当 $\alpha<1$ 时级数绝对收敛，当 $\alpha>1$ 时级数发散。而当 $\alpha=1$ 时级数是一个莱布尼茨型级数，和例 2 的级数仅差一符号，此时当 $s>1$ 时为绝对收敛，当 $s\le 1$ 时为条件收敛。总结得

当 $\alpha<1$ 时，级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-\alpha)^{n}}{n^{s}}\ (s>0,\ \alpha>0)$ 绝对收敛；

当 $\alpha>1$ 时，级数发散；

当 $\alpha=1$，而 $s>1$ 时，级数绝对收敛；

当 $\alpha=1$，而 $s\le 1$ 时，级数条件收敛。

**例 4**　若级数 $\sum\limits_{n=1}^{\infty}u_n$ 收敛，则级数 $\sum\limits_{n=1}^{\infty}\dfrac{u_n}{n}$，$\sum\limits_{n=1}^{\infty}\dfrac{u_n}{\sqrt{n}}$，$\sum\limits_{n=1}^{\infty}\dfrac{nu_n}{n+1}$ 都收敛。这只要应用一下阿贝尔判别法即得。

**例 5**　若数列 $\{a_n\}$ 单调趋于零，那么级数

$$
\sum_{n=1}^{\infty}a_n\sin nx\quad\text{和}\quad\sum_{n=1}^{\infty}a_n\cos nx,
$$

前者对任何 $x$ 都收敛，后者对任何 $x\ne 2k\pi$ 都收敛。而当 $x=2k\pi$ 时，需根据 $a_n$ 的性质作进一步判别。

先考虑当 $x\ne 2k\pi$ 时，级数 $\sum\limits_{k=1}^{\infty}\sin kx$ 的部分和 $\sum\limits_{k=1}^{n}\sin kx$，利用和差化积的公式

$$
\sin A\cdot\sin B=\frac{1}{2}\left[\cos(A-B)-\cos(A+B)\right]
$$

立即得到当 $x\ne 2k\pi$ 时

$$
2\sin\frac{x}{2}\left(\sin x+\sin 2x+\cdots+\sin nx\right)=\cos\frac{x}{2}-\cos\frac{2n+1}{2}x,
$$

于是部分和

$$
\left|\sum_{k=1}^{n}\sin kx\right|\le\frac{2}{2\left|\sin\dfrac{x}{2}\right|}=\frac{1}{\left|\sin\dfrac{x}{2}\right|}.
$$

用同样方法，也可以得到级数 $\sum\limits_{n=1}^{\infty}\cos nx$ 的部分和满足

$$
\left|\sum_{k=1}^{n}\cos kx\right|\le\frac{1}{\left|\sin\dfrac{x}{2}\right|}\qquad(x\ne 2k\pi),
$$

这样，再根据狄利克雷判别法，当 $x\ne 2k\pi$ 时，级数 $\sum\limits_{n=1}^{\infty}a_n\sin nx$ 和 $\sum\limits_{n=1}^{\infty}a_n\cos nx$ 都收敛。而当 $x=2k\pi$ 时，第一个级数显然是收敛的，而第二个级数则变为 $\sum\limits_{n=1}^{\infty}a_n$，需视 $a_n$ 的性质进一步判别它是否收敛。

---

## §5 绝对收敛级数和条件收敛级数的性质

### 定义与定理

**定义**　对于一个级数 $\sum\limits_{n=1}^{\infty}u_n$，它的**更序级数**就是把它项重新排列后所得到的级数。例如 $u_5+u_6+u_1+u_2+u_{10}+u_3+u_7+\cdots$ 就是原来级数 $\sum u_n$ 的一个更序级数。

**黎曼定理**　若级数 $\sum\limits_{n=1}^{\infty}u_n$ 条件收敛，那么，总可以适当地更换原来级数的次序而组成一个级数，使它收敛于任何预先给定的数 $S$（包括 $\infty$ 的情形）。

**证明**　我们只给出证明的大意，设 $S$ 是有限数。要证明这一定理需要利用条件收敛级数的两个性质：（1）由所有正项所组成的级数 $\sum v_n$ 发散到 $+\infty$，由所有负项所组成的级数 $\sum(-w_n)\ (w_n>0)$ 发散到 $-\infty$；（2）一般项 $u_n\to 0\ (n\to\infty)$。

不妨设 $S>0$，先在 $\sum v_n$ 中自前往后一项一项地相加起来，加到某一项刚好超过 $S$，例如 $v_1+\cdots+v_{n_1}>S$，而 $v_1+\cdots+v_{n_1-1}\le S$。这时，记下 $v_1+\cdots+v_{n_1}$，再从 $\sum(-w_n)$ 中自前往后取出一项又一项地加到 $v_1+\cdots+v_{n_1}$ 中去成为 $v_1+\cdots+v_{n_1}-w_1-w_2-\cdots$，一直加到某一项使它刚小于 $S$，例如 $v_1+\cdots+v_{n_1}-w_1-\cdots-w_{m_1}<S$，而 $v_1+\cdots+v_{n_1}-w_1-\cdots-w_{m_1-1}\ge S$，记下 $v_1+\cdots+v_{n_1}-w_1-\cdots-w_{m_1}$。再从 $\sum\limits_{n_1+1}^{\infty}v_n$ 中自前往后取出一项又一项地加到 $v_1+\cdots-w_{m_1}$ 中去，使得 $v_1+\cdots+v_{n_1}-w_1-\cdots-w_{m_1}+v_{n_1+1}+\cdots+v_{n_2}$ 刚超过 $S$。又从 $\sum\limits_{m_1+1}^{\infty}(-w_n)$ 中自前往后取出一项又一项地加到 $v_1+\cdots+v_{n_2}$ 中去，使得 $v_1+\cdots+v_{n_1}-\cdots-w_{m_1}+\cdots+v_{n_2}-\cdots-w_{m_2}$ 刚小于 $S$。如此一直下去，可以证明所得级数即为所求。

定理中的其他情形的证明与此相仿。

**柯西乘积**　按对角线法所组成的级数 $\sum\limits_{n=1}^{\infty}c_n$，这里，一般项

$$
c_n=u_1v_n+u_2v_{n-1}+u_3v_{n-2}+\cdots+u_{n-1}v_2+u_n v_1,
$$

我们称级数 $\sum\limits_{n=1}^{\infty}c_n$ 为两级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 的**柯西乘积**。

**定理 3（柯西定理）**　若级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 都绝对收敛，其和分别为 $U$ 和 $V$，则它们各项之积 $u_i v_k\ (i,k=1,2,3,\cdots)$ 按照任何方法排列所构成的级数也绝对收敛，且其和为 $UV$。

**证明**　用 $w_1,w_2,w_3,\cdots,w_n,\cdots$ 来表示按某一种次序排列 $u_i v_k\ (i,k=1,2,3,\cdots)$ 所成的一个数列。考虑级数

$$
|w_1|+|w_2|+|w_3|+\cdots+|w_n|+\cdots,
$$

设 $S_n^{*}$ 是它的部分和

$$
S_n^{*}=\sum_{k=1}^{n}|w_k|=\sum_{k=1}^{n}|u_{n_k}v_{m_k}|.
$$

记

$$
\nu=\max\left(n_1,m_1,n_2,m_2,\cdots,n_n,m_n\right),
$$

又记

$$
U_\nu^{*}=|u_1|+|u_2|+\cdots+|u_\nu|,\quad\text{亦即}\ \sum_{n=1}^{\infty}|u_n|\ \text{的部分和},
$$

$$
V_\nu^{*}=|v_1|+|v_2|+\cdots+|v_\nu|,\quad\text{亦即}\ \sum_{n=1}^{\infty}|v_n|\ \text{的部分和}.
$$

由于级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 都绝对收敛，所以 $U_\nu^{*}$ 及 $V_\nu^{*}$ 都有界。

此外

$$
S_n^{*}=|u_{n_1}v_{m_1}|+|u_{n_2}v_{m_2}|+\cdots+|u_{n_n}v_{m_n}|
$$

$$
\le\left(|u_1|+|u_2|+\cdots+|u_\nu|\right)\left(|v_1|+|v_2|+\cdots+|v_\nu|\right)
$$

$$
=U_\nu^{*}\cdot V_\nu^{*},
$$

于是知道 $S_n^{*}$ 亦有界，这样便证明了级数 $\sum\limits_{n=1}^{\infty}w_n$ 绝对收敛。再应用定理 2，级数 $\sum\limits_{n=1}^{\infty}w_n$ 的更序级数 $\sum\limits_{n=1}^{\infty}w_n'$ 亦绝对收敛，并且它们的和数相同，亦即 $\sum\limits_{n=1}^{\infty}w_n=\sum\limits_{n=1}^{\infty}w_n'$，也就是说，由 $u_i v_k\ (i,k=1,2,3,\cdots)$ 按照任何方式排列所构成的级数皆绝对收敛，并且都收敛于同一和数。

下面再证明这个和数恰为 $UV$。

考虑由正方形法排列所构成的级数，并加括号如下

$$
\sum_{n=1}^{\infty}a_n=u_1v_1+\left(u_1v_2+u_2v_2+u_2v_1\right)+\left(u_1v_3+u_2v_3+u_3v_3+u_3v_2+u_3v_1\right)+\cdots,
$$

由收敛级数的基本性质知道，加括号后并不影响和的数值。

记级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 的部分和分别为 $U_n$ 和 $V_n$，级数 $\sum\limits_{n=1}^{\infty}a_n$ 的部分和为 $A_n$，那么有

$$
A_n=U_n V_n,
$$

于是

$$
\lim_{n\to\infty}A_n=\lim_{n\to\infty}(U_n V_n)=UV,
$$

这就证明了 $\sum\limits_{n=1}^{\infty}a_n=UV$。定理全部证毕。

**梅尔滕斯（Mertens）定理**　若级数 $\sum\limits_{n=1}^{\infty}u_n$ 和 $\sum\limits_{n=1}^{\infty}v_n$ 中仅有一个是绝对收敛，其和为 $A$，另一个是条件收敛，其和为 $B$，将这两个级数相乘又有何结果呢？这里不加证明地引入梅尔滕斯（Mertens）定理，定理指出它们的柯西乘积组成的级数仍收敛，其和为 $AB$。

### 例题

**例**　级数 $(|q|<1)$

$$
1+q+q^{2}+\cdots+q^{n}+\cdots=\frac{1}{1-q}
$$

绝对收敛。将这个级数自乘，可得

$$
1+2q+3q^{2}+\cdots=\sum_{n=1}^{\infty}nq^{n-1}=\frac{1}{(1-q)^{2}}.
$$

---

