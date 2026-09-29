// 在 <body> 开头插入一个磨砂填充层 #bg-blur。
//
// 用途：宽屏横屏时 #web_bg 用 background-size: contain 完整显示竖构图背景，
//       左右两侧的空档由这一层把同一张图放大模糊后填满，形成磨砂补边。
//
// 为什么用独立 div 而不是 #web_bg::before：
//   暗色模式下主题自己占用了 #web_bg:before 做黑色遮罩（darkmode.styl 第 87 行），
//   而且 #web_bg 有 z-index 会形成层叠上下文，伪元素的负 z-index 也压不到它背后。
//
// 图片地址直接从主题配置的 background: 读取，保证两处永远一致。

'use strict'

const BODY_RE = /<body([^>]*)>/

function resolveBgUrl(bg) {
  const value = Array.isArray(bg) ? bg[0] : bg
  if (!value || typeof value !== 'string') return ''
  // 允许配置文件里直接写颜色（如 #eee），那就交给主题自己处理
  if (/^(#|rgb|hsl)/i.test(value.trim())) return ''
  return value.trim()
}

hexo.extend.filter.register('after_render:html', function (str) {
  if (str.indexOf('id="bg-blur"') !== -1) return str
  if (!BODY_RE.test(str)) return str

  const url = resolveBgUrl((hexo.theme.config || {}).background)
  if (!url) return str

  const div = '<div id="bg-blur" aria-hidden="true" style="background-image:url(' + url + ')"></div>'
  return str.replace(BODY_RE, function (m, attrs) {
    return '<body' + attrs + '>' + div
  })
})
