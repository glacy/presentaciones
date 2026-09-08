"use client";

import { motion } from "framer-motion";
import { Scale, Globe, Repeat, PencilLine, Shuffle, Send } from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("open");

const fiveR = [
  { icon: Globe, label: "Retener", desc: "una copia es tuya" },
  { icon: Repeat, label: "Reutilizar", desc: "en cualquier contexto" },
  { icon: PencilLine, label: "Revisar", desc: "ajustar a tu curso" },
  { icon: Shuffle, label: "Remezclar", desc: "combinar con otros" },
  { icon: Send, label: "Redistribuir", desc: "compartir de nuevo" },
];

const licenses = [
  { code: "CC BY", desc: "Reconocimiento al autor", color: "mint" },
  { code: "CC BY-SA", desc: "Compartir con la misma licencia", color: "cyan" },
  { code: "CC BY-NC", desc: "Sin uso comercial", color: "amber" },
];

export function OpenSlide() {
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
            Abierta significa que el material tiene una{" "}
            <span className="font-semibold text-foreground">licencia clara</span>{" "}
            que dice qué se puede hacer con él. Son los{" "}
            <span className="font-semibold text-neon-mint">
              Recursos Educativos Abiertos
            </span>{" "}
            que promueve la UNESCO.
          </motion.p>

          <div className="mt-4 space-y-2">
            {licenses.map((l, i) => (
              <motion.div
                key={l.code}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3"
              >
                <span
                  className={`grid h-10 w-14 shrink-0 place-items-center rounded-md border font-mono text-xs font-bold ${
                    l.color === "mint"
                      ? "border-[#4ade80]/30 bg-[#4ade80]/10 text-[#8af0a8]"
                      : l.color === "cyan"
                        ? "border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#7decff]"
                        : "border-[#fbbf24]/30 bg-[#fbbf24]/10 text-[#fcd363]"
                  }`}
                >
                  {l.code}
                </span>
                <span className="text-sm text-muted-foreground">{l.desc}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-4 flex items-start gap-2 rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/5 px-3 py-2 text-xs text-[#8af0a8] sm:text-sm"
          >
            <Scale className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Sin licencia, el material está{" "}
              <span className="font-semibold">reservado por defecto</span>: nadie
              más puede adaptarlo legalmente.
            </span>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 font-sans text-lg font-semibold text-foreground"
          >
            Las 5R: lo que una licencia abierta permite
          </motion.h3>

          <div className="space-y-2">
            {fiveR.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.18 }}
                className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3 transition hover:border-[#4ade80]/40"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 text-neon-mint">
                  <r.icon className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-sans text-sm font-semibold text-foreground">
                    {r.label}
                  </span>
                  <span className="ml-2 text-xs text-muted-foreground">{r.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            className="mt-4 px-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70"
          >
            creativecommons.org · unesco.org/rea
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
