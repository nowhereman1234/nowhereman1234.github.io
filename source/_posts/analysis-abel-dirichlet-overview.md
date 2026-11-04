---
title: 数分笔记 · 阿贝尔判别法与狄利克雷判别法总览
date: 2026-11-04 19:51:30
updated: 2026-11-04 19:51:30
description: 把数项级数、无穷限反常积分、无界函数反常积分、函数项级数四个舞台上的阿贝尔与狄利克雷判别法放在一起对照：同一个骨架、同一个引擎、四条逻辑关系。
categories:
  - [Mathematics, 数学分析]
---
<style>
/* 数分笔记的排版微调：只在本页生效 */
#article-container h2 { margin-top: 3.2em; margin-bottom: 1.2em; padding-top: .7em; border-top: 1px solid var(--hr-color, #C3E3D2); }
#article-container h3 { margin-top: 2.6em; margin-bottom: 1.1em; }
#article-container p { margin-bottom: 1.2em; }
#article-container .katex-display { margin: .95em 0; }
#article-container hr { margin: 2.8em 0; }
#article-container table { margin: 1.2em 0; font-size: .92em; }
#article-container table th { background: rgba(111,175,140,.14); }
</style>
## 一、一句话骨架

所有阿贝尔、狄利克雷判别法都在回答同一个问题：

> 一个**振荡**的因子乘上一个**单调**的因子，收敛性会不会被破坏？

答案是**不会**。只要振荡因子的「部分和」（或「部分积分」）**有界**，而另一个因子**单调**，乘积仍然收敛 —— 单调性保证了振荡不会越积越多。

## 二、四个舞台，同一个骨架

| 舞台 | 阿贝尔判别法 | 狄利克雷判别法 |
| --- | --- | --- |
| **数项级数**<br>$\sum\limits_{n=1}^{\infty}a_n b_n$ | ① $\sum\limits_{n=1}^{\infty}b_n$ 收敛<br>② $\{a_n\}$ 单调有界，$\lvert a_n\rvert\le K$ | ① $\sum\limits_{n=1}^{\infty}b_n$ 的部分和 $B_n$ 有界，$\lvert B_n\rvert\le M$<br>② $\{a_n\}$ 单调，且 $a_n\to 0$ |
| **无穷限反常积分**<br>$\int_a^{+\infty}f g\,\mathrm{d}x$ | ① $\int_a^{+\infty}f\,\mathrm{d}x$ 收敛<br>② $g$ 单调有界 | ① $\left\lvert\int_a^A f\,\mathrm{d}x\right\rvert\le K$ 对一切 $A>a$ 成立<br>② $g$ 单调，且 $g\to 0\ (x\to+\infty)$ |
| **无界函数反常积分**<br>$\int_a^b f g\,\mathrm{d}x$（$a$ 为奇点） | ① $\int_a^b f\,\mathrm{d}x$ 收敛<br>② $g$ 单调有界 | ① $\int_{a+\eta}^b f\,\mathrm{d}x$ 是 $\eta$ 的有界函数<br>② $g$ 单调，且 $g\to 0\ (x\to a)$ |
| **函数项级数**<br>$\sum\limits_{n=1}^{\infty}a_n(x)b_n(x)$ 在 $X$ 上一致收敛 | ① $\sum\limits_{n=1}^{\infty}b_n(x)$ 在 $X$ 上**一致**收敛<br>② 每个 $x$ 上 $\{a_n(x)\}$ 单调，且**一致有界** $\lvert a_n(x)\rvert\le L$ | ① $\sum\limits_{n=1}^{\infty}b_n(x)$ 的部分和 $B_n(x)$ 在 $X$ 上**一致**有界<br>② 每个 $x$ 上 $\{a_n(x)\}$ 单调，且 $\{a_n(x)\}$ **一致**收敛于零 |

**读表诀窍**：两条判别的差别只有一处 ——

- **阿贝尔**：振荡因子**本身收敛** ＋ 单调因子**单调有界**
- **狄利克雷**：振荡因子**部分和有界**（本身可以不收敛）＋ 单调因子**单调趋于零**

所以先看振荡因子：它自己收敛就用阿贝尔，只是部分和有界（如 $\sin x$、$(-1)^{n+1}$）就用狄利克雷。

**从数列到函数项级数，所有「有界 / 收敛」都要升级成「一致有界 / 一致收敛」** —— 这是四个舞台里唯一需要额外小心的地方。

## 三、共同的引擎

四种情形用的是同一个技术，只是「分部求和」在不同舞台上有不同外衣：

| 舞台 | 引擎 |
| --- | --- |
| 数项级数、函数项级数 | **阿贝尔变换** → **阿贝尔引理** |
| 反常积分 | **第二中值定理**（分部积分型） |

**阿贝尔变换**（分部求和）　记 $B_i=b_1+b_2+\cdots+b_i$，则

$$
\sum_{i=1}^{m}a_i b_i=\sum_{i=1}^{m-1}(a_i-a_{i+1})B_i+a_m B_m.
$$

它把「逐项乘积」换成了「相邻差 × 部分和」。因为 $\{a_i\}$ 单调，所有 $a_i-a_{i+1}$ **同号**，于是差分的绝对值可以直接求和：

**阿贝尔引理**　若 $\{a_i\}$ 单调，且 $\lvert B_i\rvert\le M$，则

$$
\left|\sum_{i=1}^{m}a_i b_i\right|\le M\left(\lvert a_1\rvert+2\lvert a_m\rvert\right).
$$

**积分版的同一件事（第二中值定理）**　$g$ 单调时，在 $[A,A']$ 上存在 $\xi$ 使

$$
\int_A^{A'}f(x)g(x)\,\mathrm{d}x=g(A)\int_A^{\xi}f(x)\,\mathrm{d}x+g(A')\int_{\xi}^{A'}f(x)\,\mathrm{d}x.
$$

两种引擎的输出完全平行：右端都是「$f$ 的局部积分 / 部分和有多小」乘上「$g$ 有多大」。剩下的只是用柯西收敛原理把 $\varepsilon$ 收口。

## 四、四者的逻辑关系

$$
\text{狄利克雷判别法}\ \Longrightarrow\ \text{阿贝尔判别法}\ \Longrightarrow\ \text{莱布尼茨定理}
$$

**狄利克雷 ⟹ 阿贝尔**　由阿贝尔的条件知 $\{a_n\}$ 单调有界，故极限存在，记 $a=\lim\limits_{n\to\infty}a_n$。于是

$$
\sum_{n=1}^{\infty}a_n b_n=\sum_{n=1}^{\infty}(a_n-a)b_n+a\sum_{n=1}^{\infty}b_n .
$$

右端两项：$\{a_n-a\}$ 单调趋于零且 $\sum b_n$ 的部分和有界，符合狄利克雷的条件；第二项是常数乘收敛级数。故和收敛。

**狄利克雷 ⟹ 莱布尼茨**　取 $a_n=u_n$（单调趋于零）、$b_n=(-1)^{n+1}$，其部分和只在 $1$ 与 $0$ 之间摆动，有界。狄利克雷条件成立，即得莱布尼茨定理。

所以理论上只需记住狄利克雷一条。但实际做题时，阿贝尔和莱布尼茨的条件更好验证，用起来更直截了当。

## 五、使用时的一句话判断

| 遇到 | 选 |
| --- | --- |
| $\sum a_n\sin nx$、$\sum a_n\cos nx$，其中 $a_n$ 单调趋于零 | **狄利克雷**（$\sum\sin nx$ 的部分和有界） |
| 已知 $\sum u_n$ 收敛，问 $\sum\dfrac{u_n}{n}$、$\sum\dfrac{u_n}{\sqrt{n}}$、$\sum\dfrac{nu_n}{n+1}$ 是否收敛 | **阿贝尔**（$\sum u_n$ 收敛 ＋ $\left\{\frac1n\right\}$ 单调有界） |
| $\sum(-1)^{n+1}u_n$，$u_n$ 单调趋于零 | **莱布尼茨**（狄利克雷的特例） |
| $\int_1^{+\infty}\dfrac{\sin x}{x}\,\mathrm{d}x$ | **狄利克雷**（$\int\sin x\,\mathrm{d}x$ 有界 ＋ $\frac1x\searrow 0$） |
| $\int_1^{+\infty}\dfrac{\sin x}{x^{\lambda}}\arctan x\,\mathrm{d}x$ | **阿贝尔**（$\int\frac{\sin x}{x^\lambda}\,\mathrm{d}x$ 收敛 ＋ $\arctan x$ 单调有界） |
| 幂级数在端点 $x=\pm R$ 处的一致收敛 | **阿贝尔**（用于阿贝尔第二定理的证明） |

## 六、同一家族但不算「判别法」：阿贝尔两条定理

第十一章幂级数部分还有两条以阿贝尔命名、但**不是判别法**的定理，一并列出以免混淆：

**阿贝尔第一定理**　若 $\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n$ 在点 $x=\xi$ 收敛，那么它必在 $\lvert x-x_0\rvert<\lvert\xi-x_0\rvert$ 内绝对收敛；又若在 $x=\xi$ 发散，则它必在 $\lvert x-x_0\rvert>\lvert\xi-x_0\rvert$ 也发散。

> 作用：把「一个点的收敛性」传播成「一整段的收敛性」，从而定义收敛半径 $R$。

**阿贝尔第二定理**　若 $\sum\limits_{n=0}^{\infty}a_n(x-x_0)^n$ 的收敛半径为 $R$，则此级数在 $(x_0-R,x_0+R)$ 内的任一个闭区间 $[a,b]$ 上一致收敛（即内闭一致收敛）；又若级数在 $x_0+R$ 点收敛，则它必在 $[a,x_0+R]$ 上一致收敛。同理，当级数在 $x_0-R$ 收敛时可得类似结论。

> 作用：把一致收敛延拓到端点，用来证明和函数在端点连续 —— 也就是「不必真的求和，就能断定 $\arctan x$ 在 $x=\pm1$ 处仍等于幂级数」。
