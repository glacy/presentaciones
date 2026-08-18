"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SlideMeta } from "../types";
import { ChapterLabel } from "./primitives";
import { GlowOrb, neonTextMap } from "./neon";

/**
 * Common wrapper for every slide. Provides the dark backdrop, ambient glow,
 * chapter label + title header, and a scrollable content area so long slides
 * don't overflow the viewport on small screens.
 */
export function SlideShell({
  meta,
  children,
  className,
  /** When true, the layout becomes a centered hero (used for the cover & epilogue). */
  variant = "default",
}: {
  meta: SlideMeta;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
}) {
  const Icon = meta.icon;
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-background",
      )}
    >
      {/* Ambient grid + orbs */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className={cn(
          "absolute -left-24 -top-24 opacity-70",
        )}
        aria-hidden
      >
        <GlowOrb color={meta.accent} size={420} />
      </div>
      <div className="absolute -bottom-32 -right-24 opacity-60" aria-hidden>
        <GlowOrb color={meta.accent} size={360} />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex h-full w-full flex-col",
          variant === "hero" ? "items-center justify-center text-center" : "",
        )}
      >
        {variant === "default" && (
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-5 py-4 sm:px-8 sm:py-5"
          >
            <div className="flex items-center gap-3">
              {Icon ? (
                <span
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-lg border bg-white/5",
                    neonTextMap[meta.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
              ) : null}
              <div>
                <ChapterLabel color={meta.accent}>
                  {meta.chapter}
                </ChapterLabel>
                <h2 className="mt-1.5 font-sans text-lg font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
                  {meta.title}
                </h2>
              </div>
            </div>
            <div className="hidden font-mono text-xs text-muted-foreground sm:block">
              {String(meta.index).padStart(2, "0")} / 09
            </div>
          </motion.header>
        )}

        <div
          className={cn(
            "scroll-neon relative flex-1 overflow-y-auto",
            variant === "hero" ? "px-5 py-8 sm:px-10" : "px-5 py-6 sm:px-8 sm:py-8",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
