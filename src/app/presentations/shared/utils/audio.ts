"use client";

import { SlideMeta } from "../types";

export function getAudioPath(presentation: string, slideMeta: SlideMeta): string {
  const baseAudioPath = `/audio/${presentation}/`;
  
  if (slideMeta.audioPath) {
    return slideMeta.audioPath;
  }
  
  if (slideMeta.id) {
    return `${baseAudioPath}${slideMeta.id}.wav`;
  }
  
  return `${baseAudioPath}slide-${String(slideMeta.index).padStart(2, "0")}.wav`;
}

export function hasAudio(presentation: string, slideMeta: SlideMeta): boolean {
  return !!slideMeta.audioPath || !!slideMeta.audioDuration;
}

export function getAudioDuration(slideMeta: SlideMeta): number | undefined {
  return slideMeta.audioDuration;
}