"use client";

import { motion } from "framer-motion";
import { MessageCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { getSlideMetaById } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";
import { TeacherNote } from "../../shared/ui/primitives";

const meta = getSlideMetaById("villain");

const chaoticMessages = [
  { from: "Carlos", text: "Compañeros, alguien me pasa lo que le tocó a Diego que no me responde", time: "Hace 4 días, 11:50 p.m.", self: true, delay: 1.5 },
  { from: "María", text: "¿Quién hizo el Word? 🤔", time: "1:15 a.m.", self: false, delay: 2.0 },
  { from: "Diego", text: "Yo pegué mi parte, no sé qué hizo el resto", time: "8:29 a.m.", self: false, delay: 2.5 },
  { from: "Ana", text: "Nos juntamos el domingo antes de entregar", time: "11:10 AM.", self: false, delay: 3.0 },
  { from: "Tú", text: "¿Y la introducción?", time: "2:00 p.m.", self: true, delay: 3.5 },
];

const symptoms = [
  { week: "Semana 1", text: "Falta de comunicación entre integrantes", color: "text-neon-magenta" },
  { week: "Semana 2", text: "Nadie sabe que le tocó a los demás", color: "text-neon-orange" },
  { week: "Semana 3", text: "Hay tareas de las que nadie se encargó", color: "text-neon-amber" },
  { week: "Semanas 1-4", text: "No hay un seguimiento adecuado", color: "text-neon-magenta" },
  { week: "Semanas 2-5", text: "Roles y responsabilidades sin definir", color: "text-neon-orange" },
  { week: "Semana 8", text: "No hay revisión conjunta del trabajo", color: "text-neon-magenta" },
];

export function VillainSlide() {
  return (
    <SlideShell meta={meta}>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: symptoms timeline */}
        <div className="order-2 lg:order-2">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 7.0 }}
            className="mb-4 flex items-center gap-2 font-sans text-lg font-semibold text-foreground"
          >
            <AlertTriangle className="h-5 w-5 text-neon-magenta" />
            Síntomas del caos
          </motion.h3>

          <div className="space-y-2">
            {symptoms.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 7.0 + i * 1.0 }}
                className="group relative flex items-start gap-2 rounded-lg border border-white/8 bg-card/40 p-3 transition hover:border-[#ff3d8b]/40"
              >
                <div className="flex flex-col items-center">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 font-mono text-[10px] font-bold text-muted-foreground">
                    {i + 1}
                  </span>
                  {i < symptoms.length - 1 && (
                    <span className="mt-1 h-4 w-px bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                </div>
                <div className="flex-1">
                  {/*  <div className={`text-[10px] font-semibold uppercase tracking-widest ${s.color}`}>
                    {s.week}
                  </div> */}
                  <div className="mt-0.5 font-sans text-sm font-medium text-foreground">
                    {s.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 13.0 }}
            className="mt-4 flex items-center gap-2 rounded-lg border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-3 py-2 text-xs text-[#7decff]"
          >
            <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            <span>
              <span className="font-semibold">Resultado:</span> trabajo fragmentado, sin coherencia y con baja calidad
            </span>
          </motion.div>
        </div>

        {/* Right: chaotic WhatsApp mock */}
        <div className="order-1 lg:order-1">

          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-4 flex items-center gap-2 font-sans text-lg font-semibold text-foreground"
          >
            <AlertTriangle className="h-5 w-5 text-neon-magenta" />
            El “Típico Proyecto" en grupo
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b141a] shadow-2xl"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-[#202c33] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#ff3d8b] to-[#a855f7] text-sm font-bold text-white">
                  GF1
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Grupo Física I 💀
                  </div>
                  <div className="text-[11px] text-[#8696a0]">
                    4 integrantes · en línea
                  </div>
                </div>
              </div>
              <MessageCircle className="h-5 w-5 text-[#8696a0]" />
            </div>

            {/* Chat body */}
            <div className="space-y-2 bg-[#0b141a] p-4" style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}>
              {chaoticMessages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8, x: m.self ? 12 : -12 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: m.delay + 1.5 }}
                  className={`flex ${m.self ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.self
                      ? "rounded-tr-none bg-[#005c4b] text-[#e9edef]"
                      : "rounded-tl-none bg-[#202c33] text-[#e9edef]"
                      }`}
                  >
                    {!m.self && (
                      <div className="mb-0.5 text-[11px] font-semibold text-[#ff3d8b]">
                        {m.from}
                      </div>
                    )}
                    {m.text}
                    <div className="mt-1 text-right text-[10px] text-[#8696a0]">
                      {m.time}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.0 }}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-[#ff3d8b]/30 bg-[#ff3d8b]/5 py-2 text-xs text-[#ff7eaf]"
              >
                🤖 La entrega es para mañana y el informe aun no tiene coherencia
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="mt-6">
        <TeacherNote color="magenta">
          Suena familiar. La rúbrica de este curso castiga esto. Para ganar el
          100%, el trabajo no puede ser la suma de partes aisladas. Tiene que
          ser un esfuerzo coordinado. ¿Cómo se logra? Con nuestra brújula: la{" "}
          <span className="font-semibold text-foreground">Bitácora</span>.
        </TeacherNote>
      </div> */}
    </SlideShell>
  );
}
