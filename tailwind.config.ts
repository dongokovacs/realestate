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
        navy: "#0A1628",
        "navy-light": "#0D1E38",
        blue: "#1A3A6B",
        "blue-light": "#2E5FBF",
        "blue-electric": "#3B72E8",
        brown: "#8B5E3C",
        "brown-light": "#C49A72",
        "brown-pale": "#E8D5C0",
        "off-white": "#F5F0EB",
        "off-white-2": "#EDE5DC",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.32,0.72,0,1)",
        "expo-out": "cubic-bezier(0.16,1,0.3,1)",
        "back-out": "cubic-bezier(0.34,1.56,0.64,1)",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,114,232,0.25), 0 0 80px rgba(59,114,232,0.1)",
        "glow-brown": "0 0 30px rgba(139,94,60,0.3)",
        "card": "0 20px 60px rgba(0,0,0,0.4), 0 4px 20px rgba(0,0,0,0.3)",
        "card-hover": "0 30px 80px rgba(0,0,0,0.5), 0 8px 30px rgba(59,114,232,0.2)",
        "inner-highlight": "inset 0 1px 1px rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
