"use client";

import { useEffect, useRef, useState } from "react";

interface AudioManagerState {
  isPlaying: boolean;
  currentSlide: number;
  volume: number;
}

interface AudioManagerCallbacks {
  onSlideChange?: (newSlide: number) => void;
  onAudioEnded?: () => void;
}

export function useAudioManager(
  totalSlides: number,
  callbacks: AudioManagerCallbacks = {}
) {
  const [state, setState] = useState<AudioManagerState>({
    isPlaying: false,
    currentSlide: 0,
    volume: 0.8,
  });

  const audioElementsRef = useRef<Map<number, HTMLAudioElement>>(new Map());
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const playSlideAudio = (slideIndex: number) => {
    const audio = audioElementsRef.current.get(slideIndex);
    if (!audio) return;

    const previousAudio = currentAudioRef.current;
    if (previousAudio && previousAudio !== audio) {
      previousAudio.pause();
      previousAudio.currentTime = 0;
    }

    currentAudioRef.current = audio;
    
    audio.play().catch(err => {
      console.log(`Audio playback failed for slide ${slideIndex}:`, err);
    });

    setState(prev => ({ ...prev, isPlaying: true, currentSlide: slideIndex }));
  };

  const pauseCurrentAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  const resumeCurrentAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.play().catch(err => {
        console.log("Audio resume failed:", err);
      });
      setState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const toggleAudio = () => {
    if (state.isPlaying) {
      pauseCurrentAudio();
    } else {
      resumeCurrentAudio();
    }
  };

  const stopAllAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    currentAudioRef.current = null;
    setState(prev => ({ ...prev, isPlaying: false }));
  };

  const setVolume = (newVolume: number) => {
    setState(prev => ({ ...prev, volume: newVolume }));
    
    audioElementsRef.current.forEach(audio => {
      audio.volume = newVolume;
    });
  };

  const changeSlide = (newSlide: number, autoPlay = true) => {
    if (newSlide < 0 || newSlide >= totalSlides) return;
    
    stopAllAudio();
    setState(prev => ({ ...prev, currentSlide: newSlide }));
    callbacks.onSlideChange?.(newSlide);

    if (autoPlay) {
      playSlideAudio(newSlide);
    }
  };

  const nextSlide = (autoPlay = true) => {
    const next = (state.currentSlide + 1) % totalSlides;
    changeSlide(next, autoPlay);
  };

  const prevSlide = (autoPlay = true) => {
    const prev = (state.currentSlide - 1 + totalSlides) % totalSlides;
    changeSlide(prev, autoPlay);
  };

  const goToSlide = (slideIndex: number, autoPlay = true) => {
    changeSlide(slideIndex, autoPlay);
  };

  const registerAudioElement = (slideIndex: number, audio: HTMLAudioElement) => {
    audioElementsRef.current.set(slideIndex, audio);
    audio.volume = state.volume;
  };

  const unregisterAudioElement = (slideIndex: number) => {
    const audio = audioElementsRef.current.get(slideIndex);
    if (audio) {
      audio.pause();
      audio.src = "";
    }
    audioElementsRef.current.delete(slideIndex);
    
    if (currentAudioRef.current === audio) {
      currentAudioRef.current = null;
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  useEffect(() => {
    return () => {
      stopAllAudio();
      audioElementsRef.current.clear();
    };
  }, []);

  return {
    state,
    playSlideAudio,
    pauseCurrentAudio,
    resumeCurrentAudio,
    toggleAudio,
    stopAllAudio,
    setVolume,
    changeSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    registerAudioElement,
    unregisterAudioElement,
  };
}