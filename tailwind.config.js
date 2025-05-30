module.exports = {
    content: ['./src/**/*.njk', './_includes/**/*.njk'],
    theme: {
        extend: {
            colors: {
                // Aigora Design System Colors
                'aigora-sage': '#5FB96A',
                'aigora-lavender': '#A986C4',
                'aigora-fog': '#EDEDED',
                'aigora-charcoal': '#1A1A1A',
                'aigora-slate': '#2C2C2C',
                'aigora-dark-text': '#1E1E1E',
                'aigora-gray-meta': '#9A9A9A',
                'aigora-soft-gray': '#C8C8C8',
                'aigora-mid-gray': '#888888',
                'aigora-error': '#DB2955'
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
        themes: false, // Disable all themes and use custom CSS
        base: false,
        styled: true,
        utils: true,
    },
};