/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Roboto Mono", "Menlo", "Monaco", "Liberation Mono", "DejaVu Sans Mono", "Courier New"],
      },
      colors: {
        vercel: {
          black: "#171717",
          gray: {
            900: "#171717",
            600: "#4d4d4d",
            500: "#666666",
            400: "#808080",
            100: "#ebebeb",
            50: "#fafafa",
          },
        },
        accent: {
          blue: "#0a72ef",
          pink: "#de1d8d",
          red: "#ff5b4f",
        },
        link: "#0072f5",
        badge: {
          bg: "#ebf5ff",
          text: "#0068d6",
        },
      },
      boxShadow: {
        "vercel-border": "0px 0px 0px 1px rgba(0,0,0,0.08)",
        "vercel-card": "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 2px rgba(0,0,0,0.04), 0px 8px 8px -8px rgba(0,0,0,0.04), inset 0px 0px 0px 1px #fafafa",
        "vercel-card-hover": "0px 0px 0px 1px rgba(0,0,0,0.12), 0px 4px 8px rgba(0,0,0,0.06), 0px 12px 12px -8px rgba(0,0,0,0.06), inset 0px 0px 0px 1px #fafafa",
        "vercel-ring": "0px 0px 0px 1px rgb(235,235,235)",
        "dark-border": "0px 0px 0px 1px rgba(255,255,255,0.1)",
        "dark-card": "0px 0px 0px 1px rgba(255,255,255,0.1), 0px 2px 2px rgba(0,0,0,0.2), 0px 8px 8px -8px rgba(0,0,0,0.3), inset 0px 0px 0px 1px rgba(255,255,255,0.04)",
        "dark-card-hover": "0px 0px 0px 1px rgba(255,255,255,0.15), 0px 4px 8px rgba(0,0,0,0.3), 0px 12px 12px -8px rgba(0,0,0,0.3), inset 0px 0px 0px 1px rgba(255,255,255,0.06)",
      },
      letterSpacing: {
        "display": "-0.06em",
        "heading": "-0.04em",
        "subheading": "-0.04em",
        "card-title": "-0.04em",
        "body-tight": "-0.02em",
      },
      borderRadius: {
        "vercel": "8px",
        "vercel-lg": "12px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
