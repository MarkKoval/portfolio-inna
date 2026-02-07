import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)'
      },
      borderRadius: {
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
} satisfies Config;
