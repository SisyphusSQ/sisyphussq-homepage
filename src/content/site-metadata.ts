import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://sisyphuslab.cn"),
  title: "SisyphusSQ · DBA 与数据库工程",
  description:
    "SisyphusSQ 的个人主页：自 2018 年起从事数据库与中间件的开发和运维，主要使用 Go、Java、Python。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "SisyphusSQ",
    title: "SisyphusSQ · DBA 与数据库工程",
    description:
      "自 2018 年起从事数据库与中间件的开发和运维，主要使用 Go、Java、Python。",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SisyphusSQ · DBA 与数据库工程",
    description:
      "自 2018 年起从事数据库与中间件的开发和运维，主要使用 Go、Java、Python。",
    images: ["/opengraph-image"],
  },
};
