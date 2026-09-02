#!/usr/bin/env node

/**
 * Script para generar audios de prueba simples usando AudioContext
 * Crea tonos y patrones básicos para testing
 */

const fs = require('fs');
const path = require('path');

function generateSilence(duration) {
  const sampleRate = 44100;
  const numSamples = Math.floor(duration * sampleRate);
  const buffer = Buffer.alloc(numSamples * 2);
  return buffer;
}

function generateTone(frequency, duration, volume = 0.3) {
  const sampleRate = 44100;
  const numSamples = Math.floor(duration * sampleRate);
  const buffer = Buffer.alloc(numSamples * 2);
  
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = Math.sin(2 * Math.PI * frequency * t) * volume * 32767;
    buffer.writeInt16LE(Math.max(-32768, Math.min(32767, Math.floor(sample))), i * 2);
  }
  
  return buffer;
}

function generateWaveForm(duration) {
  const sampleRate = 44100;
  const numSamples = Math.floor(duration * sampleRate);
  const buffer = Buffer.alloc(numSamples * 2);
  
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = Math.sin(2 * Math.PI * 440 * t) * Math.sin(2 * Math.PI * 2 * t) * 0.2 * 32767;
    buffer.writeInt16LE(Math.max(-32768, Math.min(32767, Math.floor(sample))), i * 2);
  }
  
  return buffer;
}

const testAudios = [
  { 
    name: 'slide-01.mp3', 
    duration: 3, 
    type: 'tone',
    frequency: 440 
  },
  { 
    name: 'cover.mp3', 
    duration: 4, 
    type: 'waveform' 
  },
  { 
    name: 'slide-02.mp3', 
    duration: 5, 
    type: 'tone',
    frequency: 523.25 
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'audio');

testAudios.forEach(audio => {
  let audioData;
  
  switch (audio.type) {
    case 'tone':
      audioData = generateTone(audio.frequency, audio.duration);
      break;
    case 'waveform':
      audioData = generateWaveForm(audio.duration);
      break;
    default:
      audioData = generateSilence(audio.duration);
  }
  
  const filePath = path.join(outputDir, audio.name);
  
  fs.writeFileSync(filePath, audioData);
  
  console.log(`✅ Creado: ${audio.name} (${audio.duration}s)`);
});

console.log('\n📝 Nota: Estos son audios de prueba simples.');
console.log('🎤 Para producción, usa servicios TTS profesionales como:');
console.log('   - ElevenLabs (calidad superior)');
console.log('   - Google Cloud TTS');
console.log('   - Amazon Polly');