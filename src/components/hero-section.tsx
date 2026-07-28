import { ArrowDown } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { focusAreas, githubProfile } from "@/content/site";
import { ExternalLink } from "./external-link";

export function HeroSection() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">PERSONAL NOTE / DATABASE PRACTICE</p>
        <h1>SisyphusSQ</h1>
        <p className="hero-statement">
          一句真正代表我的话，
          <br />
          写在这里。
        </p>
        <p className="hero-role">数据库工程 · Go · 工具构建</p>
        <p className="hero-intro">
          关注系统如何被看清、被安全地改变，并长期保持可维护。
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#note">
            继续阅读
            <ArrowDown aria-hidden="true" weight="bold" />
          </a>
          <ExternalLink
            className="button button-quiet"
            href={githubProfile}
            showIcon
          >
            查看 GitHub
          </ExternalLink>
        </div>
      </div>

      <aside className="focus-panel" aria-label="当前关注">
        <p className="eyebrow muted">CURRENT FOCUS / 2026</p>
        <h2>
          围绕数据库工程，
          <br />
          做少而可靠的工具。
        </h2>
        <ol className="focus-list">
          {focusAreas.map((area) => (
            <li key={area.index}>
              <span>{area.index}</span>
              <div>
                <strong>{area.title}</strong>
                <p>{area.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="location">SUQING　/　SHANGHAI</p>
      </aside>
    </section>
  );
}
