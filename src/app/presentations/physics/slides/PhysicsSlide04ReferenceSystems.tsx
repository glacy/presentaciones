"use client";

import { motion } from "framer-motion";
import { Grid3x3, CircleDot, Move3D, RotateCw } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[3];

export function PhysicsSlide04ReferenceSystems() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Cartesian System */}
        <div>
          <SectionTitle color="cyan">Sistema Cartesiano</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4"
          >
            <div className="flex aspect-square items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-full w-full max-h-[300px]">
                {/* Grid */}
                {[-4, -3, -2, -1, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <line x1="20" y1={100 + i * 20} x2={180} y2={100 + i * 20} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <line x1={100 + i * 20} y1="20" x2={100 + i * 20} y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  </g>
                ))}

                {/* Axes */}
                <motion.line x1="20" y1="100" x2="180" y2="100" stroke="rgba(0,229,255,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                <motion.line x1="100" y1="180" x2="100" y2="20" stroke="rgba(74,222,128,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />

                {/* Axis labels */}
                <text x="185" y="105" fill="#00e5ff" fontSize="12" fontWeight="bold">x</text>
                <text x="95" y="15" fill="#4ade80" fontSize="12" fontWeight="bold">y</text>

                {/* Origin */}
                <circle cx="100" cy="100" r="3" fill="#fbbf24" />

                {/* Points */}
                {[{ x: 140, y: 60, label: "(2,2)", delay: 0.8 }, { x: 60, y: 140, label: "(-2,-2)", delay: 1.0 }, { x: 140, y: 140, label: "(2,-2)", delay: 1.2 }].map((point, i) => (
                  <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: point.delay }}>
                    <circle cx={point.x} cy={point.y} r="4" fill="#ff3d8b" />
                    <text x={point.x + 8} y={point.y + 4} fill="#e9edef" fontSize="10">{point.label}</text>
                    <line x1="100" y1="100" x2={point.x} y2={point.y} stroke="rgba(255,61,139,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                  </motion.g>
                ))}
              </svg>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-neon-cyan" />
                <span className="text-muted-foreground">Eje x: horizontal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-neon-mint" />
                <span className="text-muted-foreground">Eje y: vertical</span>
              </div>
              <div className="mt-3 font-mono text-xs text-muted-foreground">
                Posición: (x, y) = xî + yĵ
              </div>
            </div>
          </motion.div>
        </div>

        {/* Polar System */}
        <div>
          <SectionTitle color="cyan">Sistema Polar</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4"
          >
            <div className="flex aspect-square items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-full w-full max-h-[300px]">
                {/* Concentric circles */}
                {[30, 60, 90].map((r, i) => (
                  <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                ))}

                {/* Radial lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 100 + 90 * Math.cos(rad);
                  const y2 = 100 - 90 * Math.sin(rad);
                  return (
                    <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  );
                })}

                {/* Reference line */}
                <motion.line x1="100" y1="100" x2="190" y2="100" stroke="rgba(0,229,255,0.6)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />

                {/* Point with angle */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                  <line x1="100" y1="100" x2="150" y2="50" stroke="#ff3d8b" strokeWidth="2" />
                  <circle cx="150" cy="50" r="4" fill="#ff3d8b" />
                  {/* Angle arc */}
                  <path d="M 130 100 A 30 30 0 0 0 129 85" fill="none" stroke="#fbbf24" strokeWidth="2" />
                  <text x="135" y="95" fill="#fbbf24" fontSize="10">θ</text>
                  <text x="155" y="45" fill="#e9edef" fontSize="10">(r, θ)</text>
                </motion.g>

                {/* Labels */}
                <text x="185" y="115" fill="#00e5ff" fontSize="10">0°</text>
                <text x="105" y="15" fill="#e9edef" fontSize="10">90°</text>
                <text x="15" y="105" fill="#e9edef" fontSize="10">180°</text>
              </svg>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-neon-cyan" />
                <span className="text-muted-foreground">r: distancia desde el origen</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCw className="h-4 w-4 text-neon-mint" />
                <span className="text-muted-foreground">θ: ángulo desde el eje x positivo</span>
              </div>
              <div className="mt-3 font-mono text-xs text-muted-foreground">
                Posición: (r, θ) donde r &#8805; 0, 0&#176; &#8804; θ &lt; 360&#176;
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Conversion formulas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-card/30 p-4"
      >
        <div>
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Polar → Cartesiano
          </div>
          <div className="space-y-1 font-mono text-sm">
            <div>x = r · cos(θ)</div>
            <div>y = r · sin(θ)</div>
          </div>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cartesiano → Polar
          </div>
          <div className="space-y-1 font-mono text-sm">
            <div>r = √(x² + y²)</div>
            <div>θ = arctan(y/x)</div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="cyan">
          Ambos sistemas describen la misma posición, pero cada uno tiene ventajas según el problema.
          El sistema cartesiano es ideal para movimientos rectilíneos, mientras que el polar
          es perfecto para movimientos circulares o problemas con simetría radial.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}