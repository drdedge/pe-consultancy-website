# Development Guide

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/drdedge/pe-consultancy-website.git
cd pe-consultancy-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

## Project Architecture

### Component Structure

Components follow this pattern:
```
components/
├── ComponentName.jsx    # React component
└── ComponentName.css    # Component styles
```

### Data Flow

1. **Data Files** → Define content in `src/data/`
2. **Components** → Import and render data
3. **Pages** → Compose components
4. **App** → Handle routing between pages

### Routing

Routes are defined in `src/App.jsx`:
- `/` → Home page
- `/about` → About page

## Development Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Install new dependencies
npm install package-name

# Install with legacy peer deps (if needed)
npm install --legacy-peer-deps
```

## Code Style Guidelines

### React Components

```javascript
// Functional component with props
export default function ComponentName({ prop1, prop2 }) {
  return (
    <div className="component-name">
      {/* Component content */}
    </div>
  );
}
```

### CSS Organization

```css
/* Component container */
.component-name {
  /* Layout properties first */
  display: flex;
  flex-direction: column;
  
  /* Spacing */
  padding: 2rem;
  margin: 0 auto;
  
  /* Visual properties */
  background: white;
  border-radius: 8px;
}

/* Child elements */
.component-name__title {
  font-size: 2rem;
  color: var(--primary-color);
}
```

### File Naming

- Components: `PascalCase.jsx` (e.g., `TeamMember.jsx`)
- Styles: `PascalCase.css` (e.g., `TeamMember.css`)
- Data files: `camelCase.js` (e.g., `teamData.js`)
- Images: `kebab-case.jpg` (e.g., `john-smith.jpg`)

## Adding New Features

### Creating a New Component

1. Create component file: `src/components/NewComponent.jsx`
2. Create styles file: `src/components/NewComponent.css`
3. Import and use in relevant page

### Adding a New Page

1. Create page component: `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Update navigation in `Navbar.jsx`

### Working with Images

```javascript
// Direct import for component use
import logo from '../assets/images/common/logo.png';

// Path reference in data files
photo: '/src/assets/images/about/team/john-doe.jpg'
```

## State Management

Currently using React's built-in state. For component state:

```javascript
import { useState } from 'react';

function Component() {
  const [state, setState] = useState(initialValue);
  // ...
}
```

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Implement lazy loading for images below the fold
   - Compress all images before adding

2. **Code Splitting**
   - Vite automatically handles code splitting
   - Consider dynamic imports for heavy components

3. **CSS Optimization**
   - Use CSS custom properties for theming
   - Minimize use of complex selectors

## Troubleshooting

### Common Issues

1. **Dependency conflicts**
   ```bash
   # Use legacy peer deps flag
   npm install --legacy-peer-deps
   ```

2. **Build failures**
   ```bash
   # Clear cache and rebuild
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Routing issues on GitHub Pages**
   - The build script creates `404.html` automatically
   - Ensure `base` in `vite.config.js` matches repository name

### Development Tips

1. Use browser DevTools for debugging
2. Check console for errors
3. Use React Developer Tools extension
4. Test on multiple browsers and devices

## Version Control

### Commit Guidelines

```bash
# Feature additions
git commit -m "Add: New team member profile"

# Updates
git commit -m "Update: Service descriptions"

# Fixes
git commit -m "Fix: Mobile navigation toggle"

# Refactoring
git commit -m "Refactor: Simplify Hero component"
```

### Branch Strategy

- `main` - Production branch (auto-deploys)
- Feature branches - For new features
- Hotfix branches - For urgent fixes

## Deployment

### Automatic Deployment

Pushing to `main` triggers deployment via GitHub Actions:

1. Builds the project
2. Deploys to `gh-pages` branch
3. Available at: https://drdedge.github.io/pe-consultancy-website/

### Manual Deployment

If needed:
```bash
npm run build
# Manually upload dist/ contents to hosting
```

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [GitHub Pages Documentation](https://pages.github.com)