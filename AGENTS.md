# Development Commands
- Runtime: Bun (not npm/node)
- `bun install` - Install dependencies
- `bun run dev` - Start dev server on port 3000 (uses background process)
- `bun run build` - Production build (requires `output: "standalone"` in next.config.ts)
- `bun run start` - Start production server
- `bun run db:push` - Push Prisma schema to SQLite database (required before dev)
- `bun run lint` - Run ESLint (most rules disabled)
- `.zscripts/dev.sh` - Full dev startup (installs, sets up DB, starts Next.js + mini-services in background)

# Build & Deployment
- Build output: `.next/standalone/` (standalone mode required for deployment)
- Custom build script: `.zscripts/build.sh` (includes mini-services, Python runtime, database)
- Production start: `.zscripts/start.sh` (starts Next.js + mini-services + Caddy)
- Caddy reverse proxy on port 81 → Next.js on 3000
- Database: SQLite at path set in `.env` (default: `file:/home/z/my-project/db/custom.db`)

# Tech Stack & Configuration
- Next.js 16.1.1 with TypeScript (strict mode enabled, but build errors ignored)
- Prisma with SQLite (schema in `prisma/schema.prisma`)
- Tailwind CSS v4 with custom neon color system
- shadcn/ui components (new-york style, CSS variables enabled)
- Framer Motion for animations
- React 19 with server components

# Code Quality
- ESLint: Most rules disabled (see `eslint.config.mjs`)
- TypeScript: Build errors ignored (`ignoreBuildErrors: true` in next.config.ts)
- No tests configured
- No CI/CD workflows

# Architecture
- App Router with `/src/app` structure
- Main entry: `/src/app/page.tsx` (loads `Presentation` component)
- Presentation system: `/src/components/presentation/Presentation.tsx`
- Slide data: `/src/components/presentation/data/physicsSlidesMeta.ts`
- Individual slides: `/src/components/presentation/slides/` (organized by topic)
- Database client: `/src/lib/db.ts` (singleton pattern)
- UI components: `/src/components/ui/` (shadcn/ui components)
- Utilities: `/src/lib/utils.ts`

# Environment Setup
- Ensure `.env` has `DATABASE_URL` pointing to SQLite file
- Run `bun run db:push` after schema changes
- Restart dev server after schema changes

# Port Configuration
- Development: 3000 (Next.js)
- Production proxy: 81 (Caddy)
- Mini-services: scanned and started automatically from `mini-services/` directory

# Important Paths
- Root layout: `/src/app/layout.tsx` (sets up fonts, Toaster, dark mode)
- Global styles: `/src/app/globals.css`
- Tailwind config: `/tailwind.config.ts`
- TypeScript config: `/tsconfig.json` (paths: `@/*` → `./src/*`)