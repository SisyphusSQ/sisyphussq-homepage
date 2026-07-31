import { expect, test } from "vitest";
import * as siteContent from "./site";

test("formats database experience from the 2018 career start year", () => {
  const formatExperienceSummary = Reflect.get(
    siteContent,
    "formatExperienceSummary",
  ) as ((currentYear: number) => string) | undefined;

  expect(formatExperienceSummary).toBeTypeOf("function");
  expect(formatExperienceSummary?.(2026)).toBe("2018 至今 · 8 年经验");
});
