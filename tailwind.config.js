/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        inter: ['inter', 'serif'],
      },
    },
  },
  plugins: [],
};
