"use client";

import { motion } from "framer-motion";
import { Box, UtensilsCrossed, Eye, History, Users } from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("reproducible");

const recipe = [
  { label: "Ingredientes", value: "textos, figuras, datos, ecuaciones" },
  { label: "Procedimiento", value: "pasos visibles en el historial" },
  { label: "Plato final", value: "sitio web, PDF, presentación" },
];

const evidence = [
  { icon: Eye, text: "Cualquiera puede ver cómo se hizo" },
  { icon: History, text: "Cualquiera puede verificar qué cambió" },
  { icon: Users, text: "Cualquiera puede volver a hacer el plato" },
];

export function ReproducibleSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Reproducible y auditable es como una{" "}
            <span className="font-semibold text-foreground">receta de cocina pública</span>:
            cualquiera puede ver los ingredientes, el procedimiento y volver a
            hacer el plato. Nada de cajas negras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-card/60 shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
              <UtensilsCrossed className="h-4 w-4 text-[#fcd363]" />
              <span className="text-sm font-semibold text-foreground">
                Receta: mi curso abierto
              </span>
            </div>
            <div className="space-y-3 p-4">
              {recipe.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.25 }}
                  className="rounded-lg border border-white/8 bg-white/3 p-3"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#fcd363]">
                    {r.label}
                  </div>
                  <div className="mt-0.5 text-sm text-foreground">{r.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 flex items-center gap-2 font-sans text-lg font-semibold text-foreground"
          >
            <Box className="h-5 w-5 text-neon-magenta" />
            La caja negra que queremos evitar
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="rounded-xl border border-[#ff3d8b]/30 bg-[#ff3d8b]/5 p-4 text-sm text-muted-foreground"
          >
            Un PDF mágico que apareció un día: nadie sabe cómo se hizo, no se
            puede verificar, no se puede adaptar… y{" "}
            <span className="font-semibold text-[#ff7eaf]">muere con su autor</span>.
          </motion.div>

          <div className="mt-5 space-y-2">
            {evidence.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.25 }}
                className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/10 text-[#fcd363]">
                  <e.icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground">{e.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="mt-4 flex items-center gap-2 rounded-lg border border-[#fbbf24]/30 bg-[#fbbf24]/5 px-3 py-2 text-xs text-[#fcd363]"
          >
            <span className="font-mono font-bold">→</span>
            <span>
              La auditabilidad no es un documento extra:{" "}
              <span className="font-semibold">es el historial completo del material</span>.
            </span>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
