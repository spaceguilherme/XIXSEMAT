/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        semat: {
          'dark': '#001828', // Fundo azul escuro
          'medio': '#017282', // Laranja dos botões/títulos
          'light': '#74D2DE',
          'sec1': '#FF8724',
          'sec2': '#D44A17',
        },
      },
    },
  },
  plugins: [],
}