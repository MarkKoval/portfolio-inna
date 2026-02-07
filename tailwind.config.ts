import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6b35',
          600: '#e85a28',
        },
      },
    },
  },
  plugins: [],
};

export default config;
