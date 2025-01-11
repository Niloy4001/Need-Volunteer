/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on your chosen palette
        background: '#E3F2FD', // Soft Light Blue
        primary: '#2196F3',    // Vivid Blue
        secondary: '#4CAF50',  // Green
        text: '#0D47A1',       // Navy Blue
        accent: '#FFC107',     // Amber
      },
    },
    fontFamily: {
      'roboto': ['Raleway'],
    }
  },
  plugins: [
    require('daisyui'),
  ],
}