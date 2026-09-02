import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AutoPlayToggleProps {
  autoPlay: boolean;
  onToggle: () => void;
  className?: string;
}

export function AutoPlayToggle({ autoPlay, onToggle, className }: AutoPlayToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs transition sm:px-3",
        autoPlay 
          ? "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan" 
          : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground",
        className
      )}
      title={autoPlay ? "Desactivar reproducción automática" : "Activar reproducción automática"}
    >
      <Play className="h-3.5 w-3.5" />
      <span className="hidden md:inline">Auto</span>
    </button>
  );
}