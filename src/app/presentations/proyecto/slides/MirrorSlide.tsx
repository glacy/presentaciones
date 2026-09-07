"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, Eye, Quote, Link2 } from "lucide-react";
import { getSlideMetaById } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote } from "../../shared/ui/primitives";

const meta = getSlideMetaById("mirror");

const aspects = [
  {
    id: "aspect-1",
    name: "Eficiencia y efectividad del desempeño",
    short: "Roles cumplidos",
    exemplarText:
      "Todos los integrantes cumplen con las responsabilidades asociadas a su rol y el equipo completa sus objetivos y metas sin contratiempos.",
  },
  {
    id: "aspect-2",
    name: "Estrategias para la equidad e inclusión",
    short: "Roles según fortalezas",
    exemplarText:
      "La asignación de roles se basó en fortalezas y debilidades individuales, promoviendo una participación equitativa y beneficiosa para el equipo.",
  },
  {
    id: "aspect-3",
    name: "Acciones de colaboración y cooperación",
    short: "Trabajo como equipo",
    exemplarText:
      "La organización promovió la colaboración y cooperación; fue posible ejecutar todas las actividades tal y como se planificaron. Producto del esfuerzo del equipo.",
  },
];

const scales = ["0", "1", "2", "3"];

export function MirrorSlide() {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <SlideShell meta={meta}>
      {/* Key concept */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1.5 }}
        className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/5 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#a855f7]/15 text-[#c084fc]">
          <Quote className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground sm:text-base">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c89ef7]">
            Concepto clave
          </span>
          <br />
          <span className="font-semibold text-[#c084fc]">La mejora continua</span>{" "}
          — Una mirada crítica en retrospectiva siempre permite aprender para{" "}
          <span className="font-semibold text-neon-mint">mejorar</span>.
        </p>
      </motion.div>

      {/* Interactive evaluation matrix */}
      <div className="overflow-hidden rounded-xl border border-white/8 bg-card/40">
        {/* Header row */}
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-2 border-b border-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:px-4">
          <div className="flex items-center gap-1.5">
            <ClipboardCheck className="h-3 w-3" /> Aspecto
          </div>
          {scales.map((s) => (
            <div key={s} className="text-center">
              {s}
            </div>
          ))}
        </div>

        {/* Rows */}
        {aspects.map((a, i) => (
          <div
            key={a.id}
            className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-stretch gap-2 border-b border-white/5 px-3 py-2 last:border-b-0 sm:px-4"
          >
            <button
              onClick={() => setSelected(selected === i ? null : i)}
              className="flex flex-col items-start justify-center text-left"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#c084fc] sm:text-xs">
                {i + 1}
              </span>
              <span className="text-xs font-medium text-foreground sm:text-sm">
                {a.short}
              </span>
              <span className="hidden text-[10px] text-muted-foreground sm:block">
                {a.name}
              </span>
            </button>

            {scales.map((s, j) => {
              const isExemplar = j === 3;
              const isActive =
                selected === i &&
                ((isExemplar && true) || false);
              return (
                <button
                  key={s}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className={`grid place-items-center rounded-md border px-1 py-2 text-[10px] transition sm:text-xs ${selected === i && isExemplar
                    ? "border-[#a855f7]/60 bg-[#a855f7]/20 text-[#e0c7ff]"
                    : isExemplar
                      ? "border-[#a855f7]/30 bg-[#a855f7]/5 text-[#c89ef7]"
                      : "border-white/8 bg-white/3 text-muted-foreground hover:border-white/20"
                    }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${selected === i && isExemplar
                      ? "bg-[#a855f7]"
                      : isExemplar
                        ? "bg-[#a855f7]/40"
                        : "bg-white/15"
                      }`}
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>



      {/*       <div className="mt-6">
        <TeacherNote color="violet">
          Muchos sombrean la casilla de “Ejemplar” y dejan en blanco las
          observaciones. Eso es un 0. Si dicen que fue “Ejemplar” porque “todos
          cumplieron”, tienen que citar la Tabla 5. Conecten el final con el
          principio.
        </TeacherNote>
      </div> */}
    </SlideShell>
  );
}
