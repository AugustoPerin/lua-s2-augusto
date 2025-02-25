import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        "dancing-script": ["var(--font-dancing-script)"],
        parisienne: ["var(--font-parisienne)"],
      },
      textShadow: {
        sm: "0 0 5px rgba(255, 255, 255, 0.5), 1px 1px 4px rgba(0, 0, 0, 0.6)",
        lg: "0 0 10px rgba(255, 255, 255, 0.8), 2px 2px 8px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      )
    },
  ],
} satisfies Config

export default config

