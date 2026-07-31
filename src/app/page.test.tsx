import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Home from "./page";

test("presents SisyphusSQ as the page identity", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: "SisyphusSQ" }),
  ).toBeInTheDocument();
});

test("introduces SisyphusSQ as a DBA with experience calculated from 2018", () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-07-29T00:00:00+08:00"));

  try {
    render(<Home />);

    expect(screen.getByText("DBA，也做开发。")).toBeInTheDocument();
    expect(screen.getByText("2018 至今 · 8 年经验")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "DBA，是在变化里守住确定性。",
      }),
    ).toBeInTheDocument();
  } finally {
    vi.useRealTimers();
  }
});

test("offers navigation to every homepage section", () => {
  render(<Home />);

  expect(screen.getByRole("navigation", { name: "主导航" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "关于我" })).toHaveAttribute(
    "href",
    "#note",
  );
  expect(
    screen.queryByRole("link", { name: "数据库实践" }),
  ).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "项目" })).toHaveAttribute(
    "href",
    "#projects",
  );
  expect(screen.getByRole("link", { name: "文章" })).toHaveAttribute(
    "href",
    "#writing",
  );
});

test("uses the personal note for a concise engineering principle", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "让每一次改变，都经得起验证。",
    }),
  ).toBeInTheDocument();
});

test("shows the primary languages and full database stack", () => {
  render(<Home />);

  expect(
    screen.getByText(
      "主要使用 Go、Java、Python，长期从事 MySQL、MongoDB、Redis、OceanBase、向量数据库与 DTS 的开发和运维。",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText("OBSERVE · CHANGE · AUTOMATE"),
  ).toBeInTheDocument();
});

test("shows four database tools with direct GitHub links", () => {
  render(<Home />);

  const projects = [
    ["Mongo Overview Tool", "https://github.com/SisyphusSQ/mongo-overview-tool"],
    ["My2SQL Plus", "https://github.com/SisyphusSQ/my2sql-plus"],
    ["Go Oak Chunk", "https://github.com/SisyphusSQ/go-oak-chunk"],
    ["mongo-checker", "https://github.com/SisyphusSQ/mongo-checker"],
  ];

  expect(
    screen.getByRole("heading", { level: 2, name: "数据库工具" }),
  ).toBeInTheDocument();
  expect(screen.queryByText("不罗列所有仓库。")).not.toBeInTheDocument();
  expect(
    screen.queryByText("只留下最能说明工作方法的项目。"),
  ).not.toBeInTheDocument();

  for (const [name, href] of projects) {
    expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
  }
});

test("separates MongoShake open-source contributions from personal tools", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 2, name: "参与维护的开源项目" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "MongoShake" })).toHaveAttribute(
    "href",
    "https://github.com/alibaba/MongoShake",
  );
  expect(
    screen.getByText("使用 Pebble 重做全量同步时的本地 oplog 队列，让异常重启后可以接着跑。"),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "查看已合并的 PR" })).toHaveAttribute(
    "href",
    "https://github.com/alibaba/MongoShake/pulls?q=is%3Apr+is%3Amerged+author%3ASisyphusSQ",
  );
});

test("links the two selected articles to their original WeChat pages", () => {
  render(<Home />);

  expect(
    screen.getByRole("link", {
      name: "爱奇艺积分系统架构演进：从 MySQL 到 MongoDB 的统一存储实践",
    }),
  ).toHaveAttribute(
    "href",
    "https://mp.weixin.qq.com/s/AFX_qsyAPBRYyqEV365O9Q",
  );
  expect(
    screen.getByRole("link", {
      name: "别让 AI 瞎猜了：用 Harness Engineering 终结无限返工",
    }),
  ).toHaveAttribute(
    "href",
    "https://mp.weixin.qq.com/s/7U2Hhfe-6d1q3nEoDwHOWw",
  );
});

test("keeps Codex Pulse as a linked side note", () => {
  render(<Home />);

  expect(screen.getByRole("link", { name: "Codex Pulse" })).toHaveAttribute(
    "href",
    "https://github.com/SisyphusSQ/codex-pulse",
  );
});

test("describes the homepage as a ProfilePage for search engines", () => {
  const { container } = render(<Home />);

  const script = container.querySelector(
    'script[type="application/ld+json"]',
  );
  expect(script).not.toBeNull();
  expect(JSON.parse(script?.textContent ?? "{}")).toMatchObject({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "SisyphusSQ",
      jobTitle: "DBA",
      url: "https://sisyphuslab.cn/",
      sameAs: ["https://github.com/SisyphusSQ"],
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
  });
});

test("opens off-site destinations safely in a new tab", () => {
  const { container } = render(<Home />);

  const externalLinks = [
    ...container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]'),
  ];
  expect(externalLinks.length).toBeGreaterThan(0);
  for (const link of externalLinks) {
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.rel.split(" ")).toEqual(
      expect.arrayContaining(["noopener", "noreferrer"]),
    );
  }
});
