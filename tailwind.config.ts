import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        accent: 'var(--accent)',
        line: 'var(--line)',
        card: 'var(--card)'
      },
      maxWidth: {
        content: '1280px'
      }
    }
  },
  plugins: []
};

export default config;
