"use client";

import { motion } from "framer-motion";
import { ArrowRight, Atom, Map, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { KeyboardEvent } from "react";

export default function PresentationLauncher() {
  const [openInNewWindow, setOpenInNewWindow] = useState(false);

  const presentations = [
    {
      title: "Vectores y Operaciones vectoriales",
      description: "Vectores, sistemas de coordenadas y operaciones vectoriales",
      path: "/presentations/physics",
      icon: Atom,
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan/30",
      bgColor: "bg-neon-cyan/10",
    },
    {
      title: "Bitácora de Trabajo en Equipo",
      description: "Cómo conquistar el trabajo en equipo sin morir en el intento - Storytelling visual",
      path: "/presentations/proyecto",
      icon: Map,
      color: "text-neon-magenta",
      borderColor: "border-neon-magenta/30",
      bgColor: "bg-neon-magenta/10",
    },
  ];

  const handleKeyDown = (e: KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (openInNewWindow) {
        window.open(path, '_blank', 'noopener noreferrer');
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Presentaciones Interactivas
          </h1>
          <p className="text-muted-foreground text-lg">
            Selecciona una presentación para comenzar
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          <motion.button
            onClick={() => setOpenInNewWindow(!openInNewWindow)}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className={`h-4 w-4 ${openInNewWindow ? "text-neon-cyan" : ""}`} />
            <span>Abrir en nueva ventana</span>
          </motion.button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {presentations.map((presentation, index) => (
            <div
              key={presentation.path}
              onKeyDown={(e) => handleKeyDown(e, presentation.path)}
              tabIndex={0}
              role="button"
              aria-label={`Abrir ${presentation.title}`}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={presentation.path} 
                  target={openInNewWindow ? "_blank" : "_self"} 
                  rel={openInNewWindow ? "noopener noreferrer" : undefined}
                  className="block focus-visible:outline-none"
                >
                  <div className={`group relative rounded-xl border ${presentation.borderColor} ${presentation.bgColor} p-6 transition hover:bg-card/60 hover:border-white/20 focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-background`}>
                    <div className="flex items-start gap-4">
                      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${presentation.color}`}>
                        <presentation.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${presentation.color} mb-2`}>
                          {presentation.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {presentation.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform">
                          Comenzar
                          <ArrowRight className="h-4 w-4" />
                          {openInNewWindow && <ExternalLink className="h-3 w-3 ml-1 opacity-60" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
