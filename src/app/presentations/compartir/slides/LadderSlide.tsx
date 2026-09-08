"use client";

import { motion } from "framer-motion";
import {
  Download,
  PencilLine,
  Hammer,
  Smartphone,
  Accessibility,
  CheckCircle2,
} from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("ladder");

const levels = [
  {
    n: 1,
    icon: Download,
    title: "Usar",
    desc: "Visitar, descargar, proyectar los materiales tal cual.",
    detail: "Hoy mismo, sin cuenta ni permiso",
    color: "cyan",
  },
  {
    n: 2,
    icon: PencilLine,
    title: "Adaptar",
    desc: "Partir de una plantilla y editar el texto en el navegador de GitHub.",
    detail: "Sin instalar nada — demostración en vivo",
    color: "mint",
  },
  {
    n: 3,
    icon: Hammer,
    title: "Crear",
    desc: "Usar un starter como punto de partida para material propio.",
    detail: "Cuando quieras dar el salto",
    color: "amber",
  },
];

const levelColorMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#7decff]",
  mint: "border-[#4ade80]/30 bg-[#4ade80]/5 text-[#8af0a8]",
  amber: "border-[#fbbf24]/30 bg-[#fbbf24]/5 text-[#fcd363]",
};

export function LadderSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <div className="grid items-end gap-4 lg:grid-cols-3">
        {levels.map((l, i) => (
          <motion.div
            key={l.n}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.3 }}
            className={`rounded-xl border p-5 ${levelColorMap[l.color]}`}
            style={{ minHeight: `${140 + i * 44}px` }}
          >
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border bg-white/5 ${levelColorMap[l.color]}`}>
                <l.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Nivel {l.n}
                </div>
                <div className="font-sans text-xl font-bold text-foreground">
                  {l.title}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              {l.desc}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {l.detail}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="mt-6 rounded-xl border border-[#00e5ff]/30 bg-[#00e5ff]/5 p-4 text-sm text-[#7decff] sm:text-base"
      >
        <span className="font-semibold">Mensaje clave:</span> no necesitas
        aprender Git profundo, ni terminal, ni programación para empezar.
      </motion.div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3"
        >
          <Smartphone className="h-5 w-5 shrink-0 text-[#c89ef7]" />
          <span className="text-xs text-muted-foreground sm:text-sm">
            Responsive, PDF, web: formatos múltiples sin trabajo extra
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/40 p-3"
        >
          <Accessibility className="h-5 w-5 shrink-0 text-[#c89ef7]" />
          <span className="text-xs text-muted-foreground sm:text-sm">
            La accesibilidad no es un esfuerzo: es un resultado del flujo
          </span>
        </motion.div>
      </div>
    </SlideShell>
  );
}
