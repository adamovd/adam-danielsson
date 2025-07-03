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
        sans: ['Satoshi-Regular', 'ui-sans-serif', 'system-ui'],
        'sans-light': ['Satoshi-Light', 'ui-sans-serif', 'system-ui'],
        'sans-medium': ['Satoshi-Medium', 'ui-sans-serif', 'system-ui'],
        'sans-semibold': ['Satoshi-Bold', 'ui-sans-serif', 'system-ui'],
        'sans-bold': ['Satoshi-Black', 'ui-sans-serif', 'system-ui'],
        serif: ['Analogist', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};
