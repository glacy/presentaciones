"use client";

import { SlideMeta } from "../types";

const AUDIO_EXT = process.env.NODE_ENV === "production" ? ".mp3" : ".wav";

export function getAudioPath(presentation: string, slideMeta: SlideMeta): string {
  const baseAudioPath = `/audio/${presentation}/`;
  
  if (slideMeta.audioPath) {
    return slideMeta.audioPath;
  }
  
  if (slideMeta.id) {
    return `${baseAudioPath}${slideMeta.id}${AUDIO_EXT}`;
  }
  
  return `${baseAudioPath}slide-${String(slideMeta.index).padStart(2, "0")}${AUDIO_EXT}`;
}

export function hasAudio(presentation: string, slideMeta: SlideMeta): boolean {
  return !!slideMeta.audioPath || !!slideMeta.audioDuration;
}

export function getAudioDuration(slideMeta: SlideMeta): number | undefined {
  return slideMeta.audioDuration;
}