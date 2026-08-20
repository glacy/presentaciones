"use client";

import { motion } from "framer-motion";
import { Compass, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[5];

const cardinalDirections = [
  { direction: "Norte", symbol: "N", angle: "90°", color: "text-neon-cyan", description: "Eje y positivo" },
  { direction: "Sur", symbol: "S", angle: "270°", color: "text-neon-mint", description: "Eje y negativo" },
  { direction: "Este", symbol: "E", angle: "0°", color: "text-neon-amber", description: "Eje x positivo" },
  { direction: "Oeste", symbol: "O", angle: "180°", color: "text-neon-magenta", description: "Eje x negativo" },
];

const conversionExamples = [
  { cardinal: "45° NE", polar: "45°", description: "Desde el Norte, 45° hacia el Este" },
  { cardinal: "30° SE", polar: "300°", description: "Desde el Sur, 30° hacia el Este" },
  { cardinal: "60° NO", polar: "150°", description: "Desde el Norte, 60° hacia el Oeste" },
  { cardinal: "20° SO", polar: "200°", description: "Desde el Sur, 20° hacia el Oeste" },
];

export function PhysicsSlide06CardinalDirections() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Compass rose */}
        <div>
          <SectionTitle color="orange">Puntos Cardinales</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4"
          >
            <div className="flex aspect-square items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-full w-full max-h-[450px]">
                {/* Outer circle */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Cardinal directions lines */}
                <g>
                  <motion.line x1="100" y1="100" x2="100" y2="20" stroke="rgba(0,229,255,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
                  <motion.polygon points="100,15 95,30 105,30" fill="#00e5ff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }} />
                </g>

                <g>
                  <motion.line x1="100" y1="100" x2="180" y2="100" stroke="rgba(251,191,36,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
                  <motion.polygon points="185,100 170,95 170,105" fill="#fbbf24" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
                </g>

                <g>
                  <motion.line x1="100" y1="100" x2="100" y2="180" stroke="rgba(74,222,128,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
                  <motion.polygon points="100,185 95,170 105,170" fill="#4ade80" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
                </g>

                <g>
                  <motion.line x1="100" y1="100" x2="20" y2="100" stroke="rgba(168,85,247,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
                  <motion.polygon points="15,100 30,95 30,105" fill="#a855f7" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
                </g>

                {/* Diagonal lines */}
                <motion.line x1="100" y1="100" x2="163" y2="37" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
                <motion.line x1="100" y1="100" x2="163" y2="163" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
                <motion.line x1="100" y1="100" x2="37" y2="163" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />
                <motion.line x1="100" y1="100" x2="37" y2="37" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} />

                {/* Labels */}
                <text x="95" y="12" fill="#00e5ff" fontSize="12" fontWeight="bold">N</text>
                <text x="188" y="105" fill="#fbbf24" fontSize="12" fontWeight="bold">E</text>
                <text x="98" y="195" fill="#4ade80" fontSize="12" fontWeight="bold">S</text>
                <text x="8" y="105" fill="#a855f7" fontSize="12" fontWeight="bold">O</text>

                {/* Quadrant labels */}
                <text x="140" y="50" fill="rgba(255,255,255,0.3)" fontSize="10">NE</text>
                <text x="140" y="155" fill="rgba(255,255,255,0.3)" fontSize="10">SE</text>
                <text x="45" y="155" fill="rgba(255,255,255,0.3)" fontSize="10">SO</text>
                <text x="45" y="50" fill="rgba(255,255,255,0.3)" fontSize="10">NO</text>

                {/* Center point */}
                <circle cx="100" cy="100" r="3" fill="#ff3d8b" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right: Conversion examples */}
        <div>
          <SectionTitle color="orange">Conversión a Polar</SectionTitle>

          <div className="mt-4 space-y-3">
            {cardinalDirections.map((dir, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 rounded-lg border border-white/8 bg-card/30 p-3"
              >
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 ${dir.color}`}>
                  {i === 0 ? <ArrowUp className="h-5 w-5" /> : i === 1 ? <ArrowDown className="h-5 w-5" /> : i === 2 ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{dir.direction}</span>
                    <span className="font-mono text-sm text-muted-foreground">{dir.angle}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{dir.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-card/30"
      >
        <div className="border-b border-white/10 px-4 py-3 bg-white/[0.02]">
          <h4 className="font-semibold text-foreground">Ejemplos de Conversión</h4>
        </div>
        <div className="divide-y divide-white/5">
          {conversionExamples.map((example, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="grid grid-cols-3 gap-4 px-4 py-3"
            >
              <div className="font-mono text-sm font-semibold text-neon-cyan">{example.cardinal}</div>
              <div className="font-mono text-sm font-semibold text-neon-mint">{example.polar}</div>
              <div className="text-xs text-muted-foreground">{example.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Conversion rule */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-6 rounded-xl border border-[#ff8c42]/30 bg-[#ff8c42]/5 p-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <Compass className="h-5 w-5 text-neon-orange" />
          <h4 className="font-semibold text-foreground">Regla de Conversión</h4>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Cuadrantes N (1 y 2):</span>
            <span className="ml-2 font-mono text-neon-cyan">θ = θ_cardinal</span>
          </div>
          <div>
            <span className="text-muted-foreground">Cuadrantes S (3 y 4):</span>
            <span className="ml-2 font-mono text-neon-mint">θ = 180° + θ_cardinal</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="orange">
          Los puntos cardinales son el lenguaje natural de la navegación. En física, es crucial
          saber convertir entre notación cardinal (que usamos en la vida diaria) y notación polar
          (que usamos en cálculos matemáticos). La regla de oro: mitad norte = desde el Norte,
          mitad sur = desde el Sur.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}