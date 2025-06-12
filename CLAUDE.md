# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based single page application for a private equity analytics consultancy website. It uses Vite as the build tool and is deployed to GitHub Pages.

## Commands

**Development:**
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
```

**Build & Preview:**
```bash
npm run build        # Create production build in dist/
npm run preview      # Preview production build locally
```

## Architecture

The application follows a standard React SPA structure with client-side routing:

- **Entry Point**: `src/main.jsx` sets up React Router and renders the App component
- **Routing**: `src/App.jsx` defines routes using React Router v6
  - `/` → Home page
  - `/about` → About page
  - `/contact` → Contact page
- **Components**: Reusable UI components in `src/components/`
  - `Navbar.jsx` - Navigation component with routing links
- **Pages**: Page components in `src/pages/` that represent full views
- **Styling**: Global styles in `src/index.css`, component-specific styles alongside components

## Key Configuration

- **Vite Config**: Base path is set to `/pe-consultancy-website/` for GitHub Pages deployment
- **No testing framework** is currently configured
- **No linting or formatting tools** are configured
- **Deployment**: GitHub Actions workflow automatically builds and deploys to GitHub Pages on push to main branch

## Important Notes

- When changing the repository name, update the `base` option in `vite.config.js`
- The site deploys to `https://drdedge.github.io/pe-consultancy-website/`
- Use `--legacy-peer-deps` flag if encountering npm dependency issues (as used in CI)