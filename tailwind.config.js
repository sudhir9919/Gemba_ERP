/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0 4px 30px rgba(255, 255, 255, 0.5)', // White shadow
      },
      fontFamily: {
        sans: ['"Edu AU VIC WA NT Guides"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#007bff', // Overwrite the default 'primary' color
        'secondary': '#6c757d',
        'dark-green': '#1a9684',
        'light-green': '#cef2ed',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #6bd1b6, #74d5c1, #7ed9cb, #8adcd5, #96e0dd, #a1e2e1, #abe4e5, #b6e6e8, #c0e8e9, #c9eaea, #d3ebec, #dceded)',
      },
      animation: {
        'writing': 'writing 3.5s steps(51) infinite',
      },
      keyframes: {
        writing: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
      },
      plugins: [
        require('tailwind-scrollbar'),
      ],
    },
  },
  plugins: [],
}
