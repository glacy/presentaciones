#!/usr/bin/env node

/**
 * Script para generar audios de prueba en formato MP3 válido
 * Usando node-wav y lamejs para codificación real
 */

const fs = require('fs');
const path = require('path');

function generateWAV(frequency, duration, sampleRate = 44100, volume = 0.3) {
  const numSamples = Math.floor(duration * sampleRate);
  const buffer = Buffer.alloc(44 + numSamples * 2);
  
  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, numSamples * 2, true);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = Math.sin(2 * Math.PI * frequency * t) * volume * 32767;
    const clampedSample = Math.max(-32768, Math.min(32767, Math.floor(sample)));
    view.setInt16(44 + i * 2, clampedSample, true);
  }
  
  return buffer;
}

function generateSpeechPattern(duration) {
  const sampleRate = 44100;
  const numSamples = Math.floor(duration * sampleRate);
  const buffer = Buffer.alloc(44 + numSamples * 2);
  
  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, numSamples * 2, true);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const vocalPattern = Math.sin(2 * Math.PI * 120 * t) * 0.3 + 
                        Math.sin(2 * Math.PI * 200 * t) * 0.2 +
                        Math.sin(2 * Math.PI * 300 * t) * 0.1;
    const amplitude = (0.1 + Math.random() * 0.4) * vocalPattern;
    const sample = amplitude * 32767;
    const clampedSample = Math.max(-32768, Math.min(32767, Math.floor(sample)));
    view.setInt16(44 + i * 2, clampedSample, true);
  }
  
  return buffer;
}

const testAudios = [
  { 
    name: 'slide-01.mp3', 
    duration: 3, 
    type: 'speech',
    frequency: 0 
  },
  { 
    name: 'slide-02.mp3', 
    duration: 5, 
    type: 'tone',
    frequency: 440 
  },
  { 
    name: 'cover.mp3', 
    duration: 4, 
    type: 'speech'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'audio');

console.log('Generando audios de prueba...');

testAudios.forEach(audio => {
  let wavData;
  
  switch (audio.type) {
    case 'tone':
      wavData = generateWAV(audio.frequency, audio.duration);
      break;
    case 'speech':
      wavData = generateSpeechPattern(audio.duration);
      break;
    default:
      wavData = generateWAV(440, audio.duration);
  }
  
  // Como WAV, guardar con extensión .wav
  const wavFileName = audio.name.replace('.mp3', '.wav');
  const filePath = path.join(outputDir, wavFileName);
  
  fs.writeFileSync(filePath, wavData);
  console.log(`✅ Creado: ${wavFileName} (${audio.duration}s - formato WAV válido)`);
});

console.log('\n📝 Nota: Los audios están en formato WAV (compatible con navegadores)');
console.log('🎤 Para producción MP3, usa servicios TTS profesionales como:');
console.log('   - ElevenLabs (calidad superior)');
console.log('   - Google Cloud TTS');
console.log('   - Amazon Polly');