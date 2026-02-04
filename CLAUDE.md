# Development Commands
- `bun dev` - Start dev server
- `bun run build` - Build for production
- `bun start` - Run production build
- `bun lint` - Run ESLint
- `bun run postbuild` - Generate sitemap (automatically runs after build)

**IMPORTANT: Always use `bun` instead of `npm` or `yarn`.**

**DO NOT run `bun run build` - it breaks the dev server. Use `bun dev` for development.**

# Testing
No specific testing commands found in package.json. If tests are added later, commands should be added here.

# Code Style Guidelines
- **TypeScript**: Use strict type checking (`strict: true`, `strictNullChecks: true`)
- **Imports**: Group imports by external libraries first, then local components, then styles
- **Component Structure**: 
  - React functional components with named exports
  - Types defined near component usage
  - Props destructured in function parameters
- **Naming**:
  - Components: PascalCase 
  - Files: Component files match component name
  - CSS modules: camelCase for classes
- **State Management**: Mix of React hooks, Jotai atoms, and nanostores
- **Formatting**: 2-space indentation
- **Error Handling**: Use early returns with conditionals

# Styling: Tailwind + Design System Tokens

We're gradually migrating from BEM CSS to Tailwind. Inter is the default body font (`--font-sans`).

## Design System Tokens (`--ds-*`)
Defined in `@theme` block in `/styles/index.css`. Use these for consistency:

**Fonts** (use as `font-ds-*`):
- `font-ds-mono` - Berkeley Mono
- `font-ds-serif` - Discordia
- `font-ds-segm7` / `font-ds-segm14` - DSEG display fonts

**Text sizes** (use as `text-ds-*`):
- `text-ds-xs` (13px), `text-ds-sm` (15px), `text-ds-base` (17px), `text-ds-md` (18px)
- Prefer standard Tailwind sizes (`text-sm`, `text-base`) when close enough

**Colors** (use as `bg-ds-*`, `text-ds-*`, `border-ds-*`):
- Gray: `ds-gray-50` through `ds-gray-900` (includes `ds-gray-150`)
- Accent: `ds-accent-200` through `ds-accent-700`, `ds-accent`

## Guidelines
- Prefer Tailwind's standard sizes/spacing over arbitrary values `[...]`
- Use DS color tokens for consistency with existing palette
- Mobile-first: base styles for mobile, `sm:` (640px), `md:` (768px), `lg:` (1024px) for larger