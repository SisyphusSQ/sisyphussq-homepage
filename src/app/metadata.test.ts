import { expect, test } from "vitest";
import { siteMetadata as metadata } from "@/content/site-metadata";
import { alt as openGraphAlt } from "./opengraph-image";

test("publishes canonical metadata for sisyphuslab.cn", () => {
  expect(metadata.metadataBase?.toString()).toBe("https://sisyphuslab.cn/");
  expect(metadata.alternates?.canonical).toBe("/");
  expect(metadata.title).toBe("SisyphusSQ · DBA 与数据库工程");
  expect(metadata.description).toBe(
    "SisyphusSQ 的个人主页：自 2018 年起从事数据库与中间件的开发和运维，主要使用 Go、Java、Python。",
  );
});

test("keeps the Open Graph image aligned with the DBA identity", () => {
  expect(openGraphAlt).toBe("SisyphusSQ · DBA 与数据库工程");
});
