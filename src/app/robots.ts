import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sisyphuslab.cn/sitemap.xml",
    host: "https://sisyphuslab.cn",
  };
}
