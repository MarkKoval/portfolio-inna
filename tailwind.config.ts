import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0c0f12',
        panel: '#11161b',
        text: '#f2efe8',
        muted: '#9a9ea6',
        accent: '#d1a267'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      }
    }
  },
  plugins: []
};

export default config;
