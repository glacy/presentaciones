# 📐 Presentaciones Interactivas | Física General I

Portal de presentaciones educativas interactivas con diseño neon/cyberpunk y animaciones fluidas para Física General I.

## 🎯 Características

- **Múltiples presentaciones** separadas con metadata específica
- **Presentación interactiva** de vectores y operaciones vectoriales (10 capítulos)
- **Presentación de bitácora** de trabajo en equipo (11 capítulos)
- **Audio narrado por diapositiva** con TTS local (Kokoro), auto-play y auto-avance (ver [Audio](#-audio-narrado))
- **Navegación por teclado**: ← → para navegar, 1-9 para saltar a diapositivas específicas
- **Diseño neon/cyberpunk** con efectos de brillo y animaciones suaves
- **Vista general (G)** para ver todas las diapositivas en cuadrícula
- **Progreso visual** con barra de progreso animada
- **Responsive** con optimizaciones para escritorio y móvil
- **Matemáticas con LaTeX/KaTeX** para notación científica precisa

## 📚 Contenido

### Presentación de Vectores y Operaciones Vectoriales

1. **Portada** - Introducción a los vectores
2. **Unidades** - Cantidades físicas y unidades fundamentales
3. **Escalares vs Vectores** - Diferencias y aplicaciones
4. **Sistemas de Coordenadas** - Sistemas de referencia
5. **Operaciones Básicas** - Suma y resta de vectores
6. **Direcciones Cardinales** - Navegación con puntos cardinales
7. **Producto Escalar** - Trabajo y proyección
8. **Producto Vectorial** - Torque y perpendicularidad
9. **Resumen** - Resumen de operaciones vectoriales
10. **Conclusión** - El poder de los vectores

### Presentación de Bitácora de Trabajo en Equipo

1. **Portada** - La Bitácora del Trabajo Individual y en Equipo
2. **Contexto** - ¿Para qué sirve la Bitácora?
3. **El problema** - El Villano de la Historia
4. **Estructura integrada** - La Bitácora: un sistema articulado
5. **Diagnóstico · T1** - Mirarse al espejo sin filtro
6. **Tratado de paz · T2-T3** - Armando el rompecabezas
7. **Cronograma · T4** - El Cronograma no es un deseo, es un contrato
8. **La Tormenta · T5** - La realidad siempre gana a la teoría
9. **Espejo final · T6** - La evaluación que no es por cumplir
10. **El hilo invisible** - La Trazabilidad: el secreto de los 100 puntos
11. **Epílogo** - La bitácora no es puro papeleo

## 🚀 Comenzando

### Prerrequisitos

- [Bun](https://bun.sh/) como runtime
- SQLite para base de datos
- **Para regenerar audios** (opcional): [Node.js ≥ 18](https://nodejs.org/) (ejecuta el TTS local vía `npx hyperframes`), `ffmpeg`/`ffprobe` (validación y duración)

### Instalación

```bash
# Instalar dependencias
bun install

# Configurar base de datos
bun run db:push
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo en puerto 3000
bun run dev

# O usar el script completo (incluso mini-services)
.zscripts/dev.sh
```

### Producción

```bash
# Construir para producción
bun run build

# Iniciar servidor de producción
bun run start
```

## 🌐 Rutas

- **`/`** - Lanzador de presentaciones con selección de módulos
- **`/presentations/physics`** - Presentación de Vectores y Operaciones Vectoriales
- **`/presentations/proyecto`** - Presentación de Bitácora de Trabajo en Equipo

## 🔊 Audio Narrado

Cada diapositiva tiene un guion (`.txt`) y su narración generada con **TTS local
(Kokoro-82M, voz `ef_dora`, español)** — sin servicios externos ni credenciales.

### Cómo funciona

| Pieza | Archivo | Función |
| --- | --- | --- |
| Guion + narración | `public/audio/<presentación>/<id>.txt` / `.wav` | Fuente del texto y audio servido estáticamente |
| Resolución de ruta | `src/app/presentations/shared/utils/audio.ts` | `getAudioPath()` construye `/audio/<pres>/<id>.wav`; `hasAudio()` decide si se muestra el reproductor |
| Metadata | `physics/data/physicsSlidesMeta.ts`, `proyecto/data/slidesMeta.ts` | Cada slide declara `id` (define el nombre del WAV) y `audioDuration` (segundos reales) |
| Reproductor | `shared/ui/AudioPlayer.tsx` | Play/pausa, volumen, progreso; visible siempre (barra inferior animada sin desmontarse) |
| Auto-play / auto-avance | `shared/hooks/useAudioManager.ts` + `shared/ui/AutoPlayToggle.tsx` | Al terminar la narración avanza a la siguiente diapositiva (si auto-play está activo) |

Convenciones clave:

- El `id` del slide define el archivo esperado: `id: "slide-04"` →
  `/audio/physics/slide-04.wav`; `id: "cover"` → `/audio/proyecto/cover.wav`.
- Sin `audioDuration` en el meta, el reproductor no aparece para esa diapositiva.
- El audio **nunca** debe montarse dentro de UI que se desmonta (barra de
  navegación que se oculta, etc.).

### Herramientas para gestión de audios

- **TTS local**: `npx hyperframes tts` (Kokoro-82M vía el CLI de HyperFrames;
  requiere Node ≥ 18; la primera corrida descarga el modelo)
- **Validación**: `file <archivo.wav>` (debe reportar `WAVE audio, Microsoft PCM`)
- **Duración**: `ffprobe -v error -show_entries format=duration -of csv=p=0 <archivo.wav>`
- **Conversión a MP3 (producción)**: `ffmpeg -i entrada.wav -codec:a libmp3lame -b:a 128k -ac 1 salida.mp3`

```bash
# Regenerar la narración de una diapositiva tras editar su guion
sed -n 's/^Texto: //p' public/audio/physics/slide-01.txt > /tmp/narracion.txt
npx hyperframes tts --text-file /tmp/narracion.txt -v ef_dora \
  -o public/audio/physics/slide-01.wav
```

> Guía completa (actualizar guiones, cambiar voz/velocidad, agregar audios a
> nuevas diapositivas, solución de problemas) en
> [`public/audio/README.md`](public/audio/README.md).

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16.1.1 con App Router
- **Runtime**: Bun (no npm/node)
- **UI**: shadcn/ui componentes + Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Base de datos**: Prisma + SQLite
- **Tipado**: TypeScript (con errores de compilación ignorados)
- **Matemáticas**: KaTeX para renderizado de LaTeX
- **Estilos**: Sistema de colores neon personalizado
- **TTS**: Kokoro-82M local vía CLI de HyperFrames (solo para regenerar audios; requiere Node ≥ 18)

## 🎨 Sistema de Diseño

La aplicación utiliza un sistema de colores neon personalizado:

- **Cyan** (`#00e5ff`) - Para elementos principales
- **Mint** (`#4ade80`) - Para elementos secundarios  
- **Naranja** (`#ff8c42`) - Para llamadas de atención
- **Magenta** (`#ff3d8b`) - Para énfasis
- **Violeta** (`#a855f7`) - Para gradientes
- **Ámbar** (`#fbbf24`) - Para resaltados

El diseño está en modo oscuro por defecto con texturas de grid y efectos de brillo.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── presentations/
│   │   ├── physics/
│   │   │   ├── components/Presentation.tsx  # Reproductor de audio + navegación
│   │   │   ├── data/physicsSlidesMeta.ts    # Metadatos (id, audioDuration)
│   │   │   ├── slides/                      # Diapositivas individuales
│   │   │   ├── layout.tsx                   # Metadata específica de física
│   │   │   └── page.tsx                     # Ruta /presentations/physics
│   │   ├── proyecto/
│   │   │   ├── components/Presentation_Proyecto.tsx
│   │   │   ├── data/slidesMeta.ts
│   │   │   ├── slides/
│   │   │   ├── layout.tsx                   # Metadata específica del proyecto
│   │   │   └── page.tsx                     # Ruta /presentations/proyecto
│   │   └── shared/
│   │       ├── ui/AudioPlayer.tsx           # Play/pausa, volumen, progreso
│   │       ├── ui/AutoPlayToggle.tsx        # Toggle de reproducción automática
│   │       ├── hooks/useAudioManager.ts     # Cambio de pista y auto-avance
│   │       ├── utils/audio.ts               # getAudioPath / hasAudio
│   │       └── types.ts                     # SlideMeta (id, audioDuration)
│   ├── globals.css           # Estilos globales y sistema neon
│   ├── layout.tsx            # Layout principal con fuentes y Toaster
│   └── page.tsx              # Página de inicio (lanzador)
├── components/
│   └── ui/                   # Componentes shadcn/ui
└── lib/
    ├── db.ts                 # Cliente Prisma (singleton)
    └── utils.ts              # Utilidades
public/
└── audio/
    ├── physics/              # slide-XX.txt (guion) + slide-XX.wav (narración)
    ├── proyecto/             # <id>.txt (guion) + <id>.wav (narración)
    └── README.md             # Guía de gestión de audios
```

## ⌨️ Atajos de Teclado

- **← / →** - Navegar entre diapositivas
- **↑ / ↓** - Navegar entre diapositivas
- **Espacio / PageDown** - Siguiente diapositiva
- **PageUp** - Diapositiva anterior
- **Home** - Ir a la primera diapositiva
- **End** - Ir a la última diapositiva
- **1-9** - Saltar a diapositiva específica
- **G** - Toggle vista general (grid view)
- **Esc** - Cerrar vista general

## 🌐 Despliegue

El proyecto está configurado para despliegue con:

- **Output standalone** para optimización de producción
- **Caddy** como reverse proxy (puerto 81 → 3000)
- **Mini-services** soportados con scripts automáticos
- **SQLite** embebido para base de datos

```bash
# Build completo con mini-services
.zscripts/build.sh

# Iniciar producción
.zscripts/start.sh
```

## 📝 Notas

- ESLint configurado con la mayoría de reglas deshabilitadas
- TypeScript en modo estricto pero errores de build ignorados
- No hay tests configurados actualmente
- Base de datos SQLite con ruta configurable en `.env`
- Cada presentación tiene su propia metadata para SEO y compartir en redes

## 👥 Autores

Cátedra de Física General I · Tecnológico de Costa Rica

## 📄 Licencia

Proyecto educativo para Física General I - I Semestre 2026