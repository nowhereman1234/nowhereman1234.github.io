// 给 hexo-renderer-markdown-it 挂上 KaTeX 数学渲染。
//
// 为什么用脚本而不是 _config.yml 的 plugins:
//   markdown-it-texmath 需要把 katex 的「引擎对象」传进去，YAML 里没法表达。
//   hexo-renderer-markdown-it 暴露了 `markdown-it:renderer` 过滤器，
//   在这里直接拿到 parser 实例，可以传任意 JS 对象。
//
// 为什么不用 markdown-it-katex:
//   那个包是 2016 年的，把 $$...$$ 当成行内数学（displayMode: false）渲染，
//   导致 \tag、\begin{align} 这类只能在 display 模式下用的写法全部报错。
//
// 分隔符约定：`dollars`
//   行内  $...$
//   行间  $$...$$
//   ⚠️ 重要：\begin{align} / cases / pmatrix 这类环境，必须整块包在 $$ 里，
//      否则不会被识别为数学，里面的 \\ 会被 Markdown 吃掉。

'use strict'

let katex
let texmath
try {
  katex = require('katex')
  texmath = require('markdown-it-texmath')
} catch (e) {
  hexo.log.warn('[markdown-math] 缺少 katex 或 markdown-it-texmath，公式将不会渲染：' + e.message)
}

if (katex && texmath) {
  hexo.extend.filter.register('markdown-it:renderer', function (md) {
    md.use(texmath, {
      engine: katex,
      delimiters: 'dollars',
      katexOptions: {
        throwOnError: false,   // 单条公式写错不至于整页构建失败
        errorColor: '#cc0000',
        // 行间公式允许稍微超出正文宽度时横向滚动
        strict: false,
      },
    })
    return md
  })
}
