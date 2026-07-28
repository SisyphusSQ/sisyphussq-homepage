import { articles } from "@/content/site";
import { ExternalLink } from "./external-link";

export function WritingSection() {
  return (
    <section className="writing-section" id="writing">
      <div className="section shell">
        <p className="eyebrow">04 / SELECTED WRITING</p>
        <div className="section-heading writing-heading">
          <h2>从实践到文字</h2>
          <p>
            项目说明做了什么，
            <br />
            文章留下为什么这样做。
          </p>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article className="article-row" key={article.href}>
              <div className="article-index">
                <span>{article.index}</span>
                <time dateTime={article.date.replaceAll(".", "-")}>
                  {article.date}
                </time>
              </div>
              <div className="article-title">
                <h3>
                  <ExternalLink href={article.href}>
                    {article.titleLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </ExternalLink>
                </h3>
                <p className="tag-list">
                  {article.category}　·　{article.source}
                </p>
              </div>
              <div className="article-detail">
                <p>{article.description}</p>
                <div>
                  <span>{article.author}</span>
                  <ExternalLink href={article.href} showIcon>
                    阅读原文
                  </ExternalLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
