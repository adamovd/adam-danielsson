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
        primary: '#1B00E3',
        secondary: '#EEFC57',
        light: '#F5E3E0',
        dark: '#252323',
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
