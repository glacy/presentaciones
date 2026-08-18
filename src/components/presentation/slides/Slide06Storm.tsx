"use client";

import { motion } from "framer-motion";
import {
  CloudLightning,
  Lightbulb,
  Pencil,
  Eye,
  Camera,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";
import { SlideShell } from "../ui/SlideShell";
import { TeacherNote } from "../ui/primitives";

const meta = slidesMeta[5];

export function Slide06Storm() {
  return (
    <SlideShell meta={meta}>
      {/* Critical banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="animate-neon-pulse mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#ff8c42]/40 bg-[#ff8c42]/8 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#ff8c42]/15 text-neon-orange">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground sm:text-base">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#ffb07d]">
            Diapositiva crítica
          </span>
          <br />
          El registro <span className="font-semibold text-neon-orange">NO</span> es
          un cuento de hadas. Si escriben “Todo salió perfecto”, pierden puntos.
        </p>
      </motion.div>

      {/* Cloud -> light transformation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 flex items-center justify-center gap-4 rounded-xl border border-white/8 bg-card/30 px-4 py-6 sm:gap-8"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{
              y: [0, -4, 0],
              filter: [
                "drop-shadow(0 0 12px rgba(255,61,139,0.6))",
                "drop-shadow(0 0 22px rgba(255,61,139,0.9))",
                "drop-shadow(0 0 12px rgba(255,61,139,0.6))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="grid h-16 w-16 place-items-center rounded-2xl border border-[#ff3d8b]/40 bg-[#ff3d8b]/10 text-neon-magenta sm:h-20 sm:w-20"
          >
            <CloudLightning className="h-8 w-8 sm:h-10 sm:w-10" />
          </motion.div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-neon-magenta">
            Conflicto
          </div>
          <div className="text-xs text-muted-foreground">Problema real</div>
        </div>

        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="text-neon-mint"
        >
          <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </motion.div>

        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{
              y: [0, -4, 0],
              filter: [
                "drop-shadow(0 0 12px rgba(74,222,128,0.6))",
                "drop-shadow(0 0 24px rgba(74,222,128,0.9))",
                "drop-shadow(0 0 12px rgba(74,222,128,0.6))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="grid h-16 w-16 place-items-center rounded-2xl border border-[#4ade80]/40 bg-[#4ade80]/10 text-neon-mint sm:h-20 sm:w-20"
          >
            <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10" />
          </motion.div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-neon-mint">
            Solución
          </div>
          <div className="text-xs text-muted-foreground">Documentada</div>
        </div>
      </motion.div>

      {/* Example registry row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="overflow-hidden rounded-xl border border-[#ff8c42]/30 bg-card/40"
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neon-orange">
          <Pencil className="h-4 w-4" />
          Ejemplo de registro (Tabla 5)
        </div>

        <div className="grid gap-0 sm:grid-cols-[0.8fr_1fr]">
          {/* Action */}
          <div className="border-b border-white/5 p-4 sm:border-b-0 sm:border-r">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              <Pencil className="h-3 w-3" /> Acción
            </div>
            <div className="mt-1 text-sm font-medium text-foreground">
              Ensayamos el montaje.
            </div>
          </div>

          {/* Observation — the highlight */}
          <div className="relative p-4">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-neon-orange">
              <Eye className="h-3 w-3" /> Observación (lo que hay que poner)
            </div>
            <div className="mt-1 text-sm leading-relaxed text-foreground">
              “El riel estaba desnivelado y los datos salían raros. Tuvimos que
              detenernos, buscar unas arandelas y volver a calibrar perdiendo{" "}
              <span className="font-semibold text-neon-orange">40 minutos</span>.”
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Camera className="h-3.5 w-3.5 text-neon-mint" />
              <span>Evidencia:</span>
              <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-[#8af0a8]">
                IMG_riel_calibrado.jpg
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rubric alignment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-5 grid gap-3 sm:grid-cols-3"
      >
        {[
          {
            title: "Resolución de situaciones inesperadas",
            value: "+ puntos",
            color: "text-neon-mint",
            border: "border-[#4ade80]/30 bg-[#4ade80]/5",
          },
          {
            title: "“Todo salió perfecto”",
            value: "− puntos",
            color: "text-neon-magenta",
            border: "border-[#ff3d8b]/30 bg-[#ff3d8b]/5",
          },
          {
            title: "Trazabilidad del trabajo",
            value: "100%",
            color: "text-neon-orange",
            border: "border-[#ff8c42]/30 bg-[#ff8c42]/5",
          },
        ].map((c, i) => (
          <div key={i} className={`rounded-xl border p-4 ${c.border}`}>
            <div className={`font-sans text-2xl font-bold ${c.color}`}>
              {c.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{c.title}</div>
          </div>
        ))}
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="orange">
          ¡Atención! Si en esta tabla escriben “Todo salió perfecto”, pierden
          puntos. La rúbrica pregunta por “resolución de situaciones
          inesperadas”. Un buen equipo no es el que no tiene problemas, es el
          que documentó cómo los resolvió. Esa es la{" "}
          <span className="font-semibold text-foreground">trazabilidad</span>{" "}
          que buscamos.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}
