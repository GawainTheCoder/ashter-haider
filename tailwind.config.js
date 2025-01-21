/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Now reference your .html files instead of .php
    './*.html',
    './**/*.html',  // if you have pages in subfolders
    './js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        // If you had a custom font set up
        'sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#1A202C',
        'secondary': '#4A5568',
        // ... other custom colors
      },
    },
  },
  darkMode: 'class', // Using the .dark class for dark mode
  plugins: [],
};

