import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Exact tokens from the MANA design system.
        // papel = cream paper, gabi = navy ink, tanglaw = orange.
        papel: {
          50: "#FAF6EF",
          100: "#F2EBDD",
          200: "#E5DBC5",
          400: "#9B937F",
          700: "#2C2A24",
          900: "#171612",
        },
        gabi: {
          50: "#EEF1F8",
          100: "#C8D2E5",
          200: "#94A4C7",
          400: "#3E5388",
          600: "#1F305C",
          800: "#101D3F",
          900: "#0A1228",
        },
        tanglaw: {
          50: "#FBEEE9",
          100: "#F5D2C5",
          200: "#EFA98F",
          400: "#E85D2C",
          600: "#B8421B",
          800: "#7A2A11",
          900: "#4D1A0A",
        },
        success: {
          50: "#E8F4ED",
          400: "#4FB477",
          600: "#1F8B4D",
        },
        // `ink` kept as an alias of the navy scale so existing ink-* usages
        // resolve to the brand navy.
        ink: {
          50: "#EEF1F8",
          100: "#C8D2E5",
          200: "#94A4C7",
          400: "#3E5388",
          600: "#1F305C",
          700: "#101D3F",
          800: "#101D3F",
          900: "#0A1228",
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 18, 40, 0.12)",
        glow: "0 20px 60px -24px rgba(10, 18, 40, 0.35)",
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
