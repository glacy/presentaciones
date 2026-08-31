"use client";

import { motion } from "framer-motion";
import { X, Check, ThumbsDown, ThumbsUp, Link2 } from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote } from "../../shared/ui/primitives";

const meta = slidesMeta[3];

const badExamples = [
  "Soy bueno en todo.",
  "Trabajo bien en equipo.",
  "Me esfuerzo mucho.",
  "No tengo debilidades.",
];

const goodExamples = [
  "Se me dan bien las mates, pero soy un desastre con el formato Word.",
  "Procrastino: necesito fechas cortas y alguien que supervise.",
  "Redacto con claridad, pero me estreso montando experimentos.",
  "Soy ordenado, pero me cuesta hablar en público.",
];

export function Slide03Diagnosis() {
  return (
    <SlideShell meta={meta}>
      {/* Golden rule callout */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/5 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#4ade80]/15 text-neon-mint">
          <Link2 className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8af0a8]">
            Regla de oro
          </span>
          <p className="text-sm text-foreground sm:text-base">
            Las <span className="font-semibold text-neon-mint">debilidades</span> de
            la Tabla 1 son la justificación de los{" "}
            <span className="font-semibold text-neon-cyan">roles</span> de la
            Tabla 3.
          </p>
        </div>
      </motion.div>

      {/* Mal vs Bien comparison */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {/* Mal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative overflow-hidden rounded-xl border border-[#ff3d8b]/25 bg-[#ff3d8b]/5 p-5"
        >
          <div className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-[#ff3d8b]/15 text-neon-magenta">
            <ThumbsDown className="h-4 w-4" />
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-neon-magenta">
            Mal
          </div>
          <div className="mt-1 font-sans text-lg font-semibold text-foreground">
            Vagueza decorativa
          </div>
          <ul className="mt-4 space-y-2.5">
            {badExamples.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="flex items-start gap-2 text-sm text-muted-foreground line-through decoration-[#ff3d8b]/60"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#ff3d8b]" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg bg-[#ff3d8b]/10 px-3 py-2 text-xs text-[#ff7eaf]">
            Cero información útil para asignar roles.
          </div>
        </motion.div>

        {/* Bien */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden rounded-xl border border-[#4ade80]/25 bg-[#4ade80]/5 p-5"
        >
          <div className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-[#4ade80]/15 text-neon-mint">
            <ThumbsUp className="h-4 w-4" />
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-neon-mint">
            Bien
          </div>
          <div className="mt-1 font-sans text-lg font-semibold text-foreground">
            Honestidad táctica
          </div>
          <ul className="mt-4 space-y-2.5">
            {goodExamples.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.15 }}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4ade80]" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg bg-[#4ade80]/10 px-3 py-2 text-xs text-[#8af0a8]">
            Cada fila alimenta directamente el Capítulo 2.
          </div>
        </motion.div>
      </div>

      <div className="mt-6">
        <TeacherNote color="mint">
          El primer paso no es planificar, es saber quiénes son. Si nadie dice
          que es malo para redactar, luego todos asumen que otro lo va a hacer y
          el informe queda fatal. Aquí no hay ego, hay{" "}
          <span className="font-semibold text-foreground">honestidad táctica</span>.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}
