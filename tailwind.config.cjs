/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark' : '#0A0A0A',
        'secondary' : '#FB2576'
      },
      fontFamily : {
        'mont' : ['Montserrat'],
        'logo' : ['Unbounded']
      },
      backgroundImage : {
        'landing-bg' : "url('./assets/landingpage-bg.png')",
        'bookings-bg' : "url('./assets/bookings-bg.png')"

      }
    },
  },
  plugins: [],
}
