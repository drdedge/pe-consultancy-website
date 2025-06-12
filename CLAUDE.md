# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based single page application for a private equity analytics consultancy website. It uses Vite as the build tool and is deployed to GitHub Pages.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Create production build in dist/
npm run preview      # Preview production build locally
```

Note: The build script automatically creates a `404.html` file for GitHub Pages SPA routing support.

## Architecture

The application uses a content-driven architecture with separation of data from presentation:

- **Entry Point**: `src/main.jsx` sets up React Router and renders the App component
- **Routing**: `src/App.jsx` defines routes using React Router v6
  - `/` → Home page
  - `/about` → About page
- **Components**: Reusable UI components in `src/components/`
  - `Hero.jsx` - Configurable hero section with background image support
  - `Services.jsx` - Service grid displaying data from `data/services.js`
  - `CaseStudies.jsx` - Portfolio carousel using data from `data/portfolio.js`
  - `Team.jsx` - Team display with approach and engagement models from `data/team.js`
  - `Navbar.jsx` - Navigation component with routing links
  - `Footer.jsx` - Site footer with company information
- **Data Files**: Content is stored in `src/data/` for easy updates without touching component code
  - `team.js` - Team members, company approach, and engagement models
  - `services.js` - Service offerings with icons and descriptions
  - `portfolio.js` - Case studies and project outcomes
- **Images**: Organized structure in `src/assets/images/`
  - `common/` - Shared assets
  - `home/services/` - Service icons
  - `about/team/` - Team member photos
  - `case-studies/` - Project screenshots

## Key Configuration

- **Vite Config**: Base path is set to `/pe-consultancy-website/` for GitHub Pages deployment
- **No testing framework** is currently configured
- **No linting or formatting tools** are configured
- **Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to main branch
  - Uses `--legacy-peer-deps` flag for npm install
  - Deployment URL: `https://drdedge.github.io/pe-consultancy-website/`

## Important Notes

- When changing the repository name, update the `base` option in `vite.config.js`
- All content updates should be made in `src/data/` files, not in components
- Image paths in data files should use the format: `/src/assets/images/...`
- The site handles client-side routing via the 404.html fallback for GitHub Pages