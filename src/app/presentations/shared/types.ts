import type { LucideIcon } from "lucide-react";

export type NeonColor = "cyan" | "mint" | "orange" | "magenta" | "violet" | "amber";

export interface SlideMeta {
  /** 1-based index */
  index: number;
  /** Short label for the navigation rail */
  shortLabel: string;
  /** Full title shown in the slide header */
  title: string;
  /** Chapter / section tag (e.g. "Capítulo 1", "Portada") */
  chapter: string;
  /** Accent color for this slide */
  accent: NeonColor;
  /** Optional icon */
  icon?: LucideIcon;
}
