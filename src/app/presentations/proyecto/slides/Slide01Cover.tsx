"use client";

import { motion } from "framer-motion";
import { Compass, ArrowRight, Sparkles } from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";

const meta = slidesMeta[0];

export function Slide01Cover() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />

      {/* Big ambient glows */}
      <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 glow-cyan opacity-50" aria-hidden />
      <div className="absolute -left-20 top-10 h-72 w-72 glow-magenta opacity-30" aria-hidden />
      <div className="absolute -right-16 bottom-10 h-72 w-72 glow-mint opacity-40" aria-hidden />

      {/* Animated maze / path SVG */}
      <svg
        aria-hidden
        viewBox="0 0 800 500"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="50%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#ff8c42" />
          </linearGradient>
          <radialGradient id="goalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="60%" stopColor="#ff8c42" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff8c42" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* The sinuous path */}
        <motion.path
          d="M40 420 C 160 420, 160 120, 280 120 S 400 420, 520 420 S 640 120, 760 120"
          fill="none"
          stroke="url(#pathGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Milestones along the path */}
        {[
          { cx: 40, cy: 420, color: "#00e5ff" },
          { cx: 280, cy: 120, color: "#4ade80" },
          { cx: 520, cy: 420, color: "#ff3d8b" },
          { cx: 640, cy: 120, color: "#a855f7" },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="6"
            fill={p.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.4, type: "spring", stiffness: 200 }}
          />
        ))}

        {/* Goal */}
        <motion.circle
          cx="760"
          cy="120"
          r="36"
          fill="url(#goalGrad)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.4, type: "spring", stiffness: 120 }}
        />
        <motion.circle
          cx="760"
          cy="120"
          r="10"
          fill="#fbbf24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="animate-neon-pulse"
        />
      </svg>

      {/* Hero content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/40 bg-[#00e5ff]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7decff]"
        >
          <Compass className="h-3.5 w-3.5" />
          Física General I · II Semestre 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-foreground">¿Qué es la</span>
          <span className="block bg-gradient-to-r from-[#00e5ff] via-[#4ade80] to-[#ff8c42] bg-clip-text text-transparent">
            Bitácora?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Cómo convertir la{" "}
          <span className="font-semibold text-foreground">Bitácora</span>{" "}
          en tu mejor herramienta contra el caos del trabajo en equipo.
        </motion.p>

        {/*  <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
           <div className="inline-flex items-center gap-2 rounded-xl border border-[#00e5ff]/30 bg-[#00e5ff]/10 px-4 py-2.5 text-sm font-medium text-[#7decff]">
            <Sparkles className="h-4 w-4" />
            9 capítulos · Storytelling visual
          </div>
                     <div className="hidden font-mono text-xs text-muted-foreground sm:flex sm:items-center sm:gap-1.5">
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">→</kbd>
            <span>para empezar</span>
            <ArrowRight className="h-3 w-3" />
          </div> 
        </motion.div> */}
      </div>

      {/* Footer credit */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
        Tecnológico de Costa Rica
      </div>
    </div >
  );
}
