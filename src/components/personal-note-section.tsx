export function PersonalNoteSection() {
  return (
    <section className="personal-note" id="note">
      <div className="shell note-shell">
        <div className="section-topline inverse">
          <p>01 / PERSONAL NOTE</p>
          <span>等待你亲自写下</span>
        </div>
        <div className="note-grid">
          <p className="oversized-index" aria-hidden="true">
            01
          </p>
          <div className="note-copy">
            <h2>我想说</h2>
            <p className="note-placeholder">
              这里写我为什么一直在做数据库工具，以及我对复杂度、可靠性和长期维护真正想说的话。
            </p>
            <p className="placeholder-label">
              <span aria-hidden="true" />
              PLACEHOLDER · 最终文案由 SisyphusSQ 完成
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
