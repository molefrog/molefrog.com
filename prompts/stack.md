# STACK.md

My default stack for new projects. Opinionated.

## formatting + language
- minimal, old school.
- lowercase - ok!
- formatting is **ok** but don't overuse
- easier for humans to edit/make changes

## the stack

- runtime + package manager: **Bun** (`bun`, `bunx` — not npm/pnpm)
- framework: **TanStack Start** (Vite + React + SSR, type-safe routing)
- language: **TypeScript**, `strict: true`
- styling: **Tailwind v4** (CSS-first `@theme`, no config file)
- ORM + DB: **Drizzle**, schema-first. DB: postgres or sqlite
- auth: **BetterAuth**
- validation: **Zod** (input, env, API boundaries)
- client data: **TanStack Query** (when loaders aren't enough)
- forms: **TanStack Form** or **react-hook-form** + Zod
- email: **Resend** + **react-email**
- payments: **Stripe** (hosted Checkout)
- lint + format: **Biome** (one binary, replaces ESLint + Prettier)
- tests: **bun test** (unit + components) + **Playwright** (e2e)

**test setup** — three things needed:

```toml
# bunfig.toml
[test]
preload = ["./src/test/setup.ts"]
root = "./src"   # keeps bun from picking up e2e/ playwright files
```

```ts
// src/test/setup.ts
import { GlobalRegistrator } from "@happy-dom/global-registrator"
GlobalRegistrator.register()
;(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true
```

```ts
// playwright.config.ts
export default defineConfig({
  testDir: "./e2e",
  use: { baseURL: "http://localhost:3001" },
  webServer: {
    command: "vite dev",
    url: "http://localhost:3001",
    env: { PORT: "3001" },   // avoid clashing with main app on 3000
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
})
```

deps: `@happy-dom/global-registrator`, `@testing-library/react`, `@testing-library/user-event`, `@playwright/test`

what `bun test` can cover: render output, class names, user events, conditional rendering, prop logic.
what it **can't**: real CSS (tailwind classes are just strings), layout/geometry, animations, browser APIs.
use Playwright for those.
- deploy (options):
  - **Vercel** — zero-config, good for hackathons/prototyping. Fluid compute ON for faster DB connection.
  - **Railway** — long-running process with Bun server if self-hosting
- lightweight server (no SSR needed): **Hono** + Bun — great for CLI tools, APIs, local apps

other good libs:
- clsx
- cva (`class-variance-authority`) — type-safe component variants, pairs well with shadcn
- @number-flow/react — animated number transitions, great for dashboards/counters
- @blossom-carousel/react
- @instantdb
- nanostores (atoms) / **Zustand** (more complex shared state)
- colord
- sugar-high
- use-sound (sounds, sfx, music)
- hooks: react-use, usehooks-ts

for AI-enabled projects: **Vercel AI SDK** (`@ai-sdk/react`) — multi-provider, streaming, hooks out of the box

default rule for anything not listed: pick the option with the best docs and the most boring reputation, then add it here.

## folder structure

convention from production projects:

```
src/
├── routes/           # file-based routes (TanStack Start)
│   └── _authed/      # _ prefix = layout group, no URL segment added
├── api/              # server functions — one file per domain, NOT per route
├── components/
│   └── ui/           # primitives only; feature components live near their route
├── db/
│   ├── schema.ts     # all drizzle tables + relations in one file
│   └── index.ts      # db client, exported as `db`
├── lib/              # auth setup, shared helpers, constants
└── styles.css        # tailwind v4 @import + @theme tokens
```

server functions belong in `/api/`, grouped by domain:

```ts
// src/api/widgets.ts
export const getWidgets = createServerFn({ method: 'GET' })
  .handler(async () => {
    await requireAuth()  // always first in protected fns
    return db.select().from(widgets)
  })
```

`requireAuth` helper (put in lib/auth.ts, call at top of every protected fn):

```ts
async function requireAuth() {
  const session = await auth.api.getSession({ headers: getHeaders() })
  if (!session) throw redirect({ to: '/login' })
  return session
}
```

**no abstraction layer for queries** — write drizzle inline in server functions. extract only when the same query appears 3+ times.

## state management patterns

- **loaders + `Route.useLoaderData()`** — server state, runs before render, no waterfall, auth redirects before paint. default to this.
- **TanStack Query** — client mutations, polling, or data that changes after the initial load
- **Zustand** — ephemeral UI state (sidebar open, draft text). use `localStorage` persistence for settings that survive refresh.
- don't mix: loader data doesn't need to go into a store. keep it in the route.

real-time / websocket pattern (when needed):
- one singleton WS connection app-wide (not per-component)
- each frame tagged with entity id → routed to the correct query cache via `queryClient.setQueryData`
- optimistic: write to cache immediately with a temp id, server broadcasts real id, patch in place

## dev + agent tooling

UI for managing agents: **agentation.dev**

CLIs worth having installed globally:
- `railway` — deploy/manage Railway services
- `vercel` — deploy/manage Vercel projects, pull env vars locally (`vercel env pull`)
- `wrangler` — Cloudflare Workers/R2/KV
- `gh` — GitHub PRs, issues, CI from the terminal

MCP servers (configure in Claude/cursor):
- **context7** — up-to-date library docs on demand (critical for fast-moving libs like TanStack)
- **hugeicons** — search + insert icons by name
- **paper** — UI prototyping canvas
- **stripe** — query customers, subscriptions, events without opening the dashboard
- **resend** — check email delivery, logs, bounce rates

## UI components
all optional.
- shadcn/ui (prefer Radix primitives)
- icons (pick one): lucide / tabler / hugeicons (needs license, for bigger projects)
- animations: **motion** (always)

## tanstack start

*(verified against current docs, Jun 2026)*

**Data loading — use loaders / `beforeLoad`, not `useEffect`.** Runs on the server, data is there
on first render, auth redirects happen before paint.

```ts
export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    const session = await getSession()
    if (!session) throw redirect({ to: '/' })
  },
  loader: async () => ({ items: await getItems() }),
  component: Dashboard,
})
// inside Dashboard: const { items } = Route.useLoaderData()
```

**Server logic — `createServerFn` from `@tanstack/react-start`.** Type-safe RPC; DB/secrets/fs live
here. Shareable between loaders and client handlers.

```ts
import { createServerFn } from '@tanstack/react-start'

export const getItems = createServerFn({ method: 'GET' }).handler(async () => {
  return db.select().from(items)   // server-only — never ships to the client
})
```

**API routes (called from outside the app) — `server.handlers` on `createFileRoute`.** Not server
functions; use these for webhooks, OAuth metadata, third-party callbacks.

```ts
export const Route = createFileRoute('/api/thing')({
  server: {
    handlers: {
      GET:  async ({ request }) => Response.json({ ok: true }),
      POST: async ({ request }) => { /* ... */ },
    },
  },
})
```

## deploy

- **Vercel**: zero-config. Nitro detects Vercel and applies the `vercel` preset automatically — no
  target setting. Every PR gets a preview URL. `vite.config.ts` plugins:
  `tanstackStart()`, `nitro()`, `viteReact()`.
- **Self-host on Bun**: Nitro produces a server build you run under Bun (Fly/Railway/VPS). Use when
  you need WebSockets/SSE, a real filesystem, or no cold starts.

## things to pay attention to

footguns that have actually cost time:

- **`createAPIFileRoute` does not exist.** It's in old blog posts. Use `server.handlers` (above). A
  route file using it silently never registers and requests fall through to the HTML shell.
- **Keep server-only imports out of files that render a component.** Cross the boundary via
  `createServerFn` / a server-only module — otherwise server libs leak into the client bundle
  (`Buffer is not defined`, etc.). Dynamic `import()` inside a loader does *not* fix it; moving the
  code to its own module does.
- **New/moved routes 404?** The generated route tree is stale — let the dev server regenerate it (or
  run the route-gen step) and confirm the route is in `routeTree.gen.ts`.
- **Drizzle: pick `push` or `migrate` per DB and stick to it.** `push` = fast dev, no history;
  `generate`+`migrate` = real history. Mixing them forces hand-stamping the migrations ledger later.
- **Vercel env vars:** set them in the dashboard when you add them locally. The classic prod-only
  500 is an env var that only exists in `.env`.
- **BetterAuth cookie field is `defaultCookieAttributes`** (a wrong key is silently ignored). For
  embedded/cross-site auth: `sameSite:'none'`, `secure:true`, CORS reflecting the Origin. Avoid
  `partitioned:true` unless you specifically want per-site cookie isolation.
- **server function isolation**: `createServerFn` handlers can't share a module boundary with component files. put DB, auth, and external calls in `/api/` or `/lib/` files that have zero client-side imports. if you get `Buffer is not defined` or `fs` errors in the browser, a server-only module leaked into the client bundle — moving it to its own file fixes it (dynamic `import()` inside a loader does NOT fix it).
- **fire-and-forget after response** (`void (async () => { ... })()`): works on long-lived servers (Railway, fly.io, VPS). on Vercel (serverless), the function exits immediately after the response is sent — use a background job, queue, or a second serverless fn instead.
- **BetterAuth + TanStack Start**: `tanstackStartCookies()` can break Nitro builds — fall back to manual session handling via `getHeaders()` if you hit it.
- **nitro `latest` is often a beta that requires vite 8** while TanStack Start still runs on vite 7. Pin nitro to a specific alpha/stable that matches your vite version (e.g. `3.0.1-alpha.2` for vite 7). Check meta-ficus lockfile for a known-good combo.

## project-specific

_(domain model, routes, env vars, quirks — fill in per project)_
