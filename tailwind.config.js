/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-black": '#09090b',
        "hover-black": '#27272A',
        "hover-grey": '#F4F4F5',
        "hover-blue": 'rgba(23, 37, 84, 0.7)',
        "main-border":"#27272a",
        "dark-text": "#6E6D71",
        "light-bg": "#E2E8F0"
      },
      height: {
        "box":"348px",
      }  
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    borderWidth: {
      '1': '1px',
    }
  },
  plugins: [],
}