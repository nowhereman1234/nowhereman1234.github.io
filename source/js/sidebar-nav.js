/* ===========================================================
   左侧竖排导航的运行时部分
   只做一件事：把侧栏里那个 Search 的点击，转发给主题原生的搜索按钮。
   菜单本身是构建期就渲染好的静态 HTML，不依赖这里。
   =========================================================== */

(function () {
  'use strict'

  function bindSearch() {
    var sideBtn = document.getElementById('sidenav-search-btn')
    // 主题把搜索事件绑在 #search-button > .search 上（querySelector 取第一个）
    var origBtn = document.querySelector('#search-button > .search')

    if (!sideBtn || !origBtn) return
    if (sideBtn.getAttribute('data-bound') === '1') return
    sideBtn.setAttribute('data-bound', '1')

    sideBtn.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      // 即使 origBtn 因顶部条被 display:none 隐藏，click() 仍会触发已注册的处理器
      origBtn.click()
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSearch)
  } else {
    bindSearch()
  }

  // 兜底：主题脚本较晚执行时再试一次
  window.addEventListener('load', bindSearch)
})()
