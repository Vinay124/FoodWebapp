/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryOrange: "#1E2749",
        PrimaryYellow: "#FFC529",
        TypographyColor: "#1A1026",
        GrayColor:"#9A9FAE" ,
      },
      fontFamily:{
        nunito: ["nunito", "sans-serif"],
      }
    },
  },  
  plugins: [],
}