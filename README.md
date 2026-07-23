# 清珞未来 — 官方网站

> **河北清珞未来信息技术有限公司** · AI 数据服务全链路解决方案提供商

清珞未来致力于成为 AI 模型全生命周期的数据服务伙伴，提供高质量的数据标注、数据采集、大模型数据及内容审核等专业 AI 数据服务。本项目为其官方网站的静态页面源码。

## 项目概览

| 页面 | 路由 | 内容 |
|------|------|------|
| 首页 | `index.html` | 品牌展示、核心业务板块、自研平台、行业解决方案、合作伙伴 |
| 数据服务 | `services.html` | 数据标注、数据采集、大模型数据、内容审核 & AI 视频/动漫 |
| 解决方案 | `solutions.html` | 智能驾驶、大语言模型、AI 视频/动漫、智慧医疗等行业方案 |
| 技术与保障 | `technology.html` | 自研工具平台、三级质控体系、标准化 SOP 流程、项目经验 |
| 关于我们 | `about.html` | 公司概况、战略优势、核心团队、四大基地、文化理念 |
| 联系我们 | `contact.html` | 联系表单、联系方式、全国交付基地 |

## 技术栈

- **语言**: HTML5 / CSS3 / JavaScript (原生)
- **架构**: 纯静态站点，零外部依赖
- **样式**:
  - 共享样式: `assets/css/style.css`（全局通用样式）
  - 页面独有样式: 各页面 `<style>` 标签内联
- **动画**: CSS `@keyframes` 渐入动画、滚动触发渐显（IntersectionObserver）
- **图标**: SVG 矢量图标
- **图片**: PNG / JPG / SVG，含 PPT 导出的 47 张企业宣传素材

## 项目结构

```
qingluo_future/
├── index.html                  # 首页
├── about.html                  # 关于我们
├── services.html               # 数据服务
├── solutions.html              # 解决方案
├── technology.html             # 技术与保障
├── contact.html                # 联系我们
├── assets/
│   ├── css/
│   │   └── style.css           # 共享样式文件
│   ├── images/                 # 矢量图标、品牌素材
│   └── ppt_images/             # PPT 导出的 47 张企业宣传图
├── README.md
└── .gitignore
```

## 设计风格

- **色调**: 深色主题（`#030014`），紫色品牌色（`#7000FF`）
- **导航**: 固定顶部悬浮药丸导航栏，距浏览器顶部 5px
- **特效**: 紫色渐变光晕、网格背景、模糊毛玻璃效果、卡片悬浮动效
- **响应式**: 适配桌面端 / 平板（1024px）/ 手机端（768px）

## 本地预览

直接在浏览器中打开各 HTML 文件即可预览，无需构建或安装依赖。

```bash
# 克隆仓库
git clone git@github.com:Fengwensai/qingluo_future.git

# 直接打开首页
open index.html
```

## 部署

该项目为纯静态站点，可部署至任意 Web 服务器或静态托管平台（GitHub Pages、Vercel、Netlify 等）。

---

© 2026 河北清珞未来信息技术有限公司 · All rights reserved.
