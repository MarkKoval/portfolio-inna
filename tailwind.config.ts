import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1115',
        panel: '#171a20',
        muted: '#8e97a6',
        line: '#2b3340',
        accent: '#d8b47b'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)']
      }
    }
  },
  plugins: []
};

export default config;
