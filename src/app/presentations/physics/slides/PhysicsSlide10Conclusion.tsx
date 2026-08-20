"use client";

import { motion } from "framer-motion";
import { Flag, Atom, Zap, Compass, TrendingUp, RotateCw } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";

const meta = physicsSlidesMeta[9];

const keyTakeaways = [
  {
    icon: Atom,
    title: "Lenguaje Universal",
    description: "Los vectores son el lenguaje matemático que describe el movimiento, fuerzas y campos en todo el universo.",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    borderColor: "border-neon-cyan/30",
  },
  {
    icon: Compass,
    title: "Más que Magnitud",
    description: "La dirección es tan importante como la magnitud. Sin ella, no podemos describir el mundo físico con precisión.",
    color: "text-neon-mint",
    bgColor: "bg-neon-mint/10",
    borderColor: "border-neon-mint/30",
  },
  {
    icon: Zap,
    title: "Herramientas Poderosas",
    description: "El producto punto nos da trabajo y proyecciones. El producto cruz nos da torque y rotaciones.",
    color: "text-neon-amber",
    bgColor: "bg-neon-amber/10",
    borderColor: "border-neon-amber/30",
  },
  {
    icon: TrendingUp,
    title: "Conexiones Físicas",
    description: "Cada operación vectorial tiene una aplicación real: desde empujar una caja hasta girar una rueda.",
    color: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10",
    borderColor: "border-neon-magenta/30",
  },
  {
    icon: RotateCw,
    title: "Precisión Matemática",
    description: "El método de componentes nos permite calcular con exactitud cualquier resultado, sin importar la complejidad.",
    color: "text-neon-violet",
    bgColor: "bg-neon-violet/10",
    borderColor: "border-neon-violet/30",
  },
  {
    icon: Flag,
    title: "Base para el Futuro",
    description: "Todo lo que aprenderemos en física (cinemática, dinámica, energía, electromagnetismo) se basa en estos conceptos.",
    color: "text-neon-orange",
    bgColor: "bg-neon-orange/10",
    borderColor: "border-neon-orange/30",
  },
];

export function PhysicsSlide10Conclusion() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />

      {/* Big ambient glows */}
      <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 glow-cyan opacity-40" aria-hidden />
      <div className="absolute -left-20 top-10 h-72 w-72 glow-magenta opacity-30" aria-hidden />
      <div className="absolute -right-16 bottom-10 h-72 w-72 glow-mint opacity-30" aria-hidden />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col px-6 py-8 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4ade80]/40 bg-[#4ade80]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8af0a8]">
            <Flag className="h-3.5 w-3.5" />
            Epílogo
          </div>

          <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-foreground">El Poder de los</span>
            <span className="block bg-gradient-to-r from-[#00e5ff] via-[#4ade80] to-[#ff8c42] bg-clip-text text-transparent">
              Vectores
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground sm:text-lg"
          >
            Desde unidades fundamentales hasta operaciones avanzadas, hemos construido las
            herramientas matemáticas esenciales para describir el universo físico.
          </motion.p>
        </motion.div>

        {/* Key takeaways grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {keyTakeaways.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`relative overflow-hidden rounded-xl border ${item.borderColor} ${item.bgColor} p-5 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-foreground ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl ${item.color} opacity-10`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-card/40 px-6 py-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
              <Atom className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">
                Próximos pasos
              </div>
              <div className="text-xs text-muted-foreground">
                Aplicaremos estos conceptos a cinemática, dinámica y energía
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-6 text-center"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Cátedra de Física General I · Tecnológico de Costa Rica · 2026
          </div>
        </motion.div>
      </div>
    </div>
  );
}