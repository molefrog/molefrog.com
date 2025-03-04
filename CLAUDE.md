# Development Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap (automatically runs after build)

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