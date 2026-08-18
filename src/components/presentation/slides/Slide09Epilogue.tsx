"use client";

import { motion } from "framer-motion";
import { Flag, Compass, BookOpen, ArrowLeft, Sparkles } from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";

const meta = slidesMeta[8];

export function Slide09Epilogue() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      {/* Soft background — students vibe */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-25" aria-hidden />

      {/* Calm ambient glow */}
      <div className="absolute left-1/2 top-1/3 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 glow-mint opacity-40" aria-hidden />
      <div className="absolute -right-20 -top-10 h-72 w-72 glow-cyan opacity-30" aria-hidden />
      <div className="absolute -left-16 bottom-0 h-72 w-72 glow-orange opacity-25" aria-hidden />

      {/* Subtle horizon line representing students working */}
      <svg
        aria-hidden
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 left-0 h-[40%] w-full opacity-30"
      >
        <defs>
          <linearGradient id="horizon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 140 Q 100 110 200 130 T 400 120 T 600 135 T 800 115 L 800 200 L 0 200 Z"
          fill="url(#horizon)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        {/* Abstract silhouettes of people working */}
        {[
          { x: 180, label: "lab" },
          { x: 320, label: "lab" },
          { x: 480, label: "cafe" },
          { x: 620, label: "cafe" },
        ].map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2 }}
          >
            <circle cx={p.x} cy={120} r="8" fill="#7decff" opacity="0.6" />
            <path
              d={`M${p.x - 12} 160 Q ${p.x} 130 ${p.x + 12} 160 Z`}
              fill="#4ade80"
              opacity="0.4"
            />
          </motion.g>
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-[#4ade80]/40 bg-[#4ade80]/10 text-neon-mint"
        >
          <Flag className="h-8 w-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground"
        >
          <Compass className="h-3.5 w-3.5 text-neon-mint" />
          Epílogo
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl font-sans text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          La bitácora no es{" "}
          <span className="text-muted-foreground line-through decoration-[#ff3d8b]/60">
            puro papeleo
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Es la primera vez en la universidad que gestionan un proyecto como{" "}
          <span className="font-semibold text-neon-mint">verdaderos profesionales</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2"
        >
          <div className="flex items-start gap-3 rounded-xl border border-[#00e5ff]/25 bg-[#00e5ff]/5 p-4 text-left">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
            <div>
              <div className="text-sm font-semibold text-foreground">
                Lee el ejemplo modelo
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Disponible en el campus virtual. Úsenlo como guía.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-[#4ade80]/25 bg-[#4ade80]/5 p-4 text-left">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-neon-mint" />
            <div>
              <div className="text-sm font-semibold text-foreground">
                No es solo para Física I
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                Sirve para tu tesis, prácticas y la industria.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/70"
        >
          <ArrowLeft className="h-3 w-3" />
          Usa ← para repasar
          <span className="mx-2 text-white/20">·</span>
          Ahora, a trabajar
        </motion.div>
      </div>
    </div>
  );
}
