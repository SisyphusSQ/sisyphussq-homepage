import { CodexPulseSection } from "@/components/codex-pulse-section";
import { HeroSection } from "@/components/hero-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { PersonalNoteSection } from "@/components/personal-note-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WritingSection } from "@/components/writing-section";
import { profileData } from "@/content/site";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <PersonalNoteSection />
        <ProjectsSection />
        <OpenSourceSection />
        <WritingSection />
        <CodexPulseSection />
      </main>
      <SiteFooter />
    </>
  );
}
