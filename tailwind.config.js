/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: '#009B72',
        orange: '#F58F29',
        purple: '#A4B0F5',
        light: {
          100: '#FFF8EB',
          200: '#FFF1D6',
          300: '#FFEBC2',
          400: '#F8F4E3',
        },
        dark: {
          100: '#0F1108',
          200: '#30323D',
        },
      },
      fontFamily: {
        sans: ['Space-Grotesk-Regular'],
        'sans-light': ['Space-Grotesk-Light'],
        'sans-medium': ['Space-Grotesk-Medium'],
        'sans-semibold': ['Space-Grotesk-SemiBold'],
        'sans-bold': ['Space-Grotesk-Bold'],
        serif: ['Analogist'],
      },
    },
  },
  plugins: [],
};
