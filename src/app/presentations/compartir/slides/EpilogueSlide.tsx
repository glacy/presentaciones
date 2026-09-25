"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Mail } from "lucide-react";
import avatar from "../assets/avatar.png";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

const DEPLOYED_URL =
  "https://presentaciones-nine-delta.vercel.app/presentations/compartir";

const contacts = [
  {
    icon: Mail,
    label: "Correo",
    value: "glacy@itcr.ac.cr",
    href: "mailto:glacy@itcr.ac.cr",
    chip: "border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#7decff]",
    hover: "hover:border-[#00e5ff]/40",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/glacy",
    href: "https://github.com/glacy",
    chip: "border-white/15 bg-white/5 text-foreground",
    hover: "hover:border-white/30",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/gerardo-lacy-mora-7456b3316",
    href: "https://www.linkedin.com/in/gerardo-lacy-mora-7456b3316/",
    chip: "border-[#60a5fa]/30 bg-[#60a5fa]/5 text-[#93c5fd]",
    hover: "hover:border-[#60a5fa]/50",
  },
];

export function EpilogueSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 glow-mint opacity-40" aria-hidden />
      <div className="absolute -left-16 bottom-8 h-64 w-64 glow-cyan opacity-30" aria-hidden />
      <div className="absolute -right-16 top-8 h-64 w-64 glow-magenta opacity-25" aria-hidden />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-7 overflow-y-auto px-6 py-8 scroll-neon">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#00e5ff] via-[#4ade80] to-[#ff8c42] p-[3px] shadow-[0_0_50px_-12px_rgba(0,229,255,0.45)]"
        >
          <Image
            src={avatar}
            alt="Avatar de Gerardo Lacy Mora"
            unoptimized
            priority
            className="h-40 w-40 rounded-[calc(1.5rem-3px)] object-cover sm:h-48 sm:w-48"
          />
        </motion.div>

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sans text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Gerardo Lacy Mora
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs"
          >
            Escuela de Física · Tecnológico de Costa Rica
          </motion.p>
        </div>

        <div className="w-full max-w-md space-y-2.5">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className={`group flex items-center gap-3.5 rounded-xl border border-white/10 bg-card/40 px-4 py-3 backdrop-blur-sm transition ${c.hover} hover:bg-card/70`}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${c.chip}`}>
                <c.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-sans text-sm font-semibold text-foreground">
                  {c.label}
                </span>
                <span className="block truncate font-mono text-xs text-muted-foreground">
                  {c.value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={DEPLOYED_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          whileHover={{ scale: 1.01 }}
          className="flex w-full max-w-md items-center gap-4 rounded-xl border border-[#00e5ff]/40 bg-[#00e5ff]/5 p-3.5 shadow-[0_0_30px_-10px_rgba(0,229,255,0.4)]"
        >
          <span className="grid h-[88px] w-[88px] shrink-0 place-items-center rounded-lg bg-white p-2">
            <QRCodeSVG
              value={DEPLOYED_URL}
              size={72}
              bgColor="#ffffff"
              fgColor="#0a0f16"
              level="M"
              aria-hidden
            />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-sans text-sm font-semibold leading-snug text-foreground sm:text-base">
              Llévatela contigo
            </span>
            <span className="mt-1 block text-xs leading-snug break-words text-muted-foreground">
              La presentación completa, en tu teléfono — para revisitarla,
              adaptarla y compartirla.
            </span>
          </span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          · gracias ·
        </motion.p>
      </div>
    </div>
  );
}
