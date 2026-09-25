"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitCommitHorizontal, FolderGit2, BookOpen, Scale } from "lucide-react";
import githubProfile from "../assets/github-profile.svg";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("github-profile");

const stats = [
  { icon: GitCommitHorizontal, value: "1067", label: "commits públicos" },
  { icon: FolderGit2, value: "30", label: "repositorios abiertos" },
  { icon: Scale, value: "MIT", label: "licencia preferida" },
  { icon: BookOpen, value: "1", label: "documento con el que empecé" },
];

export function GithubProfileSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-4 text-sm text-muted-foreground"
      >
        Compartir no es una promesa: es una{" "}
        <span className="font-semibold text-foreground">página pública</span> que
        cualquiera puede visitar. Este es mi perfil en GitHub, en vivo — y no
        empecé así: empecé compartiendo un solo documento. La constancia hizo
        el resto.
      </motion.p>

      <motion.a
        href="https://github.com/glacy"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        whileHover={{ scale: 1.01 }}
        className="group relative block overflow-hidden rounded-xl border border-[#00e5ff]/30 bg-card/60 shadow-[0_0_40px_-12px_rgba(0,229,255,0.35)]"
      >
        <Image
          src={githubProfile}
          alt="Perfil público de GitHub de glacy (Gerardo Lacy Mora) con estadísticas de actividad y repositorios fijados"
          unoptimized
          className="h-auto width-auto max-w-full"
          priority
        />
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-background/80 px-2.5 py-1 text-xs font-medium text-[#7decff] backdrop-blur-sm">
          github.com/glacy
          <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </motion.a>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.15 }}
            className="rounded-xl border border-white/10 bg-card/40 p-3 text-center"
          >
            <s.icon className="mx-auto h-4 w-4 text-[#7decff]" />
            <div className="mt-1.5 font-mono text-xl font-bold text-foreground">
              {s.value}
            </div>
            <div className="text-[11px] leading-tight text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
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
          Cada repositorio que viste en la diapositiva anterior vive aquí, visible
          para estudiantes, colegas y para tu futuro yo.
        </span>
      </motion.div>
    </SlideShell>
  );
}
