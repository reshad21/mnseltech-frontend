import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: {
          DEFAULT: "#FF9143", // Main orange color
          light: "#FFB347", // Optional light variant
          dark: "#CC7A00", // Optional dark variant
        },
        secondary: {
          DEFAULT: "#E5E6EB",
          light: "#262A2C",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "80px", fontWeight: "700" }], // Syne Bold
        h2: ["64px", { lineHeight: "72px", fontWeight: "700" }], // Syne
        h3: ["56px", { lineHeight: "64px", fontWeight: "700" }], // Syne
        h4: ["24px", { lineHeight: "32px", fontWeight: "400" }], // Rubik Regular
        p: ["18px", { lineHeight: "32px", fontWeight: "400" }], // Rubik Regular
        bodyLarge: ["18px", { lineHeight: "28px", fontWeight: "400" }], // Rubik Regular
        bodyMedium: ["16px", { lineHeight: "24px", fontWeight: "400" }], // Rubik Regular
        button: ["16px", { lineHeight: "24px", fontWeight: "400" }], // Rubik Regular
      },
      screens: {
        sm: "640px", // Small screens (mobile)
        md: "768px", // Medium screens (tablet)
        lg: "1024px", // Large screens (laptop)
        xl: "1280px", // Extra-large screens (desktop)
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
