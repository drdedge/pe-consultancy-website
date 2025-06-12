# PE Consultancy Website

This project contains a simple React based website for a private equity analytics consultancy.

## Development

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` by default.

## Build

Create a production build with:

```bash
npm run build
```

The static files will be generated in the `dist/` folder.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.

### Setup Steps

1. Push this repository to GitHub.
2. Enable GitHub Pages in the repository settings, selecting the `gh-pages` branch.
3. Ensure GitHub Actions are enabled for the repository.
4. Push any commit to `main` and the workflow will build and publish the `dist/` folder.
5. Your site will be available at `https://drdedge.github.io/<repository-name>/`.

If the repository name changes, update the `base` option in `vite.config.js` so that asset paths work correctly on GitHub Pages.
