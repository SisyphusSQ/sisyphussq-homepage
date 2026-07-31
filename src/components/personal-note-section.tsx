export function PersonalNoteSection() {
  return (
    <section className="personal-note" id="note">
      <div className="shell note-shell">
        <div className="section-topline inverse">
          <p>01 / ABOUT ME</p>
          <span>DATABASE ENGINEERING</span>
        </div>
        <div className="note-grid">
          <p className="oversized-index" aria-hidden="true">
            01
          </p>
          <div className="note-copy">
            <h2 className="note-statement">
              <span>让每一次改变，</span>
              <span>都经得起验证。</span>
            </h2>
            <p className="experience-label">
              <span aria-hidden="true" />
              OBSERVE · CHANGE · AUTOMATE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
