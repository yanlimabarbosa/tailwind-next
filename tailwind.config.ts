import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
