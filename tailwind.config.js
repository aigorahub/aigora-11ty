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
                    "primary": "#5FB96A",        // sage
                    "secondary": "#A986C4",      // lavender  
                    "accent": "#5FB96A",         // sage
                    "neutral": "#1A1A1A",        // charcoal
                    "base-100": "#EDEDED",       // fog (light background)
                    "base-200": "#FFFFFF",       // white (card background)
                    "base-300": "#E0E0E0",       // slightly darker
                    "base-content": "#1E1E1E",   // darkText
                    "info": "#2C2C2C",           // slate
                    "success": "#5FB96A",        // sage
                    "warning": "#A986C4",        // lavender
                    "error": "#DB2955",          // errorRed
                },
                "aigora-dark": {
                    "primary": "#5FB96A",        // sage (same)
                    "secondary": "#A986C4",      // lavender (same)
                    "accent": "#5FB96A",         // sage (same)
                    "neutral": "#E0E0E0",        // light gray
                    "base-100": "#1A1A1A",       // charcoal (dark background)
                    "base-200": "#2C2C2C",       // slate (card background)
                    "base-300": "#3A3A3A",       // slightly lighter
                    "base-content": "#E0E0E0",   // light gray text
                    "info": "#C8C8C8",           // soft gray
                    "success": "#5FB96A",        // sage (same)
                    "warning": "#A986C4",        // lavender (same)
                    "error": "#DB2955",          // errorRed (same)
                },
            },
        ],
    },
};