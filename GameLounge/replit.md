# GameHub - HTML5 Gaming Platform

## Overview

GameHub is a web-based gaming platform that allows users to discover and play HTML5 games directly in their browser. The application features a curated collection of games across various categories (Puzzle, Arcade, etc.) with an immersive, gaming-focused aesthetic inspired by platforms like Steam and Epic Games Store. Users can browse games, search by title/description/category, and play games embedded via iframes without any downloads or installations required.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Framework:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom gaming aesthetic with dark mode as primary theme
- Design system follows "New York" style variant with custom color palette optimized for gaming

**Component Architecture:**
- Functional components with React Hooks
- Separation of presentational components (`GameCard`, `SearchBar`, `LoadingSpinner`) from page-level components
- Shared UI components library in `client/src/components/ui/`
- Custom hooks for common functionality (`use-mobile`, `use-toast`)

**State Management:**
- TanStack Query for API data caching and synchronization
- Local React state for UI interactions (search, theme)
- Context API for theme management (ThemeProvider)
- No global state management library (Redux/Zustand) - keeping it simple

**Routing:**
- `/` - Home page with game grid and search
- `/game/:id` - Individual game page with embedded iframe
- 404 page for unmatched routes

**Design System:**
- Custom CSS variables for theming (light/dark mode support)
- Gaming-focused color palette with vibrant purple primary and electric cyan accents
- Typography: Inter for body text, Orbitron for gaming aesthetic headers
- Responsive grid system for game cards (1-4 columns based on viewport)

### Backend Architecture

**Technology Stack:**
- Node.js with Express.js for HTTP server
- TypeScript throughout the backend for type safety
- ESM modules (not CommonJS)

**API Design:**
- RESTful API endpoints with JSON responses
- `GET /api/games` - Returns all games
- `GET /api/games/:id` - Returns single game by ID
- Minimal error handling with appropriate HTTP status codes

**Data Layer:**
- Currently using in-memory storage (`MemStorage` class) for game data
- Interface-based storage abstraction (`IStorage`) allows future database integration
- Drizzle ORM configured but not actively used (prepared for PostgreSQL migration)

**Application Structure:**
- `server/index.ts` - Express app setup, middleware, logging
- `server/routes.ts` - Route registration and HTTP server creation
- `server/storage.ts` - Data access layer with in-memory implementation
- `server/vite.ts` - Vite integration for development mode

**Static Assets:**
- `/attached_assets` directory served statically for game thumbnails and images
- Vite handles client bundle serving in development
- Production builds output to `dist/public`

### Data Storage Solutions

**Current Implementation:**
- In-memory Map-based storage for games
- Initial game data hardcoded in `MemStorage` constructor
- Game schema defined with Zod for runtime validation

**Prepared for Migration:**
- Drizzle ORM configured with PostgreSQL dialect
- Neon serverless PostgreSQL driver installed
- Database schema location: `shared/schema.ts`
- Migration output directory: `./migrations`
- Connection via `DATABASE_URL` environment variable

**Data Model:**
```typescript
Game {
  id: string
  title: string
  description: string
  category: string
  thumbnailUrl: string
  iframeUrl: string
}
```

### Authentication and Authorization

**Current State:**
- No authentication or authorization implemented
- All endpoints are public
- No user accounts or session management

**Session Infrastructure Present:**
- `connect-pg-simple` package installed (for PostgreSQL session storage)
- Cookie-based sessions can be added when user features are needed

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI primitives for accessible, unstyled components (accordions, dialogs, dropdowns, tooltips, etc.)
- Lucide React for icon components
- cmdk for command palette functionality
- embla-carousel-react for carousel components
- Tailwind CSS for styling with PostCSS processing

**Data Fetching & Forms:**
- TanStack Query v5 for API data management
- React Hook Form with Zod resolver for form validation
- date-fns for date manipulation

**Development Tools:**
- Vite with React plugin and runtime error overlay
- Replit-specific plugins (cartographer, dev banner) for enhanced development experience
- TypeScript for type checking
- esbuild for production server bundling

**Database & ORM (Configured but Inactive):**
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connections
- drizzle-zod for automatic schema-to-Zod conversions

**Game Embedding:**
- External game URLs embedded via iframes
- Current games point to third-party hosts (play2048.co, freeasteroids.org, etc.)
- No game hosting on the platform itself

**Asset Management:**
- Local image storage in `attached_assets/generated_images/`
- No CDN or cloud storage integration
- Images served directly via Express static middleware