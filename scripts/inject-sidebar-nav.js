// 在构建时把「站点标题 + 竖排菜单」插入左侧栏的开头。
//
// 为什么在构建期做而不是运行时搬 DOM：
//   Butterfly 的顶部导航 (#nav) 同时承载移动端汉堡菜单和搜索按钮的 id，
//   运行时搬走会破坏它们。构建期插入一份独立的侧栏菜单最安全。
//
// 菜单数据直接读 _config.butterfly.yml 的 menu: ，
// 格式与主题一致：  标签: /路径/ || 图标class

'use strict'

// 注意：属性顺序是 class 在前、id 在后，正则不能写死顺序
const ASIDE_RE = /<div[^>]*\bid="aside-content"[^>]*>/

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function split2(value) {
  const parts = String(value).split('||')
  return [(parts[0] || '').trim(), (parts[1] || '').trim()]
}

function linkHtml(href, icon, label, extraClass) {
  const cls = 'sidenav-link' + (extraClass ? ' ' + extraClass : '')
  return (
    '<a class="' + cls + '" href="' + esc(href) + '">' +
    (icon ? '<i class="' + esc(icon) + '"></i>' : '') +
    '<span>' + esc(label) + '</span>' +
    '</a>'
  )
}

function buildMenu(menu) {
  let html = ''
  for (const label of Object.keys(menu)) {
    const value = menu[label]
    if (typeof value !== 'object' || value === null) {
      const [href, icon] = split2(value)
      html += '<li class="sidenav-item">' + linkHtml(href, icon, label) + '</li>'
    } else {
      // 分组：侧栏里直接展开，不做下拉
      const [groupLabel, groupIcon] = split2(label)
      html += '<li class="sidenav-group">' +
        '<div class="sidenav-group-label">' +
        (groupIcon ? '<i class="' + esc(groupIcon) + '"></i>' : '') +
        '<span>' + esc(groupLabel) + '</span></div><ul class="sidenav-sublist">'
      for (const lab of Object.keys(value)) {
        const [childHref, childIcon] = split2(value[lab])
        html += '<li class="sidenav-item">' + linkHtml(childHref, childIcon, lab) + '</li>'
      }
      html += '</ul></li>'
    }
  }
  return html
}

hexo.extend.filter.register('after_render:html', function (str) {
  if (!ASIDE_RE.test(str)) return str

  const themeCfg = hexo.theme.config || {}
  const menu = themeCfg.menu || {}
  const siteTitle = hexo.config.title || ''

  let html = '<div class="card-widget sidenav-card">'
  html += '<div class="sidenav-title"><a href="/">' + esc(siteTitle) + '</a></div>'
  html += '<ul class="sidenav-list">'
  html += buildMenu(menu)
  // 搜索放在最后，与截图一致；点击由 /js/sidebar-nav.js 转发给主题原生的搜索按钮
  html += '<li class="sidenav-item sidenav-search">' +
    '<a class="sidenav-link" href="javascript:void(0)" id="sidenav-search-btn">' +
    '<i class="fas fa-search fa-fw"></i><span>Search</span></a></li>'
  html += '</ul></div>'

  return str.replace(ASIDE_RE, function (m) { return m + html })
})
