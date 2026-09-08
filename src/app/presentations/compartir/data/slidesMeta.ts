import {
  Share2,
  FolderSearch,
  Scale,
  ChefHat,
  Accessibility,
  Shapes,
  LayoutGrid,
  GitBranch,
  Zap,
  TrendingUp,
  RefreshCw,
  Gift,
  Link2,
} from "lucide-react";
import type { SlideMeta } from "../../shared/types";

export const SLIDE_TOTAL = 13;

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
    icon: Scale,
  },
  {
    index: 4,
    id: "reproducible",
    shortLabel: "Reproducible",
    title: "Reproducible: la receta pública",
    chapter: "Tres palabras clave",
    accent: "amber",
    icon: ChefHat,
  },
  {
    index: 5,
    id: "inclusive",
    shortLabel: "Inclusiva",
    title: "Inclusiva: una fuente, muchos formatos",
    chapter: "Tres palabras clave",
    accent: "violet",
    icon: Accessibility,
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
    id: "engine-github",
    shortLabel: "GitHub",
    title: "La casa del material: GitHub",
    chapter: "Bajo la cortina",
    accent: "mint",
    icon: GitBranch,
  },
  {
    index: 9,
    id: "engine-flow",
    shortLabel: "CI/CD · Vercel",
    title: "Tú escribes, la máquina publica",
    chapter: "Bajo la cortina",
    accent: "amber",
    icon: Zap,
  },
  {
    index: 10,
    id: "ladder",
    shortLabel: "La escalera",
    title: "Caminos de adopción: la escalera",
    chapter: "Adopción",
    accent: "orange",
    icon: TrendingUp,
  },
  {
    index: 11,
    id: "lifecycle",
    shortLabel: "Ciclo de vida",
    title: "El ciclo de vida del material abierto",
    chapter: "Cierre",
    accent: "violet",
    icon: RefreshCw,
  },
  {
    index: 12,
    id: "messages",
    shortLabel: "Tres mensajes",
    title: "Tres mensajes para llevar",
    chapter: "Cierre",
    accent: "cyan",
    icon: Gift,
  },
  {
    index: 13,
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
