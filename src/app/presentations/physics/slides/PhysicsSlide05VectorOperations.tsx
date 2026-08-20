"use client";

import { motion } from "framer-motion";
import { Plus, Grid3x3, Calculator } from "lucide-react";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote, SectionTitle } from "../../shared/ui/primitives";
import { InlineMath, BlockMath } from 'react-katex';

const meta = physicsSlidesMeta[4];

const additionMethods = [
  {
    title: "Método Gráfico: Paralelogramo",
    description: "Colocar vectores con mismo origen, completar paralelogramo",
    color: "text-neon-cyan",
    borderColor: "border-neon-cyan/30",
  },
  {
    title: "Método Gráfico: Cabeza-Cola",
    description: "Colocar la cola de B en la cabeza de A, conectar orígenes",
    color: "text-neon-mint",
    borderColor: "border-neon-mint/30",
  },
  {
    title: "Método Analítico: Componentes",
    description: (
      <span>Sumar componente por componente: <BlockMath math="\begin{align*} R_x =& A_x + B_x \\ R_y =& A_y + B_y \end{align*}" /></span>
    ),
    color: "text-neon-amber",
    borderColor: "border-neon-amber/30",
  },
];

const componentExample = [
  { step: 1, text: <><InlineMath math="A_x = A\cdot\cos(\theta_A), A_y = A\cdot\sin(\theta_A)" /></>, color: "text-neon-cyan" },
  { step: 2, text: <><InlineMath math="B_x = B\cdot\cos(\theta_B), B_y = B\cdot\sin(\theta_B)" /></>, color: "text-neon-mint" },
  { step: 3, text: <><InlineMath math="R_x = A_x + B_x, R_y = A_y + B_y" /></>, color: "text-neon-amber" },
  { step: 4, text: <><InlineMath math="R = \sqrt{R_x^2 + R_y^2}" /></>, color: "text-neon-magenta" },
  { step: 5, text: <><InlineMath math="\theta_R = \arctan(R_y/R_x)" /></>, color: "text-neon-cyan" },
];

export function PhysicsSlide05VectorOperations() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Methods */}
        <div>
          <SectionTitle color="amber">Métodos de Suma</SectionTitle>

          <div className="mt-4 space-y-3">
            {additionMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`group relative rounded-xl border ${method.borderColor} bg-card/40 p-4 transition hover:bg-card/60`}
              >
                <div className="flex items-start gap-3">
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${method.color}`}>
                    {i === 0 ? <Grid3x3 className="h-5 w-5" /> : i === 1 ? <Plus className="h-5 w-5" /> : <Calculator className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${method.color}`}>{method.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{method.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Properties */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 rounded-xl border border-white/10 bg-card/30 p-4"
          >
            <h4 className="mb-3 font-semibold text-foreground">Propiedades</h4>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-neon-cyan"><InlineMath math="\vec{A}+\vec{B}=\vec{B}+\vec{A}" /></span>
                <span className="text-xs text-muted-foreground">(conmutativa)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neon-mint"><InlineMath math="(\vec{A}+\vec{B})+\vec{C}=\vec{A}+(\vec{B}+\vec{C})" /></span>
                <span className="text-xs text-muted-foreground">(asociativa)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neon-amber"><InlineMath math="\vec{A}+\vec{0}=\vec{A}" /></span>
                <span className="text-xs text-muted-foreground">(elemento neutro)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Component method example */}
        <div>
          <SectionTitle color="amber">Método de Componentes</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4"
          >
            {/* Visual representation */}
            <div className="mb-4 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-full w-full max-h-[350px]">
                {/* Grid */}
                {[-2, -1, 1, 2].map((i) => (
                  <g key={i}>
                    <line x1="20" y1={100 + i * 30} x2={180} y2={100 + i * 30} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <line x1={100 + i * 30} y1="20" x2={100 + i * 30} y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  </g>
                ))}

                {/* Axes */}
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(0,229,255,0.4)" strokeWidth="1" />
                <line x1="100" y1="180" x2="100" y2="20" stroke="rgba(74,222,128,0.4)" strokeWidth="1" />

                {/* Vector A */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <line x1="100" y1="100" x2="150" y2="60" stroke="#00e5ff" strokeWidth="2" />
                  <polygon points="150,60 144,64 148,70" fill="#00e5ff" />
                  <text x="155" y="55" fill="#00e5ff" fontSize="12" fontWeight="bold">A</text>
                </motion.g>

                {/* Vector B */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <line x1="150" y1="60" x2="170" y2="100" stroke="#4ade80" strokeWidth="2" />
                  <polygon points="170,100 164,96 168,90" fill="#4ade80" />
                  <text x="175" y="110" fill="#4ade80" fontSize="12" fontWeight="bold">B</text>
                </motion.g>

                {/* Resultant R */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                  <line x1="100" y1="100" x2="170" y2="100" stroke="#ff3d8b" strokeWidth="3" />
                  <polygon points="170,100 162,96 162,104" fill="#ff3d8b" />
                  <text x="175" y="95" fill="#ff3d8b" fontSize="14" fontWeight="bold">R</text>
                </motion.g>

                {/* Component lines */}
                <motion.line x1="150" y1="60" x2="150" y2="100" stroke="rgba(231, 20, 20, 0.3)" strokeWidth="1" strokeDasharray="4,4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
              </svg>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Ejemplo: <InlineMath math="\vec{A} = 50N \text{ a } 37°, \vec{B} = 30N \text{ a } 53°" />
              </div>
            </div>
          </motion.div>

          {/* Step-by-step */}
          <div className="mt-4 space-y-2">
            {componentExample.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
              >
                <div className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-bold ${step.color}`}>
                  {step.step}
                </div>
                <span className="text-sm text-muted-foreground">{step.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div >

      <div className="mt-6">
        <TeacherNote color="amber">
          El método de componentes es el más preciso y universal. Aunque los métodos gráficos
          son útiles para visualizar, en física real siempre usamos componentes porque nos
          permiten calcular con exactitud cualquier resultado, sin importar cuán complejo sea el problema.
        </TeacherNote>
      </div>
    </SlideShell >
  );
}