"use client";

import { cn } from "@/lib/utils";
import type { NeonColor } from "../types";

/** Tailwind-safe color class map. We avoid dynamic class names by listing them all. */
export const neonTextMap: Record<NeonColor, string> = {
  cyan: "text-neon-cyan",
  mint: "text-neon-mint",
  orange: "text-neon-orange",
  magenta: "text-neon-magenta",
  violet: "text-[#c084fc] [text-shadow:0_0_18px_rgba(168,85,247,0.5),0_0_40px_rgba(168,85,247,0.25)]",
  amber: "text-[#fbbf24] [text-shadow:0_0_18px_rgba(251,191,36,0.5),0_0_40px_rgba(251,191,36,0.25)]",
};

export const neonBorderMap: Record<NeonColor, string> = {
  cyan: "border-neon-cyan",
  mint: "border-neon-mint",
  orange: "border-neon-orange",
  magenta: "border-[#ff3d8b] [box-shadow:0_0_22px_rgba(255,61,139,0.2),inset_0_0_14px_rgba(255,61,139,0.08)]",
  violet: "border-[#a855f7] [box-shadow:0_0_22px_rgba(168,85,247,0.2),inset_0_0_14px_rgba(168,85,247,0.08)]",
  amber: "border-[#fbbf24] [box-shadow:0_0_22px_rgba(251,191,36,0.2),inset_0_0_14px_rgba(251,191,36,0.08)]",
};

export const neonSolidMap: Record<NeonColor, string> = {
  cyan: "bg-[#00e5ff] text-[#04141a]",
  mint: "bg-[#4ade80] text-[#04140a]",
  orange: "bg-[#ff8c42] text-[#1a0c02]",
  magenta: "bg-[#ff3d8b] text-[#1a0210]",
  violet: "bg-[#a855f7] text-[#0f0218]",
  amber: "bg-[#fbbf24] text-[#1a1002]",
};

export const neonSoftMap: Record<NeonColor, string> = {
  cyan: "bg-[#00e5ff]/10 text-[#7decff] border-[#00e5ff]/30",
  mint: "bg-[#4ade80]/10 text-[#8af0a8] border-[#4ade80]/30",
  orange: "bg-[#ff8c42]/10 text-[#ffb07d] border-[#ff8c42]/30",
  magenta: "bg-[#ff3d8b]/10 text-[#ff7eaf] border-[#ff3d8b]/30",
  violet: "bg-[#a855f7]/10 text-[#c89ef7] border-[#a855f7]/30",
  amber: "bg-[#fbbf24]/10 text-[#fcd363] border-[#fbbf24]/30",
};

export const neonGlowMap: Record<NeonColor, string> = {
  cyan: "glow-cyan",
  mint: "glow-mint",
  orange: "glow-orange",
  magenta: "glow-magenta",
  violet: "[background:radial-gradient(circle_at_center,rgba(168,85,247,0.22)_0%,transparent_60%)]",
  amber: "[background:radial-gradient(circle_at_center,rgba(251,191,36,0.2)_0%,transparent_60%)]",
};

export function NeonText({
  color,
  children,
  className,
}: {
  color: NeonColor;
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn(neonTextMap[color], className)}>{children}</span>;
}

/** Ambient floating glow orb used as background decoration. */
export function GlowOrb({
  color,
  className,
  size = 360,
}: {
  color: NeonColor;
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full animate-float-slow", neonGlowMap[color], className)}
      style={{ width: size, height: size, filter: "blur(8px)" }}
    />
  );
}
