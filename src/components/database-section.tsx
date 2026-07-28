import { databasePrinciples } from "@/content/site";

export function DatabaseSection() {
  return (
    <section className="database-section" id="database">
      <div className="section shell">
        <p className="eyebrow">02 / DATABASE PRACTICE</p>
        <div className="section-heading database-heading">
          <h2>
            数据库工程，
            <br />
            是在变化里守住确定性。
          </h2>
          <div>
            <p>
              从可观测、变更控制到工具沉淀，我更关心数据库系统能否被真实理解，而不是只在故障发生后解释结果。
            </p>
            <p className="mono-note">READ　/　CHANGE　/　BUILD</p>
          </div>
        </div>
        <div className="principles-grid">
          {databasePrinciples.map((principle) => (
            <article key={principle.index}>
              <p className="item-label">
                <span>{principle.index}</span>
                {principle.label}
              </p>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
