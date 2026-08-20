"use client";

import { motion } from "framer-motion";
import { Calculator, TrendingUp, RotateCw, Plus, X } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[8];

const operationsSummary = [
  {
    operation: "Escalar × Vector",
    result: "Vector",
    formula: "aA⃗ = (aAx, aAy, aAz)",
    geometric: "Magnitud: |a|·A",
    icon: X,
    color: "text-neon-cyan",
  },
  {
    operation: "Suma / Resta",
    result: "Vector",
    formula: "A⃗ ± B⃗ = (Ax ± Bx, ...)",
    geometric: "Regla del paralelogramo",
    icon: Plus,
    color: "text-neon-mint",
  },
  {
    operation: "Producto Punto",
    result: "Escalar",
    formula: "A⃗ · B⃗ = AxBx + AyBy + AzBz",
    geometric: "AB cos(θ)",
    icon: TrendingUp,
    color: "text-neon-violet",
  },
  {
    operation: "Producto Cruz",
    result: "Vector",
    formula: "Ver determinante 3×3",
    geometric: "AB sin(θ) ⟂ plano",
    icon: RotateCw,
    color: "text-neon-magenta",
  },
];

const keyConcepts = [
  { concept: "Magnitud + Dirección", description: "Los vectores necesitan ambos para estar completos definidos", color: "border-neon-cyan/30" },
  { concept: "Componentes", description: "Cualquier vector se puede descomponer en î, ĵ, κ", color: "border-neon-mint/30" },
  { concept: "Ángulo", description: "Crucial para productos punto (cos) y cruz (sin)", color: "border-neon-amber/30" },
  { concept: "Perpendicularidad", description: "Producto punto = 0, producto cruz = máximo", color: "border-neon-magenta/30" },
  { concept: "Aplicaciones", description: "Trabajo, torque, proyecciones, áreas", color: "border-neon-violet/30" },
];

export function PhysicsSlide09Summary() {
  return (
    <SlideShell meta={meta}>
      <SectionTitle color="cyan">Resumen de Operaciones</SectionTitle>

      {/* Operations table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-card/40"
      >
        <div className="grid grid-cols-4 gap-px bg-white/10">
          {/* Header */}
          <div className="bg-white/5 px-3 py-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Operación
            </div>
          </div>
          <div className="bg-white/5 px-3 py-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Resultado
            </div>
          </div>
          <div className="bg-white/5 px-3 py-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Fórmula
            </div>
          </div>
          <div className="bg-white/5 px-3 py-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Geométrica
            </div>
          </div>

          {/* Rows */}
          {operationsSummary.map((op, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="contents"
            >
              <div className="bg-card/30 px-3 py-3 flex items-center gap-2">
                <op.icon className={`h-4 w-4 ${op.color}`} />
                <span className="text-sm font-semibold text-foreground">{op.operation}</span>
              </div>
              <div className="bg-card/30 px-3 py-3">
                <span className={`text-sm font-semibold ${op.result === "Vector" ? "text-neon-cyan" : "text-neon-magenta"}`}>
                  {op.result}
                </span>
              </div>
              <div className="bg-card/30 px-3 py-3">
                <span className="font-mono text-xs text-neon-cyan">{op.formula}</span>
              </div>
              <div className="bg-card/30 px-3 py-3">
                <span className="text-xs text-muted-foreground">{op.geometric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key concepts */}
      <div className="mt-6">
        <h3 className="mb-3 text-lg font-semibold text-foreground">Conceptos Clave</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {keyConcepts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className={`rounded-lg border ${item.color} bg-card/30 p-3`}
            >
              <div className="text-sm font-semibold text-foreground">{item.concept}</div>
              <div className="mt-1 text-xs text-muted-foreground">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 rounded-xl border border-white/10 bg-card/40 p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="h-5 w-5 text-neon-cyan" />
          <h4 className="font-semibold text-foreground">Referencia Rápida</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="space-y-1">
            <div className="text-muted-foreground">Magnitud en 2D:</div>
            <div className="text-neon-cyan">|A⃗| = √(Ax² + Ay²)</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Magnitud en 3D:</div>
            <div className="text-neon-cyan">|A⃗| = √(Ax² + Ay² + Az²)</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Ángulo entre vectores:</div>
            <div className="text-neon-magenta">θ = arccos((A⃗·B⃗) / (|A⃗||B⃗|))</div>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Vectores unitarios:</div>
            <div className="text-neon-mint">A⃗ = Axî + Ayĵ + Azκ</div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="cyan">
          Estas cuatro operaciones forman la base del cálculo vectorial. El dominarlas te permitirá
          resolver cualquier problema de física, desde cinemática básica hasta electromagnetismo
          avanzado. La clave es entender cuándo usar cada una: suma para movimientos compuestos,
          producto punto para trabajo y proyecciones, producto cruz para torque y efectos de rotación.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}