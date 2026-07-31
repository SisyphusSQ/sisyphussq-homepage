import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import * as experienceSummaryModule from "./experience-summary";

test("refreshes a stale server-rendered experience year in the browser", () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-07-29T00:00:00+08:00"));

  try {
    const ExperienceSummary = Reflect.get(
      experienceSummaryModule,
      "ExperienceSummary",
    ) as
      | ((props: { initialYear: number }) => React.ReactNode)
      | undefined;

    expect(ExperienceSummary).toBeTypeOf("function");

    if (!ExperienceSummary) {
      return;
    }

    render(<ExperienceSummary initialYear={2025} />);

    expect(screen.getByText("2018 至今 · 8 年经验")).toBeInTheDocument();
  } finally {
    vi.useRealTimers();
  }
});
