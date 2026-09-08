"use client";

import { motion } from "framer-motion";
import {
  Share2,
  ReceiptText,
  Accessibility,
  CalendarCheck,
  Scale,
} from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("messages");

const messages = [
  {
    icon: Share2,
    title: "Construir para compartir",
    text: "Deja de producir documentos congelados: produce bienes comunes educativos que viven, evolucionan y sobreviven a ti.",
    color: "cyan",
  },
  {
    icon: ReceiptText,
    title: "Abierta, reproducible, auditable",
    text: "La receta pública: licencia clara, ingredientes visibles y un historial que permite verificar y volver a hacer el plato.",
    color: "mint",
  },
  {
    icon: Accessibility,
    title: "Accesible de fábrica",
    text: "Una sola fuente, muchos formatos: web en el móvil, PDF, lectores de pantalla. El acceso es una URL gratuita.",
    color: "violet",
  },
];

const msgColorMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#7decff]",
  mint: "border-[#4ade80]/30 bg-[#4ade80]/5 text-[#8af0a8]",
  violet: "border-[#a855f7]/30 bg-[#a855f7]/5 text-[#c89ef7]",
};

export function MessagesSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid gap-3 lg:grid-cols-3">
        {messages.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.3 }}
            className={`rounded-xl border p-5 ${msgColorMap[m.color]}`}
          >
            <span className={`grid h-11 w-11 place-items-center rounded-lg border bg-white/5 ${msgColorMap[m.color]}`}>
              <m.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-sans text-lg font-bold leading-snug text-foreground">
              {m.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {m.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mx-auto mt-6 max-w-2xl rounded-2xl border border-[#00e5ff]/40 bg-gradient-to-r from-[#00e5ff]/10 via-transparent to-[#ff8c42]/10 p-6 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7decff]">
          <CalendarCheck className="h-4 w-4" />
          Invitación concreta
        </div>
        <p className="mt-3 font-sans text-lg font-semibold leading-snug text-foreground sm:text-xl">
          “Elige un material tuyo esta semana y ponle una licencia abierta.{" "}
          <span className="bg-gradient-to-r from-[#00e5ff] to-[#ff8c42] bg-clip-text text-transparent">
            El resto puede esperar.
          </span>
          ”
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Scale className="h-3.5 w-3.5" />
          creativecommons.org/share — elige tu licencia en 2 minutos
        </div>
      </motion.div>
    </SlideShell>
  );
}
