"use client";

import { motion } from "framer-motion";
import { Flag, Compass, ExternalLink, Table, Binoculars } from "lucide-react";
import Link from "next/link";
import { getSlideMetaById } from "../data/slidesMeta";


const meta = getSlideMetaById("epilogue");

const PLANTILLA_URL = "#";

const EJEMPLO_MODELO_URL = "/ejemplo_modelo_bitacora_trabajo_equipo.pdf";

export function EpilogueSlide() {
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
          transition={{ duration: 1.0, delay: 0.5 }}
          className="max-w-3xl font-sans text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          La bitácora{" "}
          <span className="text-muted-foreground line-through decoration-[#ff3d8b]/60">
            no es puro papeleo
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.5 }}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Es un {" "}
          <span className="font-semibold text-neon-mint">sistema articulado</span> que te ayuda a organizar el trabajo en equipo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 5.0 }}
          className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-1"
        >
          <Link
            href={EJEMPLO_MODELO_URL}
            target="_blank"
            download="ejemplo_modelo_bitacora_trabajo_equipo.pdf"
            rel="noopener noreferrer"
            className="block focus-visible:outline-none"
          >
            <div className="group relative flex items-start gap-3 rounded-xl border border-[#00e5ff]/25 bg-[#00e5ff]/5 p-4 text-left transition hover:border-[#00e5ff]/50 hover:bg-card/60 focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Binoculars className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
              <div className="flex-1">
                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-foreground transition-transform group-hover:translate-x-1">
                  Ejemplo modelo
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 10.0 }}
          className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-1"
        >
          <Link
            href={PLANTILLA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus-visible:outline-none"
          >
            <div className="group relative flex items-start gap-3 rounded-xl border border-[#00e5ff]/25 bg-[#00e5ff]/5 p-4 text-left transition hover:border-[#00e5ff]/50 hover:bg-card/60 focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Table className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
              <div className="flex-1">
                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-foreground transition-transform group-hover:translate-x-1">
                  Descarga la plantilla de bitácora
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>


      </div>
    </div>
  );
}
