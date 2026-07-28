import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://sisyphuslab.cn"),
  title: "SisyphusSQ · 数据库工程与可靠工具",
  description:
    "SisyphusSQ 的个人主页：记录数据库工程、可靠变更、工具沉淀与 AI 工作流实践。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "SisyphusSQ",
    title: "SisyphusSQ · 数据库工程与可靠工具",
    description:
      "记录数据库工程、可靠变更、工具沉淀与 AI 工作流实践。",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SisyphusSQ · 数据库工程与可靠工具",
    description:
      "记录数据库工程、可靠变更、工具沉淀与 AI 工作流实践。",
    images: ["/opengraph-image"],
  },
};
