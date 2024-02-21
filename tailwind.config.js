/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background : "#1E1E1E",
        borderColor : "#7E7E7E",
        fontColor : "#DADADA"
      }
    },
  },
  plugins: [],
}

