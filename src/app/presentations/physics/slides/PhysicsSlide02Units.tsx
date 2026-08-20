"use client";

import { motion } from "framer-motion";
import { Ruler, Scale, Clock, Zap } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[1];

const fundamentalUnits = [
  { quantity: "Longitud", symbol: "l, x, r", unit: "metro", unitSymbol: "m", icon: Ruler, color: "text-neon-cyan" },
  { quantity: "Masa", symbol: "m", unit: "kilogramo", unitSymbol: "kg", icon: Scale, color: "text-neon-mint" },
  { quantity: "Tiempo", symbol: "t", unit: "segundo", unitSymbol: "s", icon: Clock, color: "text-neon-amber" },
  { quantity: "Corriente", symbol: "I, i", unit: "amperio", unitSymbol: "A", icon: Zap, color: "text-neon-magenta" },
];

const derivedUnits = [
  { quantity: "Velocidad", unit: "m/s", formula: "distancia/tiempo" },
  { quantity: "Aceleración", unit: "m/s²", formula: "velocidad/tiempo" },
  { quantity: "Fuerza", unit: "N (newton)", formula: "masa × aceleración" },
  { quantity: "Trabajo", unit: "J (joule)", formula: "fuerza × distancia" },
];

const prefixes = [
  { factor: "10⁻³", name: "mili", symbol: "m", example: "1 mm = 0.001 m" },
  { factor: "10³", name: "kilo", symbol: "k", example: "1 km = 1000 m" },
  { factor: "10⁻⁹", name: "nano", symbol: "n", example: "1 nm = 10⁻⁹ m" },
  { factor: "10⁶", name: "mega", symbol: "M", example: "1 Mm = 10⁶ m" },
];

export function PhysicsSlide02Units() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left column: Fundamental units */}
        <div>
          <SectionTitle color="magenta">Unidades Fundamentales</SectionTitle>

          <div className="mt-4 space-y-3">
            {fundamentalUnits.map((unit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group relative flex items-start gap-4 rounded-xl border border-white/8 bg-card/40 p-4 transition hover:border-[#ff3d8b]/40"
              >
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${unit.color}`}>
                  <unit.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{unit.quantity}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{unit.symbol}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {unit.unit} ({unit.unitSymbol})
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: Derived units and prefixes */}
        <div className="space-y-6">
          {/* Derived units */}
          <div>
            <h3 className="mb-3 font-sans text-lg font-semibold text-foreground">
              Unidades Derivadas
            </h3>
            <div className="space-y-2">
              {derivedUnits.map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <div className="font-mono text-sm font-semibold text-neon-cyan">
                    {unit.unit}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                      {unit.quantity}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {unit.formula}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Prefixes */}
          <div>
            <h3 className="mb-3 font-sans text-lg font-semibold text-foreground">
              Prefijos del SI
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {prefixes.map((prefix, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="rounded-lg border border-white/8 bg-card/30 p-3"
                >
                  <div className="font-mono text-xs text-muted-foreground">
                    {prefix.factor}
                  </div>
                  <div className="mt-1 font-semibold text-foreground">
                    {prefix.name} ({prefix.symbol})
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {prefix.example}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <TeacherNote color="magenta">
          El Sistema Internacional de Unidades (SI) es el lenguaje universal de la física.
          Las 7 magnitudes fundamentales nos permiten construir cualquier cantidad derivada
          necesaria para describir el universo, desde el tamaño de un átomo hasta la distancia
          entre galaxias.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}