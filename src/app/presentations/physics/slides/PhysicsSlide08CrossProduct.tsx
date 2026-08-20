"use client";

import { motion } from "framer-motion";
import { RotateCw, Wrench, ArrowRight, ChevronRight } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[7];

const crossProductProperties = [
  { property: "NO conmutativo", formula: "A⃗ × B⃗ = -(B⃗ × A⃗)", description: "El orden importa (cambia el sentido)" },
  { property: "Vectores paralelos", formula: "A⃗ × B⃗ = 0⃗ si θ = 0°", description: "Sinθ = 0 para vectores paralelos" },
  { property: "Perpendicularidad", formula: "|A⃗ × B⃗| = |A⃗||B⃗| sin(θ)", description: "Máximo cuando θ = 90°" },
];

const crossProductFormulas = [
  { title: "Por componentes", formula: "A⃗ × B⃗ = (AyBz - AzBy)î + (AzBx - AxBz)ĵ + (AxBy - AyBx)κ", description: "Determinante de matriz 3×3" },
  { title: "Geométrica", formula: "|A⃗ × B⃗| = |A⃗||B⃗| sin(θ)", description: "Área del paralelogramo formado" },
];

const torqueExample = [
  { step: 1, text: "Fuerza: F = 50 N", value: "F = 50 N" },
  { step: 2, text: "Brazo de palanca: r = 0.5 m", value: "r = 0.5 m" },
  { step: 3, text: "Ángulo: θ = 90° (fuerza perpendicular)", value: "sin(90°) = 1" },
  { step: 4, text: "Torque: τ = r × F", value: "τ = 0.5 × 50 × 1 = 25 N·m" },
];

export function PhysicsSlide08CrossProduct() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Definition and formulas */}
        <div>
          <SectionTitle color="magenta">Producto Vectorial (Cruz)</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 rounded-xl border border-white/10 bg-card/40 p-4"
          >
            <p className="text-sm text-muted-foreground mb-3">
              Operación que toma dos vectores y produce un <span className="font-semibold text-foreground">vector</span>
              perpendicular al plano que los contiene.
            </p>
            <div className="font-mono text-2xl font-bold text-center text-neon-magenta">
              A⃗ × B⃗ = vector ⟂
            </div>
          </motion.div>

          <div className="mt-4 space-y-3">
            {crossProductFormulas.map((formula, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-lg border border-white/8 bg-card/30 p-3"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {formula.title}
                </div>
                <div className="font-mono text-sm font-semibold text-neon-cyan break-words">
                  {formula.formula}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{formula.description}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="mb-2 text-sm font-semibold text-foreground">Regla de la mano derecha</h4>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-lg border border-white/10 bg-card/30 p-4"
            >
              <div className="flex items-start gap-3">
                <RotateCw className="h-8 w-8 text-neon-magenta shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Curva los dedos de tu mano derecha desde <span className="font-semibold text-foreground">A⃗</span> hacia
                  <span className="font-semibold text-foreground"> B⃗</span>. Tu pulgar apunta en la dirección de
                  <span className="font-semibold text-neon-magenta"> A⃗ × B⃗</span>.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Physical application - Torque */}
        <div>
          <SectionTitle color="magenta">Aplicación: Torque</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4"
          >
            {/* Torque diagram */}
            <div className="mb-4 flex h-[200px] items-center justify-center">
              <svg viewBox="0 0 200 150" className="h-full w-full">
                {/* Door/pivot */}
                <line x1="100" y1="140" x2="100" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
                <circle cx="100" cy="140" r="6" fill="#00e5ff" />

                {/* Door handle */}
                <motion.rect x="95" y="50" width="10" height="20" fill="rgba(74,222,128,0.3)" stroke="#4ade80" strokeWidth="2" initial={{ x: 95 }} animate={{ x: 140 }} transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatType: "reverse" }} />

                {/* Position vector */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <line x1="100" y1="140" x2="100" y2="60" stroke="#4ade80" strokeWidth="2" strokeDasharray="4,4" />
                  <text x="105" y="100" fill="#4ade80" fontSize="10" fontWeight="bold">r⃗</text>
                </motion.g>

                {/* Force vector */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  <line x1="100" y1="60" x2="150" y2="60" stroke="#ff3d8b" strokeWidth="2" />
                  <polygon points="150,60 142,57 142,63" fill="#ff3d8b" />
                  <text x="155" y="65" fill="#ff3d8b" fontSize="10" fontWeight="bold">F⃗</text>
                </motion.g>

                {/* Torque result */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <circle cx="100" cy="140" r="15" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,4" className="animate-spin" style={{ animationDuration: "3s" }} />
                  <text x="125" y="145" fill="#fbbf24" fontSize="10" fontWeight="bold">τ⃗</text>
                </motion.g>

                {/* Torque formula */}
                <motion.text x="100" y="25" fill="rgba(255,255,255,0.8)" fontSize="12" textAnchor="middle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  τ⃗ = r⃗ × F⃗
                </motion.text>
              </svg>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Wrench className="h-4 w-4 text-neon-magenta" />
                <span className="text-muted-foreground">Torque = Posición × Fuerza</span>
              </div>
              <div className="rounded-lg border border-[#ff8c42]/30 bg-[#ff8c42]/5 p-2">
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Magnitud:</span> τ = rF sin(θ) =
                  F · r<sub>⊥</sub> (fuerza × brazo de palanca)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example calculation */}
          <div className="mt-4">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Ejemplo: Girando una perilla</h4>
            <div className="space-y-2">
              {torqueExample.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-neon-magenta/30 bg-neon-magenta/10 text-xs font-bold text-neon-magenta">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">{step.text}</div>
                    <div className="font-mono text-sm text-neon-cyan mt-1">{step.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Properties summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-6 grid grid-cols-3 gap-3"
      >
        {crossProductProperties.map((prop, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
            className="rounded-lg border border-white/10 bg-card/30 p-3"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {prop.property}
            </div>
            <div className="font-mono text-sm font-semibold text-neon-cyan break-words">
              {prop.formula}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{prop.description}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="magenta">
          El producto cruz es esencial para describir rotaciones y efectos de fuerzas que
          causan giro. A diferencia del trabajo (producto escalar), el torque requiere que
          la fuerza tenga una componente perpendicular al brazo de palanca. Por eso, empujar
          una puerta hacia las bisagras no la hace girar.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}