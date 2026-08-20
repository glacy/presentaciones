"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, ArrowRight, ChevronRight } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[6];

const dotProductProperties = [
  { property: "Conmutativo", formula: "A⃗ · B⃗ = B⃗ · A⃗", description: "El orden no importa" },
  { property: "Distributivo", formula: "A⃗ · (B⃗ + C⃗) = A⃗ · B⃗ + A⃗ · C⃗", description: "Se distribuye sobre la suma" },
  { property: "Ortogonalidad", formula: "A⃗ · B⃗ = 0 ⟂ A⃗ ⟂ B⃗", description: "Vectores perpendiculares" },
];

const dotProductFormulas = [
  { title: "Por componentes", formula: "A⃗ · B⃗ = Ax·Bx + Ay·By + Az·Bz", description: "Suma de productos de componentes" },
  { title: "Geométrica", formula: "A⃗ · B⃗ = |A⃗||B⃗|cos(θ)", description: "Producto de magnitudes × coseno del ángulo" },
];

const workExample = [
  { step: 1, text: "Fuerza: F = 50 N a 37°", value: "Fx = 50·cos(37°) = 39.9 N" },
  { step: 2, text: "Desplazamiento: d = 10 m horizontal", value: "dx = 10 m" },
  { step: 3, text: "Trabajo: W = Fx·dx", value: "W = 39.9 × 10 = 399 J" },
];

export function PhysicsSlide07DotProduct() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Definition and formulas */}
        <div>
          <SectionTitle color="violet">Producto Escalar (Punto)</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 rounded-xl border border-white/10 bg-card/40 p-4"
          >
            <p className="text-sm text-muted-foreground mb-3">
              Operación que toma dos vectores y produce un <span className="font-semibold text-foreground">escalar</span>.
            </p>
            <div className="font-mono text-2xl font-bold text-center text-neon-violet">
              A⃗ · B⃗ = escalar
            </div>
          </motion.div>

          <div className="mt-4 space-y-3">
            {dotProductFormulas.map((formula, i) => (
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
                <div className="font-mono text-lg font-semibold text-neon-cyan">
                  {formula.formula}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{formula.description}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="mb-2 text-sm font-semibold text-foreground">Propiedades</h4>
            <div className="space-y-2">
              {dotProductProperties.map((prop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <ChevronRight className="h-4 w-4 text-neon-violet mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground text-sm">{prop.property}</span>
                    </div>
                    <div className="font-mono text-xs text-neon-cyan mt-1">{prop.formula}</div>
                    <div className="text-xs text-muted-foreground mt-1">{prop.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Physical application - Work */}
        <div>
          <SectionTitle color="violet">Aplicación: Trabajo Mecánico</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4"
          >
            {/* Work diagram */}
            <div className="mb-4 flex h-[200px] items-center justify-center">
              <svg viewBox="0 0 200 150" className="h-full w-full">
                {/* Ground */}
                <line x1="20" y1="120" x2="180" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <line x1="20" y1="125" x2="180" y2="125" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                {/* Object */}
                <motion.rect x="60" y="90" width="30" height="30" fill="rgba(0,229,255,0.2)" stroke="#00e5ff" strokeWidth="2" initial={{ x: 60 }} animate={{ x: 120 }} transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatType: "reverse" }} />

                {/* Force vector */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <line x1="75" y1="105" x2="115" y2="75" stroke="#ff3d8b" strokeWidth="2" />
                  <polygon points="115,75 108,78 112,84" fill="#ff3d8b" />
                  <text x="120" y="75" fill="#ff3d8b" fontSize="10" fontWeight="bold">F⃗</text>
                </motion.g>

                {/* Displacement vector */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  <line x1="90" y1="130" x2="150" y2="130" stroke="#4ade80" strokeWidth="2" />
                  <polygon points="150,130 142,127 142,133" fill="#4ade80" />
                  <text x="155" y="135" fill="#4ade80" fontSize="10" fontWeight="bold">d⃗</text>
                </motion.g>

                {/* Angle */}
                <motion.path d="M 90 120 Q 95 115 100 120" fill="none" stroke="#fbbf24" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
                <text x="95" y="115" fill="#fbbf24" fontSize="8">θ</text>

                {/* Work formula */}
                <motion.text x="100" y="30" fill="rgba(255,255,255,0.8)" fontSize="12" textAnchor="middle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  W = F⃗ · d⃗ = Fd cos(θ)
                </motion.text>
              </svg>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-neon-violet" />
                <span className="text-muted-foreground">Trabajo = Fuerza × Desplazamiento × cos(θ)</span>
              </div>
              <div className="rounded-lg border border-[#ff8c42]/30 bg-[#ff8c42]/5 p-2">
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Importante:</span> Si la fuerza es
                  perpendicular al desplazamiento (θ = 90°), el trabajo es <span className="font-mono font-bold text-neon-orange">cero</span>.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example calculation */}
          <div className="mt-4">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Ejemplo: Empujando una caja</h4>
            <div className="space-y-2">
              {workExample.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-neon-violet/30 bg-neon-violet/10 text-xs font-bold text-neon-violet">
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

      <div className="mt-6">
        <TeacherNote color="violet">
          El producto escalar es fundamental porque describe cuánto de un vector actúa en la
          dirección de otro. En el trabajo, solo la componente de la fuerza paralela al
          desplazamiento contribuye. Por eso, si empujas perpendicularmente al movimiento,
          no haces trabajo, aunque apliques mucha fuerza.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}