import { expect, test } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

test("allows indexing and points crawlers to the canonical sitemap", () => {
  expect(robots()).toEqual({
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sisyphuslab.cn/sitemap.xml",
    host: "https://sisyphuslab.cn",
  });
});

test("publishes the homepage in the sitemap", () => {
  expect(sitemap()).toEqual([
    {
      url: "https://sisyphuslab.cn/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ]);
});
