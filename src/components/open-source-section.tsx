import { mongoShakeContribution } from "@/content/site";
import { ExternalLink } from "./external-link";

export function OpenSourceSection() {
  return (
    <section className="open-source-section" id="open-source">
      <div className="shell open-source-grid">
        <div className="open-source-heading">
          <p className="eyebrow">03 / OPEN SOURCE</p>
          <h2>
            <span>参与维护的</span>
            <span>开源项目</span>
          </h2>
        </div>

        <article className="open-source-project">
          <p className="open-source-meta">ALIBABA / MONGODB DATA REPLICATION</p>
          <h3>
            <ExternalLink href={mongoShakeContribution.href}>
              {mongoShakeContribution.name}
            </ExternalLink>
          </h3>
          <p className="open-source-subtitle">{mongoShakeContribution.subtitle}</p>
          <p className="open-source-list-label">提交的改动</p>
          <ul className="open-source-list">
            {mongoShakeContribution.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
          <ExternalLink
            className="open-source-link"
            href={mongoShakeContribution.pullRequestsHref}
            showIcon
          >
            查看已合并的 PR
          </ExternalLink>
        </article>
      </div>
    </section>
  );
}
