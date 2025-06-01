---

**Essential Files and Information for Replicating the Aigora 11ty Template Style with an LLM**

To enable an LLM (e.g., Gemini 2.5 Pro) to create an 11ty site mirroring the style and functionality of the Aigora template, the following files and the information they contain are essential. The LLM should be instructed not just on the content of these files, but also on their interdependencies and the overall design philosophy they represent.

**I. Core Configuration & Build System:**

These files define the project's foundation, dependencies, and how it's built.

1.  **`package.json`**:
    *   **Purpose**: Defines project metadata, dependencies, and build scripts.
    *   **Essential Information for LLM**:
        *   **Key Dependencies**: `@11ty/eleventy` (static site generator), `tailwindcss` (CSS framework), `daisyui` (Tailwind component library), `postcss`, `autoprefixer` (CSS processing). *LLM must know these technologies are in use.*
        *   **Build Scripts**:
            *   `"build:css": "npx postcss src/css/style.css -o _site/assets/css/style.css"` (CSS compilation command).
            *   `"build:11ty": "eleventy"` (Site generation command).
            *   `"build": "npm run build:css && npm run build:11ty"` (Overall build orchestration).
        *   *LLM should understand this is how the project is compiled from source to a deployable site.*

2.  **`.eleventy.js`**:
    *   **Purpose**: Eleventy's main configuration file.
    *   **Essential Information for LLM**:
        *   **Directory Structure**: `input: "src"` (source pages), `includes: "../_includes"` (layouts/partials), `output: "_site"` (build destination). *Crucial for file organization.*
        *   **Asset Handling**: `eleventyConfig.addPassthroughCopy("public");` and `eleventyConfig.addPassthroughCopy("assets");`. *How static assets are managed.*
        *   **Development Watch Target**: `eleventyConfig.addWatchTarget("src/css/style.css");`.

3.  **`tailwind.config.js`**:
    *   **Purpose**: Configures Tailwind CSS and the custom Aigora design system tokens. **This is a cornerstone of the site's visual style.**
    *   **Essential Information for LLM**:
        *   **Content Scanning**: `content: ['./src/**/*.njk', './_includes/**/*.njk']`. *Tells Tailwind where to find class usage.*
        *   **Aigora Theme Definition (`theme.extend`)**:
            *   **Colors**: The exact hex codes for `aigora-sage`, `aigora-lavender`, `aigora-fog`, `aigora-charcoal`, `aigora-slate`, etc. *LLM must use these specific colors.*
            *   **Fonts**: `fontFamily: { header: ['"Cormorant SC"', 'serif'], body: ['Roboto', 'sans-serif'], meta: ['"Roboto Condensed"', 'sans-serif'] }`. *LLM must use these specific font stacks.*
            *   Other theme values: `lineHeight`, `borderRadius`, `spacing`, `maxWidth`.
        *   **DaisyUI Plugin Configuration**: `daisyui: { themes: false, base: false, styled: true, utils: true }`. *Key for LLM: DaisyUI components are used but are styled by the Aigora theme, not DaisyUI's built-in themes.*

4.  **`postcss.config.js`**:
    *   **Purpose**: Configures PostCSS for CSS processing.
    *   **Essential Information for LLM**:
        *   **Plugins**: `tailwindcss: {}`, `autoprefixer: {}`. *Explains how Tailwind directives are processed and browser prefixes are added.*

**II. Layout, Styling & Theming Implementation:**

These files define the visual appearance, the light/dark theme mechanism, and the overall page structure.

5.  **`_includes/layout.njk`**:
    *   **Purpose**: The main Nunjucks layout file; the skeleton for all pages.
    *   **Essential Information for LLM**:
        *   **Full HTML Structure**: Including `<!DOCTYPE html>`, `<head>`, `<body>`.
        *   **`data-theme` attribute**: `<html>` tag has `data-theme="aigora"` by default.
        *   **CSS Link**: `<link rel="stylesheet" href="/assets/css/style.css">`. *How compiled styles are applied.*
        *   **Theme Switching JavaScript**:
            *   The script in `<head>` that loads `theme` from `localStorage` and applies it to `document.documentElement`. *Essential for theme persistence and avoiding FOUC.*
            *   The script at the end of `<body>` that handles the theme toggle button (`#theme-toggle`), updates `data-theme` on `<html>`, and saves to `localStorage`. *Essential for user-interactive theme switching.*
        *   **Content Injection**: `{{ content | safe }}`. *Where individual page content goes.*
        *   **Default Body Classes**: `class='bg-base-100 text-base-content font-body leading-relaxed'` demonstrating use of theme-aware utility classes.

6.  **`src/css/style.css`**:
    *   **Purpose**: The main source CSS file where the Aigora design system's look and feel, including the dual-theme system, is implemented. **This is critically important for the visual style.**
    *   **Essential Information for LLM**:
        *   **Tailwind Directives**: `@tailwind base; @tailwind components; @tailwind utilities;`.
        *   **Font Imports**: `@import url(...)` for "Cormorant SC", "Roboto", "Roboto Condensed".
        *   **CSS Custom Properties for Theming (`@layer base`)**:
            *   Definitions for light theme (`:root, [data-theme="aigora"]`) with variables like `--color-primary: #5FB96A;`, `--color-base-100: #EDEDED;`, `--color-base-content: #1E1E1E;`, etc., for all Aigora colors.
            *   Definitions for dark theme (`[data-theme="aigora-dark"]`) with corresponding variables like `--color-base-100: #1A1A1A;`, `--color-base-content: #E0E0E0;`, etc.
            *   *LLM must understand this variable system is the core of the light/dark theme.*
        *   **Component Styling & Overrides (`@layer components`)**:
            *   How DaisyUI components (e.g., `.btn-primary`) are re-styled using these CSS custom properties (e.g., `background-color: var(--color-primary);`).
            *   Utility classes for theme-aware colors (e.g., `.bg-base-100 { background-color: var(--color-base-100); }`).
        *   **Custom Aigora Utilities (`@layer utilities`)**:
            *   Definitions for `text-meta`, `shadow-aigora`, `shadow-aigora-hover`, `focus-glow-sage`, `focus-glow-lavender`, `animate-fadeInUp`, `hover-lift`. *These create the unique Aigora visual flair.*

**III. Content Examples & Styling Application:**

These files show how to use the design system to build pages.

7.  **`src/index.njk` (and other `.njk` files like `src/about.njk`)**:
    *   **Purpose**: Example pages demonstrating the application of the layout and styling.
    *   **Essential Information for LLM**:
        *   **Nunjucks Front Matter**: `layout: layout.njk`, `title: "..."`.
        *   **HTML Structure**: How to structure content using semantic HTML.
        *   **Application of Styles**:
            *   Demonstrate widespread use of Tailwind utility classes for layout and fine-grained styling.
            *   Show how to use theme-aware classes (e.g., `bg-base-200`, `text-primary`).
            *   Illustrate where and how to use custom Aigora utility classes (e.g., `font-header` on headings, `shadow-aigora` on cards/buttons, `hover-lift`).
            *   Provide concrete examples of styled components (buttons, cards, forms, navigation) by showing the combination of classes used to achieve their appearance.

**IV. Static Assets:**

8.  **`assets/` directory (e.g., `aigora-icon.png`)**:
    *   **Purpose**: Storage for project-specific static files like images and icons.
    *   **Essential Information for LLM**: Files here are copied to `_site/assets/` and accessed via `/assets/your-file.ext`.

9.  **`public/` directory (e.g., `favicon.ico`)**:
    *   **Purpose**: Storage for files that need to be in the site's root directory.
    *   **Essential Information for LLM**: Files here are copied to `_site/` and accessed via `/your-file.ext`.

**Key Concepts for the LLM to Understand:**

*   **Theming Core**: The combination of `data-theme` on `<html>`, CSS custom properties in `style.css` that change based on this attribute, and JavaScript in `layout.njk` to manage the attribute and `localStorage`.
*   **Tailwind + DaisyUI Customization**: DaisyUI provides HTML structures/class names for components, but their visual appearance is entirely dictated by the Aigora theme defined in `tailwind.config.js` (tokens) and implemented in `style.css` (CSS variables and custom styles). DaisyUI's own themes are disabled.
*   **Utility-Driven Styling**: The primary method of styling is by applying utility classes (from Tailwind and custom ones in `style.css`) directly in the HTML.
*   **Build Pipeline**: Raw `.njk` and `src/css/style.css` files are processed by Eleventy and PostCSS/Tailwind to produce the final static site in `_site/`.

By providing an LLM with these files and emphasizing these key pieces of information and concepts, it should be well-equipped to generate new 11ty sites that accurately reflect the Aigora template's style, structure, and functionality.

---
