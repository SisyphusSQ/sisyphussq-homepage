# SisyphusSQ Homepage

SisyphusSQ 的个人主页，聚焦数据库工程、可靠变更、工具沉淀和 AI 工作流实践。

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- Vitest + Testing Library
- Vercel

## 本地开发

```bash
npm install
npm run dev
```

默认访问 `http://localhost:3000`。

## 质量门禁

```bash
npm run verify
```

该命令依次执行单元测试、TypeScript 检查、ESLint 和生产构建。

## 内容位置

- 主页结构：`src/app/page.tsx`
- 项目、文章和站点资料：`src/content/site.ts`
- SEO 元数据：`src/content/site-metadata.ts`
- 视觉样式：`src/app/globals.css`
- 原始设计稿：`design/reference/sisyphussq-homepage-v3.png`

首页中的 Slogan 和“我想说”仍是明确的占位文案，后续可以只修改内容数据，不必调整整体页面结构。

## 部署

项目按 Vercel 的 Next.js 默认构建流程部署：

```text
Build Command: npm run build
Output: Next.js 默认输出
Node.js: Vercel 当前支持的 LTS 版本
```

计划使用：

- GitHub 仓库：`SisyphusSQ/sisyphussq-homepage`
- 正式域名：`https://sisyphuslab.cn`
- `www.sisyphuslab.cn`：重定向到根域名

先验证 Vercel Preview；确认页面后再创建 Production 并按 Vercel 实际返回值配置 DNSPod。
