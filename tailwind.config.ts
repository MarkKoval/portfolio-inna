import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101114",
        sand: "#e7e3dc",
        copper: "#ba8f62"
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
