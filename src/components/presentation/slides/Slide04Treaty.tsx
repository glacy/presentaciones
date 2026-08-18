"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Target,
  ScrollText,
  Gavel,
  Eye,
  FileText,
  Beaker,
  Repeat,
  Zap,
} from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";
import { SlideShell } from "../ui/SlideShell";
import { TeacherNote } from "../ui/primitives";

const meta = slidesMeta[3];

const flow = [
  {
    weakness: "Procrastino",
    icon: Repeat,
    role: "Documentador",
    reason: "Fechas cortas y específicas, supervisado por el coordinador.",
    roleIcon: FileText,
  },
  {
    weakness: "Me estreso en el lab",
    icon: Zap,
    role: "Revisor de formato",
    reason: "Tarea alejada del montaje, enfocada en el informe final.",
    roleIcon: Eye,
  },
  {
    weakness: "Me cuesta redactar",
    icon: ScrollText,
    role: "Desarrollador práctico",
    reason: "Responsable del montaje y los datos, no del texto.",
    roleIcon: Beaker,
  },
];

const roles = [
  {
    name: "Coordinador/a",
    icon: Gavel,
    color: "cyan" as const,
    duties: "Planifica, supervisa, organiza, motiva y resuelve conflictos.",
  },
  {
    name: "Documentador/a",
    icon: FileText,
    color: "mint" as const,
    duties: "Controla reuniones, toma evidencias y alimenta el informe.",
  },
  {
    name: "Desarrollador/a",
    icon: Beaker,
    color: "orange" as const,
    duties: "Búsqueda de info + implementación práctica del experimento.",
  },
  {
    name: "Revisor/a",
    icon: Eye,
    color: "violet" as const,
    duties: "Corrige escritura, formato y veracidad; verifica el montaje.",
  },
];

const colorTextMap: Record<string, string> = {
  cyan: "text-neon-cyan",
  mint: "text-neon-mint",
  orange: "text-neon-orange",
  violet: "text-[#c084fc]",
};

const colorBorderMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5",
  mint: "border-[#4ade80]/30 bg-[#4ade80]/5",
  orange: "border-[#ff8c42]/30 bg-[#ff8c42]/5",
  violet: "border-[#a855f7]/30 bg-[#a855f7]/5",
};

export function Slide04Treaty() {
  return (
    <SlideShell meta={meta}>
      {/* Coherence warning */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#00e5ff]/15 text-neon-cyan">
          <Target className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground sm:text-base">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#7decff]">
            Concepto clave · Coherencia
          </span>
          <br />
          Si en la Tabla 1 dijiste que te estresas en el lab, tu rol aquí{" "}
          <span className="font-semibold text-neon-magenta">NO</span> puede ser
          “Montador experimental”.
        </p>
      </motion.div>

      {/* Flow: weakness -> role */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-3 flex items-center gap-2 font-sans text-base font-semibold text-foreground sm:text-lg"
      >
        <Users className="h-5 w-5 text-neon-cyan" />
        De la debilidad al rol (ejemplos)
      </motion.h3>

      <div className="grid gap-3 md:grid-cols-3">
        {flow.map((f, i) => {
          const W = f.icon;
          const R = f.roleIcon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.18 }}
              className="rounded-xl border border-white/10 bg-card/40 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#ff3d8b]/30 bg-[#ff3d8b]/10 text-neon-magenta">
                  <W className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Debilidad T1
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {f.weakness}
                  </div>
                </div>
              </div>

              <div className="my-3 flex items-center justify-center">
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="text-[#4ade80]"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/10 text-neon-mint">
                  <R className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Rol T3
                  </div>
                  <div className="text-sm font-semibold text-neon-mint">
                    {f.role}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {f.reason}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Roles palette */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-3 mt-6 flex items-center gap-2 font-sans text-base font-semibold text-foreground sm:text-lg"
      >
        <ScrollText className="h-5 w-5 text-neon-cyan" />
        Roles sugeridos (Tabla 3)
      </motion.h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className={`rounded-xl border p-4 ${colorBorderMap[r.color]}`}
            >
              <Icon className={`h-6 w-6 ${colorTextMap[r.color]}`} />
              <div className="mt-2 font-sans text-sm font-semibold text-foreground">
                {r.name}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {r.duties}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6">
        <TeacherNote color="cyan">
          El rol no te encierra en una jaula, te da una responsabilidad
          principal. Sobre las reglas: no copien y peguen de internet. Si
          deciden Discord en vez de WhatsApp, pónganlo. Si alguien no cumple,
          ¿qué hacen? Ese “plan de contingencia” les da puntos extra en la
          rúbrica.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}
