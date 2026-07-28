export const githubProfile = "https://github.com/SisyphusSQ";

export const focusAreas = [
  {
    index: "01",
    title: "看清系统",
    description: "诊断、观测、审计与容量判断",
  },
  {
    index: "02",
    title: "安全变更",
    description: "边界、回滚语义与验证路径",
  },
  {
    index: "03",
    title: "沉淀工具",
    description: "把人工经验变成可复用能力",
  },
] as const;

export const databasePrinciples = [
  {
    index: "01",
    label: "看清系统",
    title: "先让证据说话",
    description:
      "从运行状态、慢查询、索引与容量信号开始，建立能够被复查的判断依据。",
  },
  {
    index: "02",
    label: "安全变更",
    title: "把边界写进流程",
    description:
      "将风险、回滚、事务和并发边界显式化，让每一次变化都有可验证的出口。",
  },
  {
    index: "03",
    label: "沉淀工具",
    title: "让经验可以复用",
    description:
      "把重复判断封装成工具与工作流，让可靠性不依赖某一次临场发挥。",
  },
] as const;

export const projects = [
  {
    index: "01",
    name: "Mongo Overview Tool",
    subtitle: "MongoDB 集群概览与只读诊断",
    description:
      "把分片、复制、索引、容量与慢查询信号放在同一条证据链上，帮助工程师更快看清集群状态。",
    tags: ["MONGODB", "GO", "DIAGNOSTICS"],
    href: "https://github.com/SisyphusSQ/mongo-overview-tool",
  },
  {
    index: "02",
    name: "My2SQL Plus",
    subtitle: "MySQL binlog 解析与回滚分析",
    description:
      "从 binlog 生成原始与回滚 SQL，同时提供 DML 统计和大事务分析，让变更后的修复路径更清晰。",
    tags: ["MYSQL", "BINLOG", "RECOVERY"],
    href: "https://github.com/SisyphusSQ/my2sql-plus",
  },
  {
    index: "03",
    name: "Go Oak Chunk",
    subtitle: "MySQL DML 的受控批处理",
    description:
      "围绕分片、并发和事务边界组织批量 DML，把大规模数据操作拆成可控制、可观察的步骤。",
    tags: ["MYSQL", "GO", "BATCHING"],
    href: "https://github.com/SisyphusSQ/go-oak-chunk",
  },
] as const;

export const articles = [
  {
    index: "01",
    date: "2025.07.17",
    title:
      "爱奇艺积分系统架构演进：从 MySQL 到 MongoDB 的统一存储实践",
    titleLines: [
      "爱奇艺积分系统架构演进：",
      "从 MySQL 到 MongoDB 的统一存储实践",
    ],
    description:
      "围绕爱奇艺积分系统从 MySQL 到 MongoDB 的演进，讨论统一存储与业务扩展下的数据架构实践。",
    category: "DATABASE ARCHITECTURE",
    source: "微信公众号",
    author: "爱奇艺技术产品团队",
    href: "https://mp.weixin.qq.com/s/AFX_qsyAPBRYyqEV365O9Q",
  },
  {
    index: "02",
    date: "2026.05.14",
    title: "别让 AI 瞎猜了：用 Harness Engineering 终结无限返工",
    titleLines: [
      "别让 AI 瞎猜了：",
      "用 Harness Engineering 终结无限返工",
    ],
    description:
      "讨论如何用 Harness Engineering 补齐上下文、边界、验证和回写，让 AI 编程从局部产出走向可复查交付。",
    category: "AI ENGINEERING",
    source: "微信公众号",
    author: "爱奇艺技术产品团队",
    href: "https://mp.weixin.qq.com/s/7U2Hhfe-6d1q3nEoDwHOWw",
  },
] as const;

export const codexPulse = {
  name: "Codex Pulse",
  href: "https://github.com/SisyphusSQ/codex-pulse",
  description:
    "Codex Pulse 是一款本地优先的 macOS 工具，用来观察 Codex 使用情况、配额、会话活动与数据健康。它不是主页的主角，但延续了我对“先看清系统”的偏好。",
  signals: ["USAGE / QUOTA", "SESSIONS / ACTIVITY", "DATA / HEALTH"],
} as const;

export const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "SisyphusSQ",
    alternateName: "Suqing",
    description:
      "关注数据库工程、可靠变更、工具沉淀与 AI 工作流实践。",
    image: "https://sisyphuslab.cn/avatar.jpg",
    url: "https://sisyphuslab.cn/",
    sameAs: [githubProfile],
  },
} as const;
