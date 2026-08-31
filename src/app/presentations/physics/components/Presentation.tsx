"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  X,
  Play,
  Keyboard,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { physicsSlidesMeta } from "../data/physicsSlidesMeta";
import { PhysicsSlide01Cover } from "../slides/PhysicsSlide01Cover";
import { PhysicsSlide02Units } from "../slides/PhysicsSlide02Units";
import { PhysicsSlide03ScalarsVectors } from "../slides/PhysicsSlide03ScalarsVectors";
import { PhysicsSlide04ReferenceSystems } from "../slides/PhysicsSlide04ReferenceSystems";
import { PhysicsSlide05VectorOperations } from "../slides/PhysicsSlide05VectorOperations";
import { PhysicsSlide06CardinalDirections } from "../slides/PhysicsSlide06CardinalDirections";
import { PhysicsSlide07DotProduct } from "../slides/PhysicsSlide07DotProduct";
import { PhysicsSlide08CrossProduct } from "../slides/PhysicsSlide08CrossProduct";
import { PhysicsSlide09Summary } from "../slides/PhysicsSlide09Summary";
import { PhysicsSlide10Conclusion } from "../slides/PhysicsSlide10Conclusion";

const slideComponents = [
  PhysicsSlide01Cover,
  PhysicsSlide02Units,
  PhysicsSlide03ScalarsVectors,
  PhysicsSlide04ReferenceSystems,
  PhysicsSlide05VectorOperations,
  PhysicsSlide06CardinalDirections,
  PhysicsSlide07DotProduct,
  PhysicsSlide08CrossProduct,
  PhysicsSlide09Summary,
  PhysicsSlide10Conclusion,
];

type Direction = 1 | -1;

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [overview, setOverview] = useState(false);

  const total = physicsSlidesMeta.length;
  const meta = physicsSlidesMeta[index];
  const Current = slideComponents[index];

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDirection(clamped > index ? 1 : -1);
      setIndex(clamped);
      setOverview(false);
    },
    [index, total],
  );

  const next = useCallback(() => {
    if (index < total - 1) {
      setDirection(1);
      setIndex((i) => i + 1);
    }
  }, [index, total]);

  const prev = useCallback(() => {
    if (index > 0) {
      setDirection(-1);
      setIndex((i) => i - 1);
    }
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        setDirection(-1);
        setIndex(0);
      } else if (e.key === "End") {
        setDirection(1);
        setIndex(total - 1);
      } else if (e.key === "Escape") {
        setOverview(false);
      } else if (e.key.toLowerCase() === "g") {
        setOverview((v) => !v);
      } else if (e.key.toLowerCase() === "h") {
        window.location.href = "/";
      } else if (/^[1-9]$/.test(e.key)) {
        const n = parseInt(e.key, 10) - 1;
        if (n < total) go(n);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, total]);

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-background text-foreground">
      {/* Top progress bar */}
      <div className="absolute left-0 top-0 z-30 h-1 w-full bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00e5ff] via-[#4ade80] to-[#ff8c42]"
          initial={false}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Slide viewport */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: direction * -40, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Current />
          </motion.div>
        </AnimatePresence>

        {/* Click zones for prev/next on desktop */}
        <button
          aria-label="Diapositiva anterior"
          onClick={prev}
          disabled={index === 0}
          className="absolute left-0 top-0 hidden h-full w-[12%] cursor-w-resize bg-transparent disabled:cursor-default lg:block"
        />
        <button
          aria-label="Diapositiva siguiente"
          onClick={next}
          disabled={index === total - 1}
          className="absolute right-0 top-0 hidden h-full w-[12%] cursor-e-resize bg-transparent disabled:cursor-default lg:block"
        />
      </div>

      {/* Bottom control bar */}
      <div className="relative z-20 border-t border-white/5 bg-background/80 px-3 py-2.5 backdrop-blur-md sm:px-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className="group inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-[#00e5ff]/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30 sm:px-3 sm:py-2 sm:text-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Slide pills */}
          <div className="flex flex-1 items-center justify-center gap-1.5 overflow-x-auto px-1 sm:gap-2">
            {physicsSlidesMeta.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.index}
                  onClick={() => go(i)}
                  aria-label={`Ir a la diapositiva ${s.index}: ${s.title}`}
                  title={`${s.index}. ${s.title}`}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs transition sm:px-3",
                    active
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px]",
                      active && s.accent === "cyan" && "text-neon-cyan",
                      active && s.accent === "mint" && "text-neon-mint",
                      active && s.accent === "orange" && "text-neon-orange",
                      active && s.accent === "magenta" && "text-neon-magenta",
                      active && s.accent === "violet" && "text-[#c084fc]",
                      active && s.accent === "amber" && "text-[#fbbf24]",
                      !active && "opacity-60",
                    )}
                  >
                    {String(s.index).padStart(2, "0")}
                  </span>
                  <span className="hidden md:inline">{s.shortLabel}</span>
                  {active && (
                    <motion.span
                      layoutId="slide-underline"
                      className="absolute -bottom-[1px] left-2 right-2 h-0.5 rounded-full bg-current"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={next}
            disabled={index === total - 1}
            className="group inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-[#00e5ff]/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-30 sm:px-3 sm:py-2 sm:text-sm"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => setOverview(true)}
            aria-label="Ver todas las diapositivas"
            title="Vista general (G)"
            className="flex  items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:border-[#00e5ff]/40 hover:text-foreground sm:inline-flex"
          >
            <Grid2x2 className="h-4 w-4" />
          </button>

          <button
            onClick={() => window.location.href = "/"}
            aria-label="Ir al lanzador de presentaciones (H)"
            title="Lanzador (H)"
            className="ml-1 flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:border-[#00e5ff]/40 hover:text-foreground sm:inline-flex"
          >
            <Home className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Overview modal */}
      <AnimatePresence>
        {overview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <Grid2x2 className="h-5 w-5 text-[#00e5ff]" />
                <h3 className="font-sans text-base font-semibold">
                  Mapa de la presentación
                </h3>
                <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                  · {total} diapositivas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-muted-foreground sm:flex">
                  <Keyboard className="h-3.5 w-3.5" />
                  <span>← → para navegar</span>
                </div>
                <button
                  onClick={() => setOverview(false)}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                  Cerrar
                </button>
              </div>
            </div>
            <div className="scroll-neon flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {physicsSlidesMeta.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.button
                      key={s.index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => go(i)}
                      className={cn(
                        "group relative overflow-hidden rounded-xl border bg-card/40 p-4 text-left transition hover:bg-card/70",
                        i === index
                          ? "border-[#00e5ff]/50"
                          : "border-white/10 hover:border-white/25",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          {Icon && (
                            <span
                              className={cn(
                                "grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5",
                                s.accent === "cyan" && "text-neon-cyan",
                                s.accent === "mint" && "text-neon-mint",
                                s.accent === "orange" && "text-neon-orange",
                                s.accent === "magenta" && "text-neon-magenta",
                                s.accent === "violet" && "text-[#c084fc]",
                                s.accent === "amber" && "text-[#fbbf24]",
                              )}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                          )}
                          <span className="font-mono text-xs text-muted-foreground">
                            {String(s.index).padStart(2, "0")}
                          </span>
                        </div>
                        <Play className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                      </div>
                      <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {s.chapter}
                      </div>
                      <div className="mt-1 font-sans text-sm font-semibold leading-snug text-foreground">
                        {s.title}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
