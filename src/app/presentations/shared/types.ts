import type { LucideIcon } from "lucide-react";

export type NeonColor = "cyan" | "mint" | "orange" | "magenta" | "violet" | "amber";

export interface SlideMeta {
  /** 1-based index */
  index: number;
  /** Unique identifier for the slide component (e.g., "cover", "context", "villain") */
  id: string;
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
  /** Audio duration in seconds for synchronization (optional) */
  audioDuration?: number;
  /** Audio file path (optional, auto-generated if not provided) */
  audioPath?: string;
}
