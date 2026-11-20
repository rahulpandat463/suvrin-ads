import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data.ts",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#141414",
          blue: "#0062fb", // Official Suvrin Blue from website
          "blue-bright": "#1a75ff",
          "blue-hover": "#0052d6",
          green: "#83B773",
          "green-deep": "#5F9450",
          mist: "#F5F7FA",
          line: "#E4E9F0",
        },
      },
      fontFamily: {
        heading: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,20,0.04), 0 8px 24px rgba(20,20,20,0.06)",
        lift: "0 4px 6px rgba(20,20,20,0.04), 0 16px 40px rgba(0,98,251,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
