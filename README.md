# Aigora 11ty Template

A sophisticated Eleventy starter template implementing the Aigora design system with Tailwind CSS and DaisyUI, now with a fully functional and accurate light/dark theme toggle.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aigorahub/aigora-11ty)

## Features

- 🎨 Complete Aigora design system implementation
- 💡 **Light Theme (Default)**:
    - Primary: Sage (#5FB96A)
    - Secondary: Lavender (#A986C4)
    - Background: Fog (#EDEDED)
    - Text: Dark Charcoal (#1E1E1E)
- 🌙 **Dark Theme**:
    - Primary: Sage (#5FB96A)
    - Secondary: Lavender (#A986C4)
    - Background: Deep Charcoal (#1A1A1A)
    - Text: Light Gray (#E0E0E0)
- ✨ Theme toggle button with localStorage persistence
- 📱 Fully responsive design
- ⚡ Optimized performance with Eleventy
- 🎯 Tailwind CSS with custom utilities
- 💅 DaisyUI components styled with Aigora colors (via CSS custom properties)
- 🖋️ Premium typography with Cormorant SC headers
- 🌠 Advanced shadow system and animations
- ♿ Accessibility-focused with proper focus states

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aigorahub/aigora-11ty.git
cd aigora-11ty

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run build:css` - Build CSS only
- `npm run build:11ty` - Build Eleventy only

## Design System

The Aigora design system is implemented primarily through CSS custom properties defined in `src/css/style.css`. This allows for easy theme switching and ensures accurate color representation.

### Core Colors

**Light Theme (default `aigora`):**
- Page Background (`--color-base-100`): Fog (#EDEDED)
- Card Background (`--color-base-200`): White (#FFFFFF)
- Borders (`--color-base-300`): Light Gray (#E0E0E0)
- Primary Text (`--color-base-content`, `--color-text-primary`): Dark Charcoal (#1E1E1E)
- Sage Accent (`--color-primary`, `--color-accent`): Modern Sage (#5FB96A)
- Lavender Accent (`--color-secondary`): Infra Lavender (#A986C4)
- Meta Text (`--color-text-secondary`): Cool Gray (#9A9A9A)
- Error: Red (#DB2955)

**Dark Theme (`aigora-dark`):**
- Page Background (`--color-base-100`): Deep Charcoal (#1A1A1A)
- Card Background (`--color-base-200`): Modern Slate (#2C2C2C)
- Borders (`--color-base-300`): Slightly Lighter Gray (#3A3A3A)
- Primary Text (`--color-base-content`, `--color-text-primary`): Light Gray (#E0E0E0)
- Sage Accent (`--color-primary`, `--color-accent`): Modern Sage (#5FB96A)
- Lavender Accent (`--color-secondary`): Infra Lavender (#A986C4)
- Meta Text (`--color-text-secondary`): Softer Gray (#C8C8C8)
- Tertiary Text (`--color-text-tertiary`): Mid Gray (#888888)

### Typography

- **Headers**: Cormorant SC (serif)
- **Body**: Roboto (sans-serif)
- **Meta**: Roboto Condensed

### Components

The template includes pre-styled components:
- Buttons (primary, secondary, outline, danger)
- Cards with hover effects
- Form elements with focus states
- Navigation header
- Footer

### Custom Utilities

- `.shadow-aigora` - Standard layered shadow
- `.hover-lift` - Lift effect on hover
- `.animate-fadeInUp` - Fade in animation
- `.focus-glow-sage` - Sage focus glow
- `.squircle` - Squircle shape utility

## Project Structure

```
├── _includes/          # Layout templates
├── src/               # Source files
│   ├── css/           # Tailwind CSS input
│   └── index.njk      # Main page
├── assets/            # Static assets
├── _site/             # Build output (git ignored)
└── .eleventy.js       # Eleventy configuration
```

## Customization

### Adding Pages

Create new `.njk` files in the `src` directory:

```njk
---
layout: layout.njk
title: Your Page Title
---

<h1 class="text-4xl font-header text-darkText">Your Content</h1>
```

### Extending Styles

Add custom styles in `src/css/style.css`:

```css
@layer utilities {
  .your-custom-class {
    /* Your styles */
  }
}
```

### Modifying Theme

Colors are defined as CSS custom properties in `src/css/style.css` within the `:root, [data-theme="aigora"]` and `[data-theme="aigora-dark"]` selectors.
Tailwind utilities like `bg-primary`, `text-secondary`, etc., will automatically use these theme-dependent variables.
The theme toggle functionality is in `_includes/layout.njk`.

DaisyUI theming is disabled (`daisyui: { themes: false }` in `tailwind.config.js`) to allow for precise control using custom CSS. However, DaisyUI's utility classes and styled components are still available and will adapt to the custom CSS variables.

## Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `_site`

### Build Output

The production build creates optimized files in `_site/`:
- Minified CSS with only used utilities
- Optimized HTML
- Copied assets

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use for any project.

## Support

For questions or issues, please contact the Aigora team.