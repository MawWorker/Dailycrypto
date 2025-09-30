"use client";

import type { PropsWithChildren } from "react";

/**
 * Normalizes spacing/typography inside long-form articles.
 * No content changes—only layout rhythm.
 */
export default function ArticleBody({ children }: PropsWithChildren) {
  return (
    <div
      className={[
        // container & measure
        "mx-auto max-w-[72ch] lg:max-w-[78ch]",
        "px-4 sm:px-6 lg:px-0",
        // base text
        "text-slate-800 dark:text-slate-200",
        "leading-relaxed text-[17px]",
        // vertical rhythm applied via CSS (globals.css) to .dc-article
        "dc-article",
      ].join(" ")}
    >
      {children}
    </div>
  );
}