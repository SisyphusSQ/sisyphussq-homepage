export const githubProfile = "https://github.com/SisyphusSQ";

export const careerStartYear = 2018;

export function formatExperienceSummary(currentYear: number) {
  return `${careerStartYear} 至今 · ${currentYear - careerStartYear} 年经验`;
}

export const focusAreas = [
  {
    index: "01",
    title: "看清系统",
    description: "诊断、观测、审计与容量判断",
  },
  {
    index: "02",
    title: "稳妥变更",
    description: "明确影响范围，做好验证和回退",
  },
  {
    index: "03",
    title: "沉淀工具",
    description: "把人工经验变成可复用能力",
  },
] as const;

export const projects = [
  {
    index: "01",
    name: "Mongo Overview Tool",
    subtitle: "MongoDB 集群概览与只读诊断",
    description:
      "把分片、复制、索引、容量与慢查询信号放在同一条证据链上，帮助工程师更快看清集群状态。",
    tags: ["MONGODB", "GO", "DIAGNOSTICS", "SDK"],
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
    tags: ["MYSQL", "GO", "BATCHING", "TIDB", "OCEANBASE", "SDK"],
    href: "https://github.com/SisyphusSQ/go-oak-chunk",
  },
  {
    index: "04",
    name: "mongo-checker",
    subtitle: "MongoDB 迁移后的数据校验",
    description:
      "对比源端与目标端的库、集合、文档和可选元数据差异，用于核对 MongoDB 数据迁移结果。",
    tags: ["MONGODB", "GO", "MIGRATION", "VALIDATION"],
    href: "https://github.com/SisyphusSQ/mongo-checker",
  },
] as const;

export const mongoShakeContribution = {
  name: "MongoShake",
  subtitle: "MongoDB oplog 数据同步工具",
  href: "https://github.com/alibaba/MongoShake",
  pullRequestsHref:
    "https://github.com/alibaba/MongoShake/pulls?q=is%3Apr+is%3Amerged+author%3ASisyphusSQ",
  contributions: [
    "增加按 oplog 操作类型过滤的配置。",
    "新增 Prometheus /metrics，并补齐同步延迟与队列指标。",
    "让不同高可用同步任务使用各自的 election id。",
    "使用 Pebble 重做全量同步时的本地 oplog 队列，让异常重启后可以接着跑。",
  ],
} as const;

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
    "Codex Pulse 是一款本地优先的 macOS 工具，用来观察 Codex 使用情况、配额、会话活动与数据健康。",
  signals: ["USAGE / QUOTA", "SESSIONS / ACTIVITY", "DATA / HEALTH"],
} as const;

export const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "SisyphusSQ",
    alternateName: "Suqing",
    jobTitle: "DBA",
    description:
      "自 2018 年起从事数据库与中间件的开发和运维，主要使用 Go、Java、Python。",
    image: "https://sisyphuslab.cn/avatar.jpg",
    url: "https://sisyphuslab.cn/",
    sameAs: [githubProfile],
    knowsAbout: [
      "MySQL",
      "MongoDB",
      "Redis",
      "OceanBase",
      "向量数据库",
      "DTS",
      "Go",
      "Java",
      "Python",
    ],
  },
} as const;
