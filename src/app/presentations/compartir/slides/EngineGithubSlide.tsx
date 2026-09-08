"use client";

import { motion } from "framer-motion";
import { GitBranch, Eye, Clock, User, FileEdit } from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("engine-github");

const commits = [
  {
    hash: "a3f9c21",
    msg: "Añade ejemplo de caída libre",
    author: "glacy",
    time: "hace 2 días",
    color: "#4ade80",
  },
  {
    hash: "7b12e08",
    msg: "Corrige errata en la ecuación 3",
    author: "estudiante-colaborador",
    time: "la semana pasada",
    color: "#00e5ff",
  },
  {
    hash: "c45d9f2",
    msg: "Actualiza bibliografía",
    author: "glacy",
    time: "hace 2 meses",
    color: "#4ade80",
  },
  {
    hash: "e81a640",
    msg: "Primera versión del curso",
    author: "glacy",
    time: "hace 1 año",
    color: "#fbbf24",
  },
];

export function EngineGithubSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 lg:order-1">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4 font-sans text-lg font-semibold text-foreground"
          >
            El historial <span className="text-neon-mint">es</span> la auditabilidad
          </motion.h3>

          <div className="space-y-3">
            {[
              {
                icon: Eye,
                text: "Quién cambió qué y cuándo queda registrado, visible para cualquiera",
              },
              {
                icon: FileEdit,
                text: "Cada versión anterior existe: puedes volver atrás sin miedo",
              },
              {
                icon: User,
                text: "Otros docentes pueden proponer mejoras sobre tu material",
              },
            ].map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.3 }}
                className="flex items-start gap-3 rounded-lg border border-white/8 bg-card/40 p-3.5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/10 text-neon-mint">
                  <e.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm leading-snug text-foreground/90">{e.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-4 flex items-center gap-2 rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/5 px-3 py-2 text-xs text-[#8af0a8]"
          >
            <span className="font-mono font-bold">→</span>
            <span>
              No hace falta entender Git: basta con{" "}
              <span className="font-semibold">mirar</span> el historial.
            </span>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f16] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-[#8af0a8]" />
                <span className="font-mono text-xs text-foreground">
                  glacy / fg1-astro
                </span>
              </div>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="space-y-1 p-3">
              {commits.map((c, i) => (
                <motion.div
                  key={c.hash}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.3 }}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                >
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: c.color, boxShadow: `0 0 10px ${c.color}66` }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm text-foreground">{c.msg}</div>
                    <div className="mt-0.5 flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                      <span>{c.hash}</span>
                      <span>·</span>
                      <span>@{c.author}</span>
                      <span>·</span>
                      <span>{c.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="mt-3 text-center text-xs text-muted-foreground"
          >
            GitHub: la casa del material — pública, versionada, con historial completo
          </motion.p>
        </div>
      </div>
    </SlideShell>
  );
}
