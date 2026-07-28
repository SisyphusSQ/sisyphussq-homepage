import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>这里没有要找的内容。</h1>
      <p>返回主页，继续看数据库实践、项目和文章。</p>
      <Link className="button button-primary" href="/">
        返回 SisyphusSQ 主页
      </Link>
    </main>
  );
}
