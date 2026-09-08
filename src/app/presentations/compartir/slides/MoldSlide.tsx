"use client";

import { motion } from "framer-motion";
import { Cookie, Layers, Presentation as PresentationIcon, Globe, Infinity as InfinityIcon } from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("mold");

const markdownLines = [
  { text: "# Movimiento en dos dimensiones", color: "text-[#7decff]" },
  { text: "", color: "" },
  { text: "## Semana 4 · Tiro parabólico", color: "text-[#8af0a8]" },
  { text: "", color: "" },
  { text: "La ecuación de la trayectoria es…", color: "text-foreground/80" },
  { text: "![figura](./figuras/parabola.png)", color: "text-[#c89ef7]" },
];

const molds = [
  { icon: Globe, label: "Sitio de curso", color: "cyan" },
  { icon: PresentationIcon, label: "Presentación web", color: "amber" },
  { icon: Layers, label: "Material interactivo", color: "violet" },
];

const moldColorMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#7decff]",
  amber: "border-[#fbbf24]/30 bg-[#fbbf24]/5 text-[#fcd363]",
  violet: "border-[#a855f7]/30 bg-[#a855f7]/5 text-[#c89ef7]",
};

export function MoldSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3 font-sans text-lg font-semibold text-foreground"
          >
            Escribes en texto plano: Markdown
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f16] font-mono text-xs shadow-2xl sm:text-sm"
          >
            <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[11px] text-muted-foreground">
                curso.md — texto simple, durable
              </span>
            </div>
            <div className="space-y-1 p-4">
              {markdownLines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.12 }}
                  className={l.color}
                >
                  {l.text || "\u00A0"}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-4 flex items-start gap-2 rounded-lg border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-4 py-3 text-sm text-[#7decff]"
          >
            <InfinityIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Legible por humanos y máquinas:{" "}
              <span className="font-semibold">lo que escribes es tuyo para siempre</span>.
            </span>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-3 flex items-center gap-2 font-sans text-lg font-semibold text-foreground"
          >
            <Cookie className="h-5 w-5 text-[#fcd363]" />
            El molde le da forma
          </motion.h3>

          <div className="space-y-2">
            {molds.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.25 }}
                className={`flex items-center gap-3 rounded-xl border p-3.5 ${moldColorMap[m.color]}`}
              >
                <m.icon className="h-5 w-5 shrink-0" />
                <span className="font-sans text-sm font-semibold text-foreground">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-5 rounded-xl border-l-2 border-[#fbbf24] bg-card/40 p-4 text-sm leading-relaxed text-muted-foreground backdrop-blur-sm sm:text-base"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#fcd363]">
              La analogía
            </span>
            <p className="mt-1">
              “El texto es <span className="font-semibold text-foreground">la masa</span>,
              el molde es <span className="font-semibold text-foreground">el cortador de galletas</span>.
              Cambias el molde sin rehacer la masa.”
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
