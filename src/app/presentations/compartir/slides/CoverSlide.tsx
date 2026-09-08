"use client";

import { motion } from "framer-motion";
import { Share2, Unlock, RefreshCw, Accessibility } from "lucide-react";

const keywords = [
  { icon: Unlock, label: "Abierta", color: "text-[#8af0a8] border-[#4ade80]/30 bg-[#4ade80]/10" },
  { icon: RefreshCw, label: "Reproducible", color: "text-[#fcd363] border-[#fbbf24]/30 bg-[#fbbf24]/10" },
  { icon: Accessibility, label: "Inclusiva", color: "text-[#c89ef7] border-[#a855f7]/30 bg-[#a855f7]/10" },
];

export function CoverSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />

      <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 glow-cyan opacity-50" aria-hidden />
      <div className="absolute -left-20 top-10 h-72 w-72 glow-magenta opacity-30" aria-hidden />
      <div className="absolute -right-16 bottom-10 h-72 w-72 glow-mint opacity-40" aria-hidden />

      <svg
        aria-hidden
        viewBox="0 0 800 500"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="shareGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="50%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#ff8c42" />
          </linearGradient>
        </defs>

        <motion.path
          d="M400 250 C 400 250, 180 250, 90 120 M400 250 C 400 250, 200 400, 90 400 M400 250 L 710 120 M400 250 L 710 400"
          fill="none"
          stroke="url(#shareGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
        />

        <motion.circle cx="400" cy="250" r="12" fill="#00e5ff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} />
        {[
          { cx: 90, cy: 120, c: "#4ade80" },
          { cx: 90, cy: 400, c: "#fbbf24" },
          { cx: 710, cy: 120, c: "#ff3d8b" },
          { cx: 710, cy: 400, c: "#a855f7" },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="8"
            fill={p.c}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0 + i * 0.35, type: "spring", stiffness: 200 }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/40 bg-[#00e5ff]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7decff]"
        >
          <Share2 className="h-3.5 w-3.5" />
          Charla para docentes · Educación abierta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-foreground">Construir</span>
          <span className="block bg-gradient-to-r from-[#00e5ff] via-[#4ade80] to-[#ff8c42] bg-clip-text text-transparent">
            para compartir
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Educación <span className="font-semibold text-foreground">abierta</span>,{" "}
          <span className="font-semibold text-foreground">reproducible</span> e{" "}
          <span className="font-semibold text-foreground">inclusiva</span> para un
          aprendizaje accesible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {keywords.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.2 }}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium ${k.color}`}
            >
              <k.icon className="h-4 w-4" />
              {k.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
        De documentos congelados a bienes comunes educativos
      </div>
    </div>
  );
}
