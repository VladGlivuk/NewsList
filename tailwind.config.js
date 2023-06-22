/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
      },
    },
    fontFamily: {
      sans: ['montserrat', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
