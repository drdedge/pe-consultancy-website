# How to Add Images to the PE Consultancy Website

## Image Folder Structure

The project now has a well-organized image folder structure:

```
src/assets/images/
├── common/          # Shared images (logo, favicon)
├── home/            # Home page images
│   └── services/    # Service-related images
├── about/           # About page images
│   └── team/        # Team member photos
└── case-studies/    # Project screenshots
    ├── project-1/
    └── project-2/
```

## Adding Images - Step by Step

### 1. Add Team Member Photos

1. Save team photos in `src/assets/images/about/team/`
2. Name them consistently (e.g., `david-edgeley.jpg`)
3. Update `src/data/team.js`:

```javascript
{
  id: 'david-edgeley',
  name: 'David Edgeley',
  photo: '/src/assets/images/about/team/david-edgeley.jpg', // Update this line
  // ... rest of the data
}
```

### 2. Add Service Icons/Images

1. Save service images in `src/assets/images/home/services/`
2. Update `src/data/services.js`:

```javascript
{
  title: "AI-Powered Solutions",
  icon: "🤖", // Replace with: icon: '/src/assets/images/home/services/ai-solutions.svg'
  // ... rest of the data
}
```

### 3. Add Case Study Screenshots

1. Create folders for each project in `src/assets/images/case-studies/`
2. Add screenshots to respective folders
3. Update `src/data/portfolio.js` to include image property:

```javascript
{
  impact: "90% Reduction in Meeting Documentation Time",
  image: '/src/assets/images/case-studies/project-1/dashboard.jpg', // Add this
  // ... rest of the data
}
```

### 4. Add Hero Background Images

1. Save hero images in appropriate folders
2. Use them in components:

```javascript
// In Home.jsx
<Hero 
  title="..."
  backgroundImage="/src/assets/images/home/hero-bg.jpg"
  className="with-overlay"
/>
```

## Image Guidelines

- **Format**: Use WebP for photos, SVG for icons, PNG for transparency
- **Size**: Optimize images before adding (< 200KB for web images)
- **Dimensions**:
  - Team photos: 400x400px (square)
  - Hero images: 1920x1080px
  - Service icons: 64x64px or SVG
  - Case study screenshots: 1200x800px

## Component Updates Needed

After adding images, update the respective components:

1. **CaseStudies.jsx** - Add image display in portfolio cards
2. **Services.jsx** - Replace emoji icons with image icons
3. **Team.jsx** - Already set up to display photos when available

## Example: Adding a Team Photo

1. Add photo: `src/assets/images/about/team/john-doe.jpg`
2. Update `src/data/team.js`:
```javascript
photo: '/src/assets/images/about/team/john-doe.jpg'
```
3. The image will automatically display in the Team component

## Optimization Tips

- Use tools like TinyPNG or Squoosh to compress images
- Consider using responsive images with different sizes
- Lazy load images for better performance
- Use CDN for production deployment