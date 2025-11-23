import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#faf8f5',
          100: '#f5f0e6',
          200: '#e8dcc7',
          300: '#d4c4a3',
          400: '#c9ae7a',
          500: '#b8965a',
          600: '#a67c4a',
          700: '#8a633f',
          800: '#725139',
          900: '#5f4532',
          950: '#352319',
        },
        gold: {
          50: '#fbf9f0',
          100: '#f7f2dd',
          200: '#efe3b8',
          300: '#e4cd8a',
          400: '#d9b560',
          500: '#c9a043',
          600: '#b08235',
          700: '#8f642e',
          800: '#77512c',
          900: '#644428',
          950: '#392313',
        },
        navy: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#ccd8eb',
          300: '#a0b7da',
          400: '#6d91c4',
          500: '#4a72ad',
          600: '#395a91',
          700: '#2f4876',
          800: '#2a3e62',
          900: '#1a2744',
          950: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #1a2744 0%, #2a3e62 50%, #1a2744 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c9a043 0%, #e4cd8a 50%, #c9a043 100%)',
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(201, 160, 67, 0.25)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
