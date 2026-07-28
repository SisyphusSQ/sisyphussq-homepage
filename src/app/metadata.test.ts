import { expect, test } from "vitest";
import { siteMetadata as metadata } from "@/content/site-metadata";

test("publishes canonical metadata for sisyphuslab.cn", () => {
  expect(metadata.metadataBase?.toString()).toBe("https://sisyphuslab.cn/");
  expect(metadata.alternates?.canonical).toBe("/");
  expect(metadata.title).toBe("SisyphusSQ · 数据库工程与可靠工具");
  expect(metadata.description).toBe(
    "SisyphusSQ 的个人主页：记录数据库工程、可靠变更、工具沉淀与 AI 工作流实践。",
  );
});
