<div align="center">

# Royal AI Platform (Monorepo Snapshot)

Modern React + Vite (TS) front‑end, consent & legal pages, dynamic GitHub developer hub, and containerized stack (frontend + placeholder backend + MongoDB + Redis + nginx) ready for iterative build‑out.

</div>

## Stack Overview
Frontend: React 19, TypeScript, Vite 6, Tailwind CSS 4, Radix primitives, Phosphor icons, Framer Motion
Backend (placeholder): Express minimal health/root service (replace with real API)
State/Data: (future) TanStack Query already included
Infrastructure: Docker / docker-compose (dev override + production build), multi‑stage Node→nginx build
Legal & Trust: Privacy Policy, Terms & Conditions, Cookie Policy, Consent banner with granular preferences (necessary / analytics / marketing)
Developer Experience: Dynamic repo enrichment via GitHub API (cached), ambient styling extracted to CSS utilities

## Quick Start (Docker Desktop)
Development (hot reload + full stack):
```powershell
docker compose build onelastai-frontend
docker compose up
# Frontend dev server: http://localhost:5173
# Placeholder backend: http://localhost:3000/
```
Production static preview (nginx build):
```powershell
docker compose down
docker compose up -d --build onelastai-frontend
# Visit http://localhost
```

## Cookie & Consent System
Component: `CookieConsent` (stored under localStorage key `cookieConsent`)
Event hooks:
- `open-cookie-consent` (reopen UI)
- `cookie-consent-updated` (broadcast updated prefs to listeners)
Loader: `ConsentScripts` conditionally injects analytics/marketing placeholders; swap with real vendor scripts.

## Developers Page Enrichment
Fetches repo metadata (stars, forks, topics) from GitHub unauthenticated; sessionStorage cache key: `devhub_meta_v1`.
If rate limited, static curated list remains with notice.

## Backend Placeholder
Path: `backend/`
Endpoints:
- `/health` JSON service status
- `/` identifies placeholder and hints replacement path
Purpose: Allows docker-compose to build/run full stack until real API implementation.

## Project Scripts
`npm run dev` - Vite dev server (when not using Docker)
`npm run build` - TypeScript project refs + production bundle
`npm run preview` - Preview built dist
`npm run docker:build` / `docker:run` - Manual image build/run
`npm run docker:prod` - Compose production stack (replicated frontend) using `docker-compose.prod.yml`

## Image Notes
Dockerfile uses Node 20 Alpine builder installing all deps (dev + prod) for build, then nginx stage. Future optimization: separate deps caching & `npm prune --production` layer.

## Roadmap (Immediate)
1. Replace placeholder backend with real API (auth, memory, analytics)
2. Add integration proxy from frontend to backend (e.g., `/api/health`)
3. Add automated tests (consent logic, repo metadata caching, backend health)
4. Image slimming & security scan gating
5. CI pipeline (lint, build, test, docker build, vulnerability scan)

## License
Existing template assets originally MIT (GitHub Spark template). New code contributions follow MIT unless stated otherwise. Review `LICENSE` for details.

---
Generated README modernization replacing original Spark template placeholder.
