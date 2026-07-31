import { ArrowDown } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { focusAreas, githubProfile } from "@/content/site";
import { ExperienceSummary } from "./experience-summary";
import { ExternalLink } from "./external-link";

export function HeroSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">DBA / DATABASE ENGINEERING / DEVELOPMENT</p>
        <h1>SisyphusSQ</h1>
        <p className="hero-statement">
          DBA，
          <br />
          也做开发。
        </p>
        <p className="hero-role">
          <ExperienceSummary initialYear={currentYear} />
        </p>
        <p className="hero-intro">
          主要使用 Go、Java、Python，长期从事
          MySQL、MongoDB、Redis、OceanBase、向量数据库与 DTS 的开发和运维。
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
        <p className="eyebrow muted">CURRENT FOCUS / NOW</p>
        <h2>
          DBA，
          <br />
          是在变化里守住确定性。
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
