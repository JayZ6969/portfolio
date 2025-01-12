import { light } from "@mui/material/styles/createPalette";
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
        black: "var(--black-color)",
        white: "var(--white-color)",
        grey: "car(--grey-color)",
        lightBlue: "var(--light-blue)",
        darkBlue: "var(--dark-blue)",
        orange: "var(--orange-color)",
      },
    },
    fontFamily: {
      'pp-mori-regular': ['PPMori-Regular', 'sans-serif'],
      'pp-mori-semibold': ['PPMori-SemiBold', 'sans-serif'],
      'pp-editorial-italic': ['PPEditorialNew-Italic', 'serif'],
      'inter': ['Inter', 'sans-serif'],
      'founders-grotesk-bold' : ['FoundersGrotesk-Bold', 'sans-serif'],
      'founders-grotesk-medium' : ['FoundersGrotesk-Medium', 'sans-serif'],
      'founders-grotesk-regular' : ['FoundersGrotesk-Regular', 'sans-serif'],
      'founders-grotesk-semibold' : ['FoundersGrotesk-Semibold', 'sans-serif'],
      'founders-grotesk-xcond-bold' : ['FoundersGrotesk-XCondensed-Bold', 'sans-serif'],
    },

  },
  plugins: [],
} satisfies Config;