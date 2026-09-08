"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  Sprout,
  GitBranch,
  Rocket,
  Share2,
  Shuffle,
} from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("lifecycle");

const stages = [
  { icon: Sprout, label: "Nace", desc: "escribes el contenido", color: "#00e5ff", pos: "left-[50%] top-[6%]" },
  { icon: GitBranch, label: "Evoluciona", desc: "se versiona con cada cambio", color: "#4ade80", pos: "left-[88%] top-[32%]" },
  { icon: Rocket, label: "Se publica", desc: "sola, con cada guardado", color: "#fbbf24", pos: "left-[72%] top-[82%]" },
  { icon: Share2, label: "Se comparte", desc: "licencia abierta, URL gratuita", color: "#ff8c42", pos: "left-[28%] top-[82%]" },
  { icon: Shuffle, label: "Se transforma", desc: "otros lo adaptan y mejora", color: "#a855f7", pos: "left-[12%] top-[32%]" },
];

export function LifecycleSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[8%] rounded-full border border-dashed border-white/15"
          />
          <svg aria-hidden className="absolute inset-0 h-full w-full -rotate-90 opacity-70" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#lifeGrad)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lifeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="35%" stopColor="#4ade80" />
                <stop offset="70%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 160 }}
              className="grid h-20 w-20 place-items-center rounded-2xl border border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c89ef7]"
            >
              <RefreshCw className="h-9 w-9" />
            </motion.div>
            <div className="mt-2 font-sans text-sm font-bold text-foreground">
              Material abierto
            </div>
            <div className="text-[10px] text-muted-foreground">
              nunca “terminado”, siempre vivo
            </div>
          </div>

          {stages.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.28, type: "spring", stiffness: 200 }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${s.pos}`}
            >
              <div
                className="flex flex-col items-center gap-1 rounded-xl border bg-background/90 px-3 py-2 backdrop-blur-sm"
                style={{ borderColor: `${s.color}55`, boxShadow: `0 0 18px ${s.color}22` }}
              >
                <s.icon className="h-5 w-5" style={{ color: s.color }} />
                <span className="whitespace-nowrap font-sans text-xs font-bold text-foreground">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-2.5">
          {stages.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.28 }}
              className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3"
            >
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border"
                style={{ borderColor: `${s.color}55`, backgroundColor: `${s.color}14`, color: s.color }}
              >
                <s.icon className="h-4 w-4" />
              </span>
              <div>
                <span className="font-sans text-sm font-semibold text-foreground">
                  {s.label}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">{s.desc}</span>
              </div>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="pt-1 text-center text-xs text-muted-foreground"
          >
            …y el ciclo vuelve a empezar: otro docente lo adapta y el material
            renace en otro curso.
          </motion.p>
        </div>
      </div>
    </SlideShell>
  );
}
