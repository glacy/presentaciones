"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  User,
  Eye,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";
import { SlideShell } from "../ui/SlideShell";
import { TeacherNote } from "../ui/primitives";

const meta = slidesMeta[4];

const badRow = {
  actividad: "Semana 2: Investigamos",
  fecha: "—",
  duracion: "—",
  responsable: "—",
  supervision: "—",
};

const goodRows = [
  {
    actividad: "Búsqueda de referencias sobre MRUA",
    fecha: "Lun 12 mayo",
    duracion: "3 días",
    responsable: "Diego (Desarrollador)",
    supervision: "Juan (Coordinador)",
  },
  {
    actividad: "Montaje y calibración del riel",
    fecha: "Jue 15 mayo",
    duracion: "4 horas",
    responsable: "Ana (Desarrolladora)",
    supervision: "Juan (Coordinador)",
  },
  {
    actividad: "Redacción de la introducción",
    fecha: "Lun 19 mayo",
    duracion: "2 días",
    responsable: "María (Documentadora)",
    supervision: "Carlos (Revisor)",
  },
];

export function Slide05Timeline() {
  return (
    <SlideShell meta={meta}>
      {/* Specificity callout */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#fbbf24]/30 bg-[#fbbf24]/5 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#fbbf24]/15 text-[#fbbf24]">
          <AlertCircle className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground sm:text-base">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#fcd363]">
            Concepto clave
          </span>
          <br />
          <span className="font-semibold text-neon-amber">Especificidad</span> y{" "}
          <span className="font-semibold text-neon-amber">Supervisión</span>: la
          columna que casi nadie llena… y la que más vale.
        </p>
      </motion.div>

      {/* Bad example */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-5 overflow-hidden rounded-xl border border-[#ff3d8b]/25 bg-[#ff3d8b]/5"
      >
        <div className="flex items-center gap-2 border-b border-[#ff3d8b]/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neon-magenta">
          <XCircle className="h-4 w-4" />
          Error típico
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-5">
          {[
            { label: "Actividad", value: badRow.actividad, accent: false },
            { label: "Fecha", value: badRow.fecha, accent: false },
            { label: "Duración", value: badRow.duracion, accent: false },
            { label: "Responsable", value: badRow.responsable, accent: false },
            { label: "Supervisión", value: badRow.supervision, accent: false },
          ].map((c, i) => (
            <div key={i}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-0.5 text-sm text-muted-foreground line-through decoration-[#ff3d8b]/50">
                {c.value}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#ff3d8b]/15 px-4 py-2 text-xs text-[#ff7eaf]">
          ¿Quién? ¿Cuánto tiempo? ¿Quién vigila que se haga?
        </div>
      </motion.div>

      {/* Good timeline */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="overflow-hidden rounded-xl border border-[#fbbf24]/25 bg-card/40"
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neon-amber">
          <CheckCircle2 className="h-4 w-4" />
          Cronograma con supervisión
        </div>

        {/* Table header */}
        <div className="hidden grid-cols-[1.6fr_1fr_0.8fr_1.3fr_1.3fr] gap-3 border-b border-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:grid">
          <div className="flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> Actividad</div>
          <div className="flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> Fecha inicio</div>
          <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> Duración</div>
          <div className="flex items-center gap-1.5"><User className="h-3 w-3" /> Responsable</div>
          <div className="flex items-center gap-1.5 text-neon-amber"><Eye className="h-3 w-3" /> Supervisión</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/5">
          {goodRows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.15 }}
              className="grid grid-cols-1 gap-2 px-4 py-3 text-sm sm:grid-cols-[1.6fr_1fr_0.8fr_1.3fr_1.3fr] sm:gap-3"
            >
              <div className="font-medium text-foreground">{r.actividad}</div>
              <div className="text-muted-foreground">{r.fecha}</div>
              <div className="text-muted-foreground">{r.duracion}</div>
              <div className="text-muted-foreground">{r.responsable}</div>
              <div className="rounded-md bg-[#fbbf24]/10 px-2 py-0.5 text-[#fcd363] inline-flex items-center gap-1.5 self-start">
                <Eye className="h-3 w-3" />
                {r.supervision}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="amber">
          El error aquí es poner: “Semana 2: Investigamos”. ¿Quién? ¿Cuánto
          tiempo? ¿Quién vigila que se haga? Si Juan es el coordinador, él no
          hace todo, pero su nombre debe aparecer en la columna de supervisión
          verificando que Diego sí montó el experimento.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}
