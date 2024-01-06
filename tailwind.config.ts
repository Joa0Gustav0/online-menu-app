import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#fbc00f",
        pizza: "#EF2A2D",
        acai: "#4d3d87",
      },
      keyframes: {
        pop: {
          "0%": {
            transform: "scale(100%, 100%)",
          },
          "25%": {
            transform: "scale(85%, 85%)"
          },
          "75%": {
            transform: "scale(130%, 130%)"
          },
          "100%": {
            transform: "scale(115%, 115%)"
          }
        },
        fade_In: {
          "0%": {
            opacity: "0"
          },
          "25%": {
            opacity: "1"
          },
          "75%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0"
          }
        }
      },
      animation: {
        button_hover: "pop linear .25s normal",
        fade_In: "fade_In linear 4.75s infinite"
      }
    },
  },
  plugins: [],
};
export default config;
