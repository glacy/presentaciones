"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Scale,
  Globe,
  BookOpenText,
  Sparkles,
} from "lucide-react";
import { SLIDE_TOTAL } from "../data/slidesMeta";

const repos = [
  { name: "glacy/presentaciones", url: "https://github.com/glacy/presentaciones", tag: "Presentaciones web" },
  { name: "glacy/fg1-astro", url: "https://github.com/glacy/fg1-astro", tag: "Curso con Astro" },
  { name: "glacy/myst-course-starter", url: "https://github.com/glacy/myst-course-starter", tag: "Starter MyST" },
  { name: "glacy/MMFI1", url: "https://github.com/glacy/MMFI1", tag: "Interactivo · Next" },
];

const resources = [
  { icon: Scale, name: "Creative Commons", url: "https://creativecommons.org/share-your-work/", desc: "Elige tu licencia en minutos" },
  { icon: Globe, name: "REA · UNESCO", url: "https://www.unesco.org/es/open-solutions", desc: "Recursos educativos abiertos" },
  { icon: BookOpenText, name: "Guía de Markdown", url: "https://www.markdownguide.org/", desc: "Aprende lo básico en 10 minutos" },
  { icon: Sparkles, name: "GitHub", url: "https://github.com/", desc: "Tu cuenta gratis para empezar" },
];

export function EpilogueSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 glow-mint opacity-40" aria-hidden />
      <div className="absolute -left-16 bottom-8 h-64 w-64 glow-cyan opacity-30" aria-hidden />
      <div className="absolute -right-16 top-8 h-64 w-64 glow-magenta opacity-25" aria-hidden />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-8 scroll-neon">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center font-sans text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          <span className="text-foreground">Empieza </span>
          <span className="bg-gradient-to-r from-[#00e5ff] via-[#4ade80] to-[#ff8c42] bg-clip-text text-transparent">
            esta semana
          </span>
        </motion.h2>

        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Los repos de la charla
            </motion.div>
            <div className="space-y-2">
              {repos.map((r, i) => (
                <motion.a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-card/40 px-3.5 py-2.5 transition hover:border-[#00e5ff]/40 hover:bg-card/70"
                >
                  <div className="min-w-0">
                    <div className="truncate font-mono text-xs text-foreground sm:text-sm">
                      {r.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground">{r.tag}</div>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-neon-cyan" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Para seguir
            </motion.div>
            <div className="space-y-2">
              {resources.map((r, i) => (
                <motion.a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12 }}
                  className="group flex items-center gap-3 rounded-lg border border-white/10 bg-card/40 px-3.5 py-2.5 transition hover:border-[#4ade80]/40 hover:bg-card/70"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-neon-mint">
                    <r.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-foreground sm:text-sm">
                      {r.name}
                    </div>
                    <div className="truncate text-[10px] text-muted-foreground">
                      {r.desc}
                    </div>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-neon-mint" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60"
        >
          Construir para compartir · gracias
        </motion.p>
      </div>
    </div>
  );
}
