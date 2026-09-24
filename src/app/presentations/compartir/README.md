# Presentación: "Construir para compartir"

Charla para docentes sobre educación abierta, reproducible e inclusiva.
14 diapositivas (`data/slidesMeta.ts` es la fuente de verdad; componentes en `slides/`).

## Implementaciones documentadas

### 1. Formulario de audiencia + QR (WhereSlide)

- **URL del formulario** (Microsoft Forms): constante `FORM_URL` al inicio de
  `slides/WhereSlide.tsx`. Un solo lugar para actualizarla.
- El QR se genera **localmente** como SVG con `qrcode.react` (instalado con bun).
  No depende de APIs externas — funciona sin internet en el salón (el escaneo
  desde el teléfono sí requiere conexión).
- La tarjeta QR (fondo blanco, contraste 19:1) es un enlace clicable y aparece
  animada (delay 1.9s) bajo las respuestas del rompehielos.
- Las preguntas del formulario están diseñadas para engancharse con diapositivas
  concretas y mostrar resultados en vivo durante la charla.

### 2. Modo proyector

Para video beam de características desconocidas / salas con luz alta.

- **Activación**: botón "Proyector" en el panel flotante, tecla `P`, o URL
  `?proyector=1`. El parámetro persiste en la URL y reacciona a back/forward
  (`popstate`).
- **Qué hace** (bloque CSS al final de `globals.css`, bajo `[data-projector="true"]`,
  sin tocar el sistema neón):
  - `--background` → negro puro y `--card` casi negro (más contraste ante
    proyectores que no reproducen negros profundos).
  - `--muted-foreground` → luminosidad 0.87 (≈11:1 de contraste).
  - Oculta `.glow-cyan/.glow-magenta/.glow-mint` y baja `.bg-grid/.bg-dots` a 10%
    (los glows se ven como halos grises en proyectores débiles).

### 3. Accesibilidad

- **Reduced motion**: `Presentation_Compartir.tsx` envuelve todo en
  `<MotionConfig reducedMotion="user">` (framer-motion). Respeta la preferencia
  del sistema operativo; congela animaciones transform infinitas (anillo de
  Ciclo de vida, flechas pulsantes, orbs).
- **Contraste AA**: los textos secundarios usan `text-muted-foreground` a opacidad
  completa (8.1:1 sobre fondo). Evitar variantes `/60`–`/70`: quedan bajo el AA
  (la regla global de globals.css además baja `text-muted-foreground` a 0.85).
- **Ya resuelto globalmente en `globals.css`** (no duplicar):
  - Mínimo tipográfico: `text-[10px]`/`text-[11px]` se renderizan a 13–14px vía
    `clamp()` con `!important`.
  - Foco visible: outline global en `*:focus-visible`.
  - Targets de 44px en botones/enlaces.
- Colores del tema medidos sobre fondo oscuro (WCAG): cyan 13.1:1, mint 11.5:1,
  amber 12.1:1, orange 8.7:1, magenta 6.0:1, violeta 5.1:1. El violeta es el
  primero en degradarse con un proyector lavado; los textos clave usan
  `text-foreground` (19:1) y sobreviven.

### 4. Patrón de estado externo (lección de la hidratación)

El modo proyector lee la URL. El intento con `useState(() => window...)` provocó
un hydration mismatch (el atributo y el botón diferían del SSR), y
`suppressHydrationWarning` no lo cubre porque solo aplica al elemento donde se
pone, no a los descendientes.

Patrón correcto (en `Presentation_Compartir.tsx`):

```ts
const projectorFromUrl = useSyncExternalStore(
  subscribeToProjectorQuery,   // escucha popstate
  getProjectorQuerySnapshot,   // ?proyector=1 === "1"
  () => false,                 // snapshot SSR: coincide con el servidor
);
const projector = projectorOverride ?? projectorFromUrl;
```

- Durante la hidratación React usa el snapshot del servidor; luego sincroniza
  con la URL sin mismatch.
- El toggle escribe el parámetro con `history.replaceState` y guarda un override
  local en `useState<boolean | null>`.
- Evitar `typeof window` en inicializadores de estado y `setState` directo en
  effects (regla `react-hooks/set-state-in-effect`).

## Atajos de teclado

| Tecla | Acción |
|---|---|
| `←` `→` / `PgUp` `PgDn` / `Espacio` | Anterior / siguiente |
| `Home` / `End` | Primera / última |
| `1`–`9` | Ir a la diapositiva N |
| `G` | Vista general (mapa) |
| `F` | Pantalla completa |
| `P` | Modo proyector |
| `N` | Mostrar/ocultar navegación |
| `H` | Volver al lanzador |

## Rutina sugerida en el congreso

1. Llegar 10 min antes, abrir la presentación y `F` (pantalla completa).
2. Activar modo proyector (`P`) y verificar una diapositiva con violeta
   (Ciclo de vida) desde el fondo del salón.
3. Diapositiva 2: dejar que la audiencia escanee el QR mientras responde el
   rompehielos.
