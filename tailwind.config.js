/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { 
        bgColor: 'var(--bgColor)',
        textColor: 'var(--textColor)'
      }
    },
  },
  plugins: [],
}

