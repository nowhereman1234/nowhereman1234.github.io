// 让浏览器标签页标题恒为站点标题本身，不带任何前后缀。
//
// Butterfly 的 layout/includes/head.pug 默认拼法是：
//   首页 -> config.title + ' - ' + config.subtitle
//   子页 -> page.title + ' | ' + config.title
// 这里在 HTML 渲染完成后统一覆盖成 config.title。
//
// 想恢复「页面名 | 站点名」的默认行为，删掉这个文件即可。

hexo.extend.filter.register('after_render:html', function (str) {
  const title = hexo.config.title || 'nowhereland'
  return str.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>')
})
