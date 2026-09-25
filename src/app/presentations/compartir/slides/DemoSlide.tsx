"use client";

import { motion } from "framer-motion";
import { ExternalLink, Rocket, Atom, Frame, FolderGit2, PackageOpen, Globe } from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("demo");

const repos = [
  {
    icon: Rocket,
    name: "presentaciones",
    repo: "https://github.com/glacy/presentaciones",
    url: "https://presentaciones-nine-delta.vercel.app/",
    demo: "Presentaciones web interactivas, responsivas",
    message: "Interactividad con React/Next",
    tags: ["Slides", "Next.js", "React"],
    color: "cyan",
  },
  {
    icon: Atom,
    name: "fg1-astro",
    repo: "https://github.com/glacy/fg1-astro",
    url: "https://fg1-astro.vercel.app/",
    demo: "Sitio de curso ligero y rápido",
    message: "Un curso completo, navegable, en una URL",
    tags: ["Astro", "Starlight"],
    color: "mint",
  },
  {
    icon: Frame,
    name: "syllabus-viewer",
    repo: "https://github.com/glacy/syllabus-viewer",
    url: "https://glacy.github.io/syllabus-viewer/",
    demo: "Herramienta para generar planeamientos didácticos",
    message: "",
    tags: ["React", "Herramienta"],
    color: "amber",
  },
  {
    icon: FolderGit2,
    name: "MMFI2",
    repo: "https://github.com/glacy/MMFI2",
    url: "https://glacy-mmfi2.curve.space/",
    demo: "Estructura un curso completo",
    message: "Una solución integral para crear cursos interactivos",
    tags: ["Myst", "Jupyter", "Curvenote"],
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
        Todos parten de lo mismo: texto — y pueden llegar hasta{" "}
        <span className="font-semibold text-foreground">experiencias interactivas</span>{" "}
        para el aula.
      </motion.p>

      <div className="grid gap-3 sm:grid-cols-2">
        {repos.map((r, i) => (
          <motion.div
            key={r.name}
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
                  <a
                    href={r.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-sm font-bold text-foreground transition hover:underline"
                  >
                    github/glacy/{r.name}
                  </a>
                  <div className="mt-0.5 text-xs font-medium text-muted-foreground">
                    {r.demo}
                  </div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
            </div>

            {r.message && (
              <p className="mt-3 text-sm leading-snug text-foreground/90">
                {r.message}
              </p>
            )}

            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              title={r.url}
              className="mt-3 flex max-w-full items-center gap-1.5 font-mono text-xs text-muted-foreground transition hover:text-foreground"
            >
              <Globe className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate underline decoration-white/20 underline-offset-2">
                {r.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </a>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


    </SlideShell>
  );
}
