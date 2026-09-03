"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScanFace,
  Puzzle,
  CalendarClock,
  CloudLightning,
  ClipboardCheck,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { getSlideMetaById } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote } from "../../shared/ui/primitives";

const meta = getSlideMetaById("thread");

const links = [
  {
    from: { table: "Tabla 1", label: "Sé quién soy", icon: ScanFace, color: "mint" as const },
    to: { table: "Tabla 3", label: "Asumo un rol acorde", icon: Puzzle, color: "cyan" as const },
    risk: "Si el rol ignora la debilidad de T1 → desmorona.",
  },
  {
    from: { table: "Tabla 3", label: "Rol asignado", icon: Puzzle, color: "cyan" as const },
    to: { table: "Tabla 4", label: "Planifico mi tiempo", icon: CalendarClock, color: "amber" as const },
    risk: "Si el plan no refleja el rol → cronograma hueco.",
  },
  {
    from: { table: "Tabla 4", label: "Plan", icon: CalendarClock, color: "amber" as const },
    to: { table: "Tabla 5", label: "Ejecuto y me adapto si falla", icon: CloudLightning, color: "orange" as const },
    risk: "Si T5 habla de lo que no estaba en T4 → sin trazabilidad.",
  },
  {
    from: { table: "Tabla 5", label: "Ejecución", icon: CloudLightning, color: "orange" as const },
    to: { table: "Tabla 6", label: "Evalúo cómo me fue", icon: ClipboardCheck, color: "violet" as const },
    risk: "Si T6 dice “Ejemplar” sin citar T5 → injustificado.",
  },
];

const colorTextMap: Record<string, string> = {
  cyan: "text-neon-cyan",
  mint: "text-neon-mint",
  orange: "text-neon-orange",
  magenta: "text-neon-magenta",
  violet: "text-[#c084fc]",
  amber: "text-[#fbbf24]",
};

const colorBgMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5",
  mint: "border-[#4ade80]/30 bg-[#4ade80]/5",
  orange: "border-[#ff8c42]/30 bg-[#ff8c42]/5",
  magenta: "border-[#ff3d8b]/30 bg-[#ff3d8b]/5",
  violet: "border-[#a855f7]/30 bg-[#a855f7]/5",
  amber: "border-[#fbbf24]/30 bg-[#fbbf24]/5",
};

export function ThreadSlide() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <SlideShell meta={meta}>
      {/* Title concept */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#00e5ff]/15 text-neon-cyan">
          <Workflow className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground sm:text-base">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#7decff]">
            Una estructura integrada
          </span>
          <br />
          Cada paso de la Bitácora es una pieza clave en la construcción de un todo coherente.
        </p>
      </motion.div>

      {/* Funnel of connections */}
      <div className="space-y-3">
        {links.map((l, i) => {
          const FI = l.from.icon;
          const TI = l.to.icon;
          const isActive = active === i;
          return (
            <motion.button
              key={i}
              onClick={() => setActive(isActive ? null : i)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6.0 + i * 1.5 }}
              whileHover={{ scale: 1.005 }}
              className={`group w-full rounded-xl border p-3 text-left transition sm:p-4 ${isActive
                ? "border-[#00e5ff]/50 bg-[#00e5ff]/8"
                : "border-white/8 bg-card/40 hover:border-white/15"
                }`}
            >
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                {/* From */}
                <div className="flex flex-1 items-center gap-3">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border ${colorBgMap[l.from.color]} ${colorTextMap[l.from.color]}`}
                  >
                    <FI className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {l.from.table}
                    </div>
                    <div className="font-sans text-sm font-semibold text-foreground sm:text-base">
                      {l.from.label}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                  className="shrink-0 text-neon-cyan"
                >
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>

                {/* To */}
                <div className="flex flex-1 items-center gap-3">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border ${colorBgMap[l.to.color]} ${colorTextMap[l.to.color]}`}
                  >
                    <TI className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {l.to.table}
                    </div>
                    <div className="font-sans text-sm font-semibold text-foreground sm:text-base">
                      {l.to.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 flex items-start gap-2 border-t border-white/5 pt-3 text-xs text-[#ff7eaf]"
                  >
                    <span className="mt-0.5 text-neon-magenta">⚠</span>
                    <span>{l.risk}</span>
                  </motion.div>
                )}
              </AnimatePresence> */}
            </motion.button>
          );
        })}
      </div>

      {/* Bottom summary */}
      {/*       <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-4 py-3 text-xs text-muted-foreground sm:text-sm"
      >
        <span className="font-mono text-neon-cyan">→</span>
        Toca cada conexión para ver el riesgo de romper el hilo.
      </motion.div> */}

      {/*       <div className="mt-5">
        <TeacherNote color="cyan">
          Si la Tabla 5 habla de cosas que no estaban en la Tabla 4, o si el rol
          de la Tabla 3 ignora la debilidad de la Tabla 1, el documento se
          desmorona. La bitácora debe contar una historia lógica de principio a
          fin.
        </TeacherNote>
      </div> */}
    </SlideShell>
  );
}
