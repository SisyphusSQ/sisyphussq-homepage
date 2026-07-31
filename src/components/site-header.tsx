import Image from "next/image";
import { githubProfile } from "@/content/site";
import { ExternalLink } from "./external-link";

const navItems = [
  ["关于我", "#note"],
  ["项目", "#projects"],
  ["文章", "#writing"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="返回首页顶部">
          <Image
            className="brand-avatar"
            src="/avatar.jpg"
            alt="SisyphusSQ 的 GitHub 头像"
            width={40}
            height={40}
            preload
          />
          <span>SisyphusSQ</span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <ExternalLink
            className="nav-github"
            href={githubProfile}
            showIcon
          >
            GitHub
          </ExternalLink>
        </nav>
      </div>
    </header>
  );
}
