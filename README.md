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

首页以 DBA 与数据库工程为职业主线，展示自 2018 年起的工作经验、Go /
Java / Python 技术栈，以及 MySQL、MongoDB、Redis、OceanBase、向量数据库
与 DTS 的开发和运维实践。经验年限由当前年份减去 2018 动态计算。

## 部署

项目按 Vercel 的 Next.js 默认构建流程部署：

```text
Build Command: npm run build
Output: Next.js 默认输出
Node.js: Vercel 当前支持的 LTS 版本
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSisyphusSQ%2Fsisyphussq-homepage&project-name=sisyphussq-homepage&repository-name=sisyphussq-homepage)

首次连接账号后，在项目根目录执行：

```bash
npx vercel@58.1.0 link --scope suqing
npx vercel@58.1.0 deploy
```

第二条命令只创建 Preview，不会发布 Production。`design/`、`design-qa.md`
和测试覆盖率产物已通过 `.vercelignore` 排除，不进入部署上传包。

计划使用：

- GitHub 仓库：`SisyphusSQ/sisyphussq-homepage`
- 正式域名：`https://sisyphuslab.cn`
- `www.sisyphuslab.cn`：重定向到根域名

先验证 Vercel Preview；确认页面后再创建 Production 并按 Vercel 实际返回值配置 DNSPod。
