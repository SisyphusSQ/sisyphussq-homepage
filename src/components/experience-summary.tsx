"use client";

import { useSyncExternalStore } from "react";
import { formatExperienceSummary } from "@/content/site";

const subscribe = () => () => {};
const getBrowserYear = () => new Date().getFullYear();

export function ExperienceSummary({
  initialYear,
}: {
  initialYear: number;
}) {
  const currentYear = useSyncExternalStore(
    subscribe,
    getBrowserYear,
    () => initialYear,
  );

  return formatExperienceSummary(currentYear);
}
