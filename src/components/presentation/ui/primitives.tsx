"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NeonColor } from "../types";
import { neonSoftMap, neonTextMap } from "./neon";

/** Pill-shaped chapter label, e.g. "CAPÍTULO 1 · TABLA 1" */
export function ChapterLabel({
  children,
  color = "cyan",
  className,
}: {
  children: React.ReactNode;
  color?: NeonColor;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
        neonSoftMap[color],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", `bg-current`)} />
      {children}
    </motion.div>
  );
}

/** Small inline tag */
export function Tag({
  children,
  color = "cyan",
  className,
}: {
  children: React.ReactNode;
  color?: NeonColor;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium",
        neonSoftMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Section heading with a colored accent and a thin animated underline. */
export function SectionTitle({
  color = "cyan",
  children,
  className,
  as: As = "h2",
}: {
  color?: NeonColor;
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.05 }}
      className={cn("space-y-2", className)}
    >
      <As className="font-sans text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {children}
      </As>
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn("h-0.5 rounded-full", `bg-current`, neonTextMap[color])}
        />
        <div className="h-px w-full max-w-[180px] bg-gradient-to-r from-foreground/20 to-transparent" />
      </div>
    </motion.div>
  );
}

/** A small "teacher narrative" callout used on most slides. */
export function TeacherNote({
  color = "cyan",
  children,
  className,
}: {
  color?: NeonColor;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.25 }}
      className={cn(
        "relative overflow-hidden rounded-xl border-l-2 bg-card/40 p-4 text-sm leading-relaxed text-muted-foreground backdrop-blur-sm sm:text-base",
        className,
      )}
      style={{
        borderColor: color === "cyan" ? "#00e5ff" : color === "mint" ? "#4ade80" : color === "orange" ? "#ff8c42" : color === "magenta" ? "#ff3d8b" : color === "violet" ? "#a855f7" : "#fbbf24",
      }}
    >
      <span
        className={cn(
          "absolute right-3 top-2 font-mono text-[10px] uppercase tracking-widest",
          neonTextMap[color],
        )}
      >
        Narrativa del docente
      </span>
      <div className="pr-24 pt-1 sm:pr-28">“{children}”</div>
    </motion.blockquote>
  );
}
