import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: '#0a0a0a', secondary: '#141414', tertiary: '#1a1a1a' },
        foreground: { DEFAULT: '#ffffff', secondary: '#a3a3a3', tertiary: '#737373' },
        accent: { primary: '#3b82f6', secondary: '#8b5cf6', tertiary: '#ec4899' },
        border: '#262626'
      },
      keyframes: {
        reveal: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      },
      animation: { reveal: 'reveal .9s ease-out forwards' }
    }
  },
  plugins: []
};

export default config;
