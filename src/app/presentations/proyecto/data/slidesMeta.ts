import {
  Map,
  Target,
  Ghost,
  Link2,
  ScanFace,
  Puzzle,
  CalendarClock,
  CloudLightning,
  ClipboardCheck,
  Workflow,
  Flag,
} from "lucide-react";
import type { SlideMeta } from "../../shared/types";

export const slidesMeta: SlideMeta[] = [
  {
    index: 1,
    id: "cover",
    shortLabel: "Portada",
    title: "La Bitacora del Trabajo Individual y en Equipo",
    chapter: "Portada",
    accent: "cyan",
    icon: Map,
  },
  {
    index: 2,
    id: "context",
    shortLabel: "Contexto",
    title: "¿Para que sirve la Bitácora?",
    chapter: "Introducción",
    accent: "cyan",
    icon: Target,
  },
  {
    index: 3,
    id: "villain",
    shortLabel: "El problema",
    title: "El Villano de la Historia",
    chapter: "El Problema",
    accent: "magenta",
    icon: Ghost,
  },
  {
    index: 4,
    id: "structure",
    shortLabel: "Estructura integrada",
    title: "La Bitácora: Un sistema articulado",
    chapter: "Sistema integrado",
    accent: "cyan",
    icon: Link2,
  },
  {
    index: 5,
    id: "diagnosis",
    shortLabel: "Diagnóstico · T1",
    title: "Mirarse al espejo sin filtro",
    chapter: "Tabla 1",
    accent: "mint",
    icon: ScanFace,
  },
  {
    index: 6,
    id: "treaty",
    shortLabel: "Tratado de paz · T2-T3",
    title: "Armando el rompecabezas",
    chapter: "Tablas 2 y 3",
    accent: "cyan",
    icon: Puzzle,
  },
  {
    index: 7,
    id: "timeline",
    shortLabel: "Cronograma · T4",
    title: "El Cronograma no es un deseo, es un contrato",
    chapter: "Tabla 4",
    accent: "amber",
    icon: CalendarClock,
  },
  {
    index: 8,
    id: "storm",
    shortLabel: "La Tormenta · T5",
    title: "La realidad siempre gana a la teoría",
    chapter: "Tabla 5 · CRÍTICA",
    accent: "orange",
    icon: CloudLightning,
  },
  {
    index: 9,
    id: "mirror",
    shortLabel: "Espejo final · T6",
    title: "La evaluación que no es por cumplir",
    chapter: "Tabla 6",
    accent: "violet",
    icon: ClipboardCheck,
  },
  {
    index: 10,
    id: "thread",
    shortLabel: "El hilo invisible",
    title: "La Trazabilidad: el secreto de los 100 puntos",
    chapter: "Resumen visual",
    accent: "cyan",
    icon: Workflow,
  },
  {
    index: 11,
    id: "epilogue",
    shortLabel: "Epílogo",
    title: "La bitácora no es puro papeleo",
    chapter: "Epílogo",
    accent: "mint",
    icon: Flag,
  },
];

export function getSlideMetaById(id: string): SlideMeta {
  const meta = slidesMeta.find((m) => m.id === id);
  if (!meta) {
    throw new Error(`Slide with id "${id}" not found`);
  }
  return meta;
}
