# Guiones de Audio para Presentaciones

## Estructura
- `audio/physics/` - Audios para presentación de física
- `audio/proyecto/` - Audios para presentación de proyecto

## Convención de Nombres
- Física: `slide-01.mp3`, `slide-02.mp3`, etc.
- Proyecto: `cover.mp3`, `context.mp3`, etc. (según ID)

## Generación de Audios

### Opción 1: TTS (Text-to-Speech)
Usa servicios como:
- ElevenLabs (alta calidad)
- Google Cloud TTS
- Amazon Polly
- Azure Speech Services

### Opción 2: Grabación Profesional
Contratar narrador profesional para mejor calidad

### Opción 3: Generación Local
Usar herramientas como:
- macOS: `say` comando
- Python: `gTTS`, `pyttsx3`
- Online: various TTS websites

## Calidad Recomendada
- Formato: MP3
- Bitrate: 128-192 kbps
- Frecuencia: 44.1 kHz
- Duración: Aproximadamente 3-7 segundos por palabra

## Metadatos
Cada audio debe incluir información de:
- Índice de slide
- Duración exacta (para sincronización)
- Idioma
- Calidad de audio

## Próximos Pasos
1. Generar audios según guiones
2. Actualizar duraciones en metadata de slides
3. Probar reproducción en diferentes navegadores
4. Ajustar sincronización si es necesario
