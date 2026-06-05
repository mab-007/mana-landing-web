import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MANA brand palette — deep trustworthy "ink" blue with a warm
        // Filipino-sun gold accent.
        ink: {
          DEFAULT: "#0B1B3A",
          50: "#F2F5FB",
          100: "#E2E9F5",
          200: "#C2D0E9",
          300: "#94AAD3",
          400: "#5E7CB4",
          500: "#3A5A98",
          600: "#2A437A",
          700: "#1E3160",
          800: "#152347",
          900: "#0B1B3A",
        },
        brand: {
          DEFAULT: "#2563EB",
          50: "#EFF5FF",
          100: "#DBE7FE",
          200: "#BFD3FE",
          300: "#93B4FD",
          400: "#608CFA",
          500: "#3B66F5",
          600: "#2563EB",
          700: "#1D4FD1",
          800: "#1E40AA",
          900: "#1E3A86",
        },
        sun: {
          DEFAULT: "#FBBF24",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 27, 58, 0.18)",
        glow: "0 0 0 1px rgba(37,99,235,0.08), 0 20px 60px -20px rgba(37,99,235,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
