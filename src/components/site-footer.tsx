import { githubProfile } from "@/content/site";
import { ExternalLink } from "./external-link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow inverse">ONE MORE THING</p>
          <p className="footer-statement">
            还想再说一句的话，
            <br />
            留在这里。
          </p>
        </div>
        <ExternalLink
          className="footer-github"
          href={githubProfile}
          showIcon
        >
          去 GitHub 看看
        </ExternalLink>
      </div>
      <div className="shell footer-bottom">
        <span>SisyphusSQ　/　数据库工程与工具构建</span>
        <span>SUQING · SHANGHAI · 2026</span>
      </div>
    </footer>
  );
}
