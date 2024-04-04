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
      'sm': [{'min': '350px', 'max': '639px'}], // Define um range para 'sm'
      'md': [{'min': '640px', 'max': '767px'}], // Define um range para 'md'
      'lg': [{'min': '768px', 'max': '1023px'}], // Define um range para 'lg'
      'xl': [{'min': '1024px', 'max': '1279px'}], // Define um range para 'xl'
      '2xl': [{'min': '1280px', 'max': '1535px'}], // Define um range para '2xl'
      '3xl': {'min': '1536px'},
    },
    extend: {
      colors: {
        'primary-500': '#93D500', // Cor personalizada primary-500
      },

    },
  },
  plugins: [],
}