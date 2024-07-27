/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundColor: {
      'blue-opacity': 'rgba(31, 41, 55, 0.8)',
      brown: {
        600: '#A52A2A',
      }, // Fondo azul oscuro con opacidad
    },},
  },
  plugins: [],
}

