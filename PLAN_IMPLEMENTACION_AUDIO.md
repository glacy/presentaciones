# Plan de Implementación: Audio + Subtítulos para Presentaciones

## Visión General
Transformar las presentaciones de diapositivas interactivas en experiencias multimedia tipo video que involucren estilos visuales, auditivos y kinestésicos.

## Arquitectura Propuesta

### 1. Sistema de Audio (Fase 1)

**Arquitectura de Archivos**
```
public/audio/physics/
  ├── slide-01.mp3
  ├── slide-02.mp3
  └── ...

public/audio/proyecto/
  ├── cover.mp3
  ├── context.mp3
  └── ...
```

**Ventajas de este enfoque:**
- ✅ Sin dependencias externas (no necesita Web Speech API ni configuraciones del navegador)
- ✅ Reproducción consistente en todos los navegadores
- ✅ Caché automático del navegador para rendimiento
- ✅ Control total sobre calidad y sincronización
- ✅ Fácil de generar/reemplazar audios
- ✅ Compatible con modo offline

**Implementación Técnica:**

1. **Extensión de tipos** (`types.ts`)
```typescript
export interface SlideMeta {
  // ... propiedades existentes
  audioDuration?: number; // Duración en segundos para sincronización
}
```

2. **Componente de Audio** (`AudioPlayer.tsx`)
```typescript
// Características:
- Reproducción automática al cambiar slide
- Controles de play/pause proactivos
- Indicador de progreso
- Control de volumen
- Callbacks para sincronización con animaciones
- Soporte para modo video (continuo) y modo interactivo
```

3. **Sistema de Sincronización**
```typescript
// Coordinar audio con:
- Animaciones de entrada/salida de elementos
- Transiciones entre diapositivas
- Elementos kinestésicos (interactivos)
```

### 2. Sistema de Subtítulos (Fase 2)

**Arquitectura de Archivos**
```
public/subtitles/physics/
  ├── slide-01.vtt
  ├── slide-02.vtt
  └── ...

public/subtitles/proyecto/
  ├── cover.vtt
  ├── context.vtt
  └── ...
```

**Formato WebVTT (.vtt)**
```
WEBVTT

00:00.000 --> 00:02.500
Bienvenidos a esta presentación

00:02.500 --> 00:05.000
sobre vectores y operaciones vectoriales
```

**Implementación:**
- Integración nativa con elemento `<audio>` o `<video>`
- Estilización personalizable vía CSS
- Soporte para múltiples idiomas (multilenguaje futuro)
- Sincronización automática con audio

### 3. Experiencia Kinestésica (Fase 3)

**Elementos Interactivos Sincronizados:**
- Botones/elementos que responden a tiempo específicos del audio
- Animaciones coordinadas con narración
- Elementos destacados según contenido del audio
- Progress bars y visualizadores de audio

## Plan de Implementación por Fases

### FASE 1: Audio Básico (2-3 días)
**Objetivo**: Incorporar audio a cada diapositiva con reproducción automática

**Tareas:**
1. ✅ Crear estructura de directorios para audios
2. ✅ Extender tipos SlideMeta con duración de audio
3. ✅ Crear componente AudioPlayer con:
   - Reproducción automática
   - Controles básicos (play/pause, volumen)
   - Gestión de estado
4. ✅ Integrar en sistema de presentaciones existente
5. ✅ Añadir indicador visual de audio activo
6. ✅ Manejo de errores (archivo no encontrado, etc.)

**Entregables:**
- Sistema de audio funcional
- Guía para generar audios (TTS o grabación)
- Sistema de fallback si audio no disponible

### FASE 2: Sincronización y Subtítulos (3-4 días)
**Objetivo**: Sincronizar audio con animaciones y añadir subtítulos

**Tareas:**
1. ✅ Implementar sistema de sincronización de tiempo
2. ✅ Crear componente SubtitlePlayer compatible con WebVTT
3. ✅ Integrar subtítulos con audios existentes
4. ✅ Sincronizar animaciones de entrada/salida con audio
5. ✅ Añadir controles avanzados (seek, velocidad)
6. ✅ Modo "video" (reproducción continua sin interacción)

**Entregables:**
- Sistema de subtítulos funcional
- Animaciones sincronizadas con audio
- Modo de reproducción continua

### FASE 3: Experiencia Kinestésica Completa (2-3 días)
**Objetivo**: Elementos interactivos coordinados con narración

**Tareas:**
1. ✅ Sistema de eventos temporales en audio
2. ✅ Elementos interactivos que responden a narración
3. ✅ Visualizadores de audio
4. ✅ Highlighting automático de contenido
5. ✅ Modos de accesibilidad amplificados

**Entregables:**
- Experiencia multimedia completa
- Sistema de eventos temporales
- Componentes kinestésicos integrados

### FASE 4: Generación de Contenido (2-3 días)
**Objetivo**: Crear audios y subtítulos para presentaciones existentes

**Tareas:**
1. ✅ Crear guiones para narración
2. ✅ Generar audios (TTS o grabación profesional)
3. ✅ Crear archivos VTT con timestamps
4. ✅ Ajustar duraciones en metadata
5. ✅ Pruebas de sincronización y calidad

**Entregables:**
- Audios completos para todas las diapositivas
- Subtítulos sincronizados
- Guía de mantenimiento y actualización

## Consideraciones Técnicas

### Ventajas del Enfoque Elegido
- **Sin dependencias externas**: No requiere API del navegador ni permisos especiales
- **Compatible universalmente**: Funciona en todos los navegadores modernos
- **Caché automático**: Los archivos se cachean localmente para mejor rendimiento
- **Control total**: Sincronización precisa y personalización completa
- **Escalable**: Fácil de extender a múltiples idiomas o presentaciones

### Optimizaciones
- Compresión de audio (MP3/OGG para compatibilidad)
- Lazy loading de archivos de audio grandes
- Prefetch de audios de slides siguientes
- Optimización de tamaños de archivos

### Accesibilidad
- Controles de teclado para audio
- Indicadores visuales de estado
- Opciones para desactivar audio/subtítulos
- Ajuste de velocidad de reproducción
- Alto contraste para subtítulos

## Estimación de Tiempo Total
**8-12 días** para implementación completa del sistema

## Próximos Pasos
1. Comenzar con FASE 1: Implementación de audio básico
2. Preparar estructura de archivos
3. Crear prototipo funcional con una diapositiva de prueba
4. Iterar basado en feedback

¿Quieres que proceda con la implementación de la FASE 1?