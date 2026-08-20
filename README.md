# 📐 Presentaciones Interactivas | Física General I

Portal de presentaciones educativas interactivas con diseño neon/cyberpunk y animaciones fluidas para Física General I.

## 🎯 Características

- **Múltiples presentaciones** separadas con metadata específica
- **Presentación interactiva** de vectores y operaciones vectoriales (10 capítulos)
- **Presentación de bitácora** de trabajo en equipo (9 capítulos)
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

1. **Portada** - El Mapa del Tesoro
2. **El problema** - El Villano de la Historia
3. **Diagnóstico · T1** - Mirarse al espejo sin filtro
4. **Tratado de paz · T2-T3** - Armando el rompecabezas
5. **Cronograma · T4** - El Cronograma no es un deseo, es un contrato
6. **La Tormenta · T5** - La realidad siempre gana a la teoría
7. **Espejo final · T6** - La evaluación que no es por cumplir
8. **El hilo invisible** - La Trazabilidad: el secreto de los 100 puntos
9. **Epílogo** - La bitácora no es puro papeleo

## 🚀 Comenzando

### Prerrequisitos

- [Bun](https://bun.sh/) como runtime
- SQLite para base de datos

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

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16.1.1 con App Router
- **Runtime**: Bun (no npm/node)
- **UI**: shadcn/ui componentes + Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Base de datos**: Prisma + SQLite
- **Tipado**: TypeScript (con errores de compilación ignorados)
- **Matemáticas**: KaTeX para renderizado de LaTeX
- **Estilos**: Sistema de colores neon personalizado

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
│   │   │   ├── layout.tsx    # Metadata específica de física
│   │   │   └── page.tsx      # Physics Presentation
│   │   └── proyecto/
│   │       ├── layout.tsx    # Metadata específica del proyecto
│   │       └── page.tsx      # Proyecto Presentation
│   ├── globals.css           # Estilos globales y sistema neon
│   ├── layout.tsx            # Layout principal con fuentes y Toaster
│   └── page.tsx              # Página de inicio (lanzador)
├── components/
│   ├── presentation/
│   │   ├── Presentation.tsx  # Componente principal de física
│   │   ├── Presentation_Proyecto.tsx # Componente principal de proyecto
│   │   ├── data/
│   │   │   ├── physicsSlidesMeta.ts # Metadatos de diapositivas física
│   │   │   └── slidesMeta.ts # Metadatos de diapositivas proyecto
│   │   └── slides/
│   │       ├── physics/      # Diapositivas individuales de física
│   │       └── proyecto/     # Diapositivas individuales de proyecto
│   └── ui/                   # Componentes shadcn/ui
└── lib/
    ├── db.ts                 # Cliente Prisma (singleton)
    └── utils.ts              # Utilidades
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