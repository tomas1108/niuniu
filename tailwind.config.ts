import type { Config } from "tailwindcss";

const customColors = {
  primary: '#09183d',
  second: '#2e3b59',
  yellow: '#f2e4b5'
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'Tahoma', 'Arial', 'sans-serif']
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        "linear-gradient": "var(--button-linear-gradient)",
        'dark-900': '#1A1A1A',
        'dark-800': '#2C2C2C',
        'gray-700': '#3D3D3D',
        'gray-600': '#4E4E4E',
        'gold-500': '#D4AF37',
        'gold-400': '#FFD700',
        'gold-600': '#B8860B',

        ...customColors
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #f2ecb6, #a96f44)',
      },
      dropShadow: {
        "chip-poker-10K": "0 35px 35px var(--chip-poker-10K-selected)",
        "chip-poker-30K": "0 35px 35px var(--chip-poker-30K-selected)",
        "chip-poker-50K": "0 35px 35px var(--chip-poker-50K-selected)",
        "chip-poker-100K": "0 35px 35px var(--chip-poker-100K-selected)",
        "chip-poker-500K": "0 35px 35px var(--chip-poker-500K-selected)",
        "chip-poker-1M": "0 35px 35px var(--chip-poker-1M-selected)"
      },
      aspectRatio: {
        '616/466': '616 / 466',
      },
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
