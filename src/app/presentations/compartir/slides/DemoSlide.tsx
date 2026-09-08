"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Rocket, Atom, FlaskConical, Blocks } from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("demo");

const repos = [
  {
    icon: Rocket,
    name: "presentaciones",
    url: "https://github.com/glacy/presentaciones",
    demo: "Presentaciones web desde texto",
    message: "“Esto puedes usarlo esta semana” — el punto de entrada más bajo",
    tags: ["Markdown", "Slides"],
    color: "cyan",
  },
  {
    icon: Atom,
    name: "fg1-astro",
    url: "https://github.com/glacy/fg1-astro",
    demo: "Sitio de curso ligero y rápido",
    message: "Un curso completo, navegable, en una URL",
    tags: ["Astro"],
    color: "mint",
  },
  {
    icon: FlaskConical,
    name: "myst-course-starter",
    url: "https://github.com/glacy/myst-course-starter",
    demo: "Reproducibilidad real: matemáticas y contenido ejecutable",
    message: "El material científico puede verificarse y ejecutarse",
    tags: ["MyST", "Jupyter"],
    color: "amber",
  },
  {
    icon: Blocks,
    name: "MMFI1",
    url: "https://github.com/glacy/MMFI1",
    demo: "Interactividad con React/Next",
    message: "El techo es alto cuando lo necesites — pero no es el punto de partida",
    tags: ["Next.js", "React"],
    color: "violet",
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-[#7decff] border-[#00e5ff]/30",
  mint: "text-[#8af0a8] border-[#4ade80]/30",
  amber: "text-[#fcd363] border-[#fbbf24]/30",
  violet: "text-[#c89ef7] border-[#a855f7]/30",
};

export function DemoSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-4 text-sm text-muted-foreground"
      >
        Cuatro repositorios reales, ordenados de{" "}
        <span className="font-semibold text-foreground">menor a mayor esfuerzo</span>.
        Todos parten de lo mismo: texto.
      </motion.p>

      <div className="grid gap-3 sm:grid-cols-2">
        {repos.map((r, i) => (
          <motion.a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.2 }}
            whileHover={{ scale: 1.01 }}
            className={`group rounded-xl border bg-card/40 p-4 transition hover:bg-card/70 ${colorMap[r.color]}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border bg-white/5 ${colorMap[r.color]}`}>
                  <r.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-foreground">
                    <Github className="h-3.5 w-3.5 opacity-70" />
                    glacy/{r.name}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-muted-foreground">
                    {r.demo}
                  </div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
            </div>

            <p className="mt-3 text-sm leading-snug text-foreground/90">
              {r.message}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-4 flex items-center gap-2 rounded-lg border border-[#00e5ff]/30 bg-[#00e5ff]/5 px-3 py-2 text-xs text-[#7decff]"
      >
        <span className="font-mono font-bold">→</span>
        <span>
          Los cuatro son públicos: puedes abrirlos ahora desde tu teléfono.
        </span>
      </motion.div>
    </SlideShell>
  );
}
