/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '750px'},
      'desktop': '751px',
    },
    extend: {
      colors: {
        'primary-500': '#93D500', // Cor personalizada primary-500
      },

    },
  },
  plugins: [],
}