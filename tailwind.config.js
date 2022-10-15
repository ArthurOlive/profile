/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'reluko' : "'Ruluko', sans-serif",
        'sintony' : "'Sintony', sans-serif"
      },
      colors : {
        'purple' : '#341567',
        'purple-light' : '#4E1E9C'
      },
      backgroundImage : {
        'text-gradient' : 'linear-gradient(90deg, #00FF47 -3.5%, #7000FF 100%)',
        'background-gradient' : 'linear-gradient(180deg, rgba(78, 30, 156, 0.2) 0%, rgba(5, 0, 255, 0.2) 100%), linear-gradient(112.83deg, #1C0740 0%, #490046 99.48%)'
      }
    },
    
  },
  plugins: [],
}