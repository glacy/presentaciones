# Audio de Presentaciones — Implementación y Guía de Uso

Documentación del sistema de audio (guiones narrados por diapositiva), cómo
regenerar voces y cómo actualizar guiones.

## Estado actual (implementado)

- Cada diapositiva tiene un guion en `public/audio/physics/slide-XX.txt` y su
  narración generada en `public/audio/physics/slide-XX.wav`.
- Voces generadas localmente con **Kokoro-82M** vía el CLI de HyperFrames
  (`npx hyperframes tts`), voz `ef_dora` (español), WAV PCM 16-bit mono 24 kHz.
- Los archivos `.mp3` antiguos fueron eliminados: eran PCM crudo sin cabecera
  (ruido al reproducir). Formato válido actual: `.wav`.

### Cómo se conecta el audio con las diapositivas

| Pieza | Archivo | Función |
| --- | --- | --- |
| Resolución de ruta | `src/app/presentations/shared/utils/audio.ts` | `getAudioPath()` → `/audio/<presentación>/<id>.wav`; `hasAudio()` decide si se muestra el reproductor |
| Tipo | `src/app/presentations/shared/types.ts` | `SlideMeta`: `id`, `audioDuration?`, `audioPath?` |
| Metadata de slides | `src/app/presentations/physics/data/physicsSlidesMeta.ts` | Cada slide tiene `id: "slide-XX"` y `audioDuration` (segundos, duración real del WAV) |
| Reproductor | `src/app/presentations/shared/ui/AudioPlayer.tsx` | Play/pausa, mute, volumen; muestra "Audio no disponible" solo si el archivo falla al cargar |

Reglas importantes:

- `hasAudio()` devuelve `true` solo si el slide tiene `audioDuration` o
  `audioPath` en el meta. **Sin `audioDuration`, el reproductor no aparece.**
- El `id` del slide define el nombre de archivo esperado: `id: "slide-04"` →
  `/audio/physics/slide-04.wav`. Si un día usas ids semánticos (`"portada"`),
  renombra el WAV o define `audioPath` explícito en el meta.
- Para migrar a MP3 en producción: convierte los archivos, cambia la extensión
  en `getAudioPath()` (`audio.ts`, línea del `.wav`) y actualiza los nombres.

---

## Regenerar un audio (guion actualizado)

1. Edita el guion en `public/audio/physics/slide-XX.txt` (línea `Texto:`).
2. Extrae **solo la narración** (el `.txt` también contiene instrucciones que
   no deben leerse en voz alta) y genera el WAV:

   ```bash
   sed -n 's/^Texto: //p' public/audio/physics/slide-01.txt > /tmp/narracion.txt
   npx hyperframes tts --text-file /tmp/narracion.txt -v ef_dora -o public/audio/physics/slide-01.wav
   ```

3. Obtén la nueva duración:

   ```bash
   ffprobe -v error -show_entries format=duration -of csv=p=0 public/audio/physics/slide-01.wav
   ```

4. Actualiza `audioDuration` del slide correspondiente en
   `src/app/presentations/physics/data/physicsSlidesMeta.ts`.
5. Recarga la página (no hace falta reiniciar el dev server; `public/` se
   sirve estáticamente).

### Regenerar todos los audios de una vez

```bash
for i in 01 02 03 04 05 06 07 08 09 10; do
  sed -n 's/^Texto: //p' "public/audio/physics/slide-$i.txt" > "/tmp/narracion-$i.txt"
  npx hyperframes tts --text-file "/tmp/narracion-$i.txt" -v ef_dora \
    -o "public/audio/physics/slide-$i.wav"
done
```

Después, recalcula y actualiza los `audioDuration` (paso 3–4 de arriba).

---

## Cambiar de voz o velocidad

Voces en español de Kokoro: `ef_dora` (femenina, la actual), `em_alex` y
`em_santa` (masculinas). Lista completa:

```bash
npx hyperframes tts --list
```

```bash
# Otra voz
npx hyperframes tts --text-file /tmp/narracion.txt -v em_alex -o salida.wav

# Más lenta / más rápida (1.0 = normal)
npx hyperframes tts --text-file /tmp/narracion.txt -v ef_dora -s 0.9 -o salida.wav
```

El idioma se detecta del prefijo de la voz (`e`/`es`); se puede forzar con
`-l es`. Mantén **una sola voz** para toda la presentación.

### Calidad superior (opcional)

Kokoro es local y gratuito. Para voces de mayor calidad con marcas de tiempo
por palabra, HeyGen ofrece ruta gratuita (10 min/mes):

```bash
# Instalar CLI y hacer login OAuth en el navegador
# (CLI: https://developers.heygen.com/cli)
heygen auth login --oauth
npx hyperframes auth status   # verificar sesión
```

Con sesión activa, el mismo flujo de regeneración usa las voces HeyGen.
Verificado el 2026-09-02: sin sesión, la ruta activa es Kokoro local.

---

## Agregar audio a una diapositiva nueva

1. Crea `public/audio/physics/slide-XX.txt` con el formato existente (línea
   `Texto:` + instrucciones) y genera su WAV (ver arriba).
2. En `physicsSlidesMeta.ts`, asegura que el slide tenga `id: "slide-XX"` y
   agrega `audioDuration` con la duración real.
3. Verifica con `bunx tsc --noEmit` y recarga.

---

## Solución de problemas

| Síntoma | Causa | Solución |
| --- | --- | --- |
| "Audio no disponible" | El WAV no existe o el nombre no coincide con el `id` | Revisa nombre de archivo vs `id` en el meta; mira el error con `path:` en la consola |
| Ruido/interferencia | Archivo con contenido inválido (PCM crudo con extensión `.mp3`, descarga truncada) | Regenera con `npx hyperframes tts` y valida con `file public/audio/physics/slide-XX.wav` (debe decir `WAVE audio, Microsoft PCM`) |
| El reproductor no aparece | Falta `audioDuration` en el meta del slide | Agrégalo con la duración de `ffprobe` |
| El audio se corta al mover volumen | Versión antigua de `AudioPlayer.tsx` | Ya corregido: el volumen se aplica sin recargar el `src` |
