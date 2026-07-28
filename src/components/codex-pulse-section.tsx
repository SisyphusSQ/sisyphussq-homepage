import { codexPulse } from "@/content/site";
import { ExternalLink } from "./external-link";

export function CodexPulseSection() {
  return (
    <aside className="codex-section" id="codex-pulse">
      <div className="shell codex-grid">
        <div>
          <p className="eyebrow">SIDE NOTE / 05</p>
          <h2>
            <ExternalLink href={codexPulse.href}>
              {codexPulse.name}
            </ExternalLink>
          </h2>
          <p className="mono-note">LOCAL-FIRST macOS TOOL</p>
        </div>
        <div className="codex-copy">
          <h3>
            把可观测性，
            <br />
            带进个人 AI 工作流。
          </h3>
          <p>{codexPulse.description}</p>
        </div>
        <div className="signal-list" aria-label="Codex Pulse 关注信号">
          {codexPulse.signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
