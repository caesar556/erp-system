# ERP App

## Overview
A Next.js 16 application bootstrapped with create-next-app. Uses React 19, TypeScript, and Tailwind CSS 4.

## Project Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 via PostCSS
- **Package Manager**: npm (originally pnpm, migrated for Replit compatibility)
- **Node.js**: v20

## Project Structure
```
app/           - Next.js App Router pages and layouts
  layout.tsx   - Root layout
  page.tsx     - Home page
  globals.css  - Global styles
public/        - Static assets
```

## Development
- Dev server: `npx next dev -H 0.0.0.0 -p 5000`
- Build: `npm run build`
- Production: `npm run start`

## Deployment
- Target: Autoscale
- Build: `npm run build`
- Run: `npm run start -- -H 0.0.0.0 -p 5000`

## Recent Changes
- 2026-02-24: Initial Replit setup. Configured Next.js allowedDevOrigins for proxy compatibility. Set up workflow on port 5000.
