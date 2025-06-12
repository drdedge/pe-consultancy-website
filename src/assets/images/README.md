# Image Assets Directory

This directory contains all image assets for the PE Consultancy website.

## Structure

- `common/` - Shared images used across multiple pages (logo, favicon, etc.)
- `home/` - Images specific to the home page
  - `services/` - Service-related images
- `about/` - Images for the about page
  - `team/` - Team member profile photos
- `case-studies/` - Project screenshots and case study images
  - `project-1/`, `project-2/`, etc. - Individual project folders

## Image Guidelines

1. **Formats**: Use WebP for photos, SVG for icons/logos, PNG for images requiring transparency
2. **Naming**: Use descriptive, kebab-case names (e.g., `david-edgeley-profile.jpg`)
3. **Optimization**: Compress images before adding (target < 200KB for web images)
4. **Dimensions**: 
   - Team photos: 400x400px (square)
   - Hero images: 1920x1080px
   - Service icons: 64x64px or SVG
   - Case study screenshots: 1200x800px

## Usage Example

```jsx
import teamPhoto from '@/assets/images/about/team/david-edgeley.jpg';

<img src={teamPhoto} alt="David Edgeley" />
```