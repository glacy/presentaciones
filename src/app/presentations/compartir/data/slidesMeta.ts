import {
  Share2,
  FolderSearch,
  Unlock,
  Parasol,
  Shapes,
  LayoutGrid,
  Gpu,
  TrendingUp,
  RefreshCw,
  Gift,
  Link2,
  PackageOpen,
} from "lucide-react";
import type { SlideMeta } from "../../shared/types";

export const SLIDE_TOTAL = 11;

export const slidesMeta: SlideMeta[] = [
  {
    index: 1,
    id: "cover",
    shortLabel: "Portada",
    title: "Construir para compartir",
    chapter: "Portada",
    accent: "cyan",
    icon: Share2,
  },
  {
    index: 2,
    id: "where",
    shortLabel: "¿Dónde viven?",
    title: "¿Dónde viven tus materiales?",
    chapter: "Apertura",
    accent: "magenta",
    icon: FolderSearch,
  },
  {
    index: 3,
    id: "open",
    shortLabel: "Abierta",
    title: "Abierta: la licencia lo cambia todo",
    chapter: "Tres palabras clave",
    accent: "mint",
    icon: Unlock,
  },
  {
    index: 4,
    id: "reproducible",
    shortLabel: "Reproducible",
    title: "Reproducible: la receta pública",
    chapter: "Tres palabras clave",
    accent: "amber",
    icon: RefreshCw,
  },
  {
    index: 5,
    id: "inclusive",
    shortLabel: "Inclusiva",
    title: "Inclusiva: una fuente, muchos formatos",
    chapter: "Tres palabras clave",
    accent: "violet",
    icon: Parasol,
  },
  {
    index: 6,
    id: "mold",
    shortLabel: "Contenido y molde",
    title: "Separa el contenido del molde",
    chapter: "La idea que lo cambia todo",
    accent: "cyan",
    icon: Shapes,
  },
  {
    index: 7,
    id: "demo",
    shortLabel: "Demo",
    title: "Así se ve en la práctica",
    chapter: "Demostración",
    accent: "cyan",
    icon: LayoutGrid,
  },
  {
    index: 8,
    id: "engine-flow",
    shortLabel: "CI/CD",
    title: "Tú escribes, la máquina publica",
    chapter: "Bajo la cortina",
    accent: "amber",
    icon: Gpu,
  },
  {
    index: 9,
    id: "ladder",
    shortLabel: "La escalera",
    title: "Caminos de adopción: la escalera",
    chapter: "Adopción",
    accent: "orange",
    icon: TrendingUp,
  },
  {
    index: 10,
    id: "lifecycle",
    shortLabel: "Ciclo de vida",
    title: "El ciclo de vida del material abierto",
    chapter: "Cierre",
    accent: "violet",
    icon: RefreshCw,
  },
  {
    index: 11,
    id: "epilogue",
    shortLabel: "Enlaces",
    title: "Empieza hoy: enlaces y recursos",
    chapter: "Epílogo",
    accent: "mint",
    icon: Link2,
  },
];

export function getSlideMetaById(id: string): SlideMeta {
  const meta = slidesMeta.find((m) => m.id === id);
  if (!meta) {
    throw new Error(`Slide with id "${id}" not found`);
  }
  return meta;
}
