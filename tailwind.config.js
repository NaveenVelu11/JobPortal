/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#6482AD',
        lightBlue: '#7FA1C3',
        softBeige: '#E2DAD6',
        lightPink: '#F5EDED',
      },
    },
  },
  plugins: [],
};
