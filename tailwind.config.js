/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f12',
        panel: '#17171d',
        text: '#f2f2f0',
        muted: '#9ea0a8',
        accent: '#9fb4d3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
