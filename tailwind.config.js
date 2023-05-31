/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      // => @media (min-width: 0px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1248px",
      // => @media (min-width: 1248px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        source: ["Source Sans Pro", "sans-serif"],
        sintony: ["Sintony", "sans-serif"],
        source2: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        "primary-black": "#000000",
        "primary-yellow": "#FFC600",
      },
    },
  },
  plugins: [],
};
