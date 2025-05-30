module.exports = {
    content: ['./src/**/*.njk', './_includes/**/*.njk'],
    theme: {
        extend: {
            colors: {
                sage: '#5FB96A',
                lavender: '#A986C4',
                fog: '#EDEDED',
                charcoal: '#1A1A1A',
                slate: '#2C2C2C',
                darkText: '#1E1E1E',
                grayMeta: '#9A9A9A',
                softGray: '#C8C8C8',
                midGray: '#888888',
                errorRed: '#DB2955'
            },
            fontFamily: {
                header: ['"Cormorant SC"', 'serif'],
                body: ['Roboto', 'sans-serif'],
                meta: ['"Roboto Condensed"', 'sans-serif']
            },
            lineHeight: {
                'relaxed': '1.55',
            },
            borderRadius: {
                'xs': '4px',
                'sm': '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '28px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            maxWidth: {
                '3xl': '48rem', // 768px
                '5xl': '64rem', // 1024px
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                aigora: {
                    "primary": "#5FB96A",        // sage - CTAs, highlights
                    "secondary": "#A986C4",      // lavender - subtle focus color
                    "accent": "#5FB96A",         // sage (same as primary)
                    "neutral": "#9A9A9A",        // cool gray - for secondary text
                    "base-100": "#EDEDED",       // fog - page background
                    "base-200": "#FFFFFF",       // crisp white - card background
                    "base-300": "#E0E0E0",       // slightly darker for borders
                    "base-content": "#1E1E1E",   // dark charcoal - primary text
                    "info": "#3B82F6",           // keeping default blue for info
                    "success": "#5FB96A",        // sage
                    "warning": "#F59E0B",        // keeping default amber for warning
                    "error": "#DB2955",          // errorRed
                    // Custom CSS variables for text colors
                    "--bc": "270 2% 12%",        // base-content in HSL
                    "--nc": "0 0% 60%",          // neutral-content for secondary text
                },
            },
            {
                "aigora-dark": {
                    "primary": "#5FB96A",        // sage - stays the same
                    "secondary": "#A986C4",      // lavender - stays the same
                    "accent": "#5FB96A",         // sage (same as primary)
                    "neutral": "#888888",        // mid gray - for tertiary text
                    "base-100": "#1A1A1A",       // deep charcoal - page background
                    "base-200": "#2C2C2C",       // modern slate - card background
                    "base-300": "#3A3A3A",       // slightly lighter for borders
                    "base-content": "#E0E0E0",   // light gray - primary text
                    "info": "#3B82F6",           // keeping default blue for info
                    "success": "#5FB96A",        // sage
                    "warning": "#F59E0B",        // keeping default amber for warning
                    "error": "#DB2955",          // errorRed
                    // Custom CSS variables for text colors
                    "--bc": "0 0% 88%",          // base-content in HSL
                    "--nc": "0 0% 53%",          // neutral-content for tertiary text
                },
            },
        ],
        darkTheme: false, // Disable automatic dark theme detection
        logs: false, // Disable logs
    },
};