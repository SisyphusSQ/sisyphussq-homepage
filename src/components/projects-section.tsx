import { projects } from "@/content/site";
import { ExternalLink } from "./external-link";

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="section shell">
        <p className="eyebrow">02 / SELECTED PRACTICE</p>
        <div className="section-heading projects-heading">
          <h2>数据库工具</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.href}>
              <span className="project-index">{project.index}</span>
              <div className="project-name">
                <h3>
                  <ExternalLink href={project.href}>
                    {project.name}
                  </ExternalLink>
                </h3>
                <p>{project.subtitle}</p>
              </div>
              <div className="project-detail">
                <p>{project.description}</p>
                <p className="tag-list">{project.tags.join("　·　")}</p>
              </div>
              <ExternalLink
                className="row-arrow"
                href={project.href}
                showIcon
                aria-label={`查看 ${project.name}`}
              >
                <span className="sr-only">查看 {project.name}</span>
              </ExternalLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
