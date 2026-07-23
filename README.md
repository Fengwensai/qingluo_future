# 清珞未来 — 官方网站

> **河北清珞未来信息技术有限公司** · AI 数据服务全链路解决方案提供商

清珞未来致力于成为 AI 模型全生命周期的数据服务伙伴，提供高质量的数据标注、数据采集、大模型数据及内容审核等专业 AI 数据服务。本项目为其官方网站的静态页面源码。

## 预览

| 页面 | 路径 | 内容 |
|------|------|------|
| 首页 | `index.html` | 品牌展示、核心业务、自研平台、行业方案、合作伙伴 |
| 关于我们 | `about.html` | 公司概况、战略优势、核心团队、四大基地、文化理念 |
| 数据服务 | `services.html` | 数据标注、数据采集、大模型数据、内容审核 |
| 解决方案 | `solutions.html` | 智能驾驶、大语言模型、AI 视频、智慧医疗 |
| 技术与保障 | `technology.html` | 自研平台、SOP 流程、三级质控、项目经验 |
| 联系我们 | `contact.html` | 联系表单、基地分布、联系方式 |
| 404 | `404.html` | 自定义错误页面 |

## 技术栈

- **语言**: HTML5 / CSS3 / JavaScript (原生)
- **架构**: 纯静态站点，零外部依赖
- **样式架构**:
  - `assets/css/style.css` — 全局共享样式（导航、页脚、布局、按钮、动画等）
  - 各页面 `<style>` 标签 — 页面专属样式
- **多语言**: `assets/js/i18n.js` — 内置翻译引擎，支持中/英文切换，含 **380+** 条翻译
- **主题切换**: 昼夜模式，自动保存偏好至 `localStorage`
- **动画**: CSS `@keyframes` 渐入 + 滚动触发渐显（`ql-reveal`/`ql-slide`/`ql-scale`）
- **图像**: 矢量 SVG 图标 + PNG/JPEG 实拍素材（已优化压缩）

## 项目结构

```
qingluo_future/
├── index.html                  # 首页
├── about.html                  # 关于我们
├── services.html               # 数据服务
├── solutions.html              # 解决方案
├── technology.html             # 技术与保障
├── contact.html                # 联系我们
├── 404.html                    # 自定义 404
├── assets/
│   ├── css/
│   │   └── style.css           # 全局共享样式
│   ├── js/
│   │   └── i18n.js             # 中英文翻译引擎
│   ├── images/                 # 品牌图标、矢量素材
│   ├── images/partners/        # 合作伙伴 Logo
│   └── ppt_images/             # PPT 导出的企业宣传素材
├── README.md
└── .gitignore
```

## 设计亮点

- **深色主题**：`#0d0028` 暖紫深色背景 + `#7000FF` 品牌紫色
- **固定导航**：悬浮药丸导航栏，距顶部 5px，左右带 LOGO 和功能按钮
- **跑马灯**：合作伙伴/基地/文化图片无缝循环滚动，悬浮暂停
- **中英双语**：一键切换，全文翻译，偏好持久化
- **昼夜模式**：🌙/☀️ 切换，适配所有 UI 元素
- **响应式**: 桌面 / 平板(1024px) / 手机(768px) 三档适配

## 本地运行

```bash
# 克隆仓库
git clone https://github.com/Fengwensai/qingluo_future.git

# 直接打开首页（无需构建）
open index.html
```

## 构建工具

无构建步骤。项目为纯静态 HTML/CSS/JS，直接浏览器打开即可运行。

## 图片优化

PPT 导出素材使用 `pngquant` 压缩，压缩率约 30-50%。如需重新压缩：

```bash
find assets/ -name "*.png" -size +200k -exec pngquant --quality=80-95 --force --ext .png {} \;
```

## 部署

支持任意静态托管平台：

| 平台 | 说明 |
|------|------|
| GitHub Pages | 推送到 `master` 分支即可 |
| Vercel / Netlify | 导入仓库，自动部署 |
| 任意 Web 服务器 | 直接托管项目目录 |

---

© 2026 河北清珞未来信息技术有限公司 · All rights reserved.
