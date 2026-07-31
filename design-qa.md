# SisyphusSQ Homepage 设计 QA

## 检查基线

- 设计源：`/Users/suqing/Coding/front/sisyphussq-homepage/design/reference/sisyphussq-homepage-v3.png`
- 实现截图：`/Users/suqing/Coding/front/sisyphussq-homepage/design/qa/implementation-desktop-release.jpg`
- 并排对比：`/Users/suqing/Coding/front/sisyphussq-homepage/design/qa/comparison-desktop-release.jpg`
- 页面状态：公开、未登录、Next.js production build
- 桌面 CSS viewport：`1440 × 1000`
- 设计源与拼接实现：`1440 × 4547`，`devicePixelRatio = 1`
- 移动端 CSS viewport：`390 × 844`

集成浏览器的原始桌面截图不包含底部 10px，单屏像素为
`1440 × 990`。QA 拼接前仅做纵向归一化到 `1440 × 1000`，没有裁剪或
改变页面横向比例。移动端原始截图为 `390 × 834`。设计稿没有单独的移动
端基线，因此移动端只检查响应式完整性、溢出、可读性和交互，不宣称像素级
对齐。

## 完整页面与重点区域

完整页面对比：

- `design/qa/comparison-desktop-release.jpg`

重点区域对比：

- `design/qa/comparison-hero-release.jpg`
- `design/qa/comparison-note-release.jpg`
- `design/qa/comparison-database-release.jpg`
- `design/qa/comparison-projects-release.jpg`
- `design/qa/comparison-writing-release.jpg`
- `design/qa/comparison-codex-footer-release.jpg`

移动端证据：

- `design/qa/implementation-mobile-top-release.jpg`
- `design/qa/implementation-mobile-note-release.jpg`
- `design/qa/implementation-mobile-projects-release.jpg`
- `design/qa/implementation-mobile-writing-release.jpg`
- `design/qa/implementation-mobile-codex-release.jpg`
- `design/qa/implementation-mobile-footer-release.jpg`

## 检查结果

| 表面 | 结果 | 证据 |
| --- | --- | --- |
| 字体与层级 | 通过 | Newsreader、Geist、IBM Plex Mono 的职责和标题换行与设计一致 |
| 色彩 | 通过 | 背景、白色内容区、深色区、Codex 蓝色区与设计 token 一致 |
| 间距与区段高度 | 通过 | 桌面总高 `4547px`，各区段边界与设计源一致 |
| 图片 | 通过 | GitHub 头像用于导航、favicon、OG image |
| 文案与链接 | 通过 | 项目、文章、GitHub 链接均为真实地址；占位文案明确标记 |
| 响应式 | 通过 | `390px` 宽无横向溢出，标题没有孤字，导航与卡片可完整阅读 |
| 交互 | 通过 | “继续阅读”和“项目”锚点跳转正确；14 个外链均包含安全属性 |
| 控制台 | 通过 | production build 页面无 `error`、`warn`、`warning` |
| HTTP 表面 | 通过 | 首页、robots、sitemap、OG image 为 200；未知路由为 404；安全响应头存在 |

## 比较与修正历史

1. 第一轮发现文章区域只有内容壳为白色，未形成设计稿的全宽白色区段。
   已改为全宽 section wrapper。
2. 第一轮发现实现总高约 `4791px`，区段比例与设计源不一致。已按设计源
   的区段边界重新分配桌面高度，最终总高为 `4547px`。
3. 第二轮发现文章标题换行和展示字体偏差。已固定两篇文章的视觉换行，
   并统一展示型标题的字体与字重。
4. 第二轮发现移动端项目区标题末字孤立换行。已调整移动端标题字号，
   在 `390px` 宽度下复查通过。
5. 第三轮完整页面、重点区域和移动端复查后，没有剩余可执行的
   P0、P1 或 P2 视觉问题。

## 可接受差异

- 浏览器截图带有系统滚动条，而静态设计源没有；该差异属于浏览器表面，
  不属于页面实现。
- 不同平台的字体栅格化存在轻微差异，不影响字号、换行、层级或布局。

## 最终结果

passed

## DBA 职业文案迭代（2026-07-29）

本轮只修改本地页面内容与对应元数据，没有发布或部署。原设计 QA 仍作为
页面结构与视觉语言基线；由于首屏和“关于我”的真实文案长度发生变化，不再
沿用旧文案下的 `4547px` 总高作为像素级验收条件。

| 表面 | 结果 | 证据 |
| --- | --- | --- |
| 桌面端 | 通过 | `1440 × 1000` 首屏层级清晰，技术栈自然换行，无横向溢出 |
| 移动端 | 通过 | `390 × 844` 无横向溢出，导航、长段落与完整数据库标签可读 |
| 动态年限 | 通过 | 2026 年显示“2018 至今 · 8 年经验”，浏览器可校准过期的静态构建年份 |
| 控制台 | 通过 | 桌面端和移动端均为 0 error、0 warning |
| HTTP 表面 | 通过 | 首页、robots、sitemap、OG image 为 200；未知路由为 404 |

当前状态：本地自动化与视觉 smoke 已通过，最终文案仍等待 SisyphusSQ
本人查看页面后确认。
