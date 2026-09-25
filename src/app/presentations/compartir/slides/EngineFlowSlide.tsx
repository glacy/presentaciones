"use client";

import { motion } from "framer-motion";
import {
  FileText,
  UploadCloud,
  Settings,
  Rocket,
  Globe,
  ArrowRight,
  Zap,
} from "lucide-react";
import { getSlideMetaById, SLIDE_TOTAL } from "../data/slidesMeta";
import { SlideShell } from "../../shared/ui/SlideShell";

const meta = getSlideMetaById("engine-flow");

const steps = [
  {
    icon: FileText,
    title: "Escribes",
    desc: "Editas tu .md — texto simple",
    color: "cyan",
  },
  {
    icon: UploadCloud,
    title: "Guardas",
    desc: "Una versión registrada",
    color: "mint",
  },
  {
    icon: Settings,
    title: "Construye",
    desc: "Las máquinas hacen lo suyo",
    color: "amber",
  },
  {
    icon: Rocket,
    title: "Publica",
    desc: "Material en la web",
    color: "orange",
  },
  {
    icon: Globe,
    title: "Compartes",
    desc: "URL pública",
    color: "violet",
  },
];

const stepColorMap: Record<string, string> = {
  cyan: "border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#7decff]",
  mint: "border-[#4ade80]/30 bg-[#4ade80]/5 text-[#8af0a8]",
  amber: "border-[#fbbf24]/30 bg-[#fbbf24]/5 text-[#fcd363]",
  orange: "border-[#ff8c42]/30 bg-[#ff8c42]/5 text-[#ffb07d]",
  violet: "border-[#a855f7]/30 bg-[#a855f7]/5 text-[#c89ef7]",
};

export function EngineFlowSlide() {
  return (
    <SlideShell meta={meta} total={SLIDE_TOTAL}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-[#fbbf24]/30 bg-[#fbbf24]/5 px-4 py-3"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#fbbf24]/15 text-[#fcd363]">
          <Zap className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground sm:text-base">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#fcd363]">
            El flujo automático
          </span>
          <br />
          Tú escribes, la máquina publica.
        </p>
      </motion.div>

      <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-start">
        {steps.map((s, i) => {
          const SI = s.icon;
          return (
            <div key={s.title} className="flex flex-1 items-center gap-2 lg:flex-col lg:gap-2">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.28 }}
                className={`w-full rounded-xl border p-3.5 text-left lg:text-center ${stepColorMap[s.color]}`}
              >
                <div className="flex items-center gap-3 lg:flex-col lg:gap-2">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border bg-white/5 ${stepColorMap[s.color]}`}>
                    <SI className="h-5 w-5" />
                  </span>
                  <div className="lg:mt-1">
                    <div className="font-sans text-sm font-bold text-foreground">
                      {i + 1}. {s.title}
                    </div>
                    <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
                      {s.desc}
                    </div>
                  </div>
                </div>
              </motion.div>


            </div>
          );
        })}
      </div>


    </SlideShell>
  );
}
