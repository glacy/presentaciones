# Project
- Next.js 16 (App Router) + TypeScript strict + Tailwind v4 + shadcn/ui (new-york) + Framer Motion + Prisma/SQLite.Runtime: Bun — never npm/node/pnpm/yarn.

# Commands
- bun install, bun run lint, bun run build
- After editing prisma/schema.prisma: bun run db:push (then restart dev server)
- Dev server (port 3000) runs in background: bun run dev
- Do NOT start, stop or restart servers unless I ask. Verify changes with bun run lint and bunx tsc --noEmit instead.

# Architecture
- src/app/page.tsx → renders Presentation
- Slides: data in src/components/presentation/data/physicsSlidesMeta.ts, components in src/components/presentation/slides/ (by topic). - Before adding/editing a slide, read one existing slide as the pattern — don't explore the whole folder.
- DB client: src/lib/db.ts (singleton — never instantiate PrismaClient elsewhere)
- UI: src/components/ui/ (shadcn/ui), utils src/lib/utils.ts, alias @/* → src/*

# Conventions
- Server components by default; 'use client' only for interactivity
- Never modify: .zscripts/, db/, neon color system in globals.css
- No tests / no CI — don't create them unless asked
- next.config.ts has ignoreBuildErrors: true → a passing build proves nothing; type-check with `bunx tsc --noEmit