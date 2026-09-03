"use client";

import { motion } from "framer-motion";
import { ArrowRight, Link2, Layers, Zap, Target, Calendar, AlertTriangle, ClipboardCheck, Workflow } from "lucide-react";
import { getSlideMetaById } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("structure");

const tables = [
  {
    id: "table1",
    title: "Tabla 1: Diagnóstico",
    icon: Target,
    description: "Fortalezas y debilidades individuales",
    color: "text-neon-mint",
    bgColor: "bg-[#4ade80]/10",
    borderColor: "border-[#4ade80]/30",
    purpose: "Conocer al equipo"
  },
  {
    id: "tables2-3",
    title: "Tablas 2-3: Organización",
    icon: Layers,
    description: "Roles, responsabilidades y acuerdos",
    color: "text-neon-cyan",
    bgColor: "bg-[#00e5ff]/10",
    borderColor: "border-[#00e5ff]/30",
    purpose: "Distribuir tareas"
  },
  {
    id: "table4",
    title: "Tabla 4: Cronograma",
    icon: Calendar,
    description: "Planificación temporal con fechas",
    color: "text-neon-amber",
    bgColor: "bg-[#fbbf24]/10",
    borderColor: "border-[#fbbf24]/30",
    purpose: "Coordinar tiempos"
  },
  {
    id: "table5",
    title: "Tabla 5: Registro",
    icon: AlertTriangle,
    description: "Problemas, soluciones y decisiones",
    color: "text-neon-orange",
    bgColor: "bg-[#ff8c42]/10",
    borderColor: "border-[#ff8c42]/30",
    purpose: "Documentar realidades"
  },
  {
    id: "table6",
    title: "Tabla 6: Evaluación",
    icon: ClipboardCheck,
    description: "Balance del proceso y resultados",
    color: "text-neon-violet",
    bgColor: "bg-[#a855f7]/10",
    borderColor: "border-[#a855f7]/30",
    purpose: "Mejora continua"
  }
];

export function StructureSlide() {
  return (
    <SlideShell meta={meta}>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: 0.2 }}
          className="text-center space-y-4"
        >
          {/*      <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/40 bg-[#00e5ff]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7decff]">
            <Link2 className="h-3.5 w-3.5" />
            Sistema integrado
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <span className="block bg-gradient-to-r from-[#00e5ff] via-[#4ade80] to-[#ff8c42] bg-clip-text text-transparent">
              Bitácora
            </span> Un sistema articulado
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground">
            Aunque parece un documento con múltiples tablas, cada parte está conectada para transformar el caos en orden
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left column: Tables flow */}
          <div className="relative space-y-4">
            {/* Main flow */}
            <div className="flex flex-col gap-4">
              {tables.map((table, index) => {
                const Icon = table.icon;
                return (
                  <motion.div
                    key={table.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 1.75 }}
                    className="group relative"
                  >
                    <div className={`flex items-start gap-4 rounded-xl border ${table.borderColor} ${table.bgColor} p-4 transition hover:border-opacity-60 hover:shadow-lg`}>
                      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${table.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-sans text-lg font-bold ${table.color}`}>
                            {table.title}
                          </h3>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">
                            {table.purpose}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {table.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right column: Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 11.0 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/5 p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#4ade80]/15">
                  <Workflow className="h-5 w-5 text-neon-mint" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-sans text-base font-semibold text-foreground">
                    El secreto de la integración
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cada tabla alimenta a la siguiente: el <span className="font-semibold text-neon-mint">diagnóstico</span> define los{" "}
                    <span className="font-semibold text-neon-cyan">roles</span>, que determinan el{" "}
                    <span className="font-semibold text-neon-amber">cronograma</span>, que se ajusta con el{" "}
                    <span className="font-semibold text-neon-orange">registro</span> y se evalúa en la{" "}
                    <span className="font-semibold text-neon-violet">evaluación</span>. Un ciclo de mejora continua.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}