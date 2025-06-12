# PE Consultancy Website

A modern React-based website for a private equity analytics consultancy, featuring modular components and easy content management.

*Updated - 2024-12-06*

## 🚀 Quick Start

1. Install dependencies
```bash
npm install
```

2. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/
│   └── images/         # Organized image assets
│       ├── common/     # Shared images (logo, favicon)
│       ├── home/       # Home page images
│       ├── about/      # About page images
│       └── case-studies/ # Project screenshots
├── components/         # Reusable React components
│   ├── Hero.jsx       # Hero section with customizable content
│   ├── Services.jsx   # Services grid
│   ├── CaseStudies.jsx # Portfolio carousel
│   ├── Team.jsx       # Team, approach, and engagement models
│   ├── Footer.jsx     # Site footer
│   └── Navbar.jsx     # Navigation bar
├── data/              # Content data files
│   ├── portfolio.js   # Case studies and projects
│   ├── services.js    # Service offerings
│   └── team.js        # Team members and company info
└── pages/             # Page components
    ├── Home.jsx
    ├── About.jsx
    └── Contact.jsx
```

## 📝 Content Management

### Updating Content

All content is stored in easily editable JavaScript files in the `src/data/` directory:

- **Team Members**: Edit `src/data/team.js`
- **Services**: Edit `src/data/services.js`
- **Case Studies**: Edit `src/data/portfolio.js`

### Adding Images

See [HOW_TO_ADD_IMAGES.md](./HOW_TO_ADD_IMAGES.md) for detailed instructions on adding:
- Team photos
- Service icons
- Case study screenshots
- Hero backgrounds

## 🛠️ Build & Deployment

### Production Build
```bash
npm run build
```

Static files will be generated in the `dist/` folder.

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Setup:**
1. Push repository to GitHub
2. Enable GitHub Pages (Settings → Pages → Source: `gh-pages` branch)
3. Push to `main` branch to trigger deployment
4. Access at: `https://[username].github.io/[repository-name]/`

**Note**: 
- If you rename the repository, update the `base` option in `vite.config.js`
- The build process automatically creates a `404.html` file to handle client-side routing on GitHub Pages

## 🔧 Development Notes

### Technologies Used
- React 18.2
- Vite 4.4 (build tool)
- React Router v6 (routing)
- CSS Modules (styling)

### Key Features
- ✅ Modular component architecture
- ✅ Separated content from code
- ✅ Responsive design
- ✅ Image-ready folder structure
- ✅ Automated GitHub Pages deployment
- ✅ Easy content updates via data files

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📋 TODO

- [ ] Add actual team photos
- [ ] Add service icons/images
- [ ] Add case study screenshots
- [ ] Implement contact form functionality
- [ ] Add SEO metadata
- [ ] Add analytics tracking

## 🤝 Contributing

1. Make changes to components or data files
2. Test locally with `npm run dev`
3. Commit changes
4. Push to `main` branch for automatic deployment
