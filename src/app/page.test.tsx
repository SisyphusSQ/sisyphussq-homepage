import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "./page";

test("presents SisyphusSQ as the page identity", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: "SisyphusSQ" }),
  ).toBeInTheDocument();
});

test("offers navigation to every homepage section", () => {
  render(<Home />);

  expect(screen.getByRole("navigation", { name: "主导航" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "我想说" })).toHaveAttribute(
    "href",
    "#note",
  );
  expect(screen.getByRole("link", { name: "数据库实践" })).toHaveAttribute(
    "href",
    "#database",
  );
  expect(screen.getByRole("link", { name: "项目" })).toHaveAttribute(
    "href",
    "#projects",
  );
  expect(screen.getByRole("link", { name: "文章" })).toHaveAttribute(
    "href",
    "#writing",
  );
});

test("shows three curated database projects with direct GitHub links", () => {
  render(<Home />);

  const projects = [
    ["Mongo Overview Tool", "https://github.com/SisyphusSQ/mongo-overview-tool"],
    ["My2SQL Plus", "https://github.com/SisyphusSQ/my2sql-plus"],
    ["Go Oak Chunk", "https://github.com/SisyphusSQ/go-oak-chunk"],
  ];

  for (const [name, href] of projects) {
    expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
  }
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
      url: "https://sisyphuslab.cn/",
      sameAs: ["https://github.com/SisyphusSQ"],
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
