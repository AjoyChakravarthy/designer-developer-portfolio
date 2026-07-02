import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surface tones — near-black with a faint green cast
        ink: {
          DEFAULT: "#0a0c0b",
          900: "#0a0c0b",
          800: "#0e1110",
          700: "#141816",
          card: "#0f1312",
          line: "#1d2422",
        },
        // Acid lime — the primary accent
        lime: {
          DEFAULT: "#c4f82a",
          bright: "#caff33",
          dim: "#9bc41f",
        },
        // Hot pink — secondary accent (OBJECT/03, etc.)
        flush: {
          DEFAULT: "#ff2e7e",
          dim: "#d11f63",
        },
        chalk: "#f4f5f2", // off-white text
        ash: "#8b938f", // muted mono labels
        smoke: "#5b635f", // dimmest text
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
        wide2: "0.32em",
      },
      maxWidth: {
        site: "1600px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
