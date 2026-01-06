# The Copy Monorepo

## Overview
This is a Next.js monorepo for "النسخة" (The Copy) - a Drama Analysis Platform with video text mask and cards scanner features.

## Project Structure
- `frontend/` - Next.js 16.1.1 application with React 19, Tailwind CSS, GSAP animations
- `backend/` - Express.js API server (not currently deployed)
- `docs/` - Documentation files

## Development

### Running the Frontend
The frontend runs on port 5000 with the workflow "Next.js Frontend".
```bash
cd frontend && npm run dev
```

### Tech Stack
- **Frontend**: Next.js 16.1.1, React 19, Tailwind CSS 4, Framer Motion, GSAP, Three.js
- **Backend**: Express.js, Drizzle ORM, PostgreSQL/MongoDB
- **Languages**: TypeScript, Arabic RTL support

## Environment Variables
The application uses various environment variables for:
- Sentry monitoring
- OpenTelemetry tracing
- Firebase integration
- CDN configuration

## Recent Changes
- January 6, 2026: Editor Page AI Agent Integration Fix
  - Fixed GeminiService client-side instantiation error in AdvancedAgentsPopup component
  - Removed direct agent class imports (AnalysisAgent, CharacterDeepAnalyzerAgent, environment)
  - Migrated all AI operations to use fetch() calls to /api/editor API route
  - Both runAgentAnalysis and handleAgentAnalysis now use server-side API for agent execution
  - Agent configurations (AGENT_CONFIGS) now imported as data-only, no class instantiation
  - Server-side API route handles all Gemini AI operations securely
  - Editor page at /editor now loads without errors
  - Required env var: `GEMINI_API_KEY` (server-side only) for AI analysis features

- January 1, 2026: Brainstorm Pages Consolidation
  - Merged duplicate brainstorm pages: `/brainstorm` consolidated into `/brain-storm-ai`
  - Deleted old `/brainstorm` folder to eliminate code duplication
  - Created `/api/brainstorm` API route for server-side multi-agent debate operations
  - Updated all routing references (config, navigation, carousel, tests)
  - Brain-storm-ai page now exclusively handles all brainstorming functionality

- January 1, 2026: CineFit Pro Bug Fixes
  - Fixed @google/genai client bundling error by marking lib files with `server-only` import
  - Upgraded @react-three/fiber to v9 and @react-three/drei to v10 for React 19 compatibility
  - CineFit Pro (/new page) now fully functional
  - Server-side API route at /api/gemini handles all Gemini AI operations
  - Required env var: `GEMINI_API_KEY` (server-side only)

- December 30, 2025: CineFit Pro (Costume Director) Integration
  - Added `/new` page with CineFit Pro application for AI-powered costume design
  - Three-mode architecture: Home Hub, Costume Director (AI script analysis), Fitting Room (virtual try-on)
  - Gemini AI integration for design generation, garment asset creation, virtual fitting, and video stress tests
  - Physics simulation controls: lighting synthesis, fabric physics, pose/action estimation
  - A/B comparison mode for design variations
  - Full RTL Arabic support with professional film/TV terminology

- December 30, 2025: CineArchitect (Art Director) Integration
  - Added `/art-director` page with 7 components: Dashboard, Tools, Inspiration, Locations, Sets, Productivity, Documentation
  - Updated UI grid to link card "مهندس الديكور" (index 15) to the new page
  - Comprehensive RTL Arabic styling with custom CSS theme
  - Tab-based internal navigation for cinema production tools

- December 30, 2025: Initial Replit setup
  - Fixed pnpm version compatibility
  - Added allowedDevOrigins for Replit proxy support
  - Configured frontend workflow on port 5000
  - Set up autoscale deployment configuration
