---
title: 数分笔记 · 第十章 反常积分
date: 2026-11-01 22:52:33
updated: 2026-11-01 22:52:33
description: 第十章反常积分的复习提纲：无穷限的反常积分、无界函数的反常积分，柯西收敛原理与各种判别法、15 道例题。
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
## §1 无穷限的反常积分

### 定义与定理

**定义**　设函数 $f(x)$ 在 $[a,+\infty)$ 有定义，并且对于任意的 $A\ (A>a)$ 在区间 $[a,A]$ 上可积。当极限

$$
\lim_{A\to+\infty}\int_a^A f(x)\,\mathrm{d}x
$$

存在时，称这极限值为 $f(x)$ 在区间 $[a,+\infty)$ 上（或是从 $a$ 到 $+\infty$）的反常积分的积分值，记作

$$
\int_a^{+\infty}f(x)\,\mathrm{d}x=\lim_{A\to+\infty}\int_a^A f(x)\,\mathrm{d}x,
$$

这时也称积分 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 是收敛的，它的值就是上述极限值。有时又称函数 $f(x)$ 在 $[a,+\infty)$ 可积。如果上述的极限不存在，称积分 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 是发散的。

类似地可定义反常积分 $\int_{-\infty}^b f(x)\,\mathrm{d}x$ 的收敛和发散。

对反常积分 $\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x$，当 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 和 $\int_{-\infty}^a f(x)\,\mathrm{d}x$ 都收敛时（$a$ 是一个任意固定的数），就说 $\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x$ 收敛，并且有

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x=\int_{-\infty}^a f(x)\,\mathrm{d}x+\int_a^{+\infty}f(x)\,\mathrm{d}x,
$$

这时，显然有

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x=\lim_{\substack{A\to+\infty\\ A'\to-\infty}}\int_{A'}^{A}f(x)\,\mathrm{d}x.
$$

必须注意的是：这里 $A\to+\infty$ 和 $A'\to-\infty$ 两者之间是独立变化的。如果上式右边的极限不存在，就称 $\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x$ 发散。

由定义不难知道，如果 $f(x)$ 在 $[a,+\infty)$ 连续，$F(x)$ 是 $f(x)$ 的原函数，并且 $F(+\infty)=\lim\limits_{A\to+\infty}F(A)$ 存在，那么

$$
\int_a^{+\infty}f(x)\,\mathrm{d}x=F(+\infty)-F(a).
$$

对 $\int_{-\infty}^a f(x)\,\mathrm{d}x$ 和 $\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x$ 也有相仿的结论。

由于 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 的收敛问题就是函数 $I(A)=\int_a^A f(x)\,\mathrm{d}x$ 当 $A\to+\infty$ 的收敛问题，所以根据函数极限存在的充要条件就可以得到反常积分收敛的充要条件如下：

**柯西收敛原理**　$\int_a^{+\infty}f(x)\,\mathrm{d}x$ 收敛的充要条件是：对任意给定的 $\varepsilon>0$，存在 $A>0$，当 $A',A''>A$ 时，总有

$$
\left|\int_{A'}^{A''}f(x)\,\mathrm{d}x\right|<\varepsilon.
$$

**定义**　和无穷级数相仿，在反常积分中也有绝对收敛和条件收敛的概念：设对任何 $A>a$，$f(x)$ 在 $[a,A]$ 上可积，并且 $\int_a^{+\infty}|f(x)|\,\mathrm{d}x$ 收敛，就称 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 绝对收敛。收敛但不绝对收敛的反常积分称为条件收敛。

**比较判别法**　如果对充分大的 $x$（亦即存在 $x_0$，当 $x\ge x_0$ 时）有 $|f(x)|\le\varphi(x)$，而积分 $\int_a^{+\infty}\varphi(x)\,\mathrm{d}x$ 收敛，那么积分 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 绝对收敛；又如果对充分大的 $x$ 有 $|f(x)|\ge\varphi(x)\ge 0$，而积分 $\int_a^{+\infty}\varphi(x)\,\mathrm{d}x$ 发散，那么积分 $\int_a^{+\infty}|f(x)|\,\mathrm{d}x$ 发散。

这个判别法可直接从收敛性定义推出，同时它有下面的极限形式。

**比较判别法的极限形式**　如果

$$
\lim_{x\to+\infty}\frac{|f(x)|}{\varphi(x)}=l,\qquad 0\le l<+\infty,
$$

且 $\int_a^{+\infty}\varphi(x)\,\mathrm{d}x$ 收敛，那么积分 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 绝对收敛。

如果

$$
\lim_{x\to+\infty}\frac{|f(x)|}{\varphi(x)}=l,\qquad 0<l\le+\infty,
$$

且 $\int_a^{+\infty}\varphi(x)\,\mathrm{d}x$ 发散，那么积分 $\int_a^{+\infty}|f(x)|\,\mathrm{d}x$ 发散。

**证明**　如果 $\lim\limits_{x\to+\infty}\dfrac{|f(x)|}{\varphi(x)}=l\ne 0$，那么对于 $\varepsilon$（使 $l-\varepsilon>0$），存在 $x_0$，当 $x\ge x_0$ 时

$$
0<l-\varepsilon<\frac{|f(x)|}{\varphi(x)}<l+\varepsilon,
$$

即

$$
(l-\varepsilon)\varphi(x)<|f(x)|<(l+\varepsilon)\varphi(x)
$$

成立，显然 $\int_a^{+\infty}\varphi(x)\,\mathrm{d}x$ 与 $\int_a^{+\infty}|f(x)|\,\mathrm{d}x$ 同时收敛或发散。

在 $l=0$，$l=\infty$ 时可以类似地证明。

在上面的比较判别法中，取 $\varphi(x)=\dfrac{c}{x^p}\ (c>0)$，就得到柯西判别法：

**柯西判别法**　如果 $|f(x)|\le\dfrac{c}{x^p}$，$p>1$，那么 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 绝对收敛。

如果 $|f(x)|\ge\dfrac{c}{x^p}$，$p\le 1$，那么积分 $\int_a^{+\infty}|f(x)|\,\mathrm{d}x$ 发散。

**柯西判别法的极限形式**　如果

$$
\lim_{x\to+\infty}\frac{|f(x)|}{\dfrac{1}{x^p}}=\lim_{x\to+\infty}x^p|f(x)|=l\qquad(0\le l<+\infty,\ p>1),
$$

那么积分 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 绝对收敛。

如果 $\lim\limits_{x\to+\infty}x^p|f(x)|=l$，而 $0<l\le+\infty$，$p\le 1$，那么 $\int_a^{+\infty}|f(x)|\,\mathrm{d}x$ 发散。

**第二中值定理**　设 $f(x)$ 在 $[a,b]$ 上可积，而 $g(x)$ 在 $[a,b]$ 上单调，那么在 $[a,b]$ 上存在 $\xi$，使

$$
\int_a^b f(x)g(x)\,\mathrm{d}x=g(a)\int_a^\xi f(x)\,\mathrm{d}x+g(b)\int_\xi^b f(x)\,\mathrm{d}x. \tag{1}
$$

特别，如果 $g(x)$ 单调增加并且 $g(a)\ge 0$，那么有 $\xi$，使

$$
\int_a^b f(x)g(x)\,\mathrm{d}x=g(b)\int_\xi^b f(x)\,\mathrm{d}x; \tag{2}
$$

如果 $g(x)$ 单调减少并且 $g(b)\ge 0$，那么有 $\xi$，使

$$
\int_a^b f(x)g(x)\,\mathrm{d}x=g(a)\int_a^\xi f(x)\,\mathrm{d}x. \tag{3}
$$

**证明**　由假定，$f(x),g(x)$ 在区间 $[a,b]$ 上都是可积的，因而 $f(x)g(x)$ 可积。我们先在 $g(x)$ 非负、单调增加的假定下证明（2），然后再推出一般情形的公式（1）。

在 $[a,b]$ 上取一列分点 $a=x_0<x_1<\cdots<x_{i-1}<x_i<\cdots<x_n=b$，记 $\Delta x_i=x_i-x_{i-1}$，$\omega_i$ 是 $g(x)$ 在 $[x_{i-1},x_i]$ 上的振幅，即 $\omega_i=g(x_i)-g(x_{i-1})$，把所讨论的积分作如下改变：

$$
\begin{aligned}
\int_a^b f(x)g(x)\,\mathrm{d}x&=\sum_{i=1}^{n}\int_{x_{i-1}}^{x_i}f(x)g(x)\,\mathrm{d}x\\
&=\sum_{i=1}^{n}g(x_i)\int_{x_{i-1}}^{x_i}f(x)\,\mathrm{d}x+\sum_{i=1}^{n}\int_{x_{i-1}}^{x_i}f(x)\left[g(x)-g(x_i)\right]\mathrm{d}x,
\end{aligned}
$$

记上式右端的和为 $\sigma+\rho$，因为 $f(x)$ 在 $[a,b]$ 上有界：$|f(x)|\le L$。估计

$$
\begin{aligned}
|\rho|&=\left|\sum_{i=1}^{n}\int_{x_{i-1}}^{x_i}f(x)\left[g(x)-g(x_i)\right]\mathrm{d}x\right|\\
&\le\sum_{i=1}^{n}\int_{x_{i-1}}^{x_i}|f(x)|\,|g(x)-g(x_i)|\,\mathrm{d}x\\
&\le L\sum_{i=1}^{n}\int_{x_{i-1}}^{x_i}\omega_i\,\mathrm{d}x=L\sum_{i=1}^{n}\omega_i\Delta x_i,
\end{aligned}
$$

由于 $g(x)$ 可积，所以当 $\lambda=\max\Delta x_i\to 0$ 时，$\sum\limits_{i=1}^{n}\omega_i\Delta x_i\to 0$；因此，$\lim\limits_{\lambda\to 0}\rho=0$，从而

$$
\int_a^b f(x)g(x)\,\mathrm{d}x=\lim_{\lambda\to 0}\sigma=\lim_{\lambda\to 0}\sum_{i=1}^{n}g(x_i)\int_{x_{i-1}}^{x_i}f(x)\,\mathrm{d}x.
$$

记 $F(x)=\int_x^b f(x)\,\mathrm{d}x$，那么 $F(x)$ 是 $[a,b]$ 上的连续函数，有最大值 $M$ 和最小值 $m$，$m\le F(x)\le M$，显然有

$$
\int_{x_{i-1}}^{x_i}f(x)\,\mathrm{d}x=F(x_{i-1})-F(x_i),\qquad F(x_n)=F(b)=0,
$$

从而

$$
\begin{aligned}
\sigma&=\sum_{i=1}^{n}g(x_i)\left[F(x_{i-1})-F(x_i)\right]\\
&=\sum_{i=1}^{n}g(x_i)F(x_{i-1})-\sum_{i=1}^{n}g(x_i)F(x_i)\\
&=g(x_1)F(x_0)+\sum_{i=2}^{n}g(x_i)F(x_{i-1})-\sum_{i=1}^{n-1}g(x_i)F(x_i)\\
&=g(x_1)F(x_0)+\sum_{i=1}^{n-1}\left[g(x_{i+1})-g(x_i)\right]F(x_i).
\end{aligned}
$$

因为 $g(x_1)\ge g(x_0)=g(a)\ge 0$，$g(x_{i+1})-g(x_i)\ge 0$，所以

$$
\begin{aligned}
&m\left\{g(x_1)+\sum_{i=1}^{n-1}\left(g(x_{i+1})-g(x_i)\right)\right\}\\
&\qquad\le\sigma\le M\left\{g(x_1)+\sum_{i=1}^{n-1}\left(g(x_{i+1})-g(x_i)\right)\right\},
\end{aligned}
$$

$$
mg(b)\le\sigma\le Mg(b),
$$

因此 $\lim\limits_{\lambda\to 0}\sigma=\mu g(b)$，而 $\mu$ 在 $m,M$ 之间。因为 $F(x)$ 连续，在 $[a,b]$ 内必存在 $\xi$，使 $\mu=F(\xi)=\int_\xi^b f(x)\,\mathrm{d}x$，从而公式（2）

$$
\int_a^b f(x)g(x)\,\mathrm{d}x=g(b)\int_\xi^b f(x)\,\mathrm{d}x
$$

得到证明。对 $g(x)$ 单调减少且 $g(b)\ge 0$ 情形的公式（3）的证明是相仿的。

在 $g(x)$ 是一般的单调增加情形，作 $\psi(x)=g(x)-g(a)$，$\psi(x)$ 为单调增加且 $\psi(a)\ge 0$，公式（2）对 $\psi(x)$ 成立，即有 $\xi$，使

$$
\int_a^b f(x)\left[g(x)-g(a)\right]\mathrm{d}x=\left[g(b)-g(a)\right]\int_\xi^b f(x)\,\mathrm{d}x
$$

成立，这就是公式（1）

$$
\int_a^b f(x)g(x)\,\mathrm{d}x=g(a)\int_a^\xi f(x)\,\mathrm{d}x+g(b)\int_\xi^b f(x)\,\mathrm{d}x,
$$

当 $g(x)$ 是一般的单调减少情形，这时应用公式（3），同样可得公式（1）。

**阿贝尔判别法**　如果 $f(x)$ 在 $[a,+\infty)$ 上可积，$g(x)$ 单调有界，那么积分 $\int_a^{+\infty}f(x)g(x)\,\mathrm{d}x$ 收敛。

**证明**　依假定，可以利用第二中值定理，在任何 $[A,A']$ 上，存在 $\xi$，使

$$
\int_A^{A'}f(x)g(x)\,\mathrm{d}x=g(A)\int_A^\xi f(x)\,\mathrm{d}x+g(A')\int_\xi^{A'}f(x)\,\mathrm{d}x,
$$

因为 $\int_a^{+\infty}f(x)\,\mathrm{d}x$ 收敛，所以对于任何 $\varepsilon>0$，存在 $A_0\ge a$，使得当 $A',A\ge A_0$ 时，成立

$$
\left|\int_A^\xi f(x)\,\mathrm{d}x\right|<\varepsilon,\qquad\left|\int_\xi^{A'}f(x)\,\mathrm{d}x\right|<\varepsilon,
$$

又 $g(x)$ 有界，设 $|g(x)|<L$，所以当 $A',A\ge A_0$ 时，有

$$
\begin{aligned}
\left|\int_A^{A'}f(x)g(x)\,\mathrm{d}x\right|&\le|g(A)|\left|\int_A^\xi f(x)\,\mathrm{d}x\right|+|g(A')|\left|\int_\xi^{A'}f(x)\,\mathrm{d}x\right|\\
&\le 2L\varepsilon,
\end{aligned}
$$

根据柯西收敛原理推知积分 $\int_a^{+\infty}f(x)g(x)\,\mathrm{d}x$ 收敛。

**狄利克雷判别法**　如果对任何 $A>a$，$F(A)=\int_a^A f(x)\,\mathrm{d}x$ 有界：$\left|\int_a^A f(x)\,\mathrm{d}x\right|\le K$，$g(x)$ 单调且当 $x\to+\infty$ 时趋向于零，那么积分 $\int_a^{+\infty}f(x)g(x)\,\mathrm{d}x$ 收敛。

**证明**　因为 $g(x)\to 0\ (x\to+\infty)$，故对任何 $\varepsilon>0$，有 $A_0$，当 $A'>A\ge A_0$ 时，$|g(A)|<\varepsilon$，$|g(A')|<\varepsilon$。又因 $\left|\int_a^A f(x)\,\mathrm{d}x\right|\le K$，所以

$$
\left|\int_A^\xi f(x)\,\mathrm{d}x\right|=\left|\int_a^\xi f(x)\,\mathrm{d}x-\int_a^A f(x)\,\mathrm{d}x\right|\le 2K,
$$

同样有

$$
\left|\int_\xi^{A'}f(x)\,\mathrm{d}x\right|\le 2K,
$$

利用第二中值定理，得到只要 $A',A\ge A_0$，就有

$$
\begin{aligned}
\left|\int_A^{A'}f(x)g(x)\,\mathrm{d}x\right|&\le|g(A)|\left|\int_A^\xi f(x)\,\mathrm{d}x\right|+|g(A')|\left|\int_\xi^{A'}f(x)\,\mathrm{d}x\right|\\
&\le 4K\varepsilon,
\end{aligned}
$$

所以积分 $\int_a^{+\infty}f(x)g(x)\,\mathrm{d}x$ 收敛。

### 例题

**例 1**　讨论积分 $\int_0^{+\infty}\dfrac{\mathrm{d}x}{1+x^2}$，$\int_{-\infty}^0\dfrac{\mathrm{d}x}{1+x^2}$，$\int_{-\infty}^{+\infty}\dfrac{\mathrm{d}x}{1+x^2}$ 的收敛性。

**解**

$$
\int_0^A\frac{\mathrm{d}x}{1+x^2}=\arctan x\Big|_0^A=\arctan A-\arctan 0=\arctan A\to\frac{\pi}{2}\qquad(A\to+\infty),
$$

所以积分 $\int_0^{+\infty}\dfrac{\mathrm{d}x}{1+x^2}$ 收敛，数值等于 $\dfrac{\pi}{2}$。

同样

$$
\int_{-\infty}^0\frac{\mathrm{d}x}{1+x^2}=\lim_{A'\to-\infty}(\arctan 0-\arctan A')=-\left(-\frac{\pi}{2}\right)=\frac{\pi}{2},
$$

因此

$$
\int_{-\infty}^{+\infty}\frac{\mathrm{d}x}{1+x^2}=\int_{-\infty}^0\frac{\mathrm{d}x}{1+x^2}+\int_0^{+\infty}\frac{\mathrm{d}x}{1+x^2}=\frac{\pi}{2}+\frac{\pi}{2}=\pi.
$$

**例 2**　讨论 $\int_a^{+\infty}\dfrac{\mathrm{d}x}{x^p}\ (a>0)$ 的收敛情形，这里 $p$ 是实数。

**解**　设 $p\ne 1$，

$$
\int_a^A\frac{\mathrm{d}x}{x^p}=\frac{1}{1-p}x^{1-p}\Big|_a^A=\frac{1}{1-p}\left(A^{1-p}-a^{1-p}\right)=I_p(A),
$$

可见

$$
\lim_{A\to+\infty}I_p(A)=\begin{cases}+\infty, & p<1,\\[2mm] \dfrac{1}{1-p}a^{1-p}, & p>1.\end{cases}
$$

当 $p=1$ 时，$\int_a^A\dfrac{\mathrm{d}x}{x}=\ln A-\ln a\to+\infty\ (A\to+\infty)$，

所以积分 $\int_a^{+\infty}\dfrac{\mathrm{d}x}{x^p}$ 当 $p>1$ 时收敛，并且有

$$
\int_a^{+\infty}\frac{\mathrm{d}x}{x^p}=\frac{1}{p-1}a^{1-p},
$$

当 $p\le 1$ 时积分发散。

**例 3**　$\int_{-\infty}^{+\infty}\sin x\,\mathrm{d}x$ 是发散的积分。这是因为对任何 $A$ 和 $A'$，

$$
\int_{A'}^A\sin x\,\mathrm{d}x=-\cos A+\cos A',
$$

当 $A$ 与 $A'$ 独立，并且 $A\to+\infty$，$A'\to-\infty$ 时，上述极限显然不存在。

但如果取 $A'=-A$，这时有

$$
\int_{-A}^A\sin x\,\mathrm{d}x=0,
$$

从而又有

$$
\lim_{A\to+\infty}\int_{-A}^A\sin x\,\mathrm{d}x=0,
$$

却不能断言 $\int_{-\infty}^{+\infty}\sin x\,\mathrm{d}x$ 收敛。这是因为 $A\to+\infty$ 和 $A'\to-\infty$ 不是独立的。

**例 4**　判定 $\int_1^{+\infty}\dfrac{\sin x}{x\sqrt{1+x^2}}\,\mathrm{d}x$ 的收敛性。

**解**　因为

$$
\left|\frac{\sin x}{x\sqrt{1+x^2}}\right|\le\frac{1}{x^{\frac{3}{2}}},
$$

所以积分绝对收敛。

**例 5**　对于任何 $\alpha$，$\int_1^{+\infty}x^{\alpha}\mathrm{e}^{-x}\,\mathrm{d}x$ 收敛。

因为对于任何固定的 $\alpha$，$\lim\limits_{x\to+\infty}x^2\left(x^{\alpha}\mathrm{e}^{-x}\right)=0$，由柯西判别法的极限形式知积分收敛。

**例 6**　讨论积分 $\int_2^{+\infty}\dfrac{\mathrm{d}x}{x^{\lambda}\ln x}$ 的收敛性。

**解**　当 $\lambda>1$ 时，有 $\dfrac{1}{x^{\lambda}\ln x}<\dfrac{1}{x^{\lambda}}$（其中 $x>\mathrm{e}$），而 $\int_2^{+\infty}\dfrac{\mathrm{d}x}{x^{\lambda}}$ 收敛，所以 $\int_2^{+\infty}\dfrac{\mathrm{d}x}{x^{\lambda}\ln x}$ 收敛。

当 $\lambda<1$ 时，存在 $\beta$ 满足 $\lambda<\beta<1$，由 $\lim\limits_{x\to+\infty}x^{\beta}\cdot\dfrac{1}{x^{\lambda}\ln x}=+\infty$，得出 $\int_2^{+\infty}\dfrac{\mathrm{d}x}{x^{\lambda}\ln x}$ 发散。

当 $\lambda=1$ 时，$\int_2^{+\infty}\dfrac{\mathrm{d}x}{x\ln x}=\ln\ln x\Big|_2^{+\infty}=+\infty$，所以积分发散。综合起来，$\int_2^{+\infty}\dfrac{\mathrm{d}x}{x^{\lambda}\ln x}$ 当 $\lambda>1$ 时收敛，当 $\lambda\le 1$ 时发散。

**例 7**　积分 $\int_1^{+\infty}\dfrac{\sin x}{x}\,\mathrm{d}x$ 收敛，而不绝对收敛。

因为 $\left|\int_1^A\sin x\,\mathrm{d}x\right|=|\cos A-\cos 1|\le 2$，又由 $\dfrac{1}{x}$ 单调而且当 $x\to+\infty$ 时趋于零，由狄利克雷判别法知 $\int_1^{+\infty}\dfrac{\sin x}{x}\,\mathrm{d}x$ 收敛。但

$$
\left|\frac{\sin x}{x}\right|\ge\frac{\sin^2 x}{x}=\frac{1}{2x}-\frac{\cos 2x}{2x},
$$

考虑 $\int_1^{+\infty}\dfrac{\cos 2x}{2x}\,\mathrm{d}x$，因为 $\left|\int_1^A\cos 2x\,\mathrm{d}x\right|=\dfrac{1}{2}|\sin 2A-\sin 2|\le 1$ 以及 $\dfrac{1}{2x}\to 0$（$x\to+\infty$ 时，单调地趋于 $0$），应用狄利克雷判别法得 $\int_1^{+\infty}\dfrac{\cos 2x}{2x}\,\mathrm{d}x$ 收敛，然而 $\int_1^{+\infty}\dfrac{\mathrm{d}x}{2x}$ 发散，所以 $\int_1^{+\infty}\dfrac{|\sin x|}{x}\,\mathrm{d}x$ 发散。

作为习题，请读者证明 $\int_1^{+\infty}\dfrac{\sin x}{x^{\lambda}}\,\mathrm{d}x$ 和 $\int_1^{+\infty}\dfrac{\cos x}{x^{\lambda}}\,\mathrm{d}x$ 当 $0<\lambda<1$ 时收敛，但非绝对收敛。

**例 8**　积分 $\int_1^{+\infty}\dfrac{\sin x\cdot\arctan x}{x^{\lambda}}\,\mathrm{d}x\ (0<\lambda\le 1)$ 收敛。

因为 $\int_1^{+\infty}\dfrac{\sin x}{x^{\lambda}}\,\mathrm{d}x$ 收敛，又 $\arctan x$ 在 $[1,+\infty)$ 上单调有界，由阿贝尔判别法知道所讨论的积分是收敛的。

**例 9**　积分 $\int_0^{+\infty}\sin(x^2)\,\mathrm{d}x$ 和 $\int_0^{+\infty}\cos(x^2)\,\mathrm{d}x$ 都收敛。

考虑第一个积分。作代换 $t=x^2$，

$$
\int_0^{+\infty}\sin(x^2)\,\mathrm{d}x=\frac{1}{2}\int_0^{+\infty}\frac{\sin t}{\sqrt{t}}\,\mathrm{d}t,
$$

对任何 $A>0$，$\left|\int_0^A\sin t\,\mathrm{d}t\right|\le 2$，并且 $\dfrac{1}{\sqrt{t}}$ 在 $[0,+\infty)$ 内单调，$\dfrac{1}{\sqrt{t}}\to 0\ (t\to+\infty)$，由狄利克雷判别法，得 $\int_0^{+\infty}\dfrac{\sin t}{\sqrt{t}}\,\mathrm{d}t$ 收敛，所以 $\int_0^{+\infty}\sin(x^2)\,\mathrm{d}x$ 也收敛。

同样可以得到 $\int_0^{+\infty}\cos(x^2)\,\mathrm{d}x$ 收敛。

这个例子还表明一个事实：若 $\int_0^{+\infty}f(x)\,\mathrm{d}x$ 收敛，但未必有 $\lim\limits_{x\to+\infty}f(x)=0$。

---

## §2 无界函数的反常积分

### 定义与定理

**定义**　设函数 $f(x)$ 在 $x=b$ 点的任一左邻域无界（称 $b$ 点为 $f(x)$ 的奇点），但对于任意充分小的正数 $\eta$，$f(x)$ 在 $[a,b-\eta]$ 上可积，则称积分

$$
\int_a^b f(x)\,\mathrm{d}x
$$

是无界函数 $f(x)$ 在 $[a,b]$ 上的反常积分。这一积分是否存在，以及它的积分值是多少，现在讨论如下。令

$$
\phi(\eta)=\int_a^{b-\eta}f(x)\,\mathrm{d}x,
$$

如果 $\lim\limits_{\eta\to 0}\phi(\eta)$ 存在，则称此极限是上述反常积分的积分值，亦即

$$
\int_a^b f(x)\,\mathrm{d}x=\lim_{\eta\to 0}\int_a^{b-\eta}f(x)\,\mathrm{d}x.
$$

并称无界函数 $f(x)$ 在 $[a,b]$ 上可积，又称反常积分 $\int_a^b f(x)\,\mathrm{d}x$ 收敛。如果上述的极限不存在，就说积分 $\int_a^b f(x)\,\mathrm{d}x$ 发散。

如果 $x=a$ 是 $f(x)$ 的奇点，可以相仿地给出定义。另外，如果 $f(x)$ 在 $[a,b]$ 内部有一个奇点 $c$，$a<c<b$，就分别考察 $\int_a^c f(x)\,\mathrm{d}x$ 和 $\int_c^b f(x)\,\mathrm{d}x$，如果后两者都收敛，就称 $\int_a^b f(x)\,\mathrm{d}x$ 收敛，并且 $\int_a^b f(x)\,\mathrm{d}x=\int_a^c f(x)\,\mathrm{d}x+\int_c^b f(x)\,\mathrm{d}x$。即

$$
\int_a^b f(x)\,\mathrm{d}x=\lim_{\eta\to+0}\int_a^{c-\eta}f(x)\,\mathrm{d}x+\lim_{\eta'\to+0}\int_{c+\eta'}^b f(x)\,\mathrm{d}x,
$$

其中 $\eta$ 和 $\eta'$ 是相互独立地趋于 $+0$。

**柯西收敛原理**　若 $f(x)$ 在 $x=a$ 有奇点，$\int_a^b f(x)\,\mathrm{d}x$ 收敛的充要条件是：对任意给定的 $\varepsilon>0$，存在 $\delta>0$，当 $0<\eta,\eta'<\delta$ 时总有

$$
\left|\int_{a+\eta}^{a+\eta'}f(x)\,\mathrm{d}x\right|<\varepsilon.
$$

**柯西判别法**　设 $x=a$ 是 $f(x)$ 的奇点，如果 $|f(x)|\le\dfrac{c}{(x-a)^p}\ (c>0)$，$p<1$，那么 $\int_a^b f(x)\,\mathrm{d}x$ 绝对收敛。

如果 $|f(x)|\ge\dfrac{c}{(x-a)^p}\ (c>0)$，$p\ge 1$，那么 $\int_a^b|f(x)|\,\mathrm{d}x$ 发散。

**柯西判别法的极限形式**　设

$$
\lim_{x\to a}(x-a)^p|f(x)|=k,
$$

如果 $0\le k<\infty$，$p<1$，那么 $\int_a^b f(x)\,\mathrm{d}x$ 为绝对收敛；

如果 $0<k\le\infty$，$p\ge 1$，那么 $\int_a^b|f(x)|\,\mathrm{d}x$ 发散。

**阿贝尔判别法**　设 $f(x)$ 在 $x=a$ 有奇点，$\int_a^b f(x)\,\mathrm{d}x$ 收敛，$g(x)$ 单调有界，那么积分 $\int_a^b f(x)g(x)\,\mathrm{d}x$ 收敛。

**狄利克雷判别法**　设 $f(x)$ 在 $x=a$ 有奇点，$\int_{a+\eta}^b f(x)\,\mathrm{d}x$ 是 $\eta$ 的有界函数，$g(x)$ 单调且当 $x\to a$ 时趋于零，那么积分 $\int_a^b f(x)g(x)\,\mathrm{d}x$ 收敛。

对 $\int_{a+\eta}^{a+\eta'}f(x)g(x)\,\mathrm{d}x$ 应用第二中值定理可以证明上面的两个结论。

**定义**　设 $f(x)$ 在 $[a,b]$ 内无界，$c$ 是唯一奇点，$a<c<b$，如果

$$
\lim_{\eta\to 0}\left[\int_a^{c-\eta}f(x)\,\mathrm{d}x+\int_{c+\eta}^b f(x)\,\mathrm{d}x\right]
$$

存在（注意，$c-\eta$ 与 $c+\eta$ 中的 $\eta$ 是同一个正数），就称此极限是反常积分 $\int_a^b f(x)\,\mathrm{d}x$ 的柯西主值，记为

$$
\mathrm{P.V.}\int_a^b f(x)\,\mathrm{d}x=\lim_{\eta\to 0}\left[\int_a^{c-\eta}f(x)\,\mathrm{d}x+\int_{c+\eta}^b f(x)\,\mathrm{d}x\right].
$$

$\mathrm{P.V.}$ 是 Principal Value 的缩写。

同样的，对于无穷限的反常积分，柯西主值为

$$
\mathrm{P.V.}\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x=\lim_{A\to+\infty}\int_{-A}^A f(x)\,\mathrm{d}x.
$$

### 例题

**例 1**　讨论积分 $\int_a^b\dfrac{\mathrm{d}x}{(x-a)^p}\ (p>0)$ 的收敛性。

当 $p>0$ 时，$x=a$ 是 $\dfrac{1}{(x-a)^p}$ 的奇点。

当 $p\ne 1$ 时

$$
\int_{a+\eta}^b\frac{\mathrm{d}x}{(x-a)^p}=\frac{1}{1-p}(x-a)^{1-p}\Big|_{a+\eta}^b=\frac{1}{1-p}\left[(b-a)^{1-p}-\eta^{1-p}\right],
$$

$$
\lim_{\eta\to+0}\int_{a+\eta}^b\frac{\mathrm{d}x}{(x-a)^p}=\begin{cases}\dfrac{1}{1-p}(b-a)^{1-p}, & p<1,\\[2mm] +\infty, & p>1.\end{cases}
$$

当 $p=1$ 时

$$
\int_{a+\eta}^b\frac{\mathrm{d}x}{x-a}=\ln(x-a)\Big|_{a+\eta}^b=\ln(b-a)-\ln\eta\to+\infty\qquad(\eta\to+0).
$$

所以，当 $p<1$ 时，积分 $\int_a^b\dfrac{\mathrm{d}x}{(x-a)^p}$ 收敛于 $\dfrac{1}{1-p}(b-a)^{1-p}$，亦即

$$
\int_a^b\frac{\mathrm{d}x}{(x-a)^p}=\frac{1}{1-p}(b-a)^{1-p};
$$

当 $p\ge 1$ 时，积分发散。

对于积分 $\int_a^b\dfrac{\mathrm{d}x}{(b-x)^p}$ 的收敛性有相仿的结论。

并由此不难获得 $\int_a^b\dfrac{\mathrm{d}x}{(x-a)^p(b-x)^q}\ (p>0,q>0)$，只有当 $p<1,q<1$ 时收敛，其他情形都发散。

**例 2**　讨论积分 $\int_0^1\dfrac{\mathrm{d}x}{\sqrt{1-x^2}}$ 的收敛性。

$x=1$ 是被积函数的奇点。

$$
\int_0^{1-\eta}\frac{\mathrm{d}x}{\sqrt{1-x^2}}=\arcsin x\Big|_0^{1-\eta}=\arcsin(1-\eta)\to\frac{\pi}{2}\qquad(\eta\to 0).
$$

所讨论的积分收敛，并且 $\int_0^1\dfrac{\mathrm{d}x}{\sqrt{1-x^2}}=\dfrac{\pi}{2}$。

**例 3**　讨论 $\int_0^1\dfrac{\ln x}{\sqrt{x}}\,\mathrm{d}x$ 的收敛性。

因为 $\lim\limits_{x\to+0}x^{\frac{3}{4}}\dfrac{\ln x}{\sqrt{x}}=\lim\limits_{x\to+0}x^{\frac{1}{4}}\ln x=0$，所以 $\int_0^1\dfrac{\ln x}{\sqrt{x}}\,\mathrm{d}x$ 收敛。

**例 4**　讨论积分 $\int_0^{+\infty}\dfrac{\ln x\,\mathrm{d}x}{x^p|1-x|^q}\ (p>0,\ q>0)$ 的敛散性。

将积分写为

$$
\begin{aligned}
\int_0^{+\infty}\frac{\ln x\,\mathrm{d}x}{x^p|1-x|^q}&=\left\{\int_0^{1/2}+\int_{1/2}^1+\int_1^2+\int_2^{+\infty}\right\}\frac{\ln x\,\mathrm{d}x}{x^p|1-x|^q}\\
&=I_1+I_2+I_3+I_4,
\end{aligned}
$$

在 $I_1$ 中 $0$ 是奇点，在 $I_2$ 和 $I_3$ 中 $1$ 是奇点，$I_4$ 是无穷限反常积分。

讨论 $I_1$，当 $p\ge 1$ 时 $I_1$ 发散。当 $p<1$ 时，取 $\alpha$ 使 $p<\alpha<1$，有 $\dfrac{\ln x}{x^p}=\dfrac{1}{x^\alpha}x^{\alpha-p}\ln x$，而 $x^{\alpha-p}\ln x\to 0\ (x\to+0)$，所以 $\dfrac{\ln x}{x^p}<\dfrac{1}{x^\alpha}$，而 $\int_0^{1/2}\dfrac{\mathrm{d}x}{x^\alpha}$ 收敛，故 $p<1$ 时 $I_1$ 收敛。

讨论 $I_2$，因为 $\ln x=\ln[1+(x-1)]\sim x-1\ (x\to 1)$，所以 $\dfrac{\ln x}{|x-1|^q}\sim\dfrac{-1}{|x-1|^{q-1}}\ (x\to 1-0)$，于是当 $q-1<1$ 即 $q<2$ 时 $I_2$ 收敛，$q\ge 2$ 时 $I_2$ 发散。

讨论 $I_3$，和 $I_2$ 相同，当 $q<2$ 时 $I_3$ 收敛，当 $q\ge 2$ 时 $I_3$ 发散。

讨论 $I_4$，因为 $x^p|1-x|^q\sim x^{p+q}\ (x\to+\infty)$，得 $p+q>1$ 时 $I_4$ 收敛（这是因为对任何 $\alpha>0$，$\ln x\ll x^{\alpha}\ (x\to+\infty)$，与 $x^{p+q}$ 相比，$\ln x$ 可以不予考虑）。当 $p+q\le 1$ 时 $I_4$ 发散。

概括起来，当 $p<1$，$q<2$，$p+q>1$ 时积分收敛，其他情形积分发散。

**例 5**　讨论积分 $\int_0^1\dfrac{\sin\dfrac{1}{x}}{x^r}\,\mathrm{d}x\ (0<r\le 2)$ 的收敛情形。

当 $0<r<1$，$\left|\dfrac{\sin\dfrac{1}{x}}{x^r}\right|\le\dfrac{1}{x^r}$，积分绝对收敛。

又

$$
\left|\int_\eta^1\frac{1}{x^2}\sin\frac{1}{x}\,\mathrm{d}x\right|\le\left|\cos 1-\cos\frac{1}{\eta}\right|\le 2,
$$

$$
\int_0^1\frac{\sin\dfrac{1}{x}}{x^r}\,\mathrm{d}x=\int_0^1 x^{2-r}\cdot\frac{1}{x^2}\sin\frac{1}{x}\,\mathrm{d}x
$$

当 $2-r>0$ 即 $r<2$ 时，由狄利克雷判别法，从 $x^{2-r}$ 单调趋向于零（$x\to 0$）推知积分收敛。

当 $r=2$ 时，$\int_\eta^1\dfrac{1}{x^2}\sin\dfrac{1}{x}\,\mathrm{d}x=\cos\dfrac{1}{\eta}-\cos 1$，当 $\eta\to 0$ 时无极限，所以积分 $\int_0^1\dfrac{\sin\dfrac{1}{x}}{x^2}\,\mathrm{d}x$ 发散。

**例 6**　设 $a<c<b$，求 $\int_a^b\dfrac{\mathrm{d}x}{x-c}$ 的主值。

**解**　容易知道，这一反常积分是发散的，但

$$
\begin{aligned}
\mathrm{P.V.}\int_a^b\frac{\mathrm{d}x}{x-c}&=\lim_{\eta\to 0}\left[\int_a^{c-\eta}\frac{\mathrm{d}x}{x-c}+\int_{c+\eta}^b\frac{\mathrm{d}x}{x-c}\right]\\
&=\lim_{\eta\to 0}\left[\ln(c-x)\Big|_a^{c-\eta}+\ln(x-c)\Big|_{c+\eta}^b\right]\\
&=\ln\frac{b-c}{c-a}.
\end{aligned}
$$
