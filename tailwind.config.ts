import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1326",
        surface: "#111a2f",
        "surface-soft": "#172139",
        "surface-card": "rgba(23, 31, 51, 0.64)",
        primary: "#8aebff",
        cyan: "#2fd9f4",
        violet: "#ddb7ff",
        green: "#68f5b8",
        muted: "#bbc9cd",
      },
      boxShadow: {
        glow: "0 0 40px rgba(47, 217, 244, 0.14)",
        card: "0 20px 70px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
