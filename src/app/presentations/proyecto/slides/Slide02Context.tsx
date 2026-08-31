"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, ArrowRight } from "lucide-react";
import { slidesMeta } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = slidesMeta[1];

const goals = [
  {
    icon: Target,
    title: "Comprender el método",
    description: "Aprender a usar la Bitácora como herramienta organizativa",
    color: "text-neon-cyan",
    bgColor: "bg-[#00e5ff]/10",
    borderColor: "border-[#00e5ff]/30"
  },
  {
    icon: Users,
    title: "Trabajar en equipo",
    description: "Convertir la colaboración desordenada en trabajo coordinado",
    color: "text-neon-mint",
    bgColor: "bg-[#4ade80]/10",
    borderColor: "border-[#4ade80]/30"
  },
  {
    icon: Award,
    title: "Lograr el 100%",
    description: "Entregar proyectos de calidad que cumplen la rúbrica completa",
    color: "text-neon-amber",
    bgColor: "bg-[#fbbf24]/10",
    borderColor: "border-[#fbbf24]/30"
  }
];

export function Slide02Context() {
  return (
    <SlideShell meta={meta}>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Por qué estamos aquí?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Esta presentación tiene un propósito claro: ayudarte a transformar la experiencia de trabajar en equipo en la universidad.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {goals.map((goal, i) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className={`group relative rounded-xl border ${goal.borderColor} ${goal.bgColor} p-5 transition hover:border-opacity-60`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/5 ${goal.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className={`font-sans text-lg font-bold ${goal.color}`}>
                      {goal.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mx-auto max-w-2xl rounded-xl border border-[#00e5ff]/30 bg-[#00e5ff]/5 p-5"
        >
          <div className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 shrink-0 mt-0.5 text-[#7decff]" />
            <div className="space-y-2">
              <p className="text-sm text-foreground">
                <span className="font-semibold">El objetivo final:</span> que cuando termines esta presentación, tengas las herramientas necesarias para evitar los problemas típicos del trabajo en equipo y puedas entregar proyectos que realmente reflejen un esfuerzo coordinado y de calidad.
              </p>
              <p className="text-xs text-muted-foreground">
                Porque en Física General I, como en la vida profesional, el trabajo en equipo no es opcional — es una habilidad fundamental.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">¿Listos?</span> Vamos a empezar identificando el problema que todos conocemos...
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}