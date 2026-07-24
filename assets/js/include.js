/* ===== Include Header & Footer ===== */
(function () {
  var currentPage = document.body.getAttribute('data-page') || '';

  /* ===== Shared Nav HTML ===== */
  var navHTML = '<div class="nav-wrapper">' +
    '<a href="index.html" class="nav-logo">' +
      '<img src="assets/images/logo-h.png" alt="清珞未来">' +
    '</a>' +
    '<div class="nav-pill" id="navPill">' +
      '<a href="index.html" class="page-link" data-page="index">首页</a>' +
      '<a href="services.html" class="page-link" data-page="services">数据服务</a>' +
      '<a href="solutions.html" class="page-link" data-page="solutions">解决方案</a>' +
      '<a href="technology.html" class="page-link" data-page="technology">技术与保障</a>' +
      '<a href="about.html" class="page-link" data-page="about">关于我们</a>' +
      '<a href="contact.html" class="page-link" data-page="contact">联系我们</a>' +
    '</div>' +
    '<div class="toggle-group" id="toggles">' +
      '<button class="toggle-btn" id="themeToggle" onclick="switchTheme()" title="切换主题">🌙</button>' +
      '<button class="toggle-btn" id="langToggle" onclick="switchLang()" title="切换语言">中</button>' +
    '</div>' +
  '</div>';

  /* ===== Shared Footer HTML ===== */
  var footerHTML = '<footer class="footer">' +
    '<div class="container">' +
      '<div class="footer-inner">' +
        '<div class="footer-brand">' +
          '<div class="footer-logo"><a href="index.html"><img src="assets/images/logo-h.png" alt="清珞未来"></a></div>' +
          '<div class="footer-brand-text">' +
          '<span class="logo-text">清珞未来</span>' +
          '<p>智绘数据，标注未来</p>' +
        '</div>' +
        '</div>' +
        '<div>' +
          '<h4>数据服务</h4>' +
          '<a href="services.html">数据标注服务</a>' +
          '<a href="services.html">数据采集服务</a>' +
          '<a href="services.html">大模型数据服务</a>' +
          '<a href="services.html">内容审核服务</a>' +
        '</div>' +
        '<div>' +
          '<h4>解决方案</h4>' +
          '<a href="solutions.html">智能驾驶</a>' +
          '<a href="solutions.html">大语言模型</a>' +
          '<a href="solutions.html">智慧医疗</a>' +
          '<a href="solutions.html">智慧安防</a>' +
        '</div>' +
        '<div>' +
          '<h4>技术与保障</h4>' +
          '<a href="technology.html">自研平台</a>' +
          '<a href="technology.html">SOP 流程</a>' +
          '<a href="technology.html">三级质控</a>' +
          '<a href="technology.html">项目经验</a>' +
        '</div>' +
        '<div>' +
          '<h4>关于我们</h4>' +
          '<a href="about.html">公司简介</a>' +
          '<a href="about.html">核心团队</a>' +
          '<a href="about.html#culture">文化理念</a>' +
          '<a href="about.html#bases">基地分布</a>' +
        '</div>' +
        '<div>' +
          '<h4>联系我们</h4>' +
          '<a href="contact.html">在线咨询</a>' +
          '<a href="contact.html">商务合作</a>' +
          '<span class="contact-info">400-XXX-XXXX</span>' +
          '<span class="contact-info">contact@qingluoai.com</span>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p>© 2026 河北清珞未来信息技术有限公司 · All rights reserved.</p>' +
      '</div>' +
    '</div>' +
  '</footer>';

  function markActivePage() {
    var links = document.querySelectorAll('#navPill .page-link');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-page') === currentPage) {
        links[i].classList.add('active');
        break;
      }
    }
  }

  function initToggles() {
    var themeBtn = document.getElementById('themeToggle');
    if (themeBtn && localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light');
      themeBtn.textContent = '☀️';
    }
    var langBtn = document.getElementById('langToggle');
    if (langBtn && localStorage.getItem('lang') === 'en') {
      if (typeof switchLang === 'function') switchLang();
    }
  }

  /* Theme toggle (called from nav onclick) */
  window.switchTheme = function () {
    document.body.classList.toggle('light');
    var isLight = document.body.classList.contains('light');
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  function initReveal() {
    var els = document.querySelectorAll('.ql-reveal, .ql-slide, .ql-scale');
    if (els.length) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      }, { threshold: 0.15 });
      els.forEach(function (el) { obs.observe(el); });
    }
  }

  /* Inject nav and footer on DOM ready */
  document.addEventListener('DOMContentLoaded', function () {
    var navSlot = document.getElementById('nav-placeholder');
    var footerSlot = document.getElementById('footer-placeholder');
    if (navSlot) {
      navSlot.outerHTML = navHTML;
      markActivePage();
      initToggles();
    }
    if (footerSlot) {
      footerSlot.outerHTML = footerHTML;
    }
    initReveal();
  });
})();
