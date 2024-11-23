import type { Config } from "tailwindcss";

export default {
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
      },
    },
    fontFamily: {
      'pp-mori-regular': ['PPMori-Regular', 'sans-serif'],
      'pp-mori-semibold': ['PPMori-SemiBold', 'sans-serif'],
      'pp-editorial-italic': ['PPEditorialNew-Italic', 'serif'],
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config;