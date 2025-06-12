# Project Overview

## About This Project

This is a React-based single page application for a private equity analytics consultancy website. The consultancy specializes in providing data-driven insights and analytical solutions to private equity firms and their portfolio companies.

## Key Features

- **Content-Driven Architecture**: All content is separated from code in data files for easy updates
- **Responsive Design**: Mobile-first approach with clean, professional styling
- **Automated Deployment**: GitHub Actions workflow for seamless deployment to GitHub Pages
- **Modular Components**: Reusable React components for consistent UI/UX

## Technology Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 4.4
- **Routing**: React Router v6
- **Styling**: CSS Modules with component-specific styles
- **Deployment**: GitHub Pages with automated CI/CD

## Project Structure

```
pe-consultancy-website/
├── docs/                    # Project documentation
├── src/
│   ├── assets/images/      # Organized image assets
│   ├── components/         # Reusable React components
│   ├── data/              # Content data files (team, services, portfolio)
│   ├── pages/             # Page components (Home, About)
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .github/workflows/      # CI/CD configuration
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── index.html             # HTML entry point
```

## Development Workflow

1. **Local Development**: Run `npm run dev` to start the development server
2. **Content Updates**: Edit files in `src/data/` to update content
3. **Component Changes**: Modify components in `src/components/`
4. **Testing**: Preview changes locally before committing
5. **Deployment**: Push to `main` branch to trigger automatic deployment

## Deployment

The site is automatically deployed to GitHub Pages at:
`https://drdedge.github.io/pe-consultancy-website/`

Deployment is triggered by any push to the `main` branch through GitHub Actions.