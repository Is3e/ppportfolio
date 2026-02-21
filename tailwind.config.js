/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Cela applique "TT Firs Neue" partout par défaut
        sans: ['"TT Firs Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}