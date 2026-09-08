"use client";

import { motion } from "framer-motion";
import { Usb, FileText, Folder, TrendingUp, TrendingDown, Sparkles } from "lucide-react";
import { getSlideMetaById } from "../data/slidesMeta";
import { SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("where");

const answers = [
  { icon: Usb, text: "Un Word en un pendrive… que ya no leo", color: "text-neon-magenta" },
  { icon: FileText, text: "Un PDF en el aula virtual, sin fuente", color: "text-neon-orange" },
  { icon: Folder, text: "Una carpeta que solo yo entiendo", color: "text-[#fcd363]" },
];

export function WhereSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 flex items-center gap-2 font-sans text-lg font-semibold text-foreground"
          >
            <Sparkles className="h-5 w-5 text-neon-cyan" />
            Pregunta rompehielos
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-[#00e5ff]/30 bg-[#00e5ff]/5 p-5 text-lg font-semibold leading-snug text-foreground sm:text-xl"
          >
            ¿Dónde está ahora mismo{" "}
            <span className="bg-gradient-to-r from-[#00e5ff] to-[#4ade80] bg-clip-text text-transparent">
              tu mejor material de clase
            </span>
            ?
          </motion.div>

          <div className="mt-4 space-y-2">
            {answers.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.25 }}
                className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3"
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${a.color}`}>
                  <a.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm text-foreground">{a.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-4 font-sans text-lg font-semibold text-foreground"
          >
            La paradoja docente
          </motion.h3>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3 rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/5 p-4"
            >
              <TrendingUp className="h-6 w-6 shrink-0 text-neon-mint" />
              <p className="text-sm text-foreground sm:text-base">
                Creamos <span className="font-semibold text-neon-mint">muchísimo</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45 }}
              className="flex items-center gap-3 rounded-xl border border-[#ff3d8b]/30 bg-[#ff3d8b]/5 p-4"
            >
              <TrendingDown className="h-6 w-6 shrink-0 text-neon-magenta" />
              <p className="text-sm text-foreground sm:text-base">
                Compartimos <span className="font-semibold text-neon-magenta">muy poco</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="px-1 text-sm text-muted-foreground"
            >
              Y lo que compartimos suele morir al cambiar de institución, de
              plataforma o de versión de Office.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="mt-4 flex items-start gap-2 rounded-lg border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-4 py-3 text-sm text-[#7decff]"
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              <span className="font-semibold">Promesa de la charla:</span> existen
              materiales vivos, accesibles, auditables y reutilizables — y no hace
              falta ser programador.
            </span>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
