"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  audioPath: string;
  autoPlay?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: () => void;
  className?: string;
}

export function AudioPlayer({
  audioPath,
  autoPlay = false,
  onPlay,
  onPause,
  onEnded,
  onError,
  className,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(5);

  const togglePlay = () => {
    if (!audioRef.current || !isLoaded) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
  };

  const handleVolumeChange = (newVolume: number) => {
    if (!audioRef.current) return;

    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay?.();
  };

  const handlePause = () => {
    setIsPlaying(false);
    onPause?.();
  };

  const handleEnded = () => {
    setIsPlaying(false);
    onEnded?.();
  };

  const handleError = () => {
    const audio = audioRef.current;
    console.error("Audio loading error:", {
      path: audioPath,
      error: audio?.error?.message,
      networkState: audio?.networkState,
      readyState: audio?.readyState
    });
    setHasError(true);
    setIsLoaded(false);
    onError?.();
  };

  const handleCanPlay = () => {
    console.log("Audio can play:", audioPath);
    setHasError(false);
    setIsLoaded(true);
    if (autoPlay && audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Auto-play blocked:", err);
        setHasError(true);
      });
    }
  };

  const handleLoadStart = () => {
    console.log("Audio loading started:", audioPath);
    setHasError(false);
    setIsLoaded(false);
  };

  const handleLoadedData = () => {
    console.log("Audio data loaded:", audioPath);
    setIsLoaded(true);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio?.duration && Number.isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    return () => {
      audio.pause();
    };
  }, [audioPath]);

  if (hasError) {
    return (
      <div className={cn("flex items-center gap-2 text-xs text-muted-foreground", className)}>
        <AlertCircle className="h-4 w-4" />
        <span>Audio no disponible</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <audio
        ref={audioRef}
        src={audioPath}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onError={handleError}
        onCanPlay={handleCanPlay}
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />
      
      <button
        onClick={togglePlay}
        disabled={!isLoaded}
        className={cn(
          "flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",
          isPlaying && "bg-neon-cyan/10 border-neon-cyan/30"
        )}
        aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4 ml-0.5" />
        )}
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={isMuted ? 0 : volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          className="h-1 w-16 cursor-pointer appearance-none rounded-full bg-white/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neon-cyan [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-neon-cyan"
          aria-label="Control de volumen"
        />
      </div>

      <div className="hidden h-1 flex-1 rounded-full bg-white/10 md:block">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300",
            isPlaying ? "bg-neon-cyan" : "bg-white/30"
          )}
          style={{
            width: isPlaying ? "100%" : "0%",
            transition: isPlaying ? `width ${duration}s linear` : "width 0.3s ease-out"
          }}
        />
      </div>
    </div>
  );
}