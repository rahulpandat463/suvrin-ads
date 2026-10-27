import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#141414",
          blue: "#002098",
          "blue-bright": "#1A3FD4",
          green: "#80B070",
          "green-deep": "#5F9450",
          mist: "#F5F7FA",
          line: "#E4E9F0",
        },
      },
      fontFamily: {
        heading: ["'Outfit'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,20,0.04), 0 8px 24px rgba(20,20,20,0.06)",
        lift: "0 4px 6px rgba(20,20,20,0.04), 0 16px 40px rgba(0,32,152,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
