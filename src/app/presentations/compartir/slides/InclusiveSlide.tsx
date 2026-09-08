"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  Smartphone,
  FileText,
  Ear,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("inclusive");

const outputs = [
  { icon: Smartphone, label: "Web responsive", desc: "se lee bien en el móvil del estudiante", color: "cyan" },
  { icon: FileText, label: "PDF imprimible", desc: "para quien no tiene internet en casa", color: "amber" },
  { icon: Ear, label: "Lectores de pantalla", desc: "estructura semántica de fábrica", color: "violet" },
];

const colorBgMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#7decff]",
  amber: "border-[#fbbf24]/30 bg-[#fbbf24]/5 text-[#fcd363]",
  violet: "border-[#a855f7]/30 bg-[#a855f7]/5 text-[#c89ef7]",
};

export function InclusiveSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-6 lg:grid-cols-5 lg:items-center lg:gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl border border-[#a855f7]/30 bg-[#a855f7]/5 p-6 text-center"
          >
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c89ef7]">
              <Accessibility className="h-8 w-8" />
            </span>
            <div className="mt-4 font-sans text-xl font-bold text-foreground">
              Una sola fuente de contenido
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              texto plano con estructura semántica
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mt-4 flex items-start gap-2 rounded-lg border border-[#a855f7]/30 bg-[#a855f7]/5 px-3 py-2 text-xs text-[#c89ef7]"
          >
            <KeyRound className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              El acceso es una <span className="font-semibold">URL gratuita</span>,
              no una licencia de software.
            </span>
          </motion.div>
        </div>

        <div className="lg:col-span-3">
          <div className="space-y-3">
            {outputs.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.3 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                  className="shrink-0 text-[#c89ef7]"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
                <div className={`flex flex-1 items-center gap-3 rounded-xl border p-3.5 ${colorBgMap[o.color]}`}>
                  <o.icon className="h-6 w-6 shrink-0" />
                  <div>
                    <div className="font-sans text-sm font-semibold text-foreground sm:text-base">
                      {o.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{o.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="mt-4 rounded-xl border border-white/10 bg-card/40 p-4 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="font-semibold text-foreground">Inclusiva</span> porque
            la accesibilidad no es un esfuerzo extra aquí:{" "}
            <span className="text-foreground">es un resultado del flujo</span> —
            responsive, formatos múltiples y estructura semántica salen
            “de fábrica”.
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
