/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%,#a55fa280 0,#040607 100%)'
      },
      animation: {
        text: 'text 10s ease infinite',
        slideUpAndFade: 'slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        slideDownAndFade: 'slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        slideRightAndFade: 'slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        slideLeftAndFade: 'slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      colors: {
        text: {
          100: '#e2ecee',
          200: '#d6d8dc',
          300: '#bac0c7',
          400: '#9fa8b5',
          500: '#8493a2',
          600: '#697e8f',
          700: '#4e677c',
          800: '#334f69',
          900: '#183756',
        },
        background: {
          100: '#040607',
          200: '#1d2226',
          300: '#373d41',
          400: '#51585c',
          500: '#6b7276',
          600: '#858b8f',
          700: '#9fa5a9',
          800: '#b9bfc3',
          900: '#d3d8dc',
        },
        primary: {
          100: '#a55fa2',
          200: '#9d4f92',
          300: '#944082',
          400: '#8c306d',
          500: '#83295d',
          600: '#7a234d',
          700: '#711d3d',
          800: '#69172d',
          900: '#600f1e',
        },
        secondary: {
          100: '#111d1d',
          200: '#293434',
          300: '#414a4a',
          400: '#707777',
          500: '#888e8e',
          600: '#a0a5a5',
          700: '#b8bbbb',
          800: '#cfd2d2',
          900: '#e7e8e8',
        },
        accent: {
          100: '#636539',
          200: '#575b32',
          300: '#4b502a',
          400: '#3f451f',
          500: '#333a17',
          600: '#272f10',
          700: '#1b2408',
          800: '#0f1803',
          900: '#030c00',
        },
      }
    },
    darkMode: 'class',
    plugins: [require("@tailwindcss/typography")],
  }
}
