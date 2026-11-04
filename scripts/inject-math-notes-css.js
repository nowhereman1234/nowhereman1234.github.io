// 给数学笔记注入排版微调样式。
//
// 为什么不能把 <style> 直接写在文章正文里：
//   首页摘要会把它当成正文文字显示出来（已出现过这个问题）。
//
// 做法：在 after_render:html 阶段判断当前页面是否是数学笔记，是就把样式插到 </head> 前。
// 样式只存在于这些页面，生活随笔等其他文章完全不受影响。
//
// 判断依据：文章 front-matter 里的 mathnotes: true。
//   （不能靠 page.categories —— 实测 after_render:html 的 data.page 里没有 categories 字段）
//
// 注意：导出 PDF 用的是 tools/export-print-html.mjs，它有自己独立的打印样式，
// 不依赖这里的注入。

'use strict'

const CSS = [
  '/* 数学笔记的排版微调（仅 mathnotes: true 的文章） */',
  '#article-container h2 { margin-top: 3.2em; margin-bottom: 1.2em; padding-top: .7em; border-top: 1px solid var(--hr-color, #C3E3D2); }',
  '#article-container h3 { margin-top: 2.6em; margin-bottom: 1.1em; }',
  '#article-container p { margin-bottom: 1.2em; }',
  '#article-container .katex-display { margin: .95em 0; }',
  '#article-container hr { margin: 2.8em 0; }',
  '#article-container table { margin: 1.2em 0; font-size: .92em; }',
  '#article-container table th { background: rgba(111,175,140,.14); }'
].join('\n')

hexo.extend.filter.register('after_render:html', function (str, data) {
  const page = data && data.page
  if (!page) return str
  if (!page.mathnotes) return str
  if (str.indexOf('</head>') === -1) return str
  return str.replace('</head>', '<style>\n' + CSS + '\n</style></head>')
}, 1)