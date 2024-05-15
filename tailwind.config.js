/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-black": '#09090B',
        "dark-grey": '#27272A',
        "hover-black": '#27272A',
        "hover-grey": '#F4F4F5',
        "hover-blue": 'rgba(23, 37, 84, 0.7)',
        "main-border": "#27272a",
        "card-color": " #020817",
        "card-border": "#27272A",
        "light-gray": "#f4f4f5",
        "border-gray": "#3e3e44",
        // --------new color--------
        "dark-grey": "#27272A",
        // "graycolor-black":"#828283",
        "dark-text-gray": "#9D9DA5",
        "dark-text-grey": "#a2a2a4",
        "dark-bg-btn": "#FAFAFA",
      },
      height: {
        "box": "348px",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      "2xl": '1440px'
    },
    borderWidth: {
      '1': '1px',
    },
    backgroundImage: {
      'Ai-image': "url('./src/assets/AI_tool_bg.png')",
      'light-ai-img': "url('./src/assets/ai_bg-light.jpg')"
    }

  },
  plugins: [],
}