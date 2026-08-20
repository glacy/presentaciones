"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Wind, Thermometer, Scale, Navigation } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";

const meta = physicsSlidesMeta[2];

const scalars = [
  { quantity: "Temperatura", value: "25°C", icon: Thermometer, description: "No tiene dirección, solo magnitud" },
  { quantity: "Masa", value: "5 kg", icon: Scale, description: "Cantidad de materia, independiente de la posición" },
  { quantity: "Distancia", value: "13 km", icon: ArrowRight, description: "Longitud total recorrida" },
  { quantity: "Tiempo", value: "90 min", icon: Wind, description: "Duración, sin orientación espacial" },
];

const vectors = [
  { quantity: "Velocidad del viento", value: "20 km/h NE", icon: Wind, description: "Magnitud + dirección crucial para navegación" },
  { quantity: "Desplazamiento", value: "1 km a 30° SE", icon: Navigation, description: "Cambiar posición requiere dirección exacta" },
  { quantity: "Aceleración", value: "9.81 m/s² ↓", icon: Compass, description: "Siempre dirigida hacia el centro de la Tierra" },
  { quantity: "Fuerza", value: "50 N →", icon: ArrowRight, description: "Empujar en dirección incorrecta no mueve el objeto" },
];

export function PhysicsSlide03ScalarsVectors() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Scalars section */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-neon-mint/50" />
            <h3 className="font-sans text-2xl font-bold text-foreground">Escalares</h3>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-neon-mint/50" />
          </div>

          <div className="space-y-3">
            {scalars.map((scalar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative flex items-start gap-4 rounded-xl border border-white/8 bg-card/40 p-4 transition hover:border-[#4ade80]/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neon-mint/30 bg-neon-mint/10 text-neon-mint">
                  <scalar.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{scalar.quantity}</h3>
                    <span className="font-mono text-lg font-bold text-neon-mint">{scalar.value}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{scalar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vectors section */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-neon-cyan/50" />
            <h3 className="font-sans text-2xl font-bold text-foreground">Vectores</h3>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-neon-cyan/50" />
          </div>

          <div className="space-y-3">
            {vectors.map((vector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group relative flex items-start gap-4 rounded-xl border border-white/8 bg-card/40 p-4 transition hover:border-[#00e5ff]/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                  <vector.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{vector.quantity}</h3>
                    <span className="font-mono text-lg font-bold text-neon-cyan">{vector.value}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{vector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-card/30 p-4"
      >
        <div className="text-center">
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Escalar
          </div>
          <div className="mx-auto h-16 w-16 rounded-full border-2 border-neon-mint/50 bg-neon-mint/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-neon-mint">25</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Solo magnitud</div>
        </div>

        <div className="text-center">
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Vector
          </div>
          <div className="mx-auto h-16 w-16 relative">
            <svg viewBox="0 0 64 64" className="h-full w-full">
              <defs>
                <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
              </defs>
              <motion.line
                x1="32" y1="48" x2="48" y2="16"
                stroke="url(#arrowGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.polygon
                points="48,16 42,20 46,26"
                fill="url(#arrowGrad)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
            </svg>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Magnitud + Dirección</div>
        </div>
      </motion.div>

      <div className="mt-6">
        <TeacherNote color="mint">
          La diferencia fundamental está en la información: un escalar te dice{" "}
          <span className="font-semibold text-foreground">"cuánto"</span>, mientras que un vector
          te dice <span className="font-semibold text-foreground">"cuánto" y "hacia dónde"</span>.
          En física, casi todas las cantidades interesantes son vectoriales porque el movimiento
          y las fuerzas siempre tienen dirección.
        </TeacherNote>
      </div>
    </SlideShell>
  );
}