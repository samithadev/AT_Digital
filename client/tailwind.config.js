/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //Color Pallet
      colors:{
        primary: "#6B3CC9",
        secondary: "#F28D35",
        analogous1: "#6A44F2",
        analogous2: "#1CBDDD",
        triadic1: "#52378C",
        dark: "#78BF91",
        text: "#2F2F2F",
        textlight: "#545A75",
        textsub: "#9C9991",
        accent1: "#E2F2FE",
        accent2: "#FFF8E0",
        error: "#FF0335",
        success: "#5EB30B"
      },

      // Screen Sizes
      screens: {
        'sm': '375px',
  
        'md': '768px',
  
        'lg': '1200px',
  
        'xl': '1440px'
      }
    },
  },
  plugins: [],
}

